"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LessonWord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation
    static associate(models) {
      // Define separate 1-M relationships with both Person and Personality models
      // to enable them to query junction model
      this.belongsTo(models.lesson);
      this.belongsTo(models.character);
    }
  }
  LessonWord.init(
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
  return LessonWord;
};
