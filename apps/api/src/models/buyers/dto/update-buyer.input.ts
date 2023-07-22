import { CreateBuyerInput } from './create-buyer.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Buyer } from '@prisma/client'

@InputType()
export class UpdateBuyerInput extends PartialType(CreateBuyerInput) {
  uid: Buyer['uid']
}
