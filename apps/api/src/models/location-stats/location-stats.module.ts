import { Module } from '@nestjs/common'
import { LocationStatsService } from './location-stats.service'
import { LocationStatsResolver } from './location-stats.resolver'

@Module({
  providers: [LocationStatsResolver, LocationStatsService],
  exports: [LocationStatsService],
})
export class LocationStatsModule {}
