const express = require("express");
const { PORT, DB_SYNC } = require("./config/serverConfig");
const bodyParser = require("body-parser");

const Router = require("./router/index");
const db = require("./models/index");
// const bcrypt = require("bcrypt");
// const { user } = require("./models/index");
// const UserRepository = require("./repository/user-repository");
// const UserService = require("./services/user-service");
// const { DB_SYNC } = require("./config");

const prepareAndStartServer = async () => {
  //
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", Router);
  //
  app.listen(PORT, async () => {
    if (DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }

    const u1 = await db.user.findByPk(2);
    const r1 = await db.Role.findByPk(1);

    // u1.addRole(r1);
    // const response = await u1.getRoles();
    // console.log(response);/
    console.log("Server started on the PORT ", PORT);
  });
};

prepareAndStartServer();
