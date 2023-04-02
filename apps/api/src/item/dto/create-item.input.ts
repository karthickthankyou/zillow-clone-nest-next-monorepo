import { InputType, PickType } from '@nestjs/graphql'
import { Item } from '../entities/item.entity'

@InputType()
export class CreateItemInput extends PickType(
  Item,
  ['name', 'quantity'],
  InputType,
) {}
