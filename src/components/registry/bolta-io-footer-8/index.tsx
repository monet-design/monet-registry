"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentHover: "#EA580C",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
  },
} as const;

const CONTENT = {
  ctaTitle: "쉽고 빠른",
  ctaTitleHighlight: "전자세금계산서 발행·관리 서비스",
  ctaTitleEnd: "볼타",
  ctaSubtitle: "지금 등록하면 무료, 사용해보고 결정하세요.",
  ctaButton: "무료로 시작하기",
  companyName: "Bolta",
  companyInfo: [
    "상호명 (주)볼타코퍼레이션 | 대표 이문혁",
    "사업자등록번호 564-81-02684",
    "통신판매업 제 2024-서울강남-00099호",
    "주소 서울 강남구 테헤란로5길 7, KG타워",
    "고객센터 070-8018-8841 | 이메일 hello@bolta.io",
  ],
  copyright: "2025 Bolta Corporation. All rights reserved.",
};

const FOOTER_LINKS = [
  {
    title: "주요 기능",
    links: ["정발행", "역발행", "거래내역 관리", "지출결의서", "API 연동", "업데이트 노트"],
  },
  {
    title: "가격 안내",
    links: ["가격 안내", "무료 서비스", "부가세계산기"],
  },
  {
    title: "콘텐츠",
    links: ["서비스 소개서", "공식 블로그", "네이버 블로그", "고객 사례"],
  },
  {
    title: "볼타채널",
    links: ["문의하기", "뉴스레터", "파트너사"],
  },
  {
    title: "문서",
    links: ["서비스 이용약관", "개인정보처리방침", "API 문서", "서비스 가이드"],
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface BoltaIoFooter8Props {
  mode?: "light" | "dark";
}

export default function BoltaIoFooter8({ mode = "light" }: BoltaIoFooter8Props) {
  const colors = COLORS[mode];

  return (
    <footer className="w-full bg-gray-900">
      {/* CTA Banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {CONTENT.ctaTitle}{" "}
              <span style={{ color: colors.accent }}>{CONTENT.ctaTitleHighlight}</span>{" "}
              {CONTENT.ctaTitleEnd}
            </h3>
            <p className="text-gray-400">{CONTENT.ctaSubtitle}</p>
          </div>
          <motion.a
            href="/signup"
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium whitespace-nowrap"
            style={{ backgroundColor: colors.accent }}
            whileHover={{ backgroundColor: colors.accentHover }}
            whileTap={{ scale: 0.98 }}
          >
            {CONTENT.ctaButton}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 8L16 4L24 8L16 12L8 8Z" fill={colors.accent} />
                  <path d="M8 8V20L16 24V12L8 8Z" fill={colors.accent} opacity="0.8" />
                  <path d="M24 8V20L16 24V12L24 8Z" fill={colors.accent} opacity="0.6" />
                </svg>
                <span className="text-xl font-bold text-white">{CONTENT.companyName}</span>
              </a>
              <div className="space-y-1">
                {CONTENT.companyInfo.map((info, index) => (
                  <p key={index} className="text-xs text-gray-500">
                    {info}
                  </p>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {FOOTER_LINKS.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-semibold text-gray-400 mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            &copy;{CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
