import React from "react";
import { motion } from 'framer-motion';
import { useEffect } from "react";

const bgImage = "/AIadvisory/Aiadvisory.jpg";

const AIadvisory = () => (
    <>
        <section
            className="relative w-full min-h-[95vh] flex items-center justify-center text-center mt-10"
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-24">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight md:leading-tight">
                    Build internal AI capabilities and <br className="hidden md:block" />
                    expertise
                </h1>
                <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto mt-4">
                    Empower your organization with strategic AI consulting and comprehensive training programs that build lasting capabilities, ensure successful implementations, and drive sustainable AI transformation.        </p>
            </div>
        </section>

        {/* Advisory Services Section */}
        <section className="w-full flex flex-col items-center justify-center py-12 bg-white">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Advisory Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-0 max-w-5xl w-full px-25">
                {/* Card 1 */}
                <div className="bg-white border border-gray-300 rounded-xl p-8 flex flex-col items-start shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer max-w-sm w-full mx-auto">
                    <span className="text-4xl mb-4 text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="12" cy="12" r="2" fill="currentColor" /></svg>
                    </span>
                    <h3 className="text-xl font-semibold mb-2">Strategic AI Planning</h3>
                    <p className="text-gray-600">Develop comprehensive AI strategies aligned with your business objectives and market opportunities.</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white border border-gray-300 rounded-xl p-8 flex flex-col items-start shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer max-w-sm w-full mx-auto">
                    <span className="text-4xl mb-4 text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5v-1.125A2.625 2.625 0 017.125 15.75h9.75A2.625 2.625 0 0119.5 18.375V19.5M12 12.75c-2.485 0-4.5 2.015-4.5 4.5v.75h9v-.75c0-2.485-2.015-4.5-4.5-4.5z" /></svg>
                    </span>
                    <h3 className="text-xl font-semibold mb-2">Team Training Programs</h3>
                    <p className="text-gray-600">Comprehensive training programs to build internal AI capabilities and expertise within your organization.</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white border border-gray-300 rounded-xl p-8 flex flex-col items-start shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer max-w-sm w-full mx-auto">
                    <span className="text-4xl mb-4 text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0c-2.485 0-4.5-2.015-4.5-4.5V6.75A2.25 2.25 0 019.75 4.5h4.5A2.25 2.25 0 0116.5 6.75v6.75c0 2.485-2.015 4.5-4.5 4.5z" /></svg>
                    </span>
                    <h3 className="text-xl font-semibold mb-2">Best Practices Guidance</h3>
                    <p className="text-gray-600">Industry-leading best practices and methodologies for successful AI implementation and governance.</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white border border-gray-300 rounded-xl p-8 flex flex-col items-start shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer max-w-sm w-full mx-auto">
                    <span className="text-4xl mb-4 text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l6.16 3.24-1.18-6.88 5-4.87-6.91-1-3.07-6.22-3.07 6.22-6.91 1 5 4.87-1.18 6.88L12 17.25z" /></svg>
                    </span>
                    <h3 className="text-xl font-semibold mb-2">Certification Programs</h3>
                    <p className="text-gray-600">Professional certification programs to validate and enhance your team's AI knowledge and skills.</p>
                </div>
            </div>
        </section>

        {/* Long-term Value Section */}
        <section className="w-full flex flex-col items-center justify-center py-12">
            <div className="w-full max-w-6xl bg-[#3BC3CA]/20 rounded-xl px-8 md:px-16 py-12 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-10">Long-term Value</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    <div className="flex items-center mb-2">
                        <span className="text-[#3BC3CA] mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" d="M8 12l2.5 2.5L16 9" /></svg>
                        </span>
                        <span className="text-lg md:text-xl">Build internal AI expertise and capabilities</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="text-[#3BC3CA] mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" d="M8 12l2.5 2.5L16 9" /></svg>
                        </span>
                        <span className="text-lg md:text-xl">Reduce dependency on external consultants</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="text-[#3BC3CA] mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" d="M8 12l2.5 2.5L16 9" /></svg>
                        </span>
                        <span className="text-lg md:text-xl">Accelerate AI adoption across the organization</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="text-[#3BC3CA] mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" d="M8 12l2.5 2.5L16 9" /></svg>
                        </span>
                        <span className="text-lg md:text-xl">Ensure ethical and responsible AI implementation</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="text-[#3BC3CA] mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" d="M8 12l2.5 2.5L16 9" /></svg>
                        </span>
                        <span className="text-lg md:text-xl">Maximize ROI from AI investments</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="text-[#3BC3CA] mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" d="M8 12l2.5 2.5L16 9" /></svg>
                        </span>
                        <span className="text-lg md:text-xl">Stay ahead of industry AI trends and developments</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Training Programs Cards Section */}
        <section className="relative w-full h-[320vh] bg-white px-4 md:px-0">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 pt-8">
                Training Programs
            </h2>

            {[
                {
                    title: 'Executive AI Leadership',
                    description:
                        'Strategic AI overview for C-level executives and decision makers.',
                    image: '/AIadvisory/Aiadvisory.jpg',
                    points: [
                        'AI strategy development',
                        'ROI assessment',
                        'Risk management',
                        'Governance frameworks',
                    ],
                },
                {
                    title: 'AI Essential for Admins',
                    description:
                        'AI tools for Admins prompt engineering hands on training',
                    image: '/AIadvisory/Aiessiontials.png', // Replace with actual path
                    points: [
                        'Prompt Engineering',
                        'AI for Scheduling & Task Management',
                        'AI in Communication & Documentation',
                        'Workflow Automation with AI',
                    ],
                },
                {
                    title: 'AI Ethics & Compliance',
                    description:
                        'Responsible AI practices and regulatory compliance training.',
                    image: '/AIadvisory/AIethics.png', // Replace with actual path
                    points: [
                        'Ethical AI principles',
                        'Bias detection and mitigation',
                        'Regulatory compliance',
                        'Transparency frameworks',
                    ],
                },
            ].map((card, idx) => (
                <div
                    key={idx}
                    className="sticky top-12 h-screen flex items-center justify-center"
                    style={{ zIndex: idx + 1 }}
                >
                    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col md:flex-row items-center transition-transform duration-500">
                        {/* Image */}
                        <div className="w-full md:w-1/3 flex items-center justify-center mb-8 md:mb-0 md:mr-12">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="rounded-2xl w-80 h-80 object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-2/3">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">{card.title}</h3>
                            <p className="text-lg text-gray-600 mb-8">{card.description}</p>
                            <ul className="space-y-4">
                                {card.points.map((item, i) => (
                                    <li key={i} className="flex items-center text-lg">
                                        <span className="w-3 h-3 bg-[#3BC3CA] rounded-full mr-4 inline-block"></span>
                                        <span className="font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>

        <section className="w-full flex justify-center items-center py-28 px-2 bg-white">
            <div
                className="w-full max-w-6xl rounded-xl flex flex-col items-center justify-center py-8 px-4 md:px-0"
                style={{ background: "linear-gradient(293deg, #3cc9d7 0%, #2ba7b7 100%)" }}
            >
                <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">Ready to Build AI Expertise?</h2>
                <p className="text-base md:text-lg text-white text-center mb-6 max-w-3xl">
                    Empower your team with the knowledge and skills needed to drive successful AI transformation in your organization.        </p>
                <button className="bg-white text-[#22b8c2] px-8 py-3 rounded-md text-base font-semibold shadow hover:bg-gray-100 transition">
                    Get Started Today
                </button>
            </div>
        </section>

        {/* Calendly Inline Widget Section */}
        <section className="w-full flex flex-col items-center justify-center py-12 bg-white">
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/rayan-nasr-thru-ai?hide_landing_page_details=1&hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '700px', width: '100%' }}
            ></div>
        </section>


    </>
);

export default AIadvisory;