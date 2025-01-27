"use client";

import React from "react";
import { motion } from "framer-motion";

const Middle = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Images Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <motion.div
          className="relative h-full md:h-[400px]"
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
