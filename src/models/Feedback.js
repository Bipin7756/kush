const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },
  // Other feedback-related fields
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;