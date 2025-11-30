"use client";

import { motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface BetterStackHeroProps {
  logoText?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  announcementText?: string;
  announcementHighlight?: string;
  navItems?: NavItem[];
  onCtaClick?: () => void;
}

// Logo Icon Component (stylized mountain/stack icon)
function LogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L4 14h4l-2 8 12-12h-5l3-8z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

// 3D Cubes Background Component
function CubesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0e14]" />

      {/* 3D Cubes using CSS transforms */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-[600px]">
          {/* Main large cube */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-1/4 top-1/4 w-48 h-64"
            style={{
              transform: "perspective(1000px) rotateX(15deg) rotateY(-25deg)",
            }}
          >
            <div className="relative w-full h-full">
              {/* Front face */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-900/20 backdrop-blur-sm border border-blue-500/20 rounded-lg"
                style={{
                  transform: "translateZ(40px)",
                  boxShadow: "0 0 60px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(59, 130, 246, 0.1)",
                }}
              />
              {/* Side face */}
              <div
                className="absolute top-0 right-0 w-16 h-full bg-gradient-to-b from-blue-500/20 to-blue-800/10 border-r border-t border-b border-blue-500/20 rounded-r-lg"
                style={{
                  transform: "translateX(40px) rotateY(90deg)",
                  transformOrigin: "left center",
                }}
              />
              {/* Top face */}
              <div
                className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-400/30 to-blue-600/20 border border-blue-500/20 rounded-t-lg"
                style={{
                  transform: "rotateX(90deg) translateZ(40px)",
                  transformOrigin: "bottom center",
                }}
              />
            </div>
          </motion.div>

          {/* Secondary cube - right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-1/4 top-1/3 w-32 h-44"
            style={{
              transform: "perspective(1000px) rotateX(10deg) rotateY(20deg)",
            }}
          >
            <div
              className="w-full h-full bg-gradient-to-br from-indigo-600/25 to-indigo-900/15 backdrop-blur-sm border border-indigo-500/20 rounded-lg"
              style={{
                boxShadow: "0 0 40px rgba(99, 102, 241, 0.25), inset 0 0 20px rgba(99, 102, 241, 0.1)",
              }}
            />
          </motion.div>

          {/* Small cube - top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute left-1/3 top-12 w-20 h-28"
            style={{
              transform: "perspective(1000px) rotateX(20deg) rotateY(-15deg)",
            }}
          >
            <div
              className="w-full h-full bg-gradient-to-br from-violet-600/20 to-violet-900/10 backdrop-blur-sm border border-violet-500/15 rounded-lg"
              style={{
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
              }}
            />
          </motion.div>

          {/* Ambient glow effects */}
          <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
        </div>
      </div>

      {/* Light rays */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[400px] bg-gradient-to-b from-blue-400/30 via-blue-500/10 to-transparent"
          style={{ transform: "rotate(-15deg)" }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[350px] bg-gradient-to-b from-indigo-400/20 via-indigo-500/5 to-transparent"
          style={{ transform: "rotate(10deg)" }}
        />
      </div>
    </div>
  );
}

// Brand Logo with Icon
function BrandLogo({
  icon,
  text,
  className = ""
}: {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-2 ${className}`}
    >
      {icon || <LogoIcon className="w-5 h-5 text-white" />}
      <span className="text-white font-semibold text-base">{text}</span>
    </motion.div>
  );
}

// Navigation Item
function NavItemComponent({
  item,
  delay
}: {
  item: NavItem;
  delay: number;
}) {
  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
    >
      {item.label}
      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
    </motion.a>
  );
}

// Announcement Banner
function AnnouncementBanner({
  highlight,
  text
}: {
  highlight: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/50 bg-amber-500/10"
    >
      <span className="text-amber-400 text-sm font-medium">{highlight}</span>
      <span className="text-slate-300 text-sm">{text}</span>
      <ArrowRight className="w-4 h-4 text-slate-400" />
    </motion.div>
  );
}

// Hero Logo Icon (larger, styled)
function HeroLogoIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative w-20 h-20 mb-4"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-50" />

      {/* Main icon container */}
      <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 flex items-center justify-center overflow-hidden">
        {/* Inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />

        {/* Stack lines icon */}
        <svg
          className="w-10 h-10 text-blue-400 relative z-10"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 8L8 14L20 20L32 14L20 8Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M8 20L20 26L32 20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M8 26L20 32L32 26"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </motion.div>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Platform", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Company", href: "#", hasDropdown: true },
  { label: "Community", href: "#", hasDropdown: true },
  { label: "Help & Support", href: "#", hasDropdown: false },
];

// Main Component
export default function BetterStackHero({
  logoText = "Better Stack",
  headline = "Reliability is the\nultimate feature",
  subheadline = "Delightful observability tools that turn your logs &\nmonitoring into a secret weapon for shipping better\nsoftware faster.",
  ctaText = "Book a demo",
  announcementHighlight = "Announcing our Series A",
  announcementText = "- Better Stack raises $18.6m for a radically better observability stack",
  navItems = defaultNavItems,
  onCtaClick,
}: BetterStackHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0c0e14] overflow-hidden">
      {/* 3D Background */}
      <CubesBackground />

      {/* Navigation */}
      <nav className="relative z-20 w-full px-6 py-4 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <BrandLogo text={logoText} />

          {/* Nav Items - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <NavItemComponent
                key={item.label}
                item={item}
                delay={0.1 + index * 0.05}
              />
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onCtaClick}
            className="hidden sm:flex items-center gap-2 text-sm text-white hover:text-slate-200 transition-colors"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </nav>

      {/* Announcement Banner */}
      <div className="relative z-20 flex justify-center px-6 pt-4">
        <AnnouncementBanner
          highlight={announcementHighlight}
          text={announcementText}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 pt-16 pb-24 text-center">
        {/* Hero Logo */}
        <div className="flex justify-center">
          <HeroLogoIcon />
        </div>

        {/* Brand Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-6"
        >
          BETTER STACK
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight whitespace-pre-line mb-6"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base sm:text-lg text-slate-400 leading-relaxed whitespace-pre-line mb-10 max-w-2xl mx-auto"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCtaClick}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c0e14] to-transparent pointer-events-none z-10" />
    </section>
  );
}
