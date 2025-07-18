import React from "react";
import { Link } from "react-router-dom";


const bgImage = "/IOT/IOTfication.jpg";

const IOTfication = () => (
  <>
    <section
      className="relative w-full min-h-[95vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight md:leading-tight">
          Connect and optimize your <br className="hidden md:block" />
          physical assets
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto mt-4">
          Our IoT solution integrates hardware, software, and data analytics to revolutionize industries and enhance efficiency. It delivers actionable insights and drives business growth by leveraging the power of connected devices.
        </p>
      </div>
    </section>

    {/* Complete IoT Ecosystem Solutions Section */}
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Complete IoT Ecosystem Solutions</h2>
      <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-2xl">
        From sensor deployment to data analytics, we provide end-to-end IoT solutions that connect your physical world to digital intelligence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span>🗄️</span></div>
          <h3 className="font-bold text-xl mb-2">Data Acquisition</h3>
          <p className="text-gray-600">Comprehensive sensor data collection and real-time monitoring systems</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span>🤖</span></div>
          <h3 className="font-bold text-xl mb-2">Sensor Selection</h3>
          <p className="text-gray-600">Expert guidance on optimal sensor types and placement for your specific needs</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span>📶</span></div>
          <h3 className="font-bold text-xl mb-2">Connectivity Solutions</h3>
          <p className="text-gray-600">Establish robust, secure connectivity across all your IoT devices and systems</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span>☁️</span></div>
          <h3 className="font-bold text-xl mb-2">IoT Platforms</h3>
          <p className="text-gray-600">Scalable cloud-based platforms for device management and data processing</p>
        </div>
        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span>⚡</span></div>
          <h3 className="font-bold text-xl mb-2">Predictive Analytics & Anamoly detection</h3>
          <p className="text-gray-600">Advanced analytics and machine learning for predictive insights</p>
        </div>
      </div>
    </section>

    {/* IoT Industry Applications Section */}
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Complete IoT Ecosystem Solutions</h2>
      <p className="text-4xl md:text-xl font-extralight text text-center" >From sensor deployment to data analytics, we provide end-to-end IoT </p>
      <p className="text-4xl md:text-xl font-extralight text-center mb-16" >solutions that connect your physical world to digital intelligence.</p>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-2xl md:pr-16 w-full">
          <h2 className="text-5xl font-bold mb-8 text-left">Manufacturing</h2>
          <p className="text-lg text-gray-500 mb-12 text-left">
            IoT solutions are optimizing manufacturing processes by providing real-time insights into equipment performance, predictive maintenance alerts, and supply chain optimization. Connected sensors monitor machine health, minimize downtime, and improve overall productivity.
          </p>
          <h2 className="text-5xl font-bold mb-8 text-left">Retail</h2>
          <p className="text-lg text-gray-500 text-left">
            IoT solutions are revolutionizing the retail industry by enhancing customer experiences, optimizing inventory management, and enabling personalized marketing strategies. Smart shelves, beacons, and analytics tools track consumer behavior, optimize store layouts, and streamline supply chain operations.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-xl w-full flex justify-center">
            <img src="/IOT/Manufacturing.png" alt="Manufacturing IoT" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section className="w-full flex flex-col md:flex-row items-center justify-center py-24 px-54 bg-white">
      {/* Left: Image */}
      <div className="flex-1 flex items-center justify-center mb-12 md:mb-0 md:mr-16">
        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-xl w-full flex justify-center">
          <img src="/IOT/SmartCities.png" alt="Smart Cities" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Right: Text Content */}
      <div className="flex-1 max-w-2xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">Smart Cities</h2>
        <ul className="space-y-6 text-lg text-gray-700">
          <li><span className="font-semibold">Level Monitoring</span> – Track water levels in tanks, reservoirs, or sewage systems to prevent overflows and shortages.</li>
          <li><span className="font-semibold">Energy Monitoring</span> – Analyze energy consumption patterns to reduce wastage and optimize grid performance.</li>
          <li><span className="font-semibold">CO Emission Monitoring</span> – Detect and manage carbon emissions from vehicles, industries, and public zones to meet sustainability goals.</li>
          <li><span className="font-semibold">Condition Monitoring</span> – Continuously assess the health of infrastructure to predict failures and schedule maintenance.</li>
          <li><span className="font-semibold">Waste Management</span> – Use AI to optimize garbage collection routes and monitor bin levels in real time.</li>
        </ul>
      </div>
    </section>

    <section className="w-full flex flex-col md:flex-row items-center justify-center py-24 px-54 bg-white">
      {/* Left: Text Content */}
      <div className="flex-1 max-w-2xl md:pr-16 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">Agriculture</h2>
        <p className="text-lg text-gray-500 mb-12 text-left">
          IoT solutions are modernizing agriculture practices, increasing crop yields, and promoting sustainable farming methods. Smart sensors, drones, and precision agriculture techniques monitor soil conditions, optimize irrigation schedules, and enable data-driven decision-making for crop management.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">Healthcare</h2>
        <p className="text-lg text-gray-500 text-left">
          In the healthcare sector, IoT solutions are improving patient outcomes, streamlining clinical workflows, and reducing costs. Connected medical devices, wearables, and remote monitoring systems enable personalized patient care, early intervention, and predictive analytics for disease management.
        </p>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-xl w-full flex justify-center">
          <img src="/IOT/Agriculture.png" alt="Agriculture IoT" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    {/* IoT Implementation Process Section */}
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our IoT Implementation Process</h2>
      <p className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-2xl">
        From sensor deployment to data analytics, we provide end-to-end IoT solutions that connect your physical world to digital intelligence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-6xl">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-400 text-3xl font-bold mb-8">1</div>
          <h3 className="text-2xl font-bold mb-4">Assessment & Planning</h3>
          <p className="text-gray-500 text-lg max-w-xs">Evaluate current infrastructure and define IoT strategy</p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-400 text-3xl font-bold mb-8">2</div>
          <h3 className="text-2xl font-bold mb-4">Sensor & Platform Selection</h3>
          <p className="text-gray-500 text-lg max-w-xs">Choose optimal sensors and IoT platform architecture</p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-400 text-3xl font-bold mb-8">3</div>
          <h3 className="text-2xl font-bold mb-4">Deployment & Integration</h3>
          <p className="text-gray-500 text-lg max-w-xs">Install sensors and establish secure connectivity</p>
        </div>
        {/* Step 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-400 text-3xl font-bold mb-8">4</div>
          <h3 className="text-2xl font-bold mb-4">Analytics & Optimization</h3>
          <p className="text-gray-500 text-lg max-w-xs">Implement predictive analytics and continuous improvement</p>
        </div>
      </div>
    </section>

    <section className="w-full flex justify-center items-center py-28 px-2 bg-white">
      <div
        className="w-full max-w-6xl rounded-xl flex flex-col items-center justify-center py-8 px-4 md:px-0"
        style={{ background: "linear-gradient(293deg, #3cc9d7 0%, #2ba7b7 100%)" }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">Ready to Connect Your Operations?</h2>
        <p className="text-base md:text-lg text-white text-center mb-6 max-w-3xl">
          Transform your business with comprehensive IoT solutions that deliver real-time insights and operational excellence.        </p>
        <Link to="/bookameeting" className="bg-white text-[#22b8c2] px-8 py-3 rounded-md text-base font-semibold shadow hover:bg-gray-100 transition">
          Get Started Today
        </Link>
      </div>
    </section>

  </>

);

export default IOTfication;