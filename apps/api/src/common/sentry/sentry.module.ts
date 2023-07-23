import { OnModuleInit, Module, Injectable } from '@nestjs/common'
import * as Sentry from '@sentry/node'

@Injectable()
class SentryService implements OnModuleInit {
  onModuleInit() {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
    })
  }
}

@Module({
  providers: [SentryService],
})
export class SentryModule {}
