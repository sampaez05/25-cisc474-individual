import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor (private prisma: PrismaService) {}

  create(data) {
    this.prisma.user.create({data});
  }

  async findAll():Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number):Promise<User | null>  {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
