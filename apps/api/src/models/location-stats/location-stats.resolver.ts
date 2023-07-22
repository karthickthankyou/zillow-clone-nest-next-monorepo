import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { LocationStatsService } from './location-stats.service'
import { LocationStats } from './entities/location-stats.entity'
import {
  FindManyLocationStatsArgs,
  FindUniqueLocationStatsArgs,
} from './dto/find.args'
import { CreateLocationStatsInput } from './dto/create-location-stats.input'
import { UpdateLocationStatsInput } from './dto/update-location-stats.input'

@Resolver(() => LocationStats)
export class LocationStatsResolver {
  constructor(private readonly locationStatsService: LocationStatsService) {}

  @Mutation(() => LocationStats)
  createLocationStats(
    @Args('createLocationStatsInput') args: CreateLocationStatsInput,
  ) {
    return this.locationStatsService.create(args)
  }

  @Query(() => [LocationStats], { name: 'locationStats' })
  findAll(@Args() args: FindManyLocationStatsArgs) {
    return this.locationStatsService.findAll(args)
  }

  @Query(() => LocationStats, { name: 'locationStat' })
  findOne(@Args() args: FindUniqueLocationStatsArgs) {
    return this.locationStatsService.findOne(args)
  }

  @Mutation(() => LocationStats)
  updateLocationStats(
    @Args('updateLocationStatsInput') args: UpdateLocationStatsInput,
  ) {
    return this.locationStatsService.update(args)
  }

  @Mutation(() => LocationStats)
  removeLocationStats(@Args() args: FindUniqueLocationStatsArgs) {
    return this.locationStatsService.remove(args)
  }
}
