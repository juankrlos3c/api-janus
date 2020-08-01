import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UserType } from './user.type';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './input/user.input';

@Resolver(of => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(returns => UserType)
  User(@Args('id') id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Query(returns => [UserType])
  Users(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Mutation(returns => UserType)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.createUser(createUserInput);
  }
}
