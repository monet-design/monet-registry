"use client";

import { useState } from "react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#F26625",
    accentHover: "#ee5d19",
    beige: "#F5F1EB",
    text: "#222222",
    background: "#ffffff",
  },
  dark: {
    accent: "#F26625",
    accentHover: "#ee5d19",
    beige: "#2D2A26",
    text: "#ffffff",
    background: "#1a1a1a",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  hero: {
    path: "/registry/ycombinator-com-hero-0/hero.webp",
    alt: "Garry Tan and Sam Altman at a YC dinner",
    prompt: `A professional photo of two tech founders having a conversation at a startup dinner event,
    warm lighting, modern tech environment, casual business attire`,
  },
} as const;

/**
 * 네비게이션 링크
 */
const NAV_LINKS = [
  { label: "About", href: "#" },
  { label: "Companies", href: "#" },
  { label: "Startup Jobs", href: "#" },
  { label: "Find a Co-Founder", href: "#" },
  { label: "Library", href: "#" },
  { label: "SAFE", href: "#" },
  { label: "Resources", href: "#" },
];

/**
 * Apply 배치 정보
 */
const APPLY_BATCH = {
  short: "W2026",
  long: "Winter 2026",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComHero0Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComHero0({
  mode = "light",
}: YcombinatorComHero0Props) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative w-full">
      {/* Header */}
      <div className="w-full" style={{ backgroundColor: colors.beige }}>
        <header className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-row items-center border-b border-gray-200 py-3 sm:py-5">
            <div className="flex w-full flex-1 items-center">
              {/* YC Logo */}
              <div className="mr-6 leading-none">
                <a
                  href="#"
                  title="Y Combinator"
                  className="inline-block h-14 w-14"
                >
                  <div
                    className="flex h-full w-full items-center justify-center rounded text-3xl font-bold text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    Y
                  </div>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden flex-1 pt-1 sm:block">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="mb-1 mr-4 inline-block transition-colors hover:opacity-70"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Apply Button (Desktop) */}
            <div className="ml-auto hidden text-right sm:block">
              <span
                className="mr-3 hidden align-middle lg:inline-block"
                style={{ color: colors.text }}
              >
                Apply for <b title={APPLY_BATCH.long}>{APPLY_BATCH.short}</b>{" "}
                batch.
              </span>
              <a
                href="#"
                className="inline-block rounded-lg px-6 py-2 font-semibold text-white transition-colors"
                style={{ backgroundColor: colors.accent }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.accentHover)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.accent)
                }
                title={`Apply for ${APPLY_BATCH.short} batch.`}
              >
                Apply
              </a>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="border-b border-gray-200 py-4 sm:hidden">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2 transition-colors hover:opacity-70"
                  style={{ color: colors.text }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="mt-4 inline-block rounded-lg px-6 py-2 font-semibold text-white transition-colors"
                style={{ backgroundColor: colors.accent }}
              >
                Apply
              </a>
            </div>
          )}
        </header>
      </div>

      {/* Hero Section */}
      <div className="relative" style={{ backgroundColor: colors.background }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="mx-auto md:mx-0 md:py-12">
              <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
                <span style={{ color: colors.accent }}>Y Combinator</span>
              </h1>
              <p className="mt-5 max-w-xs text-2xl text-gray-900">
                Make something people want.
              </p>
              <a
                href="#"
                className="mt-5 inline-block rounded-lg px-8 py-2 text-xl font-semibold text-white transition-colors"
                style={{ backgroundColor: colors.accent }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.accentHover)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.accent)
                }
              >
                Apply to YC
              </a>
            </div>
            <div className="absolute bottom-0 right-0 top-0 z-0 hidden w-[45vw] md:block">
              <div className="absolute bottom-0 left-0 top-0 z-10 flex flex-col items-center justify-center">
                <div
                  className="mb-6 ml-[-70px] flex w-[170px] flex-col items-center justify-center rounded-2xl py-3 shadow-lg xl:ml-[-115px] xl:w-[230px] xl:py-9"
                  style={{ backgroundColor: colors.beige }}
                >
                  <div
                    className="mb-1 text-3xl font-bold xl:text-4xl"
                    style={{ color: colors.accent }}
                  >
                    5,000
                  </div>
                  <div className="text-base">funded startups</div>
                </div>
                <div
                  className="ml-[-70px] flex w-[170px] flex-col items-center justify-center rounded-2xl py-3 shadow-lg xl:ml-[-115px] xl:w-[230px] xl:py-9"
                  style={{ backgroundColor: colors.beige }}
                >
                  <div
                    className="mb-1 text-3xl font-bold xl:text-4xl"
                    style={{ color: colors.accent }}
                  >
                    $800B
                  </div>
                  <div className="text-base">combined valuation</div>
                </div>
              </div>
              <div
                className="h-full w-full overflow-hidden"
                style={{ backgroundColor: colors.beige }}
              >
                <img
                  src={IMAGES.hero.path}
                  alt={IMAGES.hero.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
