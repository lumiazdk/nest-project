import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { PassportModule } from '@nestjs/passport';
import { UtilsService } from '../../utils/utils.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posts]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [PostsService, UtilsService],
  controllers: [PostsController],
})
export class PostsModule {}
