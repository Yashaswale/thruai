import React from "react";
import { Link } from "react-router-dom";
import { FaComments, FaCog, FaEye, FaWifi, FaGraduationCap } from "react-icons/fa";

const services = [
  {
    icon: <FaComments size={28} className="text-gray-700" />,
    title: "Customer Experience Optimization",
    desc: "Smarter, personalized customer communication.",
    to: "/service/customer-experience",
  },
  {
    icon: <FaCog size={28} className="text-gray-700" />,
    title: "Process Automation & Predictive Analytics",
    desc: "Automate tasks, predict outcomes.",
    to: "/service/process-automation",
  },
  {
    icon: <FaEye size={28} className="text-gray-700" />,
    title: "AI Vision Solutions",
    desc: "Real-time visual intelligence.",
    to: "/service/ai-vision",
  },
  {
    icon: <FaWifi size={28} className="text-gray-700" />,
    title: "IoTification",
    desc: "Connect and automate devices.",
    to: "/service/iotification",
  },
  {
    icon: <FaGraduationCap size={28} className="text-gray-700" />,
    title: "AI Advisory & AI Training",
    desc: "Expert AI guidance and learning.",
    to: "/service/ai-advisory",
  },
];

const ServiceDropdown = ({ onItemClick }) => (
  <div className="z-20 w-[90vw] max-w-7xl mt-4 bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    {services.map((service) => (
      <Link
        key={service.title}
        to={service.to}
        className="flex items-start space-x-4 cursor-pointer hover:bg-gray-100 rounded-lg p-3 transition"
        onClick={onItemClick}
      >
        <div>{service.icon}</div>
        <div>
          <div className="font-semibold text-lg mb-1">{service.title}</div>
          <div className="text-gray-500 text-base">{service.desc}</div>
        </div>
      </Link>
    ))}
  </div>
);

export default ServiceDropdown; 