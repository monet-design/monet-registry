"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#FBFBFB",
    cardBackground: "#FFFFFF",
    heading: "#1a1a1a",
    description: "#888888",
    divider: "#d4d4d4",
    link: "#1a1a1a",
    linkHover: "#888888",
    inputBorder: "#e4e4e4",
    inputFocus: "#1a1a1a",
    placeholder: "#aaaaaa",
    buttonBackground: "#1a1a1a",
    buttonHover: "#333333",
    buttonText: "#ffffff",
  },
  dark: {
    background: "#1a1a1a",
    cardBackground: "#2a2a2a",
    heading: "#ffffff",
    description: "#b4b4b4",
    divider: "#444444",
    link: "#ffffff",
    linkHover: "#b4b4b4",
    inputBorder: "#444444",
    inputFocus: "#ffffff",
    placeholder: "#666666",
    buttonBackground: "#ffffff",
    buttonHover: "#e0e0e0",
    buttonText: "#1a1a1a",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface EightPxStudioProps {
  mode?: "light" | "dark";
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
  mode = "light",
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
  const colors = COLORS[mode];
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
    <section className="min-h-screen flex items-center justify-center px-6 py-16 md:px-12 lg:px-24" style={{ backgroundColor: colors.background }}>
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
              className="text-2xl md:text-3xl font-semibold tracking-tight"
              style={{ color: colors.heading }}
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm leading-relaxed"
              style={{ color: colors.description }}
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-12 h-px"
            style={{ backgroundColor: colors.divider }}
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-sm" style={{ color: colors.heading }}>{ctaQuestion}</p>
            <a
              href={ctaLinkHref}
              className="inline-flex items-center gap-2 text-sm group"
              style={{ color: colors.link }}
            >
              <span className="underline underline-offset-4 transition-colors" style={{ textDecorationColor: colors.link }}>
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
          className="md:w-2/3 p-8 md:p-10 lg:p-12"
          style={{ backgroundColor: colors.cardBackground }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium"
                style={{ color: colors.heading }}
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
                className="w-full bg-transparent border-0 border-b py-3 text-sm focus:outline-none transition-colors"
                style={{
                  borderColor: colors.inputBorder,
                  color: colors.heading,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = colors.inputFocus)}
                onBlur={(e) => (e.currentTarget.style.borderColor = colors.inputBorder)}
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium"
                style={{ color: colors.heading }}
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
                className="w-full bg-transparent border-0 border-b py-3 text-sm focus:outline-none transition-colors"
                style={{
                  borderColor: colors.inputBorder,
                  color: colors.heading,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = colors.inputFocus)}
                onBlur={(e) => (e.currentTarget.style.borderColor = colors.inputBorder)}
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium"
                style={{ color: colors.heading }}
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
                className="w-full bg-transparent border-0 border-b py-3 text-sm focus:outline-none transition-colors resize-none"
                style={{
                  borderColor: colors.inputBorder,
                  color: colors.heading,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = colors.inputFocus)}
                onBlur={(e) => (e.currentTarget.style.borderColor = colors.inputBorder)}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm font-medium px-8 py-3 transition-colors"
              style={{
                backgroundColor: colors.buttonBackground,
                color: colors.buttonText,
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.buttonHover)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.buttonBackground)}
            >
              {submitButtonText}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
