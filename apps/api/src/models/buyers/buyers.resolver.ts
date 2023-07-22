import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { BuyersService } from './buyers.service'
import { Buyer } from './entities/buyer.entity'
import { FindManyBuyerArgs, FindUniqueBuyerArgs } from './dto/find.args'
import { CreateBuyerInput } from './dto/create-buyer.input'
import { UpdateBuyerInput } from './dto/update-buyer.input'
import { GroupedMessages } from '../messages/entities/message.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { View } from '../views/entities/view.entity'
import { UserHome } from '../user-homes/entities/user-home.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@zillow-org/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Buyer)
export class BuyersResolver {
  constructor(
    private readonly buyersService: BuyersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Buyer)
  createBuyer(
    @Args('createBuyerInput') args: CreateBuyerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.buyersService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Buyer], { name: 'buyers' })
  findAll(@Args() args: FindManyBuyerArgs) {
    return this.buyersService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => Buyer, { name: 'buyer' })
  findOne(@Args() args: FindUniqueBuyerArgs) {
    return this.buyersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Buyer)
  updateBuyer(
    @Args('updateBuyerInput') args: UpdateBuyerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)

    return this.buyersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Buyer)
  removeBuyer(@Args() args: FindUniqueBuyerArgs, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.where.uid)

    return this.buyersService.remove(args)
  }

  @AllowAuthenticated()
  @ResolveField(() => [GroupedMessages])
  async messages(@Parent() parent: Buyer, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, parent.uid)

    const groupedMessages = (await this.prisma.$queryRaw`
    SELECT "propertyId", array_agg(row_to_json("Message")) AS "messages"
    FROM "Message"
    WHERE "buyerUid" = ${parent.uid}
    GROUP BY "propertyId"
    ORDER BY "propertyId" ASC
    LIMIT 10
    `) as GroupedMessages[]

    return groupedMessages.map((group) => {
      return { propertyId: group.propertyId, messages: group.messages }
    })
  }
  @AllowAuthenticated()
  @ResolveField(() => [View])
  async views(@Parent() parent: Buyer, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, parent.uid)

    return this.prisma.view.findMany({
      where: { buyerUid: parent.uid },
      distinct: ['propertyId'],
      orderBy: [{ createdAt: 'desc' }],
    })
  }

  @AllowAuthenticated()
  @ResolveField(() => [UserHome])
  async interests(@Parent() parent: Buyer, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, parent.uid)

    return this.prisma.userHome.findMany({
      where: { buyerUid: parent.uid },
      orderBy: [{ createdAt: 'desc' }],
    })
  }
}
