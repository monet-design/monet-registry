"use client";

import { motion } from "motion/react";
import { List, Gift, Trophy } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface BenefitItem {
  icon: React.ReactNode;
  text: string;
}

interface LandingfolioHero26Props {
  mode?: "customization" | "default";
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  headline?: string;
  description?: string;
  benefitsTitle?: string;
  benefits?: BenefitItem[];
  subscribeButtonText?: string;
  heroImageSrc?: string;
  onCtaClick?: () => void;
  onSubscribeClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

// Default benefits
const defaultBenefits: BenefitItem[] = [
  {
    icon: <List size={16} className="text-gray-600" />,
    text: "Get 10 Web & Mobile UI Inspirations Every Week",
  },
  {
    icon: <Gift size={16} className="text-gray-600" />,
    text: "Exclusive Discount on Design Resources",
  },
  {
    icon: <Trophy size={16} className="text-gray-600" />,
    text: "3 Random Subscriber will Get Featured on Emails",
  },
];

// Logo Component
function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="12" stroke="#6366F1" strokeWidth="3" />
      <circle cx="14" cy="14" r="5" fill="#6366F1" />
    </svg>
  );
}

// Main Component
// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

export default function LandingfolioHero26({
  mode = "default",
  logoText = "ClarityUI",
  navItems = defaultNavItems,
  ctaButtonText = "Get Design Inspirations",
  headline = "Weekly articles on\ndesign inspirations",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
  benefitsTitle = "Join the email list to:",
  benefits = defaultBenefits,
  subscribeButtonText = "Join Newsletter For Free",
  heroImageSrc = "/registry/landingfolio-hero-26/hero-portrait.png",
  onCtaClick,
  onSubscribeClick,
}: LandingfolioHero26Props) {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 lg:px-12 max-w-7xl mx-auto"
      >
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <LogoIcon />
            <span className="text-base font-semibold text-gray-900">
              {logoText}
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
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

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="hidden sm:block px-5 py-2.5 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          {ctaButtonText}
        </button>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="pt-4 lg:pt-12">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 leading-[1.15] tracking-tight whitespace-pre-line"
            >
              {headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-gray-500 text-base leading-relaxed max-w-md"
            >
              {description}
            </motion.p>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10"
            >
              <p className="text-gray-900 font-semibold text-base mb-4">
                {benefitsTitle}
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex-shrink-0">{benefit.icon}</span>
                    <span className="text-gray-900 text-sm">
                      {benefit.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Subscribe Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10"
            >
              <button
                onClick={onSubscribeClick}
                className="relative px-8 py-4 text-white text-sm font-semibold rounded-full overflow-hidden group"
                style={{
                  background:
                    "linear-gradient(135deg, #111828 0%, #111828 70%, #4A3068 90%, #C847B8 100%)",
                }}
              >
                <span className="relative z-10">{subscribeButtonText}</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #0A0D14 0%, #0A0D14 70%, #3A2458 90%, #A83AA0 100%)",
                  }}
                />
              </button>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-[500px] lg:h-[650px] hidden lg:block"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={heroImageSrc}
                alt="Creative professional portrait"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="lg:hidden mt-12 px-6"
      >
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Image
            src={heroImageSrc}
            alt="Creative professional portrait"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
