import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputUid } from 'src/common/dtos/common.input'
import { SellerOrderByWithRelationInput } from './orderBy.args'
import { SellerWhereInput, SellerWhereUniqueInput } from './where.args'

registerEnumType(Prisma.SellerScalarFieldEnum, {
  name: 'SellerScalarFieldEnum',
})

@ArgsType()
export class FindManySellerArgs
  implements Required<Omit<Prisma.SellerFindManyArgs, 'include' | 'select'>>
{
  @Field(() => SellerWhereInput, { nullable: true })
  where: SellerWhereInput
  @Field(() => [SellerOrderByWithRelationInput], { nullable: true })
  orderBy: SellerOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputUid, { nullable: true })
  cursor: WhereUniqueInputUid
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.SellerScalarFieldEnum], { nullable: true })
  distinct: Prisma.SellerScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueSellerArgs {
  @Field({ nullable: true })
  where: SellerWhereUniqueInput
}
