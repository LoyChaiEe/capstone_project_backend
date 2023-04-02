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
     "questions",
     [
       {
         question: "Select the character for: ichi",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the character for: yasui",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the character for: ringo",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the character for: desu",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the character for: mizu",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the character for: soba",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the character for: ocha",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the character for: yon",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the character for: san",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the character for: takai",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the pronouciation for: ご",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: に",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: おちゃ",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: やすい",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: たかい",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: みず",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: はし",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: りんご",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: すし",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: にく",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: おいし",
         type: "recognition-character",
       },
       {
         question: "Select the pronouciation for: です",
         type: "recognition-character",
       },
       {
         question: "What is the meaning of: ご",
         type: "meaning",
       },
       {
         question: "What is the meaning of:に",
         type: "meaning",
       },
       {
         question: "What is the meaning of: おちゃ",
         type: "meaning",
       },
       {
         question: "What is the meaning of: やすい",
         type: "meaning",
       },
       {
         question: "What is the meaning of: たかい",
         type: "meaning",
       },
       {
         question: "What is the meaning of: みず",
         type: "meaning",
       },
       {
         question: "What is the meaning of: はし",
         type: "meaning",
       },
       {
         question: "What is the meaning of: りんご",
         type: "meaning",
       },
       {
         question: "What is the meaning of: すし",
         type: "meaning",
       },
       {
         question: "What is the meaning of: for: にく",
         type: "meaning",
       },
       {
         question: "What is the meaning of: for: おいし",
         type: "meaning",
       },
       {
         question: "What is the meaning of: にく",
         type: "meaning",
       },
       {
         question: "Translate this sentence: one, two ,three",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: sushi, water",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: tasty",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: meat, chopstick",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: sushi, tea",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: four, five ",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: cheap, expensive",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: water, tea",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: soba, tea",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: two, three, four",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: one, three , five",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: it is tea",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: it is chopstick",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: tasty meat",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: cheap soba",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: expensive sushi",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: two, four",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: cheap apple",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: three, five",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: tasty apple",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: いちにさん",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: すしみず",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: おいし",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: にくはし",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: すしおちゃ",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: よんご",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: やすいたかい",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: みずおちゃ",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: そばおちゃ",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: にさんよん",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: いちさんご",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: おちゃです",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: はしです",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: おいしにく",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: やすいそば",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: たかいすし",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: によん",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: やすいりんご",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: さん、ご",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: おいしりんご",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: It is tasty meat",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: It is a cheap soba",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: It is an expensive sushi",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: three, five, two",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: four, three, five, one",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: four, one, two",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: it is an expensive chopstick",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: it is a tasty tea",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: it is an expensive water",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: It is tasty",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: おいしにくです",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: やすいそばです",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: たかいすしです",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: さんごに",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: ろくさんごいち",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: よんいちろく",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: たかいはしです",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: おいしおちゃです",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: たかいみずです",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: おいしです",
         type: "translation-Japanese",
       },
       {
         question: "Translate this sentence: seven, eight, nine, ten",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: ten, eleven, twelve",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: one, two, three, four, five, six",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: nine, ten, eleven, twelve",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: twelve, eleven, ten",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: eight, seven ,six, five",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: five, four, three, two, one",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: meat and chopstick",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: water or tea",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: cat and dog",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: it is a bird",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: it is a dog",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: it is a cat",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: He is a doctor",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: Is she a student",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: Is he a friend",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: Is it good?",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: Is it small?",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: Is it big?",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: white or black",
         type: "translation-English",
       },
       {
         question: "Translate this sentence: She is a teacher",
         type: "translation-English",
       },
       {
         question: "Select the characters for: a",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: i",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: u",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: e",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: o",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ka",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ki",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ku",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: su",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: shi",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: n",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: chi",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ni",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: mi",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: so",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ta",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the pronounciation of: あ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: い",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: う",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: え",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: お",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: か",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: き",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: く",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: す",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: し",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ん",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ち",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: に",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: み",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: そ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: た",
         type: "recognition-character",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Select the characters for: aka",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: oishi",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ue",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: okami",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ookii",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ichi",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: shin",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: miso",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: kiku",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: tatami",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ii",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: en",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: sushi",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: shita",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: oku",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: iie",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the pronounciation of: あか",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: おいし",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: うえ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: おかみ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: おおきい",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: いち",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: しん",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: みそ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: きく",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: たたみ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: いい",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: えん",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: すし",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: した",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: おく",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: いいえ",
         type: "recognition-character",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the characters to their sounds",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Select the characters for: a",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: i",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: u",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: e",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: o",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ka",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ki",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ku",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: su",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: shi",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: n",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: chi",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ni",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: mi",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: so",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: ta",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the pronounciation of: ア",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: イ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ウ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: エ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: オ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: カ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: キ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ク",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ス",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: シ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ン",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: チ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ニ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ミ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ソ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: タ",
         type: "recognition-character",
       },
       {
         question: "Match the characters to sounds",
         type: "matching",
       },
       {
         question: "Match the characters to sounds",
         type: "matching",
       },
       {
         question: "Match the characters to sounds",
         type: "matching",
       },
       {
         question: "Match the characters to sounds",
         type: "matching",
       },
       {
         question: "Match the characters to sounds",
         type: "matching",
       },
       {
         question: "Match the characters to sounds",
         type: "matching",
       },
       {
         question: "Match the characters to sounds",
         type: "matching",
       },
       {
         question: "Match the characters to sounds",
         type: "matching",
       },
       {
         question: "Match the characters to sounds",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Select the characters for: aisu",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: misu　",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: mini　",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: inki　",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: kaki　",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: sukai　",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: kisu　",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: isu　",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: kiku　",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: chikin",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the characters for: suika",
         type: "recognition-pronounciation",
       },
       {
         question: "Select the pronounciation of: アイス",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ミス",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: ミニ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: インキ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: カキ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: スカイ",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: キス",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: イス",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: キク",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: チキン",
         type: "recognition-character",
       },
       {
         question: "Select the pronounciation of: スイカ",
         type: "recognition-character",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
       },
       {
         question: "Match the sounds to the characters",
         type: "matching",
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
    await queryInterface.bulkDelete("questions", null, {});
  }
};
