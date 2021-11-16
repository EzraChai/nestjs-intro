import { StudentService } from "./student.service";
import { FindStudentsResponseDto, StudentResponseDto } from "./dto/student.dto";
import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
} from "@nestjs/common";
import { CreateStudentDto, UpdateStudentDto } from "./dto/student.dto";

@Controller("students")
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(): FindStudentsResponseDto[] {
        return this.studentService.getStudents();
    }

    @Get("/:studentId")
    getStudentById(
        @Param("studentId", new ParseUUIDPipe()) studentId: string,
    ): StudentResponseDto {
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
        return this.studentService.createStudent(body);
    }

    @Put("/:studentId")
    updateStudent(
        @Param("studentId", new ParseUUIDPipe()) studentId: string,
        @Body() body: UpdateStudentDto,
    ): StudentResponseDto {
        return this.studentService.updateStudent(body, studentId);
    }
}
