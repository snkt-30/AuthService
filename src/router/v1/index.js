const express = require("express");

const UserController = require("../../controllers/user-controller");
const { AuthRequestValidators } = require("../../middlewares/index");

const router = express.Router();

router.post("/signup", UserController.create);
router.post(
  "/signin",
  AuthRequestValidators.validateUserAuth,
  UserController.signIn
);

router.get("/isAuthenticated", UserController.isAuthenticated);
router.get(
  "/isAdmin",
  AuthRequestValidators.isAdminAuthRequestValidator,
  UserController.isAdmin
);

module.exports = router;
