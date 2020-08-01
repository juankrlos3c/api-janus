import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseModule } from './database/database.module';
import validationSchemaConfig from '../config/validation-schema';
import databaseConfig from 'config/database.config';
import appConfig from 'config/app.config';

import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig],
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
