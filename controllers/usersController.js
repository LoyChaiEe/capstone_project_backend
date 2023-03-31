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
  async addOne(req, res) {
    const { username, first_name, last_name, email_address, profile_pic_url } =
      req.body;
    console.log(
      username,
      first_name,
      last_name,
      email_address,
      profile_pic_url
    );
    try {
      const user = await this.model.findOrCreate({
        username: username,
        first_name: first_name,
        last_name: last_name,
        email_address: email_address,
        profile_pic_url: profile_pic_url,
      });
      console.log(
        username,
        first_name,
        last_name,
        email_address,
        profile_pic_url
      );
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UserController;
