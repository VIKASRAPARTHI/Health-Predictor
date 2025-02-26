const express = require('express');
const router = express.Router();
const UserHealth = require('../models/UserHealth');

// POST: Save health data
router.post('/submit', async (req, res) => {
  try {
    const newHealthData = new UserHealth(req.body);
    await newHealthData.save();
    res.status(201).json({ message: "Data saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET: Fetch all user data (for admin or analysis)
router.get('/data', async (req, res) => {
  try {
    const healthData = await UserHealth.find();
    res.json(healthData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
