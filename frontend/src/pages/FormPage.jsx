import React from 'react';
import '../assets/styles/form.css';

const FormPage = () => {
  return (
    <div className="form-container">
      <h2>Submit Your Details</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
