import { InputType, PickType } from '@nestjs/graphql'
import { UserHome } from '../entities/user-home.entity'

@InputType()
export class CreateUserHomeInput extends PickType(
  UserHome,
  ['buyerUid', 'propertyId', 'type'],
  InputType,
) {}
