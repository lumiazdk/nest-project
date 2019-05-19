import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) { }

  @Get()
  @UseGuards(AuthGuard())
  findAllUser(@Req() request) {
    return this.UsersService.findAll();
  }
}