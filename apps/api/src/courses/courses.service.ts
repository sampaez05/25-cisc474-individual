import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma.service';
import { Course } from 'src/interfaces/course.interface';

@Injectable()
export class CoursesService {

  constructor (private prisma: PrismaService) {}

  create(data) {
    this.prisma.course.create({data});
  }

  async findAll():Promise<Course[]> {
    return this.prisma.course.findMany();
  }

  async findOne(id: number):Promise<Course | null>  {
    return this.prisma.course.findUnique({ where: { id } });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
