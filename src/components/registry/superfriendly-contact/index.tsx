"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

// Types
interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface SuperfriendlyContactProps {
  headline?: string;
  subheadline?: string;
  email?: string;
  socialLinks?: SocialLink[];
  partnerText?: string;
  partnerLink?: string;
  onSubmit?: (data: { name: string; email: string; inquiry: string }) => void;
}

// Default social links
const defaultSocialLinks: SocialLink[] = [
  {
    icon: <Instagram size={14} strokeWidth={1.5} />,
    label: "Instagram",
    href: "#",
  },
  {
    icon: <Linkedin size={14} strokeWidth={1.5} />,
    label: "Linkedin",
    href: "#",
  },
  {
    icon: <Twitter size={14} strokeWidth={1.5} />,
    label: "Twitter",
    href: "#",
  },
];

// Gradient Logo Component
function SuperfriendlyLogo() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 300 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[280px] h-auto"
      >
        <defs>
          <linearGradient
            id="superfriendly-gradient-1"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="30%" stopColor="#EC8CCB" />
            <stop offset="60%" stopColor="#86EFAC" />
            <stop offset="100%" stopColor="#6EE7B7" />
          </linearGradient>
          <linearGradient
            id="superfriendly-gradient-2"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="25%" stopColor="#C084FC" />
            <stop offset="50%" stopColor="#86EFAC" />
            <stop offset="75%" stopColor="#67E8F9" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="38"
          fill="url(#superfriendly-gradient-1)"
          fontFamily="Inter, sans-serif"
          fontSize="42"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="-0.02em"
        >
          SUPER
        </text>
        <text
          x="0"
          y="88"
          fill="url(#superfriendly-gradient-2)"
          fontFamily="Inter, sans-serif"
          fontSize="42"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="-0.02em"
        >
          FRIENDLY
        </text>
      </svg>
    </div>
  );
}

// Main Component
export default function SuperfriendlyContact({
  headline = "LET'S BUILD\nTOGETHER",
  subheadline = "We're Currently Booking\nProjects For 2025.",
  email = "hi@superfriendly.com",
  socialLinks = defaultSocialLinks,
  partnerText = "Barrel Holdings",
  partnerLink = "#",
  onSubmit,
}: SuperfriendlyContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative w-full min-h-screen bg-[#2A2A2A] text-white px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-10 flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        {/* Top Section - Header and Form */}
        <div className="grid grid-cols-1 md:grid-cols-[35%_1fr] gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Headline and Subheadline */}
          <div className="space-y-6">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-[24px] lg:text-[26px] font-light tracking-[0.12em] text-[#8A8A86] whitespace-pre-line leading-[1.3]"
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-sm text-[#6A6A66] italic whitespace-pre-line leading-relaxed"
            >
              {subheadline}
            </motion.p>
          </div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name & Email Row */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Name Field */}
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-[11px] text-[#707068] tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#454542] py-2 text-sm text-white placeholder:text-[#606060] focus:outline-none focus:border-[#606060] transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-[11px] text-[#707068] tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#454542] py-2 text-sm text-white placeholder:text-[#606060] focus:outline-none focus:border-[#606060] transition-colors"
                />
              </div>
            </div>

            {/* Inquiry Field */}
            <div className="space-y-1">
              <label
                htmlFor="inquiry"
                className="block text-[11px] text-[#707068] tracking-wide"
              >
                Inquiry
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                rows={2}
                className="w-full bg-transparent border-b border-[#454542] py-2 text-sm text-white placeholder:text-[#606060] focus:outline-none focus:border-[#606060] transition-colors resize-none"
              />
            </div>

            {/* Submit Button Row */}
            <div className="flex items-center justify-end pt-2">
              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#72D37B] hover:bg-[#65C46E] text-[#1A1A1A] px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Let&apos;s Talk
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Bottom Section - Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-auto pt-10 md:pt-12 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 items-end"
        >
          {/* Left Footer - Contact & Social */}
          <div className="flex gap-12 md:gap-16 lg:gap-20">
            {/* Say Hello */}
            <div className="space-y-2">
              <h3 className="text-[9px] text-[#505050] uppercase tracking-[0.15em]">
                Say Hello
              </h3>
              <a
                href={`mailto:${email}`}
                className="block text-sm text-[#858580] hover:text-white transition-colors"
              >
                {email}
              </a>
            </div>

            {/* Follow Us */}
            <div className="space-y-2">
              <h3 className="text-[9px] text-[#505050] uppercase tracking-[0.15em]">
                Follow Us
              </h3>
              <ul className="space-y-1">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-[#858580] hover:text-white transition-colors"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Footer - Logo & Partner */}
          <div className="flex flex-col items-start md:items-end gap-2">
            {/* Gradient Logo */}
            <SuperfriendlyLogo />

            {/* Partner Info */}
            <p className="text-xs text-[#606060] italic">
              Part of{" "}
              <a
                href={partnerLink}
                className="underline hover:text-[#808080] transition-colors"
              >
                {partnerText}
              </a>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
