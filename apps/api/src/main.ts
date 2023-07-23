import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
const port = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',')
  app.enableCors({
    origin: allowedOrigins,
    allowedHeaders: '*',
    methods: '*',
  })
  await app.listen(port, '0.0.0.0')
}
bootstrap()
