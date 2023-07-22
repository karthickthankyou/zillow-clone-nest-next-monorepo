import { Injectable } from '@nestjs/common'
import { FindManyBuyerArgs, FindUniqueBuyerArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBuyerInput } from './dto/create-buyer.input'
import { UpdateBuyerInput } from './dto/update-buyer.input'

@Injectable()
export class BuyersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBuyerInput: CreateBuyerInput) {
    return this.prisma.buyer.create({
      data: createBuyerInput,
    })
  }

  findAll(args: FindManyBuyerArgs) {
    return this.prisma.buyer.findMany(args)
  }

  findOne(args: FindUniqueBuyerArgs) {
    return this.prisma.buyer.findUnique(args)
  }

  update(updateBuyerInput: UpdateBuyerInput) {
    const { uid, ...data } = updateBuyerInput
    return this.prisma.buyer.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueBuyerArgs) {
    return this.prisma.buyer.delete(args)
  }
}
