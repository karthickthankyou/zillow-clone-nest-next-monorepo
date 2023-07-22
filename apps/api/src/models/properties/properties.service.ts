import { Injectable } from '@nestjs/common'
import { FindManyPropertyArgs, FindUniquePropertyArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreatePropertyInput } from './dto/create-property.input'
import { UpdatePropertyInput } from './dto/update-property.input'

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPropertyInput: CreatePropertyInput) {
    return this.prisma.property.create({
      data: createPropertyInput,
    })
  }

  findAll(args: FindManyPropertyArgs) {
    return this.prisma.property.findMany(args)
  }

  findOne(args: FindUniquePropertyArgs) {
    return this.prisma.property.findUnique(args)
  }

  update(updatePropertyInput: UpdatePropertyInput) {
    const { id, ...data } = updatePropertyInput
    return this.prisma.property.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniquePropertyArgs) {
    return this.prisma.property.delete(args)
  }
}
