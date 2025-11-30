"use client";

import { motion } from "motion/react";
import "./font.css";

interface CodingBioProps {
  title?: string;
  fields?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    company?: string;
    message?: string;
  };
  submitText?: string;
  onSubmit?: (data: FormData) => void;
}

// 3D Isometric Cube Component
function IsometricCube({
  className,
  accentColor = "#F7F273",
  strokeColor = "#C5C5B8",
  fillOpacity = 0.15,
}: {
  className?: string;
  accentColor?: string;
  strokeColor?: string;
  fillOpacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 80 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top face */}
      <path
        d="M40 0L80 23V23L40 46L0 23V23L40 0Z"
        fill={strokeColor}
        fillOpacity={fillOpacity}
        stroke={strokeColor}
        strokeWidth="1"
      />
      {/* Left face */}
      <path
        d="M0 23L40 46V92L0 69V23Z"
        fill={accentColor}
        fillOpacity={0.6}
        stroke={strokeColor}
        strokeWidth="1"
      />
      {/* Right face */}
      <path
        d="M80 23L40 46V92L80 69V23Z"
        fill={strokeColor}
        fillOpacity={fillOpacity}
        stroke={strokeColor}
        strokeWidth="1"
      />
    </svg>
  );
}

// Outline-only Cube (wireframe style)
function WireframeCube({
  className,
  strokeColor = "#C5C5B8",
}: {
  className?: string;
  strokeColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 80 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top face */}
      <path
        d="M40 0L80 23L40 46L0 23L40 0Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
      />
      {/* Left face */}
      <path
        d="M0 23L40 46V92L0 69V23Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
      />
      {/* Right face */}
      <path
        d="M80 23L40 46V92L80 69V23Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
      />
    </svg>
  );
}

// Small floating rectangle accent
function FloatingRect({
  className,
  fillColor = "#F7F273",
  strokeColor = "#C5C5B8",
}: {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="29"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1"
        transform="rotate(-15 20 15)"
      />
    </svg>
  );
}

// Parallelogram shape
function Parallelogram({
  className,
  fillColor = "#F7F273",
  strokeColor = "#C5C5B8",
  filled = false,
}: {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 50 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 0H50L40 35H0L10 0Z"
        fill={filled ? fillColor : "none"}
        stroke={strokeColor}
        strokeWidth="1"
      />
    </svg>
  );
}

export default function CodingBio({
  title = "Contact Coding Bio",
  fields = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    company: "Company",
    message: "Message",
  },
  submitText = "Submit",
  onSubmit,
}: CodingBioProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      const formData = new FormData(e.currentTarget);
      onSubmit(formData);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F8F7F3] px-4 py-16 sm:px-6 lg:px-8">
      {/* Decorative Elements */}
      {/* Top Left - Wireframe Cube */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-[5%] top-[3%]"
      >
        <WireframeCube className="h-16 w-16 opacity-60 sm:h-20 sm:w-20" />
      </motion.div>

      {/* Top Right - Isometric Cube with yellow accent */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-[8%] top-[8%]"
      >
        <IsometricCube className="h-20 w-20 sm:h-24 sm:w-24" />
      </motion.div>

      {/* Left Middle - Yellow Parallelogram */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-[3%] top-[55%] -translate-y-1/2"
      >
        <Parallelogram className="h-10 w-14 -rotate-12 sm:h-12 sm:w-16" filled />
      </motion.div>

      {/* Bottom Left - Wireframe Cube */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-[8%] left-[8%]"
      >
        <WireframeCube className="h-14 w-14 opacity-50 sm:h-16 sm:w-16" />
      </motion.div>

      {/* Bottom Right - Complex Cube Arrangement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-[5%] right-[5%]"
      >
        <div className="relative">
          <WireframeCube className="h-20 w-20 sm:h-24 sm:w-24" />
          <IsometricCube
            className="absolute -left-4 -top-2 h-12 w-12 sm:h-14 sm:w-14"
            accentColor="#F7F273"
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-lg">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center font-serif text-2xl text-gray-900 sm:text-3xl"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {title}
        </motion.h1>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          {/* First Name */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <input
              type="text"
              name="firstName"
              placeholder={fields.firstName}
              className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </motion.div>

          {/* Last Name */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <input
              type="text"
              name="lastName"
              placeholder={fields.lastName}
              className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <input
              type="email"
              name="email"
              placeholder={fields.email}
              className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <input
              type="text"
              name="company"
              placeholder={fields.company}
              className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <textarea
              name="message"
              placeholder={fields.message}
              rows={5}
              className="w-full resize-none rounded-sm border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="pt-2"
          >
            <button
              type="submit"
              className="rounded-sm bg-[#F7F273] px-6 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-[#e9e45e] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#F7F273] focus:ring-offset-2"
            >
              {submitText}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
