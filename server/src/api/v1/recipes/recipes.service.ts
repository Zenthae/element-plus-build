import { CreateRecipeDto } from '@/v1/recipes/dto/create-recipe.dto';
import { UpdateRecipeDto } from '@/v1/recipes/dto/update-recipe.dto';
import { Recipe } from '@/v1/recipes/entities/recipe.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe) private recipesRepository: Repository<Recipe>,
  ) {}

  create(createRecipeDto: CreateRecipeDto) {
    return this.recipesRepository.save(createRecipeDto);
  }

  findAll() {
    return this.recipesRepository.find();
  }

  findOne(id: number) {
    return this.recipesRepository.findOne(id);
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.recipesRepository.update(id, updateRecipeDto);
  }

  remove(id: number) {
    return this.recipesRepository.delete(id);
  }
}
