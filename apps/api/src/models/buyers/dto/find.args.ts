import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputUid } from 'src/common/dtos/common.input'
import { BuyerOrderByWithRelationInput } from './orderBy.args'
import { BuyerWhereInput, BuyerWhereUniqueInput } from './where.args'

registerEnumType(Prisma.BuyerScalarFieldEnum, {
  name: 'BuyerScalarFieldEnum',
})

@ArgsType()
export class FindManyBuyerArgs
  implements Required<Omit<Prisma.BuyerFindManyArgs, 'include' | 'select'>>
{
  @Field(() => BuyerWhereInput, { nullable: true })
  where: BuyerWhereInput
  @Field(() => [BuyerOrderByWithRelationInput], { nullable: true })
  orderBy: BuyerOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputUid, { nullable: true })
  cursor: WhereUniqueInputUid
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.BuyerScalarFieldEnum], { nullable: true })
  distinct: Prisma.BuyerScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueBuyerArgs {
  @Field({ nullable: true })
  where: BuyerWhereUniqueInput
}
