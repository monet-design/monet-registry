"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Search } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface ReonServiceHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  tagline?: string;
  headline?: string;
  heroImage?: string;
  onNavClick?: (href: string) => void;
}

// R Logo Icon
function RLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 4h8c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4l6 8h-3.5l-6-8v8H6V4zm2 2v4h6c1.1 0 2-.9 2-2s-.9-2-2-2H8z" />
    </svg>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Services", href: "/services", isActive: true },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Main Component
export default function ReonServiceHero({
  logoText = "R",
  navItems = defaultNavItems,
  tagline = "Reon Services for End-to-End\nConsultancy",
  headline = "Guiding market leaders\nhands-on to innovate\nand build upon their\nexcellence",
  heroImage = "/registry/reon-service-hero/meeting.jpg",
  onNavClick,
}: ReonServiceHeroProps) {
  return (
    <section className="relative w-full min-h-screen bg-[#F83957] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-14"
      >
        {/* Logo */}
        <div className="flex items-center">
          <RLogo className="w-6 h-6 text-white" />
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavClick?.(item.href)}
              className={`relative text-white text-sm font-normal transition-opacity hover:opacity-80 ${
                item.isActive ? "" : ""
              }`}
            >
              {item.label}
              {item.isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                />
              )}
            </button>
          ))}
        </div>

        {/* Search Icon */}
        <button className="text-white hover:opacity-80 transition-opacity">
          <Search className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="px-6 sm:px-10 lg:px-14 pt-16 sm:pt-20 lg:pt-24 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-48 mb-8 lg:mb-0"
          >
            <div className="flex items-start gap-2">
              <span className="text-white text-xs mt-1">*</span>
              <p className="text-white text-xs leading-relaxed whitespace-pre-line opacity-90">
                {tagline}
              </p>
            </div>
          </motion.div>

          {/* Right Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1"
          >
            <h1
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic leading-[1.1] whitespace-pre-line"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {headline}
            </h1>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 lg:mt-20 mx-auto max-w-5xl"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
            <Image
              src={heroImage}
              alt="Team meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
