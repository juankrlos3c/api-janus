import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  environment: process.env.NODE_ENV,
}));
