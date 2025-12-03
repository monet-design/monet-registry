"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#000000",
  text: "#999999",
  textHover: "#ffffff",
  logoStroke: "#333333",
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
  links: FooterLink[];
}

interface FooterCapeProps {
  companyName?: string;
  columns?: FooterColumn[];
  location?: string;
  email?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    links: [
      { label: "About", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Research & Design", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
  {
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
];

export default function FooterCape({
  companyName = "cape",
  columns = defaultColumns,
  location = "Washington, DC",
  email = "info@cape.co",
}: FooterCapeProps) {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Top Navigation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-between gap-8 lg:gap-16"
        >
          {/* Left Columns */}
          <div className="flex flex-wrap gap-16 lg:gap-24">
            {columns.map((column, colIndex) => (
              <nav key={colIndex} className="flex flex-col gap-3">
                {column.links.map((link, linkIndex) => (
                  <motion.a
                    key={linkIndex}
                    href={link.href}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * linkIndex }}
                    className="text-sm font-normal transition-colors duration-200"
                    style={{ color: COLORS.text }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = COLORS.textHover;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = COLORS.text;
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            ))}
          </div>

          {/* Right Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 text-right"
          >
            <span
              className="text-sm font-normal"
              style={{ color: COLORS.text }}
            >
              {location}
            </span>
            <a
              href={`mailto:${email}`}
              className="text-sm font-normal transition-colors duration-200"
              style={{ color: COLORS.text }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = COLORS.textHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = COLORS.text;
              }}
            >
              {email}
            </a>
          </motion.div>
        </motion.div>

        {/* Large Outline Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <svg
            viewBox="0 0 800 200"
            className="w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="none"
              stroke={COLORS.logoStroke}
              strokeWidth="1"
              fontSize="200"
              fontFamily="Inter, system-ui, sans-serif"
              fontWeight="700"
              letterSpacing="-0.02em"
            >
              {companyName}
            </text>
          </svg>
        </motion.div>
      </div>
    </footer>
  );
}
