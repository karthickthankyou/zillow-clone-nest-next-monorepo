import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  LocationStatsType as LocationStatsTypeEnum,
  LocationStats as LocationStatsType,
} from '@prisma/client'

registerEnumType(LocationStatsTypeEnum, {
  name: 'LocationStatsType',
})

@ObjectType()
export class LocationStats implements LocationStatsType {
  id: number
  totalHomes: number
  lat: number
  lng: number
  priceSqft: number
  @Field(() => LocationStatsTypeEnum, { nullable: true })
  type: LocationStatsTypeEnum
}
