"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Background - bright neon yellow
    background: "#F8FF00",
    // Text - pure black
    text: "#000000",
    // Button background - black
    buttonBg: "#000000",
    buttonText: "#FFFFFF",
    // Input - white with black border
    inputBg: "#FFFFFF",
    inputBorder: "#000000",
  },
  dark: {
    background: "#1A1A1A",
    text: "#FFFFFF",
    buttonBg: "#FFFFFF",
    buttonText: "#000000",
    inputBg: "#2A2A2A",
    inputBorder: "#FFFFFF",
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
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface SocialLink {
  name: string;
  href: string;
}

interface FooterTheReachProps {
  mode?: "light" | "dark";
  companyName?: string;
  year?: string;
  email?: string;
  privacyPolicyHref?: string;
  socialLinks?: SocialLink[];
  newsletterTitle?: string;
  newsletterCheckboxLabel?: string;
  onNewsletterSubmit?: (email: string, marketingOptIn: boolean) => void;
}

const defaultSocialLinks: SocialLink[] = [
  { name: "Instagram", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Behance", href: "#" },
  { name: "Clutch", href: "#" },
];

export default function FooterTheReach({
  mode = "light",
  companyName = "THE REACH.",
  year = "2024",
  email = "hello@wearethereach.com",
  privacyPolicyHref = "#",
  socialLinks = defaultSocialLinks,
  newsletterTitle = "Join our newsletter to stay up to date",
  newsletterCheckboxLabel = "I AGREE TO RECEIVE MARKETING COMMUNICATIONS",
  onNewsletterSubmit,
}: FooterTheReachProps) {
  const colors = COLORS[mode];
  const [emailValue, setEmailValue] = useState("");
  const [marketingOptIn, setMarketingOptIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNewsletterSubmit?.(emailValue, marketingOptIn);
  };

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-16 lg:px-16">
        {/* Top Section - 3 Column Layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Left Column - Copyright & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p
              className="text-sm font-normal tracking-wide"
              style={{ color: colors.text }}
            >
              &copy; {year} {companyName}
            </p>
            <a
              href={privacyPolicyHref}
              className="text-sm font-normal tracking-wide transition-opacity hover:opacity-70"
              style={{ color: colors.text }}
            >
              Privacy Policy
            </a>
          </motion.div>

          {/* Center Column - Email & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <a
              href={`mailto:${email}`}
              className="text-sm font-normal tracking-wide transition-opacity hover:opacity-70"
              style={{ color: colors.text }}
            >
              {email}
            </a>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-2 text-sm font-normal tracking-wide transition-opacity hover:opacity-70"
                  style={{ color: colors.text }}
                >
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p
              className="text-sm font-medium tracking-wide"
              style={{ color: colors.text }}
            >
              {newsletterTitle}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex items-stretch">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className="h-10 flex-1 border px-4 text-xs font-medium tracking-widest placeholder:text-gray-400 focus:outline-none"
                  style={{
                    backgroundColor: colors.inputBg,
                    borderColor: colors.inputBorder,
                    color: colors.text,
                  }}
                />
                <button
                  type="submit"
                  className="h-10 px-5 text-xs font-semibold tracking-widest transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: colors.buttonBg,
                    color: colors.buttonText,
                  }}
                >
                  SUBMIT
                </button>
              </div>
              <label className="flex cursor-pointer items-start gap-2">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={marketingOptIn}
                    onChange={(e) => setMarketingOptIn(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div
                    className="h-4 w-4 border transition-colors peer-checked:bg-black"
                    style={{
                      backgroundColor: marketingOptIn
                        ? colors.buttonBg
                        : colors.inputBg,
                      borderColor: colors.inputBorder,
                    }}
                  />
                  {marketingOptIn && (
                    <svg
                      className="absolute left-0.5 top-0.5 h-3 w-3"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke={colors.buttonText}
                      strokeWidth="2"
                    >
                      <path d="M2 6l3 3 5-6" />
                    </svg>
                  )}
                </div>
                <span
                  className="text-[10px] font-medium tracking-wider"
                  style={{ color: colors.text }}
                >
                  {newsletterCheckboxLabel}
                </span>
              </label>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section - Large Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <h2
            className="text-[clamp(4rem,18vw,16rem)] font-black leading-[0.85] tracking-tighter"
            style={{ color: colors.text }}
          >
            {companyName}
          </h2>
        </motion.div>
      </div>
    </footer>
  );
}
