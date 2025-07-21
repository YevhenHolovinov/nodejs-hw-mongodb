import { isHttpError } from 'http-errors';

export function errorHendler(error, req, res, next) {
  if (isHttpError(error) === true) {
    return res
      .status(error.statusCode)
      .json({ status: error.statusCode, message: error.message });
  }

  console.error(error);
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
  });
}
