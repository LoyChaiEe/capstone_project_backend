"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserWordbank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation will be added later
  }
  UserWordbank.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: { model: "user", key: "id" },
      },
      character_id: {
        type: DataTypes.INTEGER,
        references: { model: "character", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "userWordbank",
      underscored: true,
    }
  );
  return UserWordbank;
};
