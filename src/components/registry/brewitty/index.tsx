"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface BrewittyProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  nameLabel?: string;
  phoneLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  buttonText?: string;
  phoneImage?: string;
  backgroundColor?: string;
  onSubmit?: (data: {
    name: string;
    phone: string;
    email: string;
    message: string;
  }) => void;
}

export default function Brewitty({
  mode = "light",
  title = "Your Place, Our Place, or Zoom?\nLet's Chat!",
  subtitle = "Hit us up, and let's create something that keeps your audience coming\nback for refills.",
  nameLabel = "Name",
  phoneLabel = "Phone Number",
  emailLabel = "Email ID",
  buttonText = "Let's Get Brewing",
  messageLabel = "Message",
  phoneImage = "/registry/brewitty/vintage-phone.png",
  backgroundColor = "#AFCCD0",
  onSubmit,
}: BrewittyProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit?.({
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    });
  };

  const titleLines = title.split("\n");

  return (
    <section
      className="relative w-full overflow-hidden px-6 py-16 sm:px-8 lg:px-12"
      style={{ backgroundColor }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          {titleLines.map((line, index) => (
            <h2
              key={index}
              className="font-dm-serif text-2xl font-bold italic text-[#2D2D2D] sm:text-3xl lg:text-4xl"
            >
              {line}
            </h2>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-xl text-center text-xs leading-relaxed text-[#2D2D2D] sm:text-sm"
        >
          {subtitle.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < subtitle.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl"
        >
          {/* Top Row - Name, Phone, Email */}
          <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Name Field */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 text-xs font-semibold text-[#2D2D2D]"
              >
                {nameLabel}
                <span className="text-[#2D2D2D]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border-b border-[#2D2D2D]/30 bg-transparent pb-2 text-sm text-[#2D2D2D] outline-none transition-colors placeholder:text-[#2D2D2D]/40 focus:border-[#2D2D2D]"
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-2 text-xs font-semibold text-[#2D2D2D]"
              >
                {phoneLabel}
                <span className="text-[#2D2D2D]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="border-b border-[#2D2D2D]/30 bg-transparent pb-2 text-sm text-[#2D2D2D] outline-none transition-colors placeholder:text-[#2D2D2D]/40 focus:border-[#2D2D2D]"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-xs font-semibold text-[#2D2D2D]"
              >
                {emailLabel}
                <span className="text-[#2D2D2D]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border-b border-[#2D2D2D]/30 bg-transparent pb-2 text-sm text-[#2D2D2D] outline-none transition-colors placeholder:text-[#2D2D2D]/40 focus:border-[#2D2D2D]"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative mb-8">
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-semibold text-[#2D2D2D]"
            >
              {messageLabel}
              <span className="text-[#2D2D2D]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full border-b border-[#2D2D2D]/30 bg-transparent pb-2 text-sm text-[#2D2D2D] outline-none transition-colors placeholder:text-[#2D2D2D]/40 focus:border-[#2D2D2D]"
            />
          </div>

          {/* Vintage Phone Image and Submit Button */}
          <div className="relative flex flex-col items-center">
            {/* Phone Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative h-48 w-48 sm:h-56 sm:w-56"
            >
              <Image
                src={phoneImage}
                alt="Vintage rotary phone"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 192px, 224px"
              />

              {/* Speech bubble button overlaying the phone */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-1/2 top-[5%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
              >
                <div className="relative">
                  <div className="rounded-full border border-[#2D2D2D]/20 bg-white px-4 py-2 text-xs font-semibold text-[#2D2D2D] shadow-sm transition-shadow hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm">
                    {buttonText}
                  </div>
                  {/* Speech bubble tail */}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[2px]">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        d="M6 8L0 0H12L6 8Z"
                        fill="white"
                        stroke="rgba(45, 45, 45, 0.2)"
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />
                      <path d="M1 0H11L6 6.5L1 0Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
