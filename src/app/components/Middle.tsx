"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#00ADEF] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-300 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-1/4 top-1/4 w-32 h-32 rounded-full bg-blue-200 opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 z-10">
        {/* LEFT COLUMN: Text & Icons */}
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight">
              100% PLASTIC <span className="text-yellow-300">NEUTRAL</span>
            </h1>
            <div className="h-2 bg-white w-24 mt-2 mb-8 rounded-full"></div>
          </motion.div>

          <div className="space-y-6 text-xl md:text-2xl font-bold">
            <motion.div
              className="flex items-center p-4 rounded-lg bg-blue-500 bg-opacity-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(59, 130, 246, 0.4)",
              }}
            >
              <span className="mr-4 text-2xl md:text-3xl">♻️</span>
              <p>100% Recycled</p>
            </motion.div>
            <motion.div
              className="flex items-center p-4 rounded-lg bg-blue-500 bg-opacity-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(59, 130, 246, 0.4)",
              }}
            >
              <span className="mr-4 text-2xl md:text-3xl">✅</span>
              <p>BPA-Free</p>
            </motion.div>
            <motion.div
              className="flex items-center p-4 rounded-lg bg-blue-500 bg-opacity-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(59, 130, 246, 0.4)",
              }}
            >
              <span className="mr-4 text-2xl md:text-3xl">🧼</span>
              <p>Hygienic Containers</p>
            </motion.div>
          </div>

          <motion.button
            className="mt-8 bg-white text-[#00ADEF] px-8 py-4 rounded-full text-lg font-extrabold shadow-lg hover:bg-yellow-300 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            SHOP NOW
          </motion.button>
        </motion.div>

        {/* RIGHT COLUMN: Bottle Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              className="absolute -inset-4 rounded-full bg-blue-300 bg-opacity-30 blur-xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Replacing bottle image with a floating cloud illustration */}
            <svg
              width="220"
              height="140"
              viewBox="0 0 220 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              <motion.ellipse
                cx="110"
                cy="90"
                rx="90"
                ry="40"
                fill="#E0F2FE"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.ellipse
                cx="70"
                cy="70"
                rx="40"
                ry="30"
                fill="#BAE6FD"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.8, delay: 0.2 }}
              />
              <motion.ellipse
                cx="150"
                cy="70"
                rx="35"
                ry="25"
                fill="#7DD3FC"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.4 }}
              />
            </svg>
            <span className="mt-6 text-blue-100 text-xl font-semibold drop-shadow-lg">
              Pure as the clouds above
            </span>
          </div>
        </motion.div>
      </div>

      {/* IMPROVED WAVE CURVES AT THE BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* First wave layer */}
        <svg
          className="block w-full h-20 md:h-32 lg:h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{
              opacity: 0.7,
              d: "M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,144C1200,149,1320,203,1380,229.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
            }}
            animate={{
              opacity: 1,
              d: "M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,144C1200,149,1320,203,1380,229.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            fill="#FFF"
            fillOpacity="0.3"
          />
        </svg>

        {/* Second wave layer */}
        <svg
          className="block w-full h-16 md:h-28 lg:h-36 absolute bottom-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{
              opacity: 1,
              d: "M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,53.3C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
            }}
            animate={{
              d: "M0,64L60,80C120,96,240,128,360,144C480,160,600,160,720,144C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            fill="#FFF"
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  );
}
