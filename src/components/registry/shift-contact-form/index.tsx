"use client";

import { useState } from "react";
import { motion } from "motion/react";

// Types
interface ShiftContactFormProps {
  tagline?: string;
  headline?: string;
  description?: string;
  brandName?: string;
  fields?: {
    name?: { label: string; placeholder: string };
    title?: { label: string; placeholder: string };
    email?: { label: string; placeholder: string };
    telephone?: { label: string; placeholder: string };
  };
  submitButtonText?: string;
  onSubmit?: (formData: FormData) => void;
  backgroundColor?: string;
  accentColor?: string;
}

interface FormData {
  name: string;
  title: string;
  email: string;
  telephone: string;
}

// Main Component
export default function ShiftContactForm({
  tagline = "SPEAK WITH THE EXPERTS",
  headline = "CONTACT US",
  description = "Get in touch with us to discuss a marketplace strategy\nthat works for your brand.",
  brandName = "SHIFT",
  fields = {
    name: { label: "Your name", placeholder: "" },
    title: { label: "Your title", placeholder: "" },
    email: { label: "Your email", placeholder: "" },
    telephone: { label: "Your telephone", placeholder: "" },
  },
  submitButtonText = "Send to SHIFT",
  onSubmit,
  backgroundColor = "#E9EAEC",
  accentColor = "#2D0A3E",
}: ShiftContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    email: "",
    telephone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Parse description to handle line breaks
  const renderDescription = () => {
    const lines = description.split("\n");
    return lines.map((line, index) => (
      <span key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ));
  };

  const inputClasses =
    "w-full rounded-full border-0 bg-white px-5 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-30 shadow-sm";

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-16 md:py-20"
      style={{ backgroundColor }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-xl">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-center text-xs font-semibold tracking-[0.2em]"
          style={{ color: accentColor }}
        >
          {tagline}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-center text-3xl font-light tracking-wide md:text-4xl"
          style={{ color: accentColor }}
        >
          {headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 text-center text-sm leading-relaxed text-gray-600"
        >
          {renderDescription()}
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Row 1: Name & Title */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder={fields.name?.label || "Your name"}
              className={inputClasses}
              style={
                {
                  "--tw-ring-color": accentColor,
                } as React.CSSProperties
              }
            />
            <input
              type="text"
              value={formData.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder={fields.title?.label || "Your title"}
              className={inputClasses}
              style={
                {
                  "--tw-ring-color": accentColor,
                } as React.CSSProperties
              }
            />
          </div>

          {/* Row 2: Email & Telephone */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder={fields.email?.label || "Your email"}
              className={inputClasses}
              style={
                {
                  "--tw-ring-color": accentColor,
                } as React.CSSProperties
              }
            />
            <input
              type="tel"
              value={formData.telephone}
              onChange={(e) => updateField("telephone", e.target.value)}
              placeholder={fields.telephone?.label || "Your telephone"}
              className={inputClasses}
              style={
                {
                  "--tw-ring-color": accentColor,
                } as React.CSSProperties
              }
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full px-8 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl"
              style={{ backgroundColor: accentColor }}
            >
              {submitButtonText.replace("SHIFT", brandName)}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
