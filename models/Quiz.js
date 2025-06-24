const mongoose = require('mongoose');
const QuizSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  questions: [
    {
      question: String,
      options: [String],
      answer: String, // correct answer
    },
  ],
  publicLink: String,
});
module.exports = mongoose.model('Quiz', QuizSchema);
