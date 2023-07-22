import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BedPriceOrderByRelationAggregateInput } from 'src/models/bed-prices/dto/orderBy.args'

@InputType()
export class LocationStatsOrderByWithRelationInput
  implements Required<Prisma.LocationStatsOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  totalHomes: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  lat: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  lng: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  priceSqft: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  type: Prisma.SortOrder
  @Field(() => BedPriceOrderByRelationAggregateInput, { nullable: true })
  bedsPrice: BedPriceOrderByRelationAggregateInput
  // Todo: Add properties
  // @Field(() => Prisma.SortOrder, { nullable: true })
  // id: Prisma.SortOrder
}

@InputType()
export class LocationStatsOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
