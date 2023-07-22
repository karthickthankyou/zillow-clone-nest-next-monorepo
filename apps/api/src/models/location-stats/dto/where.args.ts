import { Field, InputType } from '@nestjs/graphql'
import { LocationStatsType, Prisma } from '@prisma/client'
import { IntFilter } from 'src/common/dtos/common.input'
import { BedPriceListRelationFilter } from 'src/models/bed-prices/dto/where.args'

@InputType()
export class LocationStatsWhereUniqueInput
  implements Required<Prisma.LocationStatsWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class LocationStatsWhereInput
  implements Required<Prisma.LocationStatsWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => IntFilter, { nullable: true })
  totalHomes: IntFilter
  @Field(() => IntFilter, { nullable: true })
  lat: IntFilter
  @Field(() => IntFilter, { nullable: true })
  lng: IntFilter
  @Field(() => IntFilter, { nullable: true })
  priceSqft: IntFilter
  @Field(() => LocationStatsType, { nullable: true })
  type: LocationStatsType
  @Field(() => BedPriceListRelationFilter, { nullable: true })
  bedsPrice: BedPriceListRelationFilter
  // @Field(() => StringFilter, { nullable: true })
  // uid: StringFilter

  @Field(() => [LocationStatsWhereInput], { nullable: true })
  AND: LocationStatsWhereInput[]
  @Field(() => [LocationStatsWhereInput], { nullable: true })
  OR: LocationStatsWhereInput[]
  @Field(() => [LocationStatsWhereInput], { nullable: true })
  NOT: LocationStatsWhereInput[]
}

@InputType()
export class LocationStatsListRelationFilter {
  @Field(() => LocationStatsWhereInput)
  every?: LocationStatsWhereInput
  @Field(() => LocationStatsWhereInput)
  some?: LocationStatsWhereInput
  @Field(() => LocationStatsWhereInput)
  none?: LocationStatsWhereInput
}

@InputType()
export class LocationStatsRelationFilter {
  @Field(() => LocationStatsWhereInput)
  is?: LocationStatsWhereInput
  @Field(() => LocationStatsWhereInput)
  isNot?: LocationStatsWhereInput
}
