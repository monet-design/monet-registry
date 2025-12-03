"use client";

import { useState } from "react";
import { motion } from "motion/react";

// Types
interface NavLink {
  label: string;
  href: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface ContactInfo {
  phone: string;
  email: string;
}

interface VirtuDigitalProps {
  mode?: "preview" | "live";
  headline?: string;
  navLinks?: NavLink[];
  copyrightText?: string;
  footerLinks?: FooterLink[];
  designerCredit?: string;
  contactInfo?: ContactInfo;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  submitText?: string;
  onSubmit?: (data: { name: string; email: string; phone: string }) => void;
}

// [CUSTOMIZATION]
export const CUSTOMIZATION = {};
// [/CUSTOMIZATION]

// Default data
const defaultNavLinks: NavLink[] = [
  { label: "Cases", href: "#" },
  { label: "Competencies", href: "#" },
  { label: "About", href: "#" },
  { label: "Customers", href: "#" },
];

const defaultFooterLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "About Cookies", href: "#" },
];

const defaultContactInfo: ContactInfo = {
  phone: "+7(999)200-06-00",
  email: "info@virtudigital.agency",
};

export default function VirtuDigital({
  mode = "live",
  headline = "Let\u2019s collaborate!",
  navLinks = defaultNavLinks,
  copyrightText = "\u00A9 2025 / VIRTUDIGITAL / All rights reserved",
  footerLinks = defaultFooterLinks,
  designerCredit = "Designed by Vyacheslav Tikhonov",
  contactInfo = defaultContactInfo,
  namePlaceholder = "Your Name",
  emailPlaceholder = "mail@example.com",
  phonePlaceholder = "+1 (999) 999-9999",
  submitText = "Submit",
  onSubmit,
}: VirtuDigitalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className="relative w-full bg-[#414C8F] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16 lg:px-20 lg:py-20">
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-3xl font-light italic text-white sm:mb-14 sm:text-4xl md:mb-16 md:text-5xl lg:text-6xl"
      >
        {headline}
      </motion.h2>

      {/* Main Content Grid */}
      <div className="grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
        {/* Left Column - Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="md:col-span-2"
        >
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Middle Column - Footer Links & Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-1.5 md:col-span-4"
        >
          <p className="whitespace-nowrap text-[10px] text-white/50">{copyrightText}</p>
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-[10px] text-white/50 transition-colors hover:text-white/70"
            >
              {link.label}
            </a>
          ))}
          <p className="pt-2 text-[10px] text-white/50">{designerCredit}</p>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="md:col-span-6"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="border-b border-white/30 pb-3">
              <input
                type="text"
                value={formData.name}
                onChange={handleChange("name")}
                placeholder={namePlaceholder}
                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="border-b border-white/30 pb-3">
              <input
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                placeholder={emailPlaceholder}
                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
            </div>

            {/* Phone Input */}
            <div className="flex items-center gap-2 border-b border-white/30 pb-3">
              <span className="flex items-center gap-1.5 text-sm text-white/70">
                <span className="text-base">🇺🇸</span>
                <span>+</span>
              </span>
              <input
                type="tel"
                value={formData.phone}
                onChange={handleChange("phone")}
                placeholder={phonePlaceholder}
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-sm border border-[#3F498E] bg-white px-8 py-2.5 text-sm font-medium text-[#3F498E] transition-colors hover:bg-white/90"
              >
                {submitText}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Bottom Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 space-y-1 md:mt-16"
      >
        <p className="text-lg font-light text-white sm:text-xl">
          {contactInfo.phone}
        </p>
        <p className="text-lg font-semibold text-white sm:text-xl md:text-2xl">
          {contactInfo.email}
        </p>
      </motion.div>
    </section>
  );
}
