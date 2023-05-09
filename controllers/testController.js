const lesson_question_answer = require("../db/models/lesson_question_answer");
const BaseController = require("./baseController");
const { Op } = require("sequelize");

// test code should be removed once we dont need it
class TestController extends BaseController {
  //model is user model
  constructor(
    model,
    character,
    lesson,
    lessonWord,
    question,
    userLesson,
    userWordbank,
    lesson_question_answer
  ) {
    super(model);
    this.character = character;
    this.lesson = lesson;
    this.lessonWord = lessonWord;
    this.question = question;
    this.userLesson = userLesson;
    this.userWordbank = userWordbank;
    this.LQA = lesson_question_answer;
  }
  //Insert your controller's function here
  async getQuestionID(req, res) {
    //req LQA
    const { lesson_id } = req.params;
    try {
      // Retrieve all
      const questions = await this.LQA.findAll({
        where: { lesson_id: lesson_id },
        include: [{ model: this.character }, { model: this.question }],
      });
      //Find recognition question
      const matchingData = questions.filter((obj) =>
        obj.question.type.includes("matching")
      );
      //Get matching questionID
      const uniqueQuestionIds = {};
      const questionIDs = [];
      for (let i = 0; i < matchingData.length; i++) {
        const questionId = matchingData[i].question_id;
        if (!uniqueQuestionIds[questionId]) {
          uniqueQuestionIds[questionId] = true;
          questionIDs.push(questionId);
        }
      }
      //Re-format data retrieve into the database into a more simplified one to one form
      const questionDatas = [];
      for (let i = 0; i < 5; i++) {
        const questionData = matchingData.filter(
          (question) => question.question_id === questionIDs[i]
        );
        const answer = questionData
          .map((q) => q.character.character)
          .join("、");
        const answer_pronounciation = questionData
          .map((q) => q.character.pronounciation)
          .join(",");
        const meaning = questionData.map((q) => q.character.meaning).join(",");
        const data = {
          question_id: questionData[0].question_id,
          lesson_id: questionData[0].lesson_id,
          question: questionData[0].question.question,
          difficulty: questionData[0].difficulty,
          question_type: questionData[0].question.type,
          answer: answer.replace(/\s+/g, ""), //regex to remove whitespace
          answer_pronounciation: answer_pronounciation.replace(/\s+/g, ""),
          meaning: meaning.replace(/\s+/g, ""),
          audio_disabled: questionData[0].audio_disabled,
        };
        questionDatas.push(data);
      }

      return res.json(questionDatas);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = TestController;

//Re-format data retrieve into the database into a more simplified one to one form
// const questionDatas = [];
// for (let i = 0; i < 15; i++) {
//   const questionData = selectedQuestionDatas.filter(
//     (question) => question.question_id === selectedQuestionID[i]
//   );
//   const answer = questionData
//     .map((q) => q.character.character)
//     .join("、");
//   const answer_pronounciation = questionData
//     .map((q) => q.character.pronounciation)
//     .join(",");
//   const meaning = questionData.map((q) => q.character.meaning).join(",");
//   const data = {
//     question_id: questionData[0].question_id,
//     lesson_id: questionData[0].lesson_id,
//     question: questionData[0].question.question,
//     difficulty: questionData[0].difficulty,
//     question_type: questionData[0].question.type,
//     answer: answer.replace(/\s+/g, ""), //regex to remove whitespace
//     answer_pronounciation: answer_pronounciation.replace(/\s+/g, ""),
//     meaning: meaning.replace(/\s+/g, ""),
//   };
//   questionDatas.push(data);
// }
