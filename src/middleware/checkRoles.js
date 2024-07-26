import createHttpError from 'http-errors';

import { StudentsCollection } from '../db/models/student.js';
import { ROLES } from '../constants/studentConstants.js';

export const checkRoles =
  (...roles) =>
  async (req, res, next) => {
    const { user } = req;

    if (!user) {
      next(createHttpError(401));
      return;
    }

    const { role } = user;

    if (roles.includes(ROLES.TEACHER) && role === ROLES.TEACHER) {
      next();
      return;
    }

    if (roles.includes(ROLES.PARENT) && role === ROLES.PARENT) {
      const { studentId } = req.params;
      if (!studentId) {
        next(createHttpError(403, 'Access denied'));
        return;
      }

      const student = await StudentsCollection.findOne({
        _id: studentId,
        parentId: user._id,
      });

      if (student) {
        next();
        return;
      }
    }

    next(createHttpError(403, "Nooo Access"));
  };
