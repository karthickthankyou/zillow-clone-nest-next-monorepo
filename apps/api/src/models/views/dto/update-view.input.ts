import { CreateViewInput } from './create-view.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { View } from '@prisma/client'

@InputType()
export class UpdateViewInput extends PartialType(CreateViewInput) {
  id: View['id']
}
