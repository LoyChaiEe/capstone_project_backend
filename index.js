// Required backend libraries
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const { auth } = require("express-oauth2-jwt-bearer");
const domain = process.env.AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;

const db = require("./db/models/index");
const { user, character, answer, lesson, lessonQuestion, lessonWord, question, userLesson, userWordbank } = db

// Routers
const UsersRouter = require("./routers/usersRouter");
const CharactersRouter = require("./routers/charactersRouter");
const TestRouter = require("./routers/testRouter")
// Controllers
const UsersController = require("./controllers/usersController");
const CharactersController = require("./controllers/charactersController");
const TestController = require("./controllers/testController")

//Authorization middleware
const checkJwt = auth({
  audience: `${audience}`,
  issuerBaseURL: `${domain}`,
});
const PORT = process.env.PORT;
const app = express();

// enable CORS access to this server and middle wares
app.use(cors("*"));
app.use(express.json());

// initializing Controllers
const usersController = new UsersController(user);
const charactersController = new CharactersController(character)
const testController = new TestController(
  user,
  character,
  answer,
  lesson,
  lessonQuestion,
  lessonWord,
  question,
  userLesson,
  userWordbank
);
// initializing routers
const userRouter = new UsersRouter(usersController).routes();
const characterRouter = new CharactersRouter(charactersController).routes();
const testRouter = new TestRouter(testController).routes();
// routers
app.use("/users", userRouter);
app.use("/characters", characterRouter);
app.use("/tests", testRouter);

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
