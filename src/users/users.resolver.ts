import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService as UsersService } from './users.service';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    @InjectRepository(User) private readonly usersService: UsersService,
  ) {}

  @Query((returns) => Boolean)
  hi() {
    1 + 1;
    return true;
  }

  @Mutation((retruns) => CreateAccountOutput)
  createAccount(@Args('input') createAccountInput: CreateAccountInput) {}
}
