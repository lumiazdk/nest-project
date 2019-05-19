import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Users } from '../users/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Users)
    private readonly UsersRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) { }
  async createToken(user) {
    await this.UsersRepository.save(user);
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return payload;
  }
}