import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import OutputPage from './pages/OutputPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/output" element={<OutputPage />} />
      </Routes>
    </Router>
  );
}

export default App;
