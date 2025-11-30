"use client";

import { motion } from "motion/react";
import { ArrowRight, Search, ChevronDown } from "lucide-react";
import "./font.css";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

interface HeroInfluencerPlatformProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  searchPlaceholder?: string;
  logosHeading?: string;
  logos?: LogoItem[];
  navItems?: NavItem[];
}

export default function HeroInfluencerPlatform({
  badge = "THE LARGEST B2B INFLUENCER PLATFORM",
  title = "Where B2B brands scale\ninfluencer marketing",
  description = "The fastest and easiest way to do influencer marketing at scale.\nFind the right creators on all platforms, book, collaborate, and pay - all in one place.",
  primaryButtonText = "Get access",
  secondaryButtonText = "Book a call",
  onPrimaryClick,
  onSecondaryClick,
  searchPlaceholder = "",
  logosHeading = "Powering thousands of marketing teams at the fastest growing companies in tech",
  logos = defaultLogos,
  navItems = defaultNavItems,
}: HeroInfluencerPlatformProps) {
  return (
    <section
      className="relative w-full min-h-screen"
      style={{ backgroundColor: "#FDFDF9", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-16 border-b border-gray-100"
      >
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-gray-900">
            passionfroot
          </a>

          {/* Left Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 3).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.slice(3).map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="ml-2 flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800"
          >
            Get access
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center px-6 pt-16 md:pt-20 lg:pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span
            className="text-xs font-medium tracking-[0.15em]"
            style={{ color: "#9A8A78" }}
          >
            {badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center text-base text-gray-600 md:text-lg max-w-2xl"
        >
          {description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onPrimaryClick}
            className="flex h-12 items-center gap-2 rounded-lg bg-gray-900 px-8 text-sm font-medium text-white transition-all hover:bg-gray-800"
          >
            {primaryButtonText}
            <ArrowRight className="h-4 w-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSecondaryClick}
            className="flex h-12 items-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-medium text-gray-900 transition-all hover:bg-gray-50"
          >
            {secondaryButtonText}
          </motion.button>
        </motion.div>

        {/* Orange Gradient Card with Search */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 w-full max-w-5xl"
        >
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-16 md:px-12 md:py-24"
            style={{
              background: "linear-gradient(180deg, #FCC8A5 0%, #FAB380 100%)",
            }}
          >
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mx-auto max-w-md"
            >
              <div className="flex items-center overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="flex-1 px-4 py-4">
                  <div className="h-6 w-px bg-gray-200"></div>
                </div>
                <button
                  className="flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 m-2 text-sm font-medium text-white transition-all hover:bg-gray-800"
                >
                  Search
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 mb-16 w-full max-w-5xl"
        >
          <p className="text-center text-sm text-gray-500 mb-8">{logosHeading}</p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                className="flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                {logo.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "For Brands", href: "#", hasDropdown: true },
  { label: "For Creators", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Login", href: "#", hasDropdown: true },
];

const defaultLogos: LogoItem[] = [
  {
    name: "Rippling",
    logo: (
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <rect x="0" y="4" width="4" height="12" rx="1" />
          <rect x="6" y="2" width="4" height="16" rx="1" />
          <rect x="12" y="4" width="4" height="12" rx="1" />
        </svg>
        <span className="text-sm font-semibold tracking-wide">RIPPLING</span>
      </div>
    ),
  },
  {
    name: "HubSpot",
    logo: (
      <span className="text-lg font-bold">
        Hub<span className="text-orange-500">S</span>pot
      </span>
    ),
  },
  {
    name: "Intercom",
    logo: (
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <rect x="2" y="4" width="3" height="10" rx="1.5" />
          <rect x="7" y="2" width="3" height="14" rx="1.5" />
          <rect x="12" y="4" width="3" height="10" rx="1.5" />
        </svg>
        <span className="text-sm font-semibold">INTERCOM</span>
      </div>
    ),
  },
  {
    name: "Vanta",
    logo: (
      <div className="flex items-center gap-1">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2L2 18h4l4-10 4 10h4L10 2z" />
        </svg>
        <span className="text-lg font-bold">Vanta</span>
      </div>
    ),
  },
  {
    name: "Attio",
    logo: (
      <div className="flex items-center gap-1">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="6" cy="10" r="4" />
          <circle cx="14" cy="10" r="4" />
        </svg>
        <span className="text-lg font-bold">attio</span>
      </div>
    ),
  },
  {
    name: "Notion",
    logo: (
      <div className="flex items-center gap-1">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 2h12v16H4V2zm2 2v12h8V4H6z" />
          <path d="M8 6h4v2H8V6zm0 4h4v2H8v-2z" />
        </svg>
        <span className="text-sm font-semibold">Notion</span>
      </div>
    ),
  },
  {
    name: "FreshBooks",
    logo: (
      <div className="flex items-center gap-1">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <rect x="3" y="3" width="14" height="14" rx="2" />
        </svg>
        <span className="text-sm font-medium">FreshBooks</span>
      </div>
    ),
  },
];
