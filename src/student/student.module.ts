import { ValidStudentMiddleware } from "./../app/common/middleware/valid-student.middleware";
import { StudentService } from "./student.service";
import { StudentController } from "./student.controller";
import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from "@nestjs/common";

@Module({ controllers: [StudentController], providers: [StudentService] })
export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: "/students/:studentId",
            method: RequestMethod.GET,
        });
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: "/students/:studentId",
            method: RequestMethod.PUT,
        });
    }
}
