import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4 md:px-8"
        style={{ background: "linear-gradient(293deg, #FFF 0%, #c6f6fa 50%, #FFF 100%)" }}
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 py-16 md:py-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black mb-4">
              Unlock Your <br /> Business <br />
              <span className="text-[#3cc9d7]">Potential with AI</span>
            </h1>
            <p className="text-base md:text-lg text-gray-500 mb-8 max-w-xl">
              ThruAi helps enterprises unlock the power of artificial intelligence to optimize customer experiences, automate processes, and drive unprecedented growth through data-driven insights.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/bookameeting" className="bg-[#3cc9d7] text-white px-6 py-3 rounded-md text-base font-medium shadow hover:bg-[#2bb0bd] transition">
                Start Your AI Journey
              </Link>
              <Link to="/case-studies" className="bg-white text-black px-6 py-3 rounded-md text-base font-medium shadow hover:bg-gray-100 transition">
                View Case Studies
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="/Home/Heroimg.png" alt="Hero" className="w-full max-w-[380px] sm:max-w-[500px] md:max-w-[580px] h-auto object-contain rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full flex flex-col items-center py-12 md:py-32 px-4 bg-white">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-medium mb-4">Our Approach</h2>
            <p className="text-base md:text-lg text-gray-500 mb-8 max-w-2xl">
              We focus on customer satisfaction by understanding client needs, crafting tailored plans, and exceeding expectations.
            </p>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-bold mb-1">Customer-Centric Focus</h3>
              <p className="text-sm md:text-base text-gray-500">We work closely with clients to understand their unique needs and goals</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-bold mb-1">Customized Solutions</h3>
              <p className="text-sm md:text-base text-gray-500">Every plan is tailored to achieve your specific business objectives</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-1">Exceeding Expectations</h3>
              <p className="text-sm md:text-base text-gray-500">We strive to deliver results that go beyond what our clients expect</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-[400px] md:max-w-[520px]">
              <img src="/Home/OurApproach1.png" alt="Our Approach" className="w-full h-auto object-contain rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full flex flex-col items-center py-12 md:py-32 px-4 bg-white">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-[400px] md:max-w-[600px]">
              <img src="/Home/OurTeam.jpg" alt="Our Team" className="w-full h-auto object-cover rounded-xl" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-medium mb-4">Our Team</h2>
            <p className="text-base md:text-lg text-gray-500 mb-8 max-w-2xl">
              Our passionate experts in web, software, and digital marketing are dedicated to delivering top-notch service
            </p>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-bold mb-1">AI & Machine Learning</h3>
              <p className="text-sm md:text-base text-gray-500">Cutting-edge artificial intelligence and ML specialists</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-bold mb-1">Software Development</h3>
              <p className="text-sm md:text-base text-gray-500">Full-stack developers and system architects</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-1">Digital Strategy</h3>
              <p className="text-sm md:text-base text-gray-500">Digital marketing and user experience experts</p>
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
