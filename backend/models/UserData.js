const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema({
  age: Number,
  bmi: Number,
  physical_activity: Number,
  diet: String,
  smoking: Boolean,
  alcohol: Boolean,
  sleep_hours: Number,
});

module.exports = mongoose.model("UserData", UserDataSchema);
