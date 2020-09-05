import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';

import { CreateUserInput } from './input/user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const {
      name,
      email,
      givenName,
      amazonId,
      googleId,
      photoUri,
    } = createUserInput;
    const user = this.userRepository.create({
      id: uuid(),
      name,
      email,
      givenName,
      amazonId,
      googleId,
      photoUri,
    });

    return this.userRepository.save(user);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUser(id: string): Promise<User> {
    return this.userRepository.findOne({ id });
  }

  async getUserByGoogleId(googleId: string): Promise<User> {
    return this.userRepository.findOne({ googleId });
  }
}
