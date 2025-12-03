"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - Hyperliquid 스타일 민트/청록 + 다크 그린
 */
const COLORS = {
  light: {
    // 상단 섹션 밝은 민트 배경
    bgTop: "#d0f0eb",
    // 하단 섹션 진한 녹색 배경
    bgBottom: "#0b3d2e",
    // 로고 텍스트 색상
    logoText: "#0a3d2d",
    // 상단 네비 링크 (진한 녹색)
    navLink: "#0a3d2d",
    // 하단 텍스트 (밝은 민트)
    bottomText: "#7cc9b5",
    // 소셜 아이콘 색상
    socialIcon: "#0a3d2d",
    // 로고 아이콘 (나비넥타이)
    logoIcon: "#0a3d2d",
    // 하단 로고
    bottomLogoIcon: "#4dd4ac",
  },
  dark: {
    bgTop: "#0b3d2e",
    bgBottom: "#071f18",
    logoText: "#d0f0eb",
    navLink: "#d0f0eb",
    bottomText: "#7cc9b5",
    socialIcon: "#d0f0eb",
    logoIcon: "#d0f0eb",
    bottomLogoIcon: "#4dd4ac",
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

// Bowtie logo component (나비넥타이 형태의 로고)
const BowtieIcon = ({
  className,
  color = "currentColor"
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    viewBox="0 0 40 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 12C0 5.373 5.373 0 12 0C15.866 0 18.5 2.5 20 6C21.5 2.5 24.134 0 28 0C34.627 0 40 5.373 40 12C40 18.627 34.627 24 28 24C24.134 24 21.5 21.5 20 18C18.5 21.5 15.866 24 12 24C5.373 24 0 18.627 0 12Z"
      fill={color}
    />
  </svg>
);

// Social Icons
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const CoinalyzeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="6" cy="12" r="4" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="18" cy="12" r="4" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface NavigationLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

interface HyperliquidFooterProps {
  mode?: "light" | "dark";
  brandName?: string;
  year?: string;
  termsLabel?: string;
  termsHref?: string;
  launchAppLabel?: string;
  launchAppHref?: string;
  navigationLinks?: NavigationLink[];
  socialLinks?: SocialLink[];
}

export default function HyperliquidFooter({
  mode = "light",
  brandName = "Hyperliquid",
  year = "2023",
  termsLabel = "Terms of use",
  termsHref = "#",
  launchAppLabel = "Launch App",
  launchAppHref = "#",
  navigationLinks = [
    { label: "Vaults", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Stats", href: "#" },
    { label: "Markets", href: "#" },
    { label: "Docs", href: "#" },
  ],
  socialLinks = [
    { icon: DiscordIcon, href: "#", label: "Discord" },
    { icon: CoinalyzeIcon, href: "#", label: "Analytics" },
    { icon: TelegramIcon, href: "#", label: "Telegram" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
  ],
}: HyperliquidFooterProps) {
  const colors = COLORS[mode];

  return (
    <footer className="relative w-full">
      {/* Top Section - Brand Logo with Light Mint Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-center py-24 md:py-32"
        style={{ backgroundColor: colors.bgTop }}
      >
        {/* Large Brand Logo */}
        <div className="flex items-start gap-2">
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-light tracking-tight leading-none">
            <span
              className="font-sans"
              style={{ color: colors.logoText }}
            >
              Hyper
            </span>
            <span
              className="font-serif italic"
              style={{ color: colors.logoText }}
            >
              liquid
            </span>
          </h1>
          <BowtieIcon
            className="w-8 h-5 md:w-12 md:h-7 lg:w-14 lg:h-8 mt-2 md:mt-4 lg:mt-5"
            color={colors.logoIcon}
          />
        </div>
      </motion.div>

      {/* Bottom Section - Navigation with Dark Green Background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative py-12 md:py-16"
        style={{ backgroundColor: colors.bgBottom }}
      >
        <div className="container mx-auto px-6 md:px-12">
          {/* Navigation Row */}
          <div className="flex flex-wrap items-start justify-between gap-8 mb-24 md:mb-32">
            {/* Left Navigation Links */}
            <div className="flex flex-wrap gap-x-16 gap-y-4">
              {/* First Column - Vaults only */}
              <div>
                <a
                  href={navigationLinks[0]?.href}
                  className="block text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: colors.bottomText }}
                >
                  {navigationLinks[0]?.label}
                </a>
              </div>

              {/* Second Column - Blog, Stats, Markets, Docs */}
              <div className="flex flex-col gap-2">
                {navigationLinks.slice(1).map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: colors.bottomText }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Third Column - Launch App */}
              <div>
                <a
                  href={launchAppHref}
                  className="text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: colors.bottomText }}
                >
                  {launchAppLabel}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="transition-opacity hover:opacity-70"
                  style={{ color: colors.socialIcon }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between">
            {/* Year */}
            <span
              className="text-sm font-medium"
              style={{ color: colors.bottomText }}
            >
              {year}
            </span>

            {/* Center Logo */}
            <BowtieIcon
              className="w-6 h-4"
              color={colors.bottomLogoIcon}
            />

            {/* Terms Link */}
            <a
              href={termsHref}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: colors.bottomText }}
            >
              {termsLabel}
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
