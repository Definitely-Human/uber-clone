import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import {
  CreateRestaurantInput,
  CreateRestaurantOutput,
} from './dtos/create-resturant.dto';
import { RestaurantService } from './restaurants.service';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { User, UserRole } from 'src/users/entities/user.entity';
import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/auth/role.decorator';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Mutation((returns) => CreateRestaurantOutput)
  @Role(['Owner'])
  async createRestaurant(
    @AuthUser() authUser: User,
    @Args('input') createRestaurantInput: CreateRestaurantInput,
  ): Promise<CreateRestaurantOutput> {
    return this.restaurantService.createRestaurant(
      authUser,
      createRestaurantInput,
    );
  }
}
