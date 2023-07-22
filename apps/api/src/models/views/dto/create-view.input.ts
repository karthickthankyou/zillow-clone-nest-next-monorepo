import { InputType, PickType } from '@nestjs/graphql'
import { View } from '../entities/view.entity'

@InputType()
export class CreateViewInput extends PickType(
  View,
  ['buyerUid', 'propertyId'],
  InputType,
) {}
