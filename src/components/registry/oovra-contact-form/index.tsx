"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import "./font.css";

// CUSTOMIZATION
const CUSTOMIZATION = {};

// Types
interface OovraContactFormProps {
  mode?: "light" | "dark";
  headline?: {
    line1: string;
    line2: string;
  };
  description?: string;
  fields?: {
    firstName?: { label: string; placeholder: string };
    lastName?: { label: string; placeholder: string };
    email?: { label: string; placeholder: string };
    instagram?: { label: string; placeholder: string };
    message?: { label: string; placeholder: string };
  };
  submitButtonText?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  instagram: string;
  message: string;
}

// Main Component
export default function OovraContactForm({
  mode = "light",
  headline = {
    line1: "Schedule a",
    line2: "Meeting",
  },
  description = "We're excited to learn more about your practice and answer any questions you might have.",
  fields = {
    firstName: { label: "FIRST NAME *", placeholder: "Andy" },
    lastName: { label: "LAST NAME *", placeholder: "Warhol" },
    email: { label: "EMAIL *", placeholder: "Andy-art@gmail.com" },
    instagram: { label: "INSTAGRAM ACCOUNT *", placeholder: "andy-warhol" },
    message: {
      label: "MESSAGE",
      placeholder: "Anything else you'd like to tell us?",
    },
  },
  submitButtonText = "Submit",
  onSubmit,
}: OovraContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    instagram: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#F7F6F1" }}
    >
      {/* Vertical line decorations */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle vertical lines across the page */}
        <div
          className="absolute top-0 bottom-0 left-[20%] w-px"
          style={{ backgroundColor: "rgba(200, 198, 190, 0.4)" }}
        />
        <div
          className="absolute top-0 bottom-0 left-[40%] w-px"
          style={{ backgroundColor: "rgba(200, 198, 190, 0.4)" }}
        />
        <div
          className="absolute top-0 bottom-0 left-[60%] w-px"
          style={{ backgroundColor: "rgba(200, 198, 190, 0.4)" }}
        />
        <div
          className="absolute top-0 bottom-0 left-[80%] w-px"
          style={{ backgroundColor: "rgba(200, 198, 190, 0.4)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:gap-16 md:px-12 md:py-20 lg:gap-24 lg:px-16 lg:py-24">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center md:w-2/5"
        >
          {/* Headline */}
          <h1 className="font-instrument-serif text-4xl leading-tight text-[#1a1a1a] md:text-5xl lg:text-[56px]">
            <span className="italic">{headline.line1}</span>
            <br />
            <span className="inline-flex items-center gap-3 italic">
              {headline.line2}
              <ArrowRight
                className="inline-block"
                size={40}
                strokeWidth={1.5}
              />
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 max-w-sm text-sm leading-relaxed text-[#666666] md:mt-10 md:text-[15px]"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex-1 md:w-3/5"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[10px] font-medium tracking-wider text-[#888888]">
                  {fields.firstName?.label}
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  placeholder={fields.firstName?.placeholder}
                  className="w-full border-b border-[#d4d3ce] bg-transparent px-0 py-3 text-sm text-[#999999] placeholder:text-[#c0bfba] focus:border-[#999] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-medium tracking-wider text-[#888888]">
                  {fields.lastName?.label}
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  placeholder={fields.lastName?.placeholder}
                  className="w-full border-b border-[#d4d3ce] bg-transparent px-0 py-3 text-sm text-[#999999] placeholder:text-[#c0bfba] focus:border-[#999] focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-[10px] font-medium tracking-wider text-[#888888]">
                {fields.email?.label}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder={fields.email?.placeholder}
                className="w-full border-b border-[#d4d3ce] bg-transparent px-0 py-3 text-sm text-[#999999] placeholder:text-[#c0bfba] focus:border-[#999] focus:outline-none"
              />
            </div>

            {/* Instagram */}
            <div>
              <label className="mb-2 block text-[10px] font-medium tracking-wider text-[#888888]">
                {fields.instagram?.label}
              </label>
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => updateField("instagram", e.target.value)}
                placeholder={fields.instagram?.placeholder}
                className="w-full border-b border-[#d4d3ce] bg-transparent px-0 py-3 text-sm text-[#999999] placeholder:text-[#c0bfba] focus:border-[#999] focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-[10px] font-medium tracking-wider text-[#888888]">
                {fields.message?.label}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder={fields.message?.placeholder}
                rows={4}
                className="w-full resize-none border-b border-[#d4d3ce] bg-transparent px-0 py-3 text-sm text-[#999999] placeholder:text-[#c0bfba] focus:border-[#999] focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mt-8 w-full rounded-sm px-8 py-3.5 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#42413E" }}
            >
              {submitButtonText}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
