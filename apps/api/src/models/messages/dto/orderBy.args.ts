import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AgentOrderByWithRelationInput } from 'src/models/agents/dto/orderBy.args'
import { BuyerOrderByWithRelationInput } from 'src/models/buyers/dto/orderBy.args'
import { PropertyOrderByWithRelationInput } from 'src/models/properties/dto/orderBy.args'
import { SellerOrderByWithRelationInput } from 'src/models/sellers/dto/orderBy.args'

@InputType()
export class MessageOrderByWithRelationInput
  implements Required<Prisma.MessageOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  message: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  propertyId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  buyerUid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  agentUid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  sellerUid: Prisma.SortOrder
  @Field(() => PropertyOrderByWithRelationInput, { nullable: true })
  property: PropertyOrderByWithRelationInput
  @Field(() => BuyerOrderByWithRelationInput, { nullable: true })
  buyer: BuyerOrderByWithRelationInput
  @Field(() => AgentOrderByWithRelationInput, { nullable: true })
  agent: AgentOrderByWithRelationInput
  @Field(() => SellerOrderByWithRelationInput, { nullable: true })
  seller: SellerOrderByWithRelationInput
}

@InputType()
export class MessageOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
