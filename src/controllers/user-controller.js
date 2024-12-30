const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(response);
    return res.status(201).json({
      data: response,
      success: true,
      message: "User created successfully",
      error: {},
    });
  } catch (error) {
    console.log("error is :", error);
    return res.status(501).json({
      data: {},
      success: false,
      message: "Failed to create User",
      error: error,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.email,
      req.body.password
    );

    return res.status(200).json({
      data: response,
      success: true,
      message: "User login successfully",
      error: {},
    });
  } catch (error) {
    console.log("error is :", error);
    return res.status(501).json({
      data: {},
      success: false,
      message: "Failed to create User",
      error: error,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = this.userService.isAuthenticated(token);
    return res.status(200).json({
      data: response,
      success: true,
      message: "user ia authenticated and token is valid",
      error: {},
    });
  } catch (error) {
    console.log("error is :", error);
    return res.status(501).json({
      data: {},
      success: false,
      message: "Failed to create User",
      error: error,
    });
  }
};

module.exports = {
  create,
  signIn,
  isAuthenticated,
};
