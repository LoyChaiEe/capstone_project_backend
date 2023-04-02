"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LessonQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation will be added later
  }
  LessonQuestion.init(
    {
      lesson_id: {
        type: DataTypes.INTEGER,
        references: { model: "lesson", key: "id" },
      },
      answer_id: {
        type: DataTypes.INTEGER,
        references: { model: "answer", key: "id" },
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "lessonQuestion",
      underscored: true,
      timestamps: false,
    }
  );
  return LessonQuestion;
};
