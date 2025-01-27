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
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Create email content with form data
      const emailSubject = "New Distributorship Application";
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Pincode: ${formData.pincode}
City: ${formData.city}
State: ${formData.state}
      `;

      // Create mailto link
      const mailtoLink = `mailto:saivamshig404@gmail.com?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      // Show success message
      alert("Thank you for your application! Redirecting to email client...");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-100 min-h-screen font-sans">
      {/* Header Section */}
      <header
        className="relative w-full h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('/mountain2.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-700 opacity-50"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
          <motion.h1
            className="text-5xl font-extrabold text-center text-blue-900 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Apply for Distributorship
          </motion.h1>
          <p className="text-xl mt-2 text-center text-blue-700">
            Join India's fastest growing packaged water brand and expand your
            business horizons.
          </p>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-20 text-blue-900">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <motion.h2
            className="text-4xl font-semibold text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Partner with Cirro?
          </motion.h2>
          <p className="text-lg">
            Cirro has become a household name in India, known for its purity,
            advanced treatment process, and commitment to sustainability. Here's
            why you should become a distributor:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/quality-icon.png"
                alt="Quality"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Unmatched Quality</h3>
              <p className="text-center">
                Our water is treated with RO + UV + Ozonization to ensure
                maximum purity and taste.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/growth-icon.png"
                alt="Growth"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Fastest Growing Brand</h3>
              <p className="text-center">
                We are one of India's fastest-growing packaged drinking water
                brands with nationwide reach.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/support-icon.png"
                alt="Support"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Comprehensive Support</h3>
              <p className="text-center">
                We offer robust marketing strategies, advertising, and
                brand-building support to our distributors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <main className="py-12 px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.mobile ? "border-red-500" : ""
                }`}
              />
              {errors.mobile && (
                <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-700"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.pincode ? "border-red-500" : ""
                }`}
              />
              {errors.pincode && (
                <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.city ? "border-red-500" : ""
                }`}
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-600">{errors.city}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.state ? "border-red-500" : ""
                }`}
              />
              {errors.state && (
                <p className="mt-1 text-sm text-red-600">{errors.state}</p>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-200 text-blue-900 py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Cirro Water. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ApplyForDistributorship;
