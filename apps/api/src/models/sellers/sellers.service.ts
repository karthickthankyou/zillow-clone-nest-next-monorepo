import { Injectable } from '@nestjs/common'
import { FindManySellerArgs, FindUniqueSellerArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateSellerInput } from './dto/create-seller.input'
import { UpdateSellerInput } from './dto/update-seller.input'

@Injectable()
export class SellersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSellerInput: CreateSellerInput) {
    return this.prisma.seller.create({
      data: createSellerInput,
    })
  }

  findAll(args: FindManySellerArgs) {
    return this.prisma.seller.findMany(args)
  }

  findOne(args: FindUniqueSellerArgs) {
    return this.prisma.seller.findUnique(args)
  }

  update(updateSellerInput: UpdateSellerInput) {
    const { uid, ...data } = updateSellerInput
    return this.prisma.seller.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueSellerArgs) {
    return this.prisma.seller.delete(args)
  }
}
