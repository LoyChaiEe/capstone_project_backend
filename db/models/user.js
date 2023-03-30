"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //Asscoiation will be added later
  }
  User.init(
    {
      username: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "Please input an email address." } },
      },
      profile_pic_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "Please upload a valid photo." } },
      },
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return User;
};