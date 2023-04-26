const express = require("express");
const router = express.Router();

class CharactersRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/hiragana", this.controller.getHiragana.bind(this.controller));
    router.get("/katakana", this.controller.getKatakana.bind(this.controller));
    router.get("/vocabs", this.controller.getVocabs.bind(this.controller));
    return router;
  }
}

module.exports = CharactersRouter;
