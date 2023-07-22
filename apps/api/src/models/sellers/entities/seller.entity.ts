import { ObjectType } from '@nestjs/graphql'
import { Seller as SellerType } from '@prisma/client'

@ObjectType()
export class Seller implements SellerType {
  uid: string
  createdAt: Date
  updatedAt: Date
  // Todo fill all properties
}
