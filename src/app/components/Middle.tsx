"use client";

import React from "react";
import { motion } from "framer-motion";

const Middle = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Images Container */}
      <div className="p-4 h-screen">
        <motion.div
          className="h-full md:h-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/middleimage.png"
            alt="100% plastic neutral"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          className="relative h-full md:h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/lastimage.jpg"
            alt="100% plastic neutral"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Middle;
