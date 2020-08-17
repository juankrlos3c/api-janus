import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserType } from '../user/user.type';
import { BookType } from '../book/types/book.type';

@ObjectType('Player')
export class PlayerType {
  @Field(_ => ID)
  id: string;

  @Field(type => UserType)
  user: string;

  @Field(type => BookType)
  currentBook: string;

  @Field()
  currentPage: number;

  @Field()
  currentWord: number;

  @Field()
  totalWordsRead: number;

  @Field()
  totalPagesRead: number;

  @Field()
  speed: number;

  @Field()
  font: string;

  @Field()
  color: string;
}
