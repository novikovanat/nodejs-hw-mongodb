import { getAllStudents, getStudentById } from '../services/students.js';
import createHttpError from 'http-errors';

export const getStudentsController = async (req, res) => {
  const students = await getAllStudents();

  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: students,
  });
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  // Відповідь, якщо контакт не знайдено
  if (!student) {
    // 2. Створюємо та налаштовуємо помилку
    next(createHttpError(404, 'Student not found'));
    return;
  }

  // Відповідь, якщо контакт знайдено
  res.status(200).json({
    status: 200,
    data: student,
    message: `Successfully found student with id ${studentId}!`,
  });
};
