const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");

const Router = require("./router/index");
const bcrypt = require("bcrypt");
const { user } = require("./models/index");

const prepareAndStartServer = async () => {
  //
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", Router);
  //
  app.listen(PORT, async () => {
    // const incomingPassoword = "Sanket@1130";
    // const res = await user.findByPk(2);
    // const response = bcrypt.compareSync(incomingPassoword, res.password);
    // console.log(response);
    console.log("Server started on the PORT ", PORT);
  });
};

prepareAndStartServer();
