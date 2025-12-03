"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // Primary 액센트 (보라색)
    accent: "#7C5CFF",
    accentHover: "#6B4EFF",
    bannerBg: "#7C5CFF",
    navBg: "#FFFFFF",
    navText: "#1A1A1A",
    navTextSecondary: "#6B7280",
    heroText: "#FFFFFF",
  },
  dark: {
    accent: "#9B7CFF",
    accentHover: "#7C5CFF",
    bannerBg: "#6B4EFF",
    navBg: "#0A0A0A",
    navText: "#E5E5E5",
    navTextSecondary: "#9CA3AF",
    heroText: "#FFFFFF",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  heroBackground: {
    path: "/registry/kinetic-cta-footer/hero-bg.jpg",
    alt: "Vehicle repair technology - professional using touchscreen to analyze car",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional automotive repair technology scene with touchscreen vehicle analysis</summary>
<mood>Modern, professional, high-tech automotive repair environment</mood>
<background_summary>Dark professional workshop environment with subtle lighting</background_summary>
<primary_element>A large computer monitor displaying 3D wireframe car analysis on the left and multiple vehicle photos on the right. A person's hand pointing at the touchscreen from the right side of the frame.</primary_element>
<etc_element>Blurred background showing professional automotive workshop setting</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown } from "lucide-react";
import "./font.css";

// Navigation menu items type
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

// Props interface
interface KineticCtaFooterProps {
  mode?: "light" | "dark";
  // Banner props
  showBanner?: boolean;
  bannerText?: string;
  bannerLinkText?: string;
  bannerLinkHref?: string;
  // Logo props
  logoText?: string;
  // Navigation props
  navItems?: NavItem[];
  // Hero props
  heroTitle?: string;
  heroSubtitle?: string;
  // Button props
  loginButtonText?: string;
  loginButtonHref?: string;
  // Callbacks
  onBannerClose?: () => void;
  onLoginClick?: () => void;
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "HUBS", href: "/hubs" },
  { label: "ID", href: "/id" },
  { label: "COMPANY", href: "/company", hasDropdown: true },
];

// Logo Component (KINETIC with arrow)
function KineticLogo({
  text = "KINETIC",
  color,
}: {
  text?: string;
  color: string;
}) {
  return (
    <a href="/" className="flex items-center gap-0.5 text-xl font-semibold tracking-wider" style={{ color }}>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{text}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-0.5"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </a>
  );
}

// Announcement Banner Component
function AnnouncementBanner({
  show,
  text,
  linkText,
  linkHref,
  bgColor,
  onClose,
}: {
  show: boolean;
  text: string;
  linkText: string;
  linkHref: string;
  bgColor: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          <div className="flex items-center justify-center px-4 py-2.5 text-center text-sm text-white">
            <span className="mr-1">Announcement:</span>
            <span>{text}</span>
            <a
              href={linkHref}
              className="ml-1 underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {linkText}
            </a>
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Close announcement"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Navigation Component
function Navigation({
  logoText,
  logoColor,
  navItems,
  navBg,
  navTextColor,
  loginButtonText,
  loginButtonHref,
  accentColor,
  onLoginClick,
}: {
  logoText: string;
  logoColor: string;
  navItems: NavItem[];
  navBg: string;
  navTextColor: string;
  loginButtonText: string;
  loginButtonHref: string;
  accentColor: string;
  onLoginClick?: () => void;
}) {
  return (
    <nav
      className="flex items-center justify-between px-6 py-4 md:px-10"
      style={{ backgroundColor: navBg }}
    >
      {/* Logo */}
      <KineticLogo text={logoText} color={logoColor} />

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-1 text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
            style={{ color: navTextColor }}
          >
            {item.label}
            {item.hasDropdown && <ChevronDown size={14} />}
          </a>
        ))}
      </div>

      {/* Login Button */}
      <a
        href={loginButtonHref}
        onClick={(e) => {
          if (onLoginClick) {
            e.preventDefault();
            onLoginClick();
          }
        }}
        className="rounded-md px-5 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
        style={{ backgroundColor: accentColor }}
      >
        {loginButtonText}
      </a>
    </nav>
  );
}

// Hero Section Component
function HeroSection({
  title,
  subtitle,
  backgroundImage,
  textColor,
}: {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  textColor: string;
}) {
  // Format title to handle line breaks
  const formattedTitle = title.split("\n").map((line, index, arr) => (
    <span key={index}>
      {line}
      {index < arr.length - 1 && <br />}
    </span>
  ));

  return (
    <div className="relative min-h-[500px] md:min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative flex h-full min-h-[500px] md:min-h-[600px] items-end px-6 pb-12 md:px-10 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            style={{
              color: textColor,
              fontFamily: "'Instrument Serif', 'Times New Roman', serif",
              fontStyle: "italic",
            }}
          >
            {formattedTitle}
          </h1>
          {subtitle && (
            <p
              className="mt-4 text-lg opacity-90"
              style={{ color: textColor }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

// Main Component
export default function KineticCtaFooter({
  mode = "light",
  showBanner: initialShowBanner = true,
  bannerText = "Kinetic introduces ID for ADAS identification. Free up to 3000 VINs per year.",
  bannerLinkText = "Learn More",
  bannerLinkHref = "/learn-more",
  logoText = "KINETIC",
  navItems = defaultNavItems,
  heroTitle = "Effortless modern\nvehicle repair",
  loginButtonText = "LOG IN",
  loginButtonHref = "/login",
  onBannerClose,
  onLoginClick,
}: KineticCtaFooterProps) {
  const colors = COLORS[mode];
  const [showBanner, setShowBanner] = useState(initialShowBanner);

  const handleBannerClose = () => {
    setShowBanner(false);
    onBannerClose?.();
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Announcement Banner */}
      <AnnouncementBanner
        show={showBanner}
        text={bannerText}
        linkText={bannerLinkText}
        linkHref={bannerLinkHref}
        bgColor={colors.bannerBg}
        onClose={handleBannerClose}
      />

      {/* Navigation */}
      <Navigation
        logoText={logoText}
        logoColor={colors.accent}
        navItems={navItems}
        navBg={colors.navBg}
        navTextColor={colors.navText}
        loginButtonText={loginButtonText}
        loginButtonHref={loginButtonHref}
        accentColor={colors.accent}
        onLoginClick={onLoginClick}
      />

      {/* Hero Section */}
      <HeroSection
        title={heroTitle}
        backgroundImage={IMAGES.heroBackground.path}
        textColor={colors.heroText}
      />
    </section>
  );
}
