import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { AgentsService } from './agents.service'
import { Agent } from './entities/agent.entity'
import { FindManyAgentArgs, FindUniqueAgentArgs } from './dto/find.args'
import { CreateAgentInput } from './dto/create-agent.input'
import { UpdateAgentInput } from './dto/update-agent.input'
import { GroupedMessages } from '../messages/entities/message.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Property } from '../properties/entities/property.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/guards'

@Resolver(() => Agent)
export class AgentsResolver {
  constructor(
    private readonly agentsService: AgentsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Agent)
  createAgent(
    @Args('createAgentInput') args: CreateAgentInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)

    return this.agentsService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Agent], { name: 'agents' })
  findAll(@Args() args: FindManyAgentArgs) {
    return this.agentsService.findAll(args)
  }

  @Query(() => Agent, { name: 'agent' })
  findOne(@Args() args: FindUniqueAgentArgs) {
    return this.agentsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Agent)
  updateAgent(
    @Args('updateAgentInput') args: UpdateAgentInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.agentsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Agent)
  removeAgent(@Args() args: FindUniqueAgentArgs, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.where.uid)
    return this.agentsService.remove(args)
  }

  @AllowAuthenticated()
  @ResolveField(() => [GroupedMessages], { nullable: true })
  async messages(@Parent() parent: Agent, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, parent.uid)

    const groupedMessages = (await this.prisma.$queryRaw`
    SELECT "propertyId", array_agg(row_to_json("Message")) AS "messages"
    FROM "Message"
    WHERE "agentUid" = ${parent.uid}
    GROUP BY "propertyId"
    ORDER BY "propertyId" ASC
    LIMIT 10
    `) as GroupedMessages[]

    return groupedMessages.map((group) => {
      return { propertyId: group.propertyId, messages: group.messages }
    })
  }

  @ResolveField(() => [Property], { nullable: true })
  async properties(@Parent() parent: Agent) {
    return this.prisma.property.findMany({
      where: { agents: { some: { uid: parent.uid } } },
    })
  }
}
