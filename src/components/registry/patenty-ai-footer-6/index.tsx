"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  linkedin: "#0077B5",
  linkedinHover: "#60A5FA",
} as const;

/**
 * 로고 설정
 */
const LOGO = {
  icon: "◉",
  text: "PATENTY.AI",
  subText: "페이턴티",
} as const;

/**
 * 슬로건
 */
const SLOGAN = "특허업무 자동화를 넘어 능력의 확장을 경험하세요.";

/**
 * 빠른 링크
 */
const QUICK_LINKS = {
  title: "빠른 링크",
  links: [
    { label: "시작하기", href: "#" },
    { label: "기능 소개", href: "#" },
    { label: "요금제", href: "#" },
  ],
} as const;

/**
 * 지원 링크
 */
const SUPPORT_LINKS = {
  title: "지원",
  links: [
    { label: "문서", href: "#" },
    { label: "고객 지원", href: "#" },
    { label: "회사 소개", href: "#" },
  ],
} as const;

/**
 * 약관 링크
 */
const TERMS_LINKS = {
  title: "약관",
  links: [
    { label: "개인정보 처리방침", href: "#" },
    { label: "이용약관", href: "#" },
    { label: "보안 정책", href: "#" },
  ],
} as const;

/**
 * 유틸리티 링크
 */
const UTILITY_LINKS = [
  { label: "사이트맵", href: "#" },
  { label: "로봇 정책", href: "#" },
] as const;

/**
 * 소셜 링크
 */
const SOCIAL = {
  followText: "팔로우하기",
  linkedin: "https://www.linkedin.com/company/patenty-ai",
} as const;

/**
 * 저작권 및 회사 정보
 */
const COMPANY_INFO = {
  copyright: "© 2025 Patenty Inc. All rights reserved.",
  details: "주식회사 페이턴티 | 사업자번호: 398-88-03203 | 대표이사: 이상민",
  address: "부산광역시 해운대구 세실로 86 (좌동), 115호 | 이메일: contact@patenty.ai",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

interface FooterLinkGroupProps {
  title: string;
  links: readonly { label: string; href: string }[];
}

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={link.label}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface PatentyAiFooter6Props {
  logo?: {
    icon?: string;
    text?: string;
    subText?: string;
  };
  slogan?: string;
  quickLinks?: {
    title: string;
    links: readonly { label: string; href: string }[];
  };
  supportLinks?: {
    title: string;
    links: readonly { label: string; href: string }[];
  };
  termsLinks?: {
    title: string;
    links: readonly { label: string; href: string }[];
  };
  utilityLinks?: readonly { label: string; href: string }[];
  social?: {
    followText?: string;
    linkedin?: string;
  };
  companyInfo?: {
    copyright?: string;
    details?: string;
    address?: string;
  };
}

export default function PatentyAiFooter6({
  logo = LOGO,
  slogan = SLOGAN,
  quickLinks = QUICK_LINKS,
  supportLinks = SUPPORT_LINKS,
  termsLinks = TERMS_LINKS,
  utilityLinks = UTILITY_LINKS,
  social = SOCIAL,
  companyInfo = COMPANY_INFO,
}: PatentyAiFooter6Props) {
  return (
    <footer
      className="bg-black text-white py-10 px-4 border-t border-neutral-900"
      role="contentinfo"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl text-green-500">{logo.icon}</span>
              <span className="text-lg font-bold text-white">{logo.text}</span>
              <span className="text-lg font-bold text-gray-300">{logo.subText}</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">{slogan}</p>
            <div className="flex space-x-4">
              {utilityLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-gray-200"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <span className="text-sm text-gray-500">{social.followText}</span>
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:scale-110 transform"
                  style={{ color: COLORS.linkedin }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.linkedinHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.linkedin)}
                  aria-label="LinkedIn 페이지 방문"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinkGroup title={quickLinks.title} links={quickLinks.links} />

          {/* Support Links */}
          <FooterLinkGroup title={supportLinks.title} links={supportLinks.links} />

          {/* Terms Links */}
          <FooterLinkGroup title={termsLinks.title} links={termsLinks.links} />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-900 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-gray-400 text-xs">
              <p>{companyInfo.copyright}</p>
            </div>
            <div className="text-gray-400 text-xs text-left md:text-right">
              <p>{companyInfo.details}</p>
              <p className="mt-1">{companyInfo.address}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
