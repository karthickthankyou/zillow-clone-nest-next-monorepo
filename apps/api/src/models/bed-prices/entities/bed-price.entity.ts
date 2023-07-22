import { ObjectType } from '@nestjs/graphql'
import { BedPrice as BedPriceType } from '@prisma/client'

@ObjectType()
export class BedPrice implements BedPriceType {
  id: number
  avg: number
  beds: string
  count: number
  sqftAvg: number
  locationStatsId: number
  // Todo fill all properties. To make it nullable add below.
  // @Field(() => String, { nullable: true })
}
