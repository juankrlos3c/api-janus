import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MongoDbTypeOrmConfigService } from './mongodb-typeorm-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongoDbTypeOrmConfigService,
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
