import { ObjectType } from '@nestjs/graphql'
import { Item as ItemType } from '@prisma/client'

@ObjectType()
export class Item implements ItemType {
  id: number
  name: string
  quantity: number
}
