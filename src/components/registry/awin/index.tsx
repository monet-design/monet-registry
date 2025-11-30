"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

// Types
interface AwinContactFormProps {
  title?: string;
  subtitle?: string;
  firstNameLabel?: string;
  lastNameLabel?: string;
  emailLabel?: string;
  phoneLabel?: string;
  messageLabel?: string;
  privacyText?: string;
  privacyLinkText?: string;
  privacyLinkHref?: string;
  buttonText?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

// Decorative curved lines pattern component
function DecorativePattern() {
  return (
    <svg
      className="absolute right-0 top-0 h-full w-1/3 max-w-[300px]"
      viewBox="0 0 300 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMid slice"
    >
      <defs>
        <linearGradient id="patternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8F5FC" />
          <stop offset="100%" stopColor="#D8EEF8" />
        </linearGradient>
      </defs>
      {/* Multiple curved lines creating the pattern */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M ${150 + i * 25} -50
              Q ${200 + i * 30} 100, ${180 + i * 25} 200
              Q ${160 + i * 20} 300, ${200 + i * 25} 400
              Q ${220 + i * 25} 500, ${180 + i * 25} 600`}
          stroke="url(#patternGradient)"
          strokeWidth={12 + i * 3}
          strokeLinecap="round"
          fill="none"
          opacity={0.6 - i * 0.05}
        />
      ))}
    </svg>
  );
}

// Main Component
export default function AwinContactForm({
  title = "Get in touch with us",
  subtitle = "For any queries you have, please use our simple contact form below and one of our team will be happy to help.",
  firstNameLabel = "First",
  lastNameLabel = "Last",
  emailLabel = "Email address",
  phoneLabel = "Contact number",
  messageLabel = "Your message",
  privacyText = "I consent to my submitted data being collected and stored to the terms of the",
  privacyLinkText = "privacy policy.",
  privacyLinkHref = "#",
  buttonText = "Send message",
  onSubmit,
}: AwinContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Decorative Pattern */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none hidden md:block">
        <DecorativePattern />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tight text-[#1A2B3C] sm:text-3xl md:text-4xl"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-sm leading-relaxed text-[#9FA3AB]"
          >
            {subtitle}
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* Name Fields */}
            <div>
              <label className="block text-sm font-medium text-[#1A2B3C]">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-b border-[#D5D6D8] bg-transparent py-2 text-sm text-[#1A2B3C] placeholder:text-[#9FA3AB] focus:border-[#36A6DA] focus:outline-none transition-colors"
                    required
                  />
                  <span className="mt-1 block text-xs text-[#9FA3AB]">
                    {firstNameLabel}
                  </span>
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border-b border-[#D5D6D8] bg-transparent py-2 text-sm text-[#1A2B3C] placeholder:text-[#9FA3AB] focus:border-[#36A6DA] focus:outline-none transition-colors"
                    required
                  />
                  <span className="mt-1 block text-xs text-[#9FA3AB]">
                    {lastNameLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-[#1A2B3C]">
                {emailLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full border-b border-[#D5D6D8] bg-transparent py-2 text-sm text-[#1A2B3C] placeholder:text-[#9FA3AB] focus:border-[#36A6DA] focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-[#1A2B3C]">
                {phoneLabel}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full border-b border-[#D5D6D8] bg-transparent py-2 text-sm text-[#1A2B3C] placeholder:text-[#9FA3AB] focus:border-[#36A6DA] focus:outline-none transition-colors"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-[#1A2B3C]">
                {messageLabel} <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full resize-y border border-[#D5D6D8] rounded-sm bg-transparent px-3 py-2 text-sm text-[#1A2B3C] placeholder:text-[#9FA3AB] focus:border-[#36A6DA] focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-[#D5D6D8] text-[#36A6DA] focus:ring-[#36A6DA] focus:ring-offset-0"
                required
              />
              <label
                htmlFor="consent"
                className="text-xs leading-relaxed text-[#9FA3AB]"
              >
                {privacyText}{" "}
                <a
                  href={privacyLinkHref}
                  className="text-[#36A6DA] underline hover:text-[#2E96C8] transition-colors"
                >
                  {privacyLinkText}
                </a>{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#36A6DA] px-8 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-[#2E96C8] focus:outline-none focus:ring-2 focus:ring-[#36A6DA] focus:ring-offset-2"
            >
              {buttonText}
              <ChevronRight size={16} strokeWidth={2} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
