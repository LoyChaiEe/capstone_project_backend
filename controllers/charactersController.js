const BaseController = require("./baseController");
const { Op } = require("sequelize");

class CharacterController extends BaseController {
  constructor(model) {
    super(model);
  }
  //Insert your controller's function here
  async getHiragana(req,res){
    try{
      const hiragana = await this.model.findAll({
        where: {
          type: { [Op.like]: `%hiragana%` },
        },
      });
      return res.json(hiragana);
    }
    catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getKatakana(req,res){
    try{
      const katakana = await this.model.findAll({
        where: {
            type: { [Op.like]: `%katakana%` },
        },
      });
      return res.json(katakana);
    }
    catch(err){
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getVocabs(req,res){
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