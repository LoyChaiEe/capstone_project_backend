"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation will be added later
  }
  Answer.init(
    {
      lesson_id: {
        type: DataTypes.INTEGER,
        references: { model: "lesson", key: "id" },
      },
      character_id: {
        type: DataTypes.INTEGER,
        references: { model: "character", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "lessonWord",
      underscored: true,
      timestamps: false,
    }
  );
  return Question;
};
