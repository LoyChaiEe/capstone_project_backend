const BaseController = require("./baseController");
const { Op } = require("sequelize");

class VoicevoxController extends BaseController {
  constructor(model) {
    super(model);
    // this.userModel = userModel;
  }

  async getOne(req, res) {
    const { voicevox_id } = req.params;
    console.log("ONE", voicevox_id);
    try {
      const speaker = await this.model.findOne({
        where: { id: voicevox_id },
      });
      console.log(speaker);
      return res.json(speaker);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = VoicevoxController;
