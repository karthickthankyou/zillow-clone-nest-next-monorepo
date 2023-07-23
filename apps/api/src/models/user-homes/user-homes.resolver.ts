import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { UserHomesService } from './user-homes.service'
import { UserHome } from './entities/user-home.entity'
import { FindManyUserHomeArgs, FindUniqueUserHomeArgs } from './dto/find.args'
import { CreateUserHomeInput } from './dto/create-user-home.input'
import { UpdateUserHomeInput } from './dto/update-user-home.input'
import { Property } from '../properties/entities/property.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@zillow-org/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => UserHome)
export class UserHomesResolver {
  constructor(
    private readonly userHomesService: UserHomesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => UserHome)
  createUserHome(
    @Args('createUserHomeInput') args: CreateUserHomeInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.buyerUid)
    return this.userHomesService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [UserHome], { name: 'userHomes' })
  findAll(@Args() args: FindManyUserHomeArgs) {
    return this.userHomesService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => UserHome, { name: 'userHome' })
  findOne(@Args() args: FindUniqueUserHomeArgs, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.where.buyerUid_propertyId.buyerUid)
    return this.userHomesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => UserHome)
  updateUserHome(
    @Args('updateUserHomeInput') args: UpdateUserHomeInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.buyerUid)

    return this.userHomesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => UserHome)
  removeUserHome(
    @Args() args: FindUniqueUserHomeArgs,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.where.buyerUid_propertyId.buyerUid)
    return this.userHomesService.remove(args)
  }

  @ResolveField(() => Property, { nullable: true })
  async property(@Parent() parent: UserHome) {
    return this.prisma.property.findUnique({
      where: { id: parent.propertyId },
    })
  }
  @ResolveField(() => Property, { nullable: true })
  async buyer(@Parent() parent: UserHome) {
    return this.prisma.buyer.findUnique({
      where: { uid: parent.buyerUid },
    })
  }
}
