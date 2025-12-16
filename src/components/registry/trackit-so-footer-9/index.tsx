"use client";

const COLORS = {
  light: {
    bg: "#1a1a1a",
    text: "#ffffff",
    textMuted: "#a0a0a0",
  },
  dark: {
    bg: "#0a0a0a",
    text: "#ffffff",
    textMuted: "#a0a0a0",
  },
} as const;

const FOOTER_SECTIONS = [
  {
    title: "제품",
    links: [
      { label: "주요기능", href: "#" },
      { label: "가격 안내", href: "#" },
      { label: "업데이트", href: "#" },
    ],
  },
  {
    title: "자료",
    links: [
      { label: "가이드", href: "#" },
      { label: "블로그", href: "#" },
      { label: "고객센터", href: "#" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "소개", href: "#" },
      { label: "채용", href: "#" },
      { label: "문의", href: "#" },
    ],
  },
  {
    title: "법적 고지",
    links: [
      { label: "이용약관", href: "#" },
      { label: "개인정보처리방침", href: "#" },
    ],
  },
];

interface TrackitSoFooter9Props {
  mode?: "light" | "dark";
}

export default function TrackitSoFooter9({
  mode = "light",
}: TrackitSoFooter9Props) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full py-12"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">
                Trackit
              </span>
            </a>
            <p className="text-sm" style={{ color: colors.textMuted }}>
              엔터프라이즈를 위한 커스텀 영업 CRM
            </p>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3
                className="text-sm font-semibold mb-4"
                style={{ color: colors.text }}
              >
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: colors.textMuted }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${mode === "light" ? "#333333" : "#222222"}` }}
        >
          <p className="text-sm" style={{ color: colors.textMuted }}>
            &copy; {new Date().getFullYear()} Trackit. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm transition-colors hover:text-white"
              style={{ color: colors.textMuted }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-sm transition-colors hover:text-white"
              style={{ color: colors.textMuted }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
