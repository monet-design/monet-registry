"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero18Props {
  logoName?: string;
  logoAccent?: string;
  navItems?: NavItem[];
  signUpText?: string;
  tagline?: string;
  headlineStart?: string;
  headlineAccent?: string;
  description?: string;
  priceLabel?: string;
  price?: string;
  pricePeriod?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onSignUpClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [{ label: "Courses", href: "#courses" }];

// Wheat Icon for Logo
function WheatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 22 16 8" />
      <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M20 2 8 14" />
      <path d="M20.53 12.47 19 11l-1.53 1.53a3.5 3.5 0 0 0 0 4.94L19 19l1.53-1.53a3.5 3.5 0 0 0 0-4.94Z" />
      <path d="M16.53 8.47 15 7l-1.53 1.53a3.5 3.5 0 0 0 0 4.94L15 15l1.53-1.53a3.5 3.5 0 0 0 0-4.94Z" />
    </svg>
  );
}

// Main Component
export default function LandingfolioHero18({
  logoName = "Baker",
  logoAccent = "STREET",
  navItems = defaultNavItems,
  signUpText = "Sign Up",
  tagline = "Master the basics of baking",
  headlineStart = "The road to the",
  headlineAccent = "perfect loaf",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.",
  priceLabel = "Starting at",
  price = "$9.99",
  pricePeriod = "/month",
  primaryButtonText = "Get started",
  secondaryButtonText = "Watch trailer",
  backgroundImage = "/landingfolio-hero/hero-18/bread-background.jpg",
  onPrimaryClick,
  onSecondaryClick,
  onSignUpClick,
}: LandingfolioHero18Props) {
  return (
    <section className="relative w-full min-h-screen bg-[#0D0E12] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Artisan bread"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay for better text readability on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E12] via-[#0D0E12]/80 to-transparent" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-8 lg:px-16 py-6"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <WheatIcon className="text-white" />
          <div className="flex items-baseline">
            <span
              className="text-white text-lg italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {logoName}
            </span>
            <span className="text-white text-sm font-medium tracking-widest uppercase ml-0.5">
              {logoAccent}
            </span>
          </div>
        </div>

        {/* Right Side Navigation */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-sm font-medium hover:text-white/80 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onSignUpClick}
            className="px-5 py-2.5 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            {signUpText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-88px)] px-8 lg:px-16">
        <div className="max-w-xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-white/60 text-sm mb-6"
          >
            {tagline}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {headlineStart}
            <br />
            <span className="italic">{headlineAccent}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white/60 text-base leading-relaxed mb-8 max-w-md"
          >
            {description}
          </motion.p>

          {/* Pricing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-white text-lg mb-6"
          >
            {priceLabel}{" "}
            <span className="font-semibold">
              {price}
              {pricePeriod}
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={onPrimaryClick}
              className="px-8 py-3.5 bg-white text-[#0D0E12] text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
            >
              {primaryButtonText}
            </button>
            <button
              onClick={onSecondaryClick}
              className="flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              <Play size={16} fill="currentColor" />
              {secondaryButtonText}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
