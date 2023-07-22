import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { BedPriceOrderByWithRelationInput } from './orderBy.args'
import { BedPriceWhereInput, BedPriceWhereUniqueInput } from './where.args'

registerEnumType(Prisma.BedPriceScalarFieldEnum, {
  name: 'BedPriceScalarFieldEnum',
})

@ArgsType()
export class FindManyBedPriceArgs
  implements Required<Omit<Prisma.BedPriceFindManyArgs, 'include' | 'select'>>
{
  @Field(() => BedPriceWhereInput, { nullable: true })
  where: BedPriceWhereInput
  @Field(() => [BedPriceOrderByWithRelationInput], { nullable: true })
  orderBy: BedPriceOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.BedPriceScalarFieldEnum], { nullable: true })
  distinct: Prisma.BedPriceScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueBedPriceArgs {
  @Field({ nullable: true })
  where: BedPriceWhereUniqueInput
}
