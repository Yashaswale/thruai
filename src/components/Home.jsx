import React from "react";
import { useEffect } from "react";

function AnimatedStat({ value, suffix, label }) {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const end = value;
          let incrementTime = 20;
          let step = Math.ceil(end / 50);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCount(start);
          }, incrementTime);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </span>
      <span className="text-lg md:text-xl text-white text-center">{label}</span>
    </div>
  );
}

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center px-8"
        style={{
          background: "linear-gradient(293deg, #FFF 0%, #c6f6fa 50%, #FFF 100%)",
        }}
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 py-16">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-black mb-4">
              Unlock Your <br /> Business <br />
              <span className="text-[#3cc9d7]">Potential with AI</span>
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-xl">
              ThruAi helps enterprises unlock the power of artificial intelligence to optimize customer experiences, automate processes, and drive unprecedented growth through data-driven insights.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#3cc9d7] text-white px-6 py-3 rounded-md text-lg font-medium shadow hover:bg-[#2bb0bd] transition">
                Start Your AI Journey
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-md text-lg font-medium shadow hover:bg-gray-100 transition">
                View Case Studies
              </button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center">
            <img src="/Home/Heroimg.png" alt="Hero" className="w-[580px] h-[620px] object-contain rounded-2xl" />
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="w-full flex flex-col items-center py-48 px-4 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our AI Solutions</h2>
        <p className="text-lg text-gray-500 text-center mb-12 max-w-2xl">
          Comprehensive AI services designed to transform every aspect of your business operations and drive sustainable growth.
        </p>
        <div className="max-w-7xl w-full flex flex-col gap-12">
          {/* First Row: 3 Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white border rounded-xl p-10 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-[#D9D9D9] group">
              <div className="bg-[#e6f7fa] p-3 rounded-md mb-4 transition-transform duration-300 group-hover:scale-125"><span role="img" aria-label="chat">💬</span></div>
              <h3 className="text-xl font-semibold mb-2">Customer Experience Optimization</h3>
              <p className="text-gray-500 mb-4">Enhance customer communication with intelligent digital assistants, voice assistants, AI-driven ticketing, multilingual NLP, and intelligent scheduling.</p>
              <a href="#" className="text-[#3cc9d7] font-medium flex items-center gap-1 hover:underline group">
                Learn More
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </div>
            <div className="bg-white border rounded-xl p-10 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-[#D9D9D9] group">
              <div className="bg-[#e6faef] p-3 rounded-md mb-4 transition-transform duration-300 group-hover:scale-125"><span role="img" aria-label="gear">⚙️</span></div>
              <h3 className="text-xl font-semibold mb-2">Process Automation & Analytics</h3>
              <p className="text-gray-500 mb-4">Streamline operations, reduce costs, and improve efficiency. Generate insights from data to optimize decision-making and forecasting.</p>
              <a href="#" className="text-[#3cc9d7] font-medium flex items-center gap-1 hover:underline group">
                Learn More
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </div>
            <div className="bg-white border rounded-xl p-10 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-[#D9D9D9] group">
              <div className="bg-[#e6f7fa] p-3 rounded-md mb-4 transition-transform duration-300 group-hover:scale-125"><span role="img" aria-label="eye">👁️</span></div>
              <h3 className="text-xl font-semibold mb-2">AI Vision Solutions</h3>
              <p className="text-gray-500 mb-4">Reduce operational costs, enhance processes, enable data acquisition and predictive maintenance with computer vision setups.</p>
              <a href="#" className="text-[#3cc9d7] font-medium flex items-center gap-1 hover:underline group">
                Learn More
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </div>
          </div>
          {/* Second Row: 2 Cards (centered) */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="bg-white border rounded-xl p-10 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-[#D9D9D9] group max-w-md w-full">
              <div className="bg-[#fff6ee] p-3 rounded-md mb-4 transition-transform duration-300 group-hover:scale-125"><span role="img" aria-label="wifi">📶</span></div>
              <h3 className="text-xl font-semibold mb-2">IoTification</h3>
              <p className="text-gray-500 mb-4">Data acquisition, sensor selection, connectivity establishment, IoT platforms, prediction capabilities, and smart helmet solutions.</p>
              <a href="#" className="text-[#3cc9d7] font-medium flex items-center gap-1 hover:underline group">
                Learn More
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </div>
            <div className="bg-white border rounded-xl p-10 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-[#D9D9D9] group max-w-md w-full">
              <div className="bg-[#f7e6fa] p-3 rounded-md mb-4 transition-transform duration-300 group-hover:scale-125"><span role="img" aria-label="cap">🎓</span></div>
              <h3 className="text-xl font-semibold mb-2">AI Advisory & Training</h3>
              <p className="text-gray-500 mb-4">Strategy workshops, vendor comparison, implementation roadmaps. Enable workforce AI knowledge and build comprehensive AI strategies.</p>
              <a href="#" className="text-[#3cc9d7] font-medium flex items-center gap-1 hover:underline group">
                Learn More
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full flex flex-col items-center py-32 px-4 bg-white">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h2 className="text-5xl font-medium mb-4">Our Approach</h2>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl">
              We focus on customer satisfaction by understanding client needs, crafting tailored plans, and exceeding expectations.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-1">Customer-Centric Focus</h3>
              <p className="text-base text-gray-500">We work closely with clients to understand their unique needs and goals</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-1">Customized Solutions</h3>
              <p className="text-base text-gray-500">Every plan is tailored to achieve your specific business objectives</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Exceeding Expectations</h3>
              <p className="text-base text-gray-500">We strive to deliver results that go beyond what our clients expect</p>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center justify-center w-full h-full min-h-[420px] min-w-[420px] max-w-[520px] max-h-[600px] border-[40px] border-[#E8EFFF] rounded-2xl bg-white">
              <img src="/Home/OurApproach1.png" alt="Our Approach" className="w-full h-full object-contain rounded-xl bg-[#E8EFFF]" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full flex flex-col items-center py-32 px-4 bg-white">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left: Image with border */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center justify-center w-full h-full min-h-[420px] min-w-[420px] max-w-[600px] max-h-[600px] border-[40px] border-[#E8EFFF] rounded-2xl bg-white">
              <img src="/Home/OurTeam.jpg" alt="Our Team" className="w-full h-full object-cover rounded-xl bg-[#E8EFFF]" />
            </div>
          </div>
          {/* Right: Text Content */}
          <div className="flex-1">
            <h2 className="text-5xl font-medium mb-4">Our Team</h2>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl">
              Our passionate experts in web, software, and digital marketing are dedicated to delivering top-notch service
            </p>
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-1">AI & Machine Learning</h3>
              <p className="text-base text-gray-500">Cutting-edge artificial intelligence and ML specialists</p>
            </div>
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-1">Software Development</h3>
              <p className="text-base text-gray-5000">Full-stack developers and system architects</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Digital Strategy</h3>
              <p className="text-base text-gray-500">Digital marketing and user experience experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ThurAi Section */}
      <section
        className="w-full flex flex-col items-center py-20 px-4"
        style={{
          background: "linear-gradient(90deg, #3BC3CA 0%, #35979C 100%)",
          borderRadius: "16px",
          margin: "48px auto",
          maxWidth: "85vw",
        }}
      >
        <div className="w-full max-w-7xl flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Why Choose ThurAi ?</h2>
          <p className="text-lg md:text-xl text-white text-center mb-12 max-w-3xl">
            We combine technical expertise with business acumen to deliver solutions that truly make a difference.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedStat value={25} suffix="+" label="Project Delivered" />
            <AnimatedStat value={90} suffix="%" label="Client Satisfaction" />
            <AnimatedStat value={50} suffix="+" label="Enterprise Clients" />
            <AnimatedStat value={24} suffix="/7" label="Support Available" />
          </div>
        </div>
      </section>

      {/* Calendly Inline Widget Section */}
      <section className="w-full flex flex-col items-center justify-center py-12 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#222]">
          Book a Meeting today
        </h2>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/rayan-nasr-thru-ai?hide_landing_page_details=1&hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px', width: '100%' }}
        ></div>
      </section>

      {/* Contact Section */}
      <section className="w-full flex flex-col items-center py-32 px-4 bg-white">
        <h2 className="text-5xl font-bold text-center mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-500 text-center mb-2">Let's discuss how our AI solutions can drive growth and efficiency for your organization.</p>
        <p className="text-xl text-gray-500 text-center mb-12">Get in touch with our experts today.</p>
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 mx-auto">
          {/* Left: Contact Info */}
          <div className="flex-1 flex flex-col gap-8">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-[#e6f7fa] p-4 rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-[#3cc9d7]">✉️</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-500">hello@thru-ai.com</div>
                </div>
                <a href="mailto:hello@thru-ai.com" className="px-6 py-2 rounded-md border bg-white text-gray-700 hover:bg-gray-100 transition">Email</a>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-[#e6f7fa] p-4 rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-[#3cc9d7]">📞</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-500">+971568794279</div>
                </div>
                <a href="tel:+971568794279" className="px-6 py-2 rounded-md border bg-white text-gray-700 hover:bg-gray-100 transition">Call</a>
              </div>
              {/* Office */}
              <div className="flex items-center gap-4">
                <div className="bg-[#e6f7fa] p-4 rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-[#3cc9d7]">📍</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Office</div>
                  <div className="text-gray-500">IFZA Business Park - Dubai Silicon Oasis - Dubai - UAE</div>
                </div>
                <a href="https://maps.google.com/?q=IFZA+Business+Park+Dubai+Silicon+Oasis+Dubai+UAE" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-md border bg-white text-gray-700 hover:bg-gray-100 transition">Map</a>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="flex-1 bg-white rounded-xl shadow-2xl shadow-gray-400 p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="flex flex-col gap-6">
              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input type="text" className="w-full border border-[#B9B9B9] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3cc9d7]" placeholder="" />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <input type="email" className="w-full border border-[#B9B9B9] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3cc9d7]" placeholder="" />
              </div>
              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea className="w-full border border-[#B9B9B9] rounded-md px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#3cc9d7]" placeholder="Tell us about your project and how we can help..."></textarea>
              </div>
              <button type="submit" className="bg-[#3cc9d7] text-white py-3 rounded-md text-lg font-medium flex items-center justify-center gap-2 hover:bg-[#2bb0bd] transition">
                Send Message <span className="text-2xl">➔</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
