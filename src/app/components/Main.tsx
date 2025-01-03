"use client";
import React from "react";
import { motion } from "framer-motion";

const CirroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-6 px-5 md:px-10 bg-gradient-to-b from-blue-100 to-white">
      {/* Left Section: Logo with Background */}
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden mb-6 md:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -left-1/4 -top-1/4 w-full h-full bg-white rounded-full" />
          <div className="absolute transform -rotate-45 -right-1/4 -bottom-1/4 w-full h-full bg-white rounded-full" />
        </div>

        <motion.img
          src="/logo.png"
          alt="Cirro Logo"
          className="w-3/5 max-w-xs h-auto relative z-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </motion.div>

      {/* Right Section: Text Content */}
      <motion.div
        className="w-full md:w-1/2 bg-white flex flex-col justify-center px-6 md:px-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Widely preferred as a source of safe drinking water in India.
        </motion.h1>

        <div className="space-y-3">
          <motion.p
            className="text-sm md:text-base text-blue-700 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience unparalleled purity with our advanced 7-step purification
            process, setting new standards in packaged drinking water.
          </motion.p>

          <motion.p
            className="text-sm md:text-base text-blue-700 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ISO 9001:2015 certified, ensuring every drop meets international
            quality standards. Available in multiple sizes for every need:
            250ml, 500ml, 1L, and 2L.
          </motion.p>

          <motion.div
            className="pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="inline-flex items-center space-x-2 text-sm text-blue-700">
              <span>✓ BIS Certified</span>
              <span className="mx-2">•</span>
              <span>✓ FDA Approved</span>
              <span className="mx-2">•</span>
              <span>✓ Lab Tested</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CirroSection;
