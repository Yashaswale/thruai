import React from "react";

const CaseStudies = () => (
  <>
    <section className="w-full min-h-screen py-16 px-4 md:px-0 flex flex-col items-center justify-center" style={{ background: '#f4fcfd' }}>
      <div className="max-w-4xl w-full mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Transforming Patient Experience:<br />
          A <span className="text-[#3BC3CA]">ThruAi-PX</span> Case Study
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          How a leading Dubai clinic recovered AED <span className="text-[#3BC3CA] font-semibold">565K+</span> per month and slashed no-shows by <span className="text-[#3BC3CA] font-semibold">25%</span> using AI-powered patient experience automation.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mt-8">
          {/* Card 1 */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 shadow-sm transition-all duration-200 hover:shadow-lg hover:border-gray-400 cursor-pointer">
            <div className="text-4xl font-bold text-[#3BC3CA] mb-2">25%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">No-Show Reduction</div>
            <div className="text-gray-600 text-base">
              Significant decrease in missed appointments through predictive analytics and automated follow-ups
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 shadow-sm transition-all duration-200 hover:shadow-lg hover:border-gray-400 cursor-pointer">
            <div className="text-4xl font-bold text-[#3BC3CA] mb-2">60%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Inquiry Automation</div>
            <div className="text-gray-600 text-base">
              Reduction in staff time spent on routine patient questions and administrative tasks
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Client Background Section */}
    <section className="w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text and Stats */}
        <div className="flex-1 text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Client Background</h3>
          <p className="text-lg text-gray-600 mb-6">
            Located in the heart of Dubai, this multi-specialty clinic employs over 15 physicians, serving approximately 3,000 patients monthly. As one of the UAE's premier healthcare providers, the clinic offers comprehensive outpatient services including specialized consultations, diagnostics, and minor procedures.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Despite its reputation for clinical excellence, the clinic struggled with operational inefficiencies that impacted both revenue and patient satisfaction.
          </p>
          <div className="space-y-4">
            <div className="flex items-center text-gray-700 text-base">
              {/* User Icon */}
              <svg className="w-6 h-6 mr-3 text-[#3BC3CA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1112 21a8.963 8.963 0 01-6.879-3.196z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              15+ Physicians
            </div>
            <div className="flex items-center text-gray-700 text-base">
              {/* Calendar Icon */}
              <svg className="w-6 h-6 mr-3 text-[#3BC3CA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" /></svg>
              3,000 Patients Monthly
            </div>
            <div className="flex items-center text-gray-700 text-base">
              {/* Clock Icon */}
              <svg className="w-6 h-6 mr-3 text-[#3BC3CA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
              2,840 Appointment Slots
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img src="/Casestudies/ClientBG.png" alt="Manufacturing IoT" className="rounded-xl w-full max-w-md object-cover" />
        </div>
      </div>
    </section>
    {/* The Challenge Section */}
    <section className="w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">The Challenge</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          The clinic faced multiple operational challenges that significantly impacted revenue, staff productivity, and patient satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-44">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left flex flex-col shadow-sm max-w-sm min-h-[260px] mx-auto transition-all duration-200 hover:shadow-lg hover:border-gray-400">
            <div className="w-10 h-10 flex items-center justify-center bg-[#e6fbfd] text-[#3BC3CA] font-bold text-lg rounded mb-4">1</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">High No-Show Rate</div>
            <div className="text-gray-600 text-base">
              20% no-show rate resulting in 568 missed appointment slots monthly, representing substantial lost revenue opportunity.
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left flex flex-col shadow-sm max-w-sm min-h-[260px] mx-auto transition-all duration-200 hover:shadow-lg hover:border-gray-400">
            <div className="w-10 h-10 flex items-center justify-center bg-[#e6fbfd] text-[#3BC3CA] font-bold text-lg rounded mb-4">2</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Staff Resource Drain</div>
            <div className="text-gray-600 text-base">
              Administrative staff spent 250+ hours monthly handling routine inquiries that could be automated.
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left flex flex-col shadow-sm max-w-sm min-h-[260px] mx-auto transition-all duration-200 hover:shadow-lg hover:border-gray-400">
            <div className="w-10 h-10 flex items-center justify-center bg-[#e6fbfd] text-[#3BC3CA] font-bold text-lg rounded mb-4">3</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Unfilled Cancellations</div>
            <div className="text-gray-600 text-base">
              10% of cancellations remained unfilled due to manual rebooking processes, further increasing revenue leakage.
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left flex flex-col shadow-sm max-w-sm min-h-[260px] mx-auto transition-all duration-200 hover:shadow-lg hover:border-gray-400">
            <div className="w-10 h-10 flex items-center justify-center bg-[#e6fbfd] text-[#3BC3CA] font-bold text-lg rounded mb-4">4</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Poor Patient Engagement</div>
            <div className="text-gray-600 text-base">
              Inadequate lead follow-up systems and patient recall processes resulted in lost conversion opportunities.
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Customer Experience Solutions Section */}
    <section className="w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Comprehensive Customer Experience Solutions</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Our AI-powered tools work together to create seamless, efficient, and delightful customer experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left flex flex-col shadow-sm h-full transition-all duration-200 hover:shadow-lg hover:border-gray-400">
            {/* Chat Icon */}
            <svg className="w-8 h-8 mb-4 text-[#3BC3CA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#3BC3CA" strokeWidth="2"/><path d="M7 8h10M7 12h6" stroke="#3BC3CA" strokeWidth="2"/></svg>
            <div className="text-lg font-bold text-gray-900 mb-2">Follow-Up & Reminder Bot</div>
            <div className="text-gray-600 text-base">
              Multi-channel appointment reminders with intelligent escalation protocols reduced no-shows by 25%.
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left flex flex-col shadow-sm h-full transition-all duration-200 hover:shadow-lg hover:border-gray-400">
            {/* Phone Icon */}
            <svg className="w-8 h-8 mb-4 text-[#3BC3CA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 01-2 2A17.91 17.91 0 013 5a2 2 0 012-2h2.09a2 2 0 012 1.72c.13.81.36 1.6.7 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0122 16.92z" stroke="#3BC3CA" strokeWidth="2"/></svg>
            <div className="text-lg font-bold text-gray-900 mb-2">Smart Reception Bot</div>
            <div className="text-gray-600 text-base">
              AI-powered virtual assistant handled 60% of routine patient inquiries across channels, freeing staff from repetitive tasks.
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left flex flex-col shadow-sm h-full transition-all duration-200 hover:shadow-lg hover:border-gray-400">
            {/* Calendar Icon */}
            <svg className="w-8 h-8 mb-4 text-[#3BC3CA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" stroke="#3BC3CA" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" stroke="#3BC3CA" strokeWidth="2"/></svg>
            <div className="text-lg font-bold text-gray-900 mb-2">Auto-Rescheduling Assistant</div>
            <div className="text-gray-600 text-base">
              Intelligent system that automatically filled 70% of cancelled slots by matching availability with waitlisted patients.
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left flex flex-col shadow-sm h-full transition-all duration-200 hover:shadow-lg hover:border-gray-400">
            {/* Arrow Up Icon */}
            <svg className="w-8 h-8 mb-4 text-[#3BC3CA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" stroke="#3BC3CA" strokeWidth="2"/><path d="M14 7h7v7" stroke="#3BC3CA" strokeWidth="2"/></svg>
            <div className="text-lg font-bold text-gray-900 mb-2">No-Show Predictor</div>
            <div className="text-gray-600 text-base">
              Machine learning model identified high-risk appointments for targeted interventions, enabling proactive outreach.
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left flex flex-col shadow-sm h-full transition-all duration-200 hover:shadow-lg hover:border-gray-400">
            {/* User Group Icon */}
            <svg className="w-8 h-8 mb-4 text-[#3BC3CA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="#3BC3CA" strokeWidth="2"/><circle cx="9" cy="7" r="4" stroke="#3BC3CA" strokeWidth="2"/></svg>
            <div className="text-lg font-bold text-gray-900 mb-2">Lead Conversion Assistant</div>
            <div className="text-gray-600 text-base">
              Automated lead nurturing sequences increased new patient conversion by 15% through timely follow-ups.
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left flex flex-col shadow-sm h-full transition-all duration-200 hover:shadow-lg hover:border-gray-400">
            {/* Check Circle Icon */}
            <svg className="w-8 h-8 mb-4 text-[#3BC3CA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#3BC3CA" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="#3BC3CA" strokeWidth="2"/></svg>
            <div className="text-lg font-bold text-gray-900 mb-2">Retention & Recall Engine</div>
            <div className="text-gray-600 text-base">
              Systematic patient reactivation protocols successfully brought back 10% of dormant patients through health reminders.
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Implementation Approach Section */}
    <section className="w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Implementation Approach</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          5-week structured implementation for seamless integration
        </p>
        <div className="flex flex-col gap-8 text-left">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <span className="inline-block bg-[#3BC3CA] text-white font-semibold rounded-lg px-5 py-2 text-base min-w-[80px] text-center">week 1</span>
            <div>
              <div className="text-xl font-bold text-gray-900 mb-1">Discovery & Planning</div>
              <div className="text-gray-600 text-base">
                Comprehensive workflow analysis and data integration mapping. Stakeholder interviews and implementation team formation.
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <span className="inline-block bg-[#3BC3CA] text-white font-semibold rounded-lg px-5 py-2 text-base min-w-[80px] text-center">week 2</span>
            <div>
              <div className="text-xl font-bold text-gray-900 mb-1">Initial System Configuration & Training</div>
              <div className="text-gray-600 text-base">
                Core ThruAi-PX platform setup and initial data migration. Configuration of EMR integration points and security protocols.
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <span className="inline-block bg-[#3BC3CA] text-white font-semibold rounded-lg px-5 py-2 text-base min-w-[80px] text-center">week 3</span>
            <div>
              <div className="text-xl font-bold text-gray-900 mb-1">Pilot Deployment & Calibration</div>
              <div className="text-gray-600 text-base">
                Launch of pilot program in two selected specialties (Cardiology and Pediatrics). Baseline metric capture and system calibration.
              </div>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <span className="inline-block bg-[#3BC3CA] text-white font-semibold rounded-lg px-5 py-2 text-base min-w-[80px] text-center">week 4</span>
            <div>
              <div className="text-xl font-bold text-gray-900 mb-1">Full-Scale Rollout & Integration</div>
              <div className="text-gray-600 text-base">
                Expansion of ThruAi-PX across all 12 specialties. Full integration with WhatsApp Business API and SMS gateway services.
              </div>
            </div>
          </div>
          {/* Step 5 */}
          <div className="flex items-start gap-4">
            <span className="inline-block bg-[#3BC3CA] text-white font-semibold rounded-lg px-5 py-2 text-base min-w-[80px] text-center">week 5</span>
            <div>
              <div className="text-xl font-bold text-gray-900 mb-1">Performance Optimization & Ongoing Support</div>
              <div className="text-gray-600 text-base">
                Final dashboard configuration and real-time performance monitoring setup. Post-implementation review and system fine-tuning.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Results & ROI Section */}
    <section className="w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center" style={{ background: '#f4fcfd' }}>
      <div className="max-w-6xl w-full mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Results & ROI</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Within two months of full implementation, ThruAi-PX delivered transformative results across all key performance indicators.
        </p>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 text-left justify-center">
          {/* Performance Improvements */}
          <div className="flex-1 min-w-[300px]">
            <div className="text-xl font-bold text-gray-900 mb-6">Performance Improvements</div>
            {/* No-Show Rate */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span>No-Show Rate</span>
                <span className="font-semibold text-green-600">-25%</span>
              </div>
              <div className="flex w-full h-3 rounded bg-red-100 overflow-hidden">
                <div className="bg-red-200 h-3" style={{ width: '44%' }}></div>
                <div className="bg-green-200 h-3" style={{ width: '56%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Before: 20%</span>
                <span>After: 15%</span>
              </div>
            </div>
            {/* Staff Hours Saved */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span>Staff Hours Saved</span>
                <span className="font-semibold text-green-600">-60%</span>
              </div>
              <div className="flex w-full h-3 rounded bg-red-100 overflow-hidden">
                <div className="bg-red-200 h-3" style={{ width: '71%' }}></div>
                <div className="bg-green-200 h-3" style={{ width: '29%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Before: 250hrs</span>
                <span>After: 100hrs</span>
              </div>
            </div>
            {/* Cancellation Fill Rate */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span>Cancellation Fill Rate</span>
                <span className="font-semibold text-green-600">+70%</span>
              </div>
              <div className="flex w-full h-3 rounded bg-red-100 overflow-hidden">
                <div className="bg-red-200 h-3" style={{ width: '11%' }}></div>
                <div className="bg-green-200 h-3" style={{ width: '89%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Before: 10%</span>
                <span>After: 80%</span>
              </div>
            </div>
            {/* Lead Conversion */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span>Lead Conversion</span>
                <span className="font-semibold text-green-600">+15%</span>
              </div>
              <div className="flex w-full h-3 rounded bg-red-100 overflow-hidden">
                <div className="bg-red-200 h-3" style={{ width: '45%' }}></div>
                <div className="bg-green-200 h-3" style={{ width: '55%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Before: 65%</span>
                <span>After: 80%</span>
              </div>
            </div>
          </div>
          {/* Revenue Impact */}
          <div className="flex-1 min-w-[300px]">
            <div className="text-xl font-bold text-gray-900 mb-6">Revenue Impact</div>
            <div className="bg-[#e6fbf7] rounded-xl p-6 mb-6 text-center">
              <div className="text-3xl font-bold text-[#16A34A] mb-1">AED 565,100</div>
              <div className="text-base text-[#166534] font-medium">Monthly Revenue Recovery</div>
            </div>
            <div className="mb-6 space-y-2">
              <div className="flex justify-between text-gray-700 text-base font-medium">
                <span>Reduced No-Shows</span>
                <span className="font-semibold">AED 283,500</span>
              </div>
              <div className="flex justify-between text-gray-700 text-base font-medium">
                <span>Filled Cancellations</span>
                <span className="font-semibold">AED 142,000</span>
              </div>
              <div className="flex justify-between text-gray-700 text-base font-medium">
                <span>Improved Lead Conversion</span>
                <span className="font-semibold">AED 85,600</span>
              </div>
              <div className="flex justify-between text-gray-700 text-base font-medium">
                <span>Patient Retention & Recall</span>
                <span className="font-semibold">AED 54,000</span>
              </div>
            </div>
            <div className="bg-[#e6f6fb] rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-[#3BC3CA] mb-1">AED 6,781,200</div>
              <div className="text-base text-[#3BC3CA] font-medium">Annual Revenue Impact</div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-base text-gray-700 max-w-3xl mx-auto text-center">
          Beyond the financial impact, the clinic reported significantly improved patient satisfaction scores, with a <span className="text-[#3BC3CA] font-semibold">22% increase</span> in positive reviews and a <span className="text-[#3BC3CA] font-semibold">35% reduction</span> in administrative complaints.
        </div>
      </div>
    </section>
    {/* Testimonial Section */}
    <section className="w-full py-16 px-4 flex flex-col items-center justify-center" style={{ background: '#3BC3CA' }}>
      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Stars */}
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
          ))}
        </div>
        {/* Testimonial Text */}
        <blockquote className="text-white text-2xl md:text-3xl font-normal leading-relaxed mb-8">
          "ThruAi-PX has fundamentally transformed how we engage with patients throughout their care journey. Not only have we recaptured significant lost revenue, but we've also enhanced the patient experience while reducing the administrative burden on our staff. The implementation was seamless, and the results exceeded our expectations across every metric we track."
        </blockquote>
        {/* Attribution */}
        <div className="text-black text-lg font-bold mb-1">Dubai Specialty Clinic</div>
        <div className="text-black text-base font-normal">Healthcare Administrator</div>
      </div>
    </section>
    {/* Key Takeaways Section */}
    <section className="w-full py-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Takeaways */}
        <div className="flex-1">
          <h3 className="text-4xl font-bold text-gray-900 mb-10">Key Takeaways</h3>
          <ul className="space-y-8">
            <li className="flex items-start gap-4">
              <svg className="w-20 h-20 text-green-500 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2"/></svg>
              <span className="text-xl text-gray-700">AI-powered patient experience automation delivers measurable ROI through reduced no-shows, improved scheduling efficiency, and enhanced patient engagement.</span>
            </li>
            <li className="flex items-start gap-4">
              <svg className="w-14 h-14 text-green-500 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2"/></svg>
              <span className="text-xl text-gray-700">Comprehensive implementation approach ensures high adoption rates and minimal disruption to existing workflows.</span>
            </li>
            <li className="flex items-start gap-4">
              <svg className="w-17 h-17 text-green-500 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2"/></svg>
              <span className="text-xl text-gray-700">Integrated technology pillars create a holistic solution that addresses the entire patient journey, from lead conversion to long-term retention.</span>
            </li>
          </ul>
        </div>
        {/* Right: ROI Card */}
        <div className="flex-1 flex justify-center items-start">
          <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Discover Your ROI Potential</h4>
            <p className="text-lg text-gray-700 mb-8">Every healthcare facility has unique challenges and opportunities. Our team can conduct a personalized ROI audit to identify your specific potential for improvement.</p>
            <button className="w-full border border-gray-300 rounded-lg py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 transition">Download Case Study</button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CaseStudies;