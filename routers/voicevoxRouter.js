const express = require("express");
const router = express.Router();

class VoicevoxRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.get("/voicevox", this.controller.getAll.bind(this.controller));
    router.get("/voicevox/:id", this.controller.getOne.bind(this.controller));
    return router;
  }
}

module.exports = VoicevoxRouter;
