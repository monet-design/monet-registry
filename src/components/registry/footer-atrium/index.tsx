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
    // Primary 액센트 (버튼, 링크 등)
    accent: "#000000", // 검정 버튼
    accentHover: "#1a1a1a", // 검정 호버
    // 그라데이션 배경
    gradientFrom: "#FDF1CB", // 연한 크림 노란색
    gradientTo: "#FDD965", // 밝은 골드 노란색
  },
  dark: {
    accent: "#FDD965",
    accentHover: "#FEE59B",
    gradientFrom: "#1a1a1a",
    gradientTo: "#2a2a1a",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // 예시:
  // hero: {
  //   path: "/registry/footer-atrium/hero.jpg",
  //   alt: "Hero image description",
  //   prompt: `Detailed image generation prompt...`,
  // },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import "./font.css";
import { motion } from "motion/react";
import { Instagram, Facebook } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  platform: "instagram" | "facebook";
  href: string;
}

interface FooterAtriumProps {
  mode?: "light" | "dark";
  // CTA Section Props
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  // Footer Props
  logoIcon?: React.ReactNode;
  address?: string;
  phone?: string;
  footerLinks?: FooterLink[];
  socialLinks?: SocialLink[];
  languageLabel?: string;
  copyright?: string;
}

// Star/Asterisk Logo Icon
function AsteriskIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2v8.5L5.5 5.5l1-1.73L12 7V2zm0 20v-8.5l6.5 5-1 1.73L12 17v5zm10-10h-8.5l5-6.5 1.73 1L17 12h5zM2 12h8.5l-5 6.5-1.73-1L7 12H2z" />
    </svg>
  );
}

export default function FooterAtrium({
  mode = "light",
  ctaTitle = "Boka en tid",
  ctaDescription = "Vi ar tillgangliga mandag till fredag. Vi ar redo att hjalpa dig\nmed behandling och stod.",
  ctaButtonText = "Boka tid",
  ctaButtonHref = "#",
  logoIcon,
  address = "Warfvinges vag 30A, Stockholm",
  phone = "08 500 81 500",
  footerLinks = [
    { label: "Prisinformation", href: "#" },
    { label: "Feedback", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Integritetspolicy", href: "#" },
  ],
  socialLinks = [
    { platform: "instagram", href: "#" },
    { platform: "facebook", href: "#" },
  ],
  languageLabel = "English",
  copyright = "©2022 HUN Proaktiv Halsovärd AB",
}: FooterAtriumProps) {
  const colors = COLORS[mode];

  const getSocialIcon = (platform: "instagram" | "facebook") => {
    switch (platform) {
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "facebook":
        return <Facebook className="w-5 h-5" />;
    }
  };

  return (
    <section
      className="relative w-full"
      style={{
        background: `linear-gradient(to bottom, ${colors.gradientFrom} 0%, ${colors.gradientTo} 100%)`,
      }}
    >
      {/* CTA Section */}
      <motion.div
        className="px-6 md:px-12 lg:px-20 pt-16 pb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: mode === "light" ? "#1a1a1a" : "#f5f5f5",
          }}
        >
          {ctaTitle}
        </h2>
        <p
          className="text-base md:text-lg max-w-md mb-8 whitespace-pre-line"
          style={{
            color: mode === "light" ? "#2a2a2a" : "#e5e5e5",
          }}
        >
          {ctaDescription}
        </p>
        <motion.a
          href={ctaButtonHref}
          className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-colors"
          style={{
            backgroundColor: colors.accent,
            color: mode === "light" ? "#ffffff" : "#000000",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {ctaButtonText}
        </motion.a>
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        className="px-6 md:px-12 lg:px-20 py-6 border-t"
        style={{
          borderColor:
            mode === "light"
              ? "rgba(0, 0, 0, 0.1)"
              : "rgba(255, 255, 255, 0.1)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left: Logo + Address */}
          <div className="flex items-center gap-3">
            {logoIcon || (
              <AsteriskIcon
                className="w-6 h-6"
                style={{
                  color: mode === "light" ? "#1a1a1a" : "#f5f5f5",
                }}
              />
            )}
            <span
              className="text-sm"
              style={{
                color: mode === "light" ? "#1a1a1a" : "#f5f5f5",
              }}
            >
              {address} — {phone}
            </span>
          </div>

          {/* Right: Links + Social + Language */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm transition-opacity hover:opacity-70"
                style={{
                  color: mode === "light" ? "#1a1a1a" : "#f5f5f5",
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="transition-opacity hover:opacity-70"
                  style={{
                    color: mode === "light" ? "#1a1a1a" : "#f5f5f5",
                  }}
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>

            {/* Language */}
            <span
              className="text-sm"
              style={{
                color: mode === "light" ? "#1a1a1a" : "#f5f5f5",
              }}
            >
              {languageLabel}
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4">
          <p
            className="text-xs"
            style={{
              color:
                mode === "light"
                  ? "rgba(26, 26, 26, 0.6)"
                  : "rgba(245, 245, 245, 0.6)",
            }}
          >
            {copyright}
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
