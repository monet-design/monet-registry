"use client";

import { motion } from "motion/react";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface AdeptAiHeroProps {
  logoText?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  navItems?: NavItem[];
  illustrationSrc?: string;
  onCtaClick?: () => void;
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "#", isActive: true },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
];

// 3D Illustration Component using CSS/SVG
function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* SVG Illustration mimicking the 3D blocks */}
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.08))" }}
      >
        {/* Background wave forms */}
        <defs>
          <linearGradient id="blockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5F5F5" />
          </linearGradient>
          <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8E8E8" />
            <stop offset="100%" stopColor="#DADADA" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Wave forms at bottom */}
        <motion.path
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          d="M50 420 Q150 380 250 420 Q350 460 450 420 Q550 380 600 420 L600 500 L50 500 Z"
          fill="#F0F0F0"
        />
        <motion.path
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          d="M0 440 Q100 400 200 440 Q300 480 400 440 Q500 400 550 440 L550 500 L0 500 Z"
          fill="#FAFAFA"
        />

        {/* Main platform block with trackpad circle */}
        <motion.g
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          filter="url(#softShadow)"
        >
          {/* Block body */}
          <rect x="200" y="180" width="180" height="120" rx="12" fill="url(#blockGradient)" />
          {/* Block top face */}
          <rect x="200" y="160" width="180" height="30" rx="8" fill="#FFFFFF" />
          {/* Trackpad circle depression */}
          <ellipse cx="290" cy="240" rx="50" ry="35" fill="#F0F0F0" />
          <ellipse cx="290" cy="240" rx="42" ry="28" fill="#FAFAFA" stroke="#E5E5E5" strokeWidth="2" />
          {/* Inner circle rim */}
          <ellipse cx="290" cy="240" rx="20" ry="14" fill="none" stroke="#D0D0D0" strokeWidth="1.5" />
        </motion.g>

        {/* Right block with orange button */}
        <motion.g
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          filter="url(#softShadow)"
        >
          <rect x="400" y="120" width="140" height="80" rx="10" fill="url(#blockGradient)" />
          <rect x="400" y="105" width="140" height="25" rx="6" fill="#FFFFFF" />
          {/* Orange oval button */}
          <ellipse cx="500" cy="145" rx="22" ry="12" fill="#F5A855" />
          <ellipse cx="500" cy="143" rx="18" ry="9" fill="#FFBA6B" />
        </motion.g>

        {/* Small block with gray circle */}
        <motion.g
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          filter="url(#softShadow)"
        >
          <rect x="350" y="150" width="70" height="60" rx="8" fill="url(#blockGradient)" />
          <rect x="350" y="140" width="70" height="18" rx="5" fill="#FFFFFF" />
          {/* Small gray circle */}
          <circle cx="385" cy="175" r="12" fill="#E0E0E0" />
          <circle cx="385" cy="173" r="9" fill="#EBEBEB" />
        </motion.g>

        {/* Platform with blue sphere */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          filter="url(#softShadow)"
        >
          {/* Recessed platform */}
          <rect x="380" y="240" width="100" height="70" rx="8" fill="url(#blockGradient)" />
          <rect x="390" y="255" width="80" height="40" rx="6" fill="#F0F0F0" />
          {/* Blue sphere */}
          <circle cx="430" cy="250" r="24" fill="#5B7FD6" />
          <ellipse cx="422" cy="242" rx="8" ry="6" fill="#7A9BE8" opacity="0.7" />
        </motion.g>

        {/* Tall narrow block */}
        <motion.g
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          filter="url(#softShadow)"
        >
          <rect x="480" y="200" width="60" height="120" rx="8" fill="url(#blockGradient)" />
          <rect x="480" y="188" width="60" height="20" rx="5" fill="#FFFFFF" />
        </motion.g>

        {/* Small silver button circles */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <circle cx="290" cy="340" r="8" fill="#D5D5D5" />
          <circle cx="290" cy="338" r="5" fill="#E5E5E5" />
        </motion.g>

        {/* Decorative stepped platform */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          filter="url(#softShadow)"
        >
          <rect x="420" y="320" width="80" height="15" rx="3" fill="#FFFFFF" />
          <rect x="435" y="335" width="50" height="12" rx="3" fill="#F8F8F8" />
          <rect x="445" y="347" width="30" height="10" rx="2" fill="#F0F0F0" />
        </motion.g>
      </svg>
    </div>
  );
}

export default function AdeptAiHero({
  logoText = "ADEPT",
  headline = "A new way to\nuse computers",
  description = "We're building a machine learning model that can\ninteract with everything on your computer.",
  ctaText = "Join the waitlist",
  navItems = defaultNavItems,
  onCtaClick,
}: AdeptAiHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#F0EFED] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-sm font-semibold tracking-[0.25em] text-[#1A1A1A]"
        >
          {logoText}
        </motion.div>

        {/* Nav Items */}
        <div className="hidden sm:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
              className={`text-sm text-[#1A1A1A] transition-colors hover:text-[#666] ${
                item.isActive ? "underline underline-offset-4" : ""
              }`}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 sm:px-10 lg:px-16 pt-12 lg:pt-24">
        {/* Left: Text Content */}
        <div className="max-w-xl lg:max-w-lg xl:max-w-xl z-10">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-light leading-[1.1] tracking-tight text-[#1A1A1A] whitespace-pre-line"
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-base sm:text-lg text-[#666666] leading-relaxed whitespace-pre-line"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCtaClick}
            className="mt-10 px-8 py-4 bg-[#1A1A1A] text-white text-base font-medium rounded-full transition-colors hover:bg-[#333333]"
          >
            {ctaText}
          </motion.button>
        </div>

        {/* Right: 3D Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full lg:w-1/2 xl:w-[55%] mt-12 lg:mt-0 lg:-mr-16 xl:-mr-24"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
