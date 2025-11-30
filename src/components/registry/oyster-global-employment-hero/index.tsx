"use client";

import { motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

interface OysterGlobalEmploymentHeroProps {
  topBannerText?: string;
  topBannerLinkText?: string;
  logoText?: string;
  navItems?: { label: string; hasDropdown?: boolean }[];
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  images?: { src: string; alt: string }[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function OysterGlobalEmploymentHero({
  topBannerText = "Confidently hire and manage global talent",
  topBannerLinkText = "Get started for free",
  logoText = "Oyster",
  navItems = [
    { label: "Products", hasDropdown: true },
    { label: "Why Oyster", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ],
  headline = "Build diverse global teams compliantly with Oyster",
  description = "Global employment shouldn't be slow or risky. When you partner with Oyster, you access compliant, automated, end-to-end software for global employment, payroll, benefits, and team management.",
  primaryButtonText = "Explore Platform for Free",
  secondaryButtonText = "Get a Demo",
  images = [
    { src: "/registry/oyster-global-employment-hero/collage-1.png", alt: "Remote worker at beach" },
    { src: "/registry/oyster-global-employment-hero/collage-2.png", alt: "Professional in colorful office" },
    { src: "/registry/oyster-global-employment-hero/collage-3.png", alt: "Creative workspace" },
  ],
  onPrimaryClick,
  onSecondaryClick,
}: OysterGlobalEmploymentHeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-sans">
      {/* Google Font Import for Instrument Serif */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>

      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full py-3 text-center text-sm"
        style={{ backgroundColor: "#EEE4B8" }}
      >
        <span className="text-gray-700">{topBannerText}</span>
        <span className="mx-1 text-gray-700">|</span>
        <a href="#" className="text-gray-900 font-medium hover:underline inline-flex items-center gap-1">
          {topBannerLinkText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full bg-white py-3 px-6 lg:px-12 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-12">
          <a href="#" className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Instrument Serif', serif" }}>
            {logoText}
          </a>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-4">
          <a href="#" className="hidden lg:block text-sm text-gray-700 hover:text-gray-900">
            Log In
          </a>
          <a
            href="#"
            className="hidden lg:block text-sm text-gray-900 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
          >
            Speak to an Expert
          </a>
          <a
            href="#"
            className="text-sm text-white px-5 py-2 rounded-full transition-colors"
            style={{ backgroundColor: "#5E5E5E" }}
          >
            Sign Up
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row" style={{ backgroundColor: "#EEE4B8" }}>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 px-6 lg:px-12 py-12 lg:py-24 flex flex-col justify-center"
        >
          {/* Decorative flower element */}
          <div className="absolute top-40 right-[45%] hidden lg:block">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5C20 5 22 12 20 20C18 12 20 5 20 5Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5 20C5 20 12 22 20 20C12 18 5 20 5 20Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <path d="M35 20C35 20 28 22 20 20C28 18 35 20 35 20Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <path d="M20 35C20 35 22 28 20 20C18 28 20 35 20 35Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 9C9 9 14 14 20 20C14 14 9 9 9 9Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <path d="M31 9C31 9 26 14 20 20C26 14 31 9 31 9Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 31C9 31 14 26 20 20C14 26 9 31 9 31Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <path d="M31 31C31 31 26 26 20 20C26 26 31 31 31 31Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <h1
            className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
          >
            {headline}
          </h1>

          <p className="text-base lg:text-lg text-gray-700 mb-8 max-w-xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPrimaryClick}
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              {primaryButtonText}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onSecondaryClick}
              className="px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {secondaryButtonText}
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]"
        >
          {/* Image Grid Collage */}
          <div className="relative w-full h-full grid grid-cols-2 gap-0">
            {/* Top Left - Ocean/Beach Image */}
            <div className="relative overflow-hidden">
              <Image
                src={images[0]?.src || "/registry/oyster-global-employment-hero/collage-1.png"}
                alt={images[0]?.alt || "Remote worker"}
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right - Yellow Wall Image */}
            <div className="relative overflow-hidden">
              <Image
                src={images[1]?.src || "/registry/oyster-global-employment-hero/collage-2.png"}
                alt={images[1]?.alt || "Professional"}
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom - Creative Workspace */}
            <div className="relative overflow-hidden col-span-2 h-[200px]">
              <Image
                src={images[2]?.src || "/registry/oyster-global-employment-hero/collage-3.png"}
                alt={images[2]?.alt || "Workspace"}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
