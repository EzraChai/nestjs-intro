import { ValidStudentMiddleware } from './valid-student.middleware';

describe('ValidStudentMiddleware', () => {
  it('should be defined', () => {
    expect(new ValidStudentMiddleware()).toBeDefined();
  });
});
