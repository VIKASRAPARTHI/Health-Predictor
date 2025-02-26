const express = require("express");
const axios = require("axios");
const UserData = require("../models/UserHealth");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userData = new UserData(req.body);
    await userData.save();

    const response = await axios.post("http://127.0.0.1:5000/predict", req.body);
    res.json({ prediction: response.data.prediction });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
