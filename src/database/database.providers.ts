//import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

/*
@Injectable()
class MongooseProvider {
  constructor(private configService: ConfigService) {
    const uri = this.configService.get<string>('database.uri');
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  }
}

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useClass: MongooseProvider,
  },
];
*/
