import React, { useEffect } from "react";

const BookaMeeting = () => {
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
      {/* Calendly Inline Widget Section */}
      <section className="w-full flex flex-col items-center justify-center py-40" style={{ backgroundColor: '#e6f7fa' }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#222]">
          Book Your Meeting Today
        </h2>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/rayan-nasr-thru-ai?hide_landing_page_details=1&hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px', width: '100%' }}
        ></div>
      </section>
    </>
  );
};

export default BookaMeeting;