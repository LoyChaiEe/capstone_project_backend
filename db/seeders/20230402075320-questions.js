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
      "questions",
      [
        {
          question: "Select the character for: ichi",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: ni",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: san",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: yon",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: go",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: niku",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: mizu",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: sushi",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: soba",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: ocha",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: ringo",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: hashi",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: takai",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: yasui",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: oishi",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the character for: desu",
          type: "recognition-pronounciation-vocabs",
        },
        {
          question: "Select the pronouciation for: いち",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: に",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: さん",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: よん",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: ご",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: にく",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: みず",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: すし",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: そば",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: おちゃ",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: りんご",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: はし",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: たかい",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: やすい",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: おいし",
          type: "recognition-character-vocabs",
        },
        {
          question: "Select the pronouciation for: です",
          type: "recognition-character-vocabs",
        },
        {
          question: "What is the meaning of this: いち",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: に",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: さん",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: よん",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: ご",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: にく",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: みず",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: すし",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: そば",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: おちゃ",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: りんご",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: はし",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: たかい",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: やすい",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: おいし",
          type: "meaning-character-vocabs",
        },
        {
          question: "What is the meaning of this: です",
          type: "meaning-character-vocabs",
        },
        {
          question: "Translate this sentence: one, two ,three",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: sushi, water",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: tasty",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: meat, chopstick",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: sushi, tea",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: four, five ",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: cheap, expensive",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: water, tea",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: soba, tea",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: two, three, four",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: one, three , five",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: it is tea",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: it is chopstick",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: tasty meat",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: cheap soba",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: expensive sushi",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: two, four",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: cheap apple",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: three, five",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: tasty apple",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: いち、に、さん",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: すし、みず",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: おいし",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: にく、はし",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: すし、おちゃ",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: よん、ご",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: やすいたかい",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: みず、おちゃ",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: そば、おちゃ",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: に、さん、よん",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: いち、さん、ご",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: おちゃです。",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: はしです。",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: おいしにく",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: やすいそば",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: たかいすし",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: に、よん",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: やすいりんご",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: さん、ご",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: おいしりんご",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Match the words to their meaning",
          type: "matching-character-vocabs",
        },
        {
          question: "Translate this sentence: It is tasty meat",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: It is a cheap soba",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: It is an expensive sushi",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: three, five, two",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: four, three, five, one",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: four, one, two",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: it is an expensive chopstick",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: it is a tasty tea",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: it is an expensive water",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: It is tasty",
          type: "translation-English-vocabs",
        },
        {
          question: "Translate this sentence: おいしにくです",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: やすいそばです",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: たかいすしです",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: さん、ご、に",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: よん、さん、ご、いち",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: よん、いち、に",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: たかいはしです",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: おいしおちゃです",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: たかいみずです",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Translate this sentence: おいしです",
          type: "translation-Japanese-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Match the meaning to their words",
          type: "matching-meaning-vocabs",
        },
        {
          question: "Write this character: あ",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: い",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: う",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: え",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: お",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: か",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: き",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: く",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: す",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: し",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: ん",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: ち",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: に",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: み",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: そ",
          type: "writing-character-hiragana",
        },
        {
          question: "Write this character: た",
          type: "writing-character-hiragana",
        },
        {
          question: "Select the characters for: a",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: i",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: u",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: e",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: o",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: ka",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: ki",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: ku",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: su",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: shi",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: n",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: chi",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: ni",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: mi",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: so",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: ta",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the pronounciation of: あ",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: い",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: う",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: え",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: お",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: か",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: き",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: く",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: す",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: し",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: ん",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: ち",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: に",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: み",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: そ",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: た",
          type: "recognition-character-hiragana",
        },
        {
          question: "Match the characters to their sounds",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: aka",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: oishi",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: ue",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: okami",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: ookii",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: ichi",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: shin",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: miso",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: kiku",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: tatami",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: ii",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: en",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: sushi",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: shita",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: oku",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the characters for: iie",
          type: "recognition-pronounciation-hiragana",
        },
        {
          question: "Select the pronounciation of: あか",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: おいし",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: うえ",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: おかみ",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: おおきい",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: いち",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: しん",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: みそ",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: きく",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: たたみ",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: いい",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: えん",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: すし",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: した",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: おく",
          type: "recognition-character-hiragana",
        },
        {
          question: "Select the pronounciation of: いいえ",
          type: "recognition-character-hiragana",
        },
        {
          question: "Write this character: ア",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: イ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: ウ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: エ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: オ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: カ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: キ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: ク",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: ス",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: シ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: ン",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: チ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: ニ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: ミ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: ソ",
          type: "writing-character-katakana",
        },
        {
          question: "Write this character: タ",
          type: "writing-character-katakana",
        },
        {
          question: "Select the characters for: a",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: i",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: u",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: e",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: o",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: ka",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: ki",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: ku",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: su",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: shi",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: n",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: chi",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: ni",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: mi",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: so",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: ta",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the pronounciation of: ア",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: イ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: ウ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: エ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: オ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: カ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: キ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: ク",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: ス",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: シ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: ン",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: チ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: ニ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: ミ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: ソ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: タ",
          type: "recognition-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the characters to their pronounciation",
          type: "matching-character-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Match the pronounciation to the characters",
          type: "matching-pronounciation-katakana",
        },
        {
          question: "Select the characters for: aisu",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: misu　",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: mini　",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: inki　",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: kaki　",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: sukai　",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: kisu　",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: isu　",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: kiku　",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: chikin",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the characters for: suika",
          type: "recognition-pronounciation-katakana",
        },
        {
          question: "Select the pronounciation of: アイス",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: ミス",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: ミニ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: インキ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: カキ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: スカイ",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: キス",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: イス",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: キク",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: チキン",
          type: "recognition-character-katakana",
        },
        {
          question: "Select the pronounciation of: スイカ",
          type: "recognition-character-katakana",
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
    await queryInterface.bulkDelete("questions", null, {});
  },
};
