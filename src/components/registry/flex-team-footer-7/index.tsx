"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#00C853",
    bg: "#1a1a1a",
  },
  dark: {
    accent: "#00E676",
    bg: "#0d0d0d",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Link from "next/link";

interface FlexTeamFooter7Props {
  mode?: "light" | "dark";
}

const FOOTER_LINKS = {
  services: {
    title: "SERVICES",
    links: [
      { label: "구성원 관리", href: "/members" },
      { label: "성장과 성과", href: "/performance" },
      { label: "급여 운영", href: "/payroll" },
      { label: "비용 관리", href: "/expense" },
    ],
  },
  memberManagement: {
    title: "구성원 관리",
    links: [
      { label: "구성원 · 조직 관리", href: "/members/org" },
      { label: "근태 관리", href: "/members/attendance" },
      { label: "전자계약서", href: "/members/contract" },
      { label: "워크플로우", href: "/members/workflow" },
      { label: "인사이트", href: "/members/insight" },
    ],
  },
  growth: {
    title: "성장과 성과",
    links: [
      { label: "목표", href: "/performance/goal" },
      { label: "평가", href: "/performance/review" },
      { label: "원온원", href: "/performance/oneonone" },
      { label: "채용", href: "/performance/recruit" },
    ],
  },
  payroll: {
    title: "급여와 복지",
    links: [
      { label: "급여정산", href: "/payroll/salary" },
      { label: "연말정산", href: "/payroll/yearend" },
      { label: "임직원 단체보험", href: "/payroll/insurance" },
    ],
  },
  partners: {
    title: "PARTNERS",
    links: [
      { label: "HR Partners", href: "/partners/hr" },
      { label: "Payroll Partners", href: "/partners/payroll" },
    ],
    sub: {
      title: "현장/매장 특화 서비스",
      links: [{ label: "flex mini", href: "/mini" }],
    },
  },
  resources: {
    title: "가격 및 리소스",
    links: [
      { label: "가격", href: "/pricing" },
      { label: "블로그", href: "/blog" },
      { label: "제품 소개서", href: "/brochure", badge: "PDF" },
      { label: "flex 커뮤니티", href: "/community" },
      { label: "업데이트 소식", href: "/updates" },
      { label: "사용 가이드", href: "/guide" },
    ],
  },
  download: {
    title: "다운로드",
    links: [
      { label: "Android 앱", href: "/download/android" },
      { label: "iOS 앱", href: "/download/ios" },
    ],
  },
  flexTeam: {
    title: "플렉스팀",
    links: [
      { label: "스포츠는 팀이다", href: "/sports" },
      { label: "플렉스팀 소식", href: "/news" },
      { label: "제품 인터뷰 지원", href: "/interview" },
      { label: "팀 채용", href: "/careers" },
    ],
  },
};

const SOCIAL_LINKS = [
  { name: "flex", href: "https://flex.team", icon: "flex" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export default function FlexTeamFooter7({
  mode = "light",
}: FlexTeamFooter7Props) {
  const colors = COLORS[mode];

  return (
    <footer className="w-full" style={{ backgroundColor: colors.bg }}>
      <div className="px-8 py-16 lg:px-16">
        {/* Top Section */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-light text-white lg:text-4xl">
              Human Relations
              <br />
              Platform — flex
            </h2>
          </div>
          <div className="flex gap-4">
            <Link
              href="/demo"
              className="rounded-lg bg-gray-800 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-700"
            >
              무료 체험
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-6 py-3 text-base font-medium text-white transition-colors"
              style={{ backgroundColor: colors.accent }}
            >
              도입 문의하기
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="mb-12 grid gap-8 border-t border-gray-800 pt-12 md:grid-cols-3 lg:grid-cols-6">
          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              {FOOTER_LINKS.services.title}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Member Management */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              {FOOTER_LINKS.memberManagement.title}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.memberManagement.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              {FOOTER_LINKS.growth.title}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.growth.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payroll */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              {FOOTER_LINKS.payroll.title}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.payroll.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              {FOOTER_LINKS.partners.title}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.partners.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="mb-2 mt-6 text-xs text-gray-600">
              {FOOTER_LINKS.partners.sub.title}
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.partners.sub.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Download & FlexTeam */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                {FOOTER_LINKS.resources.title}
              </h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.resources.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                      {link.label}
                      {link.badge && (
                        <span className="rounded border border-gray-600 px-1 py-0.5 text-[10px] text-gray-500">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Download & FlexTeam Row */}
        <div className="mb-12 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="lg:col-start-1">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              {FOOTER_LINKS.download.title}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.download.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-start-2">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              {FOOTER_LINKS.flexTeam.title}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.flexTeam.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2 text-xs text-gray-600">
              <p>
                사업자등록번호 460-81-01554 | 대표 장해남 | 경기도 성남시 분당구 황새울로359번길 11 7, 8층 (서현동, 미래에셋플레이스)
              </p>
              <p>
                통신판매업 신고번호 2020-성남분당A-1757 | support@flex.team
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon === "flex" && (
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                      <circle cx="10" cy="16" r="5" />
                      <circle cx="22" cy="10" r="5" />
                      <circle cx="22" cy="22" r="5" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                    </svg>
                  )}
                  {social.icon === "facebook" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04z"/>
                    </svg>
                  )}
                  {social.icon === "youtube" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 flex flex-col gap-4 text-xs text-gray-600 lg:flex-row lg:items-center lg:justify-between">
            <p>&copy; 2025 flex corp. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white">개인정보처리방침</Link>
              <Link href="/terms" className="hover:text-white">서비스이용약관</Link>
              <Link href="/business" className="hover:text-white">사업자등록번호확인</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
