import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { students } from '../db';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudent(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(
    payload: UpdateStudentDto,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
        return updatedStudent;
      } else {
        return student;
      }
    });

    this.students = updatedStudentList;
    console.log('this students:', this.students);
    return updatedStudent;
  }
}
