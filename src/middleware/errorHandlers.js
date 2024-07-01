export const serverErrorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
};

export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
};
