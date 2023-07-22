import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LocationStatsOrderByWithRelationInput } from 'src/models/location-stats/dto/orderBy.args'

@InputType()
export class BedPriceOrderByWithRelationInput
  implements Required<Prisma.BedPriceOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  avg: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  beds: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  count: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  sqftAvg: Prisma.SortOrder
  @Field(() => Prisma.SortOrder, { nullable: true })
  locationStatsId: Prisma.SortOrder
  @Field(() => LocationStatsOrderByWithRelationInput, { nullable: true })
  locationStats: LocationStatsOrderByWithRelationInput
  // Todo: Add properties
  // @Field(() => Prisma.SortOrder, { nullable: true })
  // id: Prisma.SortOrder
}

@InputType()
export class BedPriceOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
