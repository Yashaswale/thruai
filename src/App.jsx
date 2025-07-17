import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerExperienceoptimization from "./components/services/CustomerExperienceoptimization";
import ProcessAutomation from "./components/services/ProcessAutomation";
import AIvisionSolution from "./components/services/AIvisionSolution";
import IOTfication from "./components/services/IOTfication";
import AIadvisory from "./components/services/Aiadvisory";
import CaseStudies from "./components/CaseStudies";
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "+971528902876"; // Replace with your business number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

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
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
        <Footer />
      </motion.div>
      {/* WhatsApp Floating Widget */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
        title="Chat with us on WhatsApp"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05C13.41 27.633 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.13 0-2.24-.188-3.29-.558l-.23-.08-4.65 1.22 1.24-4.53-.15-.24C7.3 18.13 7 16.59 7 15c0-5.065 4.135-9.2 9.2-9.2S25.4 9.935 25.4 15c0 5.065-4.135 9.2-9.2 9.2zm5.29-6.29c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.65.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.01 4.22.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
        </svg>
        <span className="absolute opacity-0 group-hover:opacity-100 bg-white text-green-700 text-sm font-semibold px-3 py-1 rounded shadow-lg left-[-170px] top-1/2 -translate-y-1/2 transition-opacity duration-200 whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
      </a>
    </>
  )
}

export default App
