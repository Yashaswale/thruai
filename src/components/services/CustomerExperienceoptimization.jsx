import React from "react";

const bgImage = "/CustomerExpOptim/CustomerExp.jpg";

const CustomerExperienceoptimization = () => (
  <>
    <section
      className="relative w-full min-h-[95vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight md:leading-tight">
          Transform customer interactions<br className="hidden md:block" />
          with AI-powered solutions
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto mt-4">
          From customer experience optimization to advanced analytics, we deliver end-to-end AI solutions that transform how your business operates and grows.
        </p>
      </div>
    </section>
    {/* Feature Cards Section */}
    <section className="w-full flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Comprehensive Customer Experience Solutions</h2>
      <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-2xl">
        Our AI-powered tools work together to create seamless, efficient, and delightful customer experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
          <div className="mb-4 text-4xl text-cyan-400"><span>💬</span></div>
          <h3 className="font-bold text-xl mb-2">Intelligent Digital Assistants</h3>
          <p className="text-gray-600">AI-powered chatbots that understand context and provide personalized responses</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
          <div className="mb-4 text-4xl text-cyan-400"><span>🎤</span></div>
          <h3 className="font-bold text-xl mb-2">Voice Assistants</h3>
          <p className="text-gray-600">Natural language processing for seamless voice interactions</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
          <div className="mb-4 text-4xl text-cyan-400"><span>🌐</span></div>
          <h3 className="font-bold text-xl mb-2">Multilingual NLP</h3>
          <p className="text-gray-600">Support for multiple languages with cultural context understanding</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
          <div className="mb-4 text-4xl text-cyan-400"><span>🎟️</span></div>
          <h3 className="font-bold text-xl mb-2">AI-Driven Ticketing</h3>
          <p className="text-gray-600">Automated ticket routing and priority assignment based on content analysis</p>
        </div>
        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
          <div className="mb-4 text-4xl text-cyan-400"><span>📅</span></div>
          <h3 className="font-bold text-xl mb-2">Intelligent Scheduling</h3>
          <p className="text-gray-600">Smart appointment booking with availability optimization</p>
        </div>
        {/* Card 6 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
          <div className="mb-4 text-4xl text-cyan-400"><span>⚙️</span></div>
          <h3 className="font-bold text-xl mb-2">AI Process Automation</h3>
          <p className="text-gray-600">Streamlines repetitive tasks using intelligent algorithms to improve efficiency, accuracy, and decision-making.</p>
        </div>
      </div>
    </section>
    {/* Benefits Section */}
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left: Benefits List */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-10">Benefits You''ll Experience</h2>
          <ul className="space-y-10">
            <li className="flex items-start gap-4">
              <span className="mt-1 text-cyan-400 text-2xl">✔️</span>
              <div>
                <span className="font-bold text-xl block mb-1">Scalable Solutions</span>
                <span className="text-gray-500 text-lg">Handle thousands of customer interactions simultaneously without compromising quality.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-cyan-400 text-2xl">✔️</span>
              <div>
                <span className="font-bold text-xl block mb-1">Personalized Interactions</span>
                <span className="text-gray-500 text-lg">Leverage customer data to provide tailored responses and recommendations.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-cyan-400 text-2xl">✔️</span>
              <div>
                <span className="font-bold text-xl block mb-1">Continuous Learning</span>
                <span className="text-gray-500 text-lg">AI models improve over time, becoming more accurate and helpful with each interaction.</span>
              </div>
            </li>
          </ul>
        </div>
        {/* Right: Image with border */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-center w-full h-full min-h-[420px] min-w-[420px] max-w-[520px] max-h-[600px] border-[40px] border-[#E8EFFF] rounded-2xl bg-white">
            <img src="/CustomerExpOptim/benefits.png" alt="Benefits" className="w-full h-full object-contain rounded-xl bg-[#E8EFFF]" />
          </div>
        </div>
      </div>
    </section>
    {/* Implementation Process Section */}
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-white">
      <h2 className="text-5xl font-bold text-left w-full max-w-7xl mb-20">Our Implementation Process</h2>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-400 text-3xl font-bold mb-8">1</div>
          <h3 className="text-2xl font-bold mb-4">Analysis & Strategy</h3>
          <p className="text-gray-500 text-lg max-w-xs">We analyze your current customer journey and identify optimization opportunities.</p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-400 text-3xl font-bold mb-8">2</div>
          <h3 className="text-2xl font-bold mb-4">AI Implementation</h3>
          <p className="text-gray-500 text-lg max-w-xs">Deploy and configure AI solutions tailored to your specific customer needs.</p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-400 text-3xl font-bold mb-8">3</div>
          <h3 className="text-2xl font-bold mb-4">Optimization & Scale</h3>
          <p className="text-gray-500 text-lg max-w-xs">Continuously improve performance and scale solutions across all touchpoints.</p>
        </div>
      </div>
    </section>
    {/* Call to Action Card Section */}
    <section className="w-full flex justify-center items-center py-8 px-2 bg-white">
      <div
        className="w-full max-w-6xl rounded-xl flex flex-col items-center justify-center py-8 px-4 md:px-0"
        style={{ background: "linear-gradient(293deg, #3cc9d7 0%, #2ba7b7 100%)" }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">Ready to Transform Your Customer Experience?</h2>
        <p className="text-base md:text-lg text-white text-center mb-6 max-w-3xl">
          Let's discuss how AI can revolutionize your customer interactions and drive unprecedented satisfaction levels.
        </p>
        <button className="bg-white text-[#22b8c2] px-8 py-3 rounded-md text-base font-semibold shadow hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </div>
    </section>
  </>
);

export default CustomerExperienceoptimization;
