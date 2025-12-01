"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

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

interface DriftimeHeroProps {
  mode?: "light" | "dark";
  brandName?: string;
  brandSuffix?: string;
  headline?: {
    text: string;
    pills: { text: string; position: number }[];
  };
  navItems?: NavItem[];
  appScreens?: {
    left: string;
    right: string;
  };
  onNavClick?: (href: string) => void;
}

// Animated text pill component with typewriter effect
function AnimatedPill({
  text,
  delay = 0,
  animate = false,
}: {
  text: string;
  delay?: number;
  animate?: boolean;
}) {
  const [displayText, setDisplayText] = useState(animate ? "" : text);
  const [isTyping, setIsTyping] = useState(animate);

  useEffect(() => {
    if (!animate) return;

    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    }, delay * 1000);

    return () => clearTimeout(startDelay);
  }, [animate, text, delay]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.5, duration: 0.4 }}
      className="inline-flex items-center justify-center rounded-full border border-[#4a4a4a] bg-[#333332] px-4 py-1.5 text-white uppercase tracking-wider"
      style={{ minWidth: animate ? "180px" : "auto" }}
    >
      <span className="text-sm font-medium sm:text-base">
        {displayText}
        {isTyping && (
          <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-white" />
        )}
      </span>
    </motion.span>
  );
}

// More dots pill component
function MoreDotsPill({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="inline-flex items-center justify-center rounded-full border border-[#4a4a4a] bg-[#333332] px-4 py-2"
    >
      <span className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </span>
    </motion.span>
  );
}

// iPhone Mockup Component
function IPhoneMockup({
  screenSrc,
  className = "",
  delay = 0,
}: {
  screenSrc: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {/* iPhone Frame */}
      <div className="relative overflow-hidden rounded-[40px] border-[8px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

        {/* Screen */}
        <div className="relative aspect-[9/19.5] w-[220px] overflow-hidden rounded-[32px] bg-white sm:w-[260px]">
          <img
            src={screenSrc}
            alt="App screen"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

// Navigation pill component
function NavPill({
  items,
  delay = 0,
  onNavClick,
}: {
  items: NavItem[];
  delay?: number;
  onNavClick?: (href: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="inline-flex items-center gap-1 rounded-full bg-[#1a1a1a]/90 p-1.5 backdrop-blur-sm"
    >
      {/* Home icon */}
      <button
        onClick={() => onNavClick?.("/")}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-gray-100"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </button>

      {/* Nav items */}
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => onNavClick?.(item.href)}
          className="rounded-full px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          {item.label}
        </button>
      ))}

      {/* Scroll up button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ArrowUp size={16} />
      </button>
    </motion.div>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Team", href: "/team" },
  { label: "Thinking", href: "/thinking" },
  { label: "Contact", href: "/contact" },
];

// Main Component
export default function DriftimeHero({
  mode = "light",
  brandName = "Driftime",
  brandSuffix = "media",
  headline = {
    text: "Approaching the {0} of today with {1} brands and businesses to design an impact-driven {2} {3}",
    pills: [
      { text: "COMPLEX CHALLENGES", position: 0 },
      { text: "PROGRESSIVE", position: 1 },
      { text: "DIGITAL FUTURE", position: 2 },
    ],
  },
  navItems = defaultNavItems,
  appScreens = {
    left: "/registry/driftime-hero/app-screen-1.png",
    right: "/registry/driftime-hero/app-screen-2.png",
  },
  onNavClick,
}: DriftimeHeroProps) {
  // Parse headline with pills
  const renderHeadline = () => {
    const parts = headline.text.split(/\{(\d+)\}/);

    return parts.map((part, index) => {
      const pillIndex = parseInt(part);

      if (!isNaN(pillIndex)) {
        const pill = headline.pills.find((p) => p.position === pillIndex);
        if (pill) {
          if (pillIndex === 2) {
            // Animated pill for DIGITAL FUTURE
            return (
              <AnimatedPill
                key={index}
                text={pill.text}
                delay={0.8}
                animate={true}
              />
            );
          }
          return (
            <AnimatedPill
              key={index}
              text={pill.text}
              delay={0.3 + pillIndex * 0.15}
            />
          );
        }
        if (pillIndex === 3) {
          // More dots pill
          return <MoreDotsPill key={index} delay={1} />;
        }
      }

      return (
        <span key={index} className="text-white">
          {part}
        </span>
      );
    });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient - dark top, beige bottom */}
      <div className="absolute inset-0">
        <div className="h-[55%] bg-[#222124]" />
        <div className="h-[45%] bg-gradient-to-b from-[#a8a090] to-[#c4bfae]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center px-6 pt-6 sm:pt-8"
        >
          <div className="flex items-center gap-0.5">
            <span className="text-base font-medium tracking-tight text-white sm:text-lg">
              {brandName}
            </span>
            <span className="text-xs text-white/60">®</span>
            <span className="ml-1 font-serif text-base italic text-white/80 sm:text-lg">
              {brandSuffix}
            </span>
          </div>
        </motion.header>

        {/* Main Headline */}
        <div className="mx-auto max-w-5xl px-6 pt-8 sm:pt-12 lg:pt-16">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-2xl font-light leading-relaxed tracking-tight sm:text-3xl sm:leading-relaxed md:text-4xl md:leading-relaxed lg:text-[42px] lg:leading-[1.4]"
          >
            <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {renderHeadline()}
            </span>
          </motion.h1>
        </div>

        {/* iPhone Mockups */}
        <div className="relative mx-auto mt-8 flex max-w-4xl items-end justify-center gap-8 px-6 sm:mt-12 sm:gap-16 lg:gap-24">
          <IPhoneMockup
            screenSrc={appScreens.left}
            className="translate-y-12 -rotate-6 sm:translate-y-16"
            delay={0.6}
          />
          <IPhoneMockup
            screenSrc={appScreens.right}
            className="-translate-y-4 rotate-6 sm:-translate-y-8"
            delay={0.8}
          />
        </div>

        {/* Navigation Pill */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12">
          <NavPill items={navItems} delay={1} onNavClick={onNavClick} />
        </div>
      </div>
    </section>
  );
}
