import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { BookType } from './types/book.type';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BookService {
  private baseUri: string = this.configService.get<string>('googleBooks.uri');
  private key: string = this.configService.get<string>('googleBooks.key');

  constructor(private configService: ConfigService) {}

  async getBooks(maxResults = 30, query = 'fiction'): Promise<BookType[]> {
    const books = await axios.request({
      method: 'GET',
      url: `${this.baseUri}/volumes?filter=full&maxResults=${maxResults}&q=${query}&key=${this.key}`,
    });

    return books.data.items;
  }

  async getBookById(bookId: string): Promise<BookType> {
    const book = await axios.request({
      method: 'GET',
      url: `${this.baseUri}/volumes/${bookId}?key=${this.key}`,
    });    

    return book.data;
  }
}
