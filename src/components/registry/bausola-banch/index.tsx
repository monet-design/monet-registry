"use client";

import { useState } from "react";
import { motion } from "motion/react";
import "./font.css";

interface BausolaBanchProps {
  headline?: React.ReactNode;
  description?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  privacyPolicyText?: React.ReactNode;
  buttonText?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export default function BausolaBanch({
  headline = (
    <>
      We know how to
      <br />
      make your
      <br />
      workplace perfect
    </>
  ),
  description = "The future of workbench has arrived, leave us a message to get information about it.",
  namePlaceholder = "name",
  emailPlaceholder = "email",
  messagePlaceholder = "message",
  privacyPolicyText = (
    <>
      I declare that I have read the{" "}
      <a href="#" className="underline hover:text-white transition-colors">
        Privacy Policy
      </a>{" "}
      and consent to the processing of my personal data. Pursuant to the EU
      Regulation 2016/679 (GDPR) the processing and storage of personal data
      takes place for the purposes and in the manner specified in the{" "}
      <a href="#" className="underline hover:text-white transition-colors">
        Privacy Policy
      </a>
      .
    </>
  ),
  buttonText = "CONTACT US",
  onSubmit,
}: BausolaBanchProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && isChecked) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full bg-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left Column - Headline and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2
              className="text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.15] tracking-tight text-white italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {headline}
            </h2>

            <p className="mt-10 text-xs leading-relaxed text-[#6a6a6a] max-w-[220px]">
              {description}
            </p>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs text-white tracking-wide"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {namePlaceholder}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent border-0 border-b border-white/60 pb-3 text-white text-sm outline-none focus:border-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs text-white tracking-wide"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {emailPlaceholder}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent border-0 border-b border-white/60 pb-3 text-white text-sm outline-none focus:border-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs text-white tracking-wide"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {messagePlaceholder}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="bg-transparent border-0 border-b border-white/60 pb-3 text-white text-sm outline-none focus:border-white transition-colors resize-none"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3 mt-2">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="privacy"
                    className="flex h-3.5 w-3.5 cursor-pointer items-center justify-center border border-white/50 bg-transparent transition-all peer-checked:bg-white peer-checked:border-white"
                  >
                    {isChecked && (
                      <svg
                        className="h-2.5 w-2.5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </label>
                </div>
                <label
                  htmlFor="privacy"
                  className="text-[10px] leading-relaxed text-[#6a6a6a] cursor-pointer"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {privacyPolicyText}
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!isChecked}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 self-start border border-white px-8 py-3 text-xs tracking-widest text-white transition-all hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {buttonText}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
