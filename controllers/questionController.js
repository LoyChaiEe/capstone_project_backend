class QuestionsController {
  //model is user model
  constructor() {}
  //Insert your controller's function here
  async randomInput(req, res) {
    const { data, num } = req.body;
    console.log(data,num)
    try {
      const input = []
      let count = 0
      while(count < num){
        const random = Math.floor(Math.random() * data.length);
        if (!input.includes(data[random])) {
          input.push(data[random]);
          count += 1
        }
      }
      const output = {
        data: input,
        msg: "success",
      };
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = QuestionsController;
