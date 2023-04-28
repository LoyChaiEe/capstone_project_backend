const BaseController = require("./baseController");
const { Op } = require("sequelize");

class UserWordbanksController extends BaseController {
  //model is user model
  constructor(model, user, character, lessonWord) {
    super(model);
    this.user = user;
    this.character = character;
    this.lessonWord = lessonWord;
  }
  //Insert your controller's function here
  async getUserHiraganaBank(req, res) {
    const { id: userID } = req.params;
    const user_id = parseInt(userID);
    try {
      const userHiragana = await this.model.findAll({
        include: [
          { model: this.user, where: { id: user_id } },
          {
            model: this.character,
            where: { type: { [Op.like]: `%hiragana%` } },
          },
        ],
      });
      if (!userHiragana.length) {
        const getLessonWords = await this.lessonWord.findAll({
          where: { lesson_id: 11 },
          include: [
            {
              model: this.character,
              where: { type: { [Op.like]: `%hiragana%` } },
            },
          ],
        });
        const hiraganaWords = getLessonWords.map((word) => {
          const data = {
            userId: user_id,
            characterId: word.character.id,
          };
          return data;
        });
        const addNewHiragana = await this.model.bulkCreate(hiraganaWords);
        const userHiragana = await this.model.findAll({
          where: { user_id: user_id },
          include: [{ model: this.user }, { model: this.character }],
        });
        return res.json(userHiragana);
      }
      return res.json(userHiragana);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getUserKatakanaBank(req, res) {
    const { id: userID } = req.params;
    const user_id = parseInt(userID);
    try {
      const userKatakana = await this.model.findAll({
        include: [
          { model: this.user, where: { id: user_id } },
          {
            model: this.character,
            where: { type: { [Op.like]: `%katakana%` } },
          },
        ],
      });
      if (!userKatakana.length) {
        const getLessonWords = await this.lessonWord.findAll({
          where: { lesson_id: 21 },
          include: [
            {
              model: this.character,
              where: { type: { [Op.like]: `%katakana%` } },
            },
          ],
        });
        const katakanaWords = getLessonWords.map((word) => {
          const data = {
            userId: user_id,
            characterId: word.character.id,
          };
          return data;
        });
        const addNewKatakana = await this.model.bulkCreate(katakanaWords);
        const userKatakana = await this.model.findAll({
          where: { user_id: user_id },
          include: [{ model: this.user }, { model: this.character }],
        });
        return res.json(userKatakana);
      }
      return res.json(userKatakana);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getUserVocabBank(req, res) {
    const { id: userID } = req.params;
    const user_id = parseInt(userID);
    try {
      const userVocab = await this.model.findAll({
        include: [
          { model: this.user, where: { id: userID } },
          {
            model: this.character,
            where: { type: { [Op.like]: `%vocab%` } },
          },
        ],
      });
      if (!userVocab.length) {
        const getLessonWords = await this.lessonWord.findAll({
          where: { lesson_id: 1 },
          include: [
            {
              model: this.character,
              where: { type: { [Op.like]: `%vocab%` } },
            },
          ],
        });
        const vocabWords = getLessonWords.map((word) => {
          const data = {
            userId: user_id,
            characterId: word.character.id,
          };
          return data;
        });
        const addNewVocab = await this.model.bulkCreate(vocabWords);
        const userVocab = await this.model.findAll({
          where: { user_id: user_id },
          include: [{ model: this.user }, { model: this.character }],
        });
        return res.json(userVocab);
      }
      return res.json(userVocab);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addUserHiranagaBank(req, res) {
    const { user_id: userID, lesson_id } = req.body;
    const user_id = parseInt(userID);
    try {
      const findHiragana = await this.lessonWord.findAll({
        where: { lesson_id: lesson_id },
        attributes: ["character_id"],
      });
      console.log(user_id);
      const data = findHiragana.map((word) => {
        const data = { userId: user_id, characterId: word.character_id };
        return data;
      });
      const addHiragana = await this.model.bulkCreate(data);
      console.log(addHiragana);
      return res.json(addHiragana);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = UserWordbanksController;
