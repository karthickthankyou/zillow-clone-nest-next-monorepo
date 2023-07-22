import { Module } from '@nestjs/common'
import { BedPricesService } from './bed-prices.service'
import { BedPricesResolver } from './bed-prices.resolver'

@Module({
  providers: [BedPricesResolver, BedPricesService],
  exports: [BedPricesService],
})
export class BedPricesModule {}
