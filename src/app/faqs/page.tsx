"use client";

import React from "react";
import { motion } from "framer-motion";

const FAQ: React.FC = () => {
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
            FAQs
          </motion.h1>
          <p className="text-lg mt-2 text-center text-blue-900">
            Find answers to your questions about Cirro.
          </p>
        </div>
      </header>

      {/* FAQ Section */}
      <main className="py-10 px-4 md:px-20 bg-blue-100 text-blue-900">
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              question: "What makes Cirro water unique?",
              answer:
                "Cirro water is inspired by the purest clouds and crafted to deliver unmatched purity, taste, and sophistication.",
            },
            {
              question: "Are your bottles eco-friendly?",
              answer:
                "Yes! Our bottles are made from 100% recycled PET, reflecting our commitment to sustainability.",
            },
            {
              question: "Where can I purchase Cirro water?",
              answer:
                "You can find Cirro water at major retailers and through our online store for home delivery.",
            },
            {
              question: "What is the source of Cirro water?",
              answer:
                "Cirro is natural mineral water sourced from pristine aquifers and carefully processed to ensure exceptional quality.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-200 text-blue-900 py-4 text-center">
        <p>&copy; AethosVisionLabs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FAQ;
