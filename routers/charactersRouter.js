const express = require("express");
const router = express.Router();

class CharactersRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/hiragana", this.controller.getHiragana.bind(this.controller));
    router.get(
      "/hiraganaBasic",
      this.controller.getHiraganaBasic.bind(this.controller)
    );
    router.get(
      "/hiraganaDakuon",
      this.controller.getHiraganaDakuon.bind(this.controller)
    );
    router.get("/katakana", this.controller.getKatakana.bind(this.controller));
    router.get(
      "/katakanaBasic",
      this.controller.getKatakanaBasic.bind(this.controller)
    );
    router.get(
      "/katakanaDakuon",
      this.controller.getKatakanaDakuon.bind(this.controller)
    );
    router.get("/vocabs", this.controller.getVocabs.bind(this.controller));
    return router;
  }
}

module.exports = CharactersRouter;
