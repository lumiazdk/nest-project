import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import {
  ApiImplicitFile,
  ApiConsumes,
  ApiUseTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UtilsService } from '../../utils/utils.service';

@ApiUseTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(
    private readonly UsersService: UsersService,
    private readonly UtilsService: UtilsService,
  ) {}

  @Get()
  @UseGuards(AuthGuard())
  async findAllUser() {
    let users = await this.UsersService.findAll();
    return this.UtilsService.success(users);
  }
}
