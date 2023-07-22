import { ObjectType } from '@nestjs/graphql'
import { Buyer as BuyerType } from '@prisma/client'

@ObjectType()
export class Buyer implements BuyerType {
  uid: string
  createdAt: Date
  updatedAt: Date
  // Todo fill all properties
}
