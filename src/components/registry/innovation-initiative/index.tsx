"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Link2 } from "lucide-react";

// Types
interface InnovationInitiativeProps {
  mode?: "light" | "dark";
  logoText?: string;
  headingText?: string;
  descriptionText?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  organizationPlaceholder?: string;
  ctaText?: string;
  copyrightText?: string;
  privacyText?: string;
  onSubmit?: (data: { name: string; email: string; organization: string }) => void;
}

// Concentric circles logo component
function ConcentricLogo() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Concentric circles logo - full circles */}
      <circle
        cx="28"
        cy="28"
        r="24"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="28"
        cy="28"
        r="18"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="28"
        cy="28"
        r="12"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="28"
        cy="28"
        r="6"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="28"
        cy="28"
        r="2"
        fill="white"
      />
    </svg>
  );
}

// Main Component
export default function InnovationInitiative({
  mode = "light",
  logoText = "Innovation\nInitiative",
  headingText = "Want to to learn more about Innovation Initiative? Fill\nout the form below and we'll be in touch.",
  descriptionText,
  namePlaceholder = "Name",
  emailPlaceholder = "Email",
  organizationPlaceholder = "Organization",
  ctaText = "CONNECT",
  copyrightText = "2025 Innovation Initiative",
  privacyText = "Privacy Policy",
  onSubmit,
}: InnovationInitiativeProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0B081B]">
      {/* Abstract gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple/magenta wave gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[70%] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 30% 100%, rgba(120, 50, 140, 0.6) 0%, rgba(80, 30, 100, 0.4) 30%, transparent 70%)",
          }}
        />
        {/* Secondary wave */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[50%] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 100% 60% at 50% 120%, rgba(140, 60, 120, 0.5) 0%, rgba(100, 40, 90, 0.3) 40%, transparent 70%)",
          }}
        />
        {/* Curved lines effect */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[60%] opacity-30"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,400 Q300,200 600,300 T1200,100"
            stroke="url(#gradient1)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,400 Q350,180 650,280 T1200,80"
            stroke="url(#gradient1)"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0,400 Q250,220 550,320 T1200,120"
            stroke="url(#gradient1)"
            strokeWidth="0.5"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(180, 100, 180, 0.6)" />
              <stop offset="50%" stopColor="rgba(120, 80, 160, 0.4)" />
              <stop offset="100%" stopColor="rgba(80, 60, 140, 0.2)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Diagonal lines in bottom right */}
        <svg
          className="absolute bottom-0 right-0 w-[40%] h-[40%] opacity-20"
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
          fill="none"
        >
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={50 + i * 50}
              y1="400"
              x2="400"
              y2={350 - i * 50}
              stroke="rgba(200, 180, 160, 0.3)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-12 lg:px-16">
        {/* Two column layout */}
        <div className="flex flex-1 flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left side - Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-center gap-4 lg:mb-0 lg:flex-1"
          >
            <ConcentricLogo />
            <h1 className="text-2xl font-normal leading-tight text-[#CCFD79] sm:text-3xl whitespace-pre-line">
              {logoText}
            </h1>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:flex-1 lg:max-w-md"
          >
            {/* Description text */}
            <p className="mb-6 text-sm leading-relaxed text-gray-300 whitespace-pre-line">
              {descriptionText || headingText}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange("name")}
                  placeholder={namePlaceholder}
                  className="w-full border-b border-gray-600 bg-transparent px-0 py-3 text-sm text-white text-center placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                />
              </motion.div>

              {/* Email input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  placeholder={emailPlaceholder}
                  className="w-full border-b border-gray-600 bg-transparent px-0 py-3 text-sm text-white text-center placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                />
              </motion.div>

              {/* Organization input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <input
                  type="text"
                  value={formData.organization}
                  onChange={handleChange("organization")}
                  placeholder={organizationPlaceholder}
                  className="w-full border-b border-gray-600 bg-transparent px-0 py-3 text-sm text-white text-center placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                />
              </motion.div>

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="pt-4"
              >
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#CCFD79] px-6 py-2.5 text-sm font-medium text-[#1A1A1A] transition-all hover:bg-[#D8FF8A] hover:shadow-lg hover:shadow-[#CCFD79]/20"
                >
                  {ctaText}
                  <Link2 size={16} className="rotate-45" />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-auto flex items-center justify-between pt-12 text-xs text-gray-500"
        >
          <span>&copy; {copyrightText}</span>
          <a
            href="#"
            className="transition-colors hover:text-gray-300"
          >
            {privacyText}
          </a>
        </motion.footer>
      </div>
    </section>
  );
}
