import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { MessageOrderByRelationAggregateInput } from 'src/models/messages/dto/orderBy.args'
import { PropertyOrderByRelationAggregateInput } from 'src/models/properties/dto/orderBy.args'

@InputType()
export class AgentOrderByWithRelationInput
  implements Required<Prisma.AgentOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => PropertyOrderByRelationAggregateInput, { nullable: true })
  properties: PropertyOrderByRelationAggregateInput
  @Field(() => MessageOrderByRelationAggregateInput, { nullable: true })
  messages: MessageOrderByRelationAggregateInput
  // Todo: Add properties
  // id: Prisma.SortOrder
}

@InputType()
export class AgentOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
