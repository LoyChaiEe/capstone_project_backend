const BaseController = require("./baseController");
const { Op } = require("sequelize");

class UserController extends BaseController {
  constructor(model) {
    super(model);
  }
  // get specific user via email
  async getOne(req, res) {
    const { email } = req.params;
    try {
      const user = await this.model.findOne({
        where: { email_address: email },
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UserController;
