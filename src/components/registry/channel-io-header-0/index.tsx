"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#7B68EE",
    accentHover: "#6B5ADB",
  },
  dark: {
    accent: "#9D8FFF",
    accentHover: "#8B7DFF",
  },
} as const;

const IMAGES = {
  logo: {
    path: "/registry/channel-io-header-0/logo.png",
    alt: "채널톡 로고",
    prompt: "Channel Talk logo with Korean text, purple chat bubble icon on left, clean minimal design",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ChannelIoHeader0Props {
  mode?: "light" | "dark";
}

const navItems = [
  {
    label: "서비스",
    href: "#",
    hasDropdown: true,
  },
  {
    label: "AI 에이전트 ALF",
    href: "#",
    isNew: true,
  },
  {
    label: "가격안내",
    href: "#",
  },
  {
    label: "고객사례",
    href: "#",
  },
  {
    label: "블로그",
    href: "#",
  },
];

export default function ChannelIoHeader0({
  mode = "light",
}: ChannelIoHeader0Props) {
  const colors = COLORS[mode];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="flex-shrink-0">
            <Image
              src={IMAGES.logo.path}
              alt={IMAGES.logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {item.label}
                {item.isNew && (
                  <span
                    className="px-1.5 py-0.5 text-[10px] font-semibold text-white rounded"
                    style={{ backgroundColor: colors.accent }}
                  >
                    NEW
                  </span>
                )}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              로그인
            </Link>
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-full transition-colors"
              style={{ backgroundColor: colors.accent }}
            >
              무료 시작하기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {item.label}
                  {item.isNew && (
                    <span
                      className="px-1.5 py-0.5 text-[10px] font-semibold text-white rounded"
                      style={{ backgroundColor: colors.accent }}
                    >
                      NEW
                    </span>
                  )}
                </Link>
              ))}
              <Link
                href="#"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                로그인
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
