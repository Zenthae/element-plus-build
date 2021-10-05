import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.DB_URL,
      port: parseInt(env.DB_PORT),
      username: env.DB_LOGIN,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
