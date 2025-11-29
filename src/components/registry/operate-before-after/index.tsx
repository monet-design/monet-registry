"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";

// Types
interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  filled: boolean;
  targetX: number;
  delay: number;
}

interface OperateBeforeAfterProps {
  brandName?: string;
  navLinkText?: string;
  navLinkHref?: string;
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  chaosLabel?: string;
  clarityLabel?: string;
  backgroundColor?: string;
  accentColor?: string;
  dotCount?: number;
}

// Logo Component (wave/script style mark)
function OperateLogo({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12C4 12 8 4 15 4C22 4 20 20 27 20C34 20 32 4 39 4C46 4 44 20 51 20C58 20 56 12 56 12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Generate random dots for the scatter pattern
function generateDots(count: number): Dot[] {
  const dots: Dot[] = [];
  const gridCols = 12;
  const gridRows = 9;

  for (let i = 0; i < count; i++) {
    const col = i % gridCols;
    const row = Math.floor(i / gridCols) % gridRows;

    // Chaos position (left half, more scattered with random offsets)
    const chaosX = 3 + (col / gridCols) * 48 + (Math.random() - 0.5) * 10;
    const chaosY = 8 + (row / gridRows) * 82 + (Math.random() - 0.5) * 15;

    // Clarity position (right half, more organized in a cleaner grid)
    const clarityX = 48 + (col / gridCols) * 45;
    const clarityY = 10 + (row / gridRows) * 80;

    // More varied sizes - smaller dots are more common
    const sizeRandom = Math.random();
    let size: number;
    if (sizeRandom < 0.45) {
      size = 3 + Math.random() * 3; // Small dots (3-6px)
    } else if (sizeRandom < 0.8) {
      size = 5 + Math.random() * 6; // Medium dots (5-11px)
    } else {
      size = 9 + Math.random() * 9; // Large dots (9-18px)
    }

    dots.push({
      id: i,
      x: chaosX,
      y: chaosY,
      size,
      filled: Math.random() > 0.4, // 60% filled, 40% outlined
      targetX: clarityX,
      delay: Math.random() * 2,
    });
  }

  return dots;
}

// Individual Dot Component
function ScatterDot({
  dot,
  isAnimating,
  accentColor,
}: {
  dot: Dot;
  isAnimating: boolean;
  accentColor: string;
}) {
  const currentX = isAnimating ? dot.targetX : dot.x;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: dot.size,
        height: dot.size,
        backgroundColor: dot.filled ? accentColor : "transparent",
        border: dot.filled ? "none" : `1.5px solid ${accentColor}`,
        left: `${currentX}%`,
        top: `${dot.y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        left: `${currentX}%`,
      }}
      transition={{
        opacity: { duration: 0.5, delay: dot.delay * 0.3 },
        scale: { duration: 0.5, delay: dot.delay * 0.3 },
        left: { duration: 1.5, delay: dot.delay * 0.2, ease: "easeInOut" },
      }}
    />
  );
}

// Main Component
export default function OperateBeforeAfter({
  brandName = "OPERATE ALPHA",
  navLinkText = "Want in? Request early access",
  navLinkHref = "#",
  heading = "OPERATE",
  subheading = "A CRM designed for sales,\nbuilt for founders.",
  ctaText = "GET ACCESS",
  ctaHref = "#",
  chaosLabel = "Chaos",
  clarityLabel = "Clarity",
  backgroundColor = "#86BF94",
  accentColor = "#2D5A3D",
  dotCount = 100,
}: OperateBeforeAfterProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const dots = useMemo(() => generateDots(dotCount), [dotCount]);

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 1500);

    // Toggle animation periodically
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="relative min-h-[600px] w-full overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4">
        {/* Left: Brand indicator */}
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <span
            className="text-xs font-medium uppercase tracking-wider"
            style={{ color: accentColor }}
          >
            {brandName}
          </span>
        </div>

        {/* Center: CTA Link */}
        <motion.a
          href={navLinkHref}
          className="text-xs font-medium"
          style={{ color: accentColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Want in? [{" "}
          <span className="underline underline-offset-2">
            Request early access
          </span>{" "}
          ]
        </motion.a>

        {/* Right: Logo */}
        <OperateLogo className="h-6 w-12" color={accentColor} />
      </nav>

      {/* Main Content Area */}
      <div className="relative mx-auto h-[500px] max-w-6xl px-6">
        {/* Chaos/Clarity Labels - Top */}
        <div className="absolute left-6 right-6 top-0 flex justify-between">
          <div className="flex items-center gap-2">
            <span
              className="border-b border-dashed pb-1 text-xs font-medium"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              {chaosLabel}
            </span>
            <div
              className="h-px flex-1 border-b border-dashed"
              style={{ borderColor: accentColor, width: "60px" }}
            />
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-px flex-1 border-b border-dashed"
              style={{ borderColor: accentColor, width: "60px" }}
            />
            <span
              className="border-b border-dashed pb-1 text-xs font-medium"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              {clarityLabel}
            </span>
          </div>
        </div>

        {/* Scatter Dots */}
        <div className="absolute inset-0">
          {dots.map((dot) => (
            <ScatterDot
              key={dot.id}
              dot={dot}
              isAnimating={isAnimating}
              accentColor={accentColor}
            />
          ))}
        </div>

        {/* Product Card */}
        <motion.div
          className="absolute right-[12%] top-[35%] z-10 rounded-sm p-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            maxWidth: "180px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            border: `1px solid ${accentColor}30`,
          }}
        >
          <h2
            className="mb-1 text-base font-bold tracking-tight"
            style={{ color: accentColor }}
          >
            {heading}
          </h2>
          <p
            className="mb-3 whitespace-pre-line text-xs leading-relaxed"
            style={{ color: accentColor, opacity: 0.85 }}
          >
            {subheading}
          </p>
          <motion.a
            href={ctaHref}
            className="inline-block rounded-sm px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider"
            style={{
              backgroundColor: "transparent",
              border: `1px solid ${accentColor}`,
              color: accentColor,
            }}
            whileHover={{ scale: 1.02, backgroundColor: `${accentColor}15` }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
          </motion.a>
        </motion.div>

        {/* Chaos/Clarity Labels - Bottom */}
        <div className="absolute bottom-0 left-6 right-6 flex justify-between">
          <div className="flex items-center gap-2">
            <span
              className="border-t border-dashed pt-1 text-xs font-medium"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              {chaosLabel}
            </span>
            <div
              className="h-px flex-1 border-t border-dashed"
              style={{ borderColor: accentColor, width: "60px" }}
            />
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-px flex-1 border-t border-dashed"
              style={{ borderColor: accentColor, width: "60px" }}
            />
            <span
              className="border-t border-dashed pt-1 text-xs font-medium"
              style={{ color: accentColor, borderColor: accentColor }}
            >
              {clarityLabel}
            </span>
          </div>
        </div>

        {/* Side Labels (rotated text) */}
        <div
          className="absolute left-0 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-medium uppercase tracking-widest"
          style={{ color: accentColor }}
        >
          Document A
        </div>
        <div
          className="absolute left-0 top-3/4 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-medium uppercase tracking-widest"
          style={{ color: accentColor }}
        >
          09-04-2023
        </div>
        <div
          className="absolute bottom-8 left-0 origin-center -translate-x-1/2 -rotate-90 text-[10px] font-medium uppercase tracking-widest"
          style={{ color: accentColor }}
        >
          Operate
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <OperateLogo className="h-6 w-12 opacity-60" color={accentColor} />
      </div>
    </section>
  );
}
