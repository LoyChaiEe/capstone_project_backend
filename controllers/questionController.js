class QuestionsController {
  //model is user model
  constructor() {}
  //Insert your controller's function here
  async randomInput(req, res) {
    const { wordBank, answer, num } = req.body;

    try {
      const input = []
      let count = 0
      answer.map((ele) => {
        input.push(ele.character);
      });
      console.log(input)
      while(count < num){
        const random = Math.floor(Math.random() * wordBank.length);
        if (!input.includes(wordBank[random].character)) {
          input.push(wordBank[random].character);
          count += 1
        }
      }
      const sortInput = randomSort(input)
      const output = {
        data: sortInput,
        msg: "success",
      };
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = QuestionsController;

function randomSort(arr) {
  return arr.slice().sort(() => 0.5 - Math.random());
}
