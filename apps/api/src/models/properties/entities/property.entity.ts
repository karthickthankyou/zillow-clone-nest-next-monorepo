import { Field, ObjectType } from '@nestjs/graphql'
import { Property as PropertyType, Style } from '@prisma/client'

@ObjectType()
export class Property implements PropertyType {
  id: number
  createdAt: Date
  updatedAt: Date
  lat: number
  lng: number
  @Field(() => String, { nullable: true })
  description: string
  lotSize: number
  @Field(() => String, { nullable: true })
  features: string
  city: string
  state: string
  @Field(() => String, { nullable: true })
  facts: string
  @Field(() => Style, { nullable: true })
  style: Style
  address: string
  @Field(() => Number, { nullable: true })
  priceSqft: number
  sqft: number
  price: number
  @Field(() => Number, { nullable: true })
  beds: number
  @Field(() => Number, { nullable: true })
  bath: number
  yearBuilt: number
  zipcode: string
  imgs: string[]
  plan: number
  published: boolean
  sellerUid: string
}
