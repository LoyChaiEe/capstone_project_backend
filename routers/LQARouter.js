const express = require("express");
const router = express.Router();

class LQARouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.get("/", this.controller.getAll.bind(this.controller));
    //router.get("/:lesson_id",this.controller.getLessonQuestionHiragana.bind(this.controller));
    router.get(
      "/questions/get/:lesson_id",
      this.checkJwt, // auth should run before running any DB queries
      this.controller.getQuestionID.bind(this.controller),
    );
    router.get(
      "/lesson/words/:lesson_id",
      this.checkJwt, // auth should run before running any DB queries
      this.controller.getLessonWords.bind(this.controller),
    );

    return router;
  }
}

module.exports = LQARouter;
