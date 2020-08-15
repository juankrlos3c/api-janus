import { registerAs } from '@nestjs/config';

export default registerAs('googleBooks', () => ({
  uri: process.env.GOOGLE_BOOKS_URI,
  key: process.env.GOOGLE_BOOKS_KEY
}));
