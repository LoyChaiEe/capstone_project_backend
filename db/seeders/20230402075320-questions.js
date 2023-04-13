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
         id: "1",
         question: "Select the character for: ichi",
         type: "recognition-pronounciation-vocabs",
       },
       {
         id: "2",
         question: "Select the character for: yasui",
         type: "recognition-pronounciation-vocabs",
       },
       {
         id: "3",
         question: "Select the character for: ringo",
         type: "recognition-pronounciation-vocabs",
       },
       {
         id: "4",
         question: "Select the character for: desu",
         type: "recognition-pronounciation-vocabs",
       },
       {
         id: "5",
         question: "Select the character for: mizu",
         type: "recognition-pronounciation-vocabs",
       },
       {
         id: "6",
         question: "Select the character for: soba",
         type: "recognition-pronounciation-vocabs",
       },
       {
         id: "7",
         question: "Select the character for: ocha",
         type: "recognition-pronounciation-vocabs",
       },
       {
         id: "8",
         question: "Select the character for: yon",
         type: "recognition-pronounciation-vocabs",
       },
       {
         id: "9",
         question: "Select the character for: san",
         type: "recognition-pronounciation-vocabs",
       },
       {
         id: "10",
         question: "Select the character for: takai",
         type: "recognition-pronounciation-vocabs",
       },
       {
         id: "11",
         question: "Select the pronouciation for: ご",
         type: "recognition-character-vocabs",
       },
       {
         id: "12",
         question: "Select the pronouciation for: に",
         type: "recognition-character-vocabs",
       },
       {
         id: "13",
         question: "Select the pronouciation for: おちゃ",
         type: "recognition-character-vocabs",
       },
       {
         id: "14",
         question: "Select the pronouciation for: やすい",
         type: "recognition-character-vocabs",
       },
       {
         id: "15",
         question: "Select the pronouciation for: たかい",
         type: "recognition-character-vocabs",
       },
       {
         id: "16",
         question: "Select the pronouciation for: みず",
         type: "recognition-character-vocabs",
       },
       {
         id: "17",
         question: "Select the pronouciation for: はし",
         type: "recognition-character-vocabs",
       },
       {
         id: "18",
         question: "Select the pronouciation for: りんご",
         type: "recognition-character-vocabs",
       },
       {
         id: "19",
         question: "Select the pronouciation for: すし",
         type: "recognition-character-vocabs",
       },
       {
         id: "20",
         question: "Select the pronouciation for: にく",
         type: "recognition-character-vocabs",
       },
       {
         id: "21",
         question: "Select the pronouciation for: おいし",
         type: "recognition-character-vocabs",
       },
       {
         id: "22",
         question: "Select the pronouciation for: です",
         type: "recognition-character-vocabs",
       },
       {
         id: "23",
         question: "What is the meaning of: ご",
         type: "meaning-vocabs",
       },
       {
         id: "24",
         question: "What is the meaning of:に",
         type: "meaning-vocabs",
       },
       {
         id: "25",
         question: "What is the meaning of: おちゃ",
         type: "meaning-vocabs",
       },
       {
         id: "26",
         question: "What is the meaning of: やすい",
         type: "meaning-vocabs",
       },
       {
         id: "27",
         question: "What is the meaning of: たかい",
         type: "meaning-vocabs",
       },
       {
         id: "28",
         question: "What is the meaning of: みず",
         type: "meaning-vocabs",
       },
       {
         id: "29",
         question: "What is the meaning of: はし",
         type: "meaning-vocabs",
       },
       {
         id: "30",
         question: "What is the meaning of: りんご",
         type: "meaning-vocabs",
       },
       {
         id: "31",
         question: "What is the meaning of: すし",
         type: "meaning-vocabs",
       },
       {
         id: "32",
         question: "What is the meaning of: for: にく",
         type: "meaning-vocabs",
       },
       {
         id: "33",
         question: "What is the meaning of: for: おいし",
         type: "meaning-vocabs",
       },
       {
         id: "34",
         question: "What is the meaning of: にく",
         type: "meaning-vocabs",
       },
       {
         id: "35",
         question: "Translate this sentence: one, two ,three",
         type: "translation-English-vocabs",
       },
       {
         id: "36",
         question: "Translate this sentence: sushi, water",
         type: "translation-English-vocabs",
       },
       {
         id: "37",
         question: "Translate this sentence: tasty",
         type: "translation-English-vocabs",
       },
       {
         id: "38",
         question: "Translate this sentence: meat, chopstick",
         type: "translation-English-vocabs",
       },
       {
         id: "39",
         question: "Translate this sentence: sushi, tea",
         type: "translation-English-vocabs",
       },
       {
         id: "40",
         question: "Translate this sentence: four, five ",
         type: "translation-English-vocabs",
       },
       {
         id: "41",
         question: "Translate this sentence: cheap, expensive",
         type: "translation-English-vocabs",
       },
       {
         id: "42",
         question: "Translate this sentence: water, tea",
         type: "translation-English-vocabs",
       },
       {
         id: "43",
         question: "Translate this sentence: soba, tea",
         type: "translation-English-vocabs",
       },
       {
         id: "44",
         question: "Translate this sentence: two, three, four",
         type: "translation-English-vocabs",
       },
       {
         id: "45",
         question: "Translate this sentence: one, three , five",
         type: "translation-English-vocabs",
       },
       {
         id: "46",
         question: "Translate this sentence: it is tea",
         type: "translation-English-vocabs",
       },
       {
         id: "47",
         question: "Translate this sentence: it is chopstick",
         type: "translation-English-vocabs",
       },
       {
         id: "48",
         question: "Translate this sentence: tasty meat",
         type: "translation-English-vocabs",
       },
       {
         id: "49",
         question: "Translate this sentence: cheap soba",
         type: "translation-English-vocabs",
       },
       {
         id: "50",
         question: "Translate this sentence: expensive sushi",
         type: "translation-English-vocabs",
       },
       {
         id: "51",
         question: "Translate this sentence: two, four",
         type: "translation-English-vocabs",
       },
       {
         id: "52",
         question: "Translate this sentence: cheap apple",
         type: "translation-English-vocabs",
       },
       {
         id: "53",
         question: "Translate this sentence: three, five",
         type: "translation-English-vocabs",
       },
       {
         id: "54",
         question: "Translate this sentence: tasty apple",
         type: "translation-English-vocabs",
       },
       {
         id: "55",
         question: "Translate this sentence: いち、に、さん",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "56",
         question: "Translate this sentence: すし、みず",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "57",
         question: "Translate this sentence: おいし",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "58",
         question: "Translate this sentence: にく、はし",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "59",
         question: "Translate this sentence: すし、おちゃ",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "60",
         question: "Translate this sentence: よん、ご",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "61",
         question: "Translate this sentence: やすいたかい",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "62",
         question: "Translate this sentence: みず、おちゃ",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "63",
         question: "Translate this sentence: そば、おちゃ",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "64",
         question: "Translate this sentence: に、さん、よん",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "65",
         question: "Translate this sentence: いち、さん、ご",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "66",
         question: "Translate this sentence: おちゃです",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "67",
         question: "Translate this sentence: はしです",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "68",
         question: "Translate this sentence: おいしにく",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "69",
         question: "Translate this sentence: やすいそば",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "70",
         question: "Translate this sentence: たかいすし",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "71",
         question: "Translate this sentence: に、よん",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "72",
         question: "Translate this sentence: やすいりんご",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "73",
         question: "Translate this sentence: さん、ご",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "74",
         question: "Translate this sentence: おいしりんご",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "75",
         question: "Translate this sentence: It is tasty meat",
         type: "translation-English-vocabs",
       },
       {
         id: "76",
         question: "Translate this sentence: It is a cheap soba",
         type: "translation-English-vocabs",
       },
       {
         id: "77",
         question: "Translate this sentence: It is an expensive sushi",
         type: "translation-English-vocabs",
       },
       {
         id: "78",
         question: "Translate this sentence: three, five, two",
         type: "translation-English-vocabs",
       },
       {
         id: "79",
         question: "Translate this sentence: four, three, five, one",
         type: "translation-English-vocabs",
       },
       {
         id: "80",
         question: "Translate this sentence: four, one, two",
         type: "translation-English-vocabs",
       },
       {
         id: "81",
         question: "Translate this sentence: it is an expensive chopstick",
         type: "translation-English-vocabs",
       },
       {
         id: "82",
         question: "Translate this sentence: it is a tasty tea",
         type: "translation-English-vocabs",
       },
       {
         id: "83",
         question: "Translate this sentence: it is an expensive water",
         type: "translation-English-vocabs",
       },
       {
         id: "84",
         question: "Translate this sentence: It is tasty",
         type: "translation-English-vocabs",
       },
       {
         id: "85",
         question: "Translate this sentence: おいしにくです",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "86",
         question: "Translate this sentence: やすいそばです",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "87",
         question: "Translate this sentence: たかいすしです",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "88",
         question: "Translate this sentence: さん、ご、に",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "89",
         question: "Translate this sentence: ろく、さん、ご、いち",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "90",
         question: "Translate this sentence: よん、いち、ろく",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "91",
         question: "Translate this sentence: たかいはしです",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "92",
         question: "Translate this sentence: おいしおちゃです",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "93",
         question: "Translate this sentence: たかいみずです",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "94",
         question: "Translate this sentence: おいしです",
         type: "translation-Japanese-vocabs",
       },
       {
         id: "95",
         question: "Translate this sentence: seven, eight, nine, ten",
         type: "translation-English-vocabs",
       },
       {
         id: "96",
         question: "Translate this sentence: ten, eleven, twelve",
         type: "translation-English-vocabs",
       },
       {
         id: "97",
         question: "Translate this sentence: one, two, three, four, five, six",
         type: "translation-English-vocabs",
       },
       {
         id: "98",
         question: "Translate this sentence: nine, ten, eleven, twelve",
         type: "translation-English-vocabs",
       },
       {
         id: "99",
         question: "Translate this sentence: twelve, eleven, ten",
         type: "translation-English-vocabs",
       },
       {
         id: "100",
         question: "Translate this sentence: eight, seven ,six, five",
         type: "translation-English-vocabs",
       },
       {
         id: "101",
         question: "Translate this sentence: five, four, three, two, one",
         type: "translation-English-vocabs",
       },
       {
         id: "102",
         question: "Translate this sentence: meat and chopstick",
         type: "translation-English-vocabs",
       },
       {
         id: "103",
         question: "Translate this sentence: water or tea",
         type: "translation-English-vocabs",
       },
       {
         id: "104",
         question: "Translate this sentence: cat and dog",
         type: "translation-English-vocabs",
       },
       {
         id: "105",
         question: "Translate this sentence: it is a bird",
         type: "translation-English-vocabs",
       },
       {
         id: "106",
         question: "Translate this sentence: it is a dog",
         type: "translation-English-vocabs",
       },
       {
         id: "107",
         question: "Translate this sentence: it is a cat",
         type: "translation-English-vocabs",
       },
       {
         id: "108",
         question: "Translate this sentence: He is a doctor",
         type: "translation-English-vocabs",
       },
       {
         id: "109",
         question: "Translate this sentence: Is she a student",
         type: "translation-English-vocabs",
       },
       {
         id: "110",
         question: "Translate this sentence: Is he a friend",
         type: "translation-English-vocabs",
       },
       {
         id: "111",
         question: "Translate this sentence: Is it good?",
         type: "translation-English-vocabs",
       },
       {
         id: "112",
         question: "Translate this sentence: Is it small?",
         type: "translation-English-vocabs",
       },
       {
         id: "113",
         question: "Translate this sentence: Is it big?",
         type: "translation-English-vocabs",
       },
       {
         id: "114",
         question: "Translate this sentence: white or black",
         type: "translation-English-vocabs",
       },
       {
         id: "115",
         question: "Translate this sentence: She is a teacher",
         type: "translation-English-vocabs",
       },
       {
         id: "116",
         question: "Select the characters for: a",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "117",
         question: "Select the characters for: i",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "118",
         question: "Select the characters for: u",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "119",
         question: "Select the characters for: e",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "120",
         question: "Select the characters for: o",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "121",
         question: "Select the characters for: ka",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "122",
         question: "Select the characters for: ki",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "123",
         question: "Select the characters for: ku",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "124",
         question: "Select the characters for: su",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "125",
         question: "Select the characters for: shi",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "126",
         question: "Select the characters for: n",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "127",
         question: "Select the characters for: chi",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "128",
         question: "Select the characters for: ni",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "129",
         question: "Select the characters for: mi",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "130",
         question: "Select the characters for: so",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "131",
         question: "Select the characters for: ta",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "132",
         question: "Select the pronounciation of: あ",
         type: "recognition-character-hiragana",
       },
       {
         id: "133",
         question: "Select the pronounciation of: い",
         type: "recognition-character-hiragana",
       },
       {
         id: "134",
         question: "Select the pronounciation of: う",
         type: "recognition-character-hiragana",
       },
       {
         id: "135",
         question: "Select the pronounciation of: え",
         type: "recognition-character-hiragana",
       },
       {
         id: "136",
         question: "Select the pronounciation of: お",
         type: "recognition-character-hiragana",
       },
       {
         id: "137",
         question: "Select the pronounciation of: か",
         type: "recognition-character-hiragana",
       },
       {
         id: "138",
         question: "Select the pronounciation of: き",
         type: "recognition-character-hiragana",
       },
       {
         id: "139",
         question: "Select the pronounciation of: く",
         type: "recognition-character-hiragana",
       },
       {
         id: "140",
         question: "Select the pronounciation of: す",
         type: "recognition-character-hiragana",
       },
       {
         id: "141",
         question: "Select the pronounciation of: し",
         type: "recognition-character-hiragana",
       },
       {
         id: "142",
         question: "Select the pronounciation of: ん",
         type: "recognition-character-hiragana",
       },
       {
         id: "143",
         question: "Select the pronounciation of: ち",
         type: "recognition-character-hiragana",
       },
       {
         id: "144",
         question: "Select the pronounciation of: に",
         type: "recognition-character-hiragana",
       },
       {
         id: "145",
         question: "Select the pronounciation of: み",
         type: "recognition-character-hiragana",
       },
       {
         id: "146",
         question: "Select the pronounciation of: そ",
         type: "recognition-character-hiragana",
       },
       {
         id: "147",
         question: "Select the pronounciation of: た",
         type: "recognition-character-hiragana",
       },
       {
         id: "148",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "149",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "150",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "151",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "152",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "153",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "154",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "155",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "156",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "157",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "158",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "159",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "160",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "161",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "162",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "163",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "164",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "165",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "166",
         question: "Select the characters for: aka",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "167",
         question: "Select the characters for: oishi",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "168",
         question: "Select the characters for: ue",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "169",
         question: "Select the characters for: okami",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "170",
         question: "Select the characters for: ookii",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "171",
         question: "Select the characters for: ichi",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "172",
         question: "Select the characters for: shin",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "173",
         question: "Select the characters for: miso",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "174",
         question: "Select the characters for: kiku",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "175",
         question: "Select the characters for: tatami",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "176",
         question: "Select the characters for: ii",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "177",
         question: "Select the characters for: en",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "178",
         question: "Select the characters for: sushi",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "179",
         question: "Select the characters for: shita",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "180",
         question: "Select the characters for: oku",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "181",
         question: "Select the characters for: iie",
         type: "recognition-pronounciation-hiragana",
       },
       {
         id: "182",
         question: "Select the pronounciation of: あか",
         type: "recognition-character-hiragana",
       },
       {
         id: "183",
         question: "Select the pronounciation of: おいし",
         type: "recognition-character-hiragana",
       },
       {
         id: "184",
         question: "Select the pronounciation of: うえ",
         type: "recognition-character-hiragana",
       },
       {
         id: "185",
         question: "Select the pronounciation of: おかみ",
         type: "recognition-character-hiragana",
       },
       {
         id: "186",
         question: "Select the pronounciation of: おおきい",
         type: "recognition-character-hiragana",
       },
       {
         id: "187",
         question: "Select the pronounciation of: いち",
         type: "recognition-character-hiragana",
       },
       {
         id: "188",
         question: "Select the pronounciation of: しん",
         type: "recognition-character-hiragana",
       },
       {
         id: "189",
         question: "Select the pronounciation of: みそ",
         type: "recognition-character-hiragana",
       },
       {
         id: "190",
         question: "Select the pronounciation of: きく",
         type: "recognition-character-hiragana",
       },
       {
         id: "191",
         question: "Select the pronounciation of: たたみ",
         type: "recognition-character-hiragana",
       },
       {
         id: "192",
         question: "Select the pronounciation of: いい",
         type: "recognition-character-hiragana",
       },
       {
         id: "193",
         question: "Select the pronounciation of: えん",
         type: "recognition-character-hiragana",
       },
       {
         id: "194",
         question: "Select the pronounciation of: すし",
         type: "recognition-character-hiragana",
       },
       {
         id: "195",
         question: "Select the pronounciation of: した",
         type: "recognition-character-hiragana",
       },
       {
         id: "196",
         question: "Select the pronounciation of: おく",
         type: "recognition-character-hiragana",
       },
       {
         id: "197",
         question: "Select the pronounciation of: いいえ",
         type: "recognition-character-hiragana",
       },
       {
         id: "198",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "199",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "200",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "201",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "202",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "203",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "204",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "205",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "206",
         question: "Match the characters to their sounds",
         type: "matching-hiragana",
       },
       {
         id: "207",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "208",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "209",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "210",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "211",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "212",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "213",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "214",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "215",
         question: "Match the sounds to the characters",
         type: "matching-hiragana",
       },
       {
         id: "216",
         question: "Select the characters for: a",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "217",
         question: "Select the characters for: i",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "218",
         question: "Select the characters for: u",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "219",
         question: "Select the characters for: e",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "220",
         question: "Select the characters for: o",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "221",
         question: "Select the characters for: ka",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "222",
         question: "Select the characters for: ki",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "223",
         question: "Select the characters for: ku",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "224",
         question: "Select the characters for: su",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "225",
         question: "Select the characters for: shi",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "226",
         question: "Select the characters for: n",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "227",
         question: "Select the characters for: chi",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "228",
         question: "Select the characters for: ni",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "229",
         question: "Select the characters for: mi",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "230",
         question: "Select the characters for: so",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "231",
         question: "Select the characters for: ta",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "232",
         question: "Select the pronounciation of: ア",
         type: "recognition-character-katakana",
       },
       {
         id: "233",
         question: "Select the pronounciation of: イ",
         type: "recognition-character-katakana",
       },
       {
         id: "234",
         question: "Select the pronounciation of: ウ",
         type: "recognition-character-katakana",
       },
       {
         id: "235",
         question: "Select the pronounciation of: エ",
         type: "recognition-character-katakana",
       },
       {
         id: "236",
         question: "Select the pronounciation of: オ",
         type: "recognition-character-katakana",
       },
       {
         id: "237",
         question: "Select the pronounciation of: カ",
         type: "recognition-character-katakana",
       },
       {
         id: "238",
         question: "Select the pronounciation of: キ",
         type: "recognition-character-katakana",
       },
       {
         id: "239",
         question: "Select the pronounciation of: ク",
         type: "recognition-character-katakana",
       },
       {
         id: "240",
         question: "Select the pronounciation of: ス",
         type: "recognition-character-katakana",
       },
       {
         id: "241",
         question: "Select the pronounciation of: シ",
         type: "recognition-character-katakana",
       },
       {
         id: "242",
         question: "Select the pronounciation of: ン",
         type: "recognition-character-katakana",
       },
       {
         id: "243",
         question: "Select the pronounciation of: チ",
         type: "recognition-character-katakana",
       },
       {
         id: "244",
         question: "Select the pronounciation of: ニ",
         type: "recognition-character-katakana",
       },
       {
         id: "245",
         question: "Select the pronounciation of: ミ",
         type: "recognition-character-katakana",
       },
       {
         id: "246",
         question: "Select the pronounciation of: ソ",
         type: "recognition-character-katakana",
       },
       {
         id: "247",
         question: "Select the pronounciation of: タ",
         type: "recognition-character-katakana",
       },
       {
         id: "248",
         question: "Match the characters to sounds",
         type: "matching-katakana",
       },
       {
         id: "249",
         question: "Match the characters to sounds",
         type: "matching-katakana",
       },
       {
         id: "250",
         question: "Match the characters to sounds",
         type: "matching-katakana",
       },
       {
         id: "251",
         question: "Match the characters to sounds",
         type: "matching-katakana",
       },
       {
         id: "252",
         question: "Match the characters to sounds",
         type: "matching-katakana",
       },
       {
         id: "253",
         question: "Match the characters to sounds",
         type: "matching-katakana",
       },
       {
         id: "254",
         question: "Match the characters to sounds",
         type: "matching-katakana",
       },
       {
         id: "255",
         question: "Match the characters to sounds",
         type: "matching-katakana",
       },
       {
         id: "256",
         question: "Match the characters to sounds",
         type: "matching-katakana",
       },
       {
         id: "257",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "258",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "259",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "260",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "261",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "262",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "263",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "264",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "265",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "266",
         question: "Select the characters for: aisu",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "267",
         question: "Select the characters for: misu　",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "268",
         question: "Select the characters for: mini　",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "269",
         question: "Select the characters for: inki　",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "270",
         question: "Select the characters for: kaki　",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "271",
         question: "Select the characters for: sukai　",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "272",
         question: "Select the characters for: kisu　",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "273",
         question: "Select the characters for: isu　",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "274",
         question: "Select the characters for: kiku　",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "275",
         question: "Select the characters for: chikin",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "276",
         question: "Select the characters for: suika",
         type: "recognition-pronounciation-katakana",
       },
       {
         id: "277",
         question: "Select the pronounciation of: アイス",
         type: "recognition-character-katakana",
       },
       {
         id: "278",
         question: "Select the pronounciation of: ミス",
         type: "recognition-character-katakana",
       },
       {
         id: "279",
         question: "Select the pronounciation of: ミニ",
         type: "recognition-character-katakana",
       },
       {
         id: "280",
         question: "Select the pronounciation of: インキ",
         type: "recognition-character-katakana",
       },
       {
         id: "281",
         question: "Select the pronounciation of: カキ",
         type: "recognition-character-katakana",
       },
       {
         id: "282",
         question: "Select the pronounciation of: スカイ",
         type: "recognition-character-katakana",
       },
       {
         id: "283",
         question: "Select the pronounciation of: キス",
         type: "recognition-character-katakana",
       },
       {
         id: "284",
         question: "Select the pronounciation of: イス",
         type: "recognition-character-katakana",
       },
       {
         id: "285",
         question: "Select the pronounciation of: キク",
         type: "recognition-character-katakana",
       },
       {
         id: "286",
         question: "Select the pronounciation of: チキン",
         type: "recognition-character-katakana",
       },
       {
         id: "287",
         question: "Select the pronounciation of: スイカ",
         type: "recognition-character-katakana",
       },
       {
         id: "288",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "289",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "290",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "291",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "292",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
       },
       {
         id: "293",
         question: "Match the sounds to the characters",
         type: "matching-katakana",
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
