//This router is to process logic for the question components
const express = require("express");
const router = express.Router();

class QuestionsRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.post(
      "/translation/input",
      this.controller.randomTranslationInput.bind(this.controller),
      this.checkJwt
    );
    router.post(
      "/translation/verify",
      this.controller.translationVerify.bind(this.controller),
      this.checkJwt
    );
    router.post(
      "/meaning/words",
      this.controller.randomMeaningWords.bind(this.controller),
      this.checkJwt
    );
    router.post(
      "/meaning/verify",
      this.controller.meaningVerify.bind(this.controller),
      this.checkJwt
    );
    router.post(
      "/matching/random",
      this.controller.randomMatchingInput.bind(this.controller),
      this.checkJwt
    );
    router.post(
      "/matching/verify",
      this.controller.matchingVerify.bind(this.controller),
      this.checkJwt
    );
    router.post(
      "/recognition/input",
      this.controller.randomRecognitionInput.bind(this.controller),
      this.checkJwt
    );
    router.post(
      "/recognition/verify",
      this.controller.recognitionVerify.bind(this.controller),
      this.checkJwt
    );
    return router;
  }
}

module.exports = QuestionsRouter;
