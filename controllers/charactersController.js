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
      // we should define a private class method here, that will deal with this logic instead of typing it all down in the getHiragana function on its own. Abstract it a bit more :)
      let basic = [];
      let count = 0;
      // what is 45? Name it!
      while (count < 45) {
        for (let i = 0; i < rows.length; i++) {
          let row = [];
          for (let j = 0; j < columns.length; j++) {
            if (
              (hiragana[count].pronounciation.includes(rows[i]) &&
                hiragana[count].pronounciation.includes(columns[j])) ||
              exceptions.includes(hiragana[count].pronounciation)
            ) {
              row.push(hiragana[count]);
              count += 1;
            } else {
              row.push(null);
            }
          }
          basic.push(row);
        }
      }
      basic.push([hiragana[count], null, null, null, null]);
      count += 1;

      // convert to 2D array for dakuon
      const dakuonRows = ["g", "z", "d", "b", "p"];
      const dakuonExceptions = ["ji", "zu"];
      let dakuon = [];
      while (count < hiragana.length) {
        for (let i = 0; i < dakuonRows.length; i++) {
          let row = [];
          for (let j = 0; j < columns.length; j++) {
            if (
              (hiragana[count].pronounciation.includes(dakuonRows[i]) &&
                hiragana[count].pronounciation.includes(columns[j])) ||
              dakuonExceptions.includes(hiragana[count].pronounciation)
            ) {
              row.push(hiragana[count]);
              count += 1;
            } else {
              row.push(null);
            }
          }
          dakuon.push(row);
        }
      }
      return res.json({ basic: basic, dakuon: dakuon });
    } catch (err) {
      // return 400 if your db query fails? I think this should be 500.
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getKatakana(req, res) {
    const columns = ["a", "i", "u", "e", "o"];
    const rows = ["", "k", "s", "t", "n", "h", "m", "y", "r", "w"];
    const exceptions = ["chi", "fu"];
    try {
      const katakana = await this.model.findAll({
        where: {
          type: { [Op.like]: `%katakana%` },
        },
      });
      //Convert to 2D array for basics
      let basic = [];
      let count = 0;
      while (count < 45) {
        for (let i = 0; i < rows.length; i++) {
          let row = [];
          for (let j = 0; j < columns.length; j++) {
            if (
              (katakana[count].pronounciation.includes(rows[i]) &&
                katakana[count].pronounciation.includes(columns[j])) ||
              exceptions.includes(katakana[count].pronounciation)
            ) {
              row.push(katakana[count]);
              count += 1;
            } else {
              row.push(null);
            }
          }
          basic.push(row);
        }
      }
      basic.push([katakana[count], null, null, null, null]);
      count += 1;

      // same logic as above? dont repeat yourself, use a function!
      // convert to 2D array for dakuon
      const dakuonRows = ["g", "z", "d", "b", "p"];
      const dakuonExceptions = ["ji", "zu"];
      let dakuon = [];
      while (count < katakana.length) {
        for (let i = 0; i < dakuonRows.length; i++) {
          let row = [];
          for (let j = 0; j < columns.length; j++) {
            if (
              (katakana[count].pronounciation.includes(dakuonRows[i]) &&
                katakana[count].pronounciation.includes(columns[j])) ||
              dakuonExceptions.includes(katakana[count].pronounciation)
            ) {
              row.push(katakana[count]);
              count += 1;
            } else {
              row.push(null);
            }
          }
          dakuon.push(row);
        }
      }
      return res.json({ basic: basic, dakuon: dakuon });
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
