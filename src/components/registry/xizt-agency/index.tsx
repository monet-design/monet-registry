"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Types
interface BudgetOption {
  value: string;
  label: string;
}

interface ServiceOption {
  value: string;
  label: string;
}

interface XiztAgencyProps {
  headline?: {
    prefix: string;
    highlighted1: string;
    middle: string;
    highlighted2: string;
  };
  namePlaceholder?: string;
  serviceOptions?: ServiceOption[];
  servicePlaceholder?: string;
  budgetOptions?: BudgetOption[];
  emailPlaceholder?: string;
  detailsPlaceholder?: string;
  submitButtonText?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  service: string;
  budget: string;
  email: string;
  details: string;
}

// Default data
const defaultBudgetOptions: BudgetOption[] = [
  { value: "1-5k", label: "$1-5K" },
  { value: "5-10k", label: "$5-10K" },
  { value: "10-20k", label: "$10-20K" },
  { value: "20-50k", label: "$20-50K" },
  { value: "50k+", label: ">$50K" },
];

const defaultServiceOptions: ServiceOption[] = [
  { value: "web-design", label: "Web Design" },
  { value: "branding", label: "Branding" },
  { value: "development", label: "Development" },
  { value: "consulting", label: "Consulting" },
  { value: "marketing", label: "Marketing" },
];

// Inline Input Component
function InlineInput({
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  className?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`border-b border-[#d0d0d0] bg-transparent pb-0.5 text-[#3c3c3c] placeholder:text-[#b0b0b0] focus:border-[#3c3c3c] focus:outline-none ${className}`}
    />
  );
}

// Inline Select Component
function InlineSelect({
  value,
  onChange,
  options,
  placeholder,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  options: ServiceOption[];
  placeholder: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="border-b border-[#d0d0d0] bg-transparent pb-0.5 text-left focus:border-[#3c3c3c] focus:outline-none"
      >
        <span className={selectedOption ? "text-[#3c3c3c]" : "text-[#b0b0b0]"}>
          {selectedOption?.label || placeholder}
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 z-20 mt-2 min-w-[160px] rounded-md border border-[#e5e5e5] bg-white py-1 shadow-lg"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-sm text-[#3c3c3c] transition-colors hover:bg-[#f5f5f5]"
            >
              {option.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// Budget Chip Component
function BudgetChip({
  option,
  isSelected,
  onClick,
  index,
}: {
  option: BudgetOption;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs transition-all ${
        isSelected
          ? "border-[#3c3c3c] bg-[#3c3c3c] text-white"
          : "border-[#d0d0d0] bg-white text-[#6b6b6b] hover:border-[#9b9b9b]"
      }`}
    >
      {option.label}
    </motion.button>
  );
}

// Main Component
export default function XiztAgency({
  headline = {
    prefix: "Hey! We are",
    highlighted1: "ready",
    middle: "to",
    highlighted2: "consult you",
  },
  namePlaceholder = "first and last name",
  serviceOptions = defaultServiceOptions,
  servicePlaceholder = "service name",
  budgetOptions = defaultBudgetOptions,
  emailPlaceholder = "name@example.com",
  detailsPlaceholder = "your project details",
  submitButtonText = "Send request",
  onSubmit,
}: XiztAgencyProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    service: "",
    budget: "",
    email: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative min-h-screen w-full bg-white">
      <div className="mx-auto max-w-2xl px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-normal leading-tight tracking-tight sm:text-3xl md:text-4xl"
        >
          <span className="text-[#3c3c3c]">{headline.prefix} </span>
          <span className="text-[#959595]">{headline.highlighted1}</span>
          <br />
          <span className="text-[#3c3c3c]">{headline.middle} </span>
          <span className="text-[#a8b0c0]">{headline.highlighted2}</span>
          <span className="text-[#a8b0c0]">_</span>
        </motion.h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-6 sm:mt-12">
          {/* Name and Service Row */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-wrap items-baseline gap-x-2 gap-y-2 text-base font-medium text-[#3c3c3c] sm:text-lg"
          >
            <span>My name is</span>
            <InlineInput
              value={formData.name}
              onChange={(value) => updateField("name", value)}
              placeholder={namePlaceholder}
              className="w-36 text-base sm:w-44 sm:text-lg"
            />
            <span>and I&apos;m interested in</span>
            <InlineSelect
              value={formData.service}
              onChange={(value) => updateField("service", value)}
              options={serviceOptions}
              placeholder={servicePlaceholder}
              className="text-base sm:text-lg"
            />
            <span>.</span>
          </motion.p>

          {/* Budget Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            <span className="text-base font-medium text-[#3c3c3c] sm:text-lg">
              My project budget
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {budgetOptions.map((option, index) => (
                <BudgetChip
                  key={option.value}
                  option={option}
                  isSelected={formData.budget === option.value}
                  onClick={() => updateField("budget", option.value)}
                  index={index}
                />
              ))}
            </div>
            <span className="text-base font-medium text-[#3c3c3c] sm:text-lg">
              .
            </span>
          </motion.div>

          {/* Email Row */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap items-baseline gap-x-2 gap-y-2 text-base font-medium text-[#3c3c3c] sm:text-lg"
          >
            <span>Please, contact me at</span>
            <InlineInput
              value={formData.email}
              onChange={(value) => updateField("email", value)}
              placeholder={emailPlaceholder}
              type="email"
              className="w-40 text-base sm:w-48 sm:text-lg"
            />
            <span>.</span>
          </motion.p>

          {/* Details Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-baseline gap-x-2 gap-y-2 text-base font-medium sm:text-lg"
          >
            <span className="text-[#3c3c3c]">Optionally, I&apos;m sharing more:</span>
            <InlineInput
              value={formData.details}
              onChange={(value) => updateField("details", value)}
              placeholder={detailsPlaceholder}
              className="w-40 text-base text-[#a8b0c0] sm:w-52 sm:text-lg"
            />
            <span className="text-[#a8b0c0]">.</span>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="origin-left border-b border-[#e5e5e5] pt-4"
          />

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pt-4"
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#252525] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3c3c3c]"
            >
              {submitButtonText}
              <ArrowRight size={16} strokeWidth={2} />
            </motion.button>
          </motion.div>
        </form>
      </div>
    </section>
  );
}
