import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getUsers')
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
  @Post('/createUser')
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('age') age?: number,
  ): Promise<User> {
    return this.userService.createUser(name, email, age);
  }
  @Put(':id')
  async updateUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('age') age?: number,
  ): Promise<User> {
    return this.userService.updateUser(name, email, age);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<{ message: string }> {
    await this.userService.deleteUser(id);
    return { message: 'User deleted successfully' };
  }
}
