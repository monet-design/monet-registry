"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface AuctionHeroSkylineProps {
  logoText?: string;
  navItems?: NavItem[];
  headline?: string;
  subheadline?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  contactButtonText?: string;
  contactButtonHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onContactClick?: () => void;
}

export default function AuctionHeroSkyline({
  logoText = "cpp",
  navItems = [
    { label: "Solution", href: "#" },
    { label: "Use cases", href: "#", isActive: true },
    { label: "Pricing", href: "#" },
    { label: "Developers", href: "#" },
    { label: "About us", href: "#" },
    { label: "Support", href: "#" },
    { label: "Login", href: "#" },
  ],
  headline = "Bidding and\nensuring the arrival\nof funds",
  subheadline = "Auctions have an exciting dynamic. That magical feeling\ncan only exist if you ensure payment arrive.",
  primaryButtonText = "Start now",
  primaryButtonHref = "#",
  secondaryButtonText = "Features",
  secondaryButtonHref = "#",
  contactButtonText = "Contact",
  contactButtonHref = "#",
  onPrimaryClick,
  onSecondaryClick,
  onContactClick,
}: AuctionHeroSkylineProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFFCF1]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center">
          <svg
            width="80"
            height="32"
            viewBox="0 0 80 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#9CB2F2]"
          >
            <path
              d="M16 6C10.477 6 6 10.477 6 16s4.477 10 10 10c3.5 0 6.5-1.8 8.3-4.5"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M32 6C26.477 6 22 10.477 22 16s4.477 10 10 10c3.5 0 6.5-1.8 8.3-4.5"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M48 6c-5.523 0-10 4.477-10 10s4.477 10 10 10h8V16c0-5.523-4.477-10-10-10z"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Nav Items */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-sm transition-colors ${
                item.isActive
                  ? "font-medium text-[#615EEB]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white">
            <span className="text-xs font-medium">EN</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={onContactClick}
            className="flex items-center gap-2 rounded-full bg-[#615EEB] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#5250d9]"
          >
            {contactButtonText}
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-12 text-center lg:pt-16">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-4xl italic leading-tight text-gray-900 md:text-5xl lg:text-6xl"
          style={{ whiteSpace: "pre-line" }}
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 max-w-xl text-base text-gray-600 lg:text-lg"
          style={{ whiteSpace: "pre-line" }}
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={primaryButtonHref}
            onClick={(e) => {
              if (onPrimaryClick) {
                e.preventDefault();
                onPrimaryClick();
              }
            }}
            className="flex items-center gap-2 rounded-full bg-[#615EEB] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#5250d9] hover:shadow-lg"
          >
            {primaryButtonText}
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={secondaryButtonHref}
            onClick={(e) => {
              if (onSecondaryClick) {
                e.preventDefault();
                onSecondaryClick();
              }
            }}
            className="rounded-full border border-gray-300 bg-transparent px-6 py-3 text-sm font-medium text-[#615EEB] transition-all hover:border-[#615EEB] hover:bg-[#615EEB]/5"
          >
            {secondaryButtonText}
          </a>
        </motion.div>
      </div>

      {/* City Skyline Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute inset-x-0 bottom-0 z-0"
      >
        <div className="relative h-[300px] w-full lg:h-[350px]">
          <Image
            src="/registry/auction-hero-skyline/city-skyline.png"
            alt="City skyline illustration"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
