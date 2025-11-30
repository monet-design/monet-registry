"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import Image from "next/image";

// Types
interface BauplanProps {
  title?: string;
  emailPlaceholder?: string;
  namePlaceholder?: string;
  linkedinPlaceholder?: string;
  githubPlaceholder?: string;
  buttonText?: string;
  backgroundImage?: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  email: string;
  name: string;
  linkedin: string;
  github: string;
}

// Input field component
function FormInput({
  placeholder,
  type = "text",
  value,
  onChange,
  index,
}: {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
    >
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b border-[#E5E5E5] bg-transparent py-3 text-sm text-[#1A1A1A] placeholder:text-[#999999] focus:border-[#00A3FF] focus:outline-none transition-colors"
      />
    </motion.div>
  );
}

// Main Component
export default function Bauplan({
  title = "Join our private alpha",
  emailPlaceholder = "you@example.com",
  namePlaceholder = "Name",
  linkedinPlaceholder = "LinkedIn",
  githubPlaceholder = "GitHub",
  buttonText = "Join",
  backgroundImage = "/registry/bauplan/background.png",
  onSubmit,
}: BauplanProps) {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    linkedin: "",
    github: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden bg-[#F5F4F0] px-4 py-12 sm:min-h-[500px] sm:py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Abstract landscape background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-[#F5F4F0]/10" />
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[380px] rounded-2xl bg-[#FEFDFB] px-8 py-10 shadow-xl sm:px-10 sm:py-12"
      >
        {/* Heart Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-4 flex justify-center"
        >
          <Heart
            size={32}
            strokeWidth={1.5}
            className="text-[#1A1A1A]"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-8 text-center text-xl font-normal text-[#1A1A1A] sm:text-2xl"
        >
          {title}
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-1">
          <FormInput
            type="email"
            placeholder={emailPlaceholder}
            value={formData.email}
            onChange={updateField("email")}
            index={0}
          />
          <FormInput
            placeholder={namePlaceholder}
            value={formData.name}
            onChange={updateField("name")}
            index={1}
          />
          <FormInput
            placeholder={linkedinPlaceholder}
            value={formData.linkedin}
            onChange={updateField("linkedin")}
            index={2}
          />
          <FormInput
            placeholder={githubPlaceholder}
            value={formData.github}
            onChange={updateField("github")}
            index={3}
          />

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="pt-6"
          >
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-[#00A3FF] to-[#28AFF8] py-3 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg hover:brightness-105 active:scale-[0.98]"
            >
              {buttonText}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
