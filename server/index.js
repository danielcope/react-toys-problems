require("dotenv").config();
const express = require("express");
const session = require("express-session");
const keys = require("./controllers/keys");
const app = express();
const { SESSION_SECRET, SERVER_PORT } = process.env;

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 52,
    },
  })
);

app.get( "/api/weather/key", keys.fetchKey );

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port` + " " + SERVER_PORT)
);
