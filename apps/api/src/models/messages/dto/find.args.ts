import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { MessageOrderByWithRelationInput } from './orderBy.args'
import { MessageWhereInput, MessageWhereUniqueInput } from './where.args'

registerEnumType(Prisma.MessageScalarFieldEnum, {
  name: 'MessageScalarFieldEnum',
})

@ArgsType()
export class FindManyMessageArgs
  implements Required<Omit<Prisma.MessageFindManyArgs, 'include' | 'select'>>
{
  @Field(() => MessageWhereInput, { nullable: true })
  where: MessageWhereInput
  @Field(() => [MessageOrderByWithRelationInput], { nullable: true })
  orderBy: MessageOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.MessageScalarFieldEnum], { nullable: true })
  distinct: Prisma.MessageScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueMessageArgs {
  @Field({ nullable: true })
  where: MessageWhereUniqueInput
}
