import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/output.css";

const OutputPage = ({ healthResults }) => {
  const navigate = useNavigate();
  console.log(healthResults);

  return (
    <div className="output-container">
      <h2>Health Risk Assessment Results</h2>
      
      {healthResults ? (
        <div className="results">
          <div className={`result-card ${healthResults.Hypertension ? 'high-risk' : 'low-risk'}`}>
            <p><strong>Hypertension:</strong> {healthResults.Hypertension ? "Yes" : "No"}</p>
            {healthResults.Hypertension === 1 && (
              <span className="risk-warning">⚠️ Risk Detected</span>
            )}
          </div>

          <div className={`result-card ${healthResults.HeartDisease ? 'high-risk' : 'low-risk'}`}>
            <p><strong>Heart Disease:</strong> {healthResults.HeartDisease ? "Yes" : "No"}</p>
            {healthResults.HeartDisease === 1 && (
              <span className="risk-warning">⚠️ Risk Detected</span>
            )}
          </div>

          <div className={`result-card ${healthResults.Obesity ? 'high-risk' : 'low-risk'}`}>
            <p><strong>Obesity:</strong> {healthResults.Obesity ? "Yes" : "No"}</p>
            {healthResults.Obesity === 1 && (
              <span className="risk-warning">⚠️ Risk Detected</span>
            )}
          </div>

          <div className={`result-card ${healthResults.Diabetes ? 'high-risk' : 'low-risk'}`}>
            <p><strong>Diabetes:</strong> {healthResults.Diabetes ? "Yes" : "No"}</p>
            {healthResults.Diabetes === 1 && (
              <span className="risk-warning">⚠️ Risk Detected</span>
            )}
          </div>
        </div>
      ) : (
        <p className="no-results">No results available. Please fill out the health form first.</p>
      )}

      <button className="back-button" onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default OutputPage;