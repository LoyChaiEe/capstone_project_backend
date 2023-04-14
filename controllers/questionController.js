const { Op, Sequelize, sequelize } = require("sequelize");
const BaseController = require("./baseController");

class QuestionsController {
  //model is user model
  constructor(character, answer) {
    this.character = character;
    this.answer = answer;
  }
  //Insert your controller's function here
  async randomTranslationInput(req, res) {
    const { wordBank, type, answer, difficulty } = req.body;
    const ans = answer.split("、");
    let num;
    switch (difficulty) {
      case "easy":
        num = 3;
        break;
      case "medium":
        num = 4;
        break;
      case "hard":
        num = 5;
        break;
      default:
        num = 0;
    }
    const input = [];
    const ansData = await this.character.findAll({
      where: {
        character: ans,
        type: { [Op.like]: `%vocabs%` },
      },
    });
    ansData.map((data) => input.push(data));
    console.log(ans);
    console.log(ansData);
    try {
      let count = 0;
      console.log(input);
      while (count < num) {
        const random = Math.floor(Math.random() * wordBank.length);
        if (!input.find((obj) => obj.id === wordBank[random].character.id)) {
          input.push(wordBank[random].character);
          count += 1;
        }
      }
      const sortInput = randomSort(input);
      const output = {
        data: sortInput,
        msg: "success",
      };
      return res.json(sortInput);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async translationVerify(req, res) {
    const { userInput, questionID, lessonID } = req.body;
    try {
      const answerData = await this.answer.findAll({
        where: { lesson_id: lessonID, question_id: questionID },
        include: { model: this.character },
      });
      //standardise both user and answer array
      const answer = answerData
        .map((data) => data.character.character)
        .join("");
      const input = userInput.map((data) => data.character).join("");
      console.log(answer);
      console.log(input);

      return res.json({ isCorrect: answer === input ? true : false });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async randomMatchingInput(req, res) {
    const { questionData } = req.body;
    const type = questionData.question_type.split("-");
    try {
      //Set input rows
      const character = questionData.answer.split("、");
      const pronounciation = questionData.answer_pronounciation.split(",");
      const meaning = questionData.meaning.split(",");
      let input;
      let output;
      //Vocabs input and output
      if (type[1] === "character") {
        input = character;
        //if vocabs set meaning as vocabs, else set pronounciation (cause there is only either vocabs or hiragana/katakana)
        if (type[2] === "vocabs") {
          output = meaning;
        } else {
          output = pronounciation;
        }
      }
      //Hiragana/katakana input and output
      else {
        output = character;
        if (type[2] === "vocabs") {
          input = meaning;
        } else {
          input = pronounciation;
        }
      }
      return res.json({
        inputRow: randomSort(input),
        outputRow: randomSort(output),
      });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = QuestionsController;

function randomSort(arr) {
  return arr.slice().sort(() => 0.5 - Math.random());
}
