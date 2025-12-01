"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#35C22F", // Bright green accent
  },
  dark: {
    accent: "#2da325",
  },
} as const;

const IMAGES = {
  tubes: {
    path: "/registry/pano-cs-vip-roundtable/green-tubes.png",
    alt: "3D green tube decorations",
    prompt: `Abstract 3D rendered green tubular shapes and pipes.
Style: Modern 3D render, glossy finish, neon-like glow
Composition: Multiple curved tubes in organic arrangement
Color palette: Bright lime green (#35C22F), glowing effects
Mood: Tech, modern, futuristic, dynamic
Technical: PNG with transparency, soft glow effects`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

// Types
interface FormField {
  label: string;
  placeholder: string;
  required?: boolean;
}

interface PanoCsVipRoundtableProps {
  mode?: "light" | "dark";
  headline?: {
    line1: string;
    line2: string;
    accentWord: string;
  };
  description?: string;
  formFields?: {
    firstName: FormField;
    lastName: FormField;
    workEmail: FormField;
    company: FormField;
    title: FormField;
  };
  submitButtonText?: string;
  onSubmit?: (formData: FormData) => void;
  showDecorations?: boolean;
}

interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  title: string;
}

// Default form fields
const defaultFormFields = {
  firstName: {
    label: "First name",
    placeholder: "First name",
    required: true,
  },
  lastName: {
    label: "Last name",
    placeholder: "Last name",
    required: true,
  },
  workEmail: {
    label: "Work email address",
    placeholder: "Work email address",
    required: true,
  },
  company: {
    label: "Company",
    placeholder: "Company",
    required: true,
  },
  title: {
    label: "Title",
    placeholder: "Title",
    required: true,
  },
};

// Main Component
export default function PanoCsVipRoundtable({
  mode = "light",
  headline = {
    line1: "Unlock Customer",
    line2: "Success",
    accentWord: "excellence!",
  },
  description = "Don't miss out on this incredible opportunity to become a part of the Customer Success VIP Roundtable Discussion. Secure your spot now by filling out the form below.",
  formFields = defaultFormFields,
  submitButtonText = "Join our roundtable",
  onSubmit,
  showDecorations = true,
}: PanoCsVipRoundtableProps) {
  const colors = COLORS[mode];
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    company: "",
    title: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(40, 80, 40, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(30, 70, 30, 0.4) 0%, transparent 50%),
            linear-gradient(180deg,
              #181E14 0%,
              #1a2518 30%,
              #1c2a1a 50%,
              #1a2518 70%,
              #181E14 100%
            )
          `,
        }}
      />

      {/* Green glow effects */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(53, 194, 47, 0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 translate-x-1/2 opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(53, 194, 47, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* 3D Tube Decorations */}
      {showDecorations && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pointer-events-none absolute bottom-0 left-0 z-10 h-[400px] w-[500px]"
          >
            <Image
              src={IMAGES.tubes.path}
              alt={IMAGES.tubes.alt}
              fill
              className="object-contain object-left-bottom"
              style={{ transform: "scaleX(-1)" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pointer-events-none absolute bottom-0 right-0 z-10 h-[350px] w-[450px]"
          >
            <Image
              src={IMAGES.tubes.path}
              alt={IMAGES.tubes.alt}
              fill
              className="object-contain object-right-bottom"
            />
          </motion.div>
        </>
      )}

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 py-16 md:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <h1 className="font-instrument-serif text-4xl leading-tight text-white md:text-5xl lg:text-[56px]">
            <span className="font-bold italic">{headline.line1}</span>
            <br />
            <span className="font-bold italic">{headline.line2}</span>{" "}
            <span
              className="font-bold italic"
              style={{ color: colors.accent }}
            >
              {headline.accentWord}
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 max-w-xl text-center text-sm leading-relaxed text-white/80 md:text-[15px]"
        >
          {description}
        </motion.p>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-700">
                  {formFields.firstName.label}{" "}
                  {formFields.firstName.required && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  placeholder={formFields.firstName.placeholder}
                  required={formFields.firstName.required}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-700">
                  {formFields.lastName.label}{" "}
                  {formFields.lastName.required && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  placeholder={formFields.lastName.placeholder}
                  required={formFields.lastName.required}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-700">
                {formFields.workEmail.label}{" "}
                {formFields.workEmail.required && (
                  <span className="text-red-500">*</span>
                )}
              </label>
              <input
                type="email"
                value={formData.workEmail}
                onChange={(e) => updateField("workEmail", e.target.value)}
                placeholder={formFields.workEmail.placeholder}
                required={formFields.workEmail.required}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
              />
            </div>

            {/* Company */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-700">
                {formFields.company.label}{" "}
                {formFields.company.required && (
                  <span className="text-red-500">*</span>
                )}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => updateField("company", e.target.value)}
                placeholder={formFields.company.placeholder}
                required={formFields.company.required}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
              />
            </div>

            {/* Title */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-700">
                {formFields.title.label}{" "}
                {formFields.title.required && (
                  <span className="text-red-500">*</span>
                )}
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder={formFields.title.placeholder}
                required={formFields.title.required}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              {submitButtonText}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
