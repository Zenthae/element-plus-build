import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/recipes/entities/recipe.entity';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

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
