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
      "answers",
      [
        {
          question_id: 1,
          character_id: 143,
        },
        {
          question_id: 2,
          character_id: 163,
        },
        {
          question_id: 3,
          character_id: 193,
        },
        {
          question_id: 4,
          character_id: 155,
        },
        {
          question_id: 5,
          character_id: 188,
        },
        {
          question_id: 6,
          character_id: 161,
        },
        {
          question_id: 7,
          character_id: 174,
        },
        {
          question_id: 8,
          character_id: 145,
        },
        {
          question_id: 9,
          character_id: 144,
        },
        {
          question_id: 10,
          character_id: 160,
        },
        {
          question_id: 11,
          character_id: 190,
        },
        {
          question_id: 12,
          character_id: 189,
        },
        {
          question_id: 13,
          character_id: 174,
        },
        {
          question_id: 14,
          character_id: 163,
        },
        {
          question_id: 15,
          character_id: 160,
        },
        {
          question_id: 16,
          character_id: 188,
        },
        {
          question_id: 17,
          character_id: 170,
        },
        {
          question_id: 18,
          character_id: 193,
        },
        {
          question_id: 19,
          character_id: 151,
        },
        {
          question_id: 20,
          character_id: 175,
        },
        {
          question_id: 21,
          character_id: 165,
        },
        {
          question_id: 22,
          character_id: 155,
        },
        {
          question_id: 23,
          character_id: 190,
        },
        {
          question_id: 24,
          character_id: 189,
        },
        {
          question_id: 25,
          character_id: 174,
        },
        {
          question_id: 26,
          character_id: 163,
        },
        {
          question_id: 27,
          character_id: 160,
        },
        {
          question_id: 28,
          character_id: 188,
        },
        {
          question_id: 29,
          character_id: 170,
        },
        {
          question_id: 30,
          character_id: 193,
        },
        {
          question_id: 31,
          character_id: 151,
        },
        {
          question_id: 32,
          character_id: 175,
        },
        {
          question_id: 33,
          character_id: 165,
        },
        {
          question_id: 34,
          character_id: 155,
        },
        {
          question_id: 35,
          character_id: 143,
        },
        {
          question_id: 35,
          character_id: 189,
        },
        {
          question_id: 35,
          character_id: 144,
        },
        {
          question_id: 36,
          character_id: 151,
        },
        {
          question_id: 36,
          character_id: 188,
        },
        {
          question_id: 37,
          character_id: 165,
        },
        {
          question_id: 38,
          character_id: 175,
        },
        {
          question_id: 38,
          character_id: 170,
        },
        {
          question_id: 39,
          character_id: 151,
        },
        {
          question_id: 39,
          character_id: 174,
        },
        {
          question_id: 40,
          character_id: 145,
        },
        {
          question_id: 40,
          character_id: 190,
        },
        {
          question_id: 41,
          character_id: 163,
        },
        {
          question_id: 41,
          character_id: 160,
        },
        {
          question_id: 42,
          character_id: 188,
        },
        {
          question_id: 42,
          character_id: 174,
        },
        {
          question_id: 43,
          character_id: 161,
        },
        {
          question_id: 43,
          character_id: 174,
        },
        {
          question_id: 44,
          character_id: 189,
        },
        {
          question_id: 44,
          character_id: 144,
        },
        {
          question_id: 44,
          character_id: 145,
        },
        {
          question_id: 45,
          character_id: 143,
        },
        {
          question_id: 45,
          character_id: 144,
        },
        {
          question_id: 45,
          character_id: 190,
        },
        {
          question_id: 46,
          character_id: 174,
        },
        {
          question_id: 46,
          character_id: 155,
        },
        {
          question_id: 47,
          character_id: 170,
        },
        {
          question_id: 47,
          character_id: 155,
        },
        {
          question_id: 48,
          character_id: 165,
        },
        {
          question_id: 48,
          character_id: 175,
        },
        {
          question_id: 49,
          character_id: 163,
        },
        {
          question_id: 49,
          character_id: 161,
        },
        {
          question_id: 50,
          character_id: 160,
        },
        {
          question_id: 50,
          character_id: 151,
        },
        {
          question_id: 51,
          character_id: 189,
        },
        {
          question_id: 51,
          character_id: 145,
        },
        {
          question_id: 52,
          character_id: 163,
        },
        {
          question_id: 52,
          character_id: 193,
        },
        {
          question_id: 53,
          character_id: 144,
        },
        {
          question_id: 53,
          character_id: 190,
        },
        {
          question_id: 54,
          character_id: 165,
        },
        {
          question_id: 54,
          character_id: 193,
        },
        {
          question_id: 55,
          character_id: 143,
        },
        {
          question_id: 55,
          character_id: 189,
        },
        {
          question_id: 55,
          character_id: 144,
        },
        {
          question_id: 56,
          character_id: 151,
        },
        {
          question_id: 56,
          character_id: 188,
        },
        {
          question_id: 57,
          character_id: 165,
        },
        {
          question_id: 58,
          character_id: 175,
        },
        {
          question_id: 58,
          character_id: 170,
        },
        {
          question_id: 59,
          character_id: 151,
        },
        {
          question_id: 59,
          character_id: 174,
        },
        {
          question_id: 60,
          character_id: 145,
        },
        {
          question_id: 60,
          character_id: 190,
        },
        {
          question_id: 61,
          character_id: 163,
        },
        {
          question_id: 61,
          character_id: 160,
        },
        {
          question_id: 62,
          character_id: 188,
        },
        {
          question_id: 62,
          character_id: 174,
        },
        {
          question_id: 63,
          character_id: 161,
        },
        {
          question_id: 63,
          character_id: 174,
        },
        {
          question_id: 64,
          character_id: 189,
        },
        {
          question_id: 64,
          character_id: 144,
        },
        {
          question_id: 64,
          character_id: 145,
        },
        {
          question_id: 65,
          character_id: 143,
        },
        {
          question_id: 65,
          character_id: 144,
        },
        {
          question_id: 65,
          character_id: 190,
        },
        {
          question_id: 66,
          character_id: 174,
        },
        {
          question_id: 66,
          character_id: 155,
        },
        {
          question_id: 67,
          character_id: 170,
        },
        {
          question_id: 67,
          character_id: 155,
        },
        {
          question_id: 68,
          character_id: 165,
        },
        {
          question_id: 68,
          character_id: 175,
        },
        {
          question_id: 69,
          character_id: 163,
        },
        {
          question_id: 69,
          character_id: 161,
        },
        {
          question_id: 70,
          character_id: 160,
        },
        {
          question_id: 70,
          character_id: 151,
        },
        {
          question_id: 71,
          character_id: 189,
        },
        {
          question_id: 71,
          character_id: 145,
        },
        {
          question_id: 72,
          character_id: 163,
        },
        {
          question_id: 72,
          character_id: 193,
        },
        {
          question_id: 73,
          character_id: 144,
        },
        {
          question_id: 73,
          character_id: 190,
        },
        {
          question_id: 74,
          character_id: 165,
        },
        {
          question_id: 74,
          character_id: 193,
        },
        {
          question_id: 75,
          character_id: 165,
        },
        {
          question_id: 75,
          character_id: 175,
        },
        {
          question_id: 75,
          character_id: 155,
        },
        {
          question_id: 76,
          character_id: 163,
        },
        {
          question_id: 76,
          character_id: 161,
        },
        {
          question_id: 76,
          character_id: 155,
        },
        {
          question_id: 77,
          character_id: 160,
        },
        {
          question_id: 77,
          character_id: 151,
        },
        {
          question_id: 77,
          character_id: 155,
        },
        {
          question_id: 78,
          character_id: 144,
        },
        {
          question_id: 78,
          character_id: 190,
        },
        {
          question_id: 78,
          character_id: 189,
        },
        {
          question_id: 79,
          character_id: 145,
        },
        {
          question_id: 79,
          character_id: 144,
        },
        {
          question_id: 79,
          character_id: 190,
        },
        {
          question_id: 79,
          character_id: 143,
        },
        {
          question_id: 80,
          character_id: 145,
        },
        {
          question_id: 80,
          character_id: 143,
        },
        {
          question_id: 80,
          character_id: 190,
        },
        {
          question_id: 81,
          character_id: 160,
        },
        {
          question_id: 81,
          character_id: 170,
        },
        {
          question_id: 81,
          character_id: 155,
        },
        {
          question_id: 82,
          character_id: 165,
        },
        {
          question_id: 82,
          character_id: 174,
        },
        {
          question_id: 82,
          character_id: 155,
        },
        {
          question_id: 83,
          character_id: 160,
        },
        {
          question_id: 83,
          character_id: 188,
        },
        {
          question_id: 83,
          character_id: 155,
        },
        {
          question_id: 84,
          character_id: 165,
        },
        {
          question_id: 84,
          character_id: 155,
        },
        {
          question_id: 85,
          character_id: 165,
        },
        {
          question_id: 85,
          character_id: 175,
        },
        {
          question_id: 85,
          character_id: 155,
        },
        {
          question_id: 86,
          character_id: 163,
        },
        {
          question_id: 86,
          character_id: 161,
        },
        {
          question_id: 86,
          character_id: 155,
        },
        {
          question_id: 87,
          character_id: 160,
        },
        {
          question_id: 87,
          character_id: 151,
        },
        {
          question_id: 87,
          character_id: 155,
        },
        {
          question_id: 88,
          character_id: 144,
        },
        {
          question_id: 88,
          character_id: 190,
        },
        {
          question_id: 88,
          character_id: 189,
        },
        {
          question_id: 89,
          character_id: 145,
        },
        {
          question_id: 89,
          character_id: 144,
        },
        {
          question_id: 89,
          character_id: 190,
        },
        {
          question_id: 89,
          character_id: 143,
        },
        {
          question_id: 90,
          character_id: 145,
        },
        {
          question_id: 90,
          character_id: 143,
        },
        {
          question_id: 90,
          character_id: 190,
        },
        {
          question_id: 91,
          character_id: 160,
        },
        {
          question_id: 91,
          character_id: 170,
        },
        {
          question_id: 91,
          character_id: 155,
        },
        {
          question_id: 92,
          character_id: 165,
        },
        {
          question_id: 92,
          character_id: 174,
        },
        {
          question_id: 92,
          character_id: 155,
        },
        {
          question_id: 93,
          character_id: 160,
        },
        {
          question_id: 93,
          character_id: 188,
        },
        {
          question_id: 93,
          character_id: 155,
        },
        {
          question_id: 94,
          character_id: 165,
        },
        {
          question_id: 94,
          character_id: 155,
        },
        {
          question_id: 116,
          character_id: 1,
        },
        {
          question_id: 117,
          character_id: 2,
        },
        {
          question_id: 118,
          character_id: 3,
        },
        {
          question_id: 119,
          character_id: 4,
        },
        {
          question_id: 120,
          character_id: 5,
        },
        {
          question_id: 121,
          character_id: 6,
        },
        {
          question_id: 122,
          character_id: 7,
        },
        {
          question_id: 123,
          character_id: 8,
        },
        {
          question_id: 124,
          character_id: 13,
        },
        {
          question_id: 125,
          character_id: 12,
        },
        {
          question_id: 126,
          character_id: 46,
        },
        {
          question_id: 127,
          character_id: 17,
        },
        {
          question_id: 128,
          character_id: 22,
        },
        {
          question_id: 129,
          character_id: 32,
        },
        {
          question_id: 130,
          character_id: 15,
        },
        {
          question_id: 131,
          character_id: 16,
        },
        {
          question_id: 132,
          character_id: 1,
        },
        {
          question_id: 133,
          character_id: 2,
        },
        {
          question_id: 134,
          character_id: 3,
        },
        {
          question_id: 135,
          character_id: 4,
        },
        {
          question_id: 136,
          character_id: 5,
        },
        {
          question_id: 137,
          character_id: 6,
        },
        {
          question_id: 138,
          character_id: 7,
        },
        {
          question_id: 139,
          character_id: 8,
        },
        {
          question_id: 140,
          character_id: 13,
        },
        {
          question_id: 141,
          character_id: 12,
        },
        {
          question_id: 142,
          character_id: 46,
        },
        {
          question_id: 143,
          character_id: 17,
        },
        {
          question_id: 144,
          character_id: 22,
        },
        {
          question_id: 145,
          character_id: 32,
        },
        {
          question_id: 146,
          character_id: 15,
        },
        {
          question_id: 147,
          character_id: 16,
        },
        {
          question_id: 148,
          character_id: 1,
        },
        {
          question_id: 148,
          character_id: 2,
        },
        {
          question_id: 148,
          character_id: 3,
        },
        {
          question_id: 148,
          character_id: 4,
        },
        {
          question_id: 148,
          character_id: 5,
        },
        {
          question_id: 149,
          character_id: 6,
        },
        {
          question_id: 149,
          character_id: 7,
        },
        {
          question_id: 149,
          character_id: 8,
        },
        {
          question_id: 149,
          character_id: 13,
        },
        {
          question_id: 149,
          character_id: 12,
        },
        {
          question_id: 150,
          character_id: 17,
        },
        {
          question_id: 150,
          character_id: 22,
        },
        {
          question_id: 150,
          character_id: 32,
        },
        {
          question_id: 150,
          character_id: 15,
        },
        {
          question_id: 150,
          character_id: 16,
        },
        {
          question_id: 151,
          character_id: 8,
        },
        {
          question_id: 151,
          character_id: 46,
        },
        {
          question_id: 151,
          character_id: 12,
        },
        {
          question_id: 151,
          character_id: 4,
        },
        {
          question_id: 151,
          character_id: 1,
        },
        {
          question_id: 152,
          character_id: 15,
        },
        {
          question_id: 152,
          character_id: 46,
        },
        {
          question_id: 152,
          character_id: 7,
        },
        {
          question_id: 152,
          character_id: 22,
        },
        {
          question_id: 152,
          character_id: 5,
        },
        {
          question_id: 153,
          character_id: 17,
        },
        {
          question_id: 153,
          character_id: 32,
        },
        {
          question_id: 153,
          character_id: 16,
        },
        {
          question_id: 153,
          character_id: 2,
        },
        {
          question_id: 153,
          character_id: 6,
        },
        {
          question_id: 154,
          character_id: 3,
        },
        {
          question_id: 154,
          character_id: 15,
        },
        {
          question_id: 154,
          character_id: 8,
        },
        {
          question_id: 154,
          character_id: 1,
        },
        {
          question_id: 154,
          character_id: 46,
        },
        {
          question_id: 155,
          character_id: 4,
        },
        {
          question_id: 155,
          character_id: 5,
        },
        {
          question_id: 155,
          character_id: 22,
        },
        {
          question_id: 155,
          character_id: 17,
        },
        {
          question_id: 155,
          character_id: 7,
        },
        {
          question_id: 156,
          character_id: 6,
        },
        {
          question_id: 156,
          character_id: 13,
        },
        {
          question_id: 156,
          character_id: 12,
        },
        {
          question_id: 156,
          character_id: 2,
        },
        {
          question_id: 156,
          character_id: 32,
        },
        {
          question_id: 157,
          character_id: 1,
        },
        {
          question_id: 157,
          character_id: 2,
        },
        {
          question_id: 157,
          character_id: 3,
        },
        {
          question_id: 157,
          character_id: 4,
        },
        {
          question_id: 157,
          character_id: 5,
        },
        {
          question_id: 158,
          character_id: 6,
        },
        {
          question_id: 158,
          character_id: 7,
        },
        {
          question_id: 158,
          character_id: 8,
        },
        {
          question_id: 158,
          character_id: 13,
        },
        {
          question_id: 158,
          character_id: 12,
        },
        {
          question_id: 159,
          character_id: 17,
        },
        {
          question_id: 159,
          character_id: 22,
        },
        {
          question_id: 159,
          character_id: 32,
        },
        {
          question_id: 159,
          character_id: 15,
        },
        {
          question_id: 159,
          character_id: 16,
        },
        {
          question_id: 160,
          character_id: 8,
        },
        {
          question_id: 160,
          character_id: 46,
        },
        {
          question_id: 160,
          character_id: 12,
        },
        {
          question_id: 160,
          character_id: 4,
        },
        {
          question_id: 160,
          character_id: 1,
        },
        {
          question_id: 161,
          character_id: 15,
        },
        {
          question_id: 161,
          character_id: 46,
        },
        {
          question_id: 161,
          character_id: 7,
        },
        {
          question_id: 161,
          character_id: 22,
        },
        {
          question_id: 161,
          character_id: 5,
        },
        {
          question_id: 162,
          character_id: 17,
        },
        {
          question_id: 162,
          character_id: 32,
        },
        {
          question_id: 162,
          character_id: 16,
        },
        {
          question_id: 162,
          character_id: 2,
        },
        {
          question_id: 162,
          character_id: 6,
        },
        {
          question_id: 163,
          character_id: 3,
        },
        {
          question_id: 163,
          character_id: 15,
        },
        {
          question_id: 163,
          character_id: 8,
        },
        {
          question_id: 163,
          character_id: 1,
        },
        {
          question_id: 163,
          character_id: 46,
        },
        {
          question_id: 164,
          character_id: 4,
        },
        {
          question_id: 164,
          character_id: 5,
        },
        {
          question_id: 164,
          character_id: 22,
        },
        {
          question_id: 164,
          character_id: 17,
        },
        {
          question_id: 164,
          character_id: 7,
        },
        {
          question_id: 165,
          character_id: 6,
        },
        {
          question_id: 165,
          character_id: 13,
        },
        {
          question_id: 165,
          character_id: 12,
        },
        {
          question_id: 165,
          character_id: 2,
        },
        {
          question_id: 165,
          character_id: 32,
        },
        {
          question_id: 166,
          character_id: 1,
        },
        {
          question_id: 166,
          character_id: 6,
        },
        {
          question_id: 167,
          character_id: 5,
        },
        {
          question_id: 167,
          character_id: 2,
        },
        {
          question_id: 167,
          character_id: 12,
        },
        {
          question_id: 168,
          character_id: 3,
        },
        {
          question_id: 168,
          character_id: 4,
        },
        {
          question_id: 169,
          character_id: 5,
        },
        {
          question_id: 169,
          character_id: 6,
        },
        {
          question_id: 169,
          character_id: 32,
        },
        {
          question_id: 170,
          character_id: 5,
        },
        {
          question_id: 170,
          character_id: 5,
        },
        {
          question_id: 170,
          character_id: 7,
        },
        {
          question_id: 170,
          character_id: 2,
        },
        {
          question_id: 171,
          character_id: 2,
        },
        {
          question_id: 171,
          character_id: 17,
        },
        {
          question_id: 172,
          character_id: 12,
        },
        {
          question_id: 172,
          character_id: 46,
        },
        {
          question_id: 173,
          character_id: 32,
        },
        {
          question_id: 173,
          character_id: 15,
        },
        {
          question_id: 174,
          character_id: 7,
        },
        {
          question_id: 174,
          character_id: 8,
        },
        {
          question_id: 175,
          character_id: 16,
        },
        {
          question_id: 175,
          character_id: 16,
        },
        {
          question_id: 175,
          character_id: 32,
        },
        {
          question_id: 176,
          character_id: 2,
        },
        {
          question_id: 176,
          character_id: 2,
        },
        {
          question_id: 177,
          character_id: 4,
        },
        {
          question_id: 177,
          character_id: 46,
        },
        {
          question_id: 178,
          character_id: 13,
        },
        {
          question_id: 178,
          character_id: 12,
        },
        {
          question_id: 179,
          character_id: 12,
        },
        {
          question_id: 179,
          character_id: 16,
        },
        {
          question_id: 180,
          character_id: 5,
        },
        {
          question_id: 180,
          character_id: 8,
        },
        {
          question_id: 181,
          character_id: 2,
        },
        {
          question_id: 181,
          character_id: 2,
        },
        {
          question_id: 181,
          character_id: 4,
        },
        {
          question_id: 182,
          character_id: 1,
        },
        {
          question_id: 182,
          character_id: 6,
        },
        {
          question_id: 183,
          character_id: 5,
        },
        {
          question_id: 183,
          character_id: 2,
        },
        {
          question_id: 183,
          character_id: 12,
        },
        {
          question_id: 184,
          character_id: 3,
        },
        {
          question_id: 184,
          character_id: 4,
        },
        {
          question_id: 185,
          character_id: 5,
        },
        {
          question_id: 185,
          character_id: 6,
        },
        {
          question_id: 185,
          character_id: 32,
        },
        {
          question_id: 186,
          character_id: 5,
        },
        {
          question_id: 186,
          character_id: 5,
        },
        {
          question_id: 186,
          character_id: 7,
        },
        {
          question_id: 186,
          character_id: 2,
        },
        {
          question_id: 187,
          character_id: 2,
        },
        {
          question_id: 187,
          character_id: 17,
        },
        {
          question_id: 188,
          character_id: 12,
        },
        {
          question_id: 188,
          character_id: 46,
        },
        {
          question_id: 189,
          character_id: 32,
        },
        {
          question_id: 189,
          character_id: 15,
        },
        {
          question_id: 190,
          character_id: 7,
        },
        {
          question_id: 190,
          character_id: 8,
        },
        {
          question_id: 191,
          character_id: 16,
        },
        {
          question_id: 191,
          character_id: 16,
        },
        {
          question_id: 191,
          character_id: 32,
        },
        {
          question_id: 192,
          character_id: 2,
        },
        {
          question_id: 192,
          character_id: 2,
        },
        {
          question_id: 193,
          character_id: 4,
        },
        {
          question_id: 193,
          character_id: 46,
        },
        {
          question_id: 194,
          character_id: 13,
        },
        {
          question_id: 194,
          character_id: 12,
        },
        {
          question_id: 195,
          character_id: 12,
        },
        {
          question_id: 195,
          character_id: 16,
        },
        {
          question_id: 196,
          character_id: 5,
        },
        {
          question_id: 196,
          character_id: 8,
        },
        {
          question_id: 197,
          character_id: 2,
        },
        {
          question_id: 197,
          character_id: 2,
        },
        {
          question_id: 197,
          character_id: 4,
        },
        {
          question_id: 216,
          character_id: 72,
        },
        {
          question_id: 217,
          character_id: 73,
        },
        {
          question_id: 218,
          character_id: 74,
        },
        {
          question_id: 219,
          character_id: 75,
        },
        {
          question_id: 220,
          character_id: 76,
        },
        {
          question_id: 221,
          character_id: 77,
        },
        {
          question_id: 222,
          character_id: 78,
        },
        {
          question_id: 223,
          character_id: 79,
        },
        {
          question_id: 224,
          character_id: 84,
        },
        {
          question_id: 225,
          character_id: 83,
        },
        {
          question_id: 226,
          character_id: 117,
        },
        {
          question_id: 227,
          character_id: 88,
        },
        {
          question_id: 228,
          character_id: 93,
        },
        {
          question_id: 229,
          character_id: 103,
        },
        {
          question_id: 230,
          character_id: 86,
        },
        {
          question_id: 231,
          character_id: 87,
        },
        {
          question_id: 232,
          character_id: 72,
        },
        {
          question_id: 233,
          character_id: 73,
        },
        {
          question_id: 234,
          character_id: 74,
        },
        {
          question_id: 235,
          character_id: 75,
        },
        {
          question_id: 236,
          character_id: 76,
        },
        {
          question_id: 237,
          character_id: 77,
        },
        {
          question_id: 238,
          character_id: 78,
        },
        {
          question_id: 239,
          character_id: 79,
        },
        {
          question_id: 240,
          character_id: 84,
        },
        {
          question_id: 241,
          character_id: 83,
        },
        {
          question_id: 242,
          character_id: 117,
        },
        {
          question_id: 243,
          character_id: 88,
        },
        {
          question_id: 244,
          character_id: 93,
        },
        {
          question_id: 245,
          character_id: 103,
        },
        {
          question_id: 246,
          character_id: 86,
        },
        {
          question_id: 247,
          character_id: 87,
        },
        {
          question_id: 248,
          character_id: 72,
        },
        {
          question_id: 248,
          character_id: 73,
        },
        {
          question_id: 248,
          character_id: 74,
        },
        {
          question_id: 248,
          character_id: 75,
        },
        {
          question_id: 248,
          character_id: 76,
        },
        {
          question_id: 249,
          character_id: 77,
        },
        {
          question_id: 249,
          character_id: 78,
        },
        {
          question_id: 249,
          character_id: 79,
        },
        {
          question_id: 249,
          character_id: 84,
        },
        {
          question_id: 249,
          character_id: 83,
        },
        {
          question_id: 250,
          character_id: 88,
        },
        {
          question_id: 250,
          character_id: 93,
        },
        {
          question_id: 250,
          character_id: 103,
        },
        {
          question_id: 250,
          character_id: 86,
        },
        {
          question_id: 250,
          character_id: 87,
        },
        {
          question_id: 251,
          character_id: 72,
        },
        {
          question_id: 251,
          character_id: 73,
        },
        {
          question_id: 251,
          character_id: 77,
        },
        {
          question_id: 251,
          character_id: 88,
        },
        {
          question_id: 251,
          character_id: 93,
        },
        {
          question_id: 252,
          character_id: 74,
        },
        {
          question_id: 252,
          character_id: 75,
        },
        {
          question_id: 252,
          character_id: 78,
        },
        {
          question_id: 252,
          character_id: 79,
        },
        {
          question_id: 252,
          character_id: 77,
        },
        {
          question_id: 253,
          character_id: 76,
        },
        {
          question_id: 253,
          character_id: 84,
        },
        {
          question_id: 253,
          character_id: 83,
        },
        {
          question_id: 253,
          character_id: 86,
        },
        {
          question_id: 253,
          character_id: 87,
        },
        {
          question_id: 254,
          character_id: 74,
        },
        {
          question_id: 254,
          character_id: 77,
        },
        {
          question_id: 254,
          character_id: 78,
        },
        {
          question_id: 254,
          character_id: 86,
        },
        {
          question_id: 254,
          character_id: 87,
        },
        {
          question_id: 255,
          character_id: 79,
        },
        {
          question_id: 255,
          character_id: 88,
        },
        {
          question_id: 255,
          character_id: 93,
        },
        {
          question_id: 255,
          character_id: 75,
        },
        {
          question_id: 255,
          character_id: 76,
        },
        {
          question_id: 256,
          character_id: 72,
        },
        {
          question_id: 256,
          character_id: 73,
        },
        {
          question_id: 256,
          character_id: 84,
        },
        {
          question_id: 256,
          character_id: 83,
        },
        {
          question_id: 256,
          character_id: 103,
        },
        {
          question_id: 257,
          character_id: 72,
        },
        {
          question_id: 257,
          character_id: 73,
        },
        {
          question_id: 257,
          character_id: 74,
        },
        {
          question_id: 257,
          character_id: 75,
        },
        {
          question_id: 257,
          character_id: 76,
        },
        {
          question_id: 258,
          character_id: 77,
        },
        {
          question_id: 258,
          character_id: 78,
        },
        {
          question_id: 258,
          character_id: 79,
        },
        {
          question_id: 258,
          character_id: 84,
        },
        {
          question_id: 258,
          character_id: 83,
        },
        {
          question_id: 259,
          character_id: 88,
        },
        {
          question_id: 259,
          character_id: 93,
        },
        {
          question_id: 259,
          character_id: 103,
        },
        {
          question_id: 259,
          character_id: 86,
        },
        {
          question_id: 259,
          character_id: 87,
        },
        {
          question_id: 260,
          character_id: 72,
        },
        {
          question_id: 260,
          character_id: 73,
        },
        {
          question_id: 260,
          character_id: 77,
        },
        {
          question_id: 260,
          character_id: 88,
        },
        {
          question_id: 260,
          character_id: 93,
        },
        {
          question_id: 261,
          character_id: 74,
        },
        {
          question_id: 261,
          character_id: 75,
        },
        {
          question_id: 261,
          character_id: 78,
        },
        {
          question_id: 261,
          character_id: 79,
        },
        {
          question_id: 261,
          character_id: 77,
        },
        {
          question_id: 262,
          character_id: 76,
        },
        {
          question_id: 262,
          character_id: 84,
        },
        {
          question_id: 262,
          character_id: 83,
        },
        {
          question_id: 262,
          character_id: 86,
        },
        {
          question_id: 262,
          character_id: 87,
        },
        {
          question_id: 263,
          character_id: 74,
        },
        {
          question_id: 263,
          character_id: 77,
        },
        {
          question_id: 263,
          character_id: 78,
        },
        {
          question_id: 263,
          character_id: 86,
        },
        {
          question_id: 263,
          character_id: 87,
        },
        {
          question_id: 264,
          character_id: 79,
        },
        {
          question_id: 264,
          character_id: 88,
        },
        {
          question_id: 264,
          character_id: 93,
        },
        {
          question_id: 264,
          character_id: 75,
        },
        {
          question_id: 264,
          character_id: 76,
        },
        {
          question_id: 265,
          character_id: 72,
        },
        {
          question_id: 265,
          character_id: 73,
        },
        {
          question_id: 265,
          character_id: 84,
        },
        {
          question_id: 265,
          character_id: 83,
        },
        {
          question_id: 265,
          character_id: 103,
        },
        {
          question_id: 266,
          character_id: 72,
        },
        {
          question_id: 266,
          character_id: 84,
        },
        {
          question_id: 267,
          character_id: 103,
        },
        {
          question_id: 267,
          character_id: 84,
        },
        {
          question_id: 268,
          character_id: 103,
        },
        {
          question_id: 268,
          character_id: 93,
        },
        {
          question_id: 269,
          character_id: 73,
        },
        {
          question_id: 269,
          character_id: 117,
        },
        {
          question_id: 269,
          character_id: 78,
        },
        {
          question_id: 270,
          character_id: 77,
        },
        {
          question_id: 270,
          character_id: 78,
        },
        {
          question_id: 271,
          character_id: 84,
        },
        {
          question_id: 271,
          character_id: 77,
        },
        {
          question_id: 271,
          character_id: 73,
        },
        {
          question_id: 272,
          character_id: 78,
        },
        {
          question_id: 272,
          character_id: 84,
        },
        {
          question_id: 273,
          character_id: 73,
        },
        {
          question_id: 273,
          character_id: 84,
        },
        {
          question_id: 274,
          character_id: 78,
        },
        {
          question_id: 274,
          character_id: 79,
        },
        {
          question_id: 275,
          character_id: 88,
        },
        {
          question_id: 275,
          character_id: 78,
        },
        {
          question_id: 275,
          character_id: 117,
        },
        {
          question_id: 276,
          character_id: 84,
        },
        {
          question_id: 276,
          character_id: 73,
        },
        {
          question_id: 276,
          character_id: 77,
        },
        {
          question_id: 277,
          character_id: 72,
        },
        {
          question_id: 277,
          character_id: 84,
        },
        {
          question_id: 278,
          character_id: 103,
        },
        {
          question_id: 278,
          character_id: 84,
        },
        {
          question_id: 279,
          character_id: 103,
        },
        {
          question_id: 279,
          character_id: 93,
        },
        {
          question_id: 280,
          character_id: 73,
        },
        {
          question_id: 280,
          character_id: 117,
        },
        {
          question_id: 280,
          character_id: 78,
        },
        {
          question_id: 281,
          character_id: 77,
        },
        {
          question_id: 281,
          character_id: 78,
        },
        {
          question_id: 282,
          character_id: 84,
        },
        {
          question_id: 282,
          character_id: 77,
        },
        {
          question_id: 282,
          character_id: 73,
        },
        {
          question_id: 283,
          character_id: 78,
        },
        {
          question_id: 283,
          character_id: 84,
        },
        {
          question_id: 284,
          character_id: 73,
        },
        {
          question_id: 284,
          character_id: 84,
        },
        {
          question_id: 285,
          character_id: 78,
        },
        {
          question_id: 285,
          character_id: 79,
        },
        {
          question_id: 286,
          character_id: 88,
        },
        {
          question_id: 286,
          character_id: 78,
        },
        {
          question_id: 286,
          character_id: 117,
        },
        {
          question_id: 287,
          character_id: 84,
        },
        {
          question_id: 287,
          character_id: 73,
        },
        {
          question_id: 287,
          character_id: 77,
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
    await queryInterface.bulkDelete("answers", null, {});
  }
};