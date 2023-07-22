import { Module } from '@nestjs/common'
import { UserHomesService } from './user-homes.service'
import { UserHomesResolver } from './user-homes.resolver'

@Module({
  providers: [UserHomesResolver, UserHomesService],
  exports: [UserHomesService],
})
export class UserHomesModule {}
