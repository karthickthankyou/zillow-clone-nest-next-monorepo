import { Module } from '@nestjs/common'
import { BuyersService } from './buyers.service'
import { BuyersResolver } from './buyers.resolver'

@Module({
  providers: [BuyersResolver, BuyersService],
  exports: [BuyersService],
})
export class BuyersModule {}
