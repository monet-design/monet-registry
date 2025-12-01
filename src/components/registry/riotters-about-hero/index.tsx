"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",          // 화이트 배경
    accent: "#00F5D4",              // 시안 하이라이트
  },
} as const;

const IMAGES = {
  background: {
    path: "/registry/riotters-about-hero/hero-bg.jpg",
    alt: "Team collaboration workspace",
    prompt: `Modern creative team collaboration in open workspace.
Style: Professional lifestyle photography, natural lighting
Layout: Wide shot of collaborative workspace with team members
Composition: Dynamic team working together, creative environment
Color palette: Bright, professional, modern office aesthetic
Elements: Team members, workspace, computers, collaborative tools
Mood: Creative, collaborative, energetic, modern workplace
Technical: High-quality photography, natural lighting, candid moments`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface RiottersAboutHeroProps {
  mode?: "light";
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  headlinePrefix?: string;
  highlightedText?: string;
  description?: string;
  actionButtonText?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
  onActionClick?: () => void;
}

export default function RiottersAboutHero({
  mode = "light",
  logoText = "riotters",
  navItems = [
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "About", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Process", href: "#process" },
    { label: "Toolbox", href: "#toolbox" },
  ],
  ctaButtonText = "Contact Us",
  headlinePrefix = "Badass design needs both:",
  highlightedText = "space for creativity and clear\nstructure",
  description = "We've created a playground where we combine\nthese two ingredients, and now we invite you to join the\ngame.",
  actionButtonText = "Sure, let's start!",
  backgroundImage = IMAGES.background.path,
  onCtaClick,
  onActionClick,
}: RiottersAboutHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative min-h-[600px] w-full" style={{ backgroundColor: colors.background }}>
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-lg font-medium tracking-tight text-[#1A1A1A]">
            {logoText}
          </span>
        </div>

        {/* Navigation Items */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-[#1A1A1A] transition-colors hover:text-[#666]"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="flex items-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          {ctaButtonText}
        </button>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[480px] w-full overflow-hidden sm:h-[520px]"
        >
          <Image
            src={backgroundImage}
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-8 right-4 max-w-md rounded-lg bg-white p-6 shadow-lg sm:bottom-12 sm:right-8 sm:p-8 lg:right-12"
          >
            {/* Headline */}
            <p className="text-base leading-relaxed text-[#1A1A1A] sm:text-lg">
              {headlinePrefix}{" "}
              <span className="relative inline">
                {highlightedText.split("\n").map((line, index) => (
                  <span key={index}>
                    <span className="relative">
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[40%]"
                        style={{ backgroundColor: colors.accent, zIndex: -1 }}
                      />
                      {line}
                    </span>
                    {index < highlightedText.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </span>
              .{" "}
              {description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < description.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>

            {/* Action Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              onClick={onActionClick}
              className="mt-6 flex items-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {actionButtonText}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
