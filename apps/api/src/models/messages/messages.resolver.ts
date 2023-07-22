import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { MessagesService } from './messages.service'
import { Message } from './entities/message.entity'
import { FindManyMessageArgs, FindUniqueMessageArgs } from './dto/find.args'
import { CreateMessageInput } from './dto/create-message.input'

import { Property } from '../properties/entities/property.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Buyer } from '../buyers/entities/buyer.entity'
import { Agent } from '../agents/entities/agent.entity'
import { Seller } from '../sellers/entities/seller.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@zillow-org/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Message)
export class MessagesResolver {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Message)
  createMessage(
    @Args('createMessageInput') args: CreateMessageInput,
    @GetUser() user: GetUserType,
  ) {
    // Additional checking required. What if the user pretends to be the other user?
    checkRowLevelPermission(user, [
      args.agentUid,
      args.buyerUid,
      args.sellerUid,
    ])

    return this.messagesService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Message], { name: 'messages' })
  findAll(@Args() args: FindManyMessageArgs) {
    return this.messagesService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => Message, { name: 'message' })
  async findOne(
    @Args() args: FindUniqueMessageArgs,
    @GetUser() user: GetUserType,
  ) {
    const message = await this.messagesService.findOne(args)
    checkRowLevelPermission(user, [
      message.agentUid,
      message.buyerUid,
      message.sellerUid,
    ])
    return message
  }

  @AllowAuthenticated()
  @Mutation(() => Message)
  async removeMessage(
    @Args() args: FindUniqueMessageArgs,
    @GetUser() user: GetUserType,
  ) {
    const message = await this.messagesService.findOne(args)
    checkRowLevelPermission(user, [
      message.agentUid,
      message.buyerUid,
      message.sellerUid,
    ])
    return this.messagesService.remove(args)
  }

  @ResolveField(() => Property)
  async property(@Parent() parent: Message) {
    return this.prisma.property.findUnique({
      where: { id: parent.propertyId },
    })
  }

  @ResolveField(() => Buyer, { nullable: true })
  async buyer(@Parent() parent: Message) {
    return this.prisma.buyer.findUnique({
      where: { uid: parent.buyerUid },
    })
  }

  @ResolveField(() => Agent, { nullable: true })
  async agent(@Parent() parent: Message) {
    return this.prisma.agent.findUnique({
      where: { uid: parent.agentUid },
    })
  }
  @ResolveField(() => Seller, { nullable: true })
  async seller(@Parent() parent: Message) {
    return this.prisma.seller.findUnique({
      where: { uid: parent.sellerUid },
    })
  }
}
