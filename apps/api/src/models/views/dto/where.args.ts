import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BuyerRelationFilter } from 'src/models/buyers/dto/where.args'
import { PropertyRelationFilter } from 'src/models/properties/dto/where.args'

@InputType()
export class ViewWhereUniqueInput
  implements Required<Prisma.ViewWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ViewWhereInput implements Required<Prisma.ViewWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  propertyId: IntFilter
  @Field(() => StringFilter, { nullable: true })
  buyerUid: StringFilter
  @Field(() => PropertyRelationFilter, { nullable: true })
  property: PropertyRelationFilter
  @Field(() => BuyerRelationFilter, { nullable: true })
  buyer: BuyerRelationFilter

  @Field(() => [ViewWhereInput], { nullable: true })
  AND: ViewWhereInput[]
  @Field(() => [ViewWhereInput], { nullable: true })
  OR: ViewWhereInput[]
  @Field(() => [ViewWhereInput], { nullable: true })
  NOT: ViewWhereInput[]
}

@InputType()
export class ViewListRelationFilter {
  @Field(() => ViewWhereInput)
  every?: ViewWhereInput
  @Field(() => ViewWhereInput)
  some?: ViewWhereInput
  @Field(() => ViewWhereInput)
  none?: ViewWhereInput
}

@InputType()
export class ViewRelationFilter {
  @Field(() => ViewWhereInput)
  is?: ViewWhereInput
  @Field(() => ViewWhereInput)
  isNot?: ViewWhereInput
}
