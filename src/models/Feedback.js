const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },

});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;