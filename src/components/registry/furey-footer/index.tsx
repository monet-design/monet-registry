"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F8F8F8",
    cardBackground: "#FFFFFF",
    text: "#1A1A1A",
    textMuted: "#6B7280",
    textSecondary: "#9CA3AF",
    accent: "#FF6B35",
    buttonBg: "#1A1A1A",
    buttonText: "#FFFFFF",
    inputBorder: "#E5E7EB",
    hiringBadge: "#FF6B35",
    hiringBadgeText: "#FFFFFF",
  },
  dark: {
    background: "#0F0F0F",
    cardBackground: "#1A1A1A",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
    textSecondary: "#6B7280",
    accent: "#FF7F50",
    buttonBg: "#FFFFFF",
    buttonText: "#1A1A1A",
    inputBorder: "#374151",
    hiringBadge: "#FF7F50",
    hiringBadgeText: "#FFFFFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface LegalLink {
  label: string;
  href: string;
}

interface FureyFooterProps {
  mode?: "light" | "dark";
  companyName?: string;
  logoIcon?: React.ReactNode;
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  columns?: FooterColumn[];
  workWithUsLabel?: string;
  workWithUsHref?: string;
  workWithUsAvatars?: string[];
  copyrightYear?: string;
  copyrightCompany?: string;
  legalLinks?: LegalLink[];
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

// Furey Logo Icon (arrow style)
const FureyIcon = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="6" fill={color || "#FF6B35"} />
    <path
      d="M10 16L16 10L22 16M16 10V22"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const defaultColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Accounting", href: "#" },
      { label: "Finance", href: "#" },
      { label: "Payroll", href: "#" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Furey for Ecommerce", href: "#" },
      { label: "Furey for SaaS", href: "#" },
      { label: "Furey for B2B", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Partner network", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Terminal login", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#", badge: "WE'RE HIRING" },
      { label: "Clients", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
];

const defaultLegalLinks: LegalLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

export default function FureyFooter({
  mode = "light",
  companyName = "FUREY",
  logoIcon,
  newsletterTitle = "Get the latest Furey insights in your inbox",
  newsletterPlaceholder = "Enter email",
  columns = defaultColumns,
  workWithUsLabel = "Work with us",
  workWithUsHref = "#",
  workWithUsAvatars = [],
  copyrightYear = "2023",
  copyrightCompany = "Furey. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: FureyFooterProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Section - Logo, Newsletter, Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:w-[300px] shrink-0"
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              {logoIcon || <FureyIcon className="w-8 h-8" color={colors.accent} />}
              <span
                className="text-lg font-bold tracking-wide"
                style={{ color: colors.text }}
              >
                {companyName}
              </span>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4">
              <p
                className="text-sm"
                style={{ color: colors.text }}
              >
                {newsletterTitle}
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder={newsletterPlaceholder}
                  className="rounded-r-none border-r-0 h-10 text-sm"
                  style={{
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.inputBorder,
                    color: colors.text,
                  }}
                />
                <Button
                  className="rounded-l-none h-10 px-4 text-sm font-medium"
                  style={{
                    backgroundColor: colors.buttonBg,
                    color: colors.buttonText,
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-opacity hover:opacity-70"
                style={{ color: colors.text }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="transition-opacity hover:opacity-70"
                style={{ color: colors.text }}
              >
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Section - Navigation Columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-8 flex-1">
            {columns.map((column, index) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4 min-w-[140px]"
              >
                <h3
                  className="text-sm font-medium"
                  style={{ color: colors.textMuted }}
                >
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label} className="flex items-center gap-2">
                      <a
                        href={link.href}
                        className="text-sm transition-opacity hover:opacity-70"
                        style={{ color: colors.text }}
                      >
                        {link.label}
                      </a>
                      {link.badge && (
                        <span
                          className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: colors.hiringBadge,
                            color: colors.hiringBadgeText,
                          }}
                        >
                          {link.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Work with us Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: columns.length * 0.1 }}
              className="mt-6 lg:mt-12"
            >
              <a
                href={workWithUsHref}
                className="inline-flex items-center gap-3 px-4 py-3 rounded-full border transition-all hover:shadow-md"
                style={{
                  backgroundColor: colors.cardBackground,
                  borderColor: colors.inputBorder,
                }}
              >
                {/* Avatar Stack */}
                <div className="flex -space-x-2">
                  {(workWithUsAvatars.length > 0
                    ? workWithUsAvatars
                    : [
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                      ]
                  ).map((avatar, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 overflow-hidden"
                      style={{
                        borderColor: colors.cardBackground,
                      }}
                    >
                      <img
                        src={avatar}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: colors.text }}
                >
                  {workWithUsLabel}
                </span>
                <ArrowRight
                  className="w-4 h-4"
                  style={{ color: colors.text }}
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="border-t"
        style={{ borderColor: colors.inputBorder }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Copyright */}
            <p
              className="text-sm"
              style={{ color: colors.textMuted }}
            >
              &copy; {copyrightYear} {copyrightCompany}
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: colors.textMuted }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
