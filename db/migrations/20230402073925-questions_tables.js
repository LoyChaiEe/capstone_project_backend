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
    await queryInterface.createTable(
      "questions",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        question: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        type: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        charset: "utf8", // Set the character set to UTF-8 for japanese characters
        collate: "utf8_general_ci", // Set the collation to UTF-8 general case insensitive
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("questions");
  }
};
