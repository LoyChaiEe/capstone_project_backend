const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    //Insert routes and controller's api calls here
    // should never have a route to get all users, very unsafe
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:userEmail", this.controller.getOne.bind(this.controller));
    router.post(
      "/newUser",
      this.controller.addOne.bind(this.controller),
      this.checkJwt
    );
    router.put(
      "/photoUrl",
      this.controller.updatePhotoURL.bind(this.controller),
      this.checkJwt
    );
    router.put(
      "/profile",
      this.controller.updateProfile.bind(this.controller),
      this.checkJwt
    );
    return router;
  }
}

module.exports = UsersRouter;
