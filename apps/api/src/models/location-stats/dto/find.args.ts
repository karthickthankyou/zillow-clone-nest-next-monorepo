import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { LocationStatsOrderByWithRelationInput } from './orderBy.args'
import {
  LocationStatsWhereInput,
  LocationStatsWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.LocationStatsScalarFieldEnum, {
  name: 'LocationStatsScalarFieldEnum',
})

@ArgsType()
export class FindManyLocationStatsArgs
  implements
    Required<Omit<Prisma.LocationStatsFindManyArgs, 'include' | 'select'>>
{
  @Field(() => LocationStatsWhereInput, { nullable: true })
  where: LocationStatsWhereInput
  @Field(() => [LocationStatsOrderByWithRelationInput], { nullable: true })
  orderBy: LocationStatsOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.LocationStatsScalarFieldEnum], { nullable: true })
  distinct: Prisma.LocationStatsScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueLocationStatsArgs {
  @Field({ nullable: true })
  where: LocationStatsWhereUniqueInput
}
