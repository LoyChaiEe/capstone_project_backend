const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //Insert routes and controller's api calls here
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:email", this.controller.getOne.bind(this.controller));
    router.post("/newUser", this.controller.addOne.bind(this.controller));
    return router;
  }
}

module.exports = UsersRouter;
