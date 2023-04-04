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
     "lessons",
     [
       {
         lesson_code: "v1",
         type: "vocabs",
       },
       {
         lesson_code: "v2",
         type: "vocabs",
       },
       {
         lesson_code: "v3",
         type: "vocabs",
       },
       {
         lesson_code: "v4",
         type: "vocabs",
       },
       {
         lesson_code: "v5",
         type: "vocabs",
       },
       {
         lesson_code: "v6",
         type: "vocabs",
       },
       {
         lesson_code: "v7",
         type: "vocabs",
       },
       {
         lesson_code: "v8",
         type: "vocabs",
       },
       {
         lesson_code: "v9",
         type: "vocabs",
       },
       {
         lesson_code: "v10",
         type: "vocabs",
       },
       {
         lesson_code: "h1",
         type: "hiragana",
       },
       {
         lesson_code: "h2",
         type: "hiragana",
       },
       {
         lesson_code: "h3",
         type: "hiragana",
       },
       {
         lesson_code: "h4",
         type: "hiragana",
       },
       {
         lesson_code: "h5",
         type: "hiragana",
       },
       {
         lesson_code: "h6",
         type: "hiragana",
       },
       {
         lesson_code: "h7",
         type: "hiragana",
       },
       {
         lesson_code: "h8",
         type: "hiragana",
       },
       {
         lesson_code: "h9",
         type: "hiragana",
       },
       {
         lesson_code: "h10",
         type: "hiragana",
       },
       {
         lesson_code: "k1",
         type: "katakana",
       },
       {
         lesson_code: "k2",
         type: "katakana",
       },
       {
         lesson_code: "k3",
         type: "katakana",
       },
       {
         lesson_code: "k4",
         type: "katakana",
       },
       {
         lesson_code: "k5",
         type: "katakana",
       },
       {
         lesson_code: "k6",
         type: "katakana",
       },
       {
         lesson_code: "k7",
         type: "katakana",
       },
       {
         lesson_code: "k8",
         type: "katakana",
       },
       {
         lesson_code: "k9",
         type: "katakana",
       },
       {
         lesson_code: "k10",
         type: "katakana",
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
    await queryInterface.bulkDelete('lessons', null, {});
  }
};
