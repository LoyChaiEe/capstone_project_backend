"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("user_lessons", {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        unique: false,
        allowNull: false,
      },
      lesson_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "lessons",
          key: "id",
        },
        unique: false,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('usersLessons');
     */
    await queryInterface.dropTable("user_lessons");
  },
};
