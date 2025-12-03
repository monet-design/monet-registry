"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

// CUSTOMIZATION
const CUSTOMIZATION = {};

interface OchoHomePageSectionHeroProps {
  mode?: "light" | "dark";
  badge?: string;
  headline?: string;
  description?: string;
  ctaNote?: string;
  emailPlaceholder?: string;
  ctaButtonText?: string;
  dashboardImage?: string;
  logoText?: string;
  navItems?: Array<{ label: string; hasDropdown?: boolean }>;
  signInText?: string;
  getStartedText?: string;
}

export default function OchoHomePageSectionHero({
  mode = "light",
  badge = "Now in Beta!",
  headline = "Building wealth for\nbusiness owners",
  description = "Ocho is everything you need to build wealth as an entrepreneur, freelancer, consultant or independent business owner. We exist to serve entrepreneurs with the tools, education and network to transform their business income into generational wealth.",
  ctaNote = "Setting up your Solo401k takes less than 10 min",
  emailPlaceholder = "Email address...",
  ctaButtonText = "Get Started",
  dashboardImage = "/registry/ocho-home-page-section-hero/dashboard-mockup.png",
  logoText = "ocho",
  navItems = [
    { label: "Products", hasDropdown: true },
    { label: "Learn", hasDropdown: false },
  ],
  signInText = "Sign In",
  getStartedText = "Get Started",
}: OchoHomePageSectionHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#FDFCFE] overflow-hidden">
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-8 md:px-16 py-4"
      >
        {/* Logo */}
        <div
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {logoText}
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </button>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button
            className="hidden md:block text-gray-700 hover:text-gray-900 transition-colors text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {signInText}
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2.5 bg-[#6971ED] text-white rounded-lg hover:bg-[#5a62d4] transition-colors text-sm font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {getStartedText}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-8 pt-12 pb-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block mb-6"
        >
          <span
            className="px-4 py-1.5 text-xs font-medium text-gray-600 border border-gray-300 rounded-full bg-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6 whitespace-pre-line"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {description}
        </motion.p>

        {/* CTA Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#6971ED] text-sm font-medium mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {ctaNote}
        </motion.p>

        {/* Email Input + CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
        >
          <div className="relative flex items-center w-full sm:w-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <Input
              type="email"
              placeholder={emailPlaceholder}
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm px-4 py-3 w-full sm:w-64"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button
              className="flex items-center gap-2 px-5 py-2.5 bg-[#6971ED] text-white rounded-lg hover:bg-[#5a62d4] transition-colors text-sm font-medium mr-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {ctaButtonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="max-w-5xl mx-auto px-4 pb-16"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <img
            src={dashboardImage}
            alt="Ocho Dashboard Preview"
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
