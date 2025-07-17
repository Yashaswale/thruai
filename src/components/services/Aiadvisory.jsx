import React from "react";

const bgImage = "/AIadvisory/Aiadvisory.jpg";

const AIadvisory = () => (
  <>
    {/* Hero Section with Overlay */}
    <section
      className="relative w-full min-h-[95vh] flex items-center justify-center text-center mt-10"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight md:leading-tight">
          Build internal AI capabilities and <br className="hidden md:block" />
          expertise
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto mt-4">
          Empower your organization with strategic AI consulting and comprehensive training programs that build lasting capabilities, ensure successful implementations, and drive sustainable AI transformation.
        </p>
      </div>
    </section>

    {/* Advisory Services Section */}
    <section className="w-full flex flex-col items-center justify-center py-12 bg-white px-4 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Advisory Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Cards */}
        {[
          {
            title: "Strategic AI Planning",
            desc: "Develop comprehensive AI strategies aligned with your business objectives and market opportunities.",
            icon: <circle cx="12" cy="12" r="9" />,
          },
          {
            title: "Team Training Programs",
            desc: "Comprehensive training programs to build internal AI capabilities and expertise within your organization.",
          },
          {
            title: "Best Practices Guidance",
            desc: "Industry-leading best practices and methodologies for successful AI implementation and governance.",
          },
          {
            title: "Certification Programs",
            desc: "Professional certification programs to validate and enhance your team's AI knowledge and skills.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-300 rounded-xl p-8 flex flex-col items-start shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer w-full"
          >
            <span className="text-4xl mb-4 text-cyan-400">🔹</span>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Long-term Value Section */}
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 md:px-12">
      <div className="w-full max-w-6xl bg-[#3BC3CA]/20 rounded-xl px-6 md:px-16 py-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Long-term Value</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Build internal AI expertise and capabilities",
            "Reduce dependency on external consultants",
            "Accelerate AI adoption across the organization",
            "Ensure ethical and responsible AI implementation",
            "Maximize ROI from AI investments",
            "Stay ahead of industry AI trends and developments",
          ].map((point, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-[#3BC3CA] mr-4">✅</span>
              <span className="text-lg md:text-xl">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Training Programs Cards Section */}
    <section className="relative w-full bg-white px-4 md:px-0">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 pt-8">Training Programs</h2>
      {[{
        title: 'Executive AI Leadership',
        description: 'Strategic AI overview for C-level executives and decision makers.',
        image: '/AIadvisory/Aiadvisory.jpg',
        points: [
          'AI strategy development',
          'ROI assessment',
          'Risk management',
          'Governance frameworks',
        ],
      }, {
        title: 'AI Essential for Admins',
        description: 'AI tools for Admins prompt engineering hands on training',
        image: '/AIadvisory/Aiessiontials.png',
        points: [
          'Prompt Engineering',
          'AI for Scheduling & Task Management',
          'AI in Communication & Documentation',
          'Workflow Automation with AI',
        ],
      }, {
        title: 'AI Ethics & Compliance',
        description: 'Responsible AI practices and regulatory compliance training.',
        image: '/AIadvisory/AIethics.png',
        points: [
          'Ethical AI principles',
          'Bias detection and mitigation',
          'Regulatory compliance',
          'Transparency frameworks',
        ],
      }].map((card, idx) => (
        <div
          key={idx}
          className="sticky top-12 h-screen flex items-center justify-center z-10"
        >
          <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-6 md:p-14 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0 md:mr-10">
              <img src={card.image} alt={card.title} className="rounded-2xl w-72 h-72 object-cover" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{card.title}</h3>
              <p className="text-lg text-gray-600 mb-6">{card.description}</p>
              <ul className="space-y-4">
                {card.points.map((pt, i) => (
                  <li key={i} className="flex items-center text-lg">
                    <span className="w-3 h-3 bg-[#3BC3CA] rounded-full mr-4 inline-block"></span>
                    <span className="font-semibold">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>

    {/* CTA Section */}
    <section className="w-full flex justify-center items-center py-28 px-4 bg-white">
      <div className="w-full max-w-6xl rounded-xl flex flex-col items-center justify-center py-12 px-4 md:px-0" style={{ background: "linear-gradient(293deg, #3cc9d7 0%, #2ba7b7 100%)" }}>
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">Ready to Build AI Expertise?</h2>
        <p className="text-base md:text-lg text-white text-center mb-6 max-w-3xl">
          Empower your team with the knowledge and skills needed to drive successful AI transformation in your organization.
        </p>
        <button className="bg-white text-[#22b8c2] px-8 py-3 rounded-md text-base font-semibold shadow hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </div>
    </section>
  </>
);

export default AIadvisory;