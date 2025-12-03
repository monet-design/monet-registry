"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface EightPixelProps {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  formNameLabel?: string;
  formNamePlaceholder?: string;
  formEmailLabel?: string;
  formEmailPlaceholder?: string;
  formMessageLabel?: string;
  formMessagePlaceholder?: string;
  formSubmitText?: string;
  profileName?: string;
  profileImageSrc?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

// Arrow Icon Component for CTA buttons
function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <ArrowDownRight
      className={className}
      size={16}
      strokeWidth={2.5}
    />
  );
}

// Main Component
export default function EightPixel({
  mode = "light",
  headline = "Ready to partner\nfor growth?",
  subheadline = "Get in touch to explore how we can build\na partnership that delivers lasting growth.",
  ctaButtonText = "BOOK A CALL",
  ctaButtonHref = "#",
  formNameLabel = "Name",
  formNamePlaceholder = "Full Name",
  formEmailLabel = "Email Address",
  formEmailPlaceholder = "Email Address",
  formMessageLabel = "Message",
  formMessagePlaceholder = "Your Message",
  formSubmitText = "SEND MESSAGE",
  profileName = "MATT",
  profileImageSrc = "/registry/eight-pixel/matt-portrait.jpg",
  onSubmit,
}: EightPixelProps) {
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="relative w-full min-h-[500px] bg-[#0155CF]">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left Column - Headline and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Headline */}
            <h2 className="font-serif text-3xl italic font-normal text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15] tracking-tight whitespace-pre-line">
              {headline}
            </h2>

            {/* Subheadline */}
            <p className="mt-6 text-sm text-white/80 leading-relaxed max-w-xs whitespace-pre-line">
              {subheadline}
            </p>

            {/* CTA Button */}
            <motion.a
              href={ctaButtonHref}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white hover:opacity-80 transition-opacity w-fit"
            >
              {ctaButtonText}
              <ArrowIcon />
            </motion.a>

            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <div className="w-[120px] h-[120px] overflow-hidden">
                <Image
                  src={profileImageSrc}
                  alt={profileName}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-[11px] font-medium tracking-widest text-white/90">
                [ {profileName} ]
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold tracking-wide text-white">
                  {formNameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={formNamePlaceholder}
                  className="w-full bg-transparent border-0 border-b border-white/30 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold tracking-wide text-white">
                  {formEmailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={formEmailPlaceholder}
                  className="w-full bg-transparent border-0 border-b border-white/30 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold tracking-wide text-white">
                  {formMessageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={formMessagePlaceholder}
                  rows={2}
                  className="w-full bg-transparent border-0 border-b border-white/30 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white hover:opacity-80 transition-opacity"
              >
                {formSubmitText}
                <ArrowIcon />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
