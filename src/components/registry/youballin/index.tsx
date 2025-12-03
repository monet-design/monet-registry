"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface YouBallinProps {
  mode?: "preview" | "live";
  title?: string;
  buttonText?: string;
  onSubmit?: (data: FormData) => void;
}

// [CUSTOMIZATION]
export const CUSTOMIZATION = {};
// [/CUSTOMIZATION]

interface FormData {
  firstName: string;
  lastName: string;
  socialMediaHandle: string;
  email: string;
  country: string;
}

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "South Korea",
  "Brazil",
  "India",
];

export default function YouBallin({
  mode = "live",
  title = "Jump in",
  buttonText = "Send Enquiry",
  onSubmit,
}: YouBallinProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    socialMediaHandle: "",
    email: "",
    country: "",
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
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0055FE] flex items-center justify-center p-4 md:p-8">
      {/* Lime green blob - top left */}
      <div
        className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
        style={{
          background: "#D2FE8F",
          borderRadius: "0 0 100% 0",
          transform: "translate(-20%, -20%)",
        }}
      />

      {/* Mint blob - top right */}
      <div
        className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
        style={{
          background: "#8BC3B5",
          borderRadius: "0 0 0 100%",
          transform: "translate(20%, -30%)",
        }}
      />

      {/* Lime green blob - bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
        style={{
          background: "#D2FE8F",
          borderRadius: "100% 0 0 0",
          transform: "translate(30%, 30%)",
        }}
      />

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[900px] bg-[#AE94F7] rounded-[32px] px-6 py-10 md:px-12 md:py-14"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#1a1a2e] text-4xl md:text-5xl font-normal mb-10 md:mb-12"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {title}
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
          {/* First Row: First name, Last name, Social media handle */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">
                First name <span className="text-[#1a1a2e]">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name here"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-transparent border-2 border-[#8572BC] text-[#1a1a2e] placeholder:text-[#5a4a8a] focus:outline-none focus:border-[#1a1a2e] transition-colors text-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">
                Last name <span className="text-[#1a1a2e]">*</span>
              </label>
              <input
                type="text"
                placeholder="Your last name here"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-transparent border-2 border-[#8572BC] text-[#1a1a2e] placeholder:text-[#5a4a8a] focus:outline-none focus:border-[#1a1a2e] transition-colors text-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">
                Social media handle
              </label>
              <input
                type="text"
                placeholder="Social media handle here"
                value={formData.socialMediaHandle}
                onChange={(e) => handleInputChange("socialMediaHandle", e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-transparent border-2 border-[#8572BC] text-[#1a1a2e] placeholder:text-[#5a4a8a] focus:outline-none focus:border-[#1a1a2e] transition-colors text-sm"
              />
            </motion.div>
          </div>

          {/* Second Row: Email, Country, Button */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">
                Email <span className="text-[#1a1a2e]">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email here"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-transparent border-2 border-[#8572BC] text-[#1a1a2e] placeholder:text-[#5a4a8a] focus:outline-none focus:border-[#1a1a2e] transition-colors text-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="relative"
            >
              <label className="block text-[#1a1a2e] text-sm font-semibold mb-2">
                Country <span className="text-[#1a1a2e]">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-5 py-3 rounded-full bg-transparent border-2 border-[#8572BC] text-left focus:outline-none focus:border-[#1a1a2e] transition-colors text-sm flex items-center justify-between"
                >
                  <span className={formData.country ? "text-[#1a1a2e]" : "text-[#5a4a8a]"}>
                    {formData.country || "Select country"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8572BC] transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg overflow-hidden z-20 max-h-[200px] overflow-y-auto"
                  >
                    {countries.map((country) => (
                      <button
                        key={country}
                        type="button"
                        onClick={() => {
                          handleInputChange("country", country);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-5 py-3 text-left text-sm text-[#1a1a2e] hover:bg-[#AE94F7]/30 transition-colors"
                      >
                        {country}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 rounded-full bg-[#1a1a2e] text-white font-medium text-sm hover:bg-[#2a2a3e] transition-colors"
              >
                {buttonText}
              </motion.button>
            </motion.div>
          </div>
        </form>
      </motion.div>

      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
      `}</style>
    </div>
  );
}
