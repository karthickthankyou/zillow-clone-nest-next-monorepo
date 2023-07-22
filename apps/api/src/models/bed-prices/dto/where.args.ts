import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { LocationStatsRelationFilter } from 'src/models/location-stats/dto/where.args'

@InputType()
export class BedPriceWhereUniqueInput
  implements Required<Prisma.BedPriceWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class BedPriceWhereInput implements Required<Prisma.BedPriceWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => IntFilter, { nullable: true })
  avg: IntFilter
  @Field(() => StringFilter, { nullable: true })
  beds: StringFilter
  @Field(() => IntFilter, { nullable: true })
  count: IntFilter
  @Field(() => IntFilter, { nullable: true })
  sqftAvg: IntFilter
  @Field(() => IntFilter, { nullable: true })
  locationStatsId: IntFilter
  @Field(() => LocationStatsRelationFilter, { nullable: true })
  locationStats: LocationStatsRelationFilter

  @Field(() => [BedPriceWhereInput], { nullable: true })
  AND: BedPriceWhereInput[]
  @Field(() => [BedPriceWhereInput], { nullable: true })
  OR: BedPriceWhereInput[]
  @Field(() => [BedPriceWhereInput], { nullable: true })
  NOT: BedPriceWhereInput[]
}

@InputType()
export class BedPriceListRelationFilter {
  @Field(() => BedPriceWhereInput)
  every?: BedPriceWhereInput
  @Field(() => BedPriceWhereInput)
  some?: BedPriceWhereInput
  @Field(() => BedPriceWhereInput)
  none?: BedPriceWhereInput
}

@InputType()
export class BedPriceRelationFilter {
  @Field(() => BedPriceWhereInput)
  is?: BedPriceWhereInput
  @Field(() => BedPriceWhereInput)
  isNot?: BedPriceWhereInput
}
