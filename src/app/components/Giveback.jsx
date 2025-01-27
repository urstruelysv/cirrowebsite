"use client";
import { React } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const GiveBack = () => {
  return (
    <div className="w-full my-0 px-4">
      {" "}
      {/* Container with controlled spacing */}
      <Link href="/giveback" className="block w-full">
        <section className="relative w-full h-full cursor-pointer overflow-hidden my-0">
          <motion.div
            className="w-full h-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/giveback.png"
              alt="100% plastic neutral"
              className="w-full h-full object-cover opacity-80 rounded-lg aspect-[16/9]"
            />
          </motion.div>
        </section>
      </Link>
    </div>
  );
};

export default GiveBack;
