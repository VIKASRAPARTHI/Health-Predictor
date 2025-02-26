import React from 'react';
import '../assets/styles/home.css';
import logo from '../assets/images/logo.png';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <img src={logo} alt="Health Logo" className="home-logo" />
        <h2>Gain deep insights into your health risks</h2>
        <p>Take charge of your well-being today!</p>
        <button className="home-btn">GET STARTED</button>
      </div>
    </section>
  );
};

export default Home;
