import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { Assignment } from '../interfaces/assignment.interface'
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AssignmentsService {

  constructor (private prisma: PrismaService) {}

  async create(data) {
    this.prisma.assignment.create({data});
  }

  async findAll():Promise<Assignment[]> {
    return this.prisma.assignment.findMany();
  }

  async findOne(id: number):Promise<Assignment | null>  {
    return this.prisma.assignment.findUnique({ where: { id } });
  }

  update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    return `This action updates a #${id} assignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignment`;
  }
}
