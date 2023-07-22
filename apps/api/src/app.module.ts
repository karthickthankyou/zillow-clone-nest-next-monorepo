import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FirebaseModule } from './common/firebase/firebase.module'

import { PrismaModule } from './common/prisma/prisma.module'
import { AgentsModule } from './models/agents/agents.module'
import { BuyersModule } from './models/buyers/buyers.module'

import { MessagesModule } from './models/messages/messages.module'
import { PropertiesModule } from './models/properties/properties.module'
import { SellersModule } from './models/sellers/sellers.module'
import { UserHomesModule } from './models/user-homes/user-homes.module'
import { ViewsModule } from './models/views/views.module'
import { LocationStatsModule } from './models/location-stats/location-stats.module'
import { BedPricesModule } from './models/bed-prices/bed-prices.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),
    PrismaModule,
    FirebaseModule,

    SellersModule,
    BuyersModule,
    AgentsModule,
    PropertiesModule,
    MessagesModule,
    UserHomesModule,
    ViewsModule,

    LocationStatsModule,
    BedPricesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
