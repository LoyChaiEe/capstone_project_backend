const { Op, Sequelize, sequelize } = require("sequelize");
const BaseController = require("./baseController");

class QuestionsController {
  //model is user model
  constructor(character, answer) {
    this.character = character;
    this.answer = answer;
  }
  //Insert your controller's function here
  // TRANSLATION
  async randomTranslationInput(req, res) {
    const { wordBank, answer, difficulty } = req.body;
    const ans = answer.split("、");
    let num;
    // create a function for this and return the result.
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
    //This is find the data about the correct ans
    const ansData = await this.character.findAll({
      where: {
        character: ans,
        type: { [Op.like]: `%vocabs%` },
      },
    });
    //push the correct ans as part of the input
    ansData.map((data) => input.push(data));

    //This is to generate the remaining incorrect input
    try {
      let count = 0;
      // could this lead to a potential infinite loop, since the count + 1 is included in an if statement?
      while (count < num) {
        const random = Math.floor(Math.random() * wordBank.length);
        if (!input.find((obj) => obj.id === wordBank[random].character.id)) {
          input.push(wordBank[random].character);
          count += 1;
        }
      }
      const sortInput = randomSort(input);
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

      return res.json({ isCorrect: answer === input }); // the comparison result is a boolean already
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // MEANING
  async randomMeaningWords(req, res) {
    const { wordBank, type, answer, difficulty } = req.body;
    const ans = answer.split("、");

    const input = [];
    const ansData = await this.character.findAll({
      where: {
        character: ans,
        type: { [Op.like]: `%vocabs%` },
      },
    });
    ansData.map((data) => input.push(data));
    // generate remaining incorrect input
    try {
      let count = 0;
      while (count < 3) {
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

  async meaningVerify(req, res) {
    const { userInput, questionID, lessonID } = req.body;
    try {
      const answerData = await this.answer.findAll({
        where: { lesson_id: lessonID, question_id: questionID },
        include: { model: this.character },
      });
      const answerCharacter = answerData.map(
        (data) => data.character.character
      );
      const answerMeaning = answerData
        .map((data) => data.character.meaning)
        .join(""); // to make array into string
      return res.json({
        isCorrect:
          answerCharacter === userInput || answerMeaning === userInput
            ? true
            : false,
      });
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
      // assigning type[1] and [2] might be easier to tell what it actually is and how that comes about.
      // this here is some kind of invisible and unknown business logic, that only the author of the code knows.
      // very hard to work with in the future!
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

  async matchingVerify(req, res) {
    const { left, right, type } = req.body;
    const output = { isCorrect: false };
    try {
      const data = await this.character.findOne({
        where: {
          character: type[1] === "character" ? left : right,
          type: { [Op.like]: `%${type[2]}%` },
        },
      });
      // this whole logic needs more explanation
      // I am sure we can code this also without spaghetti code somehow :)!
      if (type[1] === "character") {
        if (type[2] === "vocabs") {
          output.isCorrect = data.meaning === right;
        } else {
          output.isCorrect = data.pronounciation === right;
        }
      } else {
        if (type[2] === "vocabs") {
          output.isCorrect = data.meaning === left;
        } else {
          output.isCorrect = data.pronounciation === left;
        }
      }
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async randomRecognitionInput(req, res) {
    const { questionData, wordBank } = req.body;
    const wordbank = wordBank.map((data) => data.character);
    const answer = questionData.answer;
    const pronounciation = questionData.answer_pronounciation;
    const data = {
      character: answer.split("、").join(""),
      pronounciation: pronounciation.split(",").join(""),
    };
    try {
      // generateRandomInput ?
      const input = randomGenerateInput(
        wordbank,
        answer.split("、").length,
        3,
        data
      );
      return res.json(randomSort(input));
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async recognitionVerify(req, res) {
    const { answer, userAnswer } = req.body;
    try {
      const type = answer.question_type.split("-");
      let ans;
      if (type[1] === "character") {
        ans = answer.answer_pronounciation.split(",").join("");
      } else {
        ans = answer.answer.split("、").join("");
      }

      return res.json({ isCorrect: userAnswer === ans });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = QuestionsController;

function randomSort(arr) {
  return arr.slice().sort(() => 0.5 - Math.random());
}

function randomGenerateInput(wordbank, length, num, data) {
  //choose a random word from word bank
  const input = [data];
  //for hiragana/katakana with multi characters
  if (length) { // 0 is falsy, above 0 is truthy
    for (let i = 0; i < num; i++) {
      const singleInputData = [];
      for (let j = 0; j < length; j++) {
        //fetch a random character/word from wordbank
        const randomCharacter =
          wordbank[Math.floor(Math.random() * wordbank.length)];
        singleInputData.push(randomCharacter);
      }
      const character = singleInputData.map((data) => data.character).join("");
      const pronounciation = singleInputData
        .map((data) => data.pronounciation)
        .join("");
      const data = {
        character: character,
        pronounciation: pronounciation,
      };
      input.push(data);
    }
  }
  //Single characters/words
  else {
    let count = 0;
    while (count < num) {
      const randomCharacter =
        wordbank[Math.floor(Math.random() * wordbank.length)];
      if (!input.find((obj) => obj.character === randomCharacter.character)) {
        const data = {
          character: randomCharacter.character,
          pronounciation: randomCharacter.pronounciation,
        };
        input.push(data);
        count += 1;
      }
    }
  }
  return input;
}

// this whole file is quite messy.
// Since I don't understand all the underlying business logic, unfortunately I can't comment too much on your choice of code.
// However, I highly recommend refactoring with such code and trying to think of ways to make things neater.
// Better naming, more use of functions (which gives names to processes), abstracting things more and possibly using better data structures and design decisions to simplify our code.