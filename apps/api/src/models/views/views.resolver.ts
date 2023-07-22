import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ViewsService } from './views.service'
import { View } from './entities/view.entity'
import { FindManyViewArgs, FindUniqueViewArgs } from './dto/find.args'
import { CreateViewInput } from './dto/create-view.input'
import { UpdateViewInput } from './dto/update-view.input'
import { Property } from '../properties/entities/property.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from '@zillow-org/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => View)
export class ViewsResolver {
  constructor(
    private readonly viewsService: ViewsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => View)
  createView(
    @Args('createViewInput') args: CreateViewInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.buyerUid)

    return this.viewsService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [View], { name: 'views' })
  findAll(@Args() args: FindManyViewArgs) {
    return this.viewsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => View, { name: 'view' })
  async findOne(
    @Args() args: FindUniqueViewArgs,
    @GetUser() user: GetUserType,
  ) {
    const view = await this.prisma.view.findUnique(args)
    checkRowLevelPermission(user, view.buyerUid)

    return this.viewsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => View)
  async updateView(
    @Args('updateViewInput') args: UpdateViewInput,
    @GetUser() user: GetUserType,
  ) {
    const view = await this.prisma.view.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, view.buyerUid)
    return this.viewsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => View)
  async removeView(
    @Args() args: FindUniqueViewArgs,
    @GetUser() user: GetUserType,
  ) {
    const view = await this.prisma.view.findUnique(args)
    checkRowLevelPermission(user, view.buyerUid)
    return this.viewsService.remove(args)
  }

  @ResolveField(() => Property)
  async property(@Parent() parent: View) {
    return this.prisma.property.findUnique({
      where: { id: parent.propertyId },
    })
  }
  @ResolveField(() => Property)
  async buyer(@Parent() parent: View) {
    return this.prisma.buyer.findUnique({
      where: { uid: parent.buyerUid },
    })
  }
}
