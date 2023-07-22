import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { MessageOrderByRelationAggregateInput } from 'src/models/messages/dto/orderBy.args'
import { UserHomeOrderByRelationAggregateInput } from 'src/models/user-homes/dto/orderBy.args'
import { ViewOrderByRelationAggregateInput } from 'src/models/views/dto/orderBy.args'

@InputType()
export class BuyerOrderByWithRelationInput
  implements Required<Prisma.BuyerOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => UserHomeOrderByRelationAggregateInput, { nullable: true })
  interests: UserHomeOrderByRelationAggregateInput
  @Field(() => MessageOrderByRelationAggregateInput, { nullable: true })
  messages: MessageOrderByRelationAggregateInput
  @Field(() => ViewOrderByRelationAggregateInput, { nullable: true })
  views: ViewOrderByRelationAggregateInput
}

@InputType()
export class BuyerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
