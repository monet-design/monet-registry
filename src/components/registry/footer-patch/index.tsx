"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FAFAFA",
    text: "#1A1A1A",
    textMuted: "#6B7280",
    border: "#E5E7EB",
    accent: "#E8FF75",
    accentHover: "#D4ED66",
    inputBorder: "#E8FF75",
    inputBorderFocus: "#CDEB50",
  },
  dark: {
    background: "#0F0F0F",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
    border: "#374151",
    accent: "#E8FF75",
    accentHover: "#D4ED66",
    inputBorder: "#E8FF75",
    inputBorderFocus: "#CDEB50",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: "linkedin" | "x" | "github";
  href: string;
  label: string;
}

interface FooterPatchProps {
  mode?: "light" | "dark";
  companyName?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyrightYear?: string;
  copyrightCompany?: string;
  legalLinks?: FooterLink[];
  newsletterTitle?: string;
  newsletterEmailLabel?: string;
  newsletterSubmitText?: string;
  onNewsletterSubmit?: (email: string) => void;
}

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Data packages", href: "#" },
      { label: "Serverless", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Get started",
    links: [{ label: "Book a demo", href: "#" }],
  },
  {
    title: "Developers",
    links: [
      { label: "Docs", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: "x", href: "#", label: "X" },
  { icon: "github", href: "#", label: "GitHub" },
  { icon: "linkedin", href: "#", label: "LinkedIn" },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function FooterPatch({
  mode = "light",
  companyName = "Patch Enterprises",
  columns = defaultColumns,
  socialLinks = defaultSocialLinks,
  copyrightYear = "2024",
  copyrightCompany = "Patch Enterprises",
  legalLinks = defaultLegalLinks,
  newsletterTitle = "Subscribe to all things Patch.",
  newsletterEmailLabel = "Email",
  newsletterSubmitText = "Submit",
  onNewsletterSubmit,
}: FooterPatchProps) {
  const colors = COLORS[mode];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (onNewsletterSubmit && email) {
      onNewsletterSubmit(email);
    }
  };

  const renderSocialIcon = (icon: SocialLink["icon"]) => {
    switch (icon) {
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "x":
        return <XIcon className="w-5 h-5" />;
      case "github":
        return <Github className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Top Border */}
      <div
        className="w-full h-px"
        style={{ backgroundColor: colors.border }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 lg:py-16">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-8"
        >
          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-8 lg:gap-12 xl:gap-16 flex-1">
            {columns.map((column, index) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4 min-w-[120px]"
              >
                <h3
                  className="text-sm font-medium"
                  style={{ color: colors.textMuted }}
                >
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:opacity-70"
                        style={{ color: colors.text }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-[280px] xl:w-[320px]"
          >
            <h3
              className="text-lg font-medium mb-4"
              style={{ color: colors.text }}
            >
              {newsletterTitle}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="footer-email"
                  className="text-sm"
                  style={{ color: colors.text }}
                >
                  {newsletterEmailLabel}
                  <span style={{ color: colors.text }}>*</span>
                </label>
                <input
                  type="email"
                  id="footer-email"
                  name="email"
                  required
                  className="w-full px-3 py-2 text-sm rounded-sm outline-none transition-colors"
                  style={{
                    backgroundColor: mode === "light" ? "#FFFFFF" : "#1F1F1F",
                    color: colors.text,
                    border: `1px solid ${colors.inputBorder}`,
                  }}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium rounded-sm transition-all hover:scale-105"
                  style={{
                    backgroundColor: colors.accent,
                    color: "#1A1A1A",
                  }}
                >
                  {newsletterSubmitText}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-16 pt-8"
          style={{ borderTop: `1px solid ${colors.border}` }}
        >
          {/* Copyright and Legal Links */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <span
              className="text-sm"
              style={{ color: colors.textMuted }}
            >
              Copyright &copy; {copyrightYear} {copyrightCompany}. All rights reserved.
            </span>
            {legalLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:opacity-70"
                style={{ color: colors.textMuted }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition-colors hover:opacity-70"
                style={{ color: colors.text }}
              >
                {renderSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
