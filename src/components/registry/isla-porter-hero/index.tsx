"use client";

import { motion } from "motion/react";
import { Search } from "lucide-react";

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
  backgroundImage = "/registry/isla-porter-hero/background.jpg",
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
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Luxury kitchen interior"
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
                className="text-[10px] md:text-xs font-medium tracking-[0.15em] text-[#e8e4dc] hover:text-white transition-colors duration-300"
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
        <p className="text-center text-[11px] md:text-sm font-light tracking-[0.25em] text-[#d4cc9d] whitespace-pre-line leading-relaxed">
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
          className="text-[#d4cc9d] font-serif font-light tracking-[0.02em] leading-[0.85]"
          style={{
            fontSize: "clamp(3.5rem, 18vw, 16rem)",
          }}
        >
          {brandName}
        </h1>
      </motion.div>
    </section>
  );
}
