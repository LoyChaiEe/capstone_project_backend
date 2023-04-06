const express = require("express");
const router = express.Router();

class UserLessonsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:id", this.controller.getUserProgress.bind(this.controller));
    return router;
  }
}

module.exports = UserLessonsRouter;
