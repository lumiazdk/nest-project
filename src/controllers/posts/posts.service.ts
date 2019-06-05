import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly PostsRepository: Repository<Posts>,
  ) {}

  async findAll(): Promise<Posts[]> {
    return await this.UsersRepository.find();
  }
  async create(data): Promise<Posts[]> {
    return await this.PostsRepository.save(data);
  }
}
