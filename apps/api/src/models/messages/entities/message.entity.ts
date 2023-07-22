import { Field, ObjectType } from '@nestjs/graphql'
import { Message as MessageType } from '@prisma/client'

@ObjectType()
export class Message implements MessageType {
  id: number
  createdAt: Date
  updatedAt: Date
  message: string
  propertyId: number
  @Field(() => String, { nullable: true })
  buyerUid: string
  @Field(() => String, { nullable: true })
  agentUid: string
  @Field(() => String, { nullable: true })
  sellerUid: string
  // Todo fill all properties
}

@ObjectType()
export class GroupedMessages {
  @Field()
  propertyId: number

  @Field(() => [Message])
  messages: Message[]
}
