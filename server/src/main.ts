import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { Recipe } from 'src/recipes/entities/recipe.entity';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(env.APP_PORT);

  const r1 = new Recipe();

  r1.id;

  console.log(`Server listening on http://localhost:${env.APP_PORT}`);
}

bootstrap();
