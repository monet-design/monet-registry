"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#070513",
  purple: "#6B4EE6",
  purpleLight: "#8B6FF0",
  mint: "#2DD4A8",
  mintHover: "#25B890",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AF",
  textMuted: "#6B7280",
} as const;

/**
 * 기본 텍스트 콘텐츠
 */
const DEFAULT_CONTENT = {
  heading: "Shall we get started?",
  primaryButton: {
    text: "Yep, let's talk!",
    subtext: "You will be redirected to a contact form at 10clouds.com site",
  },
  secondaryButton: {
    text: "Want to join the team?",
    subtext: "Check out current open positions at 10Clouds",
  },
  tagline:
    "We pay special attention to business goals,\neffectiveness, cost and perfect quality",
  email: "hello@10clouds.com",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Instagram } from "lucide-react";

// Dribbble Icon Component
const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
  </svg>
);

// Behance Icon Component
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </svg>
);

// Medium Icon Component
const MediumIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

// Sparkle Decoration Component
const SparkleDecoration = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z"
      fill="currentColor"
    />
  </svg>
);

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface Footer10cloudsCtaProps {
  heading?: string;
  primaryButtonText?: string;
  primaryButtonSubtext?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonSubtext?: string;
  secondaryButtonHref?: string;
  tagline?: string;
  email?: string;
  socialLinks?: SocialLink[];
}

export default function Footer10cloudsCta({
  heading = DEFAULT_CONTENT.heading,
  primaryButtonText = DEFAULT_CONTENT.primaryButton.text,
  primaryButtonSubtext = DEFAULT_CONTENT.primaryButton.subtext,
  primaryButtonHref = "#",
  secondaryButtonText = DEFAULT_CONTENT.secondaryButton.text,
  secondaryButtonSubtext = DEFAULT_CONTENT.secondaryButton.subtext,
  secondaryButtonHref = "#",
  tagline = DEFAULT_CONTENT.tagline,
  email = DEFAULT_CONTENT.email,
  socialLinks = [
    {
      name: "Dribbble",
      href: "#",
      icon: <DribbbleIcon className="w-6 h-6" />,
    },
    { name: "Behance", href: "#", icon: <BehanceIcon className="w-6 h-6" /> },
    { name: "Medium", href: "#", icon: <MediumIcon className="w-6 h-6" /> },
    { name: "Instagram", href: "#", icon: <Instagram className="w-6 h-6" /> },
    { name: "LinkedIn", href: "#", icon: <Linkedin className="w-6 h-6" /> },
  ],
}: Footer10cloudsCtaProps) {
  return (
    <footer
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-center mb-12"
          style={{ color: COLORS.textPrimary }}
        >
          {heading}
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6"
        >
          {/* Primary Button - Purple */}
          <div className="flex flex-col items-center">
            <a
              href={primaryButtonHref}
              className="relative px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${COLORS.purpleLight} 0%, ${COLORS.purple} 100%)`,
                color: COLORS.textPrimary,
                boxShadow: `0 4px 20px ${COLORS.purple}50`,
              }}
            >
              {primaryButtonText}
            </a>
            <span
              className="mt-3 text-xs text-center max-w-[240px]"
              style={{ color: COLORS.textMuted }}
            >
              {primaryButtonSubtext}
            </span>
          </div>

          {/* Secondary Button - Mint/Green */}
          <div className="flex flex-col items-center">
            <a
              href={secondaryButtonHref}
              className="relative px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: COLORS.mint,
                color: COLORS.background,
                boxShadow: `0 4px 20px ${COLORS.mint}50`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.mintHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.mint)
              }
            >
              {secondaryButtonText}
            </a>
            <span
              className="mt-3 text-xs text-center max-w-[260px]"
              style={{ color: COLORS.textMuted }}
            >
              {secondaryButtonSubtext}
            </span>
          </div>
        </motion.div>

        {/* Sparkle Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center my-10"
        >
          <div className="relative flex items-center gap-2">
            <SparkleDecoration
              className="w-3 h-3"
              style={{ color: COLORS.purple }}
            />
            <SparkleDecoration
              className="w-5 h-5"
              style={{ color: COLORS.purple }}
            />
            <SparkleDecoration
              className="w-3 h-3"
              style={{ color: COLORS.purple }}
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-center mb-12 whitespace-pre-line font-medium"
          style={{ color: COLORS.textPrimary }}
        >
          {tagline}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center items-center gap-8 mb-10"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.name}
              className="transition-all duration-300 hover:scale-110 hover:opacity-80"
              style={{ color: COLORS.textPrimary }}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href={`mailto:${email}`}
            className="text-lg transition-all duration-300 hover:opacity-80"
            style={{ color: COLORS.mint }}
          >
            {email}
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
