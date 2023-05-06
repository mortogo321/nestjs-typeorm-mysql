import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';
import { plainToInstance } from 'class-transformer';
import { CreateUserRequest } from './requests/CreateUser.request';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.getUsers();

    return users;
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = plainToInstance(CreateUserRequest, createUserDto);

    return await this.userService.createUser(user);
  }
}
