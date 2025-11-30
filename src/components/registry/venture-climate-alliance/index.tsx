"use client";

import { useState } from "react";
import { motion } from "motion/react";

// Types
interface VentureClimateAllianceProps {
  topLabel?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  formLabels?: {
    name: string;
    email: string;
    companyName: string;
    companyWebsite: string;
  };
  placeholders?: {
    website: string;
  };
  submitButtonText?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  companyName: string;
  companyWebsite: string;
}

// Main Component
export default function VentureClimateAlliance({
  topLabel = "Join Us",
  headline = "Join the VCA!",
  description = "Membership in the alliance is open to\nany venture investor, anywhere in the\nworld.",
  ctaText = "To join the VCA, please complete our membership form.",
  formLabels = {
    name: "Your Name *",
    email: "Your Email Address *",
    companyName: "Company Name *",
    companyWebsite: "Company Website",
  },
  placeholders = {
    website: "https://",
  },
  submitButtonText = "Send",
  onSubmit,
}: VentureClimateAllianceProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companyName: "",
    companyWebsite: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Parse description with line breaks
  const renderDescription = () => {
    return description.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < description.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col md:flex-row">
      {/* Left Column - White Background */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex w-full flex-col justify-between bg-white px-8 py-8 md:w-1/2 md:px-12 md:py-12 lg:px-16 lg:py-16"
      >
        {/* Top Label */}
        <p className="text-sm font-normal text-[#1a1a1a]">{topLabel}</p>

        {/* Bottom Content */}
        <div className="mt-auto">
          {/* Headline */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#1a1a1a] md:text-4xl lg:text-[42px]">
            {headline}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-base leading-relaxed text-[#1a1a1a] md:text-lg"
          >
            {renderDescription()}
          </motion.p>

          {/* CTA Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-xs text-[#666]"
          >
            {ctaText}
          </motion.p>
        </div>
      </motion.div>

      {/* Right Column - Lavender Background with Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex w-full items-center justify-center bg-[#EDE4F9] px-8 py-12 md:w-1/2 md:px-12 lg:px-16"
      >
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          {/* Your Name */}
          <div>
            <label className="mb-1.5 block text-xs font-normal text-[#503834]">
              {formLabels.name}
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="w-full rounded-md border border-transparent bg-white px-4 py-2.5 text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#503834]/20"
              required
            />
          </div>

          {/* Your Email Address */}
          <div>
            <label className="mb-1.5 block text-xs font-normal text-[#503834]">
              {formLabels.email}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full rounded-md border border-transparent bg-white px-4 py-2.5 text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#503834]/20"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="mb-1.5 block text-xs font-normal text-[#503834]">
              {formLabels.companyName}
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => updateField("companyName", e.target.value)}
              className="w-full rounded-md border border-transparent bg-white px-4 py-2.5 text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#503834]/20"
              required
            />
          </div>

          {/* Company Website */}
          <div>
            <label className="mb-1.5 block text-xs font-normal text-[#503834]">
              {formLabels.companyWebsite}
            </label>
            <input
              type="url"
              value={formData.companyWebsite}
              onChange={(e) => updateField("companyWebsite", e.target.value)}
              placeholder={placeholders.website}
              className="w-full rounded-md border border-transparent bg-white px-4 py-2.5 text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#503834]/20"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full rounded-md bg-[#503834] px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3d2a28]"
          >
            {submitButtonText}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
