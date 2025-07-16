import React from "react";

const bgImage = "/ProcessAutomation/ProcesAuto.jpg";

const ProcessAutomation = () => (

  <>
    <section
      className="relative w-full min-h-[95vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight md:leading-tight">
          Process Automation & Predictive <br className="hidden md:block" />
          Analytics
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto mt-4">
          Streamline operations, reduce costs, and improve efficiency while generating valuable insights from your data to optimize decision-making and forecasting capabilities.        </p>
      </div>
    </section>

    {/* Comprehensive Automation Solutions Section */}
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Comprehensive Automation Solutions</h2>
      <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-2xl">
        From off-the-shelf applications to custom-built solutions, we provide the tools you need to automate and optimize your business processes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span>↔️⚙️</span></div>
          <h3 className="font-bold text-xl mb-2">Workflow Automation</h3>
          <p className="text-gray-600">Streamline complex business processes with intelligent automation workflows</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span>📈</span></div>
          <h3 className="font-bold text-xl mb-2">Predictive Analytics</h3>
          <p className="text-gray-600">Generate insights from data to optimize decision-making and forecasting</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span>🗄️</span></div>
          <h3 className="font-bold text-xl mb-2">Data Integration</h3>
          <p className="text-gray-600">Seamlessly connect and synchronize data across multiple systems</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span>⚙️</span></div>
          <h3 className="font-bold text-xl mb-2">Custom Development</h3>
          <p className="text-gray-600">Tailored AI applications built specifically for your business needs</p>
        </div>
        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="mb-4 text-4xl text-cyan-400"><span>⚡</span></div>
          <h3 className="font-bold text-xl mb-2">Off-the-Shelf Solutions</h3>
          <p className="text-gray-600">Ready-to-deploy AI applications for common business processes</p>
        </div>
      </div>
    </section>
    {/* Off-the-Shelf AI Applications Section */}
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-24 px-54 bg-white">
      {/* Left: Text Content */}
      <div className="flex-1 max-w-2xl md:pr-16 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">Off-the-Shelf AI Applications</h2>
        <p className="text-lg text-gray-500 mb-8 text-left">
          Get started quickly with our proven AI solutions designed for common business processes. These applications can be deployed rapidly and customized to fit your specific requirements.
        </p>
        <ul className="space-y-8 w-full max-w-xl">
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
            <span className="font-semibold text-xl">Document Processing & Classification</span>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
            <span className="font-semibold text-xl">Invoice & Receipt Automation</span>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
            <span className="font-semibold text-xl">Email Classification & Routing</span>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
            <span className="font-semibold text-xl">Inventory Management Systems</span>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
            <span className="font-semibold text-xl">Quality Control Automation</span>
          </li>
        </ul>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-xl w-full flex justify-center">
          <img src="/ProcessAutomation/offtheshelf.png" alt="Off-the-Shelf AI Applications" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
    {/* Custom Development Section */}
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-24 px-54 bg-white">
      {/* Left: Image */}
      <div className="flex-1 flex items-center justify-center mb-12 md:mb-0 md:mr-16">
        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-xl w-full flex justify-center">
          <img src="/ProcessAutomation/CustomDevelopment.png" alt="Custom Development" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Right: Text Content */}
      <div className="flex-1 max-w-2xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">Custom Development</h2>
        <p className="text-lg text-gray-500 mb-8 text-left">
          When off-the-shelf solutions don't meet your unique requirements, our team develops custom AI applications tailored specifically to your business processes and objectives.
        </p>
        <ul className="space-y-8 w-full max-w-xl">
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
            <span className="font-semibold text-xl">Custom Machine Learning Models</span>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
            <span className="font-semibold text-xl">API Integration & Development</span>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
            <span className="font-semibold text-xl">Real-time Analytics Dashboards</span>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
            <span className="font-semibold text-xl">Predictive Maintenance Systems</span>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
            <span className="font-semibold text-xl">Advanced Forecasting Models</span>
          </li>
        </ul>
      </div>
    </section>
    {/* Measurable Business Impact Section */}
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Measurable Business Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#E6FCEF' }}>
            <span className="text-4xl" role="img" aria-label="Efficiency">📈</span>
          </div>
          <div className="text-5xl font-bold mb-2">75%</div>
          <div className="text-gray-500 text-lg text-center">Efficiency Improvement</div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#E6EEFF' }}>
            <span className="text-4xl" role="img" aria-label="Data">🗄️</span>
          </div>
          <div className="text-5xl font-bold mb-2">90%</div>
          <div className="text-gray-500 text-lg text-center">Data Accuracy</div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#F3EEFF' }}>
            <span className="text-4xl" role="img" aria-label="Cost">⚡</span>
          </div>
          <div className="text-5xl font-bold mb-2">50%</div>
          <div className="text-gray-500 text-lg text-center">Cost Reduction</div>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#FFF4E6' }}>
            <span className="text-4xl" role="img" aria-label="Automation">⚙️</span>
          </div>
          <div className="text-5xl font-bold mb-2">24/7</div>
          <div className="text-gray-500 text-lg text-center">Automated Operations</div>
        </div>
      </div>
    </section>

    <section className="w-full flex justify-center items-center py-28 px-2 bg-white">
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

export default ProcessAutomation;
