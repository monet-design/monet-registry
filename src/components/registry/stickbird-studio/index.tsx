"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  timeline: string;
  budget: string;
  message: string;
}

interface StickbirdStudioProps {
  mode?: "light" | "dark";
  headline?: string;
  labels?: {
    name?: string;
    email?: string;
    company?: string;
    service?: string;
    timeline?: string;
    budget?: string;
    message?: string;
  };
  placeholders?: {
    name?: string;
    email?: string;
    company?: string;
    service?: string;
    timeline?: string;
    budget?: string;
    message?: string;
  };
  services?: string[];
  timelines?: string[];
  budgets?: string[];
  submitText?: string;
  onSubmit?: (data: FormData) => void;
}

// Custom Select Component
function CustomSelect({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-left text-sm flex items-center justify-between focus:outline-none focus:border-gray-500 transition-all"
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden"
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// Main Component
export default function StickbirdStudio({
  mode = "light",
  headline = "What creative\nchallenge are we\nchatting about?",
  labels = {
    name: "Your Name",
    email: "Your Email",
    company: "Company name",
    service: "How can we help",
    timeline: "Your timeline",
    budget: "Your budget range",
    message: "Anything else",
  },
  placeholders = {
    name: "Jane Smith",
    email: "jane@loremipsum.com",
    company: "Who do you work for",
    service: "Select Service ...",
    timeline: "Select Speed ...",
    budget: "Select Range ...",
    message: "Please tell us a bit more ...",
  },
  services = [
    "Brand Strategy",
    "Web Design",
    "Web Development",
    "Mobile App Design",
    "UI/UX Design",
    "Other",
  ],
  timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "Flexible",
  ],
  budgets = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ],
  submitText = "Submit",
  onSubmit,
}: StickbirdStudioProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    timeline: "",
    budget: "",
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
    <section className="w-full min-h-screen bg-[#CCCCCC] py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-gray-900 leading-tight whitespace-pre-line">
              {headline}
            </h1>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-900">
                {labels.name}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder={placeholders.name}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-all"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-900">
                {labels.email}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder={placeholders.email}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-all"
              />
            </div>

            {/* Company Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-900">
                {labels.company}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => updateField("company", e.target.value)}
                placeholder={placeholders.company}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-all"
              />
            </div>

            {/* Service Select */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-900">
                {labels.service}
              </label>
              <CustomSelect
                value={formData.service}
                onChange={(value) => updateField("service", value)}
                placeholder={placeholders.service || "Select Service ..."}
                options={services}
              />
            </div>

            {/* Timeline Select */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-900">
                {labels.timeline}
              </label>
              <CustomSelect
                value={formData.timeline}
                onChange={(value) => updateField("timeline", value)}
                placeholder={placeholders.timeline || "Select Speed ..."}
                options={timelines}
              />
            </div>

            {/* Budget Select */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-900">
                {labels.budget}
              </label>
              <CustomSelect
                value={formData.budget}
                onChange={(value) => updateField("budget", value)}
                placeholder={placeholders.budget || "Select Range ..."}
                options={budgets}
              />
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-900">
                {labels.message}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder={placeholders.message}
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                {submitText}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
