import { Injectable } from '@nestjs/common'
import {
  FindManyLocationStatsArgs,
  FindUniqueLocationStatsArgs,
} from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateLocationStatsInput } from './dto/create-location-stats.input'
import { UpdateLocationStatsInput } from './dto/update-location-stats.input'

@Injectable()
export class LocationStatsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createLocationStatsInput: CreateLocationStatsInput) {
    return this.prisma.locationStats.create({
      data: createLocationStatsInput,
    })
  }

  findAll(args: FindManyLocationStatsArgs) {
    return this.prisma.locationStats.findMany(args)
  }

  findOne(args: FindUniqueLocationStatsArgs) {
    return this.prisma.locationStats.findUnique(args)
  }

  update(updateLocationStatsInput: UpdateLocationStatsInput) {
    const { id, ...data } = updateLocationStatsInput
    return this.prisma.locationStats.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueLocationStatsArgs) {
    return this.prisma.locationStats.delete(args)
  }
}
