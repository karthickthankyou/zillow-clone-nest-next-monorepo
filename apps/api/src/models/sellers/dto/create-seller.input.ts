import { InputType, PickType } from '@nestjs/graphql'
import { Seller } from '../entities/seller.entity'

@InputType()
export class CreateSellerInput extends PickType(Seller, ['uid'], InputType) {}
