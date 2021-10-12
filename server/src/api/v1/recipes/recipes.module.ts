import { Recipe } from '@/v1/recipes/entities/recipe.entity';
import { RecipesController } from '@/v1/recipes/recipes.controller';
import { RecipesService } from '@/v1/recipes/recipes.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
