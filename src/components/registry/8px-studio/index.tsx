"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface EightPxStudioProps {
  title?: string;
  description?: string;
  ctaQuestion?: string;
  ctaLinkText?: string;
  ctaLinkHref?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export default function EightPxStudio({
  title = "Contact us",
  description = "Feel free to reach out to us with any question.",
  ctaQuestion = "Would you like to work with us?",
  ctaLinkText = "See our services",
  ctaLinkHref = "#",
  nameLabel = "Your Name",
  namePlaceholder = "",
  emailLabel = "Email Address",
  emailPlaceholder = "",
  messageLabel = "Message",
  messagePlaceholder = "",
  submitButtonText = "Submit",
  onSubmit,
}: EightPxStudioProps) {
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
    <section className="min-h-screen bg-[#FBFBFB] flex items-center justify-center px-6 py-16 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24"
      >
        {/* Left Sidebar */}
        <div className="md:w-1/3 flex flex-col gap-8">
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-[#888888] leading-relaxed"
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-12 h-px bg-[#d4d4d4]"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-sm text-[#1a1a1a]">{ctaQuestion}</p>
            <a
              href={ctaLinkHref}
              className="inline-flex items-center gap-2 text-sm text-[#1a1a1a] group"
            >
              <span className="underline underline-offset-4 decoration-[#1a1a1a] group-hover:decoration-[#888888] transition-colors">
                {ctaLinkText}
              </span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-2/3 bg-white p-8 md:p-10 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#1a1a1a]"
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
                className="w-full bg-transparent border-0 border-b border-[#e4e4e4] py-3 text-sm text-[#1a1a1a] placeholder:text-[#aaaaaa] focus:outline-none focus:border-[#1a1a1a] transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1a1a1a]"
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
                className="w-full bg-transparent border-0 border-b border-[#e4e4e4] py-3 text-sm text-[#1a1a1a] placeholder:text-[#aaaaaa] focus:outline-none focus:border-[#1a1a1a] transition-colors"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#1a1a1a]"
              >
                {messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={messagePlaceholder}
                rows={4}
                className="w-full bg-transparent border-0 border-b border-[#e4e4e4] py-3 text-sm text-[#1a1a1a] placeholder:text-[#aaaaaa] focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1a1a1a] text-white text-sm font-medium px-8 py-3 hover:bg-[#333333] transition-colors"
            >
              {submitButtonText}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
