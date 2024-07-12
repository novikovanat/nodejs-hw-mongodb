import { FIRST_ENTRY } from '../constants/studentConstants.js';
import { getAllStudents } from '../services/studentsServices.js';

export const getExampleEntry = async() => {
  const firstEntry = await getAllStudents(FIRST_ENTRY);
  return firstEntry;
//   const exempleKeys = Object.keys(firstEnty.data);
//   return(console.log('ExampleEntry', exempleKeys));
};

getExampleEntry();