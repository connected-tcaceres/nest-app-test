import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentResponseDto } from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
    return `Get all students that belong to teacher with Id ${teacherId}`;
  }

  @Put(':studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return `Update student with id ${studentId} to teacher with id ${teacherId}`;
  }
}
