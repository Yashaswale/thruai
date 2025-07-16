import React from "react";

const Footer = () => (
  <footer className="w-full bg-[#D4F2F3] pt-16 pb-8 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
      {/* About */}
      <div>
        <h2 className="text-3xl font-bold text-[#3cc9d7] mb-4">ThruAi.</h2>
        <p className="text-lg text-black">
          AI-driven technology company delivering intelligent solutions that enhance user satisfaction, streamline operations, and meet the evolving needs of modern businesses.
        </p>
      </div>
      {/* Services */}
      <div>
        <h3 className="text-xl font-semibold text-[#3cc9d7] mb-4">Services</h3>
        <ul className="space-y-2">
          <li className="font-semibold text-md text-black">Customer Experience</li>
          <li className="font-semibold text-md text-black">Process Automation</li>
          <li className="font-semibold text-md text-black">AI Vision Solutions</li>
          <li className="font-semibold text-md text-black">IoTification</li>
          <li className="font-semibold text-md text-black">AI Advisory</li>
        </ul>
      </div>
      {/* Company */}
      <div>
        <h3 className="text-xl font-semibold text-[#3cc9d7] mb-4">Company</h3>
        <ul className="space-y-2">
          <li className="font-semibold text-md text-black">About Us</li>
          <li className="font-semibold text-md text-black">Services</li>
          <li className="font-semibold text-md text-black">Case Studies</li>
          <li className="font-semibold text-md text-black">Contact</li>
        </ul>
      </div>
      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold text-[#3cc9d7] mb-4">Contact Info</h3>
        <ul className="space-y-2">
          <li className="text-lg text-black">hello@thru-ai.com</li>
          <li className="text-lg text-black">+971568794279</li>
          <li className="text-lg text-black">IFZA Business Park - Dubai</li>
          <li className="text-lg text-black">Silicon Oasis - Dubai - UAE</li>
        </ul>
      </div>
    </div>
    <hr className="border-t border-gray-400 mb-8" />
    <div className="text-center text-xl font-medium text-black">
      Copyright © 2025 ThruAI - All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
