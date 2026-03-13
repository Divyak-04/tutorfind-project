const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tutorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subject: String,
  date: String,
  status: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
