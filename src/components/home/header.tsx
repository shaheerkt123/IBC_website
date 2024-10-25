import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo/logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 transition-colors duration-300 ${
        isScrolled ? "bg-blue-600" : "bg-transparent"
      } shadow-md z-50`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img className="rounded-lg w-40 h-12" src={logo} alt="logo" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="/about-us" className="text-gray-700 hover:text-blue-500">
            About Us
          </a>
          <a href="/services" className="text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="/blog" className="text-gray-700 hover:text-blue-500">
            Blog
          </a>
          <a href="/contact-us" className="text-gray-700 hover:text-blue-500">
            Contact Us
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="/about-us" className="text-gray-700 hover:text-blue-500">
              About Us
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
            <a href="/blog" className="text-gray-700 hover:text-blue-500">
              Blog
            </a>
            <a href="/contact-us" className="text-gray-700 hover:text-blue-500">
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
