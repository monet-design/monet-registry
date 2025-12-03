"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    logoIcon: "#0D9488",
    logoText: "#171717",
    buttonBorder: "#171717",
    buttonText: "#171717",
    buttonHoverBg: "#F5F5F5",
    iconColor: "#171717",
    linkText: "#525252",
    linkHover: "#171717",
    activeLanguage: "#171717",
    copyrightText: "#737373",
    accessibilityBg: "#171717",
    accessibilityIcon: "#FFFFFF",
  },
  dark: {
    background: "#0A0A0A",
    logoIcon: "#14B8A6",
    logoText: "#FAFAFA",
    buttonBorder: "#FAFAFA",
    buttonText: "#FAFAFA",
    buttonHoverBg: "#262626",
    iconColor: "#FAFAFA",
    linkText: "#A3A3A3",
    linkHover: "#FAFAFA",
    activeLanguage: "#FAFAFA",
    copyrightText: "#737373",
    accessibilityBg: "#FAFAFA",
    accessibilityIcon: "#171717",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, Accessibility } from "lucide-react";

interface SocialLink {
  icon: "instagram" | "linkedin" | "twitter";
  href: string;
  label: string;
}

interface LegalLink {
  label: string;
  href: string;
}

interface FooterReveniProps {
  mode?: "light" | "dark";
  logoText?: string;
  bookDemoText?: string;
  bookDemoHref?: string;
  socialLinks?: SocialLink[];
  languages?: { code: string; label: string }[];
  activeLanguage?: string;
  copyrightText?: string;
  legalLinks?: LegalLink[];
  email?: string;
  showAccessibilityIcon?: boolean;
}

const defaultSocialLinks: SocialLink[] = [
  { icon: "instagram", href: "#", label: "Instagram" },
  { icon: "linkedin", href: "#", label: "LinkedIn" },
  { icon: "twitter", href: "#", label: "Twitter" },
];

const defaultLanguages = [
  { code: "en", label: "English" },
  { code: "es", label: "Espanol" },
];

const defaultLegalLinks: LegalLink[] = [
  { label: "Legal", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookies policy", href: "#" },
];

// Logo component with arrow/bird icon
function ReveniLogo({ iconColor, textColor }: { iconColor: string; textColor: string }) {
  return (
    <div className="flex items-center gap-2">
      {/* Arrow/Bird Icon */}
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12C2 12 6 8 14 8C22 8 26 12 26 12"
          stroke={iconColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M8 16C8 16 10 14 14 14C18 14 20 16 20 16"
          stroke={iconColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {/* Text */}
      <span
        className="text-2xl font-medium tracking-tight"
        style={{ color: textColor }}
      >
        reveni
      </span>
    </div>
  );
}

// Social Icon component
function SocialIcon({
  icon,
  color,
  hoverColor
}: {
  icon: "instagram" | "linkedin" | "twitter";
  color: string;
  hoverColor: string;
}) {
  const iconProps = { size: 20, strokeWidth: 1.5 };

  const icons = {
    instagram: <Instagram {...iconProps} />,
    linkedin: <Linkedin {...iconProps} />,
    twitter: <Twitter {...iconProps} />,
  };

  return (
    <span style={{ color }} className="transition-colors hover:opacity-70">
      {icons[icon]}
    </span>
  );
}

export default function FooterReveni({
  mode = "light",
  logoText = "reveni",
  bookDemoText = "Book a demo",
  bookDemoHref = "#",
  socialLinks = defaultSocialLinks,
  languages = defaultLanguages,
  activeLanguage = "en",
  copyrightText = "Copyright - All rights reserved 2023.",
  legalLinks = defaultLegalLinks,
  email = "hello@reveni.io",
  showAccessibilityIcon = true,
}: FooterReveniProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer
      className="relative w-full py-10"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="mx-auto max-w-6xl px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Row 1: Logo + Book a demo button */}
        <motion.div
          className="flex items-center justify-between"
          variants={itemVariants}
        >
          <ReveniLogo iconColor={colors.logoIcon} textColor={colors.logoText} />

          <a
            href={bookDemoHref}
            className="rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
            style={{
              borderColor: colors.buttonBorder,
              color: colors.buttonText,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.buttonHoverBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {bookDemoText}
          </a>
        </motion.div>

        {/* Row 2: Social icons + Language selector */}
        <motion.div
          className="mt-8 flex items-center justify-between"
          variants={itemVariants}
        >
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                aria-label={link.label}
                className="transition-opacity hover:opacity-70"
              >
                <SocialIcon
                  icon={link.icon}
                  color={colors.iconColor}
                  hoverColor={colors.linkHover}
                />
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-4">
            {languages.map((lang) => (
              <a
                key={lang.code}
                href={`#${lang.code}`}
                className="text-sm transition-colors"
                style={{
                  color: lang.code === activeLanguage ? colors.activeLanguage : colors.linkText,
                  textDecoration: lang.code === activeLanguage ? "underline" : "none",
                  textUnderlineOffset: "4px",
                }}
                onMouseEnter={(e) => {
                  if (lang.code !== activeLanguage) {
                    e.currentTarget.style.color = colors.linkHover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (lang.code !== activeLanguage) {
                    e.currentTarget.style.color = colors.linkText;
                  }
                }}
              >
                {lang.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Row 3: Copyright + Legal links + Email + Accessibility icon */}
        <motion.div
          className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
          variants={itemVariants}
        >
          {/* Copyright */}
          <p
            className="text-sm"
            style={{ color: colors.copyrightText }}
          >
            {copyrightText}
          </p>

          {/* Legal links + Email + Accessibility */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: colors.linkText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.linkHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.linkText;
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href={`mailto:${email}`}
              className="text-sm transition-colors"
              style={{ color: colors.linkText }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.linkHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.linkText;
              }}
            >
              {email}
            </a>

            {showAccessibilityIcon && (
              <button
                aria-label="Accessibility options"
                className="flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: colors.accessibilityBg }}
              >
                <Accessibility
                  size={16}
                  style={{ color: colors.accessibilityIcon }}
                />
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
