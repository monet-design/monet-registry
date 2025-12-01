"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import "./font.css";
import styles from "./styles.module.css";

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

interface DoubleMakersSubscriptionHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  badgeText?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  navItems?: NavItem[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

interface ShapePosition {
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
}

// Marquee Badge Component
function MarqueeBadge({ text }: { text: string }) {
  const items = Array(10).fill(text);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="inline-flex items-center overflow-hidden rounded-full bg-[#7DFFC3] px-1 py-1"
      style={{ maxWidth: "380px" }}
    >
      <div className={`flex items-center whitespace-nowrap ${styles.marquee}`}>
        {[0, 1].map((groupIndex) => (
          <span key={groupIndex} className="flex items-center">
            {items.map((t, idx) => (
              <span key={idx} className="flex items-center">
                <svg
                  className="mx-2 h-3 w-3 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                </svg>
                <span className="text-xs font-medium tracking-wide text-black uppercase">
                  {t}
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// Abstract Shape Components
function StarShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      <path d="M50 0 L53 40 L95 50 L53 60 L50 100 L47 60 L5 50 L47 40 Z" />
    </svg>
  );
}

function AsteriskShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      <path d="M45 0h10v40h40v10H55v40H45V55H0V45h45V0z" />
      <path d="M21.7 14.6l7.1 7.1 28.3 28.3 7.1 7.1-7.1 7.1-28.3-28.3-7.1-7.1-7.1-7.1 7.1-7.1z" />
      <path d="M78.3 14.6l-7.1 7.1-28.3 28.3-7.1 7.1 7.1 7.1 28.3-28.3 7.1-7.1 7.1-7.1-7.1-7.1z" />
    </svg>
  );
}

function SquarePattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="0" y="0" width="50" height="50" fill="#F7E547" />
      <rect x="50" y="0" width="50" height="50" fill="#F5D6C6" />
      <rect x="0" y="50" width="50" height="50" fill="#F5D6C6" />
      <rect x="50" y="50" width="50" height="50" fill="#FFFFFF" />
    </svg>
  );
}

// Individual Floating Shape with scroll-based animation
function FloatingShape({
  children,
  scrollYProgress,
  position,
  delay = 0,
  rotate = 0,
}: {
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  position: ShapePosition;
  delay?: number;
  rotate?: number;
}) {
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [position.initialX, position.targetX]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [position.initialY, position.targetY]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [rotate, rotate + 15]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      style={{ x, y, opacity, scale, rotate: rotateZ }}
      className="absolute left-1/2 top-1/2"
    >
      {children}
    </motion.div>
  );
}

// Decorative Shapes Container
function DecorativeShapes({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  // Shape positions: initial (gathered) -> target (spread out)
  // Initial X positions are 3.375x spread (1.5^3), Y positions are 2.25x spread (1.5^2)
  const shapes = [
    {
      // Green oval with pink star - top left
      position: { initialX: -608, initialY: -180, targetX: -500, targetY: -180 },
      delay: 0.4,
      rotate: -12,
      content: (
        <div className="relative">
          <div className="w-24 h-40 bg-[#3D8B6E] rounded-full" />
          <StarShape className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-[#F5A0D0]" />
        </div>
      ),
    },
    {
      // Yellow circle - bottom left area
      position: { initialX: -405, initialY: 225, targetX: -400, targetY: 280 },
      delay: 0.5,
      rotate: 0,
      content: <div className="w-8 h-8 bg-[#E8D44D] rounded-full" />,
    },
    {
      // Teal vertical oval - bottom left
      position: { initialX: -203, initialY: 315, targetX: -280, targetY: 350 },
      delay: 0.55,
      rotate: 5,
      content: <div className="w-12 h-28 bg-[#5BC4B0] rounded-full" />,
    },
    {
      // Blue vertical oval - bottom center-left
      position: { initialX: 68, initialY: 360, targetX: -120, targetY: 400 },
      delay: 0.6,
      rotate: -8,
      content: <div className="w-14 h-36 bg-[#6B8EC9] rounded-full" />,
    },
    {
      // Coral circle with square pattern - top right
      position: { initialX: 608, initialY: -135, targetX: 480, targetY: -150 },
      delay: 0.45,
      rotate: 10,
      content: (
        <div className="relative">
          <div className="w-32 h-32 bg-[#E8B4A0] rounded-full" />
          <SquarePattern className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-lg overflow-hidden" />
        </div>
      ),
    },
    {
      // Green vertical oval with white asterisk - right side
      position: { initialX: 540, initialY: 135, targetX: 450, targetY: 180 },
      delay: 0.5,
      rotate: -5,
      content: (
        <div className="relative">
          <div className="w-16 h-40 bg-[#3D8B6E] rounded-full" />
          <AsteriskShape className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white" />
        </div>
      ),
    },
    {
      // Coral circle with teal asterisk - bottom right
      position: { initialX: 338, initialY: 315, targetX: 380, targetY: 360 },
      delay: 0.55,
      rotate: 15,
      content: (
        <div className="relative">
          <div className="w-24 h-24 bg-[#E8B4A0] rounded-full" />
          <AsteriskShape className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-[#3D9B8B]" />
        </div>
      ),
    },
    {
      // Extra small pink circle - top area
      position: { initialX: -135, initialY: -270, targetX: -150, targetY: -300 },
      delay: 0.65,
      rotate: 0,
      content: <div className="w-6 h-6 bg-[#F5A0D0] rounded-full" />,
    },
    {
      // Extra teal small oval - right top
      position: { initialX: 270, initialY: -225, targetX: 300, targetY: -280 },
      delay: 0.7,
      rotate: 20,
      content: <div className="w-10 h-16 bg-[#5BC4B0] rounded-full" />,
    },
  ];

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          scrollYProgress={scrollYProgress}
          position={shape.position}
          delay={shape.delay}
          rotate={shape.rotate}
        >
          {shape.content}
        </FloatingShape>
      ))}
    </>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Benefits", href: "#benefits" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Recent work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

// Main Component
export default function DoubleMakersSubscriptionHero({
  mode = "light",
  logoText = "double makers",
  badgeText = "3-DAY FREE TRIAL",
  headline = "Your go-to design\npartner to help scale\nyour brand.",
  subheadline = "Get high-quality design delivered within just 2-3 days. On-demand requests. No lock-in contracts.",
  primaryCtaText = "See plans",
  secondaryCtaText = "Book a free demo",
  navItems = defaultNavItems,
  onPrimaryClick,
  onSecondaryClick,
}: DoubleMakersSubscriptionHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress within the hero section
  // offset: ["start start", "end start"] means:
  // - start tracking when section top reaches viewport top
  // - finish tracking when section bottom reaches viewport top
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#141414] to-[#1A1A1A]"
    >
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <span className="text-base font-normal text-white tracking-tight">
          {logoText}
        </span>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#ABABAB] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Decorative Shapes - positioned at center, spread out on scroll */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible">
        <DecorativeShapes scrollYProgress={scrollYProgress} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-20 pb-12 sm:px-8 sm:pt-28 lg:pt-32 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <MarqueeBadge text={badgeText} />
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-instrument-serif-italic text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight tracking-tight whitespace-pre-line"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#9A9A9A]"
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onPrimaryClick}
            className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            {primaryCtaText}
          </button>
          <button
            onClick={onSecondaryClick}
            className="w-full sm:w-auto px-8 py-3 bg-[#2A2A2A] text-white text-sm font-medium rounded-full border border-[#3A3A3A] hover:bg-[#333333] transition-colors"
          >
            {secondaryCtaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
