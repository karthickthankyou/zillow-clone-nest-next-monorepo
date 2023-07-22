import { InputType, PickType } from '@nestjs/graphql'
import { Agent } from '../entities/agent.entity'

@InputType()
export class CreateAgentInput extends PickType(Agent, ['uid'], InputType) {}
