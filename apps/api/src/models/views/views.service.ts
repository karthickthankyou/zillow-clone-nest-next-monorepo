import { Injectable } from '@nestjs/common'
import { FindManyViewArgs, FindUniqueViewArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateViewInput } from './dto/create-view.input'
import { UpdateViewInput } from './dto/update-view.input'

@Injectable()
export class ViewsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createViewInput: CreateViewInput) {
    return this.prisma.view.create({
      data: createViewInput,
    })
  }

  findAll(args: FindManyViewArgs) {
    return this.prisma.view.findMany(args)
  }

  findOne(args: FindUniqueViewArgs) {
    return this.prisma.view.findUnique(args)
  }

  update(updateViewInput: UpdateViewInput) {
    const { id, ...data } = updateViewInput
    return this.prisma.view.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueViewArgs) {
    return this.prisma.view.delete(args)
  }
}
