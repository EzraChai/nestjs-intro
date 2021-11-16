import {
    FindStudentsResponseDto,
    StudentResponseDto,
    CreateStudentDto,
    UpdateStudentDto,
} from "./dto/student.dto";
import { students } from "./../app/db";
import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";
@Injectable()
export class StudentService {
    private students = students;

    getStudents(): FindStudentsResponseDto[] {
        return this.students;
    }

    getStudentById(studendId: string): StudentResponseDto {
        return this.students.find((student) => student.id === studendId);
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
                return (updatedStudent = {
                    id: studentId,
                    ...payload,
                });
            } else return student;
        });

        this.students = updatedStudentList;

        return updatedStudent;
    }

    getStudentsByTeacherId(teacherId: string): FindStudentsResponseDto[] {
        return this.students.filter((student) => {
            return student.teacher === teacherId;
        });
    }

    updateStudentTeacher(
        teacherId: string,
        studentId: string,
    ): StudentResponseDto {
        let updatedStudent: StudentResponseDto;

        const updatedStudentList = this.students.map((student) => {
            if (student.id === studentId) {
                updatedStudent = {
                    ...student,
                    teacher: teacherId,
                };
                return updatedStudent;
            } else return student;
        });

        this.students = updatedStudentList;

        return updatedStudent;
    }
}
