"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface YogaWithTanyaProps {
  heading?: string;
  description?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
  backgroundColor?: string;
  buttonColor?: string;
}

export default function YogaWithTanya({
  heading = "Get in touch",
  description = "Send me a message and we will schedule an introductory call to discuss how I can help you in your yoga journey.",
  nameLabel = "Name",
  namePlaceholder = "",
  emailLabel = "Email",
  emailPlaceholder = "",
  messageLabel = "Message",
  messagePlaceholder = "Type your message...",
  submitButtonText = "Submit",
  onSubmit,
  backgroundColor = "#E8E6E7",
  buttonColor = "#C4BAAD",
}: YogaWithTanyaProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center py-16 px-4 md:px-8"
      style={{ backgroundColor }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');
      `}</style>
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left Column - Heading and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2
              className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {heading}
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm">
              {description}
            </p>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs text-gray-700 tracking-wide"
              >
                {nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={namePlaceholder}
                className="w-full px-3 py-2.5 bg-white border border-gray-400 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs text-gray-700 tracking-wide"
              >
                {emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={emailPlaceholder}
                className="w-full px-3 py-2.5 bg-white border border-gray-400 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs text-gray-700 tracking-wide"
              >
                {messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={messagePlaceholder}
                rows={5}
                className="w-full px-3 py-2.5 bg-white border border-gray-400 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-600 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: buttonColor }}
            >
              {submitButtonText}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
