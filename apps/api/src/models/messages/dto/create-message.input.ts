import { InputType, PickType } from '@nestjs/graphql'
import { Message } from '../entities/message.entity'

@InputType()
export class CreateMessageInput extends PickType(
  Message,
  ['propertyId', 'message', 'buyerUid', 'agentUid', 'sellerUid'],
  InputType,
) {}
