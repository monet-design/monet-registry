"use client";

import { motion } from "motion/react";
import { ChevronDown, Download, Grid3X3, Settings2 } from "lucide-react";
import Image from "next/image";

interface SketchExtensionsHeroProps {
  // Top banner
  bannerText?: string;
  bannerLinkText?: string;
  // Navigation
  logoText?: string;
  navItems?: { label: string; hasDropdown?: boolean }[];
  signInText?: string;
  ctaButtonText?: string;
  // Hero content
  headlineMain?: string;
  headlineAccent?: string;
  description?: string;
  developerCommunityText?: string;
  // Tabs
  tabs?: { label: string; icon: "plugins" | "integrations" }[];
  activeTab?: number;
  // Image
  legoImageSrc?: string;
  // Callbacks
  onCtaClick?: () => void;
  onSignInClick?: () => void;
  onTabClick?: (index: number) => void;
  onDeveloperCommunityClick?: () => void;
}

// Diamond Logo SVG Component
function SketchLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 9L12 22L22 9L12 2Z"
        fill="currentColor"
      />
      <path
        d="M2 9H22"
        stroke="white"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />
      <path
        d="M12 2L8 9L12 22L16 9L12 2Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
    </svg>
  );
}

// Header Component
function Header({
  logoText,
  navItems,
  signInText,
  ctaButtonText,
  onCtaClick,
  onSignInClick,
}: {
  logoText: string;
  navItems: { label: string; hasDropdown?: boolean }[];
  signInText: string;
  ctaButtonText: string;
  onCtaClick?: () => void;
  onSignInClick?: () => void;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-5"
    >
      {/* Logo */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <SketchLogo className="h-6 w-6 text-[#1a1a1a]" />
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-1 text-[15px] text-[#1a1a1a] transition-colors hover:text-[#666]"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </button>
          ))}
        </nav>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button
          onClick={onSignInClick}
          className="hidden text-[15px] text-[#1a1a1a] transition-colors hover:text-[#666] sm:block"
        >
          {signInText}
        </button>
        <button
          onClick={onCtaClick}
          className="flex items-center gap-2 rounded-lg bg-[#1a1a1a] px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#333]"
        >
          {ctaButtonText}
          <Download className="h-4 w-4" />
        </button>
      </div>
    </motion.header>
  );
}

// Top Banner Component
function TopBanner({
  bannerText,
  bannerLinkText,
}: {
  bannerText: string;
  bannerLinkText: string;
}) {
  return (
    <div className="bg-[#5F5E61] py-2 text-center">
      <p className="text-[13px] text-white">
        <span className="font-semibold">{bannerText.split("—")[0]}</span>
        <span className="text-white/80">— {bannerText.split("—")[1]}</span>
        <button className="ml-2 font-medium underline transition-opacity hover:opacity-80">
          {bannerLinkText}
        </button>
      </p>
    </div>
  );
}

// Tab Icon Component
function TabIcon({ type }: { type: "plugins" | "integrations" }) {
  if (type === "plugins") {
    return <Grid3X3 className="h-4 w-4" />;
  }
  return <Settings2 className="h-4 w-4" />;
}

// Main Component
export default function SketchExtensionsHero({
  bannerText = "New: Smart Animate — Bring movement to your prototypes.",
  bannerLinkText = "Learn more",
  logoText = "Sketch",
  navItems = [
    { label: "Product", hasDropdown: true },
    { label: "Learn", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
    { label: "Help", hasDropdown: true },
  ],
  signInText = "Sign In",
  ctaButtonText = "Get started",
  headlineMain = "Sketch",
  headlineAccent = "Extensions",
  description = "Do even more with powerful third-party extensions,",
  developerCommunityText = "Developer Community",
  tabs = [
    { label: "Plugins", icon: "plugins" },
    { label: "Integrations", icon: "integrations" },
  ],
  activeTab = 0,
  legoImageSrc = "/registry/sketch-extensions-hero/lego-blocks.png",
  onCtaClick,
  onSignInClick,
  onTabClick,
  onDeveloperCommunityClick,
}: SketchExtensionsHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA]">
      {/* Top Banner */}
      <TopBanner bannerText={bannerText} bannerLinkText={bannerLinkText} />

      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <Header
          logoText={logoText}
          navItems={navItems}
          signInText={signInText}
          ctaButtonText={ctaButtonText}
          onCtaClick={onCtaClick}
          onSignInClick={onSignInClick}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 items-center gap-8 pb-8 pt-12 lg:grid-cols-2 lg:gap-12 lg:pb-16 lg:pt-20">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block italic text-[#1a1a1a]">{headlineMain}</span>
                <span
                  className="block italic"
                  style={{
                    background: "linear-gradient(135deg, #E8D8BA 0%, #D7B98D 50%, #C9A876 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {headlineAccent}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md"
            >
              <p className="text-[17px] leading-relaxed text-[#1a1a1a]">
                {description}
                <br />
                created by our talented{" "}
                <button
                  onClick={onDeveloperCommunityClick}
                  className="font-medium underline decoration-1 underline-offset-2 transition-colors hover:text-[#666]"
                >
                  {developerCommunityText}
                </button>
                .
              </p>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-1 border-t border-[#e5e5e5] pt-6"
            >
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => onTabClick?.(index)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                    index === activeTab
                      ? "bg-white text-[#1a1a1a] shadow-sm"
                      : "text-[#666] hover:text-[#1a1a1a]"
                  }`}
                >
                  <TabIcon type={tab.icon} />
                  {tab.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Lego Blocks Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative h-[300px] w-full max-w-[500px] sm:h-[350px] lg:h-[400px]">
              <Image
                src={legoImageSrc}
                alt="3D Lego blocks illustration representing extensions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
