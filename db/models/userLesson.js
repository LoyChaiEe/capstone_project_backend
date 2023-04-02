"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserLesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation will be added later
  }
  UserLesson.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: { model: "user", key: "id" },
      },
      lesson_id: {
        type: DataTypes.INTEGER,
        references: { model: "lesson", key: "id" },
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
