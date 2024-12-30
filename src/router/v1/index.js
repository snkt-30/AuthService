const express = require("express");

const UserController = require("../../controllers/user-controller");
const AuthRequestValidatorMiddleware = requestAnimationFrameWE;

const router = express.Router();

router.post("/signup", UserController.create);
router.post("/signin", UserController.signIn);

router.get("/isAuthenticated", UserController.isAuthenticated);

module.exports = router;
