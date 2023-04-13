"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "user_lessons",
      [
        {
          id: 1,
          user_id: 1,
          lesson_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          user_id: 1,
          lesson_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          user_id: 1,
          lesson_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          user_id: 1,
          lesson_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          user_id: 1,
          lesson_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          user_id: 1,
          lesson_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          user_id: 1,
          lesson_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          user_id: 1,
          lesson_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          user_id: 1,
          lesson_id: 21,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          user_id: 1,
          lesson_id: 22,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 11,
          user_id: 1,
          lesson_id: 23,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 12,
          user_id: 1,
          lesson_id: 24,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
          user_id: 1,
          lesson_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 14,
          user_id: 1,
          lesson_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 15,
          user_id: 2,
          lesson_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 16,
          user_id: 2,
          lesson_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 17,
          user_id: 2,
          lesson_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 18,
          user_id: 2,
          lesson_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 19,
          user_id: 2,
          lesson_id: 15,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 20,
          user_id: 3,
          lesson_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 21,
          user_id: 3,
          lesson_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 22,
          user_id: 3,
          lesson_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 23,
          user_id: 3,
          lesson_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 24,
          user_id: 3,
          lesson_id: 15,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 25,
          user_id: 3,
          lesson_id: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 26,
          user_id: 3,
          lesson_id: 17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 27,
          user_id: 3,
          lesson_id: 18,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 28,
          user_id: 3,
          lesson_id: 19,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 29,
          user_id: 3,
          lesson_id: 20,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 30,
          user_id: 3,
          lesson_id: 21,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 31,
          user_id: 1,
          lesson_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 32,
          user_id: 1,
          lesson_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('usersLessons', null, {});
     */
    await queryInterface.bulkDelete("user_lessons", null, {});
  },
};
