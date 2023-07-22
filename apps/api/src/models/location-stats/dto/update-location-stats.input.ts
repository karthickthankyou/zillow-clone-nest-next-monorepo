import { CreateLocationStatsInput } from './create-location-stats.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { LocationStats } from '@prisma/client'

@InputType()
export class UpdateLocationStatsInput extends PartialType(
  CreateLocationStatsInput,
) {
  id: LocationStats['id']
}
