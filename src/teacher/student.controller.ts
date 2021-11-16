import { StudentService } from "./../student/student.service";
import {
    FindStudentsResponseDto,
    StudentResponseDto,
} from "./../student/dto/student.dto";
import { Controller, Get, Param, ParseUUIDPipe, Put } from "@nestjs/common";

@Controller("teachers/:teacherId/students")
export class StudentTeacherController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(
        @Param("teacherId", new ParseUUIDPipe()) teacherId: string,
    ): FindStudentsResponseDto[] {
        return this.studentService.getStudentsByTeacherId(teacherId);
    }

    @Put("/:studentId")
    updateStudentTeacher(
        @Param("teacherId", new ParseUUIDPipe()) teacherId: string,
        @Param("studentId", new ParseUUIDPipe()) studentId: string,
    ): StudentResponseDto {
        return this.studentService.updateStudentTeacher(teacherId, studentId);
    }
}
