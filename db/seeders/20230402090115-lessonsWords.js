'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
     "lessonsWords",
     [
       {
         lesson_id: 1,
         character_id: 143,
       },
       {
         lesson_id: 1,
         character_id: 189,
       },
       {
         lesson_id: 1,
         character_id: 144,
       },
       {
         lesson_id: 1,
         character_id: 145,
       },
       {
         lesson_id: 1,
         character_id: 190,
       },
       {
         lesson_id: 1,
         character_id: 155,
       },
       {
         lesson_id: 1,
         character_id: 175,
       },
       {
         lesson_id: 1,
         character_id: 188,
       },
       {
         lesson_id: 1,
         character_id: 170,
       },
       {
         lesson_id: 1,
         character_id: 151,
       },
       {
         lesson_id: 1,
         character_id: 161,
       },
       {
         lesson_id: 1,
         character_id: 174,
       },
       {
         lesson_id: 1,
         character_id: 163,
       },
       {
         lesson_id: 1,
         character_id: 160,
       },
       {
         lesson_id: 1,
         character_id: 193,
       },
       {
         lesson_id: 1,
         character_id: 165,
       },
       {
         lesson_id: 11,
         character_id: 1,
       },
       {
         lesson_id: 11,
         character_id: 2,
       },
       {
         lesson_id: 11,
         character_id: 3,
       },
       {
         lesson_id: 11,
         character_id: 4,
       },
       {
         lesson_id: 11,
         character_id: 5,
       },
       {
         lesson_id: 11,
         character_id: 6,
       },
       {
         lesson_id: 11,
         character_id: 7,
       },
       {
         lesson_id: 11,
         character_id: 8,
       },
       {
         lesson_id: 11,
         character_id: 13,
       },
       {
         lesson_id: 11,
         character_id: 12,
       },
       {
         lesson_id: 11,
         character_id: 46,
       },
       {
         lesson_id: 11,
         character_id: 17,
       },
       {
         lesson_id: 11,
         character_id: 22,
       },
       {
         lesson_id: 11,
         character_id: 32,
       },
       {
         lesson_id: 11,
         character_id: 15,
       },
       {
         lesson_id: 11,
         character_id: 16,
       },
       {
         lesson_id: 21,
         character_id: 72,
       },
       {
         lesson_id: 21,
         character_id: 73,
       },
       {
         lesson_id: 21,
         character_id: 74,
       },
       {
         lesson_id: 21,
         character_id: 75,
       },
       {
         lesson_id: 21,
         character_id: 76,
       },
       {
         lesson_id: 21,
         character_id: 77,
       },
       {
         lesson_id: 21,
         character_id: 78,
       },
       {
         lesson_id: 21,
         character_id: 79,
       },
       {
         lesson_id: 21,
         character_id: 84,
       },
       {
         lesson_id: 21,
         character_id: 83,
       },
       {
         lesson_id: 21,
         character_id: 117,
       },
       {
         lesson_id: 21,
         character_id: 88,
       },
       {
         lesson_id: 21,
         character_id: 93,
       },
       {
         lesson_id: 21,
         character_id: 103,
       },
       {
         lesson_id: 21,
         character_id: 86,
       },
       {
         lesson_id: 21,
         character_id: 87,
       },
     ],
     {}
   );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("lessonsWords", null, {});
  }
};
