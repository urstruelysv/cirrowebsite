"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-300 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} Aethos Vison Labs. All rights
          reserved.
        </p>
        <p className="text-sm mt-2">cirro Wtr Purest of all</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-black-300 hover:text-blue-500">
            Privacy Policy
          </a>
          <a href="#" className="text-black-300 hover:text-blue-500">
            Terms of Service
          </a>
          {/* <a href="#" className="text-black-300 hover:text-blue-500">
            Contact Us
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
