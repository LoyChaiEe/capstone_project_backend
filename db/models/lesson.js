"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation
    static associate(models) {
      this.belongsToMany(models.character, { through: "lessonWord" });
      this.belongsToMany(models.user, { through: "userLesson" });
      this.belongsToMany(models.question, { through: "lessonQuestion" });
      this.belongsToMany(models.question, { through: "LQA" })
      this.belongsToMany(models.character, { through: "LQA" });
    }
  }
  Lesson.init(
    {
      lesson_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "lesson",
      underscored: true,
      timestamps: false,
    }
  );
  return Lesson;
};
