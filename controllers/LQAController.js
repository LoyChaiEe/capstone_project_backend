const BaseController = require("./baseController");
const { Op, Sequelize, sequelize } = require("sequelize");

class LQAController extends BaseController {
  //model is user model
  constructor(model, lesson, question, character, wordBank, lessonWord) {
    super(model);
    this.lesson = lesson;
    this.question = question;
    this.character = character;
    this.wordBank = wordBank;
    this.lessonWord = lessonWord;
    console.log(this.model);
  }

  async getQuestionID(req, res) {
    //req LQA
    const { lesson_id } = req.params;
    try {
      // Retrieve all distinct qurestionID
      const questionIDs = await this.model.findAll({
        where: { lesson_id: lesson_id },
        attributes: [
          [Sequelize.literal('DISTINCT "question_id"'), "question_id"],
        ],
      });
      // Select 15 random and unique question_ids for lesson_id
      const question_id = questionIDs.map((question) => question.question_id);
      let count = 0;
      const selectedQuestionID = [];
      while (count < 15) {
        const random = Math.floor(Math.random() * question_id.length);
        if (!selectedQuestionID.includes(question_id[random])) {
          selectedQuestionID.push(question_id[random]);
          count += 1;
        }
      }
      //Get question Data
      const selectedQuestionDatas = await this.model.findAll({
        where: { question_id: selectedQuestionID, lesson_id: lesson_id },
        include: [{ model: this.question }, { model: this.character }],
      });
      //Re-format data retrieve into the database into a more simplified one to one form
      const questionDatas = [];
      for (let i = 0; i < 15; i++) {
        const questionData = selectedQuestionDatas.filter(
          (question) => question.question_id === selectedQuestionID[i]
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
        };
        questionDatas.push(data);
      }
      return res.json(questionDatas);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getLessonWords(req, res) {
    console.log("hi");
    const { lesson_id } = req.params;
    console.log(lesson_id);
    try {
      const lessonWords = await this.lessonWord.findAll({
        where: { lesson_id: lesson_id },
      });
      return res.json(lessonWords);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = LQAController;
