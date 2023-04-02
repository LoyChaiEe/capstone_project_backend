"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation will be added later
  }
  Character.init(
    {
      question: {
        type: DataTypes.STRING,
        charset: "utf8",
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "question",
      underscored: true,
    }
  );
  return Character;
};
