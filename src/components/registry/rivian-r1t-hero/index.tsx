"use client";

import { motion } from "motion/react";
import { Menu } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface RivianR1tHeroProps {
  mode?: "light" | "dark";
  // Top banner
  bannerText?: string;
  bannerLinkText?: string;
  onBannerLinkClick?: () => void;
  // Navigation
  logoText?: string;
  navItems?: NavItem[];
  rightNavItems?: { label: string; href: string }[];
  // Hero content
  modelName?: string;
  tagline?: string;
  price?: string;
  priceUnit?: string;
  disclaimerText?: string;
  onDisclaimerClick?: () => void;
  // CTA buttons
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  // Background
  backgroundImage?: string;
}

const CUSTOMIZATION = {}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "R1T", href: "#", isActive: true },
  { label: "R1S", href: "#" },
  { label: "R2", href: "#" },
  { label: "R3", href: "#" },
];

const defaultRightNavItems = [
  { label: "Demo Drive", href: "#" },
  { label: "Sign In", href: "#" },
];

export default function RivianR1tHero({
  mode = "dark",
  bannerText = "Want to see what we're up to?",
  bannerLinkText = "Get updates from Rivian",
  onBannerLinkClick,
  logoText = "RIVIAN",
  navItems = defaultNavItems,
  rightNavItems = defaultRightNavItems,
  modelName = "R1T",
  tagline = "Lease available configurations",
  price = "$559",
  priceUnit = "/mo*",
  disclaimerText = "*Leasing disclosures",
  onDisclaimerClick,
  primaryCtaText = "Configure",
  secondaryCtaText = "Shop available",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  backgroundImage = "/registry/rivian-r1t-hero/beach-background.jpg",
}: RivianR1tHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Beach landscape background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-20 flex items-center justify-center gap-1 bg-[#C7C3B0] px-4 py-2.5 text-center text-[13px] text-[#1a1a1a]"
      >
        <span>{bannerText}</span>
        <button
          onClick={onBannerLinkClick}
          className="font-medium underline underline-offset-2 transition-opacity hover:opacity-70"
        >
          {bannerLinkText}
        </button>
        <span>.</span>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-20 flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10"
      >
        {/* Left Nav - Menu + Model Tabs */}
        <div className="flex items-center gap-3">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                  item.isActive
                    ? "bg-white text-[#1a1a1a]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span
            className="text-[15px] font-medium tracking-[0.3em] text-white"
            style={{ letterSpacing: "0.3em" }}
          >
            {logoText}
          </span>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          {rightNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-white transition-opacity hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-120px)] flex-col justify-end px-4 pb-12 sm:px-6 lg:px-10 lg:pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Left - Model Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="text-[80px] font-medium leading-none tracking-tight text-white sm:text-[100px] lg:text-[120px]">
              {modelName}
            </h1>
            <p className="text-lg text-white sm:text-xl lg:text-2xl">
              {tagline}
              <br />
              for{" "}
              <span className="font-medium">
                {price}
                <span className="text-base font-normal sm:text-lg lg:text-xl">
                  {" "}
                  {priceUnit}
                </span>
              </span>
            </p>

            {/* Disclaimer */}
            <button
              onClick={onDisclaimerClick}
              className="mt-4 text-[11px] text-white/80 underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              {disclaimerText}
            </button>
          </motion.div>

          {/* Right - CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={onPrimaryCtaClick}
              className="rounded-full bg-[#706857] px-10 py-4 text-[14px] font-medium text-white transition-colors hover:bg-[#5d5649]"
            >
              {primaryCtaText}
            </button>
            <button
              onClick={onSecondaryCtaClick}
              className="rounded-full border border-white/20 bg-white px-10 py-4 text-[14px] font-medium text-[#1a1a1a] transition-colors hover:bg-white/90"
            >
              {secondaryCtaText}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
