import { isValidObjectId } from "mongoose";
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  console.log(req.params);
  const {contactId} = req.params;
  if (!isValidObjectId(contactId)) {
    return next(createHttpError(404, `${contactId} is not valid ID`));
  }
  next();
};
