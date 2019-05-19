import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import {
  ApiImplicitFile,
  ApiConsumes,
  ApiUseTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
@ApiUseTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard())
  findAllUser() {
    return this.UsersService.findAll();
  }
}
