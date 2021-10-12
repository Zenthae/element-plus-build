import { IsInt, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  name: string;

  @IsInt()
  quantity: number;
}
