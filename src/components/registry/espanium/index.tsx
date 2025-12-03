"use client";

import { useState } from "react";
import { motion } from "motion/react";
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
interface TeamMember {
  name: string;
  avatar: string;
}

interface EspaniumProps {
  mode?: "light" | "dark";
  heading?: string;
  highlightedText?: string;
  headingEnd?: string;
  subheading?: string;
  description?: string;
  namePlaceholder?: string;
  phonePlaceholder?: string;
  commentPlaceholder?: string;
  submitButtonText?: string;
  policyText?: string;
  policyLinkText?: string;
  teamMembers?: TeamMember[];
  accentColor?: string;
  onSubmit?: (data: { name: string; phone: string; comment: string }) => void;
}

// Default team members
const defaultTeamMembers: TeamMember[] = [
  {
    name: "Aleksey Ch.",
    avatar: "/registry/espanium/aleksey-ch.jpg",
  },
  {
    name: "Aleksey K.",
    avatar: "/registry/espanium/aleksey-k.jpg",
  },
];

// Main Component
export default function Espanium({
  mode = "light",
  heading = "Start your smooth and faster way to get your ",
  highlightedText = "Spanish residence permit",
  headingEnd = " now",
  subheading = "Leave a request for a free consultation",
  description = "We will contact you to choose a time that is\nconvenient for you. Meet online for 20 minutes to\nanswer basic questions.",
  namePlaceholder = "Fill in your name",
  phonePlaceholder = "Your phone or messenger",
  commentPlaceholder = "Post your comments here",
  submitButtonText = "Send request",
  policyText = "By submitting, you agree\nto the ",
  policyLinkText = "Data Processing Policy",
  teamMembers = defaultTeamMembers,
  accentColor = "#8B9CDD",
  onSubmit,
}: EspaniumProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleInputChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="w-full bg-[#EEEEEE] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="border-b border-[#CCCCCC]">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder={namePlaceholder}
                  className="w-full bg-transparent py-3 text-sm text-[#333333] placeholder-[#999999] outline-none focus:placeholder-[#666666]"
                />
              </div>

              {/* Phone Input */}
              <div className="border-b border-[#CCCCCC]">
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder={phonePlaceholder}
                  className="w-full bg-transparent py-3 text-sm text-[#333333] placeholder-[#999999] outline-none focus:placeholder-[#666666]"
                />
              </div>

              {/* Comment Input */}
              <div className="border-b border-[#CCCCCC]">
                <input
                  type="text"
                  value={formData.comment}
                  onChange={(e) => handleInputChange("comment", e.target.value)}
                  placeholder={commentPlaceholder}
                  className="w-full bg-transparent py-3 text-sm text-[#333333] placeholder-[#999999] outline-none focus:placeholder-[#666666]"
                />
              </div>

              {/* Submit Button & Policy */}
              <div className="flex items-center gap-4 pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-opacity-10"
                  style={{
                    borderColor: accentColor,
                    color: accentColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${accentColor}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {submitButtonText}
                </motion.button>

                <p className="text-[10px] leading-tight text-[#999999]">
                  {policyText.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < policyText.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                  <a
                    href="#"
                    className="underline transition-colors hover:text-[#666666]"
                    style={{ color: accentColor }}
                  >
                    {policyLinkText}
                  </a>
                </p>
              </div>
            </form>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            {/* Main Heading */}
            <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-3xl">
              {heading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < heading.split("\n").length - 1 && <br />}
                </span>
              ))}
              <span style={{ color: accentColor }}>
                {highlightedText.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < highlightedText.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </span>
              {headingEnd}
            </h1>

            {/* Subheading */}
            <h2 className="mb-3 text-sm font-semibold text-[#1A1A1A]">
              {subheading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < subheading.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Description & Team */}
            <div className="flex items-start gap-6">
              <p className="max-w-xs text-[10px] leading-relaxed text-[#888888]">
                {description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < description.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>

              {/* Team Members */}
              <div className="flex items-center gap-3">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-md">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="mt-1.5 text-[9px] text-[#666666]">
                      {member.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
