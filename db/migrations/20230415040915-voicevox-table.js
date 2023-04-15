"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("voicevoxes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      voicevox_character: {
        type: Sequelize.STRING,
      },
      voicevox_intonation: {
        type: Sequelize.STRING,
      },
      voicevox_voice: {
        type: Sequelize.STRING,
      },
      full_body_image_url: {
        type: Sequelize.STRING,
      },
      face_image_url: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("voicevoxes");
  },
};
