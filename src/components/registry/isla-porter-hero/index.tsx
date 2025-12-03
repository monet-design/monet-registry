"use client";

import { motion } from "motion/react";
import { Search } from "lucide-react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    navText: "#e8e4dc",         // Light cream nav text
    tagline: "#d4cc9d",         // Gold tagline
    brandName: "#d4cc9d",       // Gold brand name
  },
} as const;

const IMAGES = {
  background: {
    path: "/registry/isla-porter-hero/background.jpg",
    alt: "Luxury kitchen interior",
    prompt: `Luxury kitchen interior with custom cabinetry.
Style: Professional interior photography, editorial quality
Layout: Wide angle, horizontal composition
Composition: Modern luxury kitchen, custom cabinets, elegant details
Elements: High-end cabinetry, kitchen island, professional appliances
Color palette: Warm wood tones, neutral colors, natural lighting
Mood: Sophisticated, luxurious, timeless elegance
Technical: High resolution, professional lighting, architectural photography`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface NavItem {
  label: string;
  href: string;
  hasIcon?: boolean;
}

interface IslaPorterHeroProps {
  brandName?: string;
  tagline?: string;
  backgroundImage?: string;
  leftNavItems?: NavItem[];
  rightNavItems?: NavItem[];
  cartCount?: number;
}

export default function IslaPorterHero({
  brandName = "ISLA PORTER",
  tagline = "A CREATIVE APPROACH\nTO CABINETRY",
  backgroundImage = IMAGES.background.path,
  leftNavItems = [
    { label: "CATALOG +", href: "#" },
    { label: "PORTFOLIO", href: "#" },
    { label: "PROCESS", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "DIARY", href: "#" },
  ],
  rightNavItems = [
    { label: "CUSTOMIZE", href: "#" },
    { label: "", href: "#", hasIcon: true },
    { label: "CART", href: "#" },
  ],
  cartCount = 0,
}: IslaPorterHeroProps) {
  const colors = COLORS.light;
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={IMAGES.background.alt}
          className="h-full w-full object-cover"
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10"
      >
        {/* Left Navigation */}
        <ul className="flex items-center gap-4 md:gap-6">
          {leftNavItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                style={{ color: colors.navText }}
                className="text-[10px] md:text-xs font-medium tracking-[0.15em] hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Navigation */}
        <ul className="flex items-center gap-4 md:gap-6">
          {rightNavItems.map((item, index) => (
            <li key={index}>
              {item.hasIcon ? (
                <a
                  href={item.href}
                  className="text-[#e8e4dc] hover:text-white transition-colors duration-300"
                >
                  <Search className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ) : (
                <a
                  href={item.href}
                  className="text-[10px] md:text-xs font-medium tracking-[0.15em] text-[#e8e4dc] hover:text-white transition-colors duration-300"
                >
                  {item.label}
                  {item.label === "CART" && ` (${cartCount})`}
                </a>
              )}
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Center Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
      >
        <p className="text-center text-[11px] md:text-sm font-light tracking-[0.25em] whitespace-pre-line leading-relaxed" style={{ color: colors.tagline }}>
          {tagline}
        </p>
      </motion.div>

      {/* Large Brand Name */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 z-10 px-4 md:px-8 pb-4 md:pb-8"
      >
        <h1
          className="font-serif font-light tracking-[0.02em] leading-[0.85]"
          style={{
            fontSize: "clamp(3.5rem, 18vw, 16rem)",
            color: colors.brandName,
          }}
        >
          {brandName}
        </h1>
      </motion.div>
    </section>
  );
}
