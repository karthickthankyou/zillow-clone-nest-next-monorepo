import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number
}
