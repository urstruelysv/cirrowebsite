"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="logo.png" alt="Logo" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-black hover:bg-sky-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Our Story
              </a>
              <a
                href="/ourstory#"
                className="text-black hover:bg-sky-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Give Back
              </a>
              <a
                href="#"
                className="text-black hover:bg-sky-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Our Vision
              </a>
              <a
                href="#"
                className="text-black hover:bg-sky-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-black hover:bg-sky-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-black hover:bg-sky-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dealership
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-black hover:bg-sky-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            Our Story
          </a>
          <a
            href="#"
            className="text-black hover:bg-sky-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            Give Back
          </a>
          <a
            href="#"
            className="text-black hover:bg-sky-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            Our Vision
          </a>
          <a
            href="#"
            className="text-black hover:bg-sky-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-black hover:bg-sky-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-black hover:bg-sky-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            Dealership
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
