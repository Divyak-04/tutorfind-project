const mongoose = require('mongoose');

const tutorProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subjects: [String],
  experience: String,
  bio: String,
  availability: String
});

module.exports = mongoose.model('TutorProfile', tutorProfileSchema);
