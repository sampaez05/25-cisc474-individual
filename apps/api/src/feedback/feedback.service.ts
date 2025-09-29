import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { PrismaService } from 'src/prisma.service';
import { Feedback } from 'src/interfaces/feedback.interface';

@Injectable()
export class FeedbackService {
  
  constructor (private prisma: PrismaService) {}

  create(data) {
    this.prisma.feedback.create({data});
  }

  async findAll():Promise<Feedback[]> {
    return this.prisma.feedback.findMany();
  }

  async findOne(id: number):Promise<Feedback | null>  {
    return this.prisma.feedback.findUnique({ where: { id } });
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return `This action updates a #${id} feedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
