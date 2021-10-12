import { CreateRecipeDto } from '@/v1/recipes/dto/create-recipe.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {}
