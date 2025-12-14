"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#00C853", // flex 그린
    accentHover: "#00B248",
  },
  dark: {
    accent: "#00E676",
    accentHover: "#00C853",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  hero: {
    path: "/scraped/flex-team-2025-12-14/images/image-0.jpg",
    alt: "flex 팀이 협업하는 모습",
    prompt: "Professional office setting with a diverse team of Korean professionals collaborating around a desk with laptops, modern office interior with plants and warm lighting",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Link from "next/link";

interface FlexTeamHero0Props {
  mode?: "light" | "dark";
}

export default function FlexTeamHero0({
  mode = "light",
}: FlexTeamHero0Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative min-h-[860px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${IMAGES.hero.path}')`,
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-4 lg:px-16">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-gray-900">
              <circle cx="10" cy="16" r="6" fill="currentColor" />
              <circle cx="22" cy="10" r="6" fill="currentColor" />
              <circle cx="22" cy="22" r="6" fill="currentColor" />
            </svg>
            <span className="text-xl font-semibold text-gray-900">flex</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-6 lg:flex">
            <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
              서비스
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5">
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link href="/blog" className="text-sm text-gray-700 hover:text-gray-900">
              블로그
            </Link>
            <Link href="/pricing" className="text-sm text-gray-700 hover:text-gray-900">
              <span className="text-[#FF5252] text-xs mr-1">바우처</span>
              가격
            </Link>
            <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
              리소스
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5">
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
          >
            로그인
          </Link>
          <Link
            href="/contact"
            className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: colors.accent }}
          >
            도입 문의하기
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[700px] flex-col items-start justify-center px-8 lg:px-16">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
          모든 HR 데이터
          <br />
          flex 하나로
        </h1>
        <p className="mb-8 max-w-xl text-lg text-white/90">
          데이터가 유기적으로 흐를 때 팀은 더 똑똑하게 성장합니다.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg px-6 py-3 text-base font-medium text-white transition-colors"
            style={{ backgroundColor: colors.accent }}
          >
            flex 도입 문의하기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/demo"
            className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            무료 체험하기
          </Link>
        </div>
      </div>
    </section>
  );
}
