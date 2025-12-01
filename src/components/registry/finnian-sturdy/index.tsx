"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-neutral-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {},
  dark: {},
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Copy, Check } from "lucide-react";
import "./font.css";

interface FinnianSturdyProps {
  mode?: "light" | "dark";
  availabilityLabel?: string;
  heading?: string;
  headingAccent?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  companyPlaceholder?: string;
  scopePlaceholder?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  copyEmailText?: string;
  email?: string;
  scopeOptions?: string[];
  onSubmit?: (data: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  scope: string;
  message: string;
}

const ASCII_ART = `
                                  .::.
                               .-======-.
                              :==========:
                             -============-
                            :==============:
                           .================.
                           :================:
                          .==================.
                          :==================:
                          :==================:
                          :==================:
                          .==================.
                           :================:
                           .================.
                            :==============:
                             -============-
                              :==========:
                               .-======-.
                                  .::.

                           .--:..        ..:--
                        .:======---------======:.
                      .-=========================-.
                     :=============================:
                    -===============================-.
                   :=================================:
                  .===================================.
                  :===================================:
                 .=====================================.
                 :=====================================:
                .=======================================.
                :=======================================:
               .=========================================.
               :=========================================:
              .===========================================.
              :===========================================:
             .=============================================.
             :=============================================:
            .===============================================.
            :===============================================:
           .=================================================.
           :=================================================:
          .===================================================.
          :===================================================:
         .=====================================================.
        .:=====================================================:.
       .-=======================================================-.
      .-=========================================================-.
     .-===========================================================-.
    :-=============================================================-.
   :-================================================================-:
  :-==================================================================-.
 .-====================================================================-.
:=======================================================================:
`;

export default function FinnianSturdy({
  mode = "light",
  availabilityLabel = "NEXT AVAILABLE Q4 '25",
  heading = "Seen enough?",
  headingAccent = "Let's get cooking",
  namePlaceholder = "Your name",
  emailPlaceholder = "Your email",
  companyPlaceholder = "Your Company",
  scopePlaceholder = "Your scope of work",
  messagePlaceholder = "Tell me about your project, goals, timeline, or just say hello..",
  submitButtonText = "Send it to me",
  copyEmailText = "or copy my email",
  email = "hello@example.com",
  scopeOptions = [
    "Brand Identity",
    "Web Design",
    "Product Design",
    "Consulting",
    "Other",
  ],
  onSubmit,
}: FinnianSturdyProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    scope: "",
    message: "",
  });
  const [scopeOpen, setScopeOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleScopeSelect = (scope: string) => {
    setFormData((prev) => ({ ...prev, scope }));
    setScopeOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F3F3F3] overflow-hidden">
      {/* ASCII Art Character - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 text-[3px] sm:text-[4px] md:text-[5px] leading-[1] text-neutral-400/60 font-mono whitespace-pre select-none pointer-events-none"
      >
        {ASCII_ART}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[11px] tracking-[0.2em] text-neutral-500 font-medium">
              {availabilityLabel}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h1 className="font-dm-serif text-4xl md:text-5xl text-neutral-600 leading-tight">
              {heading}
            </h1>
            <p className="font-dm-serif text-4xl md:text-5xl text-[#B8B8B8] italic leading-tight">
              {headingAccent}
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={namePlaceholder}
                className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={emailPlaceholder}
                className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </motion.div>

            {/* Company and Scope Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {/* Company Input */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder={companyPlaceholder}
                className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
              />

              {/* Scope Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setScopeOpen(!scopeOpen)}
                  className="w-full flex items-center justify-between bg-transparent border-b border-neutral-300 py-3 text-sm text-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors text-left"
                >
                  <span
                    className={
                      formData.scope ? "text-neutral-800" : "text-neutral-500"
                    }
                  >
                    {formData.scope || scopePlaceholder}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 transition-transform ${
                      scopeOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {scopeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-md shadow-lg z-20 overflow-hidden"
                  >
                    {scopeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleScopeSelect(option)}
                        className="w-full text-left px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={messagePlaceholder}
                rows={4}
                className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
              />
            </motion.div>

            {/* Submit Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-center justify-center gap-6 pt-4"
            >
              <button
                type="submit"
                className="text-sm text-neutral-800 hover:text-neutral-600 transition-colors underline underline-offset-4"
              >
                {submitButtonText}
              </button>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <span>{copyEmailText}</span>
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
