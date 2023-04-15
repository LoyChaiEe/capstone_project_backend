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
    await queryInterface.bulkInsert("voicevoxes", [
      {
        voicevox_character: "1",
        voicevox_intonation: "normal",
        voicevox_voice: "2",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%201.png?alt=media&token=1764a266-77ab-450e-b010-07de57dc5335",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%201.png?alt=media&token=e76bd6c3-12ec-4f23-8fd7-60e71ca98545",
      },
      {
        voicevox_character: "1",
        voicevox_intonation: "sweet",
        voicevox_voice: "0",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%201.png?alt=media&token=1764a266-77ab-450e-b010-07de57dc5335",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%201.png?alt=media&token=e76bd6c3-12ec-4f23-8fd7-60e71ca98545",
      },
      {
        voicevox_character: "1",
        voicevox_intonation: "sexy",
        voicevox_voice: "4",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%201.png?alt=media&token=1764a266-77ab-450e-b010-07de57dc5335",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%201.png?alt=media&token=e76bd6c3-12ec-4f23-8fd7-60e71ca98545",
      },
      {
        voicevox_character: "2",
        voicevox_intonation: "normal",
        voicevox_voice: "3",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%202.png?alt=media&token=5356e69c-d616-4615-b04a-bc33e56d8470",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%202.png?alt=media&token=b6d15a76-5814-4b17-823c-8e419b1388f8",
      },
      {
        voicevox_character: "2",
        voicevox_intonation: "sweet",
        voicevox_voice: "1",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%202.png?alt=media&token=5356e69c-d616-4615-b04a-bc33e56d8470",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%202.png?alt=media&token=b6d15a76-5814-4b17-823c-8e419b1388f8",
      },
      {
        voicevox_character: "2",
        voicevox_intonation: "tsun-tsun",
        voicevox_voice: "7",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%202.png?alt=media&token=5356e69c-d616-4615-b04a-bc33e56d8470",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%202.png?alt=media&token=b6d15a76-5814-4b17-823c-8e419b1388f8",
      },
      {
        voicevox_character: "2",
        voicevox_intonation: "sexy",
        voicevox_voice: "5",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%202.png?alt=media&token=5356e69c-d616-4615-b04a-bc33e56d8470",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%202.png?alt=media&token=b6d15a76-5814-4b17-823c-8e419b1388f8",
      },
      {
        voicevox_character: "3",
        voicevox_intonation: "normal",
        voicevox_voice: "8",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%203.png?alt=media&token=ff65b928-a332-47ef-9c92-cfb34c4c1a16",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%203.png?alt=media&token=65ce766e-be8a-4f40-b447-10361043f42d",
      },
      {
        voicevox_character: "4",
        voicevox_intonation: "normal",
        voicevox_voice: "10",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%204.png?alt=media&token=afba06d4-8112-4c2b-af91-5b2bf3bbc8b2",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%204.png?alt=media&token=2c3a16ba-b326-4a19-b213-64e955392862",
      },
      {
        voicevox_character: "5",
        voicevox_intonation: "normal",
        voicevox_voice: "9",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%205.png?alt=media&token=e4c944f3-4a99-45eb-bca3-daf345d424cb",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%205.png?alt=media&token=1c8a462d-587b-4555-817c-b08f16d6283d",
      },
      {
        voicevox_character: "6",
        voicevox_intonation: "normal",
        voicevox_voice: "14",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%206.png?alt=media&token=aba42347-f5bd-498e-8699-81337ed21980",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%206.png?alt=media&token=39f31da3-c8a3-4339-ac98-e7c57e2485f8",
      },
      {
        voicevox_character: "7",
        voicevox_intonation: "normal",
        voicevox_voice: "16",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%207.png?alt=media&token=46c80f47-8760-4bef-9ef4-e5c4d9127d97",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%207.png?alt=media&token=2f1f0603-43a9-4310-820e-274b818e3621",
      },
      {
        voicevox_character: "7",
        voicevox_intonation: "sweet",
        voicevox_voice: "15",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%207.png?alt=media&token=46c80f47-8760-4bef-9ef4-e5c4d9127d97",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%207.png?alt=media&token=2f1f0603-43a9-4310-820e-274b818e3621",
      },
      {
        voicevox_character: "7",
        voicevox_intonation: "tsun-tsun",
        voicevox_voice: "18",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%207.png?alt=media&token=46c80f47-8760-4bef-9ef4-e5c4d9127d97",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%207.png?alt=media&token=2f1f0603-43a9-4310-820e-274b818e3621",
      },
      {
        voicevox_character: "7",
        voicevox_intonation: "sexy",
        voicevox_voice: "17",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%207.png?alt=media&token=46c80f47-8760-4bef-9ef4-e5c4d9127d97",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%207.png?alt=media&token=2f1f0603-43a9-4310-820e-274b818e3621",
      },
      {
        voicevox_character: "8",
        voicevox_intonation: "normal",
        voicevox_voice: "20",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%208.png?alt=media&token=031864b3-aeee-4ee1-8230-3b62f93e3143",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%208.png?alt=media&token=e9bde463-6929-4638-acc7-04a5a31002ec",
      },
      {
        voicevox_character: "9",
        voicevox_intonation: "normal",
        voicevox_voice: "23",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%209.png?alt=media&token=fc01cd6f-47c3-4181-acfb-ba9b021eb136",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%209.png?alt=media&token=261855d1-b9ea-4df8-b5c6-fa8924a72bc3",
      },
      {
        voicevox_character: "9",
        voicevox_intonation: "fun",
        voicevox_voice: "24",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%209.png?alt=media&token=fc01cd6f-47c3-4181-acfb-ba9b021eb136",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%209.png?alt=media&token=261855d1-b9ea-4df8-b5c6-fa8924a72bc3",
      },
      {
        voicevox_character: "10",
        voicevox_intonation: "normal",
        voicevox_voice: "27",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%2010.png?alt=media&token=723ba751-db56-4be5-b3b9-ea87377c657b",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%2010.png?alt=media&token=0e89c061-110f-4255-b378-7e8c66d7f7d6",
      },
      {
        voicevox_character: "11",
        voicevox_intonation: "normal",
        voicevox_voice: "29",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%2011.png?alt=media&token=3d73c9b8-c8a5-4bc5-baea-ae802d3c9487",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%2011.png?alt=media&token=17477442-136a-40bc-9301-0b167e52ad33",
      },
      {
        voicevox_character: "12",
        voicevox_intonation: "normal",
        voicevox_voice: "43",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%2012.png?alt=media&token=6be3a24f-a186-4109-8057-c3abb7fc33c0",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%2012.png?alt=media&token=1e3d6793-1737-46e5-a152-1f7d2ba57305",
      },
      {
        voicevox_character: "13",
        voicevox_intonation: "normal",
        voicevox_voice: "46",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%2013.png?alt=media&token=f68870aa-010d-46c8-9b3d-37c09eb94824",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%2013.png?alt=media&token=2aacf6df-15fa-4815-8a5c-87c89a46a513",
      },
      {
        voicevox_character: "14",
        voicevox_intonation: "normal",
        voicevox_voice: "47",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%2014.png?alt=media&token=335a90fc-0d92-4a2e-8f23-c131fa93802f",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%2014.png?alt=media&token=4503c72d-c789-4d49-9ee2-cf5f73fd6913",
      },
      {
        voicevox_character: "14",
        voicevox_intonation: "effortlessly",
        voicevox_voice: "48",
        full_body_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/full-body-image-url%2FArtboard%2014.png?alt=media&token=335a90fc-0d92-4a2e-8f23-c131fa93802f",
        face_image_url:
          "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/face-image-url%2FArtboard%2014.png?alt=media&token=4503c72d-c789-4d49-9ee2-cf5f73fd6913",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("voicevoxes", null, {});
  },
};
