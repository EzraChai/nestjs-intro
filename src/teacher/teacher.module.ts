import { StudentService } from "./../student/student.service";
import { TeacherService } from "./teacher.service";
import { StudentTeacherController } from "./student.controller";
import { TeacherController } from "./teacher.controller";
import { Module } from "@nestjs/common";

@Module({
    controllers: [TeacherController, StudentTeacherController],
    providers: [TeacherService, StudentService],
})
export class TeacherModule {}
