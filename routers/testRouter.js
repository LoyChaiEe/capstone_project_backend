const express = require("express");
const router = express.Router();

// if this is only for development purposes, let's remove it before shipping the app
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
