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
     "user_wordbanks",
     [
       {
         user_id: 1,
         character_id: 143,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 189,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 144,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 145,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 190,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 155,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 175,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 188,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 170,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 151,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 161,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 174,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 163,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 160,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 193,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 165,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 1,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 2,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 3,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 4,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 5,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 6,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 7,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 8,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 13,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 12,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 46,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 17,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 22,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 32,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 15,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 16,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 72,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 73,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 74,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 75,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 76,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 77,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 78,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 79,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 84,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 83,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 117,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 88,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 93,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 103,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 86,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 1,
         character_id: 87,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 1,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 2,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 3,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 4,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 5,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 6,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 7,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 8,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 13,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 12,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 46,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 17,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 22,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 32,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 15,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 2,
         character_id: 16,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 1,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 2,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 3,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 4,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 5,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 6,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 7,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 8,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 13,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 12,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 46,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 17,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 22,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 32,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 15,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 16,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 72,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 73,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 74,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 75,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 76,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 77,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 78,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 79,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 84,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 83,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 117,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 88,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 93,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 103,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 86,
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         user_id: 3,
         character_id: 87,
         created_at: new Date(),
         updated_at: new Date(),
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
    await queryInterface.bulkDelete("user_wordbanks", null, {});
  }
};
