import { CreateAgentInput } from './create-agent.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Agent } from '@prisma/client'

@InputType()
export class UpdateAgentInput extends PartialType(CreateAgentInput) {
  uid: Agent['uid']
}
