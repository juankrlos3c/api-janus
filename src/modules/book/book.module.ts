import { Module } from '@nestjs/common';

import { BookResolver } from './book.resolver';
import { BookService } from './book.service';

@Module({
  providers: [BookResolver, BookService],
  exports: [BookService]
})
export class BookModule {}
