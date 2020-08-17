import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UserType } from './user.type';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './input/user.input';

@Resolver(of => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(returns => UserType)
  User(@Args('id', { nullable: true }) id?: string, @Args('googleId', { nullable: true }) googleId?: string): Promise<User> {
    const searchById = id !== null && id !== undefined;
    return searchById ? this.userService.getUser(id) : this.userService.getUserByGoogleId(googleId);
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
