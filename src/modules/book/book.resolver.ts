import { Resolver, Query, Args } from '@nestjs/graphql';
import { BookType } from './types/book.type';
import { BookService } from './book.service';
import { GetBooksInput } from './input/get-books.input';

@Resolver(of => BookType)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query(returns => [BookType])
  books(
    @Args('getBooksInput')
    getBooksInput: GetBooksInput,
  ): Promise<BookType[]> {
    const { maxResults, query } = getBooksInput;
    return this.bookService.getBooks(maxResults, query);
  }
}
