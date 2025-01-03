"use client";

import { React } from "react";
import Link from "next/link"; // Import Link from next/link
import { motion } from "framer-motion";

const GiveBack = () => {
  return (
    <Link href="/giveback">
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center shadow-lg cursor-pointer overflow-hidden">
        {/* Motion-enhanced image */}
        <motion.img
          src="/giveback.png"
          alt="100% plastic neutral"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>
    </Link>
  );
};

export default GiveBack;
