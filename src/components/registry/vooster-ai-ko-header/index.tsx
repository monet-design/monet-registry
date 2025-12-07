"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    border: "#E5E7EB",
    text: "#111827",
    textMuted: "#6B7280",
    accent: "#F97316",
  },
  dark: {
    background: "#111827",
    border: "#374151",
    text: "#F9FAFB",
    textMuted: "#9CA3AF",
    accent: "#FB923C",
  },
} as const;

const IMAGES = {
  logo: {
    path: "/registry/vooster-ai-ko-header/logo.svg",
    alt: "Vooster logo",
  },
} as const;

const NAV_ITEMS = [
  { label: "홈", href: "#" },
  { label: "기능", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "가격", href: "#pricing" },
  { label: "커뮤니티", href: "https://discord.com/invite/spGFHTp6EA", external: true },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface VoosterAiKoHeaderProps {
  mode?: "light" | "dark";
}

export default function VoosterAiKoHeader({
  mode = "light",
}: VoosterAiKoHeaderProps) {
  const colors = COLORS[mode];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-[6px]">
              <img
                alt={IMAGES.logo.alt}
                loading="lazy"
                width={28}
                height={28}
                className="size-7"
                src={IMAGES.logo.path}
              />
              <span
                className="text-xl font-bold"
                style={{ color: colors.text }}
              >
                Vooster
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="rounded-md p-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
                style={{ color: colors.textMuted }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <button
              className="h-8 min-w-[60px] rounded px-3 text-xs font-medium transition-all duration-200 hover:bg-gray-100"
              style={{ color: colors.textMuted }}
            >
              EN
            </button>
            <button
              className="h-9 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
              style={{ color: colors.textMuted }}
            >
              로그인
            </button>
            <button
              className="h-9 rounded-md px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: colors.accent }}
            >
              무료로 시작하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: colors.textMuted }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">메뉴 열기</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t py-4 md:hidden" style={{ borderColor: colors.border }}>
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
                  style={{ color: colors.textMuted }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col space-y-2 border-t pt-4" style={{ borderColor: colors.border }}>
              <button
                className="h-9 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                style={{ color: colors.textMuted }}
              >
                로그인
              </button>
              <button
                className="h-9 rounded-md px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.accent }}
              >
                무료로 시작하기
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
