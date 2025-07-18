import React from "react";
import { Link } from "react-router-dom";

const bgImage = "/AiVision/AiVision.jpg";

const AIvisionSolution = () => (

  <>
    <section
      className="relative w-full min-h-[95vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight md:leading-tight">
          Leverage computer vision and<br className="hidden md:block" />
          image recognition
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto mt-4">
          Unlock the power of visual intelligence with advanced computer vision solutions that automate visual processes, enhance quality control, and provide actionable insights from visual data.        </p>
      </div>
    </section>
    {/* Vision Capabilities Section */}
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Vision Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span role="img" aria-label="camera">📷</span></div>
          <h3 className="font-bold text-xl mb-2">Image Recognition</h3>
          <p className="text-gray-600">Advanced computer vision algorithms that can identify, classify, and analyze visual content with high accuracy.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span role="img" aria-label="object detection">🎯</span></div>
          <h3 className="font-bold text-xl mb-2">Object Detection</h3>
          <p className="text-gray-600">Real-time detection and tracking of objects, people, and anomalies in video streams and images.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span role="img" aria-label="inspection">🧐</span></div>
          <h3 className="font-bold text-xl mb-2">Quality Inspection</h3>
          <p className="text-gray-600">Automated visual quality control systems that detect defects and ensure product standards.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span role="img" aria-label="ocr">👁️</span></div>
          <h3 className="font-bold text-xl mb-2">Optical Character Recognition</h3>
          <p className="text-gray-600">Extract and digitize text from images, documents, and real-world environments with precision.</p>
        </div>
      </div>
    </section>
    {/* Performance Advantages Section */}
    <section className="w-full flex justify-center items-center py-16 px-4">
      <div className="w-full max-w-6xl rounded-2xl px-8 py-14" style={{ backgroundColor: '#DEFDFF' }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Performance Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
          <div className="flex items-center mb-0">
            <span className="text-cyan-400 text-3xl mr-4">✔️</span>
            <span className="text-lg md:text-xl">Achieve 99%+ accuracy in visual inspections</span>
          </div>
          <div className="flex items-center mb-0">
            <span className="text-cyan-400 text-3xl mr-4">✔️</span>
            <span className="text-lg md:text-xl">Reduce manual inspection time by 80%</span>
          </div>
          <div className="flex items-center mb-0">
            <span className="text-cyan-400 text-3xl mr-4">✔️</span>
            <span className="text-lg md:text-xl">Eliminate human error in quality control</span>
          </div>
          <div className="flex items-center mb-0">
            <span className="text-cyan-400 text-3xl mr-4">✔️</span>
            <span className="text-lg md:text-xl">Enable 24/7 automated monitoring</span>
          </div>
          <div className="flex items-center mb-0">
            <span className="text-cyan-400 text-3xl mr-4">✔️</span>
            <span className="text-lg md:text-xl">Process thousands of images per minute</span>
          </div>
          <div className="flex items-center mb-0">
            <span className="text-cyan-400 text-3xl mr-4">✔️</span>
            <span className="text-lg md:text-xl">Integrate seamlessly with existing systems</span>
          </div>
        </div>
      </div>
    </section>
    {/* Industry Applications Section */}
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-left w-full max-w-6xl mb-10">Industry Applications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl overflow-visible">
        {/* Manufacturing */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group h-80 flex items-end bg-cover bg-center" style={{ backgroundImage: `url('/AiVision/Manufacturing.png')` }}>
          <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
          <h3 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white mb-6 transition-all duration-500 z-10 bottom-8 group-hover:bottom-1/2 group-hover:translate-y-1/2">
            Manufacturing
          </h3>
          <ul className="absolute left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-translate-y-22 transition-all duration-500 ease-out text-white text-lg space-y-1 pl-4 -bottom-28 z-20">
            <li className="list-disc">Automated quality control</li>
            <li className="list-disc">Defect detection</li>
            <li className="list-disc">Assembly line monitoring</li>
          </ul>
        </div>
        {/* Healthcare */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group h-80 flex items-end bg-cover bg-center" style={{ backgroundImage: `url('/AiVision/Healthcare.png')` }}>
          <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
          <h3 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white mb-6 transition-all duration-500 z-10 bottom-8 group-hover:bottom-1/2 group-hover:translate-y-1/2">
            Healthcare
          </h3>
          <ul className="absolute left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-translate-y-30 transition-all duration-500 ease-out text-white text-lg space-y-1 pl-4 -bottom-28 z-20">
            <li className="list-disc">Medical imaging analysis</li>
            <li className="list-disc">Diagnostic assistance</li>
            <li className="list-disc">Patient monitoring</li>
          </ul>
        </div>
        {/* Retail */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group h-80 flex items-end bg-cover bg-center" style={{ backgroundImage: `url('/AiVision/Retail.png')` }}>
          <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
          <h3 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white mb-6 transition-all duration-500 z-10 bottom-8 group-hover:bottom-1/2 group-hover:translate-y-1/2">
            Retail
          </h3>
          <ul className="absolute left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-translate-y-30 transition-all duration-500 ease-out text-white text-lg space-y-1 pl-4 -bottom-28 z-20">
            <li className="list-disc">Inventory management</li>
            <li className="list-disc">Customer behavior analysis</li>
            <li className="list-disc">Security monitoring</li>
          </ul>
        </div>
        {/* Agriculture */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group h-80 flex items-end bg-cover bg-center" style={{ backgroundImage: `url('/AiVision/Agriculture.png')` }}>
          <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
          <h3 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white mb-6 transition-all duration-500 z-10 bottom-8 group-hover:bottom-1/2 group-hover:translate-y-1/2">
            Agriculture
          </h3>
          <ul className="absolute left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-translate-y-22 transition-all duration-500 ease-out text-white text-lg space-y-1 pl-4 -bottom-28 z-20">
            <li className="list-disc">Crop monitoring</li>
            <li className="list-disc">Pest detection</li>
            <li className="list-disc">Yield optimization through aerial imaging</li>
          </ul>
        </div>
        {/* Security */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group h-80 flex items-end bg-cover bg-center" style={{ backgroundImage: `url('/AiVision/Security.png')` }}>
          <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
          <h3 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white mb-6 transition-all duration-500 z-10 bottom-8 group-hover:bottom-1/2 group-hover:translate-y-1/2">
            Security
          </h3>
          <ul className="absolute left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-translate-y-30 transition-all duration-500 ease-out text-white text-lg space-y-1 pl-4 -bottom-28 z-20">
            <li className="list-disc">Facial recognition</li>
            <li className="list-disc">Intrusion detection</li>
            <li className="list-disc">Behavioral analysis systems</li>
          </ul>
        </div>
        {/* Automotive */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group h-80 flex items-end bg-cover bg-center" style={{ backgroundImage: `url('/AiVision/Automotive.png')` }}>
          <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
          <h3 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white mb-6 transition-all duration-500 z-10 bottom-8 group-hover:bottom-1/2 group-hover:translate-y-1/2">
            Automotive
          </h3>
          <ul className="absolute left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-translate-y-30 transition-all duration-500 ease-out text-white text-lg space-y-1 pl-4 -bottom-28 z-20">
            <li className="list-disc">Autonomous vehicle systems</li>
            <li className="list-disc">Driver assistance</li>
            <li className="list-disc">Vehicle inspection</li>
          </ul>
        </div>
      </div>
    </section>


    <section className="w-full flex justify-center items-center py-28 px-2 bg-white">
      <div
        className="w-full max-w-6xl rounded-xl flex flex-col items-center justify-center py-8 px-4 md:px-0"
        style={{ background: "linear-gradient(293deg, #3cc9d7 0%, #2ba7b7 100%)" }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">Ready to See the Future? </h2>
        <p className="text-base md:text-lg text-white text-center mb-6 max-w-3xl">
          Transform your visual processes with cutting-edge AI vision technology that delivers precision and efficiency.        </p>
        <Link to="/bookameeting" className="bg-white text-[#22b8c2] px-8 py-3 rounded-md text-base font-semibold shadow hover:bg-gray-100 transition">
          Get Started Today
        </Link>
      </div>
    </section>
  </>

);

export default AIvisionSolution;
