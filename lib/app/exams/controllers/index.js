Exam = require('../../models/exam')

exports.index = function (req, res) {
  res.json(Exam.get());
}