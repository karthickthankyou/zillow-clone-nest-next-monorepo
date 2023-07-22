import { ObjectType } from '@nestjs/graphql'
import { Agent as AgentType } from '@prisma/client'

@ObjectType()
export class Agent implements AgentType {
  uid: string
  createdAt: Date
  updatedAt: Date
}
