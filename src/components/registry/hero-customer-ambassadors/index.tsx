"use client";

import { motion } from "motion/react";
import { MessageCircle, ArrowRight, MoreHorizontal } from "lucide-react";
import { useState } from "react";

interface TabItem {
  label: string;
  href: string;
}

interface HeroCustomerAmbassadorsProps {
  tabs?: TabItem[];
  activeTab?: number;
  headline?: string;
  description?: string;
  onTabChange?: (index: number) => void;
}

const defaultTabs: TabItem[] = [
  { label: "Customers", href: "#customers" },
  { label: "Why they use Memory", href: "#why" },
];

// Spring/Coil Icon
function SpringIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 8C10 8 14 8 20 8C26 8 30 12 30 12C30 12 26 16 20 16C14 16 10 12 10 12C10 12 14 16 20 16C26 16 30 20 30 20C30 20 26 24 20 24C14 24 10 20 10 20C10 20 14 24 20 24C26 24 30 28 30 28C30 28 26 32 20 32C14 32 10 28 10 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Spiral/Helix Icon
function SpiralIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 8C12 8 8 14 8 20C8 26 12 32 20 32C28 32 32 26 32 20C32 16 30 12 26 12C22 12 20 15 20 18C20 21 22 23 25 23"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Diamond Shapes Icon
function DiamondShapesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back diamond - pink */}
      <rect
        x="14"
        y="14"
        width="16"
        height="16"
        rx="3"
        transform="rotate(45 22 22)"
        fill="#F9A8D4"
        stroke="#1A1A1A"
        strokeWidth="2"
      />
      {/* Front diamond - white with half moon */}
      <rect
        x="20"
        y="20"
        width="16"
        height="16"
        rx="3"
        transform="rotate(45 28 28)"
        fill="white"
        stroke="#1A1A1A"
        strokeWidth="2"
      />
      {/* Half moon inside front diamond */}
      <path
        d="M28 22C26 22 24.5 23.5 24.5 25.5C24.5 27.5 26 29 28 29C28 29 26.5 28 26.5 25.5C26.5 23 28 22 28 22Z"
        fill="#1A1A1A"
      />
    </svg>
  );
}

// Grid Background
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7F8] via-[#E8ECEE] to-[#D8DFE2]" />

      {/* Grid overlay */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => {
            const opacity = Math.random() * 0.3 + 0.1;
            const shade = Math.random() > 0.5 ? "bg-white" : "bg-[#CBD5D9]";
            return (
              <div
                key={`${row}-${col}`}
                className={`absolute ${shade}`}
                style={{
                  left: `${col * 10}%`,
                  top: `${row * 16.66}%`,
                  width: "10%",
                  height: "16.66%",
                  opacity: opacity,
                }}
              />
            );
          })
        )}
      </div>

      {/* Subtle vertical lines */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-gray-400"
            style={{ left: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>
    </div>
  );
}

// Icon Card Component
function IconCard({
  children,
  variant = "default",
  delay = 0,
}: {
  children: React.ReactNode;
  variant?: "coral" | "coralSquare" | "default" | "pink";
  delay?: number;
}) {
  const baseClasses = "flex items-center justify-center";

  const variantClasses = {
    coral: "bg-[#FF6B4A] rounded-full px-6 py-3",
    coralSquare: "bg-[#FF6B4A] rounded-2xl px-6 py-4",
    default: "bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3",
    pink: "bg-transparent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </motion.div>
  );
}

export default function HeroCustomerAmbassadors({
  tabs = defaultTabs,
  activeTab = 0,
  headline = "Meet our best\nambassadors",
  description = "We help you meet your challenges and stakes",
  onTabChange,
}: HeroCustomerAmbassadorsProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
    onTabChange?.(index);
  };

  return (
    <section className="relative w-full min-h-[500px] overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-6 mb-8"
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => handleTabClick(index)}
                  className={`text-sm font-medium transition-colors pb-2 border-b-2 ${
                    currentTab === index
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6"
            >
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-base md:text-lg text-gray-500"
            >
              {description}
            </motion.p>
          </div>

          {/* Right Content - Icon Grid */}
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {/* Row 1 */}
              <IconCard variant="coral" delay={0.3}>
                <SpringIcon className="w-8 h-8 text-gray-900" />
              </IconCard>

              <IconCard variant="default" delay={0.35}>
                <MessageCircle className="w-6 h-6 text-gray-700" fill="currentColor" />
              </IconCard>

              <IconCard variant="coralSquare" delay={0.4}>
                <MoreHorizontal className="w-6 h-6 text-white" strokeWidth={3} />
              </IconCard>

              {/* Row 2 */}
              <IconCard variant="default" delay={0.45}>
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </IconCard>

              <IconCard variant="pink" delay={0.5}>
                <DiamondShapesIcon className="w-12 h-12" />
              </IconCard>

              <IconCard variant="default" delay={0.55}>
                <SpiralIcon className="w-8 h-8 text-gray-600" />
              </IconCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
