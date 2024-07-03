import { HttpError } from 'http-errors';

export const serverErrorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    res.status(error.status).json({
      status: error.status,
      message: error.name,
      data: error,
    });
    return;
  }

  res.status(500).json({
    message: 'Something went wrong',
    error: error.message,
  });
};

export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
};
