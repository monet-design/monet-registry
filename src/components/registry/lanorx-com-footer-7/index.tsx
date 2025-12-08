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
    accent: "#171717",
    accentHover: "#262626",
  },
  dark: {
    accent: "#FAFAFA",
    accentHover: "#E5E5E5",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {} as const;

/**
 * 푸터 링크 데이터
 */
const FOOTER_LINKS = {
  product: [
    { label: "Workflow", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "API Docs", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contacts", href: "#" },
  ],
  legal: [
    { label: "Cookie", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Refund", href: "#" },
  ],
} as const;

/**
 * 브랜드 정보
 */
const BRAND = {
  name: "Lanorx",
  tagline: "No-code landing pages",
  copyright: "2025 Lanorx. All rights reserved.",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface LanorxComFooter7Props {
  mode?: "light" | "dark";
}

export default function LanorxComFooter7({
  mode = "light",
}: LanorxComFooter7Props) {
  const isDark = mode === "dark";

  return (
    <footer
      className={`border-t ${
        isDark ? "border-neutral-800 bg-neutral-950" : "border-neutral-100 bg-white"
      }`}
    >
      <div className="container mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="#"
              className={`mb-4 block text-lg font-light ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              {BRAND.name}
            </a>
            <p className="text-sm font-light text-neutral-500">{BRAND.tagline}</p>
          </div>

          {/* Product */}
          <div>
            <h3
              className={`mb-3 text-sm font-normal ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Product
            </h3>
            <ul className="space-y-2 text-sm font-light">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`transition-colors ${
                      isDark
                        ? "text-neutral-500 hover:text-white"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className={`mb-3 text-sm font-normal ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Company
            </h3>
            <ul className="space-y-2 text-sm font-light">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`transition-colors ${
                      isDark
                        ? "text-neutral-500 hover:text-white"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className={`mb-3 text-sm font-normal ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Legal
            </h3>
            <ul className="space-y-2 text-sm font-light">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`transition-colors ${
                      isDark
                        ? "text-neutral-500 hover:text-white"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t pt-8 ${
            isDark ? "border-neutral-800" : "border-neutral-100"
          }`}
        >
          <p
            className={`text-center text-xs font-light ${
              isDark ? "text-neutral-500" : "text-neutral-400"
            }`}
          >
            &copy; {BRAND.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
