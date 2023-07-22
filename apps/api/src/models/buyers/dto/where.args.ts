import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, StringFilter } from 'src/common/dtos/common.input'
import { MessageListRelationFilter } from 'src/models/messages/dto/where.args'
import { UserHomeListRelationFilter } from 'src/models/user-homes/dto/where.args'
import { ViewListRelationFilter } from 'src/models/views/dto/where.args'

@InputType()
export class BuyerWhereUniqueInput
  implements Required<Prisma.BuyerWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class BuyerWhereInput implements Required<Prisma.BuyerWhereInput> {
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => UserHomeListRelationFilter, { nullable: true })
  interests: UserHomeListRelationFilter
  @Field(() => MessageListRelationFilter, { nullable: true })
  messages: MessageListRelationFilter
  @Field(() => ViewListRelationFilter, { nullable: true })
  views: ViewListRelationFilter

  @Field(() => [BuyerWhereInput], { nullable: true })
  AND: BuyerWhereInput[]
  @Field(() => [BuyerWhereInput], { nullable: true })
  OR: BuyerWhereInput[]
  @Field(() => [BuyerWhereInput], { nullable: true })
  NOT: BuyerWhereInput[]
}

@InputType()
export class BuyerListRelationFilter {
  @Field(() => BuyerWhereInput)
  every?: BuyerWhereInput
  @Field(() => BuyerWhereInput)
  some?: BuyerWhereInput
  @Field(() => BuyerWhereInput)
  none?: BuyerWhereInput
}

@InputType()
export class BuyerRelationFilter {
  @Field(() => BuyerWhereInput)
  is?: BuyerWhereInput
  @Field(() => BuyerWhereInput)
  isNot?: BuyerWhereInput
}
