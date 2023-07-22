import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UserHomeOrderByWithRelationInput } from './orderBy.args'
import { UserHomeWhereInput, UserHomeWhereUniqueInput } from './where.args'

registerEnumType(Prisma.UserHomeScalarFieldEnum, {
  name: 'UserHomeScalarFieldEnum',
})

@ArgsType()
export class FindManyUserHomeArgs
  implements Required<Omit<Prisma.UserHomeFindManyArgs, 'include' | 'select'>>
{
  @Field(() => UserHomeWhereInput, { nullable: true })
  where: UserHomeWhereInput
  @Field(() => [UserHomeOrderByWithRelationInput], { nullable: true })
  orderBy: UserHomeOrderByWithRelationInput[]
  @Field(() => UserHomeWhereUniqueInput, { nullable: true })
  cursor: UserHomeWhereUniqueInput
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.UserHomeScalarFieldEnum], { nullable: true })
  distinct: Prisma.UserHomeScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueUserHomeArgs {
  @Field({ nullable: true })
  where: UserHomeWhereUniqueInput
}
