const controllerWrapper = (controller) => {
    return async (req, res, next) => {
      try {
        await controller(req, res, next);
      } catch (err) {
        next(err);
      }
    };
  };

  export default controllerWrapper;