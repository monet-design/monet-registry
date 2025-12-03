"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#030A17",
  categoryText: "#5A6577",
  linkText: "#94A1B4",
  linkHover: "#FFFFFF",
  bottomText: "#6B7280",
  divider: "#1D2330",
} as const;

/**
 * Footer Navigation Data
 */
const FOOTER_LINKS = {
  product: {
    title: "PRODUCT",
    links: [
      { label: "Fin Overview", href: "#" },
      { label: "Capabilities", href: "#" },
      { label: "AI Engine", href: "#" },
      { label: "Fin Insights", href: "#" },
      { label: "Fin Tasks", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Intercom Suite", href: "#" },
      { label: "Fin for Zendesk", href: "#" },
      { label: "Fin for Salesforce", href: "#" },
    ],
  },
  research: {
    title: "RESEARCH",
    links: [{ label: "AI Research", href: "#" }],
  },
  resources: {
    title: "RESOURCES",
    links: [
      { label: "Customers", href: "#" },
      { label: "Ideas Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Security & safety", href: "#" },
      { label: "AI Agent Blueprint", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "Financial Services", href: "#" },
      { label: "Product Updates", href: "#" },
      { label: "Professional Services", href: "#" },
    ],
  },
  events: {
    title: "EVENTS",
    links: [
      { label: "Pioneer", href: "#" },
      { label: "Building frontier AI products", href: "#" },
      { label: "Built For You", href: "#" },
      { label: "Webinars", href: "#" },
    ],
  },
  action: {
    title: "FIN IN ACTION",
    links: [
      { label: "View demo", href: "#" },
      { label: "Free trial", href: "#" },
      { label: "Contact sales", href: "#" },
      { label: "Sign in", href: "#" },
    ],
  },
} as const;

const BOTTOM_LINKS = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Security", href: "#" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterFinAiProps {
  companyName?: string;
  companyTagline?: string;
  productLinks?: { label: string; href: string }[];
  researchLinks?: { label: string; href: string }[];
  resourcesLinks?: { label: string; href: string }[];
  eventsLinks?: { label: string; href: string }[];
  actionLinks?: { label: string; href: string }[];
  bottomLinks?: { label: string; href: string }[];
}

export default function FooterFinAi({
  companyName = "An Intercom Product",
  companyTagline,
  productLinks = [...FOOTER_LINKS.product.links],
  researchLinks = [...FOOTER_LINKS.research.links],
  resourcesLinks = [...FOOTER_LINKS.resources.links],
  eventsLinks = [...FOOTER_LINKS.events.links],
  actionLinks = [...FOOTER_LINKS.action.links],
  bottomLinks = [...BOTTOM_LINKS],
}: FooterFinAiProps) {
  const columns = [
    { title: FOOTER_LINKS.product.title, links: productLinks },
    { title: FOOTER_LINKS.research.title, links: researchLinks },
    { title: FOOTER_LINKS.resources.title, links: resourcesLinks },
    { title: FOOTER_LINKS.events.title, links: eventsLinks },
    { title: FOOTER_LINKS.action.title, links: actionLinks },
  ];

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Main Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"
        >
          {columns.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: columnIndex * 0.1 }}
            >
              <h3
                className="text-xs font-medium tracking-wider"
                style={{ color: COLORS.categoryText }}
              >
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: COLORS.linkText }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = COLORS.linkHover)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = COLORS.linkText)
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center"
          style={{ borderColor: COLORS.divider }}
        >
          {/* Company Info */}
          <p
            className="text-sm"
            style={{ color: COLORS.bottomText }}
          >
            {companyName}
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: COLORS.bottomText }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = COLORS.linkHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = COLORS.bottomText)
                }
              >
                {link.label}
              </a>
            ))}

            {/* Privacy Choices */}
            <a
              href="#"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: COLORS.bottomText }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLORS.linkHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = COLORS.bottomText)
              }
            >
              <span className="flex h-4 w-7 items-center rounded-full bg-blue-600 px-0.5">
                <span className="h-3 w-3 rounded-full bg-white" />
              </span>
              Your Privacy Choices
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
