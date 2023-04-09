const BaseController = require("./baseController");
const { Op } = require("sequelize");

class CharacterController extends BaseController {
  constructor(model) {
    super(model);
  }
  //Insert your controller's function here
  async getHiragana(req, res) {
    const columns = ["a", "i", "u", "e", "o"];
    const rows = ["", "k", "s", "t", "n", "h", "m", "y", "r", "w"];
    const exceptions = ["chi", "fu"];
    try {
      const hiragana = await this.model.findAll({
        where: {
          type: { [Op.like]: `%hiragana%` },
        },
      });
      //Convert to 2D array for basics
      let basic =  []
      let count = 0
      while(count < 45){
        for(let i = 0; i < rows.length; i++){
          console.log("i", i)
          console.log("count", count)
          let row = [];
          for(let j = 0; j < columns.length; j++){
            const regex = new RegExp(`[${columns.join("")}]`);
            console.log(regex.test(hiragana[count].pronounciation))
            if (
              (hiragana[count].pronounciation.includes(rows[i]) &&
               hiragana[count].pronounciation.includes(columns[j])) ||
              exceptions.includes(hiragana[count].pronounciation)
            ) {
              row.push(hiragana[count].pronounciation);
              count += 1;
              console.log("success");
            } else {
              row.push(null);
              console.log("failure");
            }
            console.log(row)
          }
          basic.push(row)
        }
      }
      basic.push([hiragana[count].pronounciation, null, null, null, null])
      count += 1
      //Convert dakuon to 2D array

      console.log(basic);
      return res.json(hiragana);
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
