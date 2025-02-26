import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import Axios
import "../assets/styles/healthForm.css";

const HealthForm = ({ setHealthResults }) => {
  const [formData, setFormData] = useState({
    age: "",
    bmi: "",
    smoking: "No",
    alcoholConsumption: "No",
    physicalActivity: "",
    dietType: "",
    sleepHours: "",
    stressLevel: "",
    bloodPressure: "",
    cholesterol: "",
    familyHistory: "",
    bloodSugar: "",
    waistCircumference: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = "http://localhost:8000/predict";  // Replace with actual API URL
  const API_KEY = "https://nexus-heg8.onrender.com"; // Ensure this is a key, not a URL

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to submit form data to FastAPI using Axios
  const submitHealthData = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY, // API key should be a string, not a URL
        },
      });

      setHealthResults(response.data); // Store results in state
      navigate("/output"); // Redirect to OutputPage
    } catch (error) {
      setError(error.response ? error.response.data : "Error connecting to the API");
    }
  };

  return (
    <div className="health-form-container">
      <h2>Health Risk Assessment</h2>
      <form className="health-form" onSubmit={submitHealthData}>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>BMI:</label>
        <input type="number" name="bmi" value={formData.bmi} onChange={handleChange} required />

        <label>Smoking:</label>
        <select name="smoking" value={formData.smoking} onChange={handleChange}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>

        <label>Alcohol Consumption:</label>
        <select name="alcoholConsumption" value={formData.alcoholConsumption} onChange={handleChange}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>

        <label>Physical Activity (hours/week):</label>
        <input type="number" name="physicalActivity" value={formData.physicalActivity} onChange={handleChange} />

        <label>Diet Type:</label>
        <input type="text" name="dietType" value={formData.dietType} onChange={handleChange} />

        <label>Sleep Hours:</label>
        <input type="number" name="sleepHours" value={formData.sleepHours} onChange={handleChange} />

        <label>Stress Level:</label>
        <input type="text" name="stressLevel" value={formData.stressLevel} onChange={handleChange} />

        <label>Blood Pressure:</label>
        <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} />

        <label>Cholesterol:</label>
        <input type="text" name="cholesterol" value={formData.cholesterol} onChange={handleChange} />

        <label>Family History:</label>
        <input type="text" name="familyHistory" value={formData.familyHistory} onChange={handleChange} />

        <label>Blood Sugar:</label>
        <input type="text" name="bloodSugar" value={formData.bloodSugar} onChange={handleChange} />

        <label>Waist Circumference (cm):</label>
        <input type="number" name="waistCircumference" value={formData.waistCircumference} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default HealthForm;
