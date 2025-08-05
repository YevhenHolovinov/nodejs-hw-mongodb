import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export function isValidId(req, res, next) {
  if (isValidObjectId(req.params.id) !== true) {
    throw createHttpError(400, 'Bad Request');
    //return next(new createHttpError.BadRequest('ID is not valid'));
  }
  next();
}
