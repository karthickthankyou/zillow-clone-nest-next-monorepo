import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { UserHome as UserHomeObjectType, UserHomeType } from '@prisma/client'

registerEnumType(UserHomeType, {
  name: 'UserHomeType',
})

@ObjectType()
export class UserHome implements UserHomeObjectType {
  id: number
  createdAt: Date
  updatedAt: Date
  propertyId: number
  @Field(() => UserHomeType)
  type: UserHomeType
  buyerUid: string
  // Todo fill all properties
}
