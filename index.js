// Required backend libraries
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const { auth } = require("express-oauth2-jwt-bearer");
const domain = process.env.AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;

const db = require("./db/models/index");
const { user, character } = db;

// Routers
const UsersRouter = require("./routers/usersRouter");
const CharactersRouter = require("./routers/charactersRouter");
// Controllers
const UsersController = require("./controllers/usersController");
const CharactersController = require("./controllers/charactersController");

//Authorization middleware
const checkJwt = auth({
  audience: `${audience}`,
  issuerBaseURL: `${domain}`,
});
console.log(character);
const PORT = process.env.PORT;
const app = express();

// enable CORS access to this server and middle wares
app.use(cors("*"));
app.use(express.json());

// initializing Controllers
const usersController = new UsersController(user);
const charactersController = new CharactersController(character);
// initializing routers
const usersRouter = new UsersRouter(usersController, checkJwt).routes();
const charactersRouter = new CharactersRouter(charactersController).routes();
// routers
app.use("/users", usersRouter);
app.use("/words", charactersRouter);

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
