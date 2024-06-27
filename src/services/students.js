import { ContactsCollection } from '../db/models/student.js';

export const getAllStudents = async () => {
  const students = await ContactsCollection.find();
  return students;
};

export const getStudentById = async (studentId) => {
  const student = await ContactsCollection.findById(studentId);
  return student;
};
