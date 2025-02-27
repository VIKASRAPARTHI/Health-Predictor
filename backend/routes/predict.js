const express = require("express");
const axios = require("axios");
const UserData = require("../models/UserHealth");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Validate the incoming data
    if (!req.body) {
      return res.status(400).json({ message: "No data provided" });
    }

    // Create new user data instance
    const userData = new UserData(req.body);
    
    // Validate the data before saving
    const validationError = userData.validateSync();
    if (validationError) {
      return res.status(400).json({ message: validationError.message });
    }

    // Save the data
    await userData.save();
    console.log("Received data:", req.body);

    // Send success response
    res.status(200).json({ 
      success: true,
      message: "Data saved successfully",
      data: userData 
    });

  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ 
      success: false,
      message: "Failed to save data",
      error: error.message 
    });
  }
});

module.exports = router;