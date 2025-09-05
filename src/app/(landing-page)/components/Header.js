"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Linkedin, Youtube } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    // { href: "#projects", label: "Projects" },
    { href: "/posts", label: "Posts" },

  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-sm"
          : "bg-white/70 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-1 transition-all duration-300 hover:scale-105"
          >
            <span className="font-outfit text-xl md:text-2xl">
              <span className="font-bold text-gray-900">Rishabh</span>{" "}
              <span className="font-thin text-gray-500">Maheshwari</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all duration-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="px-4 py-2 text-gray-900 font-medium text-base transition-colors duration-200 hover:text-gray-500"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 border-l border-gray-200 pl-8">
              <a
                href="https://www.linkedin.com/in/rishabhmaheshwari30/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=u1rnt69HbmI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <Link href="/contact">
              <button className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-white transition duration-300 ease-out bg-gray-900 rounded-lg shadow-md group hover:scale-105">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-900 duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
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
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  Get in Touch
                </span>
                <span className="relative invisible">Get in Touch</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200/20`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-gray-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Social Media Icons */}
          <div className="flex items-center space-x-4 px-4 py-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <Link href="/contact" className="w-full mt-4 px-4 py-3 text-base font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200">
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
