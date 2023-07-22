import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { ViewOrderByWithRelationInput } from './orderBy.args'
import { ViewWhereInput, ViewWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ViewScalarFieldEnum, {
  name: 'ViewScalarFieldEnum',
})

@ArgsType()
export class FindManyViewArgs
  implements Required<Omit<Prisma.ViewFindManyArgs, 'include' | 'select'>>
{
  @Field(() => ViewWhereInput, { nullable: true })
  where: ViewWhereInput
  @Field(() => [ViewOrderByWithRelationInput], { nullable: true })
  orderBy: ViewOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.ViewScalarFieldEnum], { nullable: true })
  distinct: Prisma.ViewScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueViewArgs {
  @Field({ nullable: true })
  where: ViewWhereUniqueInput
}
