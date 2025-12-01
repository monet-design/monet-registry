"use client";

import { motion } from "motion/react";
import { useState } from "react";
import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#0A0610",      // Deep purple/black background
    titleGold: "#BFA040",       // Gold title color
    accent: "#7347AD",          // Purple accent/button
    accentHover: "#8455C0",     // Button hover
    inputBg: "#140E1F",         // Dark purple input background
    inputBorder: "#2A1F3D",     // Input border
    inputFocus: "#7347AD",      // Input focus border
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface JeffWallContactFormProps {
  title?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  buttonText?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export default function JeffWallContactForm({
  title = "contact",
  nameLabel = "Name",
  namePlaceholder = "Your name",
  emailLabel = "Email",
  emailPlaceholder = "your@email.com",
  messageLabel = "Message",
  messagePlaceholder = "How can I help?",
  buttonText = "Send Message",
  onSubmit,
}: JeffWallContactFormProps) {
  const colors = COLORS.light;
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
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: colors.background }}>
      {/* Background gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(75, 40, 120, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-xl px-6 sm:px-8 lg:max-w-2xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl sm:text-4xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: colors.titleGold,
          }}
        >
          {title}
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white"
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
                style={{
                  backgroundColor: colors.inputBg,
                  borderColor: colors.inputBorder,
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = colors.inputFocus}
                onBlur={(e) => e.currentTarget.style.borderColor = colors.inputBorder}
                className="w-full rounded-lg border px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:ring-1"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
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
                className="w-full rounded-lg border border-[#2A1F3D] bg-[#140E1F] px-4 py-3 text-sm text-white placeholder-[#6B6B7B] transition-colors duration-200 focus:border-[#7347AD] focus:outline-none focus:ring-1 focus:ring-[#7347AD]"
              />
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-white"
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
              className="w-full resize-none rounded-lg border border-[#2A1F3D] bg-[#140E1F] px-4 py-3 text-sm text-white placeholder-[#6B6B7B] transition-colors duration-200 focus:border-[#7347AD] focus:outline-none focus:ring-1 focus:ring-[#7347AD]"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <button
              type="submit"
              style={{ backgroundColor: colors.accent }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.accentHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.accent}
              className="rounded-full px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2"
            >
              {buttonText}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
