"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F5F5",
    text: "#1F1F1F",
    textMuted: "#6B6B6B",
    accent: "#00D9B8",
    progressGradientFrom: "#A3E635",
    progressGradientTo: "#FDE047",
  },
  dark: {
    background: "#0A0A0A",
    text: "#FFFFFF",
    textMuted: "#888888",
    accent: "#00D9B8",
    progressGradientFrom: "#A3E635",
    progressGradientTo: "#FDE047",
  },
} as const;

const IMAGES = {
  product: {
    path: "/registry/footer-moxion/product.png",
    alt: "MP-75 Mobile Power Unit",
    prompt: `<is_transparent_background>true</is_transparent_background>
<summary>Industrial mobile power unit on wheels</summary>
<mood>Dark, industrial, high-tech energy equipment</mood>
<background_summary>Transparent background</background_summary>
<primary_element>A large black industrial mobile power unit on wheels. The unit is rectangular and tall, resembling a large generator or battery pack. It has the "MOXION" logo on top and "MP-75" branding on the side. The unit has red tail lights at the back and is positioned at a 3/4 rear view angle, showing the back and left side. The unit is mounted on a wheeled trailer frame.</primary_element>
<etc_element>None</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface NavLinkGroup {
  title: string;
  links: Array<{ label: string; href: string }>;
}

interface FooterMoxionProps {
  mode?: "light" | "dark";
  logoElement?: React.ReactNode;
  companyInfo?: {
    copyright: string;
    address: string[];
  };
  designCredit?: {
    prefix: string;
    name: string;
    href?: string;
  };
  navGroups?: NavLinkGroup[];
  nextPage?: {
    label: string;
    title: string;
    href: string;
    progress?: number;
  };
  productImage?: {
    src: string;
    alt: string;
  };
}

// MOXION Logo Component with custom X design
function MoxionLogo({ color }: { color: string }) {
  return (
    <svg
      width="130"
      height="24"
      viewBox="0 0 130 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* M */}
      <path
        d="M0 20V4h2.5l6.5 12 6.5-12h2.5v16h-2.5V8l-5.5 10h-2l-5.5-10v12H0z"
        fill={color}
      />
      {/* O */}
      <path
        d="M24 12c0-4.5 3-8.5 8-8.5s8 4 8 8.5-3 8.5-8 8.5-8-4-8-8.5zm2.5 0c0 3.2 2 6 5.5 6s5.5-2.8 5.5-6-2-6-5.5-6-5.5 2.8-5.5 6z"
        fill={color}
      />
      {/* X with diagonal accent */}
      <path
        d="M46 4l5.5 8-5.5 8h3l4-6 4 6h3l-5.5-8 5.5-8h-3l-4 6-4-6h-3z"
        fill={color}
      />
      {/* Diagonal accent line through X */}
      <path
        d="M50 3l12 18"
        stroke="#00D9B8"
        strokeWidth="1.5"
      />
      {/* I */}
      <rect x="67" y="4" width="2.5" height="16" fill={color} />
      {/* O */}
      <path
        d="M76 12c0-4.5 3-8.5 8-8.5s8 4 8 8.5-3 8.5-8 8.5-8-4-8-8.5zm2.5 0c0 3.2 2 6 5.5 6s5.5-2.8 5.5-6-2-6-5.5-6-5.5 2.8-5.5 6z"
        fill={color}
      />
      {/* N */}
      <path
        d="M98 20V4h2.5l10 12V4h2.5v16h-2.5l-10-12v12H98z"
        fill={color}
      />
    </svg>
  );
}

// USA Flag Icon Component
function UsaFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" fill="#B22234"/>
      <rect y="1.08" width="20" height="1.08" fill="white"/>
      <rect y="3.23" width="20" height="1.08" fill="white"/>
      <rect y="5.38" width="20" height="1.08" fill="white"/>
      <rect y="7.54" width="20" height="1.08" fill="white"/>
      <rect y="9.69" width="20" height="1.08" fill="white"/>
      <rect y="11.85" width="20" height="1.08" fill="white"/>
      <rect width="8" height="7.54" fill="#3C3B6E"/>
      <g fill="white">
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <circle
              key={`star-${row}-${col}`}
              cx={0.7 + col * 1.3 + (row % 2 === 1 ? 0.65 : 0)}
              cy={0.7 + row * 1.4}
              r="0.35"
            />
          ))
        )}
      </g>
    </svg>
  );
}

export default function FooterMoxion({
  mode = "dark",
  logoElement,
  companyInfo = {
    copyright: "\u00A92023 Moxion Power / Manufactured in the USA",
    address: ["1414 Harbour Way S #1201,", "Richmond, CA 94804, USA"],
  },
  designCredit = {
    prefix: "Design by",
    name: "reJouice",
    href: "#",
  },
  navGroups = [
    {
      title: "Home",
      links: [
        { label: "Introducing", href: "#" },
        { label: "Features", href: "#" },
        { label: "News", href: "#" },
        { label: "Waitlist", href: "#" },
      ],
    },
    {
      title: "Technology",
      links: [
        { label: "MP-75", href: "#" },
        { label: "Energy Services", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Film", href: "#" },
        { label: "Construction", href: "#" },
        { label: "Events", href: "#" },
        { label: "Utilities", href: "#" },
        { label: "EV Fleet", href: "#" },
      ],
    },
    {
      title: "Mission",
      links: [
        { label: "About Us", href: "#" },
        { label: "People", href: "#" },
        { label: "News", href: "#" },
      ],
    },
    {
      title: "Careers",
      links: [
        { label: "Culture", href: "#" },
        { label: "Open Roles", href: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { label: "Sign Up", href: "#" },
        { label: "Message", href: "#" },
      ],
    },
  ],
  nextPage = {
    label: "Next page",
    title: "Technology",
    href: "#technology",
    progress: 45,
  },
  productImage,
}: FooterMoxionProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full min-h-[600px] overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background gradient for dark mode */}
      {mode === "dark" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 70% 70%, rgba(30, 30, 30, 0.8) 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-12 pb-8">
        {/* Upper Section: Company Info & Navigation */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-20">
          {/* Left Column: Logo, Copyright, Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 lg:max-w-[280px]"
          >
            {/* Logo */}
            <div className="mb-2">
              {logoElement || <MoxionLogo color={colors.text} />}
            </div>

            {/* Copyright */}
            <div
              className="text-sm flex items-center gap-2"
              style={{ color: colors.textMuted }}
            >
              <span>{companyInfo.copyright}</span>
              <UsaFlag />
            </div>

            {/* Address */}
            <div
              className="text-sm leading-relaxed"
              style={{ color: colors.textMuted }}
            >
              {companyInfo.address.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < companyInfo.address.length - 1 && <br />}
                </span>
              ))}
            </div>

            {/* Design Credit */}
            <div
              className="text-sm"
              style={{ color: colors.textMuted }}
            >
              {designCredit.prefix}{" "}
              {designCredit.href ? (
                <a
                  href={designCredit.href}
                  className="underline transition-opacity hover:opacity-70"
                  style={{ color: colors.textMuted }}
                >
                  {designCredit.name}
                  <sup>&reg;</sup>
                </a>
              ) : (
                <span>
                  {designCredit.name}
                  <sup>&reg;</sup>
                </span>
              )}
            </div>
          </motion.div>

          {/* Right Column: Navigation Groups */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 lg:gap-12"
          >
            {navGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="flex flex-col gap-4">
                {/* Group Title */}
                <h4
                  className="text-sm font-semibold"
                  style={{ color: colors.text }}
                >
                  {group.title}
                </h4>
                {/* Links */}
                <ul className="flex flex-col gap-2">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
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
              </div>
            ))}
          </motion.nav>
        </div>

        {/* Lower Section: Next Page Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Next Page Label */}
          <span
            className="text-sm italic mb-2 block"
            style={{ color: colors.accent }}
          >
            {nextPage.label}
          </span>

          {/* Next Page Title & Arrow */}
          <a
            href={nextPage.href}
            className="group flex items-end justify-between gap-8"
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold italic tracking-tight transition-opacity group-hover:opacity-80"
              style={{ color: colors.accent }}
            >
              {nextPage.title}
            </h2>

            {/* Arrow */}
            <motion.div
              className="mb-2 sm:mb-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight
                size={48}
                strokeWidth={1.5}
                style={{ color: colors.accent }}
              />
            </motion.div>
          </a>

          {/* Progress Bar */}
          <div className="mt-4 h-1 w-full max-w-[500px] rounded-full overflow-hidden bg-transparent">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${nextPage.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${colors.progressGradientFrom} 0%, ${colors.progressGradientTo} 100%)`,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Product Image - Positioned on the right (optional) */}
      {productImage && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute right-0 bottom-0 w-[40%] max-w-[500px] h-[70%] hidden lg:block pointer-events-none"
        >
          {/* Reflection effect under the product */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-8"
            style={{
              background: `radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255, 50, 50, 0.3) 0%, transparent 70%)`,
            }}
          />
          <img
            src={productImage.src}
            alt={productImage.alt}
            className="w-full h-full object-contain object-bottom"
          />
        </motion.div>
      )}
    </footer>
  );
}
