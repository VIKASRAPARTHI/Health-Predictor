import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import Community from "./components/community";
import Navbar from "./components/Navbar";
import HealthForm from "./pages/HealthForm";
import Home from "./pages/Home";
import OutputPage from "./pages/OutputPage";

function App() {
  const [healthResults, setHealthResults] = useState(null);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/health-form"
          element={<HealthForm setHealthResults={setHealthResults} />}
          
        />
        <Route
          path="/output"
          element={<OutputPage healthResults={healthResults} />}
          
        />
        <Route path="/ai-chatbot" element={<Chatbot />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
