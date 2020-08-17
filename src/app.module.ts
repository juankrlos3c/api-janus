import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseModule } from './database/database.module';
import validationSchemaConfig from '../config/validation-schema';
import googleBooksConfig from 'config/google-books.config';
import databaseConfig from 'config/database.config';
import appConfig from 'config/app.config';

import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { PlayerModule } from './modules/player/player.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig, googleBooksConfig],
      validationSchema: validationSchemaConfig,
      validationOptions: {
        abortEarly: true,
      },
    }),
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UserModule,
    BookModule,
    PlayerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
