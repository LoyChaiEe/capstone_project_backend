const express = require("express");
const router = express.Router();

class LQARouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.get("/", this.controller.getAll.bind(this.controller));
    //router.get("/:lesson_id",this.controller.getLessonQuestionHiragana.bind(this.controller));
    router.get("/questions/get/:lesson_id", this.controller.getQuestionID.bind(this.controller));
    return router;
  }
}

module.exports = LQARouter;
