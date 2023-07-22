import {
  InputType,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/graphql'
import { Message } from '../entities/message.entity'

@InputType()
export class CreateMessageInput extends IntersectionType(
  PartialType(
    PickType(
      Message,
      ['buyerUid', 'sellerUid', 'agentUid'] as const,
      InputType,
    ),
  ),
  PickType(Message, ['propertyId', 'message'], InputType),
) {}
