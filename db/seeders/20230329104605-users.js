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
     "users",
     [
       {
         username: "adminAdam",
         first_name: "Admin",
         last_name: "Adam",
         email_address: "adminadam@gmail.com",
         profile_pic_url:
           "gs://waifu-3b5e3.appspot.com/profile-picture-url/AdminAdam.jpg",
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         username: "adminBella",
         first_name: "Admin",
         last_name: "Bella",
         email_address: "adminbella@gmail.com",
         profile_pic_url:
           "gs://waifu-3b5e3.appspot.com/profile-picture-url/AdminBella.jpg",
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
         username: "adminCharlie",
         first_name: "Admin",
         last_name: "Charlie",
         email_address: "admincharlie@gmail.com",
         profile_pic_url:
           "gs://waifu-3b5e3.appspot.com/profile-picture-url/AdminCharlie.jpg",
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
        //For testing adding wordbanks
         username: "adminDelta",
         first_name: "Admin",
         last_name: "Delta",
         email_address: "adminDelta@gmail.com",
         profile_pic_url:
           "gs://waifu-3b5e3.appspot.com/profile-picture-url/AdminAdam.jpg",
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
    await queryInterface.bulkDelete("users", null, {});
  }
};
