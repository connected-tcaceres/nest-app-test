import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return 'All Teachers';
  }

  @Get(':teacherId')
  getTeacher(@Param('teacherId') teacherId: string): FindTeacherResponseDto {
    return `Get teacher with Id ${teacherId}`;
  }
}
