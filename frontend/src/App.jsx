import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OutputPage from "./pages/OutputPage";
import HealthForm from "./pages/HealthForm";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health-form" element={<HealthForm />} />
        <Route path="/output" element={<OutputPage />} />
        {/* <Route path="/" element={<HealthForm setHealthResults={setHealthResults} />} />
        <Route path="/output" element={<OutputPage healthResults={healthResults} />} /> */}
      </Routes>
    </>
  );
}

export default App;
