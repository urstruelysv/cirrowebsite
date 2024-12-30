"use client";

import React from "react";
import { motion } from "framer-motion";

const Middle = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center shadow-lg">
      {/* Motion-enhanced image */}
      <motion.img
        src="/middleimage.png"
        alt="100% plastic neutral"
        className="w-full h-full object-cover opacity-80 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          maxHeight: "70vh",
          maxWidth: "100vw",
          width: "100%",
          height: "100%",
        }}
      />
    </section>
  );
};

export default Middle;
