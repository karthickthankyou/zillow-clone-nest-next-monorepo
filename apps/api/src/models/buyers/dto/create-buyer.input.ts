import { InputType, PickType } from '@nestjs/graphql'
import { Buyer } from '../entities/buyer.entity'

@InputType()
export class CreateBuyerInput extends PickType(Buyer, ['uid'], InputType) {}
