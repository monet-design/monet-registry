"use client";

import { motion } from "motion/react";
import { ChevronDown, ArrowDown, Check } from "lucide-react";
import Image from "next/image";

// Font CSS - loaded via link tag in head
const fontUrl = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap";

interface RampHomePageSectionHeroProps {
  headline?: string;
  subheadline?: string;
  emailPlaceholder?: string;
  ctaText?: string;
  disclaimer?: string;
  logoText?: string;
  navItems?: { label: string; hasDropdown?: boolean }[];
  signInText?: string;
  exploreText?: string;
  transactionLabel?: string;
  transactionAmount?: string;
  transactionSubtext?: string;
  currencyFrom?: string;
  currencyTo?: string;
  invoiceCompany?: string;
  invoiceLabel?: string;
  invoiceAmount?: string;
  invoiceId?: string;
  invoiceDuration?: string;
  peopleLaptopImage?: string;
  handCardImage?: string;
}

export default function RampHomePageSectionHero({
  headline = "Spending made smarter",
  subheadline = "Easy-to-use cards, spend limits, approval flows, vendor\npayments, and more—plus an average savings of 3.5%.",
  emailPlaceholder = "What's your work email?",
  ctaText = "Get Started",
  disclaimer = "No personal credit checks or founder guarantee.",
  logoText = "ramp",
  navItems = [
    { label: "Products", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Customers", hasDropdown: false },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ],
  signInText = "Sign in",
  exploreText = "Explore",
  transactionLabel = "UPS",
  transactionAmount = "$331",
  transactionSubtext = "Auto-coding...",
  currencyFrom = "$63.23",
  currencyTo = "¥8,973",
  invoiceCompany = "R.Estate",
  invoiceLabel = "Invoice total",
  invoiceAmount = "$27,000",
  invoiceId = "CI-14884",
  invoiceDuration = "1 month",
  peopleLaptopImage = "/registry/ramp-home-page-section-hero/people-laptop.jpg",
  handCardImage = "/registry/ramp-home-page-section-hero/hand-card.jpg",
}: RampHomePageSectionHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#707062] overflow-hidden font-sans">
      {/* Font Import */}
      <link rel="stylesheet" href={fontUrl} />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
      >
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-white text-xl font-semibold tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
            {logoText}
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#C3CD30]">
            <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </button>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button
            className="text-white/80 hover:text-white text-sm px-4 py-2 transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {signInText}
          </button>
          <button
            className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-md transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {exploreText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl text-center text-white/90 mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8 whitespace-pre-line"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {subheadline}
        </motion.p>

        {/* Email Input + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mb-4"
        >
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg max-w-md w-full">
            <input
              type="email"
              placeholder={emailPlaceholder}
              className="flex-1 px-6 py-4 text-gray-700 text-sm outline-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <button
              className="bg-[#C3CD30] hover:bg-[#d4de41] text-black font-medium px-6 py-4 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {ctaText}
            </button>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-white/50 text-xs mb-16"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {disclaimer}
        </motion.p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-12 gap-4 max-w-5xl mx-auto">
          {/* Transaction Card - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="col-span-12 md:col-span-3 row-span-1"
          >
            <div className="bg-[#E8E8E4] rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#6B4F00] rounded-md flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#FFD700]">
                      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                      {transactionLabel}
                    </p>
                    <p className="text-gray-500 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                      {transactionSubtext}
                    </p>
                  </div>
                </div>
                <span className="text-gray-900 font-semibold text-base" style={{ fontFamily: "Inter, sans-serif" }}>
                  {transactionAmount}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="hidden md:block col-span-4" />

          {/* People Image - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="col-span-12 md:col-span-5 row-span-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg h-40">
              <Image
                src={peopleLaptopImage}
                alt="People collaborating"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Hand Card Image - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="col-span-12 md:col-span-4 row-span-2"
          >
            <div className="bg-[#E8E8E4] rounded-2xl overflow-hidden shadow-lg h-64">
              <Image
                src={handCardImage}
                alt="Hand holding card"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Currency Conversion Card - Bottom Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="col-span-12 md:col-span-3 row-span-2"
          >
            <div className="bg-[#E8E8E4] rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
              <span
                className="text-4xl font-light text-gray-800 mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {currencyFrom}
              </span>
              <ArrowDown className="w-5 h-5 text-gray-400 my-2" />
              <span
                className="text-4xl font-light text-[#8B8B60]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {currencyTo}
              </span>
            </div>
          </motion.div>

          {/* Invoice Card - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="col-span-12 md:col-span-5 row-span-2"
          >
            <div className="bg-white rounded-2xl p-5 shadow-lg h-64 flex flex-col justify-between">
              {/* Company Badge */}
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-gray-800 font-medium text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  {invoiceCompany}
                </span>
              </div>

              {/* Invoice Preview Lines */}
              <div className="space-y-2">
                <div className="h-2 bg-gray-100 rounded w-3/4" />
                <div className="h-2 bg-gray-100 rounded w-full" />
                <div className="h-2 bg-gray-100 rounded w-2/3" />
              </div>

              {/* Invoice Details */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                  <span className="text-gray-600 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    {invoiceLabel}
                  </span>
                  <span className="text-gray-900 text-xs font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                    {invoiceAmount}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-600 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    {invoiceId}
                  </span>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-600 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    {invoiceDuration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="w-2 h-2 text-white" />
                  </div>
                  <span className="text-gray-900 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                    {invoiceAmount}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
