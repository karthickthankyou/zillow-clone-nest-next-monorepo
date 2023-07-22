import { InputType, PickType } from '@nestjs/graphql'
import { LocationStats } from '../entities/location-stats.entity'

@InputType()
export class CreateLocationStatsInput extends PickType(
  LocationStats,
  ['lat', 'lng', 'priceSqft', 'totalHomes', 'type'],
  InputType,
) {}
