import { CreateMessageInput } from './create-message.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Message } from '@prisma/client'

@InputType()
export class UpdateMessageInput extends PartialType(CreateMessageInput) {
  id: Message['id']
}
