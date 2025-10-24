import { Injectable } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { PrismaService } from 'src/prisma.service';
import { Submission } from 'src/interfaces/submission.interface';

@Injectable()
export class SubmissionsService {
  constructor (private prisma: PrismaService) {}

  create(data) {
    this.prisma.submission.create({data});
  }

  async findAll():Promise<Submission[]> {
    return this.prisma.submission.findMany();
  }

  async findOne(id: number):Promise<Submission | null>  {
    return this.prisma.submission.findUnique({ where: { id } });
  }

  update(id: number, updateSubmissionDto: UpdateSubmissionDto) {
    return `This action updates a #${id} submission`;
  }

  remove(id: number) {
    return `This action removes a #${id} submission`;
  }
}