import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PostsService } from './posts.service';
import { ValidationPipe } from '../../pips/validation.pipe';
import {
  ApiImplicitFile,
  ApiConsumes,
  ApiUseTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UtilsService } from '../../utils/utils.service';
import { CreatePostsDto } from './dto/create-posts.dto';

@ApiUseTags('users')
@ApiBearerAuth()
@Controller('users')
export class PostsController {
  constructor(
    private readonly PostsService: PostsService,
    private readonly UtilsService: UtilsService,
  ) {}

  @Get()
  @UseGuards(AuthGuard())
  async findAllUser() {
    let users = await this.PostsService.findAll();
    return this.UtilsService.success(users);
  }

  @Post('register')
  async createToken(@Body(new ValidationPipe()) data: CreatePostsDto) {
    await this.PostsService.create(data)
    let result = this.UtilsService.success(data);
    return await result;
  }
}
