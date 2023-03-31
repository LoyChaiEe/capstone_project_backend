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
    try {
      const emailExists = await this.model.findOne({
        where: {
          email_address: email_address,
        },
      });
      if (emailExists) {
        res.json("Email exists");
      } else {
        const user = await this.model.create({
          where: { email_address: email_address },
          username: username,
          first_name: first_name,
          last_name: last_name,
          email_address: email_address,
          profile_pic_url: profile_pic_url,
        });
        return res.json(user);
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UserController;
