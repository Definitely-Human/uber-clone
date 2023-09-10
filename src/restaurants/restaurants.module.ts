import { Module } from '@nestjs/common';
import {
  CategoryResolver,
  DishResolver,
  RestaurantResolver,
} from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CategoryRepository } from './repositories/category.repository';
import { Dish } from './entities/dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, Dish])],
  providers: [
    RestaurantResolver,
    CategoryResolver,
    RestaurantService,
    DishResolver,
    CategoryRepository,
  ],
})
export class RestaurantsModule {}
