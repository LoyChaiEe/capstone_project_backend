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
      "characters",
      [
        {
          character: "あ",
          pronounciation: "a",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F01-a.mp3?alt=media&token=6c249c54-dc3c-4d64-a3dd-0c1f67db4e3d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "い",
          pronounciation: "i",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F02-i.mp3?alt=media&token=d144063a-cd66-4641-88f8-44faa7110d1c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "う",
          pronounciation: "u",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F03-u.mp3?alt=media&token=73e365a9-7b3c-4fc8-a47c-3cb6fc33d746",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "え",
          pronounciation: "e",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F04-e.mp3?alt=media&token=3d59e077-376f-46e3-bc37-ac37621f07d6",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "お",
          pronounciation: "o",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F05-o.mp3?alt=media&token=ab90f5a2-21b4-478a-8d87-befbd862f6cb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "か",
          pronounciation: "ka",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F06-ka.mp3?alt=media&token=c0264210-0ca8-4822-bb4f-549493c58473",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "き",
          pronounciation: "ki",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F07-ki.mp3?alt=media&token=33e1a582-fbd7-428e-8d1d-7811c9348296",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "く",
          pronounciation: "ku",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F08-ku.mp3?alt=media&token=5955919f-d4a0-46c8-ad3a-fbfabb04dc51",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "け",
          pronounciation: "ke",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F09-ke.mp3?alt=media&token=fd8ee7bd-ae82-48b9-890b-6c89da6e7386",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "こ",
          pronounciation: "ko",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F10-ko.mp3?alt=media&token=d178e797-8a64-4475-bd5d-8cfad1e740b8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "さ",
          pronounciation: "sa",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F11-sa.mp3?alt=media&token=f05de37d-03f1-40cd-89d4-c322d8a50460",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "し",
          pronounciation: "shi",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F12-shi.mp3?alt=media&token=97c3deab-f822-4f32-bea2-9040bd2a7571",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "す",
          pronounciation: "su",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F13-su.mp3?alt=media&token=ed5fc2da-be8c-4492-afa6-ef345a7e7cc3",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "せ",
          pronounciation: "se",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F14-se.mp3?alt=media&token=03d89076-b77e-41d2-b8c0-3a6eaa3a2914",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "そ",
          pronounciation: "so",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F15-so.mp3?alt=media&token=e26a39f4-0556-47b1-88d9-eaccb831b411",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "た",
          pronounciation: "ta",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F16-ta.mp3?alt=media&token=3954f533-891c-40b6-835e-78031dc1a503",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ち",
          pronounciation: "chi",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F17-chi.mp3?alt=media&token=bfe3fbb0-b66e-4133-bdeb-4c105e898e5b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "つ",
          pronounciation: "tsu",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F18-tsu.mp3?alt=media&token=4a4baa8a-152d-4026-ab9d-23dea1f47e98",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "て",
          pronounciation: "te",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F19-te.mp3?alt=media&token=18b2e082-2b95-4753-80ca-10eeaa45b201",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "と",
          pronounciation: "to",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F20-to.mp3?alt=media&token=968ae792-978d-4ea9-a779-5c8bdba1f110",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "な",
          pronounciation: "na",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F21-na.mp3?alt=media&token=28a69ff3-e237-468a-8b3d-a2c1d5cedbbd",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "に",
          pronounciation: "ni",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F22-ni.mp3?alt=media&token=cfed8548-4483-4365-95aa-58bd38175fc2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぬ",
          pronounciation: "nu",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F23-nu.mp3?alt=media&token=de9fab82-3afb-4c11-b023-17ff04993350",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ね",
          pronounciation: "ne",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F24-ne.mp3?alt=media&token=eb377d0f-6bdc-460a-acfe-beeaf9d9a3f8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "の",
          pronounciation: "no",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F25-no.mp3?alt=media&token=593c9278-360e-4265-8fcf-9e0b4c2a1148",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "は",
          pronounciation: "ha",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F26-ha.mp3?alt=media&token=92104665-5796-4251-87f0-d7f54bc2eb83",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ひ",
          pronounciation: "hi",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F27-hi.mp3?alt=media&token=554b7904-fe83-498c-ac57-48945ca6c740",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ふ",
          pronounciation: "fu",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F28-fu.mp3?alt=media&token=94bc3030-9287-4e1d-8342-e24a456f4b89",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "へ",
          pronounciation: "he",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F29-he.mp3?alt=media&token=55d86afc-72ed-4191-b06e-b3127125fa73",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ほ",
          pronounciation: "ho",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F30-ho.mp3?alt=media&token=2e9254c3-cada-4d6a-a479-b9db3ef4f70c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ま",
          pronounciation: "ma",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F31-ma.mp3?alt=media&token=03862ac5-5cac-4366-9ffd-cb70a2b9a27d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "み",
          pronounciation: "mi",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F32-mi.mp3?alt=media&token=25113e1e-3a64-4d52-bd89-4f3cb24059ae",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "む",
          pronounciation: "mu",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F33-mu.mp3?alt=media&token=927ec06e-a861-4699-8202-a8f44d526f39",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "め",
          pronounciation: "me",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F34-me.mp3?alt=media&token=792c7912-045e-4bb1-9301-ec327964f017",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "も",
          pronounciation: "mo",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F35-mo.mp3?alt=media&token=76db7524-fe63-4d96-be36-7e1c1df86dea",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "や",
          pronounciation: "ya",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F36-ya.mp3?alt=media&token=dcbcc852-1b8e-41e7-a301-feb046c07b46",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ゆ",
          pronounciation: "yu",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F37-yu.mp3?alt=media&token=e849440e-db6e-4f5b-9537-862d38468adf",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "よ",
          pronounciation: "yo",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F38-yo.mp3?alt=media&token=daed8a20-c33f-4ee3-8e8d-1d59e994d59d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ら",
          pronounciation: "ra",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F39-ra.mp3?alt=media&token=dc25d47f-a08c-4f9c-b9e2-5589b3a026aa",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "り",
          pronounciation: "ri",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F40-ri.mp3?alt=media&token=c723c4f0-9bef-4cfe-8ad6-a25e8be2d779",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "る",
          pronounciation: "ru",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F41-ru.mp3?alt=media&token=4e222483-9377-4ee3-a4fc-7c9c2a7d8e85",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "れ",
          pronounciation: "re",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F42-re.mp3?alt=media&token=4fa37360-c4bd-4e84-b76f-2e1b109f6731",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ろ",
          pronounciation: "ro",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F43-ro.mp3?alt=media&token=fe45caf6-09ad-40b0-b900-89f8b3346036",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "わ",
          pronounciation: "wa",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F44-wa.mp3?alt=media&token=688ac07c-a35d-442e-9e5d-462ba724eafb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "を",
          pronounciation: "o",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F05-o.mp3?alt=media&token=ab90f5a2-21b4-478a-8d87-befbd862f6cb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ん",
          pronounciation: "n",
          type: "hiragana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F46-n.mp3?alt=media&token=c358d023-f01e-4f8f-a4cf-b71c7672ab20",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "が",
          pronounciation: "ga",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F47-ga.mp3?alt=media&token=0484ebf4-37ec-4756-868d-d9b21144264d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぎ",
          pronounciation: "gi",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F48-gi.mp3?alt=media&token=8d08e6ba-c8cf-4217-ae93-5879ce4d35d3",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぐ",
          pronounciation: "gu",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F49-gu.mp3?alt=media&token=9bd5499b-eaa3-4d24-b7c9-7579ddcc61b9",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "げ",
          pronounciation: "ge",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F50-ge.mp3?alt=media&token=8d0c0da0-4976-4777-ba22-06dda1c4110b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ご",
          pronounciation: "go",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F51-go.mp3?alt=media&token=dca57fdd-4ba1-4a0c-a11b-6dd512a68488",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ざ",
          pronounciation: "za",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F52-za.mp3?alt=media&token=e80e91e5-88c7-4931-b738-7056bcab0de1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "じ",
          pronounciation: "ji",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F53-ji.mp3?alt=media&token=ae8223ae-e389-4e66-a485-f9dc06b7cb60",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ず",
          pronounciation: "zu",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F54-zu.mp3?alt=media&token=6011840c-4460-4d73-8953-e74af6f257fb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぜ",
          pronounciation: "ze",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F55-ze.mp3?alt=media&token=114b073d-022d-4c4f-8232-8a43d71ea88b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぞ",
          pronounciation: "zo",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F56-zo.mp3?alt=media&token=ba789740-87c4-4b76-9505-dc3059fd87df",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "だ",
          pronounciation: "da",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F57-da.mp3?alt=media&token=a37a112a-ef1f-42ea-b041-01d980e9339f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぢ",
          pronounciation: "ji",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F58-ji.mp3?alt=media&token=0276a30f-da30-486d-a22c-7bf758766b1e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "づ",
          pronounciation: "zu",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F59-zu.mp3?alt=media&token=594f4b5c-f775-4843-9244-48328a559ec2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "で",
          pronounciation: "de",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F60-de.mp3?alt=media&token=7a5d273a-2776-47c4-a5a5-9ac8229cd276",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ど",
          pronounciation: "do",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F61-do.mp3?alt=media&token=43f55e8d-98db-4b58-ac3d-1101b3539aae",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ば",
          pronounciation: "ba",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F62-ba.mp3?alt=media&token=66a2fe86-63a8-4041-a192-0a1a72b958ad",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "び",
          pronounciation: "bi",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F63-bi.mp3?alt=media&token=61abad57-c5a1-47d8-9e94-1bc869f9796f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぶ",
          pronounciation: "bu",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F64-bu.mp3?alt=media&token=ebfa3115-0ce9-47ef-971e-c70c68ae3872",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "べ",
          pronounciation: "be",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F65-be.mp3?alt=media&token=9dc254e7-a865-4dba-94d5-37c83827acd0",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぼ",
          pronounciation: "bo",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F66-bo.mp3?alt=media&token=01e4d767-4eb8-41dd-80de-4f0f3fa3e66f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぱ",
          pronounciation: "pa",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F67-pa.mp3?alt=media&token=3af9903c-0b99-49bf-a551-6d940dbd9354",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぴ",
          pronounciation: "pi",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F68-pi.mp3?alt=media&token=6690dca8-d467-484c-9e36-95add2248cf1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぷ",
          pronounciation: "pu",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F69-pu.mp3?alt=media&token=3a0b8848-d2b3-438f-b559-0222951a41f7",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぺ",
          pronounciation: "pe",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F70-pe.mp3?alt=media&token=abff543e-4d73-41e8-8a18-c6cc46697b9f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぽ",
          pronounciation: "po",
          type: "hiragana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F71-po.mp3?alt=media&token=0385f86e-242d-4ec8-83e9-8df7eee01e1b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ア",
          pronounciation: "a",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F01-a.mp3?alt=media&token=6c249c54-dc3c-4d64-a3dd-0c1f67db4e3d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "イ",
          pronounciation: "i",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F02-i.mp3?alt=media&token=d144063a-cd66-4641-88f8-44faa7110d1c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ウ",
          pronounciation: "u",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F03-u.mp3?alt=media&token=73e365a9-7b3c-4fc8-a47c-3cb6fc33d746",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "エ",
          pronounciation: "e",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F04-e.mp3?alt=media&token=3d59e077-376f-46e3-bc37-ac37621f07d6",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "オ",
          pronounciation: "o",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F05-o.mp3?alt=media&token=ab90f5a2-21b4-478a-8d87-befbd862f6cb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "カ",
          pronounciation: "ka",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F06-ka.mp3?alt=media&token=c0264210-0ca8-4822-bb4f-549493c58473",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "キ",
          pronounciation: "ki",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F07-ki.mp3?alt=media&token=33e1a582-fbd7-428e-8d1d-7811c9348296",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ク",
          pronounciation: "ku",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F08-ku.mp3?alt=media&token=5955919f-d4a0-46c8-ad3a-fbfabb04dc51",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ケ",
          pronounciation: "ke",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F09-ke.mp3?alt=media&token=fd8ee7bd-ae82-48b9-890b-6c89da6e7386",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "コ",
          pronounciation: "ko",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F10-ko.mp3?alt=media&token=d178e797-8a64-4475-bd5d-8cfad1e740b8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "サ",
          pronounciation: "sa",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F11-sa.mp3?alt=media&token=f05de37d-03f1-40cd-89d4-c322d8a50460",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "シ",
          pronounciation: "shi",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F12-shi.mp3?alt=media&token=97c3deab-f822-4f32-bea2-9040bd2a7571",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ス",
          pronounciation: "su",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F13-su.mp3?alt=media&token=ed5fc2da-be8c-4492-afa6-ef345a7e7cc3",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "セ",
          pronounciation: "se",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F14-se.mp3?alt=media&token=03d89076-b77e-41d2-b8c0-3a6eaa3a2914",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ソ",
          pronounciation: "so",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F15-so.mp3?alt=media&token=e26a39f4-0556-47b1-88d9-eaccb831b411",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "タ",
          pronounciation: "ta",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F16-ta.mp3?alt=media&token=3954f533-891c-40b6-835e-78031dc1a503",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "チ",
          pronounciation: "chi",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F17-chi.mp3?alt=media&token=bfe3fbb0-b66e-4133-bdeb-4c105e898e5b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ツ",
          pronounciation: "tsu",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F18-tsu.mp3?alt=media&token=4a4baa8a-152d-4026-ab9d-23dea1f47e98",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "テ",
          pronounciation: "te",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F19-te.mp3?alt=media&token=18b2e082-2b95-4753-80ca-10eeaa45b201",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ト",
          pronounciation: "to",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F20-to.mp3?alt=media&token=968ae792-978d-4ea9-a779-5c8bdba1f110",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ナ",
          pronounciation: "na",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F21-na.mp3?alt=media&token=28a69ff3-e237-468a-8b3d-a2c1d5cedbbd",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ニ",
          pronounciation: "ni",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F22-ni.mp3?alt=media&token=cfed8548-4483-4365-95aa-58bd38175fc2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ヌ",
          pronounciation: "nu",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F23-nu.mp3?alt=media&token=de9fab82-3afb-4c11-b023-17ff04993350",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ネ",
          pronounciation: "ne",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F24-ne.mp3?alt=media&token=eb377d0f-6bdc-460a-acfe-beeaf9d9a3f8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ノ",
          pronounciation: "no",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F25-no.mp3?alt=media&token=593c9278-360e-4265-8fcf-9e0b4c2a1148",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ハ",
          pronounciation: "ha",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F26-ha.mp3?alt=media&token=92104665-5796-4251-87f0-d7f54bc2eb83",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ヒ",
          pronounciation: "hi",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F27-hi.mp3?alt=media&token=554b7904-fe83-498c-ac57-48945ca6c740",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "フ",
          pronounciation: "fu",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F28-fu.mp3?alt=media&token=94bc3030-9287-4e1d-8342-e24a456f4b89",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ヘ",
          pronounciation: "he",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F29-he.mp3?alt=media&token=55d86afc-72ed-4191-b06e-b3127125fa73",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ホ",
          pronounciation: "ho",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F30-ho.mp3?alt=media&token=2e9254c3-cada-4d6a-a479-b9db3ef4f70c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "マ",
          pronounciation: "ma",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F31-ma.mp3?alt=media&token=03862ac5-5cac-4366-9ffd-cb70a2b9a27d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ミ",
          pronounciation: "mi",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F32-mi.mp3?alt=media&token=25113e1e-3a64-4d52-bd89-4f3cb24059ae",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ム",
          pronounciation: "mu",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F33-mu.mp3?alt=media&token=927ec06e-a861-4699-8202-a8f44d526f39",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "メ",
          pronounciation: "me",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F34-me.mp3?alt=media&token=792c7912-045e-4bb1-9301-ec327964f017",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "モ",
          pronounciation: "mo",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F35-mo.mp3?alt=media&token=76db7524-fe63-4d96-be36-7e1c1df86dea",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ヤ",
          pronounciation: "ya",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F36-ya.mp3?alt=media&token=dcbcc852-1b8e-41e7-a301-feb046c07b46",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ユ",
          pronounciation: "yu",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F37-yu.mp3?alt=media&token=e849440e-db6e-4f5b-9537-862d38468adf",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ヨ",
          pronounciation: "yo",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F38-yo.mp3?alt=media&token=daed8a20-c33f-4ee3-8e8d-1d59e994d59d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ラ",
          pronounciation: "ra",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F39-ra.mp3?alt=media&token=dc25d47f-a08c-4f9c-b9e2-5589b3a026aa",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "リ",
          pronounciation: "ri",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F40-ri.mp3?alt=media&token=c723c4f0-9bef-4cfe-8ad6-a25e8be2d779",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ル",
          pronounciation: "ru",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F41-ru.mp3?alt=media&token=4e222483-9377-4ee3-a4fc-7c9c2a7d8e85",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "レ",
          pronounciation: "re",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F42-re.mp3?alt=media&token=4fa37360-c4bd-4e84-b76f-2e1b109f6731",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ロ",
          pronounciation: "ro",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F43-ro.mp3?alt=media&token=fe45caf6-09ad-40b0-b900-89f8b3346036",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ワ",
          pronounciation: "wa",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F44-wa.mp3?alt=media&token=688ac07c-a35d-442e-9e5d-462ba724eafb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ヲ",
          pronounciation: "o",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F05-o.mp3?alt=media&token=ab90f5a2-21b4-478a-8d87-befbd862f6cb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ン",
          pronounciation: "n",
          type: "katakana-basic",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F46-n.mp3?alt=media&token=c358d023-f01e-4f8f-a4cf-b71c7672ab20",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ガ",
          pronounciation: "ga",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F47-ga.mp3?alt=media&token=0484ebf4-37ec-4756-868d-d9b21144264d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ギ",
          pronounciation: "gi",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F48-gi.mp3?alt=media&token=8d08e6ba-c8cf-4217-ae93-5879ce4d35d3",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "グ",
          pronounciation: "gu",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F49-gu.mp3?alt=media&token=9bd5499b-eaa3-4d24-b7c9-7579ddcc61b9",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ゲ",
          pronounciation: "ge",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F50-ge.mp3?alt=media&token=8d0c0da0-4976-4777-ba22-06dda1c4110b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ゴ",
          pronounciation: "go",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F51-go.mp3?alt=media&token=dca57fdd-4ba1-4a0c-a11b-6dd512a68488",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ザ",
          pronounciation: "za",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F52-za.mp3?alt=media&token=e80e91e5-88c7-4931-b738-7056bcab0de1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ジ",
          pronounciation: "ji",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F53-ji.mp3?alt=media&token=ae8223ae-e389-4e66-a485-f9dc06b7cb60",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ズ",
          pronounciation: "zu",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F54-zu.mp3?alt=media&token=6011840c-4460-4d73-8953-e74af6f257fb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ゼ",
          pronounciation: "ze",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F55-ze.mp3?alt=media&token=114b073d-022d-4c4f-8232-8a43d71ea88b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ゾ",
          pronounciation: "zo",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F56-zo.mp3?alt=media&token=ba789740-87c4-4b76-9505-dc3059fd87df",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ダ",
          pronounciation: "da",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F57-da.mp3?alt=media&token=a37a112a-ef1f-42ea-b041-01d980e9339f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ジ",
          pronounciation: "ji",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F58-ji.mp3?alt=media&token=0276a30f-da30-486d-a22c-7bf758766b1e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ズ",
          pronounciation: "zu",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F59-zu.mp3?alt=media&token=594f4b5c-f775-4843-9244-48328a559ec2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "デ",
          pronounciation: "de",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F60-de.mp3?alt=media&token=7a5d273a-2776-47c4-a5a5-9ac8229cd276",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ド",
          pronounciation: "do",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F61-do.mp3?alt=media&token=43f55e8d-98db-4b58-ac3d-1101b3539aae",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "バ",
          pronounciation: "ba",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F62-ba.mp3?alt=media&token=66a2fe86-63a8-4041-a192-0a1a72b958ad",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ビ",
          pronounciation: "bi",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F63-bi.mp3?alt=media&token=61abad57-c5a1-47d8-9e94-1bc869f9796f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ブ",
          pronounciation: "bu",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F64-bu.mp3?alt=media&token=ebfa3115-0ce9-47ef-971e-c70c68ae3872",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ベ",
          pronounciation: "be",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F65-be.mp3?alt=media&token=9dc254e7-a865-4dba-94d5-37c83827acd0",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ボ",
          pronounciation: "bo",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F66-bo.mp3?alt=media&token=01e4d767-4eb8-41dd-80de-4f0f3fa3e66f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "パ",
          pronounciation: "pa",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F67-pa.mp3?alt=media&token=3af9903c-0b99-49bf-a551-6d940dbd9354",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ピ",
          pronounciation: "ppi",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F68-pi.mp3?alt=media&token=6690dca8-d467-484c-9e36-95add2248cf1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "プ",
          pronounciation: "pu",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F69-pu.mp3?alt=media&token=3a0b8848-d2b3-438f-b559-0222951a41f7",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ペ",
          pronounciation: "pe",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F70-pe.mp3?alt=media&token=abff543e-4d73-41e8-8a18-c6cc46697b9f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ポ",
          pronounciation: "po",
          type: "katakana-dakuon",
          meaning: "",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F71-po.mp3?alt=media&token=0385f86e-242d-4ec8-83e9-8df7eee01e1b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "いち",
          pronounciation: "ichi",
          type: "vocabs",
          meaning: "one",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F143-ishi.mp3?alt=media&token=1b037281-c83d-4b9a-9500-9c40b5cd3ac3",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "さん",
          pronounciation: "san",
          type: "vocabs",
          meaning: "three",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F144-san.mp3?alt=media&token=5a61a76d-9c74-4a49-8996-9e121db09214",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "よん",
          pronounciation: "yon",
          type: "vocabs",
          meaning: "four",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F145-yon.mp3?alt=media&token=f2d33b21-93a1-404b-9fff-653219992e09",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ろく",
          pronounciation: "roku",
          type: "vocabs",
          meaning: "six",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F146-roku.mp3?alt=media&token=614f46ca-b1c3-4910-b644-98f6f8303dfa",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "なな",
          pronounciation: "nana",
          type: "vocabs",
          meaning: "seven",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F147-nana.mp3?alt=media&token=89530860-180d-42a3-9f17-6c331bbfe324",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "はち",
          pronounciation: "hachi",
          type: "vocabs",
          meaning: "eight",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F148-hachi.mp3?alt=media&token=3a38c211-b81e-4876-9cf9-ec4825411a9d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "きゅう",
          pronounciation: "kyuu",
          type: "vocabs",
          meaning: "nine",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F149-kyuu.mp3?alt=media&token=2b2b0de3-aaa3-4cb7-b1e8-cf3233e9bd5b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "じゅう",
          pronounciation: "jyuu",
          type: "vocabs",
          meaning: "ten",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F150-jyuu.mp3?alt=media&token=1290f0a1-ca73-41fb-9ecd-422b76902dbb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "すし",
          pronounciation: "sushi",
          type: "vocabs",
          meaning: "sushi",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F151-sushi.mp3?alt=media&token=e45a051e-83ad-4572-8469-89004c68e816",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "えき",
          pronounciation: "eki",
          type: "vocabs",
          meaning: "train station",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F152-eki.mp3?alt=media&token=c6991eee-95e4-4fc7-9ab0-c21b8192abb2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "まち",
          pronounciation: "machi",
          type: "vocabs",
          meaning: "town",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F153-machi.mp3?alt=media&token=75003821-ba18-4e88-89f2-e628553d13e4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "みせ",
          pronounciation: "mise",
          type: "vocabs",
          meaning: "store",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F154-mise.mp3?alt=media&token=2d31e4ef-99db-4033-ad6f-f2fea3a374a2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "です",
          pronounciation: "desu",
          type: "vocabs",
          meaning: "it is/she is/he is",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F155-desu.mp3?alt=media&token=f283c63a-52e4-4811-9d4b-445f3a1261ba",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ありがとう",
          pronounciation: "arigatou",
          type: "vocabs",
          meaning: "thank you",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F156-arigatou.mp3?alt=media&token=63c23fc2-dbd2-4802-b96e-965d3b45eb8d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "これ",
          pronounciation: "kore",
          type: "vocabs",
          meaning: "that",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F157-kore.mp3?alt=media&token=31243bb2-cf43-4e7b-b501-65497ae7d4f4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "それ",
          pronounciation: "sore",
          type: "vocabs",
          meaning: "this",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F158-sore.mp3?alt=media&token=1ec18b30-cb48-4da6-8173-cfd9485a7051",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ちいさい",
          pronounciation: "chiisaai",
          type: "vocabs",
          meaning: "small",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F159-chiisaai.mp3?alt=media&token=9555bbb4-410d-4c18-894f-fdf552b27fe6",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "たかい",
          pronounciation: "takai",
          type: "vocabs",
          meaning: "expensive",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F160-takai.mp3?alt=media&token=7d7ebfc5-e45a-4057-9fdc-16b9bedd39fe",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "そば",
          pronounciation: "soba",
          type: "vocabs",
          meaning: "soba",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F161-soba.mp3?alt=media&token=f2decf4b-25f0-4aa4-bbaf-9b1859fbd969",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ごめん",
          pronounciation: "gomen",
          type: "vocabs",
          meaning: "sorry",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F162-gomen.mp3?alt=media&token=a11a171f-fb16-4e3c-8aa0-72c2bab81d58",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "やすい",
          pronounciation: "yasui",
          type: "vocabs",
          meaning: "cheap",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F163-yasui.mp3?alt=media&token=b454732b-25a2-492b-bf40-5d2cc5679da1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "いい",
          pronounciation: "ii",
          type: "vocabs",
          meaning: "good",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F164-ii.mp3?alt=media&token=e1b820d0-2219-43f4-b67d-862c16b17f90",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "おいし",
          pronounciation: "oishi",
          type: "vocabs",
          meaning: "tasty",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F165-oishi.mp3?alt=media&token=995ab460-1276-43d3-96f6-c6b32925359f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "はい",
          pronounciation: "hai",
          type: "vocabs",
          meaning: "yes",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F166-hai.mp3?alt=media&token=8b223bc6-5c0c-4666-8a65-cad27413ccf6",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "こんにちは",
          pronounciation: "konichiwa",
          type: "vocabs",
          meaning: "hello",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F167-konichiwa.mp3?alt=media&token=348b2aaf-8638-4e3a-8753-e0d6599373f8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ねこ",
          pronounciation: "neko",
          type: "vocabs",
          meaning: "cat",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F168-neko.mp3?alt=media&token=7037a2d1-b9a7-4f5e-bb38-a272470c3d87",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "白 しろ",
          pronounciation: "shiroi",
          type: "vocabs",
          meaning: "white",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F169-shiroi.mp3?alt=media&token=fad16c6b-82dd-4ee0-bb30-ddc5f56aac2c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "はし",
          pronounciation: "hashi",
          type: "vocabs",
          meaning: "chopsticks",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F170-hashi.mp3?alt=media&token=61bbc318-0e2b-465c-a3ba-f7da76cb0018",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "とり",
          pronounciation: "tori",
          type: "vocabs",
          meaning: "bird",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F171-tori.mp3?alt=media&token=953c7830-b3d0-45b8-8076-1d2fd46297fa",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "くろ",
          pronounciation: "kuro",
          type: "vocabs",
          meaning: "black",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F172-kuro.mp3?alt=media&token=9a49f6bf-91e2-483d-aa56-26b794734200",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "かわいい",
          pronounciation: "kawaii",
          type: "vocabs",
          meaning: "cute",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F173-kawaii.mp3?alt=media&token=1060941c-b126-4d7a-8065-68470df87f7a",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "おちゃ",
          pronounciation: "ocha",
          type: "vocabs",
          meaning: "  tea",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F174-ocha.mp3?alt=media&token=a52ec9ee-bafb-4216-b171-2d2eb47736c9",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "にく",
          pronounciation: "niku",
          type: "vocabs",
          meaning: "meat",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F175-niku.mp3?alt=media&token=4a659739-2707-466e-aab9-68909a8e2220",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ください",
          pronounciation: "kudaisai",
          type: "vocabs",
          meaning: "please",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F176-kudaisai.mp3?alt=media&token=226c0ba5-2323-465e-9655-f9e88aa5bd79",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "すみません",
          pronounciation: "sumimasen",
          type: "vocabs",
          meaning: "excuse me",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F177-sumimasen.mp3?alt=media&token=b9627806-69ef-4e50-8bce-426181e043bc",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ともだち",
          pronounciation: "tomadachi",
          type: "vocabs",
          meaning: "friend",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F178-tomadachi.mp3?alt=media&token=dec20b20-30e0-45f1-8d00-20dea096942d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "せんせい",
          pronounciation: "sensei",
          type: "vocabs",
          meaning: "teacher",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F179-sensei.mp3?alt=media&token=28ff9bd0-9d51-43ec-97c5-339a7d4e308a",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "いしゃ",
          pronounciation: "isha",
          type: "vocabs",
          meaning: "doctor",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F180-isha.mp3?alt=media&token=b3e2dbb8-ef06-4307-82ef-a4d4a23b2f7a",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: " がくせい",
          pronounciation: "gakusei",
          type: "vocabs",
          meaning: "student",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F181-gakusai.mp3?alt=media&token=38969a3e-35ee-4d11-b722-0e64add41f0e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "いぬ",
          pronounciation: "inu",
          type: "vocabs",
          meaning: "dog",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F182-inu.mp3?alt=media&token=f59d9711-3989-43dd-99a2-50abd6a6d164",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ですか",
          pronounciation: "desuka",
          type: "vocabs",
          meaning: "is it/is she/is he",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F183-desuka.mp3?alt=media&token=cc227c09-1154-4e97-88d7-af5c3a704a35",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "かさ",
          pronounciation: "kasa",
          type: "vocabs",
          meaning: "umbrella",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F184-kasa.mp3?alt=media&token=07f6a122-8364-4611-9133-63581b0c14af",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ぼうし",
          pronounciation: "boushi",
          type: "vocabs",
          meaning: "hat",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F185-boushi.mp3?alt=media&token=27a637f1-39ae-4e36-97e9-87c9a39041b8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "と",
          pronounciation: "to",
          type: "vocabs",
          meaning: "and",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F186-to.mp3?alt=media&token=013bbdf4-8a88-4cf2-bff8-03aeeed1af21",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "また",
          pronounciation: "mata",
          type: "vocabs",
          meaning: "or",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F187-mata.mp3?alt=media&token=260b208c-42ba-4798-8306-48f5be2b3adf",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "みず",
          pronounciation: "mizu",
          type: "vocabs",
          meaning: "water",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F188-mizu.mp3?alt=media&token=4158f8cb-75e0-453f-8576-69315edbea53",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "に",
          pronounciation: "ni",
          type: "vocabs",
          meaning: "two",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F22-ni.mp3?alt=media&token=cfed8548-4483-4365-95aa-58bd38175fc2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "ご",
          pronounciation: "go",
          type: "vocabs",
          meaning: "five",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F51-go.mp3?alt=media&token=dca57fdd-4ba1-4a0c-a11b-6dd512a68488",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "じゅういち",
          pronounciation: "jyuu ichi",
          type: "vocabs",
          meaning: "eleven",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F191-jyuu-ichi.mp3?alt=media&token=07592529-1d90-4aa6-a2db-5e57ed2e021b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "じゅうに",
          pronounciation: "jyuu ni",
          type: "vocabs",
          meaning: "twevle",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F192-jyuu-ni.mp3?alt=media&token=4555f5cc-1884-498a-b382-3176bb06e44e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "りんご",
          pronounciation: "ringo",
          type: "vocabs",
          meaning: "apple",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F193-ringo.mp3?alt=media&token=1ac5a344-8c6a-47b4-af4e-162d89057ef6",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "おおきい",
          pronounciation: "ookii",
          type: "vocabs",
          meaning: "big",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F194-ookii.mp3?alt=media&token=57877b51-8a59-4423-b1d8-880bb4f11613",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "みらい",
          pronounciation: "mirai",
          type: "vocabs",
          meaning: "future",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F195-mirai.mp3?alt=media&token=16e44849-1d91-4fac-888b-0ef29d300768",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "つき",
          pronounciation: "tsuki",
          type: "vocabs",
          meaning: "moon",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F196-tsuki.mp3?alt=media&token=c892f4ae-2092-4165-b86c-0ea62a8b40fe",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "たいよう",
          pronounciation: "taiyou",
          type: "vocabs",
          meaning: "sun",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F197-taiyou.mp3?alt=media&token=2b303531-2c02-4902-b027-66be28917754",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "いいえ",
          pronounciation: "iie",
          type: "vocabs",
          meaning: "no",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F198-iie.mp3?alt=media&token=f4553e5d-cb2b-4eca-8596-ecf4982faa42",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "くるま",
          pronounciation: "kuruma",
          type: "vocabs",
          meaning: "car",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F199-kuruma.mp3?alt=media&token=258c809d-cfac-4af6-aa2f-4cd4c5c5933c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          character: "でんしゃ",
          pronounciation: "densha",
          type: "vocabs",
          meaning: "train",
          audio_url:
            "https://firebasestorage.googleapis.com/v0/b/waifu-3b5e3.appspot.com/o/audio-url%2F200-densha.mp3?alt=media&token=d03b1ccf-cf21-4a94-a90d-582eb42b1ad8",
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("characters", null, {});
  },
};
