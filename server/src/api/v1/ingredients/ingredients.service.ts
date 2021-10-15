import { Ingredient } from '@/api/v1/ingredients/entities/ingredient.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  create(
    createIngredientDto: CreateIngredientDto,
  ): Promise<CreateIngredientDto & Ingredient> {
    return this.ingredientRepository.save(createIngredientDto);
  }

  findAll(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  findOne(id: number): Promise<Ingredient> {
    return this.ingredientRepository.findOne(id);
  }

  update(
    id: number,
    updateIngredientDto: UpdateIngredientDto,
  ): Promise<UpdateResult> {
    return this.ingredientRepository.update(id, updateIngredientDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.ingredientRepository.delete(id);
  }
}
