"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F9FAFB",
    textPrimary: "#18181B",
    textSecondary: "#71717A",
    textMuted: "#A1A1AA",
    border: "#E4E4E7",
  },
  dark: {
    background: "#18181B",
    textPrimary: "#FAFAFA",
    textSecondary: "#A1A1AA",
    textMuted: "#71717A",
    border: "#27272A",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  logo: {
    path: "/scraped/greetinghr-com-2025-12-14/images/image-50.png",
    alt: "doodlin 로고",
  },
  certIso27701: {
    path: "/scraped/greetinghr-com-2025-12-14/images/image-51.png",
    alt: "DNV ISO 27701 인증",
  },
  certIso27001: {
    path: "/scraped/greetinghr-com-2025-12-14/images/image-52.png",
    alt: "DNV ISO/IEC 27001 인증",
  },
  certIsms: {
    path: "/scraped/greetinghr-com-2025-12-14/images/image-53.png",
    alt: "ISMS 정보보호 관리체계 인증",
  },
} as const;

/**
 * 컨텐츠 데이터
 */
const CONTENT = {
  company: {
    name: "(주)두들린",
    address: "서울시 강남구 테헤란로 305, 한국기술센터 19층",
    ceo: "이태규",
    phone: "02-567-5021",
    businessNumber: "513-86-01891",
    salesNumber: "통신판매업신고번호 : 제 2021-서울강남-05322",
    jobInfoNumber: "직업정보제공사업신고번호 : J1200020250002",
    recruitmentNumber: "유료직업소개사업신고번호 :\n제 2025-3220250-14-5-00039",
  },
  certifications: [
    {
      image: IMAGES.certIso27701,
      title: "정보보호/개인정보보호 국제 표준",
      description: "[ISO/IEC 27001, 27701] 인증 획득",
    },
    {
      image: IMAGES.certIso27001,
      title: "클라우드 서비스 정보보호/개인정보보호",
      description: "국제 표준 [ISO 27017, 27018] 인증 획득",
    },
    {
      image: IMAGES.certIsms,
      title: "인증범위] 채용(Greeting) 서비스",
      description: "[유효기간] 2023. 01. 18 ~ 2026. 01. 17",
    },
  ],
  linkGroups: [
    {
      title: "제품 소개",
      links: [
        { label: "채용 홈페이지", href: "#" },
        { label: "인재풀 구축", href: "#" },
        { label: "다이렉트 소싱 | TRM", href: "#" },
        { label: "공고 관리", href: "#" },
        { label: "지원자 관리", href: "#" },
        { label: "평가 관리", href: "#" },
        { label: "면접 일정 조율", href: "#" },
        { label: "지원자 연락", href: "#" },
        { label: "채용 데이터 분석", href: "#" },
        { label: "대규모 채용", href: "#" },
        { label: "채용 효율화", href: "#" },
      ],
    },
    {
      title: "고객 사례",
      links: [
        { label: "고객사 인터뷰", href: "#" },
        { label: "채용 성공 사례", href: "#" },
        { label: "채용 홈페이지 사례", href: "#" },
      ],
    },
    {
      title: "가격 안내",
      links: [{ label: "가격 안내", href: "#" }],
    },
    {
      title: "솔루션",
      links: [
        { label: "중견·대기업", href: "#" },
        { label: "중소기업", href: "#" },
        { label: "스타트업", href: "#" },
        { label: "IT·기술", href: "#" },
        { label: "제조·생산", href: "#" },
        { label: "유통·커머스", href: "#" },
        { label: "의료·제약", href: "#" },
        { label: "패션·뷰티", href: "#" },
      ],
    },
    {
      title: "유용한 자료",
      links: [
        { label: "서비스 소개서", href: "#" },
        { label: "도입 설득자료", href: "#" },
        { label: "도입 제안서", href: "#" },
        { label: "채용 가이드북", href: "#" },
        { label: "HR 아티클", href: "#" },
        { label: "HR 인터뷰", href: "#" },
        { label: "채인지 커뮤니티", href: "#" },
        { label: "업데이트 소식", href: "#" },
        { label: "이용 가이드", href: "#" },
      ],
    },
    {
      title: "회사",
      links: [
        { label: "도입·제휴 문의", href: "#" },
        { label: "두들린 채용", href: "#" },
        { label: "개인정보 처리방침", href: "#" },
        { label: "이용약관", href: "#" },
        { label: "운영정책", href: "#" },
      ],
    },
  ],
  social: {
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

// SVG Icons
const LinkedInIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface GreetinghrFooterProps {
  mode?: "light" | "dark";
}

export default function GreetinghrFooter({
  mode = "light",
}: GreetinghrFooterProps) {
  const colors = COLORS[mode];

  return (
    <footer className="w-full" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Company Info & Certifications */}
          <div className="lg:col-span-4 space-y-8">
            {/* Logo */}
            <div className="w-24 h-12 relative">
              <Image
                src={IMAGES.logo.path}
                alt={IMAGES.logo.alt}
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Company Info */}
            <div
              className="space-y-1 text-xs leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              <p>{CONTENT.company.name}</p>
              <p>{CONTENT.company.address}</p>
              <p>대표: {CONTENT.company.ceo}</p>
              <p>문의 : {CONTENT.company.phone}</p>
              <p>사업자등록번호 : {CONTENT.company.businessNumber}</p>
              <div className="pt-2">
                <p>{CONTENT.company.salesNumber}</p>
                <p>{CONTENT.company.jobInfoNumber}</p>
                <p className="whitespace-pre-line">
                  {CONTENT.company.recruitmentNumber}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              {CONTENT.certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-12 h-12 relative shrink-0">
                    <Image
                      src={cert.image.path}
                      alt={cert.image.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div
                    className="text-xs leading-relaxed"
                    style={{ color: colors.textSecondary }}
                  >
                    <p>{cert.title}</p>
                    <p>{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href={CONTENT.social.linkedin}
                className="transition-colors duration-200 hover:opacity-70"
                style={{ color: colors.textMuted }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href={CONTENT.social.youtube}
                className="transition-colors duration-200 hover:opacity-70"
                style={{ color: colors.textMuted }}
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </Link>
            </div>
          </div>

          {/* Right Column - Link Groups */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {CONTENT.linkGroups.map((group) => (
                <div key={group.title} className="min-w-0">
                  <h3
                    className="text-sm font-semibold mb-4"
                    style={{ color: colors.textPrimary }}
                  >
                    {group.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.links.map((link: FooterLink) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-xs transition-colors duration-200 hover:opacity-70"
                          style={{ color: colors.textSecondary }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
