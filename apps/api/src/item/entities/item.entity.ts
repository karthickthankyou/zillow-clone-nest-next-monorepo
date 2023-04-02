import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Item {
  @Field(() => Int, { description: 'ID' })
  id: number
}
