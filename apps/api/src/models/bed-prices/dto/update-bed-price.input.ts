import { CreateBedPriceInput } from './create-bed-price.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { BedPrice } from '@prisma/client'

@InputType()
export class UpdateBedPriceInput extends PartialType(CreateBedPriceInput) {
  id: BedPrice['id']
}
