'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("lesson_question_answers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lesson_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "lessons",
          key: "id",
        },
        allowNull: false,
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "questions",
          key: "id",
        },
        allowNull: false,
      },
      character_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "characters",
          key: "id",
        },
        allowNull: false,
      },
      difficulty: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      audio_disabled:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("lesson_question_answers");
  }
};
