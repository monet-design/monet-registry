"use client";

import { motion } from "motion/react";

interface NavItem {
  label: string;
  href: string;
}

interface AtriumHeroProps {
  logoText?: string;
  headline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  heroImage?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Star/Asterisk Logo Icon
function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14 0V28M0 14H28M3.515 3.515L24.485 24.485M24.485 3.515L3.515 24.485"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Fa vard", href: "#" },
  { label: "Program", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Om oss", href: "#" },
];

export default function AtriumHero({
  logoText = "Atrium\nVardcentral",
  headline = "Din vardcentral for\nett halsosamt liv",
  primaryButtonText = "Boka tid",
  secondaryButtonText = "Lista dig",
  navItems = defaultNavItems,
  ctaButtonText = "Mitt Konto",
  heroImage = "/registry/atrium-hero/clinic-interior.jpg",
  onPrimaryClick,
  onSecondaryClick,
}: AtriumHeroProps) {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-[#FEF5D4] to-[#F4C433]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-14"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <LogoIcon className="text-[#1A1A1A]" />
          <span className="whitespace-pre-line text-sm font-medium leading-tight text-[#1A1A1A]">
            {logoText}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#1A1A1A]/80 transition-colors hover:text-[#1A1A1A]"
            >
              {item.label}
            </a>
          ))}
          <button className="rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#333]">
            {ctaButtonText}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] md:hidden">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H17M1 7H17M1 13H17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="relative flex min-h-[500px] w-full">
        {/* Left Content Area */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-12 sm:px-10 md:w-1/2 lg:px-14 lg:py-16">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="whitespace-pre-line font-serif text-4xl font-normal italic leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl"
          >
            {headline}
          </motion.h1>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onPrimaryClick}
              className="rounded-full bg-[#1A1A1A] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#333] hover:shadow-lg"
            >
              {primaryButtonText}
            </button>
            <button
              onClick={onSecondaryClick}
              className="rounded-full border-2 border-[#1A1A1A]/30 bg-transparent px-7 py-3.5 text-sm font-medium text-[#1A1A1A] transition-all hover:border-[#1A1A1A]/60 hover:bg-white/20"
            >
              {secondaryButtonText}
            </button>
          </motion.div>
        </div>

        {/* Right Image Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute right-0 top-0 hidden h-full w-[60%] md:block"
        >
          <div className="relative h-full w-full overflow-hidden">
            {/* Gradient overlay for smooth blend */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#F4C433] via-[#F4C433]/50 to-transparent" />

            {/* Hero Image */}
            <img
              src={heroImage}
              alt="Modern healthcare clinic interior"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Mobile Image (shown below content on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="absolute bottom-0 right-0 h-[200px] w-full md:hidden"
        >
          <div className="relative h-full w-full overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#F4C433] to-transparent" />
            <img
              src={heroImage}
              alt="Modern healthcare clinic interior"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
