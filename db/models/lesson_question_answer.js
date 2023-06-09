"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LQA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation
    static associate(models) {
      // Define separate 1-M relationships with both Person and Personality models
      // to enable them to query junction model
      this.belongsTo(models.question);
      this.belongsTo(models.character);
      this.belongsTo(models.lesson);
    }
  }
  LQA.init(
    {
      lesson_id: {
        type: DataTypes.INTEGER,
        references: { model: "lesson", key: "id" },
        unique: false,
        constraints: false,
      },
      question_id: {
        type: DataTypes.INTEGER,
        references: { model: "question", key: "id" },
        unique: false,
        constraints: false,
      },

      character_id: {
        type: DataTypes.INTEGER,
        references: { model: "character", key: "id" },
        unique: false,
        constraints: false,
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      audio_disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "lesson_question_answer",
      underscored: true,
      timestamps: false,
    }
  );
  return LQA;
};
