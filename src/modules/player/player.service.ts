import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';

import { Player } from './player.entity';
import { CreatePlayerInput } from './input/create-player.input';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
  ) {}

  async createPlayer(createPlayerInput: CreatePlayerInput): Promise<Player> {
    const {
      currentBook,
      currentPage,
      currentWord,
      totalPagesRead,
      totalWordsRead,
      speed,
      font,
      color,
      user,
    } = createPlayerInput;

    const loadPlayer = await this.getPlayerByUserIdAndBookId(user, currentBook);

    if (loadPlayer) {
      loadPlayer.currentPage = currentPage;
      loadPlayer.currentWord = currentWord;
      loadPlayer.totalPagesRead = totalPagesRead;
      loadPlayer.totalWordsRead = totalWordsRead;
      loadPlayer.speed = speed || loadPlayer.speed;
      loadPlayer.font = font || loadPlayer.font;
      loadPlayer.color = color || loadPlayer.color;

      return this.playerRepository.save(loadPlayer);
    }

    const player = this.playerRepository.create({
      id: uuid(),
      color,
      currentBook,
      currentPage,
      currentWord,
      totalPagesRead,
      totalWordsRead,
      speed,
      font,
      user,
    });

    return this.playerRepository.save(player);
  }

  async getPlayer(userId: string): Promise<Player> {
    return this.playerRepository.findOne({ user: userId });
  }

  async getPlayerByUserIdAndBookId(
    userId: string,
    bookId: string,
  ): Promise<Player> {
    return this.playerRepository.findOne({ user: userId, currentBook: bookId });
  }
}
