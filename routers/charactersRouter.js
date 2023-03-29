const express = require("express");
const router = express.Router();

class CharactersRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //Insert routes and controller's api calls here
    return router;
  }
}

module.exports = CharactersRouter;
