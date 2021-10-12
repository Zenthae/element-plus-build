import { AppModule } from '@/app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(env.APP_PORT);

  console.log(`Server listening on http://localhost:${env.APP_PORT}`);
}

bootstrap();
