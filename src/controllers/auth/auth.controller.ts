import { Controller, Get, Post, Body, UseInterceptors, UploadedFiles, UseGuards, Req } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import { AuthService } from './auth.service';
import { CreateUserDto } from './create-user.dto'
import { ValidationPipe } from '../../pips/validation.pipe'
import { join } from 'path';
import { createWriteStream } from 'fs';
import { UtilsService } from '../../utils/utils.service'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,private readonly UtilsService: UtilsService) { }

    @Post('register')
    async createToken(@Body(new ValidationPipe()) data: CreateUserDto) {
        let result=this.UtilsService.success(this.authService.createToken(data))
        return await result;
    }

    @Post('upload')
    @UseInterceptors(FilesInterceptor('files'))
    async createAvatar(@UploadedFiles() files) {
        const writeImage = createWriteStream(join(__dirname, '../../..', 'upload', `${files[0].originalname}`))
        writeImage.write(files[0].buffer)
        return [];
    }

}
