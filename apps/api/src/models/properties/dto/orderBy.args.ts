import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AgentOrderByRelationAggregateInput } from 'src/models/agents/dto/orderBy.args'
import { MessageOrderByRelationAggregateInput } from 'src/models/messages/dto/orderBy.args'
import { SellerOrderByWithRelationInput } from 'src/models/sellers/dto/orderBy.args'
import { UserHomeOrderByRelationAggregateInput } from 'src/models/user-homes/dto/orderBy.args'
import { ViewOrderByRelationAggregateInput } from 'src/models/views/dto/orderBy.args'

@InputType()
export class PropertyOrderByWithRelationInput
  implements Required<Prisma.PropertyOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  lat: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  lng: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  lotSize: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  features: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  city: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  state: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  facts: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  style: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  address: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  priceSqft: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  sqft: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  @Field(() => Prisma.SortOrder, { nullable: true })
  @Field(() => Prisma.SortOrder, { nullable: true })
  price: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  beds: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  bath: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  yearBuilt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  zipcode: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  imgs: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  plan: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  published: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  sellerUid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  seller: SellerOrderByWithRelationInput
  @Field(() => AgentOrderByRelationAggregateInput, { nullable: true })
  agents: AgentOrderByRelationAggregateInput
  @Field(() => UserHomeOrderByRelationAggregateInput, { nullable: true })
  userHomes: UserHomeOrderByRelationAggregateInput
  @Field(() => MessageOrderByRelationAggregateInput, { nullable: true })
  messages: MessageOrderByRelationAggregateInput
  @Field(() => ViewOrderByRelationAggregateInput, { nullable: true })
  views: ViewOrderByRelationAggregateInput
  // Todo: Add properties

  //
  // id: Prisma.SortOrder
}

@InputType()
export class PropertyOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
