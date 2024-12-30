"use client";

import React from "react";
import { motion } from "framer-motion";

const Ourstory: React.FC = () => {
  return (
    <div className="bg-blue-200 min-h-screen font-sans">
      {/* Header Section */}
      <header
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/mountain.png')" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.h1
            className="text-5xl font-bold text-blue-700 mt-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Cirro - The Story
          </motion.h1>
          <motion.p
            className="text-lg mt-2 text-center text-blue-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Welcome to Cirro, where purity meets sophistication.
          </motion.p>
        </div>
      </header>

      {/* Key Features Section */}
      <section className="py-10 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              icon: "🏔️",
              title: "Sophisticated Taste",
              description:
                "Light, crisp, and refined for those who value the finer things.",
            },
            {
              icon: "♻️",
              title: "Sustainability Commitment",
              description:
                "Made from 100% recycled PET, our bottles reflect our commitment to sustainability",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-lg mt-8 text-blue-900 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Cirro was born from a desire to elevate the everyday hydration
          experience. Inspired by the highest and purest clouds in the sky, we
          bring you water that stands above the rest in purity, taste, and
          elegance.
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="py-10 bg-blue-100 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover the Difference
        </motion.h2>
        <motion.div
          className="relative overflow-hidden rounded-lg mx-auto w-11/12 md:w-2/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Cirro Video"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-200 text-blue-900 py-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; AethosVisionLabs. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default Ourstory;
