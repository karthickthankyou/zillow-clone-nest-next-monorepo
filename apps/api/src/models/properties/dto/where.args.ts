import { Field, InputType, registerEnumType } from '@nestjs/graphql'
import { Prisma, Style } from '@prisma/client'
import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input'
import { AgentListRelationFilter } from 'src/models/agents/dto/where.args'
import { MessageListRelationFilter } from 'src/models/messages/dto/where.args'
import { SellerRelationFilter } from 'src/models/sellers/dto/where.args'
import { UserHomeListRelationFilter } from 'src/models/user-homes/dto/where.args'
import { ViewListRelationFilter } from 'src/models/views/dto/where.args'

@InputType()
export class PropertyWhereUniqueInput
  implements Required<Prisma.PropertyWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

registerEnumType(Style, {
  name: 'Style',
})

@InputType()
export class EnumStyleFilter {
  @Field(() => Style, { nullable: true })
  equals?: Style;
  @Field(() => [Style], { nullable: true })
  in?: Style[]
  @Field(() => [Style], { nullable: true })
  notIn?: Style[]
  @Field(() => Style, { nullable: true })
  not?: Style
}

@InputType()
export class PropertyWhereInput implements Required<Prisma.PropertyWhereInput> {
  @Field(() => EnumStyleFilter, { nullable: true })
  style: EnumStyleFilter
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  lat: IntFilter
  @Field(() => IntFilter, { nullable: true })
  lng: IntFilter
  @Field(() => StringFilter, { nullable: true })
  description: StringFilter
  @Field(() => IntFilter, { nullable: true })
  lotSize: IntFilter
  @Field(() => StringFilter, { nullable: true })
  features: StringFilter
  @Field(() => StringFilter, { nullable: true })
  city: StringFilter
  @Field(() => StringFilter, { nullable: true })
  state: StringFilter
  @Field(() => StringFilter, { nullable: true })
  facts: StringFilter

  @Field(() => StringFilter, { nullable: true })
  address: StringFilter
  @Field(() => IntFilter, { nullable: true })
  priceSqft: IntFilter
  @Field(() => IntFilter, { nullable: true })
  sqft: IntFilter
  @Field(() => IntFilter, { nullable: true })
  price: IntFilter
  @Field(() => IntFilter, { nullable: true })
  beds: IntFilter
  @Field(() => IntFilter, { nullable: true })
  bath: IntFilter
  @Field(() => IntFilter, { nullable: true })
  yearBuilt: IntFilter
  @Field(() => StringFilter, { nullable: true })
  zipcode: StringFilter
  @Field(() => StringListFilter, { nullable: true })
  imgs: StringListFilter
  @Field(() => IntFilter, { nullable: true })
  plan: IntFilter
  @Field(() => BoolFilter, { nullable: true })
  published: BoolFilter
  @Field(() => StringFilter, { nullable: true })
  sellerUid: StringFilter
  @Field(() => SellerRelationFilter, { nullable: true })
  seller: SellerRelationFilter
  @Field(() => AgentListRelationFilter, { nullable: true })
  agents: AgentListRelationFilter
  @Field(() => UserHomeListRelationFilter, { nullable: true })
  userHomes: UserHomeListRelationFilter
  @Field(() => MessageListRelationFilter, { nullable: true })
  messages: MessageListRelationFilter
  @Field(() => ViewListRelationFilter, { nullable: true })
  views: ViewListRelationFilter

  @Field(() => [PropertyWhereInput], { nullable: true })
  AND: PropertyWhereInput[]
  @Field(() => [PropertyWhereInput], { nullable: true })
  OR: PropertyWhereInput[]
  @Field(() => [PropertyWhereInput], { nullable: true })
  NOT: PropertyWhereInput[]
}

@InputType()
export class PropertyListRelationFilter {
  @Field(() => PropertyWhereInput)
  every?: PropertyWhereInput
  @Field(() => PropertyWhereInput)
  some?: PropertyWhereInput
  @Field(() => PropertyWhereInput)
  none?: PropertyWhereInput
}

@InputType()
export class PropertyRelationFilter {
  @Field(() => PropertyWhereInput)
  is?: PropertyWhereInput
  @Field(() => PropertyWhereInput)
  isNot?: PropertyWhereInput
}
