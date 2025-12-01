"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    activeTabAccent: "#2563EB", // Active tab 파란색
    inactiveTabText: "#9CA3AF", // Inactive tab 텍스트
    archDecoration: "#F3E4DA", // Arch 장식 크림/베이지
  },
  dark: {
    activeTabAccent: "#2563EB",
    inactiveTabText: "#9CA3AF",
    archDecoration: "#F3E4DA",
  },
} as const;

const IMAGES = {
  sofa: {
    path: "/registry/makeover-studio/sofa.png",
    alt: "Umo Sofa product image",
    prompt: `Modern minimalist sofa product photo.
Style: Clean, professional product photography
Layout: Side view showing full sofa profile
Composition: Centered sofa with neutral background
Color palette: Neutral tones, beige or light gray upholstery
Mood: Contemporary, comfortable, stylish
Technical: PNG with transparency, soft shadows, high resolution`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

// Types
interface BrowserNavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface MakeoverStudioProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  productTitle?: string;
  productSubtitle?: string;
  productDescription?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  beforeLabel?: string;
  afterLabel?: string;
  logoText?: string;
  navItems?: BrowserNavItem[];
  sofaImageSrc?: string;
}

// Browser Navigation Icon Components
function HomeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}

function ChairIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
      <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
      <path d="M5 18v2" />
      <path d="M19 18v2" />
    </svg>
  );
}

function LampIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2h8l4 10H4L8 2Z" />
      <path d="M12 12v6" />
      <path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" />
    </svg>
  );
}

function TableIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="3" rx="1" />
      <path d="M5 10v10" />
      <path d="M19 10v10" />
    </svg>
  );
}

function DecorIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

// Default navigation items
const defaultNavItems: BrowserNavItem[] = [
  { id: "home", label: "Home", icon: <HomeIcon /> },
  { id: "sofas", label: "Sofas", icon: <ChairIcon /> },
  { id: "lamps", label: "Lamps", icon: <LampIcon /> },
  { id: "tables", label: "Tables", icon: <TableIcon /> },
  { id: "decor", label: "Decor", icon: <DecorIcon /> },
];

// Arch decoration component
function ArchDecoration({ colors }: { colors: typeof COLORS.light }) {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
      <div className="relative h-[140px] w-[240px] sm:h-[160px] sm:w-[280px] md:h-[180px] md:w-[320px]">
        {/* Outer arch segments - layered lines */}
        {[...Array(8)].map((_, i) => {
          const scale = 1 - i * 0.1;
          const opacity = 0.25 + i * 0.08;
          return (
            <div
              key={i}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden"
              style={{
                width: `${280 * scale}px`,
                height: `${140 * scale}px`,
              }}
            >
              <div
                className="absolute inset-0 rounded-t-full border-t border-l border-r"
                style={{
                  borderColor: `${colors.archDecoration}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
                }}
              />
            </div>
          );
        })}
        {/* Center filled arch - cream/beige color matching original */}
        <div
          className="absolute bottom-0 left-1/2 h-[50px] w-[80px] -translate-x-1/2 overflow-hidden rounded-t-full sm:h-[60px] sm:w-[100px] md:h-[70px] md:w-[120px]"
          style={{ backgroundColor: colors.archDecoration }}
        />
      </div>
    </div>
  );
}

// Browser window component
function BrowserWindow({
  children,
  logoText,
  navItems,
  isActive,
}: {
  children: React.ReactNode;
  logoText: string;
  navItems: BrowserNavItem[];
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden rounded-lg border border-[#C7BAB1]/30 bg-[#ADA49C] shadow-2xl"
    >
      {/* Browser header */}
      <div className="flex items-center justify-between border-b border-[#9A8E84]/30 bg-[#ADA49C] px-3 py-2 sm:px-4">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#E8DED4]/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#E8DED4]/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#E8DED4]/60" />
        </div>

        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <div className="flex h-4 w-4 items-center justify-center rounded bg-[#E8DED4]/40">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-[#6B5F55]"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <span className="text-[10px] font-medium text-[#E8DED4]/90 sm:text-xs">
            {logoText}
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-3 sm:flex md:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-1 text-[10px] text-[#E8DED4]/70 transition-colors hover:text-[#E8DED4] sm:text-xs"
            >
              {item.icon}
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile menu placeholder */}
        <div className="sm:hidden">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#E8DED4]/70"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </div>

      {/* Browser content */}
      <div className="relative">{children}</div>
    </motion.div>
  );
}

// Main Component
export default function MakeoverStudio({
  mode = "light",
  title = "First makeover quality",
  subtitle = "Complete makeover from branding to website.",
  productTitle = "Umo Sofa",
  productSubtitle = "Product of the week",
  productDescription = "It will delight enthusiasts of modern and minimalist forms who expect comfort and convenience.",
  primaryButtonText = "Buy Now",
  secondaryButtonText = "Details",
  beforeLabel = "Before",
  afterLabel = "After",
  logoText = "Design",
  navItems = defaultNavItems,
  sofaImageSrc = IMAGES.sofa.path,
}: MakeoverStudioProps) {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");
  const colors = COLORS[mode];

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F4F7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-12"
        >
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-[#1a1a1a] sm:mb-3 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="text-sm text-[#6B6B6B] sm:text-base">{subtitle}</p>
        </motion.div>

        {/* Browser Mockup */}
        <div className="mb-6 sm:mb-8">
          <BrowserWindow
            logoText={logoText}
            navItems={navItems}
            isActive={activeTab === "after"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-b from-[#BBB2A8] to-[#C1B4AB]"
              >
                {activeTab === "after" ? (
                  /* After state - polished design */
                  <div className="relative flex h-full flex-col items-center justify-center px-4 py-6 sm:px-8 sm:py-8">
                    {/* Product info */}
                    <div className="relative z-10 mb-2 text-center sm:mb-4">
                      <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-[#E8DED4]/80 sm:text-xs">
                        {productSubtitle}
                      </p>
                      <h3 className="mb-2 text-xl font-semibold text-[#E8DED4] sm:mb-3 sm:text-2xl md:text-3xl">
                        {productTitle}
                      </h3>
                      <p className="mx-auto max-w-xs text-[10px] leading-relaxed text-[#E8DED4]/70 sm:max-w-sm sm:text-xs">
                        {productDescription}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="relative z-10 mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
                      <button className="rounded-full bg-[#3D3832] px-4 py-1.5 text-[10px] font-medium text-[#E8DED4] transition-colors hover:bg-[#2D2A26] sm:px-5 sm:py-2 sm:text-xs">
                        {primaryButtonText}
                      </button>
                      <button className="rounded-full border border-[#E8DED4]/40 bg-transparent px-4 py-1.5 text-[10px] font-medium text-[#E8DED4] transition-colors hover:border-[#E8DED4]/60 hover:bg-[#E8DED4]/10 sm:px-5 sm:py-2 sm:text-xs">
                        {secondaryButtonText}
                      </button>
                    </div>

                    {/* Arch decoration */}
                    <ArchDecoration colors={colors} />

                    {/* Sofa image */}
                    <div className="absolute bottom-6 left-1/2 z-20 w-[160px] -translate-x-1/2 sm:bottom-8 sm:w-[200px] md:w-[240px]">
                      <Image
                        src={sofaImageSrc}
                        alt={IMAGES.sofa.alt}
                        width={240}
                        height={144}
                        className="h-auto w-full object-contain"
                        style={{ filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))" }}
                        unoptimized
                      />
                    </div>
                  </div>
                ) : (
                  /* Before state - basic/plain design */
                  <div className="relative flex h-full flex-col items-center justify-center bg-[#A9A19A] px-4 py-6 sm:px-8 sm:py-8">
                    {/* Simple placeholder content for "before" state */}
                    <div className="flex h-full w-full flex-col items-center justify-center">
                      <div className="mb-4 h-6 w-32 rounded bg-[#8A8078]/40 sm:mb-6 sm:h-8 sm:w-40" />
                      <div className="mb-2 h-3 w-48 rounded bg-[#8A8078]/30 sm:h-4 sm:w-56" />
                      <div className="mb-4 h-3 w-36 rounded bg-[#8A8078]/30 sm:mb-6 sm:h-4 sm:w-44" />
                      <div className="flex gap-2 sm:gap-3">
                        <div className="h-6 w-16 rounded bg-[#8A8078]/40 sm:h-8 sm:w-20" />
                        <div className="h-6 w-16 rounded border border-[#8A8078]/40 sm:h-8 sm:w-20" />
                      </div>
                      <div className="mt-6 h-20 w-28 rounded bg-[#8A8078]/20 sm:mt-8 sm:h-24 sm:w-36" />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </BrowserWindow>
        </div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => setActiveTab("before")}
            className="text-sm font-medium transition-colors sm:text-base"
            style={{
              color: activeTab === "before" ? colors.activeTabAccent : colors.inactiveTabText,
            }}
            onMouseEnter={(e) => {
              if (activeTab !== "before") {
                e.currentTarget.style.color = "#6B7280";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== "before") {
                e.currentTarget.style.color = colors.inactiveTabText;
              }
            }}
          >
            {beforeLabel}
          </button>
          <button
            onClick={() => setActiveTab("after")}
            className="text-sm font-medium transition-colors sm:text-base"
            style={{
              color: activeTab === "after" ? colors.activeTabAccent : colors.inactiveTabText,
            }}
            onMouseEnter={(e) => {
              if (activeTab !== "after") {
                e.currentTarget.style.color = "#6B7280";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== "after") {
                e.currentTarget.style.color = colors.inactiveTabText;
              }
            }}
          >
            {afterLabel}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
