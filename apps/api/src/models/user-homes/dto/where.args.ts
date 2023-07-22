import { Field, InputType } from '@nestjs/graphql'
import { Prisma, UserHomeType } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BuyerRelationFilter } from 'src/models/buyers/dto/where.args'
import { PropertyRelationFilter } from 'src/models/properties/dto/where.args'

@InputType()
export class UserHomeWhereUniqueInput
  implements Required<Prisma.UserHomeWhereUniqueInput>
{
  @Field(() => UserHomeBuyerUidPropertyIdCompoundUniqueInput, {
    nullable: true,
  })
  buyerUid_propertyId: Prisma.UserHomeBuyerUidPropertyIdCompoundUniqueInput
}
@InputType()
export class UserHomeBuyerUidPropertyIdCompoundUniqueInput
  implements Required<Prisma.UserHomeBuyerUidPropertyIdCompoundUniqueInput>
{
  @Field(() => String, { nullable: true })
  buyerUid: string
  @Field(() => Number, { nullable: true })
  propertyId: number
}

@InputType()
export class UserHomeWhereInput implements Required<Prisma.UserHomeWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  propertyId: IntFilter
  @Field(() => UserHomeType, { nullable: true })
  type: UserHomeType
  @Field(() => StringFilter, { nullable: true })
  buyerUid: StringFilter
  @Field(() => PropertyRelationFilter, { nullable: true })
  property: PropertyRelationFilter
  @Field(() => BuyerRelationFilter, { nullable: true })
  buyer: BuyerRelationFilter

  @Field(() => [UserHomeWhereInput], { nullable: true })
  AND: UserHomeWhereInput[]
  @Field(() => [UserHomeWhereInput], { nullable: true })
  OR: UserHomeWhereInput[]
  @Field(() => [UserHomeWhereInput], { nullable: true })
  NOT: UserHomeWhereInput[]
}

@InputType()
export class UserHomeListRelationFilter {
  @Field(() => UserHomeWhereInput)
  every?: UserHomeWhereInput
  @Field(() => UserHomeWhereInput)
  some?: UserHomeWhereInput
  @Field(() => UserHomeWhereInput)
  none?: UserHomeWhereInput
}

@InputType()
export class UserHomeRelationFilter {
  @Field(() => UserHomeWhereInput)
  is?: UserHomeWhereInput
  @Field(() => UserHomeWhereInput)
  isNot?: UserHomeWhereInput
}
