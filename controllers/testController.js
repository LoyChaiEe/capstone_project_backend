const BaseController = require("./baseController");
const { Op } = require("sequelize");

class TestController extends BaseController {
  //model is user model
  constructor(
    model,
    character,
    answer,
    lesson,
    lessonQuestion,
    lessonWord,
    question,
    userLesson,
    userWordbank
  ) {
    super(model);
    this.character = character;
    this.answer = answer;
    this.lesson = lesson;
    this.lessonQuestion = lessonQuestion;
    this.lessonWord = lessonWord;
    this.question = question;
    this.userLesson = userLesson;
    this.userWordbank = userWordbank;
  }
  //Insert your controller's function here
}
module.exports = TestController;
