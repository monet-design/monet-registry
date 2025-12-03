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
    background: "#E6E7E5",
    cardBackground: "#FEFEFD",
    accent: "#8773E9",
    accentHover: "#7563D9",
    textPrimary: "#1B1B1B",
    textSecondary: "#989898",
  },
  dark: {
    background: "#1B1B1B",
    cardBackground: "#2A2A2A",
    accent: "#8773E9",
    accentHover: "#9783F9",
    textPrimary: "#FEFEFD",
    textSecondary: "#989898",
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
import { Sparkles } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterChronicleProps {
  mode?: "light" | "dark";
  logo?: React.ReactNode;
  companyName?: string;
  tagline?: string;
  columns?: FooterColumn[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLinkText?: string;
  ctaHref?: string;
  showCtaBadge?: boolean;
  bottomText?: string;
}

export default function FooterChronicle({
  mode = "light",
  logo,
  companyName = "chronicle",
  tagline = "Experience the future\nof storytelling.",
  columns = [
    {
      title: "About",
      links: [
        { label: "Contact", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Our Story", href: "#" },
        { label: "Careers", href: "#", badge: "HIRING" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Press", href: "#" },
        { label: "Brand Assets", href: "#" },
        { label: "Terms of service", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ],
  ctaTitle = "Apply for early access",
  ctaDescription = "We are still fine tuning the product and would love your help. Join our Beta to help contribute",
  ctaLinkText = "contribute",
  ctaHref = "#",
  showCtaBadge = true,
  bottomText = "Being built remote on sunny shores around the world",
}: FooterChronicleProps) {
  const colors = COLORS[mode];

  const DefaultLogo = () => (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill={colors.textPrimary}
        />
      </svg>
      <span
        className="text-lg font-semibold"
        style={{ color: colors.textPrimary }}
      >
        {companyName}
      </span>
    </div>
  );

  return (
    <footer
      className="relative w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {logo || <DefaultLogo />}
            <p
              className="text-base whitespace-pre-line leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {tagline}
            </p>
          </motion.div>

          {/* Navigation Columns */}
          {columns.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (columnIndex + 1) }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h3
                className="text-base font-semibold"
                style={{ color: colors.textPrimary }}
              >
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <a
                      href={link.href}
                      className="text-base transition-colors hover:opacity-70"
                      style={{ color: colors.textSecondary }}
                    >
                      {link.label}
                    </a>
                    {link.badge && (
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: colors.accent,
                          color: "#FFFFFF",
                        }}
                      >
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-5 rounded-xl"
            style={{ backgroundColor: colors.cardBackground }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: colors.textPrimary }}
                >
                  <Sparkles className="w-6 h-6" style={{ color: colors.cardBackground }} />
                </div>
                {showCtaBadge && (
                  <span
                    className="absolute -top-1 -right-1 text-[10px] font-semibold px-1.5 py-0.5 rounded"
                    style={{
                      backgroundColor: colors.accent,
                      color: "#FFFFFF",
                    }}
                  >
                    NEW
                  </span>
                )}
              </div>
              <h4
                className="text-base font-semibold leading-tight pt-1"
                style={{ color: colors.textPrimary }}
              >
                {ctaTitle}
              </h4>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {ctaDescription.replace(ctaLinkText, "").trim()}{" "}
              <a
                href={ctaHref}
                className="underline hover:opacity-70 transition-opacity"
                style={{ color: colors.textSecondary }}
              >
                {ctaLinkText}
              </a>
            </p>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-sm"
          style={{ color: colors.textSecondary }}
        >
          {bottomText}
        </motion.p>
      </div>
    </footer>
  );
}
