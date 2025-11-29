"use client";

import { motion } from "motion/react";
import { Wifi } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface StatsCard {
  count: string;
  label: string;
}

interface LandingfolioHero31Props {
  logoText?: string;
  navItems?: NavItem[];
  ctaNavText?: string;
  badge?: string;
  headline?: string;
  description?: string;
  ctaButtonText?: string;
  statsCard?: StatsCard;
  imageSrc?: string;
  onCtaNavClick?: () => void;
  onCtaButtonClick?: () => void;
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

const defaultStatsCard: StatsCard = {
  count: "34,585",
  label: "Secured emails are\nsent last week",
};

// Logo Component
function ClarityLogo({ text = "ClarityUI" }: { text?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full border-[3px] border-[#3B82F6]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#3B82F6]" />
      </div>
      <span className="text-gray-900 font-semibold text-lg tracking-tight">
        {text}
      </span>
    </div>
  );
}

// Stats Card Component
function StatsCardComponent({ stats }: { stats: StatsCard }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="absolute bottom-8 -left-6 bg-white rounded-xl shadow-lg px-5 py-4 flex items-start gap-3"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EEF4FB] flex items-center justify-center">
        <Wifi className="w-5 h-5 text-[#3B82F6]" />
      </div>
      <div>
        <p className="text-[#1E293B] text-xl font-bold leading-tight">
          {stats.count}
        </p>
        <p className="text-[#64748B] text-sm whitespace-pre-line leading-snug">
          {stats.label}
        </p>
      </div>
    </motion.div>
  );
}

// Main Component
export default function LandingfolioHero31({
  logoText = "ClarityUI",
  navItems = defaultNavItems,
  ctaNavText = "Start free trial",
  badge = "#1 Email marketing tool in the market",
  headline = "The safest email\nin this earth.",
  description = "Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for SaaS.",
  ctaButtonText = "Book A Discovery Call",
  statsCard = defaultStatsCard,
  imageSrc = "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80",
  onCtaNavClick,
  onCtaButtonClick,
}: LandingfolioHero31Props) {
  return (
    <section className="w-full min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 lg:px-12 xl:px-20 py-6"
      >
        {/* Logo */}
        <ClarityLogo text={logoText} />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={onCtaNavClick}
          className="px-5 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
        >
          {ctaNavText}
        </button>
      </motion.header>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row items-center px-6 lg:px-12 xl:px-20 pt-8 lg:pt-12 pb-12 lg:pb-0 gap-8 lg:gap-16">
        {/* Left Content - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative flex-1 w-full max-w-lg lg:max-w-xl"
        >
          {/* Image Container */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <img
                src={imageSrc}
                alt="Person using email"
                className="w-full h-full object-cover"
              />
              {/* Decorative element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-80"
                >
                  <path
                    d="M24 8L28 20L40 24L28 28L24 40L20 28L8 24L20 20L24 8Z"
                    fill="#F97316"
                  />
                </svg>
              </div>
            </div>

            {/* Stats Card */}
            <StatsCardComponent stats={statsCard} />
          </div>
        </motion.div>

        {/* Right Content - Text */}
        <div className="flex-1 w-full max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-[#F0F6FF] text-[#3B82F6] text-sm font-medium rounded-full">
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] leading-[1.1] tracking-tight mb-6 whitespace-pre-line"
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#64748B] text-lg leading-relaxed mb-8 max-w-lg"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button
              onClick={onCtaButtonClick}
              className="px-8 py-4 bg-[#2663E8] text-white text-base font-medium rounded-full hover:bg-[#1D4FD7] transition-colors shadow-lg shadow-blue-500/25"
            >
              {ctaButtonText}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
