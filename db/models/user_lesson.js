"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserLesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation
    static associate(models) {
      // Define separate 1-M relationships with both Person and Personality models
      // to enable them to query junction model
      this.belongsTo(models.user);
      this.belongsTo(models.lesson);
    }
  }
  UserLesson.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: { model: "user", key: "id" },
        unique: false,
        constraints: false,
      },
      lesson_id: {
        type: DataTypes.INTEGER,
        references: { model: "lesson", key: "id" },
        unique: false,
        constraints: false,
      },
    },
    {
      sequelize,
      modelName: "userLesson",
      underscored: true,
    }
  );
  return UserLesson;
};
