const BaseController = require("./baseController");
const { Op } = require("sequelize");

class UserController extends BaseController {
  constructor(model) {
    super(model);
  }
  // get specific user via email
  async getOne(req, res) {
    const { userEmail } = req.params;
    try {
      const user = await this.model.findOne({
        where: { email_address: userEmail },
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // add new user
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
  // update profile photo URL
  async updatePhotoURL(req, res) {
    const { profile_pic_url, email_address } = req.body;
    try {
      const user = await this.model.findOne({
        where: { email_address: email_address },
      });
      user.profile_pic_url = profile_pic_url;
      await user.save({ fields: ["profile_pic_url"] });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UserController;
