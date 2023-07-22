import { CreateUserHomeInput } from './create-user-home.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'

import { UserHomeBuyerUidPropertyIdCompoundUniqueInput } from './where.args'

@InputType()
export class UpdateUserHomeInput extends PartialType(CreateUserHomeInput) {
  @Field(() => UserHomeBuyerUidPropertyIdCompoundUniqueInput, {
    nullable: true,
  })
  buyerUid_propertyId: UserHomeBuyerUidPropertyIdCompoundUniqueInput
}
