"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0F172A", // 다크 네이비
    accent: "#1890FF", // Greeting 브랜드 블루
    accentHover: "#40A9FF",
    textPrimary: "#FFFFFF",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",
    border: "#1E293B",
  },
  dark: {
    background: "#0F172A",
    accent: "#1890FF",
    accentHover: "#40A9FF",
    textPrimary: "#FFFFFF",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",
    border: "#1E293B",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface GreetinghrFooterProps {
  mode?: "light" | "dark";
  companyName?: string;
  companyDescription?: string;
  address?: string;
  ceo?: string;
  phone?: string;
  businessNumber?: string;
  linkGroups?: FooterLinkGroup[];
  copyrightYear?: number;
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  blogUrl?: string;
}

const defaultLinkGroups: FooterLinkGroup[] = [
  {
    title: "제품",
    links: [
      { label: "그리팅 ATS", href: "#" },
      { label: "그리팅 TRM", href: "#" },
      { label: "채용페이지 빌더", href: "#" },
      { label: "지원자 앱", href: "#" },
    ],
  },
  {
    title: "솔루션",
    links: [
      { label: "스타트업", href: "#" },
      { label: "중견/대기업", href: "#" },
      { label: "공공기관", href: "#" },
      { label: "헤드헌팅", href: "#" },
    ],
  },
  {
    title: "고객 사례",
    links: [
      { label: "고객 인터뷰", href: "#" },
      { label: "도입 사례", href: "#" },
      { label: "성공 스토리", href: "#" },
    ],
  },
  {
    title: "가격",
    links: [
      { label: "요금제 안내", href: "#" },
      { label: "무료 체험", href: "#" },
      { label: "견적 문의", href: "#" },
    ],
  },
  {
    title: "유용한 자료",
    links: [
      { label: "채용 가이드북", href: "#" },
      { label: "블로그", href: "#" },
      { label: "웨비나", href: "#" },
      { label: "서비스 소개서", href: "#" },
    ],
  },
  {
    title: "회사 정보",
    links: [
      { label: "회사 소개", href: "#" },
      { label: "채용", href: "#" },
      { label: "파트너십", href: "#" },
      { label: "문의하기", href: "#" },
    ],
  },
];

// SVG Icons
const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const BlogIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
  </svg>
);

export default function GreetinghrFooter({
  mode = "light",
  companyName = "(주)두들린",
  companyDescription = "채용 관리를 넘어, 채용 성공으로.\n국내 1위 채용 관리 솔루션 그리팅입니다.",
  address = "서울시 강남구 테헤란로 305, 한국기술센터 19층",
  ceo = "이태규",
  phone = "02-567-5021",
  businessNumber = "513-86-01891",
  linkGroups = defaultLinkGroups,
  copyrightYear = new Date().getFullYear(),
  privacyPolicyUrl = "#",
  termsOfServiceUrl = "#",
  linkedinUrl = "#",
  facebookUrl = "#",
  instagramUrl = "#",
  youtubeUrl = "#",
  blogUrl = "#",
}: GreetinghrFooterProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Top Section: Logo + Description + Links */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Company Info Column */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4"
            >
              {/* Logo */}
              <div className="mb-6">
                <svg
                  width="120"
                  height="32"
                  viewBox="0 0 120 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="0"
                    y="24"
                    fill={colors.textPrimary}
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="22"
                    fontWeight="700"
                  >
                    Greeting
                  </text>
                </svg>
              </div>

              {/* Description */}
              <p
                className="mb-6 whitespace-pre-line text-sm leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {companyDescription}
              </p>

              {/* Company Details */}
              <div
                className="space-y-1 text-xs"
                style={{ color: colors.textMuted }}
              >
                <p>{companyName}</p>
                <p>{address}</p>
                <p>대표: {ceo}</p>
                <p>문의: {phone}</p>
                <p>사업자등록번호: {businessNumber}</p>
              </div>

              {/* Certifications */}
              <div className="mt-6 flex items-center gap-4">
                <div
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-xs"
                  style={{
                    backgroundColor: colors.border,
                    color: colors.textMuted,
                  }}
                >
                  <span className="font-medium">ISO 27001</span>
                </div>
                <div
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-xs"
                  style={{
                    backgroundColor: colors.border,
                    color: colors.textMuted,
                  }}
                >
                  <span className="font-medium">ISO 27701</span>
                </div>
              </div>
            </motion.div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-6">
              {linkGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  variants={itemVariants}
                  className="min-w-0"
                >
                  <h3
                    className="mb-4 text-sm font-semibold"
                    style={{ color: colors.textPrimary }}
                  >
                    {group.title}
                  </h3>
                  <ul className="space-y-3">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm transition-colors duration-200 hover:opacity-80"
                          style={{ color: colors.textSecondary }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = colors.accent;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = colors.textSecondary;
                          }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="my-12 h-px"
            style={{ backgroundColor: colors.border }}
          />

          {/* Bottom Section: Copyright + Legal + Social */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-between gap-6 sm:flex-row"
          >
            {/* Copyright */}
            <p
              className="text-sm"
              style={{ color: colors.textMuted }}
            >
              &copy; {copyrightYear} {companyName}. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href={privacyPolicyUrl}
                className="text-sm transition-colors duration-200"
                style={{ color: colors.textSecondary }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.textSecondary;
                }}
              >
                개인정보처리방침
              </Link>
              <Link
                href={termsOfServiceUrl}
                className="text-sm transition-colors duration-200"
                style={{ color: colors.textSecondary }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.textSecondary;
                }}
              >
                이용약관
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {linkedinUrl && (
                <Link
                  href={linkedinUrl}
                  className="transition-colors duration-200"
                  style={{ color: colors.textMuted }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.textMuted;
                  }}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </Link>
              )}
              {facebookUrl && (
                <Link
                  href={facebookUrl}
                  className="transition-colors duration-200"
                  style={{ color: colors.textMuted }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.textMuted;
                  }}
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </Link>
              )}
              {instagramUrl && (
                <Link
                  href={instagramUrl}
                  className="transition-colors duration-200"
                  style={{ color: colors.textMuted }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.textMuted;
                  }}
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </Link>
              )}
              {youtubeUrl && (
                <Link
                  href={youtubeUrl}
                  className="transition-colors duration-200"
                  style={{ color: colors.textMuted }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.textMuted;
                  }}
                  aria-label="YouTube"
                >
                  <YoutubeIcon />
                </Link>
              )}
              {blogUrl && (
                <Link
                  href={blogUrl}
                  className="transition-colors duration-200"
                  style={{ color: colors.textMuted }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.textMuted;
                  }}
                  aria-label="Blog"
                >
                  <BlogIcon />
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
