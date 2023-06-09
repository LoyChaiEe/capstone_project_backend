// Required backend libraries
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const { auth } = require("express-oauth2-jwt-bearer");
const domain = process.env.AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;

const db = require("./db/models/index");
const {
  user,
  character,
  lesson,
  lessonWord,
  question,
  userLesson,
  userWordbank,
  lesson_question_answer,
  voicevox,
} = db;

// Routers
const UsersRouter = require("./routers/usersRouter");
const CharactersRouter = require("./routers/charactersRouter");
const UserLessonsRouter = require("./routers/userLessonRouter");
const UserWordbanksRouter = require("./routers/userWordbanksRouter");
const LQARouter = require("./routers/LQARouter");
const QuestionsRouter = require("./routers/questionRouter");
const TestRouter = require("./routers/testRouter");
const VoicevoxRouter = require("./routers/voicevoxRouter");
// Controllers
const UsersController = require("./controllers/usersController");
const CharactersController = require("./controllers/charactersController");
const UserLessonsController = require("./controllers/userLessonsController");
const UserWordbanksController = require("./controllers/userWordbanksController");
const LQAController = require("./controllers/LQAController");
const QuestionsController = require("./controllers/questionController");
const TestController = require("./controllers/testController");
const VoicevoxController = require("./controllers/voicevoxController");

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
const charactersController = new CharactersController(character);
const userLessonsController = new UserLessonsController(
  userLesson,
  user,
  lesson
);
const userWordbanksController = new UserWordbanksController(
  userWordbank,
  user,
  character,
  lessonWord
);
const lessonQuestionsController = new LQAController(
  lesson_question_answer,
  lesson,
  question,
  character,
  userWordbank,
  lessonWord
);
const questionsController = new QuestionsController(
  character,
  lesson_question_answer
);
const testController = new TestController(
  user,
  character,
  lesson,
  lessonWord,
  question,
  userLesson,
  userWordbank,
  lesson_question_answer
);
const voicevoxController = new VoicevoxController(voicevox);
// initializing routers
const userRouter = new UsersRouter(usersController, checkJwt).routes();
const characterRouter = new CharactersRouter(
  charactersController,
  checkJwt
).routes();
const userWordbanksRouter = new UserWordbanksRouter(
  userWordbanksController
).routes();
const userLessonsRouter = new UserLessonsRouter(userLessonsController).routes();
const lessonQuestionAnswerRouter = new LQARouter(
  lessonQuestionsController,
  checkJwt
).routes();
const questionsRouter = new QuestionsRouter(
  questionsController,
  checkJwt
).routes();
const testRouter = new TestRouter(testController).routes();
const voicevoxRouter = new VoicevoxRouter(voicevoxController).routes();
// routers
app.use("/users", userRouter);
app.use("/characters", characterRouter);
app.use("/userLesson", userLessonsRouter);
app.use("/userWordbank", userWordbanksRouter);
app.use("/LQA", lessonQuestionAnswerRouter);
app.use("/questions", questionsRouter);
app.use("/tests", testRouter);
app.use("/voicevoxes", voicevoxRouter);

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
