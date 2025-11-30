"use client";

import { motion } from "motion/react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LogoItem {
  name: string;
  logoElement: React.ReactNode;
}

interface PipeEntrepreneursHeroProps {
  logoText?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  navItems?: NavItem[];
  advanceAmount?: string;
  paymentPercent?: string;
  revenueFrom?: { from: string; revenue: number; percent: number }[];
  logoCloudTitle?: string;
  logos?: LogoItem[];
  heroImage?: string;
  onCtaClick?: () => void;
}

// Logo Icon (Pipe-like logo)
function PipeLogo() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="10" r="4" fill="white" />
      <rect x="8" y="6" width="10" height="8" rx="1" fill="white" />
    </svg>
  );
}

// Default logos
const defaultLogos: LogoItem[] = [
  {
    name: "BROOKS",
    logoElement: (
      <span className="font-semibold tracking-wider text-white/70 text-sm">
        BR<span className="text-[#4ECDC4]">OO</span>KS
      </span>
    ),
  },
  {
    name: "Love Circular",
    logoElement: (
      <span className="flex items-center gap-1 text-white/70 text-sm">
        <span className="w-4 h-4 rounded-full border-2 border-white/70 flex items-center justify-center text-[10px]">
          @
        </span>
        Love Circular
      </span>
    ),
  },
  {
    name: "BUNGALOW",
    logoElement: (
      <span className="font-bold tracking-wide text-white/70 text-sm">
        BUNGALOW
      </span>
    ),
  },
  {
    name: "VISIBLE",
    logoElement: (
      <span className="flex items-center gap-1 text-white/70 text-sm font-semibold">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 0L12 6L6 12L0 6L6 0Z" />
        </svg>
        VISIBLE
      </span>
    ),
  },
  {
    name: "VERMAFARMS",
    logoElement: (
      <span className="tracking-widest text-white/70 text-xs font-medium">
        VERMAFARMS
      </span>
    ),
  },
  {
    name: "MUDWTR",
    logoElement: (
      <span className="font-serif italic text-white/70 text-sm">MUD\WTR</span>
    ),
  },
];

// Dashboard Bar Chart Component
function BarChart() {
  return (
    <div className="flex items-end gap-1.5 h-12">
      <div className="w-4 h-6 bg-[#E8EDF5] rounded-t-sm" />
      <div className="w-4 h-8 bg-[#E8EDF5] rounded-t-sm" />
      <div className="w-4 h-10 bg-[#C5D3F0] rounded-t-sm" />
      <div className="w-4 h-12 bg-[#9DB4E8] rounded-t-sm" />
    </div>
  );
}

// Revenue Row Component
function RevenueRow({
  from,
  revenue,
  percent,
}: {
  from: string;
  revenue: number;
  percent: number;
}) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-gray-500">{from}</span>
      <div className="flex items-center gap-2">
        <span className="text-gray-700">{revenue} revenue</span>
        <span className="bg-[#E8F5E9] text-[#4CAF50] px-1.5 py-0.5 rounded text-[10px] font-medium">
          {percent}%
        </span>
      </div>
    </div>
  );
}

// Main Component
export default function PipeEntrepreneursHero({
  logoText = "pipe",
  headline = "Helping businesses\nbuild something\nbigger",
  description = "Whether you're planning for tomorrow or budgeting for today, Pipe connects you with the working capital you need to run your business on your terms.",
  ctaText = "Unlock Capital",
  navItems = [
    { label: "For Entrepreneurs", href: "#" },
    { label: "For Partners", href: "#" },
  ],
  advanceAmount = "$250,900",
  paymentPercent = "2.1% of sales",
  revenueFrom = [
    { from: "From", revenue: 23, percent: 8 },
    { from: "From", revenue: 19, percent: 10 },
  ],
  logoCloudTitle = "20K+ USERS HAVE SIGNED UP TO GROW ON THEIR TERMS",
  logos = defaultLogos,
  heroImage = "/registry/pipe-entrepreneurs-hero/entrepreneur.jpg",
  onCtaClick,
}: PipeEntrepreneursHeroProps) {
  const headlineLines = headline.split("\n");

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#5B8DEF] via-[#3B6FE8] to-[#1A4FD8]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <PipeLogo />
            <span className="text-white font-medium">{logoText}</span>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden sm:block text-white/80 text-sm hover:text-white transition-colors"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-white/80 text-sm hover:text-white transition-colors"
          >
            Sign In
          </a>
          <button className="bg-[#1A1A2E] text-white text-sm px-4 py-2 rounded-full hover:bg-[#2A2A3E] transition-colors">
            Get Started
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="max-w-xl">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight"
              >
                {headlineLines.map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-white/80 text-base leading-relaxed"
              >
                {description.split("working capital").map((part, index) => (
                  <span key={index}>
                    {part}
                    {index === 0 && (
                      <span className="text-[#A8D8FF]">working capital</span>
                    )}
                  </span>
                ))}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                onClick={onCtaClick}
                className="mt-8 bg-white text-[#1A1A2E] font-medium text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors shadow-lg"
              >
                {ctaText}
              </motion.button>
            </div>

            {/* Right Column - Dashboard Cards + Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              {/* Hero Image with Cards Overlay */}
              <div className="relative">
                {/* Bar Chart Card - Top Right */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -top-4 right-4 sm:right-8 lg:right-0 bg-white rounded-xl p-4 shadow-xl z-20"
                >
                  <BarChart />
                  <div className="mt-3 space-y-1">
                    {revenueFrom.map((item, index) => (
                      <RevenueRow
                        key={index}
                        from={item.from}
                        revenue={item.revenue}
                        percent={item.percent}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Advance Amount Card - Center Left */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute top-32 sm:top-40 -left-4 sm:left-0 lg:-left-8 bg-white rounded-xl p-4 shadow-xl z-20 min-w-[180px]"
                >
                  <div className="text-xs text-gray-500 mb-1">Advance</div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {advanceAmount}
                  </div>
                  <div className="mt-3">
                    <div className="h-1.5 bg-[#E8EDF5] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#3B6FE8] rounded-full"
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="h-3 w-3 rounded-full border-2 border-[#3B6FE8] bg-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>Payment</span>
                    <span>{paymentPercent}</span>
                  </div>
                </motion.div>

                {/* Hero Image */}
                <div className="relative rounded-2xl overflow-hidden ml-8 lg:ml-16">
                  <Image
                    src={heroImage}
                    alt="Entrepreneur packing orders"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Logo Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 px-6 sm:px-10 lg:px-16 mt-16 pb-12"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-6">
            {logoCloudTitle}
          </p>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {logos.map((logo) => (
              <div key={logo.name}>{logo.logoElement}</div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1A3DB8]/30 pointer-events-none" />
    </section>
  );
}
