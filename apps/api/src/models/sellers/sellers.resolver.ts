import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { SellersService } from './sellers.service'
import { Seller } from './entities/seller.entity'
import { FindManySellerArgs, FindUniqueSellerArgs } from './dto/find.args'
import { CreateSellerInput } from './dto/create-seller.input'
import { UpdateSellerInput } from './dto/update-seller.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Property } from '../properties/entities/property.entity'
import { GroupedMessages } from '../messages/entities/message.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@zillow-org/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Seller)
export class SellersResolver {
  constructor(
    private readonly sellersService: SellersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Seller)
  createSeller(
    @Args('createSellerInput') args: CreateSellerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.sellersService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Seller], { name: 'sellers' })
  findAll(@Args() args: FindManySellerArgs) {
    return this.sellersService.findAll(args)
  }

  @Query(() => Seller, { name: 'seller' })
  findOne(@Args() args: FindUniqueSellerArgs) {
    return this.sellersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Seller)
  updateSeller(
    @Args('updateSellerInput') args: UpdateSellerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)

    return this.sellersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Seller)
  removeSeller(
    @Args() args: FindUniqueSellerArgs,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.where.uid)
    return this.sellersService.remove(args)
  }

  @ResolveField(() => [Property])
  properties(@Parent() parent: Seller) {
    return this.prisma.property.findMany({
      where: { sellerUid: { equals: parent.uid } },
    })
  }

  @AllowAuthenticated()
  @ResolveField(() => [GroupedMessages])
  async messages(@Parent() parent: Seller, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, parent.uid)
    const groupedMessages = (await this.prisma.$queryRaw`
    SELECT "propertyId", array_agg(row_to_json("Message")) AS "messages"
    FROM "Message"
    WHERE "sellerUid" = ${parent.uid}
    GROUP BY "propertyId"
    ORDER BY "propertyId" ASC
    LIMIT 10
    `) as GroupedMessages[]

    return groupedMessages.map((group) => {
      console.log('messages: ', group.messages)
      return { propertyId: group.propertyId, messages: group.messages }
    })
  }
}
