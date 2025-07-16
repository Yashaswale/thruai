import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerExperienceoptimization from "./components/services/CustomerExperienceoptimization";
import ProcessAutomation from "./components/services/ProcessAutomation";
import AIvisionSolution from "./components/services/AIvisionSolution";
import IOTfication from "./components/services/IOTfication";
import AIadvisory from "./components/services/Aiadvisory";
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/customer-experience" element={<CustomerExperienceoptimization />} />
          <Route path="/service/process-automation" element={<ProcessAutomation />} />
          <Route path="/service/ai-vision" element={<AIvisionSolution />} />
          <Route path="/service/iotification" element={<IOTfication />} />
          <Route path="/service/ai-advisory" element={<AIadvisory />} />
        </Routes>
        <Footer />
      </motion.div>
    </>
  )
}

export default App
