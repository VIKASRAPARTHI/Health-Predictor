import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/styles/home.css';
import logo from '../assets/images/logo.png';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation function

  const handleGetStarted = () => {
    navigate('/health-form'); // Redirects to the HealthForm page
  };

  return (
    <section className="home">
      <img src={logo} alt="Health Logo" className="home-logo" />
      <div className="home-content">
        <h2>Gain deep insights into your health risks</h2>
        <div className="home-content1">
          <p>Take charge of your well-being today!</p>
        </div>
        <button className="home-btn" onClick={handleGetStarted}>GET STARTED</button>
      </div>
    </section>
  );
};

export default Home;
