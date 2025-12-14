"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    text: "#111",
    subtext: "#666",
    border: "#e5e7eb",
  },
  dark: {
    accent: "#FC0000",
    text: "#fff",
    subtext: "#999",
    border: "#374151",
  },
} as const;

const FOOTER_LINKS = [
  {
    title: "서비스",
    links: [
      { label: "테이블오더", href: "/tableOrder" },
      { label: "서빙로봇", href: "/servingRobot" },
      { label: "티오더 사장님", href: "/torderCeo" },
    ],
  },
  {
    title: "인터뷰",
    links: [
      { label: "티오더 캠페인", href: "/interview/campaign" },
      { label: "사장님 인터뷰", href: "/interview/ceo-story" },
      { label: "매장 둘러보기", href: "/interview/case" },
    ],
  },
  {
    title: "이벤트",
    links: [
      { label: "이벤트", href: "/ceoGuide/event" },
      { label: "프랜차이즈", href: "/franchise" },
      { label: "자주 묻는 질문", href: "/faq" },
    ],
  },
  {
    title: "블로그",
    links: [{ label: "블로그", href: "/ceoGuide/blog" }],
  },
  {
    title: "회사소개",
    links: [
      { label: "채용정보", href: "https://torder.career.greetinghr.com/", external: true },
      { label: "CCM", href: "https://blog.torder.com/ccm/", external: true },
    ],
  },
];

const COMPANY_INFO = {
  name: "(주) 티오더",
  ceo: "권성택",
  businessNumber: "861-81-01247",
  ecommerceNumber: "2023-서울영등포-2772",
  addressMain: "서울특별시 영등포구 여의대로 108, 파크원 타워2 46층 티오더",
  addressGangnam: "서울특별시 강남구 테헤란로 129, 강남N타워 6층 티오더",
  customerService: "1644-4425",
  salesInquiry: "1644-2448",
  fax: "0505-380-7828",
  adEmail: "ads-biz@torder.com",
  businessEmail: "business@torder.com",
};

const SOCIAL_LINKS = [
  { label: "Blog", href: "https://blog.naver.com/torder" },
  { label: "Facebook", href: "https://www.facebook.com/torderofficialpage" },
  { label: "Instagram", href: "https://www.instagram.com/torder_official" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { Globe } from "lucide-react";

interface TorderComFooter15Props {
  mode?: "light" | "dark";
}

export default function TorderComFooter15({
  mode = "light",
}: TorderComFooter15Props) {
  const colors = COLORS[mode];

  return (
    <footer className={`w-full py-12 px-4 ${mode === "dark" ? "bg-gray-950" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12 border-b" style={{ borderColor: colors.border }}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold" style={{ color: colors.text }}>
              t&apos;order
            </span>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {FOOTER_LINKS.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold mb-4" style={{ color: colors.text }}>
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm hover:underline"
                        style={{ color: colors.subtext }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          {/* Company Name */}
          <h5 className="font-bold mb-4" style={{ color: colors.text }}>
            {COMPANY_INFO.name}
          </h5>

          {/* Company Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-1 text-sm" style={{ color: colors.subtext }}>
              <p>대표자: {COMPANY_INFO.ceo} | 사업자등록번호: {COMPANY_INFO.businessNumber}</p>
              <p>통신판매업신고번호: {COMPANY_INFO.ecommerceNumber}</p>
              <p>주소(본사): {COMPANY_INFO.addressMain}</p>
              <p>주소(강남본부): {COMPANY_INFO.addressGangnam}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm" style={{ color: colors.subtext }}>
              <div className="space-y-1">
                <p><strong style={{ color: colors.text }}>고객지원</strong> {COMPANY_INFO.customerService}</p>
                <p><strong style={{ color: colors.text }}>영업문의</strong> {COMPANY_INFO.salesInquiry}</p>
                <p><strong style={{ color: colors.text }}>팩스번호</strong> {COMPANY_INFO.fax}</p>
              </div>
              <div className="space-y-1">
                <p><strong style={{ color: colors.text }}>광고문의</strong> {COMPANY_INFO.adEmail}</p>
                <p><strong style={{ color: colors.text }}>사업문의</strong> {COMPANY_INFO.businessEmail}</p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-8 pt-8 border-t" style={{ borderColor: colors.border }}>
            <p className="text-sm" style={{ color: colors.subtext }}>
              &copy; Copyright 2024 t&apos;order . All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="/serviceTerm" className="text-sm hover:underline" style={{ color: colors.subtext }}>
                홈페이지 이용약관
              </a>
              <a href="/userTerm" className="text-sm hover:underline" style={{ color: colors.subtext }}>
                개인정보 처리방침
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border" style={{ borderColor: colors.border, color: colors.text }}>
                <Globe className="w-4 h-4" />
                Language
              </button>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.text, color: mode === "dark" ? "#000" : "#fff" }}
                  >
                    <span className="text-xs font-bold">{social.label[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
