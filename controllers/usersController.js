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
    const {
      username,
      first_name,
      last_name,
      email_address,
      profile_pic_url,
      voicevox_id,
    } = req.body;
    // let's validate the data first before we insert into the db
    try {
      const emailExists = await this.model.findOne({
        where: {
          email_address: email_address,
        },
      });
      if (emailExists) {
        // so if the email exists, you return the user? That seems very unsafe. We can just spam the server with emails, and get back all user accounts
        res.json(emailExists);
      } else {
        const user = await this.model.create({
          // where clause in create?
          where: { email_address: email_address },
          ...req.body,
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
  // update profile
  async updateProfile(req, res) {
    const { first_name, last_name, username, email_address, voicevox_id } =
      req.body;
      // definitely should work on validation next!
    try {
      const user = await this.model.findOne({
        where: { email_address: email_address },
      });
      user.first_name = first_name;
      user.last_name = last_name;
      user.username = username;
      user.voicevox_id = voicevox_id;
      await user.save({
        fields: ["first_name", "last_name", "username", "voicevox_id"],
      });

      // why not user.update(req.body) ?
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UserController;
