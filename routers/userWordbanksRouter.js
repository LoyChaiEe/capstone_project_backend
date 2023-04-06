const express = require("express");
const router = express.Router();

class UserWordbanksRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/hiragana/:id", this.controller.getUserHiraganaBank.bind(this.controller));
    router.get("/katakana/:id", this.controller.getUserKatakanaBank.bind(this.controller));
    router.get("/vocabs/:id", this.controller.getUserVocabBank.bind(this.controller));
    return router;
  }
}

module.exports = UserWordbanksRouter;
