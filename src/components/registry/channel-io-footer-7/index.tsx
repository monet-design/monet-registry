"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#7B68EE",
  },
  dark: {
    accent: "#9D8FFF",
  },
} as const;

const IMAGES = {
  logo: {
    path: "/registry/channel-io-footer-7/logo.png",
    alt: "채널톡 로고",
  },
  facebook: {
    path: "/registry/channel-io-footer-7/facebook.svg",
    alt: "Facebook",
  },
  youtube: {
    path: "/registry/channel-io-footer-7/youtube.svg",
    alt: "YouTube",
  },
  instagram: {
    path: "/registry/channel-io-footer-7/instagram.svg",
    alt: "Instagram",
  },
} as const;

const FOOTER_LINKS = {
  기능: [
    { label: "고객 메신저", href: "#" },
    { label: "전화", href: "#" },
    { label: "팀 메신저", href: "#" },
    { label: "워크플로우", href: "#" },
    { label: "고객 ALF", href: "#" },
    { label: "팀 ALF", href: "#" },
    { label: "도큐먼트", href: "#" },
    { label: "마케팅", href: "#" },
  ],
  가격안내: [
    { label: "엔터프라이즈", href: "#" },
  ],
  다운로드: [
    { label: "Android", href: "#" },
    { label: "iOS", href: "#" },
    { label: "Windows", href: "#" },
    { label: "macOS", href: "#" },
  ],
  블로그: [
    { label: "이벤트", href: "#" },
    { label: "성공사례", href: "#" },
    { label: "채널톡 사용팁", href: "#" },
    { label: "비즈 인사이트", href: "#" },
    { label: "워크북", href: "#" },
    { label: "개념허브", href: "#" },
    { label: "뉴스룸", href: "#" },
  ],
  리소스: [
    { label: "업데이트 소식", href: "#" },
    { label: "개발자 문서", href: "#" },
    { label: "Open API 센터", href: "#" },
  ],
  지원: [
    { label: "사용 가이드", href: "#" },
    { label: "채널 캠퍼스", href: "#" },
    { label: "전문가 찾기", href: "#" },
    { label: "파트너", href: "#" },
  ],
  회사: [
    { label: "팀 소개", href: "#" },
    { label: "채용", href: "#", badge: "채용중" },
    { label: "서비스 상태", href: "#", badge: "운영중" },
    { label: "오픈소스 라이센스", href: "#" },
    { label: "이용약관", href: "#" },
    { label: "개인정보처리방침", href: "#" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";

interface ChannelIoFooter7Props {
  mode?: "light" | "dark";
}

export default function ChannelIoFooter7({
  mode = "light",
}: ChannelIoFooter7Props) {
  const colors = COLORS[mode];

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Logo and Language Selector */}
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={IMAGES.logo.path}
                alt={IMAGES.logo.alt}
                width={100}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors w-fit">
              <Globe className="w-4 h-4" />
              한국어
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                        {"badge" in link && link.badge && (
                          <span
                            className="px-1.5 py-0.5 text-[10px] font-medium rounded"
                            style={{
                              backgroundColor: colors.accent + "20",
                              color: colors.accent,
                            }}
                          >
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="text-sm text-gray-500">
            <p className="font-medium text-gray-700 mb-1">
              &copy; 2025 Channel Corp.
            </p>
            <p>주식회사 채널코퍼레이션 | 대표자 : 최시원</p>
            <p>사업자등록번호 : 144-81-21513</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Image
                src={IMAGES.facebook.path}
                alt={IMAGES.facebook.alt}
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="YouTube"
            >
              <Image
                src={IMAGES.youtube.path}
                alt={IMAGES.youtube.alt}
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Image
                src={IMAGES.instagram.path}
                alt={IMAGES.instagram.alt}
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
