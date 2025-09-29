import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { PrismaService } from 'src/prisma.service';
import { Grade } from 'src/interfaces/grade.interface';

@Injectable()
export class GradesService {
  constructor (private prisma: PrismaService) {}

  create(data) {
    this.prisma.grade.create({data});
  }

  async findAll():Promise<Grade[]> {
    return this.prisma.grade.findMany();
  }

  async findOne(id: number):Promise<Grade | null>  {
    return this.prisma.grade.findUnique({ where: { id } });
  }

  update(id: number, updateGradeDto: UpdateGradeDto) {
    return `This action updates a #${id} grade`;
  }

  remove(id: number) {
    return `This action removes a #${id} grade`;
  }
}
