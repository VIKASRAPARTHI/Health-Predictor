const mongoose = require('mongoose');

const UserHealthSchema = new mongoose.Schema({
  age: { type: Number, required: true },
  bmi: { type: Number, required: true },
  smoking: { type: String, enum: ['Yes', 'No'], required: true },
  alcoholConsumption: { type: String, enum: ['Yes', 'No'], required: true },
  physicalActivity: { type: String, required: true },
  dietType: { type: String, required: true },
  sleepHours: { type: Number, required: true },
  stressLevel: { type: String, required: true },
  bloodPressure: { type: String, required: true },
  cholesterol: { type: String, required: true },
  familyHistory: { type: String, required: true },
  bloodSugar: { type: String, required: true },
  waistCircumference: { type: Number, required: true }
});

const UserHealth = mongoose.model('UserHealth', UserHealthSchema);
module.exports = UserHealth;
