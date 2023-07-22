import { Injectable } from '@nestjs/common'
import { FindManyMessageArgs, FindUniqueMessageArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateMessageInput } from './dto/create-message.input'
import { UpdateMessageInput } from './dto/update-message.input'

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMessageInput: CreateMessageInput) {
    return this.prisma.message.create({
      data: createMessageInput,
    })
  }

  findAll(args: FindManyMessageArgs) {
    return this.prisma.message.findMany(args)
  }

  findOne(args: FindUniqueMessageArgs) {
    return this.prisma.message.findUnique(args)
  }

  update(updateMessageInput: UpdateMessageInput) {
    const { id, ...data } = updateMessageInput
    return this.prisma.message.update({
      where: { id: id },
      data: data,
    })
  }

  remove(args: FindUniqueMessageArgs) {
    return this.prisma.message.delete(args)
  }
}
