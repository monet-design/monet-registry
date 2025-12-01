"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface HyperliquidHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navLinks?: { label: string; href: string }[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  headline?: string;
  headlineAccent?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  dashboardImage?: string;
}

// Blob icon component for the logo
function BlobIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 0C8.954 0 0 7.163 0 16s8.954 16 20 16c5.523 0 10.5-2.239 14.142-5.858C37.761 22.5 40 17.523 40 12c0-6.627-8.954-12-20-12z"
        fill="#2D9E8A"
      />
    </svg>
  );
}

export default function HyperliquidHero({
  mode = "light",
  logoText = "Hyperliquid",
  navLinks = [
    { label: "Vaults", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Stats", href: "#" },
  ],
  ctaButtonText = "Launch App",
  ctaButtonHref = "#",
  headline = "Trade perpetuals",
  headlineAccent = "seamlessly",
  description = "Hyperliquid is a decentralized perpetual exchange\nwith best-in-class speed, liquidity, and price.",
  primaryButtonText = "Start Trading",
  primaryButtonHref = "#",
  dashboardImage = "/registry/hyperliquid-hero/dashboard.png",
}: HyperliquidHeroProps) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#F4FFFF" }}
    >
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BlobIcon className="h-6 w-6" />
          <span className="text-lg font-medium text-gray-900">{logoText}</span>
        </motion.a>

        {/* Navigation */}
        <motion.nav
          className="flex items-center gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hidden text-sm text-gray-700 transition-colors hover:text-gray-900 md:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaButtonHref}
            className="rounded-full px-5 py-2 text-sm font-medium text-gray-900 transition-all hover:opacity-90"
            style={{ backgroundColor: "#8FECD7" }}
          >
            {ctaButtonText}
          </a>
        </motion.nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-12 text-center md:pt-16 lg:pt-20">
        {/* Blob Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BlobIcon className="mb-6 h-10 w-12" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mb-4 text-4xl font-normal tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {headline}{" "}
          <span
            className="italic"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {headlineAccent}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mb-8 max-w-lg whitespace-pre-line text-base text-gray-600 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href={primaryButtonHref}
          className="mb-12 rounded-full border border-gray-200 bg-white px-8 py-3 text-base font-medium text-gray-900 shadow-sm transition-all hover:shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {primaryButtonText}
        </motion.a>

        {/* Dashboard Preview with Concentric Rings */}
        <div className="relative w-full max-w-5xl">
          {/* Concentric Rings */}
          <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/3">
            {[1, 2, 3, 4, 5, 6].map((ring) => (
              <motion.div
                key={ring}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                style={{
                  width: `${ring * 180}px`,
                  height: `${ring * 180}px`,
                  borderColor: `rgba(143, 236, 215, ${0.5 - ring * 0.07})`,
                  borderWidth: "1px",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + ring * 0.1 }}
              />
            ))}
          </div>

          {/* Dashboard Image */}
          <motion.div
            className="relative z-10 overflow-hidden rounded-t-xl shadow-2xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src={dashboardImage}
              alt="Trading Dashboard"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Inline font for Instrument Serif */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap");
      `}</style>
    </section>
  );
}
