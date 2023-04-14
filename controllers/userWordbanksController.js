const BaseController = require("./baseController");
const { Op } = require("sequelize");

class UserWordbanksController extends BaseController {
  //model is user model
  constructor(model, user, character) {
    super(model);
    this.user = user;
    this.character = character;
  }
  //Insert your controller's function here
  async getUserHiraganaBank(req, res) {
    const { id: userID } = req.params;
    try {
      const userHiragana = await this.model.findAll({
        include: [
          { model: this.user, where: { id: userID } },
          {
            model: this.character,
            where: { type: { [Op.like]: `%hiragana%` } },
          },
        ],
      });
      return res.json(userHiragana);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getUserKatakanaBank(req, res) {
    const { id: userID } = req.params;
    try {
      const userKatakana = await this.model.findAll({
        include: [
          { model: this.user, where: { id: userID } },
          {
            model: this.character,
            where: { type: { [Op.like]: `%katakana%` } },
          },
        ],
      });
      return res.json(userKatakana);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getUserVocabBank(req, res) {
    const { id: userID } = req.params;
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
      return res.json(userVocab);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = UserWordbanksController;
