"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to adjust for your project
// ============================================================================

/**
 * Custom colors (brand colors)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#171717",
    textMuted: "#6B7280",
    brandText: "#E5E5E5",
  },
  dark: {
    background: "#1A1A1A",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
    brandText: "#FFFFFF",
  },
} as const;

/**
 * Default content configuration
 */
const DEFAULT_CONTENT = {
  brandName: "Popcorn",
  columns: [
    {
      title: "The Good",
      links: [
        { label: "Home", href: "#" },
        { label: "Manifesto", href: "#" },
        { label: "Research", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "The Boring",
      links: [
        { label: "Terms", href: "#" },
        { label: "Play by the Rules", href: "#" },
        { label: "Privacy", href: "#" },
      ],
    },
    {
      title: "The Cool",
      links: [
        { label: "X", href: "#" },
        { label: "Instagram", href: "#" },
      ],
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, type Variants } from "motion/react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterPopcornProps {
  mode?: "light" | "dark";
  brandName?: string;
  columns?: FooterColumn[];
  logo?: React.ReactNode;
}

// Logo component - 4 rounded squares with center diamond gap
function PopcornLogo({ color = "#FFFFFF" }: { color?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top left square with bottom-right corner cut */}
      <path
        d="M3 0C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H9C10.6569 12 12 10.6569 12 9V3C12 1.34315 10.6569 0 9 0H3Z"
        fill={color}
      />
      {/* Top right square with bottom-left corner cut */}
      <path
        d="M19 0C17.3431 0 16 1.34315 16 3V9C16 10.6569 17.3431 12 19 12H25C26.6569 12 28 10.6569 28 9V3C28 1.34315 26.6569 0 25 0H19Z"
        fill={color}
      />
      {/* Bottom left square with top-right corner cut */}
      <path
        d="M3 16C1.34315 16 0 17.3431 0 19V25C0 26.6569 1.34315 28 3 28H9C10.6569 28 12 26.6569 12 25V19C12 17.3431 10.6569 16 9 16H3Z"
        fill={color}
      />
      {/* Bottom right square with top-left corner cut */}
      <path
        d="M19 16C17.3431 16 16 17.3431 16 19V25C16 26.6569 17.3431 28 19 28H25C26.6569 28 28 26.6569 28 25V19C28 17.3431 26.6569 16 25 16H19Z"
        fill={color}
      />
      {/* Center diamond */}
      <path
        d="M14 10L18 14L14 18L10 14L14 10Z"
        fill={color}
      />
    </svg>
  );
}

export default function FooterPopcorn({
  mode = "dark",
  brandName = DEFAULT_CONTENT.brandName,
  columns = DEFAULT_CONTENT.columns,
  logo,
}: FooterPopcornProps) {
  const colors = COLORS[mode];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const brandTextVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-16 pb-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top section with logo and navigation columns */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            {logo || <PopcornLogo color={colors.text} />}
          </motion.div>

          {/* Navigation columns */}
          <div className="flex flex-wrap gap-10 md:gap-16 lg:gap-28">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                variants={itemVariants}
                className="min-w-[120px]"
              >
                <h3
                  className="text-sm font-medium mb-5"
                  style={{ color: colors.text }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm transition-opacity hover:opacity-70"
                        style={{ color: colors.textMuted }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Large brand text at bottom - partially visible */}
        <motion.div
          variants={brandTextVariants}
          className="mt-12 md:mt-20 -mx-6 md:-mx-12 lg:-mx-20 overflow-hidden"
        >
          <div
            className="text-[clamp(100px,22vw,280px)] font-bold leading-[0.75] tracking-tighter select-none translate-y-[15%]"
            style={{
              color: colors.brandText,
              opacity: mode === "dark" ? 1 : 0.08,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {brandName}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
