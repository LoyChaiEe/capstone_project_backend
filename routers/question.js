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
      "/translation/input",
      this.controller.randomTranslationInput.bind(this.controller)
    );
    router.post(
      "/translation/verify",
      this.controller.translationVerify.bind(this.controller)
    );
    router.post(
      "/meaning/input",
      this.controller.randomMeaningInput.bind(this.controller)
    );
    router.post(
      "/meaning/verify",
      this.controller.meaningVerify.bind(this.controller)
    );
    router.post(
      "/matching/random",
      this.controller.randomMatchingInput.bind(this.controller)
    );
    router.post(
      "/matching/verify",
      this.controller.matchingVerify.bind(this.controller)
    );
    return router;
  }
}

module.exports = QuestionsRouter;
