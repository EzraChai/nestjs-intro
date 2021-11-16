import { Injectable, NestMiddleware, HttpException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { students } from "src/app/db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const studentId = req.params.studentId;
        const studentExist = students.some(
            (student) => student.id === studentId,
        );
        if (!studentExist) {
            throw new HttpException("Student not found", 400);
        }
        next();
    }
}
