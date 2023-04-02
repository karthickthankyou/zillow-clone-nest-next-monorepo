import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateItemInput } from './dto/create-item.input'
import { UpdateItemInput } from './dto/update-item.input'

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}
  create(createItemInput: CreateItemInput) {
    return this.prisma.item.create({ data: createItemInput })
  }

  findAll() {
    return this.prisma.item.findMany()
  }

  findOne(id: number) {
    return this.prisma.item.findUnique({ where: { id } })
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return this.prisma.item.update({ data: updateItemInput, where: { id } })
  }

  remove(id: number) {
    return this.prisma.item.delete({ where: { id } })
  }
}
