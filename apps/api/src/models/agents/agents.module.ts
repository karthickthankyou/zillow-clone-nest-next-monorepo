import { Module } from '@nestjs/common'
import { AgentsService } from './agents.service'
import { AgentsResolver } from './agents.resolver'

@Module({
  providers: [AgentsResolver, AgentsService],
  exports: [AgentsService],
})
export class AgentsModule {}
