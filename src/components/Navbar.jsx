import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceDropdown from "./services/ServiceDropdown";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // NEW
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // NEW
  const dropdownRef = useRef(null);
  const serviceLinkRef = useRef(null);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        serviceLinkRef.current &&
        !serviceLinkRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Handlers for hover and click
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);
  const handleClick = () => setDropdownOpen((open) => !open);

  // Mobile menu handlers
  const handleMobileMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleMobileDropdownToggle = () => setMobileDropdownOpen((open) => !open);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between py-4 px-4 md:px-10 bg-white shadow-lg z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ minHeight: '70px', height: '70px' }}
    >
      {/* Logo */}
      <div className="flex-1">
        <span className="text-2xl font-bold text-[#3BC3CA]">ThruAi.</span>
      </div>
      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden flex-1 flex justify-end">
        <button
          className="focus:outline-none"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            // Close icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#3BC3CA]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#3BC3CA]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      {/* Nav Links (Desktop) */}
      <div className="flex-1 hidden md:flex justify-center space-x-8">
        <Link to="/" className="text-base text-gray-800 hover:text-[#3BC3CA] transition">Home</Link>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            ref={serviceLinkRef}
            className="text-base text-gray-800 hover:text-[#3BC3CA] transition focus:outline-none"
            onClick={handleClick}
            type="button"
          >
            Service
          </button>
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute left-1/2 top-full -translate-x-1/2 z-50"
            >
              <ServiceDropdown onItemClick={() => setDropdownOpen(false)} />
            </div>
          )}
        </div>
        <a href="#" className="text-base text-gray-800 hover:text-[#3BC3CA] transition">Case Studies</a>
        <a href="#" className="text-base text-gray-800 hover:text-[#3BC3CA] transition">Contact</a>
      </div>
      {/* Get Started Button (Desktop) */}
      <div className="flex-1 hidden md:flex justify-end">
        <button className="bg-[#3BC3CA] text-white px-6 py-2 rounded-md text-base font-medium shadow hover:bg-[#2bb0bd] transition">Book your Meeting</button>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col md:hidden" onClick={closeMobileMenu}>
          <div className="bg-white w-4/5 max-w-xs h-full p-6 shadow-lg flex flex-col space-y-6" onClick={e => e.stopPropagation()}>
            <Link to="/" className="text-lg text-gray-800 hover:text-[#3BC3CA] transition" onClick={closeMobileMenu}>Home</Link>
            <div className="relative">
              <button
                className="text-lg text-gray-800 hover:text-[#3BC3CA] transition focus:outline-none flex items-center w-full justify-between"
                onClick={handleMobileDropdownToggle}
                type="button"
              >
                Service
                <svg className={`w-5 h-5 ml-2 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdownOpen && (
                <div className="mt-2 ml-2">
                  <ServiceDropdown onItemClick={() => { setMobileDropdownOpen(false); closeMobileMenu(); }} isMobile={true} />
                </div>
              )}
            </div>
            <a href="#" className="text-lg text-gray-800 hover:text-[#3BC3CA] transition" onClick={closeMobileMenu}>Case Studies</a>
            <a href="#" className="text-lg text-gray-800 hover:text-[#3BC3CA] transition" onClick={closeMobileMenu}>Contact</a>
            <button className="bg-[#3BC3CA] text-white px-6 py-2 rounded-md text-base font-medium shadow hover:bg-[#2bb0bd] transition mt-4" onClick={closeMobileMenu}>Book your Meeting</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
