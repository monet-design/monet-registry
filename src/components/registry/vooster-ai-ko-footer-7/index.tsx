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

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface VoosterAiKoFooter7Props {
  mode?: "light" | "dark";
}

const footerLinks = {
  product: {
    title: "제품",
    links: [
      { label: "기능", href: "#features" },
      { label: "로드맵", href: "#roadmap" },
      { label: "가격", href: "#pricing" },
    ],
  },
  resources: {
    title: "리소스",
    links: [
      { label: "커뮤니티", href: "#", external: true },
      { label: "피드백", href: "#", external: true },
      { label: "지원", href: "mailto:lead@awesome.dev" },
    ],
  },
  sns: {
    title: "SNS",
    links: [
      { label: "threads", href: "#", external: true },
      { label: "instagram", href: "#", external: true },
    ],
  },
};

export default function VoosterAiKoFooter7({
  mode = "light",
}: VoosterAiKoFooter7Props) {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 text-xl font-medium text-gray-950">Vooster</div>
            <p className="text-sm leading-relaxed text-gray-600">
              AI와 함께하는 체계적인 프로젝트 관리
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-950">
              {footerLinks.product.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerLinks.product.links.map((link) => (
                <li key={link.label}>
                  <a
                    className="transition-colors hover:text-gray-950"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-950">
              {footerLinks.resources.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerLinks.resources.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="transition-colors hover:text-gray-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS Links */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-950">
              {footerLinks.sns.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerLinks.sns.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gray-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="order-2 text-sm text-gray-600 md:order-1">
              &copy; 2025 Vooster. All rights reserved.
            </div>
            <div className="order-1 flex items-center gap-6 text-sm text-gray-600 md:order-2">
              <a
                className="transition-colors hover:text-gray-950"
                href="/ko/privacy"
              >
                개인정보처리방침
              </a>
              <a
                className="transition-colors hover:text-gray-950"
                href="/ko/terms"
              >
                이용약관
              </a>
              <a
                href="mailto:lead@awesome.dev"
                className="transition-colors hover:text-gray-950"
              >
                문의
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
