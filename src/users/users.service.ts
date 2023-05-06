import { User } from '@app/common/database/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRequest } from './requests/CreateUser.request';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getUsers() {
    return await this.userRepository.find();
  }

  async createUser(userRequest: CreateUserRequest) {
    const user = this.userRepository.create(userRequest);

    await this.userRepository.save(user);
  }
}
