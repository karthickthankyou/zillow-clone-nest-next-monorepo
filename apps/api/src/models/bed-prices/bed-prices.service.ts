import { Injectable } from '@nestjs/common'
import { FindManyBedPriceArgs, FindUniqueBedPriceArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBedPriceInput } from './dto/create-bed-price.input'
import { UpdateBedPriceInput } from './dto/update-bed-price.input'

@Injectable()
export class BedPricesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBedPriceInput: CreateBedPriceInput) {
    return this.prisma.bedPrice.create({
      data: createBedPriceInput,
    })
  }

  findAll(args: FindManyBedPriceArgs) {
    return this.prisma.bedPrice.findMany(args)
  }

  findOne(args: FindUniqueBedPriceArgs) {
    return this.prisma.bedPrice.findUnique(args)
  }

  update(updateBedPriceInput: UpdateBedPriceInput) {
    const { id, ...data } = updateBedPriceInput
    return this.prisma.bedPrice.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueBedPriceArgs) {
    return this.prisma.bedPrice.delete(args)
  }
}
