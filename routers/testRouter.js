const express = require("express");
const router = express.Router();

class TestRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.get(
      "/questions/get/:lesson_id",
      this.controller.getQuestionID.bind(this.controller)
    );

    return router;
  }
}

module.exports = TestRouter;
