//This router is to process logic for the question components
const express = require("express");
const router = express.Router();

class QuestionsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.post(
      "/random/input",
      this.controller.randomInput.bind(this.controller)
    );
    return router;
  }
}

module.exports = QuestionsRouter;
