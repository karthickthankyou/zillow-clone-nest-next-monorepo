import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, StringFilter } from 'src/common/dtos/common.input'
import { MessageListRelationFilter } from 'src/models/messages/dto/where.args'
import { PropertyListRelationFilter } from 'src/models/properties/dto/where.args'

@InputType()
export class AgentWhereUniqueInput
  implements Required<Prisma.AgentWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class AgentWhereInput implements Required<Prisma.AgentWhereInput> {
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => PropertyListRelationFilter, { nullable: true })
  properties: PropertyListRelationFilter
  @Field(() => MessageListRelationFilter, { nullable: true })
  messages: MessageListRelationFilter

  @Field(() => [AgentWhereInput], { nullable: true })
  AND: AgentWhereInput[]
  @Field(() => [AgentWhereInput], { nullable: true })
  OR: AgentWhereInput[]
  @Field(() => [AgentWhereInput], { nullable: true })
  NOT: AgentWhereInput[]
}

@InputType()
export class AgentListRelationFilter {
  @Field(() => AgentWhereInput)
  every?: AgentWhereInput
  @Field(() => AgentWhereInput)
  some?: AgentWhereInput
  @Field(() => AgentWhereInput)
  none?: AgentWhereInput
}

@InputType()
export class AgentRelationFilter {
  @Field(() => AgentWhereInput)
  is?: AgentWhereInput
  @Field(() => AgentWhereInput)
  isNot?: AgentWhereInput
}
