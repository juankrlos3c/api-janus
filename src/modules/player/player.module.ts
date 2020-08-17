import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Player } from './player.entity';
import { UserModule } from '../user/user.module';
import { PlayerResolver } from './player.resolver';
import { PlayerService } from './player.service';
import { BookModule } from '../book/book.module';

@Module({
  imports: [TypeOrmModule.forFeature([Player]), UserModule, BookModule],
  providers: [PlayerResolver, PlayerService],
})
export class PlayerModule {}
