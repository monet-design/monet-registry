"use client";

import { motion } from "motion/react";
import { ChevronDown, Download } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface SketchHandoffHeroProps {
  // Banner
  bannerText?: string;
  bannerLinkText?: string;
  onBannerClick?: () => void;

  // Navigation
  logoIcon?: React.ReactNode;
  navItems?: NavItem[];
  signInText?: string;
  getStartedText?: string;
  onSignIn?: () => void;
  onGetStarted?: () => void;

  // Hero content
  headlinePart1?: string;
  headlineAccent?: string;
  headlinePart2?: string;
  description?: string;
  descriptionAccent?: string;
  descriptionEnd?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCta?: () => void;
  onSecondaryCta?: () => void;

  // Footer note
  footerNote?: string;
  toolLogos?: { name: string; icon: React.ReactNode }[];
  mode?: "light" | "dark";
}

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Diamond Logo Icon (Sketch-like)
function DiamondLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 9L12 22L22 9L12 2Z"
        fill="currentColor"
      />
      <path
        d="M2 9H22"
        stroke="white"
        strokeWidth="1"
      />
      <path
        d="M12 2L8 9L12 22L16 9L12 2Z"
        fill="currentColor"
        stroke="white"
        strokeWidth="0.5"
      />
    </svg>
  );
}

// InVision-like Logo
function InVisionLogo() {
  return (
    <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="4" width="12" height="12" rx="2" fill="#FF3366" />
      <text x="16" y="14" fontSize="12" fontWeight="600" fill="#666">INVISION</text>
    </svg>
  );
}

// Zeplin-like Logo
function ZeplinLogo() {
  return (
    <svg width="70" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L12 4L4 16L12 16" stroke="#FDBD39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="18" y="14" fontSize="12" fontWeight="600" fill="#666">ZEPLIN</text>
    </svg>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Learn", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
  { label: "Help", href: "#", hasDropdown: true },
];

// Main Component
export default function SketchHandoffHero({
  // Banner
  bannerText = "New: Smart Animate",
  bannerLinkText = "Learn more",
  onBannerClick,

  // Navigation
  logoIcon,
  navItems = defaultNavItems,
  signInText = "Sign In",
  getStartedText = "Get started",
  onSignIn,
  onGetStarted,

  // Hero content
  headlinePart1 = "Work with\ndevelopers\n",
  headlineAccent = "for free",
  headlinePart2 = " in\nany browser",
  description = "Invite developers to inspect designs,\ndownload assets and get tokens\n",
  descriptionAccent = "all for free.",
  descriptionEnd = " No Mac app required.",
  primaryCtaText = "Get started for free",
  secondaryCtaText = "Learn more",
  onPrimaryCta,
  onSecondaryCta,

  // Footer note
  footerNote = "No need for tools like",
  mode = "light",
}: SketchHandoffHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#FAFAFA] overflow-hidden">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full bg-[#2D2D2F] py-2.5 px-4"
      >
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-white font-medium">{bannerText}</span>
          <span className="text-gray-400">—</span>
          <span className="text-gray-400">Bring movement to your prototypes.</span>
          <button
            onClick={onBannerClick}
            className="text-white underline hover:no-underline ml-1"
          >
            {bannerLinkText}
          </button>
        </div>

        {/* Preview images in banner (decorative) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex gap-2">
          <div className="w-20 h-12 bg-[#3D3D3F] rounded-md" />
          <div className="w-24 h-12 bg-[#4D4D4F] rounded-md" />
          <div className="w-20 h-12 bg-[#3D3D3F] rounded-md" />
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 border-b border-gray-200"
      >
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            {logoIcon || <DiamondLogo className="w-7 h-7 text-[#1A1A1A]" />}
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-sm text-[#1A1A1A] hover:text-gray-600 transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onSignIn}
            className="text-sm text-[#1A1A1A] hover:text-gray-600 transition-colors"
          >
            {signInText}
          </button>
          <button
            onClick={onGetStarted}
            className="flex items-center gap-2 bg-[#1A1A1A] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#333] transition-colors"
          >
            {getStartedText}
            <Download className="w-4 h-4" />
          </button>
        </div>
      </motion.nav>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
              {headlinePart1.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headlinePart1.split('\n').length - 1 && <br />}
                </span>
              ))}
              <span className="text-[#A855F7]">{headlineAccent}</span>
              {headlinePart2.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headlinePart2.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Right Column - Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:pt-8"
          >
            {/* Description */}
            <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed mb-8">
              {description.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < description.split('\n').length - 1 && <br />}
                </span>
              ))}
              <span className="relative inline-block">
                <span className="font-semibold text-[#1A1A1A]">— {descriptionAccent}</span>
                {/* Squiggle underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 3 Q 10 0, 20 3 T 40 3 T 60 3 T 80 3 T 100 3"
                    stroke="#A855F7"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </span>
              {descriptionEnd}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={onPrimaryCta}
                className="bg-[#1A1A1A] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#333] transition-colors"
              >
                {primaryCtaText}
              </button>
              <button
                onClick={onSecondaryCta}
                className="border border-[#D1D1D1] text-[#1A1A1A] px-6 py-3 rounded-lg text-sm font-medium hover:border-[#999] transition-colors bg-white"
              >
                {secondaryCtaText}
              </button>
            </div>

            {/* Footer Note with Tool Logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 text-sm text-[#888]"
            >
              <span className="italic">{footerNote}</span>
              <div className="flex items-center gap-4">
                <InVisionLogo />
                <ZeplinLogo />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Pink/Magenta Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
        style={{
          background: "radial-gradient(circle at 70% 70%, #F472B6 0%, #C54D9E 50%, #BE4FA6 100%)",
          borderRadius: "50%",
          transform: "translate(30%, 40%)",
        }}
      />

      {/* Small decorative elements (like Figma-style markers) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute left-[8%] top-[40%] hidden lg:block"
      >
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-blue-500 text-[8px] text-white flex items-center justify-center font-bold">
            84
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute right-[45%] top-[35%] hidden lg:block"
      >
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-green-500 text-[8px] text-white flex items-center justify-center font-bold">
            715
          </div>
        </div>
      </motion.div>
    </section>
  );
}
