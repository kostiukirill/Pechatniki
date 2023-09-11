import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/user.dto';
import { v4 as uuidv4 } from 'uuid';
import { createRandomPassword } from 'src/middleware/createPassword.middleware';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  async createUser(userdto: CreateUserDto) {
    const password = createRandomPassword();
    const salt = 10;
    const userReq = {
      ...userdto,
      id: uuidv4(),
      password: bcrypt.hash(password, salt),
    };
    const user = await this.userRepository.create(userReq);
    return user;
  }
  async getUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
