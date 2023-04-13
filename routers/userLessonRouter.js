const express = require("express");
const router = express.Router();

class UserLessonsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/hiragana/:id", this.controller.getUserProgressHiragana.bind(this.controller));
    router.get("/katakana/:id", this.controller.getUserProgressKatakana.bind(this.controller));
    router.get("/vocabs/:id", this.controller.getUserProgressVocab.bind(this.controller));
    return router;
  }
}

module.exports = UserLessonsRouter;
