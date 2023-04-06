const BaseController = require("./baseController");
const { Op } = require("sequelize");

class UserLessonsController extends BaseController {
  //model is user model
  constructor(model, user, lesson) {
    super(model);
    this.user = user;
    this.lesson = lesson;
  }
  //Insert your controller's function here
  async getUserProgress(req, res){
    const { id:userID }= req.params
    try {
      const userProgress = await this.model.findAll({
        include: [{model: this.user, where:{id: userID}}, {model: this.lesson}]
      });
      return res.json(userProgress);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
} 
module.exports = UserLessonsController;
