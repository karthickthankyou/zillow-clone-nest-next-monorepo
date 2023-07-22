import { InputType, PickType } from '@nestjs/graphql'
import { BedPrice } from '../entities/bed-price.entity'

@InputType()
export class CreateBedPriceInput extends PickType(
  BedPrice,
  ['avg', 'beds', 'count', 'locationStatsId', 'sqftAvg'],
  InputType,
) {}
