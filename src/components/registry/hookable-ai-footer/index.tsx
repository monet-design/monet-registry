"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  background: "#111111",
  buttonBackground: "#1E1E1E",
  border: "#3D3D3D",
  textWhite: "#FFFFFF",
  textGray: "#808080",
} as const;

const CONTENT = {
  logo: {
    image: "https://framerusercontent.com/images/FKVLFEVqizfp1uZugiZmjrQQ.png",
    href: "#hero",
    tagline: "당신의 상세페이지 제작 AI 파트너",
  },
  homeLinks: {
    title: "홈",
    links: [
      { label: "주요 기능", href: "#features" },
      { label: "이용 요금", href: "#pricing" },
      { label: "이용 후기", href: "#testimonials-1" },
      { label: "자주 묻는 질문", href: "#faq" },
    ],
  },
  social: {
    title: "소셜",
    links: [
      { label: "Linkedin", href: "https://linkedin.com", icon: "linkedin" },
      {
        label: "Instagram",
        href: "https://www.instagram.com/octavo.me",
        icon: "instagram",
      },
    ],
  },
  company: {
    copyright: "Copyright © 2025 주식회사 펄크럼테크놀로지스. All rights reserved.",
    businessNumber: "사업자등록번호: 340-86-03476",
    salesNumber: "통신판매업번호: 2025-서울서초-3012",
    ceo: "대표자 성함: 고우빈",
    email: "이메일: koh@fulcrum.io.kr",
    phone: "연락처: 010-7533-0353",
    address:
      "사업자주소: 서울특별시 서초구 매헌로 16, 서울AI허브 1205호(양재동, 하이브랜드)",
  },
  legal: [
    { label: "개인정보처리방침", href: "./privacy-policy" },
    { label: "이용약관", href: "./terms-of-service" },
    { label: "교환환불정책", href: "./refund-policy" },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="h-5 w-5"
    style={{ fill: COLORS.textGray, color: COLORS.textGray }}
  >
    <path
      d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z"
      opacity="0.2"
    />
    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="h-5 w-5"
    style={{ fill: COLORS.textGray, color: COLORS.textGray }}
  >
    <path
      d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
      opacity="0.2"
    />
    <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
  </svg>
);

interface HookableAiFooterProps {
  logoImage?: string;
  tagline?: string;
  homeLinks?: { title: string; links: Array<{ label: string; href: string }> };
  socialLinks?: {
    title: string;
    links: Array<{ label: string; href: string; icon: string }>;
  };
  companyInfo?: {
    copyright: string;
    businessNumber: string;
    salesNumber: string;
    ceo: string;
    email: string;
    phone: string;
    address: string;
  };
  legalLinks?: Array<{ label: string; href: string }>;
}

export default function HookableAiFooter({
  logoImage = CONTENT.logo.image,
  tagline = CONTENT.logo.tagline,
  homeLinks = CONTENT.homeLinks,
  socialLinks = CONTENT.social,
  companyInfo = CONTENT.company,
  legalLinks = CONTENT.legal,
}: HookableAiFooterProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <LinkedinIcon />;
      case "instagram":
        return <InstagramIcon />;
      default:
        return null;
    }
  };

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          {/* Top Section */}
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            {/* Logo & Tagline */}
            <div className="flex flex-col gap-3">
              <a href={CONTENT.logo.href} className="w-10 h-10">
                <img
                  src={logoImage}
                  alt="Logo"
                  className="h-10 w-10 rounded-lg object-cover"
                />
              </a>
              <p
                className="text-sm"
                style={{ color: COLORS.textGray }}
              >
                {tagline}
              </p>
            </div>

            {/* Navigation Columns */}
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
              {/* Home Links Column */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-sm font-medium"
                  style={{ color: COLORS.textWhite }}
                >
                  {homeLinks.title}
                </p>
                <div className="flex flex-col gap-3">
                  {homeLinks.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: COLORS.textGray }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Column */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-sm font-medium"
                  style={{ color: COLORS.textWhite }}
                >
                  {socialLinks.title}
                </p>
                <div className="flex flex-col gap-2">
                  {socialLinks.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:opacity-80"
                      style={{ backgroundColor: COLORS.buttonBackground }}
                    >
                      {getIcon(link.icon)}
                      <span
                        className="text-sm"
                        style={{ color: COLORS.textGray }}
                      >
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section with Border */}
          <div
            className="flex flex-col gap-6 pt-8 lg:flex-row lg:justify-between lg:items-start"
            style={{ borderTop: `1px solid ${COLORS.border}` }}
          >
            {/* Company Info */}
            <div
              className="text-sm leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              <p>{companyInfo.copyright}</p>
              <p>{companyInfo.businessNumber}</p>
              <p>{companyInfo.salesNumber}</p>
              <p>{companyInfo.ceo}</p>
              <p>{companyInfo.email}</p>
              <p>{companyInfo.phone}</p>
              <p>{companyInfo.address}</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: COLORS.textGray }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
