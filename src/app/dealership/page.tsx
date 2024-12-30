"use client";

import React from "react";
import { motion } from "framer-motion";

const ApplyForDistributorship: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-100 min-h-screen font-sans">
      {/* Header Section */}
      <header
        className="relative w-full h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('/distributorship-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-700 opacity-50"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
          <motion.h1
            className="text-5xl font-extrabold text-center mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Apply for Distributorship
          </motion.h1>
          <p className="text-xl mt-2 text-center">
            Join India's fastest growing packaged water brand and expand your
            business horizons.
          </p>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-20 text-blue-900">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <motion.h2
            className="text-4xl font-semibold text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Partner with Cirro?
          </motion.h2>
          <p className="text-lg">
            Cirro has become a household name in India, known for its purity,
            advanced treatment process, and commitment to sustainability. Here’s
            why you should become a distributor:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/quality-icon.png"
                alt="Quality"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Unmatched Quality</h3>
              <p className="text-center">
                Our water is treated with RO + UV + Ozonization to ensure
                maximum purity and taste.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/growth-icon.png"
                alt="Growth"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Fastest Growing Brand</h3>
              <p className="text-center">
                We are one of India’s fastest-growing packaged drinking water
                brands with nationwide reach.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/support-icon.png"
                alt="Support"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Comprehensive Support</h3>
              <p className="text-center">
                We offer robust marketing strategies, advertising, and
                brand-building support to our distributors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 px-6 md:px-20 bg-blue-50 text-blue-900">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            className="text-3xl font-semibold text-blue-700 text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Distributor Application Form
          </motion.h3>
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <p className="text-lg">
              Apply today to become a part of Cirro’s rapidly expanding network
              of distributors. We are looking for dynamic individuals who share
              our passion for quality and growth.
            </p>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg text-blue-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white border rounded-lg shadow-md text-blue-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg text-blue-700">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white border rounded-lg shadow-md text-blue-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-lg text-blue-700">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full px-4 py-3 bg-white border rounded-lg shadow-md text-blue-900"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="pincode"
                  className="block text-lg text-blue-700"
                >
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="w-full px-4 py-3 bg-white border rounded-lg shadow-md text-blue-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-lg text-blue-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-4 py-3 bg-white border rounded-lg shadow-md text-blue-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-lg text-blue-700">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full px-4 py-3 bg-white border rounded-lg shadow-md text-blue-900"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mr-2"
                  required
                />
                <label htmlFor="terms" className="text-lg text-blue-700">
                  I agree to the{" "}
                  <a href="/terms" className="text-blue-700 underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-200 text-blue-900 py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Cirro Water. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ApplyForDistributorship;
