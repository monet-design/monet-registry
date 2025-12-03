"use client";

import { motion } from "motion/react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface NavItem {
  label: string;
  href: string;
}

interface Stat {
  value: string;
  label: string;
}

interface LandingfolioHero17Props {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  signInText?: string;
  ctaButtonText?: string;
  headline?: string;
  headlineAccent?: string;
  description?: string;
  emailPlaceholder?: string;
  submitButtonText?: string;
  stats?: Stat[];
  whiteCardImage?: string;
  blackCardImage?: string;
  onSubmit?: (email: string) => void;
  onCtaClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Fees", href: "#fees" },
  { label: "About Rareblocks", href: "#about" },
];

// Default stats
const defaultStats: Stat[] = [
  { value: "2943", label: "Cards\nDelivered" },
  { value: "$1M+", label: "Transaction\nCompleted" },
];

// Main Component
export default function LandingfolioHero17({
  mode = "light",
  logoText = "RAREBLOCKS",
  navItems = defaultNavItems,
  signInText = "Sign in",
  ctaButtonText = "Create free account",
  headline = "A special credit\ncard made for",
  headlineAccent = "Developers.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
  emailPlaceholder = "Enter email address",
  submitButtonText = "Get Free Card",
  stats = defaultStats,
  whiteCardImage = "/registry/landingfolio-hero-17/card-white.png",
  blackCardImage = "/registry/landingfolio-hero-17/card-black.png",
  onSubmit,
  onCtaClick,
}: LandingfolioHero17Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onSubmit?.(email);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#F9FAFC] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-0.5">
            <span className="text-red-500 font-bold text-lg">/</span>
            <span className="text-sm font-semibold tracking-wider text-gray-900">
              {logoText}
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <a
            href="#signin"
            className="hidden sm:block text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {signInText}
          </a>
          <button
            onClick={onCtaClick}
            className="px-5 py-2.5 bg-[#111828] text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            {ctaButtonText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[42px] md:text-[52px] lg:text-[56px] font-bold text-gray-900 leading-[1.1] tracking-tight"
            >
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
              <span>{headlineAccent}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-base text-gray-500 leading-relaxed max-w-md"
            >
              {description}
            </motion.p>

            {/* Email Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="mt-8 flex items-center gap-0 max-w-md"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder={emailPlaceholder}
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-l-full text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-4 bg-[#111828] text-white text-sm font-semibold rounded-r-full hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                {submitButtonText}
              </button>
            </motion.form>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-12 flex items-center gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-500 leading-tight whitespace-pre-line">
                    {stat.label}
                  </span>
                  {index < stats.length - 1 && (
                    <div className="ml-6 h-8 w-px bg-gray-200" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Credit Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end items-center min-h-[450px] lg:min-h-[550px]"
          >
            {/* White Card - Back */}
            <motion.div
              initial={{ rotate: -5, y: 20 }}
              animate={{ rotate: -12, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute z-10 w-[320px] md:w-[380px] lg:w-[440px]"
              style={{
                transform: "rotate(-12deg) translateX(-80px) translateY(-100px)",
              }}
            >
              <Image
                src={whiteCardImage}
                alt="White credit card"
                width={440}
                height={280}
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Black Card - Front */}
            <motion.div
              initial={{ rotate: 5, y: -20 }}
              animate={{ rotate: 15, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute z-20 w-[320px] md:w-[380px] lg:w-[440px]"
              style={{
                transform: "rotate(15deg) translateX(80px) translateY(100px)",
              }}
            >
              <Image
                src={blackCardImage}
                alt="Black credit card"
                width={440}
                height={280}
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
