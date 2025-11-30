"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// Font imports
import "./font.css";

interface DeeoContactFormProps {
  tagline?: string;
  heading?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  companyPlaceholder?: string;
  budgetOptions?: string[];
  defaultBudgetOption?: string;
  timelinePlaceholder?: string;
  submitButtonText?: string;
  alternativeEmailText?: string;
  alternativeEmail?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
}

export default function DeeoContactForm({
  tagline = "GET IN TOUCH",
  heading = "We're easy to work with and love a friendly collab!",
  namePlaceholder = "Jane",
  emailPlaceholder = "jane@example.com",
  companyPlaceholder = "",
  budgetOptions = [
    "Select an option",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ],
  defaultBudgetOption = "Select an option",
  timelinePlaceholder = "3-6 months",
  submitButtonText = "Submit",
  alternativeEmailText = "You can also send us an email at",
  alternativeEmail = "hello@deeo.studio",
  onSubmit,
}: DeeoContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    budget: defaultBudgetOption,
    timeline: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <section className="min-h-screen bg-black py-16 md:py-24 px-6 md:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto"
      >
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white/80 text-xs tracking-[0.2em] text-center mb-4 font-sans"
        >
          {tagline}
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-instrument-serif text-white text-2xl md:text-3xl lg:text-4xl text-center mb-10 md:mb-12 italic font-normal leading-tight"
        >
          {heading}
        </motion.h1>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label className="block text-white/90 text-sm mb-2 font-sans">
                Name<span className="text-white/90">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder={namePlaceholder}
                className="w-full bg-transparent border-b border-white/30 text-white py-2 px-0 text-sm focus:outline-none focus:border-white/60 transition-colors placeholder:text-white/40 font-sans"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white/90 text-sm mb-2 font-sans">
                Email<span className="text-white/90">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder={emailPlaceholder}
                className="w-full bg-transparent border-b border-white/30 text-white py-2 px-0 text-sm focus:outline-none focus:border-white/60 transition-colors placeholder:text-white/40 font-sans"
              />
            </div>
          </div>

          {/* Company Field */}
          <div>
            <label className="block text-white/90 text-sm mb-2 font-sans">
              Company or Area of Business<span className="text-white/90">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder={companyPlaceholder}
              className="w-full bg-transparent border-b border-white/30 text-white py-2 px-0 text-sm focus:outline-none focus:border-white/60 transition-colors placeholder:text-white/40 font-sans"
            />
          </div>

          {/* Budget and Timeline Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Budget Dropdown */}
            <div className="relative">
              <label className="block text-white/90 text-sm mb-2 font-sans">
                Budget<span className="text-white/90">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-transparent border-b border-white/30 text-white/60 py-2 px-0 text-sm text-left focus:outline-none focus:border-white/60 transition-colors flex items-center justify-between font-sans"
                >
                  <span
                    className={
                      formData.budget === defaultBudgetOption
                        ? "text-white/40"
                        : "text-white"
                    }
                  >
                    {formData.budget}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-white/60 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-neutral-900 border border-white/10 rounded-md z-10 overflow-hidden"
                  >
                    {budgetOptions.map((option, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          handleInputChange("budget", option);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-sm text-left text-white/80 hover:bg-white/10 transition-colors font-sans"
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Timeline Field */}
            <div>
              <label className="block text-white/90 text-sm mb-2 font-sans">
                Estimated Timeline<span className="text-white/90">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.timeline}
                onChange={(e) => handleInputChange("timeline", e.target.value)}
                placeholder={timelinePlaceholder}
                className="w-full bg-transparent border-b border-white/30 text-white py-2 px-0 text-sm focus:outline-none focus:border-white/60 transition-colors placeholder:text-white/40 font-sans"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-8 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition-colors font-sans"
            >
              {submitButtonText}
            </motion.button>
          </div>

          {/* Alternative Email */}
          <p className="text-center text-white/60 text-sm font-sans pt-2">
            {alternativeEmailText}{" "}
            <a
              href={`mailto:${alternativeEmail}`}
              className="text-white/80 underline underline-offset-2 hover:text-white transition-colors"
            >
              {alternativeEmail}
            </a>{" "}
            if you prefer.
          </p>
        </motion.form>
      </motion.div>
    </section>
  );
}
