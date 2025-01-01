"use client";

import React from "react";
import { motion } from "framer-motion";

const Middle = () => {
  return (
    <section className="relative h-[70vh] flex flex-col items-center justify-center shadow-lg">
      {/* Motion-enhanced image */}
      <motion.img
        src="/middleimage.png"
        alt="100% plastic neutral"
        className="w-full h-full object-cover opacity-80 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Motion-enhanced image */}
      <motion.img
        src="/lastimage.jpg"
        alt="100% plastic neutral"
        className="w-full h-full object-cover opacity-80 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Footer section */}
      <footer className="w-full p-4 bg-blue-200 text-blue-700 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cirro. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Middle;
