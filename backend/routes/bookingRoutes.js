const express = require('express');
const Booking = require('../models/Booking');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', auth, async (req, res) => {
  const booking = new Booking({
    studentId: req.user.id,
    ...req.body
  });
  await booking.save();
  res.json(booking);
});

router.get('/student/:id', async (req, res) => {
  const bookings = await Booking.find({ studentId: req.params.id });
  res.json(bookings);
});

router.get('/tutor/:id', async (req, res) => {
  const bookings = await Booking.find({ tutorId: req.params.id });
  res.json(bookings);
});

module.exports = router;
