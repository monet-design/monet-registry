"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#7C3AED",
  cardBackground: "#FFFFFF",
  headingText: "#5B21B6",
  linkText: "#6B7280",
  buttonPrimary: "#7C3AED",
  buttonPrimaryText: "#FFFFFF",
  buttonSecondary: "#FFFFFF",
  buttonSecondaryBorder: "#E5E7EB",
  buttonSecondaryText: "#1F2937",
  copyrightText: "#9CA3AF",
  watermarkText: "#A78BFA",
  socialIconBg: "transparent",
} as const;

/**
 * 푸터 컬럼 데이터
 */
const DEFAULT_FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "Product Features", href: "#" },
      { label: "Careers", href: "#" },
    ],
    email: "info@merchlink.io",
  },
  {
    title: "Support",
    links: [
      { label: "Frequently Asked Questions", href: "#" },
      { label: "Contact Customer Success", href: "#" },
    ],
  },
  {
    title: "Trust & Legal",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Data Privacy Policy", href: "#" },
      { label: "Imprint", href: "#" },
    ],
  },
];

const DEFAULT_SOCIAL_LINKS = [
  { icon: "instagram", href: "#", label: "Instagram" },
  { icon: "linkedin", href: "#", label: "LinkedIn" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Instagram, Linkedin, Copy, MessageCircle } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
  email?: string;
}

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface FooterMerchlinkProps {
  mode?: "light" | "dark";
  companyName?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyrightYear?: number;
  showLanguageSelector?: boolean;
  showChatButton?: boolean;
  onDownloadApp?: () => void;
  onBookDemo?: () => void;
}

// Social Icon Component
const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "instagram":
      return <Instagram className="w-4 h-4" />;
    case "linkedin":
      return <Linkedin className="w-4 h-4" />;
    default:
      return null;
  }
};

// Merchlink Logo Component (Two overlapping mountain shapes)
const MerchlinkLogo = ({ size = "small" }: { size?: "small" | "large" }) => {
  const scale = size === "large" ? 3 : 1;
  return (
    <svg
      width={60 * scale}
      height={32 * scale}
      viewBox="0 0 60 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Front mountain (darker) */}
      <path
        d="M5 28L20 8L35 28H5Z"
        fill={size === "large" ? COLORS.watermarkText : COLORS.headingText}
        fillOpacity={size === "large" ? 0.6 : 1}
      />
      {/* Back mountain (lighter) */}
      <path
        d="M25 28L40 8L55 28H25Z"
        fill={size === "large" ? COLORS.watermarkText : COLORS.headingText}
        fillOpacity={size === "large" ? 0.4 : 0.6}
      />
    </svg>
  );
};

export default function FooterMerchlink({
  mode = "light",
  companyName = "Merchlink",
  columns = DEFAULT_FOOTER_COLUMNS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  copyrightYear = 2023,
  showLanguageSelector = true,
  showChatButton = true,
  onDownloadApp,
  onBookDemo,
}: FooterMerchlinkProps) {
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

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
  };

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Main Card Content */}
      <motion.div
        className="mx-4 md:mx-8 lg:mx-16 my-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          className="rounded-3xl p-8 md:p-12 lg:p-16"
          style={{ backgroundColor: COLORS.cardBackground }}
          variants={itemVariants}
        >
          {/* Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company, Support, Trust & Legal Columns */}
            {columns.map((column, colIndex) => (
              <motion.div key={colIndex} variants={itemVariants}>
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: COLORS.headingText }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:opacity-70"
                        style={{ color: COLORS.linkText }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {column.email && (
                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={`mailto:${column.email}`}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: COLORS.linkText }}
                    >
                      {column.email}
                    </a>
                    <button
                      onClick={() => handleCopyEmail(column.email!)}
                      className="p-1 hover:opacity-70 transition-opacity"
                      aria-label="Copy email"
                    >
                      <Copy
                        className="w-3.5 h-3.5"
                        style={{ color: COLORS.linkText }}
                      />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Socials Column */}
            <motion.div variants={itemVariants}>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: COLORS.headingText }}
              >
                Socials
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.href}
                      className="flex items-center gap-2 text-sm transition-colors hover:opacity-70"
                      style={{ color: COLORS.linkText }}
                    >
                      {getSocialIcon(social.icon)}
                      <span>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
            variants={itemVariants}
          >
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={onDownloadApp}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: COLORS.buttonPrimary,
                  color: COLORS.buttonPrimaryText,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download App
              </motion.button>
              <motion.button
                onClick={onBookDemo}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all border"
                style={{
                  backgroundColor: COLORS.buttonSecondary,
                  borderColor: COLORS.buttonSecondaryBorder,
                  color: COLORS.buttonSecondaryText,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a demo
              </motion.button>
            </div>

            {/* Copyright */}
            <p
              className="text-sm"
              style={{ color: COLORS.copyrightText }}
            >
              {copyrightYear} {companyName}. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Watermark Section */}
      <div className="relative h-32 md:h-40 overflow-hidden">
        {/* Language Selector */}
        {showLanguageSelector && (
          <motion.div
            className="absolute bottom-4 left-4 md:left-8 z-10 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-lg">🇺🇸</span>
            <span className="text-white text-sm font-medium">EN</span>
          </motion.div>
        )}

        {/* Chat Button */}
        {showChatButton && (
          <motion.button
            className="absolute bottom-4 right-4 md:right-8 z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: COLORS.cardBackground }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open chat"
          >
            <MessageCircle
              className="w-5 h-5"
              style={{ color: COLORS.headingText }}
            />
          </motion.button>
        )}

        {/* Large Watermark Logo and Text */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <MerchlinkLogo size="large" />
          <span
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight pb-[-8px] translate-y-4"
            style={{ color: COLORS.watermarkText, opacity: 0.5 }}
          >
            merchlink
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
