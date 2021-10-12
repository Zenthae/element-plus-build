import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { RecipesModule } from '@/v1/recipes/recipes.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { IngredientsModule } from './api/v1/ingredients/ingredients.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.DB_URL,
      port: parseInt(env.DB_PORT),
      username: env.DB_LOGIN,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
      schema: 'public',
      synchronize: env.NODE_ENV === 'development' ? true : false,
      autoLoadEntities: true,
    }),
    RecipesModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
