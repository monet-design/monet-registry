"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// Types
interface SelectOption {
  value: string;
  label: string;
}

interface BlockjoyContactFormProps {
  title?: string;
  subtitle?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  selectPlaceholder?: string;
  messagePlaceholder?: string;
  submitText?: string;
  selectOptions?: SelectOption[];
  backgroundColor?: string;
  onSubmit?: (data: {
    name: string;
    email: string;
    topic: string;
    message: string;
  }) => void;
}

// Default select options
const defaultSelectOptions: SelectOption[] = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Support" },
  { value: "sales", label: "Sales" },
  { value: "partnership", label: "Partnership" },
];

// Custom Select Component
function CustomSelect({
  placeholder,
  options,
  value,
  onChange,
}: {
  placeholder: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-full border border-[#1A1A1A] bg-transparent px-5 py-3 text-left text-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/20"
      >
        <span className={selectedOption ? "text-[#1A1A1A]" : "text-[#6B6B6B]"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#1A1A1A] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute top-full left-0 right-0 z-10 mt-1 overflow-hidden rounded-2xl border border-[#1A1A1A] bg-white shadow-lg"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="block w-full px-5 py-3 text-left text-sm text-[#1A1A1A] transition-colors hover:bg-[#BFF488]/30"
            >
              {option.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// Main Component
export default function BlockjoyContactForm({
  title = "LET'S CHAT",
  subtitle = "Fill in your details and we will get back to you.",
  namePlaceholder = "Your name and surname",
  emailPlaceholder = "Your email address",
  selectPlaceholder = "Select one...",
  messagePlaceholder = "Example Text",
  submitText = "Send message",
  selectOptions = defaultSelectOptions,
  backgroundColor = "#BFF488",
  onSubmit,
}: BlockjoyContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ name, email, topic, message });
  };

  return (
    <section
      className="flex min-h-screen w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
      style={{ backgroundColor }}
    >
      <div className="w-full max-w-3xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl"
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto mt-2 text-center text-base text-[#1A1A1A] sm:text-lg"
        >
          {subtitle}
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          {/* Top row - 3 inputs */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Name input */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={namePlaceholder}
              className="w-full rounded-full border border-[#1A1A1A] bg-transparent px-5 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B] transition-colors hover:bg-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/20"
            />

            {/* Email input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={emailPlaceholder}
              className="w-full rounded-full border border-[#1A1A1A] bg-transparent px-5 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B] transition-colors hover:bg-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/20"
            />

            {/* Select dropdown */}
            <CustomSelect
              placeholder={selectPlaceholder}
              options={selectOptions}
              value={topic}
              onChange={setTopic}
            />
          </div>

          {/* Textarea */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={messagePlaceholder}
            rows={3}
            className="w-full resize-none rounded-3xl border border-[#1A1A1A] bg-transparent px-5 py-4 text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B] transition-colors hover:bg-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/20"
          />

          {/* Submit button */}
          <div className="flex justify-center pt-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-[#1A1A1A] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333333]"
            >
              {submitText}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
