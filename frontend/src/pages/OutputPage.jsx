import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/output.css";

const OutputPage = ({ healthResults }) => {
  const navigate = useNavigate();

  return (
    <div className="output-container">
      <h2>Generated Output</h2>
      
      {healthResults ? (
        <div className="results">
          <p><strong>Hypertension:</strong> {healthResults.hypertension ? "Yes" : "No"}</p>
          <p><strong>Heart Disease:</strong> {healthResults.heart_disease ? "Yes" : "No"}</p>
          <p><strong>Obesity:</strong> {healthResults.obesity ? "Yes" : "No"}</p>
          <p><strong>Diabetes:</strong> {healthResults.diabetes ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>No results available. Please fill out the health form first.</p>
      )}

      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default OutputPage;
