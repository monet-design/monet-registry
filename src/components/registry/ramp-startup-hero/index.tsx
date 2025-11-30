"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface RampStartupHeroProps {
  logoText?: string;
  headline?: string;
  description?: string;
  inputPlaceholder?: string;
  ctaText?: string;
  disclaimer?: string;
  signInText?: string;
  navItems?: NavItem[];
  heroImage?: string;
  onSubmit?: (email: string) => void;
}

// Ramp Logo Icon
function RampLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 12h7v10l12-12h-7V2z"
        fill="#1A1A1A"
      />
    </svg>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Customers", href: "#", hasDropdown: false },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#", hasDropdown: false },
];

export default function RampStartupHero({
  logoText = "ramp",
  headline = "Spend\nmanagement for\nyour startup",
  description = "Scale and run your business and let Ramp help optimize your spending with a single finance operations platform.",
  inputPlaceholder = "What's your work email?",
  ctaText = "Get Started",
  disclaimer = "No personal credit checks or founder guarantee.",
  signInText = "Sign in",
  navItems = defaultNavItems,
  heroImage = "/registry/ramp-startup-hero/business-team.jpg",
  onSubmit,
}: RampStartupHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#D4D4CF]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <RampLogo />
          <span className="text-base font-medium text-[#1A1A1A]">{logoText}</span>
        </div>

        {/* Nav Items - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-[#1A1A1A] hover:opacity-70 transition-opacity"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} strokeWidth={2} />}
            </a>
          ))}
        </div>

        {/* Sign In */}
        <a
          href="#"
          className="text-sm text-[#1A1A1A] hover:opacity-70 transition-opacity"
        >
          {signInText}
        </a>
      </motion.nav>

      {/* Separator Line */}
      <div className="w-full h-px bg-[#1A1A1A]/10" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-73px)]">
        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-16 lg:py-0">
          <div className="max-w-lg">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#1A1A1A] tracking-tight whitespace-pre-line"
            >
              {headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-sm sm:text-base leading-relaxed text-[#1A1A1A]/80 max-w-md"
            >
              {description}
            </motion.p>

            {/* Email Input Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="mt-8 flex items-center gap-0 rounded-full border border-[#1A1A1A] bg-white p-1 max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={inputPlaceholder}
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#C5D026] px-5 py-2.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#B5C016] whitespace-nowrap"
              >
                {ctaText}
              </button>
            </motion.form>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-xs text-[#1A1A1A]/60"
            >
              {disclaimer}
            </motion.p>
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex-1 relative min-h-[400px] lg:min-h-0"
        >
          <div className="absolute inset-4 sm:inset-6 lg:inset-8 lg:left-0 overflow-hidden rounded-2xl">
            <Image
              src={heroImage}
              alt="Business professionals collaborating"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
