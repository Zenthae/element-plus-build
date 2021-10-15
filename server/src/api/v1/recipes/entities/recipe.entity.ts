import { Ingredient } from '@/api/v1/ingredients/entities/ingredient.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  /**
   * Should gives a list of all used ingredients (material + quantity)
   * 1 recipe can reference multiple ingredient but ingredients don't care
   * about who reference them
   */
  @ManyToMany(() => Ingredient, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  ingredients: Ingredient[];
}
