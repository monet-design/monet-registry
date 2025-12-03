"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    background: "#FBFBF9",
    socialButtonBg: "#E6E4E5",
    divider: "#D0CECA",
    titleText: "#525252",
    linkText: "#737373",
    mutedText: "#a3a3a3",
  },
  dark: {
    background: "#18181b",
    socialButtonBg: "#27272a",
    divider: "#3f3f46",
    titleText: "#e4e4e7",
    linkText: "#a1a1aa",
    mutedText: "#71717a",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Link data structure
interface LinkItem {
  label: string;
  href: string;
  isSoon?: boolean;
}

// Default footer data
const defaultFooterData = {
  brand: {
    name: "AlignUI Design System",
    tagline: "The design system you need. Designed for Figma.",
    logo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L4 10V22L16 28L28 22V10L16 4Z" fill="currentColor" opacity="0.1"/>
        <path d="M16 4L4 10L16 16L28 10L16 4Z" fill="currentColor" opacity="0.3"/>
        <path d="M16 16V28L4 22V10L16 16Z" fill="currentColor" opacity="0.5"/>
        <path d="M16 16V28L28 22V10L16 16Z" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
  },
  socialLinks: [
    { icon: "x", href: "#", label: "X (Twitter)" },
    { icon: "youtube", href: "#", label: "YouTube" },
    { icon: "facebook", href: "#", label: "Facebook" },
    { icon: "dribbble", href: "#", label: "Dribbble" },
  ],
  columns: [
    {
      sections: [
        {
          title: "AlignUI Beta",
          links: [
            { label: "Homepage", href: "#" },
            { label: "Buy AlignUI DS", href: "#" },
            { label: "Preview on Figma", href: "#" },
            { label: "Components", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "About", href: "#" },
            { label: "Updates", href: "#" },
            { label: "Changelog", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Contact", href: "#" },
          ],
        },
        {
          title: "Legal Notices",
          links: [
            { label: "License Agreement", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms & Conditions", href: "#" },
            { label: "Cookies Policy", href: "#" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Social Links",
          links: [
            { label: "X (Twitter)", href: "#" },
            { label: "Instagram", href: "#" },
            { label: "Youtube", href: "#" },
            { label: "Discord", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "TikTok", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "Dribbble", href: "#" },
          ],
        },
        {
          title: "Pricing",
          links: [
            { label: "Pricing Options", href: "#" },
            { label: "Student Discounts", href: "#" },
            { label: "Regional Discounts", href: "#" },
            { label: "Enterprise Discounts", href: "#" },
            { label: "Affiliate Program", href: "#" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Base Components",
          links: [
            { label: "Accordion", href: "#" },
            { label: "Alert & Notification", href: "#" },
            { label: "Avatar", href: "#" },
            { label: "Badge", href: "#" },
            { label: "Banner", href: "#" },
            { label: "Breadcrumbs", href: "#" },
            { label: "Button", href: "#" },
            { label: "Button Group", href: "#" },
            { label: "Checkbox", href: "#" },
            { label: "Content Divider", href: "#" },
            { label: "Date Picker", href: "#" },
            { label: "Dropdown", href: "#" },
            { label: "File Upload", href: "#" },
            { label: "Key Components", href: "#" },
            { label: "Modal", href: "#" },
            { label: "Pagination", href: "#" },
            { label: "Progress Bar", href: "#" },
            { label: "Radio", href: "#" },
            { label: "Rating", href: "#" },
            { label: "Slider", href: "#" },
            { label: "Step Indicator", href: "#" },
            { label: "Tab Menu", href: "#" },
            { label: "Table", href: "#" },
            { label: "Tag", href: "#" },
            { label: "Text Area", href: "#" },
            { label: "Text Input", href: "#" },
            { label: "Toggle", href: "#" },
            { label: "Switch Toggle", href: "#" },
            { label: "Tooltip", href: "#" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Core Elements",
          links: [
            { label: "Color Palette", href: "#" },
            { label: "Typography", href: "#" },
            { label: "Icons", href: "#" },
            { label: "Grid System", href: "#" },
            { label: "Shadow", href: "#" },
            { label: "Assets", href: "#" },
            { label: "Motion", href: "#", isSoon: true },
            { label: "Radius & Spacing", href: "#", isSoon: true },
          ],
        },
        {
          title: "Sector Products",
          links: [
            { label: "HR Management", href: "#" },
            { label: "Finance & Banking", href: "#" },
            { label: "Marketing & Sales", href: "#", isSoon: true },
            { label: "Healthcare", href: "#", isSoon: true },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Product Components",
          links: [
            { label: "Navigation", href: "#" },
            { label: "Headers", href: "#" },
            { label: "Widgets", href: "#" },
            { label: "Empty States", href: "#" },
          ],
        },
        {
          title: "Coming Soon",
          links: [
            { label: "Drawer", href: "#" },
            { label: "Feed", href: "#" },
            { label: "Charts", href: "#" },
            { label: "Pickers", href: "#" },
            { label: "Filter", href: "#" },
            { label: "Popover", href: "#" },
            { label: "Messages", href: "#" },
          ],
        },
      ],
    },
  ],
  copyright: {
    year: "2023",
    company: "AlignUI Design System",
    disclaimer: "Not affiliated with, nor sponsored by, Figma. Built and powered by Framer and Formcarry.",
    legal: "Please note that AlignUI Design System is currently in beta, and all legal matters are governed by the laws of the State of Delaware, USA.",
  },
};

// Social Icon Components
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.133-.045.266-.085.4-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-9.02c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.428 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
  </svg>
);

interface FooterAlignuiProps {
  mode?: "light" | "dark";
  brandName?: string;
  brandTagline?: string;
  brandLogo?: React.ReactNode;
  copyrightYear?: string;
  copyrightCompany?: string;
}

export default function FooterAlignui({
  mode = "light",
  brandName = defaultFooterData.brand.name,
  brandTagline = defaultFooterData.brand.tagline,
  brandLogo = defaultFooterData.brand.logo,
  copyrightYear = defaultFooterData.copyright.year,
  copyrightCompany = defaultFooterData.copyright.company,
}: FooterAlignuiProps) {
  const colors = COLORS[mode];

  const socialIcons = [
    { Icon: XIcon, label: "X (Twitter)", href: "#" },
    { Icon: YouTubeIcon, label: "YouTube", href: "#" },
    { Icon: FacebookIcon, label: "Facebook", href: "#" },
    { Icon: DribbbleIcon, label: "Dribbble", href: "#" },
  ];

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
        >
          {/* Brand */}
          <div className="flex items-start gap-3">
            <div style={{ color: colors.titleText }}>{brandLogo}</div>
            <div>
              <h3
                className="text-sm font-semibold"
                style={{ color: colors.titleText }}
              >
                {brandName}
              </h3>
              <p
                className="mt-0.5 text-sm"
                style={{ color: colors.linkText }}
              >
                {brandTagline}
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-70"
                style={{ backgroundColor: colors.socialButtonBg, color: colors.titleText }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="my-10 h-px w-full"
          style={{ backgroundColor: colors.divider }}
        />

        {/* Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5"
        >
          {defaultFooterData.columns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-10">
              {column.sections.map((section, secIdx) => (
                <div key={secIdx}>
                  <h4
                    className="text-sm font-semibold"
                    style={{ color: colors.titleText }}
                  >
                    {section.title}
                  </h4>
                  {/* Section divider */}
                  <div
                    className="mb-4 mt-3 h-px w-16"
                    style={{ backgroundColor: colors.divider }}
                  />
                  <ul className="space-y-2.5">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href={link.href}
                          className="text-sm transition-colors hover:opacity-70"
                          style={{ color: colors.linkText }}
                        >
                          {link.label}
                          {link.isSoon && (
                            <span style={{ color: colors.mutedText }}> (Soon)</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          className="my-10 h-px w-full"
          style={{ backgroundColor: colors.divider }}
        />

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p
            className="text-sm"
            style={{ color: colors.linkText }}
          >
            &copy; {copyrightYear} {copyrightCompany}. All rights reserved.
          </p>
          <p
            className="mt-2 text-xs"
            style={{ color: colors.mutedText }}
          >
            {defaultFooterData.copyright.disclaimer}
          </p>
          <p
            className="mt-1 text-xs"
            style={{ color: colors.mutedText }}
          >
            {defaultFooterData.copyright.legal}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
