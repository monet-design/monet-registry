"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFC89",
    text: "#1a1a1a",
    linkHover: "#4a4a4a",
  },
  dark: {
    background: "#3d3c2a",
    text: "#FFFC89",
    linkHover: "#e0e080",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  decorativeGraphics: {
    path: "/registry/foundation-alloy-footer/decorative-graphics.png",
    alt: "Decorative industrial graphics",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

interface SocialLink {
  label: string;
  href: string;
}

interface FoundationAlloyFooterProps {
  mode?: "light" | "dark";
  companyName?: string;
  copyrightYear?: string;
  socialLinks?: SocialLink[];
  onBackToTop?: () => void;
}

// Logo Component
function Logo({ color }: { color: string }) {
  return (
    <svg
      width="40"
      height="48"
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="16" height="8" rx="2" fill={color} opacity="0.6" />
      <rect x="20" y="0" width="16" height="8" rx="2" fill={color} opacity="0.6" />
      <rect x="0" y="12" width="16" height="8" rx="2" fill={color} />
      <rect x="20" y="12" width="16" height="8" rx="2" fill={color} />
      <rect x="8" y="24" width="16" height="8" rx="2" fill={color} opacity="0.7" />
      <rect x="0" y="36" width="16" height="8" rx="2" fill={color} opacity="0.5" />
    </svg>
  );
}

export default function FoundationAlloyFooter({
  mode = "light",
  companyName = "Foundation Alloy",
  copyrightYear = "2023",
  socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
  onBackToTop,
}: FoundationAlloyFooterProps) {
  const colors = COLORS[mode];

  const handleBackToTop = () => {
    if (onBackToTop) {
      onBackToTop();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: colors.background,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="relative px-8 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mb-24 md:mb-32">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Logo color={colors.text} />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <span
              className="text-sm font-normal mb-1"
              style={{ color: colors.text }}
            >
              Follow us
            </span>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm underline underline-offset-4 transition-colors duration-200 hover:opacity-70"
                style={{ color: colors.text }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4">
          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={handleBackToTop}
            className="flex items-center gap-1 text-sm underline underline-offset-4 transition-colors duration-200 hover:opacity-70 cursor-pointer"
            style={{ color: colors.text }}
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </motion.button>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs"
            style={{ color: colors.text }}
          >
            &copy; Copyright {copyrightYear} {companyName}
          </motion.p>
        </div>

        {/* Decorative Graphics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 w-[50%] md:w-[45%] lg:w-[40%] max-w-[500px] pointer-events-none"
          style={{ opacity: 0.6 }}
        >
          <Image
            src={IMAGES.decorativeGraphics.path}
            alt={IMAGES.decorativeGraphics.alt}
            width={500}
            height={200}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </footer>
  );
}
