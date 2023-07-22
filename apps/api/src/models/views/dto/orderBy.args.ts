import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BuyerOrderByWithRelationInput } from 'src/models/buyers/dto/orderBy.args'
import { PropertyOrderByWithRelationInput } from 'src/models/properties/dto/orderBy.args'

@InputType()
export class ViewOrderByWithRelationInput
  implements Required<Prisma.ViewOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  propertyId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  buyerUid: Prisma.SortOrder
  @Field(() => PropertyOrderByWithRelationInput, { nullable: true })
  property: PropertyOrderByWithRelationInput
  @Field(() => BuyerOrderByWithRelationInput, { nullable: true })
  buyer: BuyerOrderByWithRelationInput
}

@InputType()
export class ViewOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
