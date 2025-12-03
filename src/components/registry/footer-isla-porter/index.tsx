"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#9A917B",
  text: "#3D3D3D",
  textLight: "#5A5A5A",
  inputBorder: "#6B6B6B",
} as const;

/**
 * 푸터 카탈로그 링크
 */
const DEFAULT_CATALOG_LINKS = [
  { label: "Cabinetry", href: "#" },
  { label: "Door Styles", href: "#" },
  { label: "Wood Finishes", href: "#" },
  { label: "Color Palette", href: "#" },
];

/**
 * 푸터 인포 링크
 */
const DEFAULT_INFO_LINKS = [
  { label: "Why Isla Porter", href: "#" },
  { label: "Our Story", href: "#" },
  { label: "Our Quality", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Careers", href: "#" },
  { label: "FAQ_", href: "#" },
];

/**
 * 푸터 GET STARTED 링크
 */
const DEFAULT_GET_STARTED_LINKS = [
  { label: "Design Trade", href: "#" },
  { label: "Homeowners", href: "#" },
  { label: "Download Our App", href: "#" },
];

/**
 * 푸터 LEGAL 링크
 */
const DEFAULT_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Our Warranty", href: "#" },
];

/**
 * 푸터 SOCIAL 링크
 */
const DEFAULT_SOCIAL_LINKS = [{ label: "Instagram", href: "#" }];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterIslaPorterProps {
  companyName?: string;
  catalogLinks?: FooterLink[];
  infoLinks?: FooterLink[];
  getStartedLinks?: FooterLink[];
  legalLinks?: FooterLink[];
  socialLinks?: FooterLink[];
  copyrightYear?: number;
  designerName?: string;
  newsletterTitle?: string;
  onSubscribe?: (email: string, userType: "homeowner" | "professional") => void;
}

// Script Logo Component
const PorterLogo = () => (
  <svg
    viewBox="0 0 200 100"
    className="w-40 h-20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="100"
      y="60"
      textAnchor="middle"
      fontFamily="'Pinyon Script', cursive"
      fontSize="48"
      fill={COLORS.text}
    >
      Porter
    </text>
    <line
      x1="20"
      y1="70"
      x2="70"
      y2="70"
      stroke={COLORS.text}
      strokeWidth="0.5"
    />
    <line
      x1="130"
      y1="70"
      x2="180"
      y2="70"
      stroke={COLORS.text}
      strokeWidth="0.5"
    />
  </svg>
);

export default function FooterIslaPorter({
  companyName = "ISLA PORTER",
  catalogLinks = DEFAULT_CATALOG_LINKS,
  infoLinks = DEFAULT_INFO_LINKS,
  getStartedLinks = DEFAULT_GET_STARTED_LINKS,
  legalLinks = DEFAULT_LEGAL_LINKS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  copyrightYear = 2024,
  designerName = "NICE PEOPLE",
  newsletterTitle = "MAKE SPACE IN YOUR INBOX",
  onSubscribe,
}: FooterIslaPorterProps) {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<"homeowner" | "professional">(
    "homeowner"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe?.(email, userType);
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
        `}
      </style>
      <footer
        className="relative w-full py-12 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: COLORS.background }}
      >
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {/* Catalog Column */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3
                className="text-xs font-medium tracking-[0.15em] uppercase"
                style={{ color: COLORS.text }}
              >
                CATALOG
              </h3>
              <ul className="space-y-2">
                {catalogLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{
                        color: COLORS.text,
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Info Column */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3
                className="text-xs font-medium tracking-[0.15em] uppercase"
                style={{ color: COLORS.text }}
              >
                INFO
              </h3>
              <ul className="space-y-2">
                {infoLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{
                        color: COLORS.text,
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Logo Center Column */}
            <motion.div
              variants={itemVariants}
              className="col-span-2 flex flex-col items-center justify-center order-first lg:order-none"
            >
              <PorterLogo />
            </motion.div>

            {/* Get Started & Legal Column */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3
                className="text-xs font-medium tracking-[0.15em] uppercase"
                style={{ color: COLORS.text }}
              >
                GET STARTED
              </h3>
              <ul className="space-y-2">
                {getStartedLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{
                        color: COLORS.text,
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <h3
                  className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                  style={{ color: COLORS.text }}
                >
                  LEGAL
                </h3>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm transition-opacity hover:opacity-70"
                        style={{
                          color: COLORS.text,
                          fontFamily: "'Cormorant Garamond', serif",
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Social Column */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3
                className="text-xs font-medium tracking-[0.15em] uppercase"
                style={{ color: COLORS.text }}
              >
                SOCIAL
              </h3>
              <ul className="space-y-2">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{
                        color: COLORS.text,
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mb-10"
          >
            <h4
              className="text-xs font-medium tracking-[0.2em] uppercase mb-6"
              style={{ color: COLORS.text }}
            >
              {newsletterTitle}
            </h4>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-xl flex flex-col items-center gap-4"
            >
              {/* User Type Selection */}
              <div className="flex items-center gap-6">
                <span
                  className="text-sm italic"
                  style={{
                    color: COLORS.text,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  I am a:
                </span>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "homeowner"}
                    onChange={() => setUserType("homeowner")}
                    className="w-3 h-3 accent-current"
                    style={{ accentColor: COLORS.text }}
                  />
                  <span
                    className="text-sm italic"
                    style={{
                      color: COLORS.text,
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    Homeowner
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "professional"}
                    onChange={() => setUserType("professional")}
                    className="w-3 h-3"
                    style={{ accentColor: COLORS.text }}
                  />
                  <span
                    className="text-sm italic"
                    style={{
                      color: COLORS.text,
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    Trade Professional
                  </span>
                </label>
              </div>

              {/* Email Input */}
              <div className="w-full flex items-center gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent border-b px-0 py-2 text-sm placeholder:text-current/50 focus:outline-none"
                  style={{
                    color: COLORS.text,
                    borderColor: COLORS.inputBorder,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                />
                <button
                  type="submit"
                  className="text-xs font-medium tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
                  style={{ color: COLORS.text }}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center pt-6 border-t"
            style={{ borderColor: `${COLORS.text}20` }}
          >
            <p
              className="text-xs tracking-wide mb-2 md:mb-0"
              style={{ color: COLORS.text }}
            >
              &copy;COPYRIGHT {companyName} {copyrightYear}
            </p>
            <p
              className="text-xs tracking-wide"
              style={{ color: COLORS.text }}
            >
              DESIGNED BY {designerName}
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
}
