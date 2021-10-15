import { Ingredient } from '@/api/v1/ingredients/entities/ingredient.entity';
import { IsArray, IsInt, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  name: string;

  @IsInt()
  quantity: number;

  @IsArray()
  ingredients: Ingredient[];
}
