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
  async getUserProgressHiragana(req, res) {
    const { id: userID } = req.params;
    try {
      const userProgress = await this.model.findAll({
        include: [
          { model: this.user, where: { id: userID } },
          { model: this.lesson, where: { type: "hiragana"} },
        ],
      });
      return res.json(userProgress);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  async getUserProgressKatakana(req, res) {
    const { id: userID } = req.params;
    try {
      const userProgress = await this.model.findAll({
        include: [
          { model: this.user, where: { id: userID } },
          { model: this.lesson, where: { type: "katakana"} },
        ],
      });
      return res.json(userProgress);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  async getUserProgressVocab(req, res) {
    const { id: userID } = req.params;
    try {
      const userProgress = await this.model.findAll({
        include: [
          { model: this.user, where: { id: userID } },
          { model: this.lesson, where: { type: "vocabs" } },
        ],
      });
      return res.json(userProgress);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
} 
module.exports = UserLessonsController;
