const express = require("express");
const { PORT, JWT_KEY } = require("./config/serverConfig");
const bodyParser = require("body-parser");

const Router = require("./router/index");
const bcrypt = require("bcrypt");
const { user } = require("./models/index");
// const UserRepository = require("./repository/user-repository");
const UserService = require("./services/user-service");

const prepareAndStartServer = async () => {
  //
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", Router);
  //
  app.listen(PORT, async () => {
    console.log("Server started on the PORT ", PORT);
  });
};

prepareAndStartServer();
