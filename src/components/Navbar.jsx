import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceDropdown from "./services/ServiceDropdown";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const serviceLinkRef = useRef(null);

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        serviceLinkRef.current &&
        !serviceLinkRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Scroll lock on body when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);
  const handleClick = () => setDropdownOpen((open) => !open);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMobileDropdownToggle = () =>
    setMobileDropdownOpen((open) => !open);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-10 bg-white shadow-lg z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ minHeight: "70px", height: "70px" }}
    >
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-[#3BC3CA]">
          ThruAi.
        </Link>
      </div>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden flex-1 flex justify-end">
        <button
          className="focus:outline-none"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#3BC3CA]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#3BC3CA]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Links */}
      <div className="flex-1 hidden md:flex justify-center space-x-8">
        <Link
          to="/"
          className="text-base text-gray-800 hover:text-[#3BC3CA] transition"
        >
          Home
        </Link>
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
        <a
          href="#"
          className="text-base text-gray-800 hover:text-[#3BC3CA] transition"
        >
          Case Studies
        </a>
        <a
          href="#"
          className="text-base text-gray-800 hover:text-[#3BC3CA] transition"
        >
          Contact
        </a>
      </div>

      {/* Desktop CTA Button */}
      <div className="flex-1 hidden md:flex justify-end">
        <button className="bg-[#3BC3CA] text-white px-6 py-2 rounded-md text-base font-medium shadow hover:bg-[#2bb0bd] transition">
          Book your Meeting
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-white flex flex-col px-6 py-10 space-y-6 h-screen overflow-hidden"
          onClick={closeMobileMenu}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full">
            <Link
              to="/"
              className="block text-lg text-gray-800 hover:text-[#3BC3CA] mb-4"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <button
              className="w-full text-left text-lg text-gray-800 hover:text-[#3BC3CA] flex items-center justify-between"
              onClick={handleMobileDropdownToggle}
            >
              Service
              <svg
                className={`w-5 h-5 transition-transform ${
                  mobileDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {mobileDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <ServiceDropdown
                  isMobile={true}
                  onItemClick={() => {
                    setMobileDropdownOpen(false);
                    closeMobileMenu();
                  }}
                />
              </div>
            )}

            <a
              href="#"
              className="block text-lg text-gray-800 hover:text-[#3BC3CA] mt-4"
              onClick={closeMobileMenu}
            >
              Case Studies
            </a>
            <a
              href="#"
              className="block text-lg text-gray-800 hover:text-[#3BC3CA]"
              onClick={closeMobileMenu}
            >
              Contact
            </a>

            <button
              className="bg-[#3BC3CA] text-white px-6 py-2 rounded-md text-base font-medium shadow hover:bg-[#2bb0bd] transition mt-6"
              onClick={closeMobileMenu}
            >
              Book your Meeting
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
