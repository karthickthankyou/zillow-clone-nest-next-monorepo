import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, StringFilter } from 'src/common/dtos/common.input'
import { MessageListRelationFilter } from 'src/models/messages/dto/where.args'
import { PropertyListRelationFilter } from 'src/models/properties/dto/where.args'

@InputType()
export class SellerWhereUniqueInput
  implements Required<Prisma.SellerWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class SellerWhereInput implements Required<Prisma.SellerWhereInput> {
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => PropertyListRelationFilter, { nullable: true })
  properties: PropertyListRelationFilter
  @Field(() => MessageListRelationFilter, { nullable: true })
  messages: MessageListRelationFilter

  @Field(() => [SellerWhereInput], { nullable: true })
  AND: SellerWhereInput[]
  @Field(() => [SellerWhereInput], { nullable: true })
  OR: SellerWhereInput[]
  @Field(() => [SellerWhereInput], { nullable: true })
  NOT: SellerWhereInput[]
}

@InputType()
export class SellerListRelationFilter {
  @Field(() => SellerWhereInput)
  every?: SellerWhereInput
  @Field(() => SellerWhereInput)
  some?: SellerWhereInput
  @Field(() => SellerWhereInput)
  none?: SellerWhereInput
}

@InputType()
export class SellerRelationFilter {
  @Field(() => SellerWhereInput)
  is?: SellerWhereInput
  @Field(() => SellerWhereInput)
  isNot?: SellerWhereInput
}
