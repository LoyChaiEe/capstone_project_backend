"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     *
     */
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
    await queryInterface.createTable("voicevox_users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      voicevox_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "voicevoxes",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("voicevoxes");
  },
};
