const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Something wnet wrong",
      err: "Email or password missing in the signup request",
    });
  }
  next();
};

const isAdminAuthRequestValidator = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "User Id is not given",
      error: "Invalid request",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
  isAdminAuthRequestValidator,
};
