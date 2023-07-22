import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputUid } from 'src/common/dtos/common.input'
import { AgentOrderByWithRelationInput } from './orderBy.args'
import { AgentWhereInput, AgentWhereUniqueInput } from './where.args'

registerEnumType(Prisma.AgentScalarFieldEnum, {
  name: 'AgentScalarFieldEnum',
})

@ArgsType()
export class FindManyAgentArgs
  implements Required<Omit<Prisma.AgentFindManyArgs, 'include' | 'select'>>
{
  @Field(() => AgentWhereInput, { nullable: true })
  where: AgentWhereInput
  @Field(() => [AgentOrderByWithRelationInput], { nullable: true })
  orderBy: AgentOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputUid, { nullable: true })
  cursor: WhereUniqueInputUid
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.AgentScalarFieldEnum], { nullable: true })
  distinct: Prisma.AgentScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueAgentArgs {
  @Field({ nullable: true })
  where: AgentWhereUniqueInput
}
