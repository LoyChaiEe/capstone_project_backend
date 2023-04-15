"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class voicevox extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user);
    }
  }
  voicevox.init(
    {
      voicevox_character: DataTypes.STRING,
      voicevox_intonation: DataTypes.STRING,
      voicevox_voice: DataTypes.STRING,
      full_body_image_url: DataTypes.STRING,
      face_image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "voicevox",
      underscored: true,
    }
  );
  return voicevox;
};
