import { InputType, PickType } from '@nestjs/graphql'
import { Property } from '../entities/property.entity'

@InputType()
export class CreatePropertyInput extends PickType(
  Property,
  [
    'sellerUid',
    'lat',
    'lng',
    'description',
    'lotSize',
    'features',
    'city',
    'state',
    'facts',
    'style',
    'address',
    'priceSqft',
    'sqft',
    'price',
    'beds',
    'bath',
    'yearBuilt',
    'zipcode',
    'imgs',
    'plan',
    'published',
  ],
  InputType,
) {}
