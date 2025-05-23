"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Vision: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header Section */}
      <header className="relative w-full h-64">
        {/* Image Component for Background */}
        <Image
          src="/mountain1.jpeg" // Make sure this image is inside the 'public' folder
          alt="Mountain Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200"></div>

        {/* Vision Text */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.h1
            className="text-6xl font-bold text-blue-900 mt-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Vision
          </motion.h1>
          <p className="text-lg mt-2 text-center text-blue-700">
            Empowering a healthier and sustainable future, one drop at a time.
          </p>
        </div>
      </header>

      {/* Vision Statement Section */}
      <main className="py-12 px-4 md:px-20 bg-blue-100 text-blue-900">
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-semibold text-blue-700 mb-6">
              Our Mission to Lead the Future of Purity
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed">
              At Cirro, our vision is to become the **fastest-growing packaged
              drinking water brand in India**, bringing purity, sustainability,
              and innovation to every bottle. Our commitment to providing clean,
              safe, and accessible drinking water is not just a business goal,
              but a movement to change how India consumes water. We see a future
              where every Indian can easily access premium, eco-friendly, and
              trusted water, leading the charge in health-conscious choices.
            </p>
          </motion.section>

          {/* Values Section */}
          <section className="text-center bg-white py-12 shadow-lg rounded-lg">
            <motion.h3
              className="text-3xl font-semibold text-blue-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Core Values
            </motion.h3>
            <div className="flex justify-around space-x-6">
              <div className="w-1/4 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl bg-blue-100 rounded-full shadow">
                  <span role="img" aria-label="Purity">
                    💧
                  </span>
                </div>
                <p className="font-medium">Purity</p>
                <p className="text-sm text-gray-700">
                  Cirro stands for unmatched purity in every drop of water we
                  deliver, ensuring health and freshness.
                </p>
              </div>
              <div className="w-1/4 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl bg-blue-100 rounded-full shadow">
                  <span role="img" aria-label="Sustainability">
                    🌱
                  </span>
                </div>
                <p className="font-medium">Sustainability</p>
                <p className="text-sm text-gray-700">
                  We are committed to sustainability by using eco-friendly
                  bottles and working towards a greener tomorrow.
                </p>
              </div>
              <div className="w-1/4 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl bg-blue-100 rounded-full shadow">
                  <span role="img" aria-label="Innovation">
                    💡
                  </span>
                </div>
                <p className="font-medium">Innovation</p>
                <p className="text-sm text-gray-700">
                  At Cirro, we constantly innovate to offer the best quality,
                  cutting-edge technology, and service.
                </p>
              </div>
            </div>
          </section>

          {/* Growth & Expansion Section */}
          <section className="text-center py-12">
            <motion.h3
              className="text-3xl font-semibold text-blue-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              A Vision for Unmatched Growth
            </motion.h3>
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              Cirro is on a rapid growth trajectory, poised to be the leading
              name in packaged drinking water in India. Our expansion into new
              markets, coupled with our increasing brand presence, reflects our
              commitment to excellence and scalability. As we innovate with our
              water purification process, we also aim to positively impact the
              environment and local communities.
            </p>
            <motion.div
              className="flex justify-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/grwoth.jpeg"
                alt="Growth Chart"
                className="w-2/3 shadow-lg rounded-lg"
              />
            </motion.div>
          </section>

          {/* Call to Action */}
          <section className="bg-blue-700 text-white py-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h4
                className="text-3xl font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Join the Cirro Movement
              </motion.h4>
              <p className="text-xl mb-6">
                Be a part of the fastest-growing brand in India. Whether you are
                a distributor, a retailer, or just someone passionate about
                purity, there's a place for you in the Cirro family.
              </p>
              <Link
                href="/dealership"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold"
              >
                Apply for Distributorship
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-200 text-blue-900 py-4 text-center">
        <p>&copy; Athoes Vison Labs . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Vision;
