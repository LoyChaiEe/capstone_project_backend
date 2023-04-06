const BaseController = require("./baseController");
const { Op } = require("sequelize");

class LQAController extends BaseController {
  //model is user model
  constructor(model, lesson, question, character) {
    super(model);
    this.lesson = lesson;
    this.question = question;
    this.character = character;
    console.log(model)
  }
  //Insert your controller's function here
  async getLessonQuestionHiragana(req, res) {
    const { lesson_id } = req.params;
    //this is lazy loading cause of how the database is structure, can change later
    try {
      const lessonQuestion = await this.model.findAll({
        include: [
          { model: this.lesson, where: { id: lesson_id } },
          { model: this.question},
          { model: this.character}
        ],
      });
      return res.json(lessonQuestion);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = LQAController;
