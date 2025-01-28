"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ApplyForDistributorship = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: {
      name: string;
      email: string;
      mobile: string;
      pincode: string;
      city: string;
      state: string;
    } = {
      name: "",
      email: "",
      mobile: "",
      pincode: "",
      city: "",
      state: "",
    };

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 5) {
      newErrors.name = "Name must be at least 5 characters long";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number is invalid";
    }

    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode number is invalid";
    }

    if (!formData.city) {
      newErrors.city = "City is required";
    }

    if (!formData.state) {
      newErrors.state = "State is required";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const response = await fetch("/api/apply", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Submission failed");
        }

        alert("Thank you for your application! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          pincode: "",
          city: "",
          state: "",
        });
      } catch (error: any) {
        alert(
          error.message || "Error submitting application. Please try again."
        );
      } finally {
        setLoading(false);
      }
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
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src="/quality-icon.png"
                  alt="Quality"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-bold mb-3 text-blue-800">
                  Unmatched Quality
                </h3>
                <p className="text-blue-600">
                  Our water is treated with RO + UV + Ozonization to ensure
                  maximum purity and taste.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src="/growth-icon.png"
                  alt="Growth"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-bold mb-3 text-blue-800">
                  Fastest Growing Brand
                </h3>
                <p className="text-blue-600">
                  We are one of India's fastest-growing packaged drinking water
                  brands with nationwide reach.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src="/support-icon.png"
                  alt="Support"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-bold mb-3 text-blue-800">
                  Comprehensive Support
                </h3>
                <p className="text-blue-600">
                  We offer robust marketing strategies, advertising, and
                  brand-building support to our distributors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="py-16 px-4 md:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">
            Start Your Journey with Us
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  placeholder="Enter your full name"
                  disabled={loading}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  placeholder="Enter your email"
                  disabled={loading}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  placeholder="Enter 10-digit mobile number"
                  disabled={loading}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="pincode"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.pincode ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  placeholder="Enter 6-digit pincode"
                  disabled={loading}
                />
                {errors.pincode && (
                  <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  placeholder="Enter your city"
                  disabled={loading}
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  placeholder="Enter your state"
                  disabled={loading}
                />
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </motion.button>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-blue-400 text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100">
            &copy; {new Date().getFullYear()} aethos vison labs. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ApplyForDistributorship;
