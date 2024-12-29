const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");

const prepareAndStartServer = async () => {
  //
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //
  app.listen(PORT, async () => {
    console.log("Server started on the PORT ", PORT);
  });
};

prepareAndStartServer();
