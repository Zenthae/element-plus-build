import { RecipesController } from '@/v1/recipes/recipes.controller';
import { RecipesService } from '@/v1/recipes/recipes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RecipesController', () => {
  let controller: RecipesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipesController],
      providers: [RecipesService],
    }).compile();

    controller = module.get<RecipesController>(RecipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
