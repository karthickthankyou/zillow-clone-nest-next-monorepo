import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { PropertyOrderByWithRelationInput } from './orderBy.args'
import { PropertyWhereInput, PropertyWhereUniqueInput } from './where.args'

registerEnumType(Prisma.PropertyScalarFieldEnum, {
  name: 'PropertyScalarFieldEnum',
})

@ArgsType()
export class FindManyPropertyArgs
  implements Required<Omit<Prisma.PropertyFindManyArgs, 'include' | 'select'>>
{
  @Field(() => PropertyWhereInput, { nullable: true })
  where: PropertyWhereInput
  @Field(() => [PropertyOrderByWithRelationInput], { nullable: true })
  orderBy: PropertyOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.PropertyScalarFieldEnum], { nullable: true })
  distinct: Prisma.PropertyScalarFieldEnum[]
}

@ArgsType()
export class FindUniquePropertyArgs {
  @Field({ nullable: true })
  where: PropertyWhereUniqueInput
}
