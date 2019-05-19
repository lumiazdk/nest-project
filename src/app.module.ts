import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AuthService } from './controllers/auth/auth.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthModule } from './controllers/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { join } from 'path';
import { UsersModule } from './controllers/users/users.module';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'lumiazdk640',
      database: 'nest',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      logger: 'advanced-console',
    }),
    UsersModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, UtilsService],
})
export class AppModule implements NestModule {
  constructor(private readonly connection: Connection) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users', 'auth');
  }
}
