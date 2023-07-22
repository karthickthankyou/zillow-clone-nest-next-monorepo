import { Injectable } from '@nestjs/common'
import { FindManyAgentArgs, FindUniqueAgentArgs } from './dto/find.args'

import { CreateAgentInput } from './dto/create-agent.input'
import { UpdateAgentInput } from './dto/update-agent.input'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Injectable()
export class AgentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAgentInput: CreateAgentInput) {
    return this.prisma.agent.create({
      data: createAgentInput,
    })
  }

  findAll(args: FindManyAgentArgs) {
    return this.prisma.agent.findMany(args)
  }

  findOne(args: FindUniqueAgentArgs) {
    return this.prisma.agent.findUnique(args)
  }

  update(updateAgentInput: UpdateAgentInput) {
    const { uid, ...data } = updateAgentInput
    return this.prisma.agent.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueAgentArgs) {
    return this.prisma.agent.delete(args)
  }
}
