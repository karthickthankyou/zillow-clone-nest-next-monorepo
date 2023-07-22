import { CreateSellerInput } from './create-seller.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Seller } from '@prisma/client'

@InputType()
export class UpdateSellerInput extends PartialType(CreateSellerInput) {
  uid: Seller['uid']
}
