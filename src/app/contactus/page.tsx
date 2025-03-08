"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-blue-200 min-h-screen font-sans">
      {/* Header Section */}
      <header
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/mountain.png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.h1
            className="text-5xl font-bold text-blue-900 mt-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <p className="text-lg mt-2 text-center text-blue-900">
            Get in touch with cirro for any queries or feedback.
          </p>
        </div>
      </header>

      {/* Contact Form Section */}
      <main className="py-10 px-4 md:px-20 bg-blue-100 text-blue-900">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Info */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Our Contact Information
            </h3>
            <p className="text-lg mb-2">
              <strong>Email:</strong> ssvfoodandbeverages@gmail.com
            </p>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> +918464801112
            </p>
            <p className="text-lg mb-2">
              <strong>Address:</strong> SSV Foods and Beverages, Head Office :
              202, Esha Vasyam, Cyber Hills Colony, VIP Hills, Silicon Valley,
              Hi-Tech City, Hyderabad, 500081 <br></br> Office : SQ NO: 184/AA,
              186/AA, Gudur Village, Vikarabad, Telangana - 501502
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Send Us a Message
            </h3>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg text-blue-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-white border rounded-lg shadow-md text-blue-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg text-blue-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-white border rounded-lg shadow-md text-blue-900"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-blue-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white border rounded-lg shadow-md text-blue-900"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-lg shadow-md hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-200 text-blue-900 py-4 text-center">
        <p>&copy; Aethos Vision Labs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
