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
          { model: this.lesson, where: { type: "hiragana" } },
        ],
        order: [["lesson_id", "DESC"]],
        limit: 1,
      });
      const latestLessonId = userProgress[0]?.lesson_id || 11;
      return res.json(latestLessonId);
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
          { model: this.lesson, where: { type: "katakana" } },
        ],
        order: [["lesson_id", "DESC"]],
        limit: 1,
      });
      const latestLessonId = userProgress[0]?.lesson_id || 21;
      return res.json(latestLessonId);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getUserProgressVocab(req, res) {
    const { id: userID } = req.params;
    const user_id = parseInt(userID);
    try {
      const userProgress = await this.model.findAll({
        include: [
          { model: this.user, where: { id: user_id } },
          { model: this.lesson, where: { type: "vocabs" } },
        ],
        order: [["lesson_id", "DESC"]],
        limit: 1,
      });
      const latestLessonId = userProgress[0]?.lesson_id || 1;
      return res.json(latestLessonId);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addNewUserLesson(req, res) {
    const { user_id, lesson_id } = req.body;
    console.log(user_id, lesson_id);
    try {
      console.log("yay");
      const addNewLesson = await this.model.findOrCreate({
        where: {
          userId: user_id,
          lessonId: lesson_id,
        },
      });
      console.log("ADDED", addNewLesson);
      return res.json(addNewLesson);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = UserLessonsController;
