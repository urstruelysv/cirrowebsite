"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Create a zoom effect on the mountain image based on scroll progress
  const mountainScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  const clouds = [
    { id: 1, initialX: "-50vw", animateX: "100vw", delay: 0 },
    { id: 2, initialX: "-70vw", animateX: "100vw", top: "10%", delay: 2 },
    { id: 3, initialX: "-90vw", animateX: "100vw", top: "30%", delay: 4 },
    { id: 4, initialX: "-110vw", animateX: "100vw", top: "50%", delay: 6 },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Mountain Image with Scroll-Based Zoom */}
      <motion.img
        src="/centerimage.png"
        alt="Mountain Background"
        className="absolute top-40 left-0 w-full h-full object-cover opacity-60"
        style={{ scale: mountainScale }}
      />

      {/* Cloud Animations */}
      {clouds.map((cloud) => (
        <motion.img
          key={cloud.id}
          src="/cloud.png"
          alt={`Cloud ${cloud.id}`}
          className="absolute transform"
          style={{
            top: cloud.top,
            maxWidth: "50%",
            minWidth: "50%",
            width: "100vw",
            height: "auto",
          }}
          initial={{ x: cloud.initialX, opacity: 0.8 }}
          animate={{ x: cloud.animateX }}
          transition={{
            duration: 10, // Adjust for the cloud speed
            delay: cloud.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Static Centered Bottle */}
      <div className="absolute inset-x-0 top-[20%] flex justify-center">
        <img
          src="/bottle.png"
          alt="Himalayan Water Bottle"
          className="w-[470px] h-[470px] object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Text Content */}
        <motion.div
          className="text-center space-y-8 max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-blue-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            The purest of all
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Elevate your every day hydration with
            <br /> Inspired by the highest and purest clouds in the sky
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            #ElevateYourHydration
          </motion.p>
        </motion.div>
      </div>

      {/* Fog Overlay */}
      <motion.img
        src="/fog.png"
        className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
}
