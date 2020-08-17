import { PlayerType } from './player.type';
import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PlayerService } from './player.service';

import { Player } from './player.entity';
import { CreatePlayerInput } from './input/create-player.input';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { BookType } from '../book/types/book.type';
import { BookService } from '../book/book.service';

@Resolver(of => PlayerType)
export class PlayerResolver {
  constructor(
    private playerService: PlayerService,
    private userService: UserService,
    private bookService: BookService,
  ) {}

  @Query(returns => PlayerType)
  Player(@Args('userId') userId: string): Promise<Player> {
    return this.playerService.getPlayer(userId);
  }

  @Mutation(returns => PlayerType)
  createPlayer(
    @Args('createPlayerInput') createPlayerInput: CreatePlayerInput,
  ): Promise<Player> {
    return this.playerService.createPlayer(createPlayerInput);
  }

  @ResolveField()
  async user(@Parent() player: Player): Promise<User> {
    return this.userService.getUser(player.user);
  }

  @ResolveField()
  async currentBook(@Parent() player: Player): Promise<BookType> {
    return this.bookService.getBookById(player.currentBook);
  }
}
