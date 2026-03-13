const express = require('express');
const TutorProfile = require('../models/TutorProfile');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/profile', auth, async (req, res) => {
  const profile = new TutorProfile({
    userId: req.user.id,
    ...req.body
  });
  await profile.save();
  res.json(profile);
});

router.get('/all', async (_, res) => {
  const tutors = await TutorProfile.find().populate('userId', 'name email');
  res.json(tutors);
});

router.get('/:id', async (req, res) => {
  const tutor = await TutorProfile.findById(req.params.id);
  res.json(tutor);
});

module.exports = router;
