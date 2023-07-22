import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BedPricesService } from './bed-prices.service'
import { BedPrice } from './entities/bed-price.entity'
import { FindManyBedPriceArgs, FindUniqueBedPriceArgs } from './dto/find.args'
import { CreateBedPriceInput } from './dto/create-bed-price.input'
import { UpdateBedPriceInput } from './dto/update-bed-price.input'

@Resolver(() => BedPrice)
export class BedPricesResolver {
  constructor(private readonly bedPricesService: BedPricesService) {}

  @Mutation(() => BedPrice)
  createBedPrice(@Args('createBedPriceInput') args: CreateBedPriceInput) {
    return this.bedPricesService.create(args)
  }

  @Query(() => [BedPrice], { name: 'bedPrices' })
  findAll(@Args() args: FindManyBedPriceArgs) {
    return this.bedPricesService.findAll(args)
  }

  @Query(() => BedPrice, { name: 'bedPrice' })
  findOne(@Args() args: FindUniqueBedPriceArgs) {
    return this.bedPricesService.findOne(args)
  }

  @Mutation(() => BedPrice)
  updateBedPrice(@Args('updateBedPriceInput') args: UpdateBedPriceInput) {
    return this.bedPricesService.update(args)
  }

  @Mutation(() => BedPrice)
  removeBedPrice(@Args() args: FindUniqueBedPriceArgs) {
    return this.bedPricesService.remove(args)
  }
}
