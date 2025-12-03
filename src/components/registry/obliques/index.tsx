"use client";

import { motion, type Variants } from "motion/react";
import { useState } from "react";

import "./font.css";

// CUSTOMIZATION
const CUSTOMIZATION = {};

interface ObliquesProps {
  mode?: "light" | "dark";
  headline?: string;
  firstNameLabel?: string;
  firstNamePlaceholder?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  organizationLabel?: string;
  organizationPlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  buttonText?: string;
  onSubmit?: (data: {
    firstName: string;
    name: string;
    organization: string;
    email: string;
    message: string;
  }) => void;
}

export default function Obliques({
  mode = "dark",
  headline = "Let's plan a first meeting?",
  firstNameLabel = "First name",
  firstNamePlaceholder = "Your first name",
  nameLabel = "Name",
  namePlaceholder = "Your name",
  organizationLabel = "Organization",
  organizationPlaceholder = "Your organization",
  emailLabel = "Email Address",
  emailPlaceholder = "Your email address",
  messageLabel = "Message",
  messagePlaceholder = "Give us as much information as possible about the project",
  buttonText = "Send",
  onSubmit,
}: ObliquesProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    name: "",
    organization: "",
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

  const inputContainerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative w-full min-h-screen bg-[#181810] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center lg:items-start"
          >
            <h1 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal italic text-white leading-[1.1]">
              {headline}
            </h1>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Row - First name & Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={inputContainerVariants}
                >
                  <label className="block text-xs font-medium text-white/80 mb-2 tracking-wide">
                    {firstNameLabel}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={firstNamePlaceholder}
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#ADE326] transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={inputContainerVariants}
                >
                  <label className="block text-xs font-medium text-white/80 mb-2 tracking-wide">
                    {nameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={namePlaceholder}
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#ADE326] transition-colors duration-300"
                  />
                </motion.div>
              </div>

              {/* Second Row - Organization & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={inputContainerVariants}
                >
                  <label className="block text-xs font-medium text-white/80 mb-2 tracking-wide">
                    {organizationLabel}
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder={organizationPlaceholder}
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#ADE326] transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={inputContainerVariants}
                >
                  <label className="block text-xs font-medium text-white/80 mb-2 tracking-wide">
                    {emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={emailPlaceholder}
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#ADE326] transition-colors duration-300"
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={inputContainerVariants}
              >
                <label className="block text-xs font-medium text-white/80 mb-2 tracking-wide">
                  {messageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={messagePlaceholder}
                  rows={3}
                  className="w-full bg-transparent border-0 border-b border-white/20 pb-2 text-sm text-white placeholder-white/40 outline-none focus:border-[#ADE326] transition-colors duration-300 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={inputContainerVariants}
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full bg-[#ADE326] px-8 py-3 text-sm font-medium text-[#181810] transition-all duration-300 hover:bg-[#c5f04a] hover:shadow-lg hover:shadow-[#ADE326]/20"
                >
                  {buttonText}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
