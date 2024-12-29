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
    // const repo = new UserRepository();
    // console.log(await repo.getById(1));

    // const incomingPassoword = "Sanket@1130";
    // const res = await user.findByPk(2);
    // const response = bcrypt.compareSync(incomingPassoword, res.password);
    // console.log(response);

    const service = new UserService();
    // const response = await service.createToken({
    //   email: "Sakshi@gmail.com",
    //   id: 2,
    // // });
    // const response = service.verifyToken(token);
    // console.log(response);

    console.log("Server started on the PORT ", PORT);
  });
};

prepareAndStartServer();
