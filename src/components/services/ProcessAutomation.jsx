import React from "react";
import { Link } from "react-router-dom";

const bgImage = "/ProcessAutomation/ProcesAuto.jpg";

const ProcessAutomation = () => (
  <>
    {/* Hero Section with overlay */}
    <section
      className="relative w-full min-h-[95vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight md:leading-tight">
          Process Automation & Predictive <br className="hidden md:block" /> Analytics
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto mt-4">
          Streamline operations, reduce costs, and improve efficiency while generating valuable insights from your data to optimize decision-making and forecasting capabilities.
        </p>
      </div>
    </section>

    {/* Comprehensive Automation Solutions */}
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Comprehensive Automation Solutions</h2>
      <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-2xl">
        From off-the-shelf applications to custom-built solutions, we provide the tools you need to automate and optimize your business processes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-8">
        {/* Cards 1 to 3 */}
        {["Workflow Automation", "Predictive Analytics", "Data Integration"].map((title, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4 text-4xl text-cyan-400"><span>🔧</span></div>
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p className="text-gray-600">Descriptive content here</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Cards 4 & 5 */}
        {["Custom Development", "Off-the-Shelf Solutions"].map((title, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start border border-gray-200 min-h-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4 text-4xl text-cyan-400"><span>⚙️</span></div>
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p className="text-gray-600">Details about {title.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Off-the-Shelf AI Applications Section */}
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-24 px-4 md:px-44 bg-white">
      <div className="flex-1 max-w-2xl md:pr-16 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">Off-the-Shelf AI Applications</h2>
        <p className="text-lg text-gray-500 mb-8 text-left">
          Get started quickly with our proven AI solutions designed for common business processes.
        </p>
        <ul className="space-y-8 w-full max-w-xl">
          {["Document Processing", "Invoice Automation", "Email Routing", "Inventory Management", "Quality Control"].map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
              <span className="font-semibold text-xl">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-xl w-full flex justify-center">
          <img src="/ProcessAutomation/offtheshelf.png" alt="Off-the-Shelf AI Applications" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    {/* Custom Development Section */}
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-24 px-4 md:px-44 bg-white">
      <div className="flex-1 flex items-center justify-center mb-12 md:mb-0 md:mr-16">
        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-xl w-full flex justify-center">
          <img src="/ProcessAutomation/CustomDevelopment.png" alt="Custom Development" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex-1 max-w-2xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">Custom Development</h2>
        <p className="text-lg text-gray-500 mb-8 text-left">
          When off-the-shelf solutions don't meet your needs, our team develops custom AI applications tailored specifically to your business.
        </p>
        <ul className="space-y-8 w-full max-w-xl">
          {["Machine Learning Models", "API Integrations", "Analytics Dashboards", "Maintenance Systems", "Forecasting Models"].map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-cyan-300 inline-block mr-4"></span>
              <span className="font-semibold text-xl">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Measurable Business Impact Section */}
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Measurable Business Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-6xl">
        {[
          { icon: "📈", value: "75%", label: "Efficiency Improvement", bg: "#E6FCEF" },
          { icon: "🗄️", value: "90%", label: "Data Accuracy", bg: "#E6EEFF" },
          { icon: "⚡", value: "50%", label: "Cost Reduction", bg: "#F3EEFF" },
          { icon: "⚙️", value: "24/7", label: "Automated Operations", bg: "#FFF4E6" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: item.bg }}>
              <span className="text-4xl">{item.icon}</span>
            </div>
            <div className="text-5xl font-bold mb-2">{item.value}</div>
            <div className="text-gray-500 text-lg text-center">{item.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="w-full flex justify-center items-center py-28 px-2 bg-white">
      <div
        className="w-full max-w-6xl rounded-xl flex flex-col items-center justify-center py-8 px-4 md:px-0"
        style={{ background: "linear-gradient(293deg, #3cc9d7 0%, #2ba7b7 100%)" }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">Ready to Transform Your Customer Experience?</h2>
        <p className="text-base md:text-lg text-white text-center mb-6 max-w-3xl">
          Let's discuss how AI can revolutionize your customer interactions and drive unprecedented satisfaction levels.
        </p>
        <Link to="/bookameeting" className="bg-white text-[#22b8c2] px-8 py-3 rounded-md text-base font-semibold shadow hover:bg-gray-100 transition">
          Get Started Today
        </Link>
      </div>
    </section>
  </>
);

export default ProcessAutomation;