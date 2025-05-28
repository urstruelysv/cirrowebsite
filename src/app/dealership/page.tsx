"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ApplyForDistributorship = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Simple email validation
      if (!email.includes("@") || !email.includes(".")) {
        throw new Error("Please enter a valid email address");
      }

      // Simulate a small delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 500));

      setSuccess(true);
      setEmail("");
    } catch (error: any) {
      setError(error.message || "Please enter a valid email address");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-100 min-h-screen font-sans">
      <header
        className="relative w-full h-96 bg-cover bg-center mb-12"
        style={{ backgroundImage: "url('/mountain2.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-60"></div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-center text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Apply for Distributorship
          </motion.h1>
          <p className="text-lg md:text-xl text-center text-blue-100 max-w-2xl mx-auto">
            Join India's fastest growing packaged water brand and expand your
            business horizons with our innovative solutions.
          </p>
        </div>
      </header>

      <section className="py-16 px-4 md:px-8 lg:px-20 text-blue-900 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Partner with Cirro?
          </motion.h2>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto mb-12">
            Cirro has become a household name in India, known for its purity,
            advanced treatment process, and commitment to sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: "/uv.jpg",
                title: "Unmatched Quality",
                desc: "Our water is treated with RO + UV + Ozonization to ensure maximum purity and taste.",
              },
              {
                icon: "/grwoth.jpeg",
                title: "Fastest Growing Brand",
                desc: "We are one of India's fastest-growing packaged drinking water brands with nationwide reach.",
              },
              {
                icon: "/mark.jpeg",
                title: "Comprehensive Support",
                desc: "We offer robust marketing strategies, advertising, and brand-building support to our distributors.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="text-xl font-bold mb-3 text-blue-800">
                    {item.title}
                  </h3>
                  <p className="text-blue-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <main className="py-16 px-4 md:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">
            Start Your Journey with Cirro
          </h3>
          <p className="text-center text-gray-600 mb-6">
            For Distributorship drop a message
          </p>

          <div className="space-y-6 mt-2">
            <motion.a
              href="https://wa.me/918464801112"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 w-full"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Text us on WhatsApp
            </motion.a>

            <div className="mt-8">
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Drop your email and we'll contact you
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      disabled={loading}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      required
                    />
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </motion.button>
                  </div>
                </div>
              </form>
              {error && (
                <p className="text-red-600 mt-2 text-sm text-center">{error}</p>
              )}
              {success && (
                <p className="text-green-600 mt-2 text-sm text-center">
                  Email submitted successfully!
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplyForDistributorship;
