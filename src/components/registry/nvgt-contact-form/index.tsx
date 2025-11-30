"use client";

import { useState } from "react";
import { motion } from "motion/react";
import "./font.css";

// Types
interface NvgtContactFormProps {
  badgeText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

// Badge Component
function Badge({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
    >
      <span className="h-2 w-2 rounded-full bg-[#06EFB8]" />
      <span className="text-xs font-medium text-white/90">{text}</span>
    </motion.div>
  );
}

// Input Component
function FormInput({
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <motion.input
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border-0 bg-[#0E0E10] px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:ring-1 focus:ring-[#06EFB8]/30"
    />
  );
}

// Textarea Component
function FormTextarea({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <motion.textarea
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={4}
      className="w-full resize-none rounded-lg border-0 bg-[#0E0E10] px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:ring-1 focus:ring-[#06EFB8]/30"
    />
  );
}

// Submit Button Component
function SubmitButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full rounded-full bg-[#06EFB8] py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-[#00D9A8] hover:shadow-lg hover:shadow-[#06EFB8]/20"
    >
      {text}
    </motion.button>
  );
}

// Main Component
export default function NvgtContactForm({
  badgeText = "Contact",
  headlineLine1 = "Fuel your startup's",
  headlineLine2 = "growth. Get in touch.",
  namePlaceholder = "Name",
  emailPlaceholder = "Email",
  messagePlaceholder = "Message",
  submitButtonText = "Send",
  onSubmit,
}: NvgtContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ name, email, message });
    }
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-12 sm:py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-8 sm:grid-cols-[2fr_3fr] sm:gap-12 md:gap-16">
          {/* Left Column - Header */}
          <div>
            {/* Badge */}
            <Badge text={badgeText} />

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-3xl font-normal leading-[1.1] tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              <span className="block italic">{headlineLine1}</span>
              <span className="block italic">{headlineLine2}</span>
            </motion.h2>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {/* Name Input */}
            <FormInput
              type="text"
              placeholder={namePlaceholder}
              value={name}
              onChange={setName}
            />

            {/* Email Input */}
            <FormInput
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              onChange={setEmail}
            />

            {/* Message Textarea */}
            <FormTextarea
              placeholder={messagePlaceholder}
              value={message}
              onChange={setMessage}
            />

            {/* Submit Button */}
            <SubmitButton text={submitButtonText} onClick={handleSubmit} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
