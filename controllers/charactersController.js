const BaseController = require("./baseController");
const { Op } = require("sequelize");

class CharacterController extends BaseController {
  constructor(model) {
    super(model);
  }
  //Insert your controller's function here
  async getHiragana(req, res) {
    try {
      const hiragana = await this.model.findAll({
        where: {
          type: { [Op.like]: `%hiragana%` },
        },
      });
      return res.json(hiragana);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getHiraganaBasic(req, res) {
    try {
      const hiraganaBasic = await this.model.findAll({
        where: {
          type: "hiragana-basic",
        },
      });
      return res.json(hiraganaBasic);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getHiraganaDakuon(req, res) {
    try {
      const hiraganaDakuon = await this.model.findAll({
        where: {
          type: "hiragana-dakuon",
        },
      });
      return res.json(hiraganaDakuon);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getKatakana(req, res) {
    try {
      const katakana = await this.model.findAll({
        where: {
          type: { [Op.like]: `%katakana%` },
        },
      });
      return res.json(katakana);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getKatakanaBasic(req, res) {
    try {
      const katakanaBasic = await this.model.findAll({
        where: {
          type: "katakana-basic",
        },
      });
      return res.json(katakanaBasic);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getKatakanaDakuon(req, res) {
    try {
      const katakanaDakuon = await this.model.findAll({
        where: {
          type: "katakana-dakuon",
        },
      });
      return res.json(katakanaDakuon);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getVocabs(req, res) {
    try {
      const vocabs = await this.model.findAll({
        where: {
          type: { [Op.like]: `%vocab%` },
        },
      });
      return res.json(vocabs);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CharacterController;
