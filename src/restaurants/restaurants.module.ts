import { Module } from '@nestjs/common';
import { CategoryResolver, RestaurantResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CategoryRepository } from './repositories/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [
    RestaurantResolver,
    CategoryResolver,
    RestaurantService,
    CategoryRepository,
  ],
})
export class RestaurantsModule {}
