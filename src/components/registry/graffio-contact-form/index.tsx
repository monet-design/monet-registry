"use client";

import { useState } from "react";
import { motion } from "motion/react";
import "./font.css";

// Types
interface ContactInfo {
  greeting: string;
  greetingEmoji: string;
  description: string;
  email: string;
  phone: string;
  socialLinks: {
    label: string;
    href: string;
  }[];
}

interface GraffioContactFormProps {
  headingLeft?: string;
  headingRight?: string;
  contactInfo?: ContactInfo;
  onSubmit?: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

// Default contact info
const defaultContactInfo: ContactInfo = {
  greeting: "Hola",
  greetingEmoji: "\uD83D\uDC4B",
  description:
    "We are always open to new\nopportunities and collaborative\nprojects. For all enquiries, please get in\ntouch.",
  email: "hola@graffio.co",
  phone: "0407 720 300",
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Linkedin", href: "https://linkedin.com" },
  ],
};

// Custom Input Component
function FormInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-xs text-[#A0A0A0] tracking-wide">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-[#3A3A3A] pb-2 text-sm text-white placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#5A5A5A] transition-colors"
      />
    </div>
  );
}

// Custom Textarea Component
function FormTextarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-[#A0A0A0] tracking-wide">{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full bg-transparent border-b border-[#3A3A3A] pb-2 text-sm text-white placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#5A5A5A] transition-colors resize-none"
      />
    </div>
  );
}

// Main Component
export default function GraffioContactForm({
  headingLeft = "Let's",
  headingRight = "Talk",
  contactInfo = defaultContactInfo,
  onSubmit,
}: GraffioContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="w-full bg-[#141414] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Left Heading */}
            <h2
              className="text-4xl sm:text-5xl md:text-[56px] text-white mb-10"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {headingLeft}
            </h2>

            {/* Greeting */}
            <div className="mb-3">
              <span className="text-sm font-medium text-[#C4A052]">
                {contactInfo.greeting}{" "}
                <span role="img" aria-label="wave">
                  {contactInfo.greetingEmoji}
                </span>
              </span>
            </div>

            {/* Description */}
            <p className="text-[#6A6A6A] text-sm leading-relaxed mb-8 whitespace-pre-line">
              {contactInfo.description}
            </p>

            {/* Contact Details */}
            <div className="mb-6 space-y-1">
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-sm text-[#E0E0E0] hover:text-white transition-colors"
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="block text-sm text-[#E0E0E0] hover:text-white transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-1">
              <p className="text-[#6A6A6A] text-xs mb-2">Follow</p>
              {contactInfo.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#E0E0E0] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Right Heading */}
            <h2
              className="text-4xl sm:text-5xl md:text-[56px] text-white mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {headingRight}
            </h2>

            {/* Form Card */}
            <div className="bg-[#1A1A1A] rounded-lg p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <FormInput
                  label="Name"
                  value={formData.name}
                  onChange={updateField("name")}
                />

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormInput
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={updateField("email")}
                  />
                  <FormInput
                    label="Phone"
                    type="tel"
                    value={formData.phone}
                    onChange={updateField("phone")}
                  />
                </div>

                {/* Message */}
                <FormTextarea
                  label="Your Message"
                  value={formData.message}
                  onChange={updateField("message")}
                  rows={4}
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#C1BAAB] text-[#1A1A1A] text-sm font-medium rounded-full hover:bg-[#D0C9BA] transition-colors"
                >
                  Send
                  <span className="text-xs">&#9757;</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
