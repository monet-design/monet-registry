"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface EnergyParkHeroProps {
  logo?: {
    icon?: React.ReactNode;
    text?: string;
  };
  navItems?: NavItem[];
  headline?: string;
  ctaText?: string;
  tagline?: string;
  exploreText?: string;
  onCtaClick?: () => void;
  onExploreClick?: () => void;
  onLoginClick?: () => void;
  onContactClick?: () => void;
  backgroundImage?: string;
}

// Logo Icon - Square with corner cutout
function LogoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
      <path d="M4 4h8v8H4V4z" fill="currentColor" />
    </svg>
  );
}

// Main Component
export default function EnergyParkHero({
  logo = {
    icon: <LogoIcon className="w-7 h-7 text-white" />,
    text: "Energy\nPark.",
  },
  navItems = [
    { label: "Solutions", href: "#solutions" },
    { label: "About Us", href: "#about" },
    { label: "News", href: "#news" },
  ],
  headline = "Get set for an\nelectric future",
  ctaText = "Our solutions",
  tagline = "Experts in smart\nEV charging solutions",
  exploreText = "Explore",
  onCtaClick,
  onExploreClick,
  onLoginClick,
  onContactClick,
  backgroundImage = "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2940&auto=format&fit=crop",
}: EnergyParkHeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Yellow accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#E6E651] z-50" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header / Navigation */}
        <nav className="w-full px-6 md:px-12 pt-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              {logo.icon}
              <span className="text-white font-semibold text-sm leading-tight whitespace-pre-line">
                {logo.text}
              </span>
            </motion.div>

            {/* Center Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center gap-8"
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white text-sm font-medium hover:text-white/80 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>

            {/* Right Side - Login & Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={onLoginClick}
                className="text-white text-sm font-medium hover:text-white/80 transition-colors hidden sm:block"
              >
                Log in
              </button>
              <button
                onClick={onContactClick}
                className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-black/80 transition-colors"
              >
                Contact
              </button>
            </motion.div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 pb-24">
          <div className="max-w-7xl mx-auto w-full">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-instrument-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white italic leading-[1.1] mb-8 whitespace-pre-line"
            >
              {headline}
            </motion.h1>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={onCtaClick}
              className="inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full hover:bg-white/90 transition-colors group"
            >
              <span className="text-sm font-medium">{ctaText}</span>
              <div className="w-10 h-10 bg-[#E6E651] rounded-full flex items-center justify-center group-hover:bg-[#d4d44a] transition-colors">
                <ArrowRight className="w-5 h-5 text-black" />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-6 md:px-12 pb-8">
          <div className="max-w-7xl mx-auto flex items-end justify-between">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white text-lg sm:text-xl md:text-2xl font-medium whitespace-pre-line leading-tight"
            >
              {tagline}
            </motion.p>

            {/* Explore Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              onClick={onExploreClick}
              className="flex items-center gap-2 text-white text-sm font-medium hover:text-white/80 transition-colors"
            >
              {exploreText}
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
