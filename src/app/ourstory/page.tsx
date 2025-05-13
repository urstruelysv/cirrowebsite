"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurStory: React.FC = () => {
  return (
    <div className="bg-blue-200 min-h-screen font-sans">
      {/* Header Section */}
      <header className="relative w-full h-64">
        <Image
          src="/mountain1.jpeg"
          alt="Mountain Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200"></div>
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
                "Made from 100% recycled PET, our bottles reflect our commitment to sustainability.",
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
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Cirro was born from a simple yet powerful vision – to elevate the
            everyday act of hydration into something extraordinary. The idea
            took root on a quiet, peaceful day, when a lone observer gazed at
            the sky and marveled at the cirro clouds – high, pure, and graceful,
            floating above everything else.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Inspired by these clouds, which symbolize the highest form of purity
            and elegance, a commitment was made: to create water that would
            embody the same level of purity, taste, and refinement. Thus, Cirro
            Wtr was born, crafted to stand above the rest in every way.
          </motion.p>
        </motion.div>
      </section>

      {/* Video Section */}
      {/* <section className="py-10 bg-blue-100 text-center">
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
      </section> */}

      {/* Instagram Feed Section */}
      <section className="py-16 bg-gradient-to-b from-blue-100 to-blue-200">
        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-blue-700 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Follow Our Journey
          </motion.h2>
          <motion.p
            className="text-lg text-blue-900 text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stay connected with Cirro on Instagram
          </motion.p>
          <motion.div
            className="bg-white rounded-xl shadow-xl p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.instagram.com/cirro_water/embed"
                className="w-full h-[600px] border-0"
                title="Cirro Instagram Feed"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
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

export default OurStory;
