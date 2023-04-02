import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Item {
  id: number
}
