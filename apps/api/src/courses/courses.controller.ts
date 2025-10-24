import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseRef, CourseUpdateIn, CourseCreateIn } from '@repo/api/courses';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { JwtUser } from 'src/auth/jwt.strategy';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@CurrentUser() user: JwtUser) {
    console.log('User accessed:', user);
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(Number(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: CourseUpdateIn) {
    return this.coursesService.update(Number(id), updateCourseDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createCourseDto: CourseCreateIn, @CurrentUser() user: JwtUser,) {
    createCourseDto.instructor_id = Number(user.userId);
    return this.coursesService.create(createCourseDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coursesService.delete(Number(id));
  }
}
