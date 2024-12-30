const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Something wnet wrong",
      err: "Email or password missing in the signup request",
    });
  }
};

module.exports = {
  validateUserAuth,
};
