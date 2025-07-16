import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceDropdown from "./services/ServiceDropdown";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between py-4 px-10 bg-white shadow-lg z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ minHeight: '70px', height: '70px' }}
    >
      {/* Logo */}
      <div className="flex-1">
        <span className="text-2xl font-bold text-[#3BC3CA]">ThruAi.</span>
      </div>
      {/* Nav Links */}
      <div className="flex-1 flex justify-center space-x-8">
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
      {/* Get Started Button */}
      <div className="flex-1 flex justify-end">
        <button className="bg-[#3BC3CA] text-white px-6 py-2 rounded-md text-base font-medium shadow hover:bg-[#2bb0bd] transition">Book your Meeting</button>
      </div>
    </nav>
  );
};

export default Navbar;
