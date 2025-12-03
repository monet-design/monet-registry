"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F4F4F4",
    bottomBackground: "#FFFFFF",
    heading: "#969696",
    link: "#CCCCCC",
    linkHover: "#666666",
    logo: "#1A1A1A",
    tagline: "#595859",
    copyright: "#1A1A1A",
    border: "#E0E0E0",
  },
  dark: {
    background: "#1A1A1A",
    bottomBackground: "#0F0F0F",
    heading: "#6B6B6B",
    link: "#4A4A4A",
    linkHover: "#9A9A9A",
    logo: "#FFFFFF",
    tagline: "#A0A0A0",
    copyright: "#FFFFFF",
    border: "#2A2A2A",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterSwapCommerceProps {
  mode?: "light" | "dark";
  logoIcon?: React.ReactNode;
  tagline?: string;
  columns?: FooterColumn[];
  copyrightText?: string;
  bottomLinks?: FooterLink[];
  contactEmail?: string;
}

// Logo Icon Component - X shape arrows in circle
function SwapCommerceLogoIcon({ color = "#1A1A1A" }: { color?: string }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="28" fill={color} />
      <path
        d="M18 20L28 28L18 36"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 20L28 28L38 36"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 18L28 28L36 18"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 38L28 28L36 38"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Track", href: "#" },
      { label: "Ship", href: "#" },
      { label: "Insure", href: "#" },
      { label: "Return", href: "#" },
      { label: "Recycle", href: "#" },
      { label: "Insights", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Referrals", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Stealth", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Book a Demo", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];

const defaultBottomLinks: FooterLink[] = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function FooterSwapCommerce({
  mode = "light",
  logoIcon,
  tagline = "Retail made easy.",
  columns = defaultColumns,
  copyrightText = "2023 Swap Commerce Ltd",
  bottomLinks = defaultBottomLinks,
  contactEmail = "contact@swap-commerce.com",
}: FooterSwapCommerceProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <motion.div
        style={{ backgroundColor: colors.background }}
        className="px-8 md:px-16 lg:px-24 py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Logo and Tagline */}
            <motion.div
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <div className="mb-4">
                {logoIcon || <SwapCommerceLogoIcon color={colors.logo} />}
              </div>
              <p
                className="text-sm font-normal"
                style={{ color: colors.tagline }}
              >
                {tagline}
              </p>
            </motion.div>

            {/* Navigation Columns */}
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                className="lg:col-span-1"
                variants={itemVariants}
              >
                <h3
                  className="text-sm font-medium mb-4"
                  style={{ color: colors.heading }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: colors.link }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = colors.linkHover)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = colors.link)
                        }
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        style={{ backgroundColor: colors.bottomBackground }}
        className="px-8 md:px-16 lg:px-24 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p
              className="text-sm font-normal"
              style={{ color: colors.copyright }}
            >
              &copy; {copyrightText}
            </p>

            {/* Bottom Links and Email */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {bottomLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm underline transition-colors duration-200"
                  style={{ color: colors.copyright }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.linkHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.copyright)
                  }
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm underline transition-colors duration-200"
                style={{ color: colors.copyright }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.linkHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.copyright)
                }
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
