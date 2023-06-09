"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation
    static associate(models) {
      this.belongsToMany(models.character, { through: "answer" });
      this.belongsToMany(models.lesson, { through: "lesson_question_answer" });
      this.belongsToMany(models.character, { through: "lesson_question_answer" });
    }
  }
  Question.init(
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
      timestamps: false,
    }
  );
  return Question;
};
