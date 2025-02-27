import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/healthForm.css";

const HealthForm = ({ setHealthResults }) => {
  const [formData, setFormData] = useState({
    Age: "",
    BMI: "",
    Smoking: "0",
    AlcoholConsumption: "0",
    PhysicalActivity: "0",
    DietType: "0",
    SleepHours: "",
    StressLevel: "0",
    BloodPressure: "0",
    Cholesterol: "0",
    FamilyHistory: "0",
    BloodSugar: "",
    WaistCircumference: ""
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const API_URL = "https://nexus-heg8.onrender.com/predict";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateData = (data) => {
    if (data.Age < 0 || data.Age > 120) return "Invalid age range";
    if (data.BMI < 10 || data.BMI > 50) return "Invalid BMI range";
    if (data.Smoking < 0 || data.Smoking > 1) return "Invalid smoking value";
    if (data.AlcoholConsumption < 0 || data.AlcoholConsumption > 1) return "Invalid alcohol consumption value";
    if (data.PhysicalActivity < 0 || data.PhysicalActivity > 3) return "Invalid physical activity value";
    if (data.DietType < 0 || data.DietType > 2) return "Invalid diet type";
    if (data.SleepHours < 0 || data.SleepHours > 24) return "Invalid sleep hours";
    if (data.StressLevel < 0 || data.StressLevel > 10) return "Invalid stress level";
    if (data.BloodPressure < 0 || data.BloodPressure > 2) return "Invalid blood pressure value";
    if (data.Cholesterol < 0 || data.Cholesterol > 2) return "Invalid cholesterol value";
    if (data.FamilyHistory < 0 || data.FamilyHistory > 1) return "Invalid family history value";
    if (data.BloodSugar < 0 || data.BloodSugar > 500) return "Invalid blood sugar value";
    if (data.WaistCircumference < 0 || data.WaistCircumference > 200) return "Invalid waist circumference";
    return null;
  };

  const submitHealthData = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const dataToSend = {
        Age: Number(formData.Age),
        BMI: Number(formData.BMI),
        Smoking: Number(formData.Smoking),
        AlcoholConsumption: Number(formData.AlcoholConsumption),
        PhysicalActivity: Number(formData.PhysicalActivity),
        DietType: Number(formData.DietType),
        SleepHours: Number(formData.SleepHours),
        StressLevel: Number(formData.StressLevel),
        BloodPressure: Number(formData.BloodPressure),
        Cholesterol: Number(formData.Cholesterol),
        FamilyHistory: Number(formData.FamilyHistory),
        BloodSugar: Number(formData.BloodSugar),
        WaistCircumference: Number(formData.WaistCircumference)
      };

      const validationError = validateData(dataToSend);
      if (validationError) {
        setError(validationError);
        setIsLoading(false);
        return;
      }

      console.log("Sending data:", dataToSend);

      const response = await axios.post(API_URL, dataToSend, {
        headers: {
          "Content-Type": "application/json"
        },
      });

      console.log("Response from API:", response.data);
      setHealthResults(response.data);
      navigate("/output");
    } catch (err) {
      console.error("Error details:", err);
      const errorMsg = err.response?.data?.error || 
                      err.response?.data?.message || 
                      "An error occurred while submitting the form";
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="health-form-container">
      <h2>Health Risk Assessment</h2>
      <form className="health-form" onSubmit={submitHealthData}>
        <div className="form-group">
          <label>Age:</label>
          <input 
            type="number" 
            name="Age" 
            value={formData.Age} 
            onChange={handleChange} 
            min="0"
            max="120"
            required 
          />
        </div>

        <div className="form-group">
          <label>BMI:</label>
          <input 
            type="number" 
            name="BMI" 
            value={formData.BMI} 
            onChange={handleChange} 
            min="10"
            max="50"
            step="0.1"
            required 
          />
        </div>

        <div className="form-group">
          <label>Smoking:</label>
          <select 
            name="Smoking" 
            value={formData.Smoking} 
            onChange={handleChange}
            required
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label>Alcohol Consumption:</label>
          <select 
            name="AlcoholConsumption" 
            value={formData.AlcoholConsumption} 
            onChange={handleChange}
            required
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label>Physical Activity:</label>
          <select 
            name="PhysicalActivity" 
            value={formData.PhysicalActivity} 
            onChange={handleChange}
            required
          >
            <option value="0">Low</option>
            <option value="1">Moderate</option>
            <option value="2">High</option>
            <option value="3">Very High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Diet Type:</label>
          <select 
            name="DietType" 
            value={formData.DietType} 
            onChange={handleChange}
            required
          >
            <option value="0">Healthy</option>
            <option value="1">Average</option>
            <option value="2">Unhealthy</option>
          </select>
        </div>

        <div className="form-group">
          <label>Sleep Hours:</label>
          <input 
            type="number" 
            name="SleepHours" 
            value={formData.SleepHours} 
            onChange={handleChange}
            min="0"
            max="24"
            required
          />
        </div>

        <div className="form-group">
          <label>Stress Level:</label>
          <input 
            type="number" 
            name="StressLevel" 
            value={formData.StressLevel} 
            onChange={handleChange}
            min="0"
            max="10"
            required
          />
        </div>

        <div className="form-group">
          <label>Blood Pressure:</label>
          <select 
            name="BloodPressure" 
            value={formData.BloodPressure} 
            onChange={handleChange}
            required
          >
            <option value="0">Normal</option>
            <option value="1">Elevated</option>
            <option value="2">High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Cholesterol:</label>
          <select 
            name="Cholesterol" 
            value={formData.Cholesterol} 
            onChange={handleChange}
            required
          >
            <option value="0">Normal</option>
            <option value="1">Borderline High</option>
            <option value="2">High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Family History:</label>
          <select 
            name="FamilyHistory" 
            value={formData.FamilyHistory} 
            onChange={handleChange}
            required
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label>Blood Sugar:</label>
          <input 
            type="number" 
            name="BloodSugar" 
            value={formData.BloodSugar} 
            onChange={handleChange}
            min="0"
            max="500"
            step="0.1"
            required
          />
        </div>

        <div className="form-group">
          <label>Waist Circumference (cm):</label>
          <input 
            type="number" 
            name="WaistCircumference" 
            value={formData.WaistCircumference} 
            onChange={handleChange}
            min="0"
            max="200"
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className={isLoading ? "loading" : ""}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {error && <p className="error">{String(error)}</p>}
    </div>
  );
};

export default HealthForm;