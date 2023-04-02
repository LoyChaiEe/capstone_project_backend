"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Asscoiation
    static associate(models) {
      this.belongsToMany(models.question, { through: "answer" });
      this.belongsToMany(models.lesson, { through: "lessonWord" });
      this.belongsToMany(models.user, { through: "userWordbank" });
    }
  }
  Character.init(
    {
      character: {
        type: DataTypes.STRING,
        charset: "utf8",
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pronounciation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      meaning: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      audio_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "character",
      underscored: true,
      timestamps: false,
    }
  );
  return Character;
}

