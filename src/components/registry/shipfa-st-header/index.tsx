"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#1F2937",
    textMuted: "#6B7280",
  },
  dark: {
    background: "transparent",
    text: "#FFFFFF",
    textMuted: "rgba(255, 255, 255, 0.7)",
  },
} as const;

const IMAGES = {
  logo: {
    path: "/registry/shipfa-st-header/logo.png",
    alt: "ShipFast logo",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// ShipFast Lightning Logo SVG
function ShipFastLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lightning bolt icon */}
      <path
        d="M25 5L10 32H22L18 55L40 25H27L32 5H25Z"
        fill="#FBBF24"
        stroke="#FBBF24"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* ShipFast text */}
      <text
        x="50"
        y="40"
        fill="currentColor"
        fontSize="28"
        fontWeight="bold"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        ShipFast
      </text>
    </svg>
  );
}

interface NavLink {
  label: string;
  href: string;
  hideOnMobile?: boolean;
}

interface ShipfaStHeaderProps {
  mode?: "light" | "dark";
  logoText?: string;
  navLinks?: NavLink[];
}

const defaultNavLinks: NavLink[] = [
  { label: "Pricing", href: "#pricing" },
  { label: "Demo", href: "#demo", hideOnMobile: true },
  { label: "Wall of love", href: "#testimonials" },
];

export default function ShipfaStHeader({
  mode = "dark",
  logoText = "ShipFast",
  navLinks = defaultNavLinks,
}: ShipfaStHeaderProps) {
  const colors = COLORS[mode];

  return (
    <header
      className="w-full"
      style={{ backgroundColor: colors.background }}
    >
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-8 py-5 flex items-center"
      >
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <ShipFastLogo
            className="w-28 md:w-32"
          />
        </a>

        {/* Navigation Links */}
        <div className="w-full flex items-center pl-12 md:pl-24 gap-4 md:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                hover:opacity-80 transition-opacity
                ${link.hideOnMobile ? "hidden sm:inline" : ""}
              `}
              style={{ color: colors.textMuted }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </header>
  );
}
