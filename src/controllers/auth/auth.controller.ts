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
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiImplicitFile,
  ApiConsumes,
  ApiUseTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidationPipe } from '../../pips/validation.pipe';
import { join } from 'path';
import { createWriteStream } from 'fs';
import { UtilsService } from '../../utils/utils.service';

@ApiUseTags('users')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly UtilsService: UtilsService,
  ) {}

  @Post('register')
  async createToken(@Body(new ValidationPipe()) data: CreateUserDto) {
    let token = await this.authService.createToken(data);
    let result = this.UtilsService.success(token);
    return await result;
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({ name: 'files', required: true, description: '头像' })
  async createAvatar(@UploadedFiles() files) {
    const writeImage = createWriteStream(
      join(__dirname, '../../..', 'upload', `${files[0].originalname}`),
    );
    writeImage.write(files[0].buffer);
    return this.UtilsService.success({});
  }
}
