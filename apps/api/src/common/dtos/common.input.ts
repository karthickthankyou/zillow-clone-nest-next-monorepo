import { Field, InputType, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

@InputType()
export class DateTimeFilter implements Prisma.DateTimeFilter {
  @Field(() => String, { nullable: true })
  equals: string | Date;
  @Field(() => [String], { nullable: true })
  in: string[] | Date[]
  @Field(() => [String], { nullable: true })
  notIn: string[] | Date[]
  @Field(() => String, { nullable: true })
  lt: string | Date
  @Field(() => String, { nullable: true })
  lte: string | Date
  @Field(() => String, { nullable: true })
  gt: string | Date
  @Field(() => String, { nullable: true })
  gte: string | Date
}

registerEnumType(Prisma.QueryMode, {
  name: 'QueryMode',
})

@InputType()
export class StringListFilter {
  @Field(() => [String], { nullable: true })
  equals?: string[]
  @Field(() => String, { nullable: true })
  has?: string
  @Field(() => [String], { nullable: true })
  hasEvery?: string[]
  @Field(() => [String], { nullable: true })
  hasSome?: string[]
  @Field(() => Boolean, { nullable: true })
  isEmpty?: boolean
}

// implements Required<Prisma.StringFilter>
@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: string[]
  @Field(() => [String], { nullable: true })
  notIn?: string[]
  @Field(() => String, { nullable: true })
  lt?: string
  @Field(() => String, { nullable: true })
  lte?: string
  @Field(() => String, { nullable: true })
  gt?: string
  @Field(() => String, { nullable: true })
  gte?: string
  @Field(() => String, { nullable: true })
  contains?: string
  @Field(() => String, { nullable: true })
  startsWith?: string
  @Field(() => String, { nullable: true })
  endsWith?: string
  @Field(() => String, { nullable: true })
  not?: string
  @Field(() => Prisma.QueryMode, { nullable: true })
  mode?: Prisma.QueryMode
}

@InputType()
export class BoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean
  @Field(() => Boolean, { nullable: true })
  not?: boolean
}

// implements Required<Prisma.IntFilter>
@InputType()
export class IntFilter {
  @Field(() => Number, { nullable: true })
  equals?: number;
  @Field(() => Number, { nullable: true })
  in?: number
  @Field(() => Number, { nullable: true })
  notIn?: number
  @Field(() => Number, { nullable: true })
  lt?: number
  @Field(() => Number, { nullable: true })
  lte?: number
  @Field(() => Number, { nullable: true })
  gt?: number
  @Field(() => Number, { nullable: true })
  gte?: number
  @Field(() => Number, { nullable: true })
  not?: number
}

@InputType()
export class WhereUniqueInputNumber {
  @Field(() => Number, { nullable: true })
  id: number
}
@InputType()
export class WhereUniqueInputString {
  @Field(() => String, { nullable: true })
  id?: string
}
@InputType()
export class WhereUniqueInputUid {
  @Field(() => String, { nullable: true })
  uid: string
}

registerEnumType(Prisma.SortOrder, {
  name: 'SortOrder',
})
