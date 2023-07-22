import { CreatePropertyInput } from './create-property.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Property } from '@prisma/client'

@InputType()
export class UpdatePropertyInput extends PartialType(CreatePropertyInput) {
  id: Property['id']
}
