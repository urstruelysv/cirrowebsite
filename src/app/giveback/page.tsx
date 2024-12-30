"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GiveBackPage: React.FC = () => {
  return (
    <>
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
            className="text-4xl font-bold text-blue-700 mt-4 text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Cirro - A Step Towards Change
          </motion.h1>
          <motion.p
            className="text-lg mt-2 text-center text-blue-700"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Empowering futures, one bottle at a time.
          </motion.p>
        </div>
      </header>

      {/* Vision Section */}
      <section className="py-12 bg-blue-200 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Empowering Futures, One Bottle at a Time
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Cirro, we transform your everyday purchase into a life-changing
              opportunity for underprivileged children. Education is the
              foundation of progress, and we are here to make a difference.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every case you buy contributes to school supplies, scholarships,
              and resources that fuel brighter tomorrows.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/2.jpg"
              alt="Cirro for Education Vision"
              layout="responsive"
              width={800}
              height={400}
              className="rounded-md shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-blue-200 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/1.jpg"
              alt="How It Works"
              layout="responsive"
              width={1000}
              height={500}
              className="rounded-md shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              With every case of Cirro water you purchase, you are directly
              supporting a child's education. From school supplies to
              scholarships, your choice creates a ripple of hope and
              opportunity.
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Step 1: Purchase Cirro Water</li>
              <li>Step 2: Funds Allocated to Education</li>
              <li>Step 3: Children Empowered</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-400 text-white px-6 md:px-20">
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Join the Movement
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Every drop counts. Share your journey with #StepTowardsChange and
            inspire others to contribute. Together, we can build a brighter
            future.
          </motion.p>
          <motion.button
            className="bg-white text-blue-700 font-bold py-3 px-6 rounded-md shadow-md hover:bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Buy a Case, Support a Future
          </motion.button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-400 text-white py-6 px-6 md:px-20">
        <div className="text-center">
          <p className="text-sm">
            &copy; AethosVisionLabs. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default GiveBackPage;
