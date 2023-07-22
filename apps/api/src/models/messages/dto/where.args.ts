import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AgentRelationFilter } from 'src/models/agents/dto/where.args'
import { BuyerRelationFilter } from 'src/models/buyers/dto/where.args'
import { PropertyRelationFilter } from 'src/models/properties/dto/where.args'
import { SellerRelationFilter } from 'src/models/sellers/dto/where.args'

@InputType()
export class MessageWhereUniqueInput
  implements Required<Prisma.MessageWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class MessageWhereInput implements Required<Prisma.MessageWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  message: StringFilter
  @Field(() => IntFilter, { nullable: true })
  propertyId: IntFilter
  @Field(() => StringFilter, { nullable: true })
  buyerUid: StringFilter
  @Field(() => StringFilter, { nullable: true })
  agentUid: StringFilter
  @Field(() => StringFilter, { nullable: true })
  sellerUid: StringFilter
  @Field(() => PropertyRelationFilter, { nullable: true })
  property: PropertyRelationFilter
  @Field(() => BuyerRelationFilter, { nullable: true })
  buyer: BuyerRelationFilter
  @Field(() => AgentRelationFilter, { nullable: true })
  agent: AgentRelationFilter
  @Field(() => SellerRelationFilter, { nullable: true })
  seller: SellerRelationFilter

  @Field(() => [MessageWhereInput], { nullable: true })
  AND: MessageWhereInput[]
  @Field(() => [MessageWhereInput], { nullable: true })
  OR: MessageWhereInput[]
  @Field(() => [MessageWhereInput], { nullable: true })
  NOT: MessageWhereInput[]
}

@InputType()
export class MessageListRelationFilter {
  @Field(() => MessageWhereInput)
  every?: MessageWhereInput
  @Field(() => MessageWhereInput)
  some?: MessageWhereInput
  @Field(() => MessageWhereInput)
  none?: MessageWhereInput
}

@InputType()
export class MessageRelationFilter {
  @Field(() => MessageWhereInput)
  is?: MessageWhereInput
  @Field(() => MessageWhereInput)
  isNot?: MessageWhereInput
}
