"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#2563EB",
    accentHover: "#1D4ED8",
    background: "#F9EFE5",
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    border: "#E5E7EB",
  },
  dark: {
    accent: "#3B82F6",
    accentHover: "#2563EB",
    background: "#1F1F1F",
    textPrimary: "#F9FAFB",
    textSecondary: "#D1D5DB",
    textMuted: "#9CA3AF",
    border: "#374151",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CSSProperties, useState } from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterSliteProps {
  mode?: "light" | "dark";
  logoIcon?: React.ReactNode;
  columns?: FooterColumn[];
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  newsletterDescription?: string;
  bottomLinks?: FooterLink[];
  copyright?: string;
  onSubscribe?: (email: string) => void;
}

// Default Slite-style logo (3 dots pattern)
function SliteLogo({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="10" cy="10" r="6" fill="currentColor" />
      <circle cx="28" cy="10" r="6" fill="currentColor" />
      <circle cx="10" cy="28" r="6" fill="currentColor" />
      <circle cx="28" cy="28" r="6" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

const defaultColumns: FooterColumn[] = [
  {
    title: "What it's for",
    links: [
      { label: "Knowledge base", href: "#" },
      { label: "Project documentation", href: "#" },
      { label: "Employee Onboarding", href: "#" },
      { label: "Meeting notes", href: "#" },
    ],
  },
  {
    title: "How it works",
    links: [
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "What's new", href: "#" },
      { label: "Help center", href: "#" },
      { label: "Contact support", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Templates", href: "#" },
      { label: "Learn", href: "#" },
      { label: "Knowledge\nManagement Guide", href: "#" },
      { label: "Startup Bibles", href: "#" },
      { label: "Download apps", href: "#" },
      { label: "Chrome extension", href: "#" },
    ],
  },
  {
    title: "Slite",
    links: [
      { label: "About us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Press kit", href: "#" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Notion", href: "#" },
      { label: "Confluence", href: "#" },
      { label: "Google Docs", href: "#" },
      { label: "Dropbox Paper", href: "#" },
      { label: "All comparisons", href: "#" },
    ],
  },
];

const defaultBottomLinks: FooterLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Security", href: "#" },
  { label: "User terms", href: "#" },
  { label: "Customer terms", href: "#" },
];

export default function FooterSlite({
  mode = "light",
  logoIcon,
  columns = defaultColumns,
  newsletterTitle = "Remote letters to read on your own time",
  newsletterPlaceholder = "What's your email?",
  newsletterDescription = "100% homemade, no tricks or ponies or growth hacking nonsense. Just remote things we care about with a short surprising insight once a month. No rush.",
  bottomLinks = defaultBottomLinks,
  copyright = "2023 Slite. All rights reserved.",
  onSubscribe,
}: FooterSliteProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onSubscribe) {
      onSubscribe(email);
      setEmail("");
    }
  };

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: mode === "dark" ? colors.background : "#FFFFFF",
      }}
    >
      {/* Decorative wave background */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background:
            mode === "light"
              ? `linear-gradient(180deg, ${colors.background} 0%, ${colors.background} 60%, transparent 100%)`
              : `linear-gradient(180deg, rgba(55,55,55,0.3) 0%, rgba(55,55,55,0.3) 60%, transparent 100%)`,
          borderRadius: "0 0 50% 0",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {logoIcon || (
            <SliteLogo
              className="w-10 h-10"
              style={{ color: colors.textPrimary }}
            />
          )}
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">
            {columns.map((column, colIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: colIndex * 0.1 }}
              >
                <h3
                  className="text-sm font-medium mb-4"
                  style={{ color: colors.textPrimary }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:opacity-70 whitespace-pre-line"
                        style={{ color: colors.textSecondary }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <h3
              className="text-base font-medium mb-4"
              style={{ color: colors.textPrimary }}
            >
              {newsletterTitle}
            </h3>

            <form onSubmit={handleSubmit} className="mb-4">
              <div
                className="flex items-center rounded-full overflow-hidden border"
                style={{
                  borderColor: colors.border,
                  backgroundColor: mode === "dark" ? "#2D2D2D" : "#FFFFFF",
                }}
              >
                <input
                  type="email"
                  placeholder={newsletterPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 text-sm bg-transparent outline-none"
                  style={{
                    color: colors.textPrimary,
                  }}
                />
                <button
                  type="submit"
                  className="w-10 h-10 mr-1 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{
                    backgroundColor: colors.accent,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.accentHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.accent)
                  }
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>

            <p
              className="text-xs leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {newsletterDescription}
            </p>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: colors.border }}
        >
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {bottomLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:opacity-70"
                style={{ color: colors.textPrimary }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-sm" style={{ color: colors.textSecondary }}>
            &copy;{copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
