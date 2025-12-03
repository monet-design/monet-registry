"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0B1120",
  text: "#FFFFFF",
  textMuted: "#6B7280",
  textSecondary: "#9CA3AF",
  accent: "#5046E5",
  accentHover: "#4338CA",
  inputBg: "#111827",
  inputBorder: "#374151",
  badgeRed: "#EF4444",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterLink {
  label: string;
  href: string;
  badge?: "new";
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterJimoProps {
  companyName?: string;
  logoIcon?: React.ReactNode;
  newsletterTitle?: string;
  newsletterSubtitle?: string;
  newsletterDisclaimer?: string;
  columns?: FooterColumn[];
  backedBy?: {
    label: string;
    name: string;
  };
  copyrightYear?: string;
  copyrightCompany?: string;
  showBadges?: boolean;
  onNewsletterSubmit?: (email: string) => void;
}

// Jimo Logo SVG component
const JimoLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 80 32"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M8 8c-2.2 0-4 1.8-4 4v8c0 4.4 3.6 8 8 8h4v-4h-4c-2.2 0-4-1.8-4-4v-8h8V8H8z" />
    <circle cx="12" cy="4" r="3" />
    <rect x="22" y="8" width="4" height="20" rx="2" />
    <path d="M34 8c-3.3 0-6 2.7-6 6v14h4V14c0-1.1.9-2 2-2s2 .9 2 2v14h4V14c0-1.1.9-2 2-2s2 .9 2 2v14h4V14c0-3.3-2.7-6-6-6-1.7 0-3.2.7-4.3 1.8C36.5 8.7 35.4 8 34 8z" />
    <path d="M58 8c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S63.5 8 58 8zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
  </svg>
);

const defaultColumns: FooterColumn[] = [
  {
    title: "FEATURES",
    links: [
      { label: "Product Tours", href: "#" },
      { label: "Jimo AI", href: "#" },
      { label: "Announcements", href: "#" },
      { label: "Hints", href: "#" },
      { label: "Surveys & NPS", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Checklist", href: "#" },
      { label: "Success Tracker", href: "#" },
    ],
  },
  {
    title: "EXPLORE",
    links: [
      { label: "Pricing", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "What's new", href: "#", badge: "new" },
      { label: "Blog", href: "#" },
      { label: "Laws of Onboarding", href: "#" },
      { label: "Installation", href: "#" },
      { label: "Feedback", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Chrome Extension", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Book a Demo", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Product Hunt", href: "#" },
      { label: "Jimo on G2", href: "#" },
    ],
  },
  {
    title: "COMPARISON",
    links: [
      { label: "Jimo VS Userpilot", href: "#" },
      { label: "Jimo VS Appcues", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Terms of Services", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export default function FooterJimo({
  companyName = "Jimo",
  logoIcon,
  newsletterTitle = "Want Insights from Jimo sent\nstraight to your inbox?",
  newsletterSubtitle = "Join ever-growing community of 100+ product teams who have harnessed the power of Jimo Insights.",
  newsletterDisclaimer = "By clicking send, you'll receive Product Insight updates from Jimo. You always have the choice to unsubscribe from every email you receive.",
  columns = defaultColumns,
  backedBy = { label: "BACKED BY", name: "techstars" },
  copyrightYear = "2025",
  copyrightCompany = "Jimo",
  showBadges = true,
  onNewsletterSubmit,
}: FooterJimoProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (email && onNewsletterSubmit) {
      onNewsletterSubmit(email);
    }
  };

  return (
    <footer
      className="relative w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 mb-16"
        >
          {/* Left - Title & Subtitle */}
          <div className="flex flex-col gap-4 lg:max-w-md">
            <h2
              className="text-2xl md:text-3xl font-semibold leading-tight whitespace-pre-line"
              style={{ color: COLORS.text }}
            >
              {newsletterTitle}
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              {newsletterSubtitle}
            </p>
          </div>

          {/* Right - Email Input */}
          <div className="flex flex-col gap-3 lg:w-[440px]">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div
                className="flex-1 flex items-center rounded-full px-6 py-3"
                style={{
                  backgroundColor: COLORS.inputBg,
                  border: `1px solid ${COLORS.inputBorder}`,
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full bg-transparent outline-none text-sm"
                  style={{ color: COLORS.text }}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: COLORS.accent }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.accentHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.accent)
                }
              >
                Send
              </motion.button>
            </form>
            <p
              className="text-xs leading-relaxed"
              style={{ color: COLORS.textMuted }}
            >
              {newsletterDisclaimer}
            </p>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-12"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            {logoIcon || (
              <div className="flex items-center" style={{ color: COLORS.text }}>
                <JimoLogo className="h-8 w-auto" />
              </div>
            )}
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 flex-1">
            {columns.map((column, colIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + colIndex * 0.05 }}
                className="flex flex-col gap-4"
              >
                <h3
                  className="text-[11px] font-medium tracking-wider"
                  style={{ color: COLORS.textMuted }}
                >
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label} className="flex items-center gap-2">
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:opacity-80"
                        style={{ color: COLORS.text }}
                      >
                        {link.label}
                      </a>
                      {link.badge === "new" && (
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                          style={{ backgroundColor: COLORS.badgeRed }}
                        >
                          N
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Backed By */}
          <div className="flex flex-col gap-2 lg:w-32">
            <span
              className="text-[10px] tracking-wider"
              style={{ color: COLORS.textMuted }}
            >
              {backedBy.label}
            </span>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: COLORS.text }}
            >
              {backedBy.name}
              <span style={{ color: COLORS.accent }}>.</span>
            </span>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-16 pt-8"
        >
          {/* Copyright */}
          <span className="text-sm" style={{ color: COLORS.textMuted }}>
            Copyright &copy;{copyrightYear} {copyrightCompany}
          </span>

          {/* G2 Badges */}
          {showBadges && (
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="flex flex-col items-center justify-center w-14 h-14 rounded-lg text-white"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  <div className="text-[7px] leading-tight opacity-80">
                    SPRING 2025
                  </div>
                  <div className="text-[9px] font-bold leading-tight text-center px-1">
                    High Performer
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF492C] rounded-full flex items-center justify-center">
                  <span className="text-[6px] font-bold text-white">G2</span>
                </div>
              </div>

              <div className="relative">
                <div
                  className="flex flex-col items-center justify-center w-14 h-14 rounded-lg text-white"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  <div className="text-[7px] leading-tight opacity-80">
                    SPRING 2025
                  </div>
                  <div className="text-[9px] font-bold leading-tight text-center px-1">
                    Momentum Leader
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF492C] rounded-full flex items-center justify-center">
                  <span className="text-[6px] font-bold text-white">G2</span>
                </div>
              </div>

              <div className="relative">
                <div
                  className="flex flex-col items-center justify-center w-14 h-14 rounded-lg text-white"
                  style={{ backgroundColor: "#FF492C" }}
                >
                  <div className="text-[7px] leading-tight opacity-80">
                    Leader
                  </div>
                  <div className="text-[9px] font-bold leading-tight text-center px-1">
                    2025
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF492C] rounded-full flex items-center justify-center">
                  <span className="text-[6px] font-bold text-white">G2</span>
                </div>
              </div>

              <div className="relative">
                <div
                  className="flex flex-col items-center justify-center w-14 h-14 rounded-lg text-white"
                  style={{ backgroundColor: "#FF492C" }}
                >
                  <div className="text-[7px] leading-tight opacity-80">
                    Easiest To Use
                  </div>
                  <div className="text-[9px] font-bold leading-tight text-center px-1">
                    2024
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF492C] rounded-full flex items-center justify-center">
                  <span className="text-[6px] font-bold text-white">G2</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-[#003399] text-white relative overflow-hidden">
                <div className="text-[10px] font-bold">GDPR</div>
                <div className="flex gap-[2px] mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-[10px]">
                      *
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </footer>
  );
}
