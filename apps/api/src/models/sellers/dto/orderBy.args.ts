import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { MessageOrderByRelationAggregateInput } from 'src/models/messages/dto/orderBy.args'
import { PropertyOrderByRelationAggregateInput } from 'src/models/properties/dto/orderBy.args'

@InputType()
export class SellerOrderByWithRelationInput
  implements Required<Prisma.SellerOrderByWithRelationInput>
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
}

@InputType()
export class SellerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
