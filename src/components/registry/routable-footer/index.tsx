"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0D1321",
  backgroundGlow: "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(91, 110, 247, 0.15) 0%, transparent 70%)",
  accent: "#5B6EF7",
  accentHover: "#6E7FF8",
  textWhite: "#FFFFFF",
  textMuted: "#8A8A9A",
  textLegal: "#6B6B7B",
  divider: "#3A3A4A",
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

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface RoutableFooterProps {
  tagline?: {
    prefix: string;
    italic: string;
    suffix: string;
  };
  ctaButtonText?: string;
  ctaButtonHref?: string;
  logoText?: string;
  logoHref?: string;
  columns?: FooterLinkGroup[];
  copyright?: string;
  legalDisclaimer?: string;
}

const defaultColumns: FooterLinkGroup[] = [
  {
    title: "Products",
    links: [
      { label: "AP Automation", href: "#" },
      { label: "Payments", href: "#" },
      { label: "Vendor Management", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Security", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Invoice Capture & OCR", href: "#" },
      { label: "Approval Workflows", href: "#" },
      { label: "PO Matching", href: "#" },
      { label: "Payment Reconciliation", href: "#" },
      { label: "Role-Based Access Control", href: "#" },
      { label: "Compliance", href: "#" },
      { label: "Mass Payments", href: "#" },
      { label: "International Payments", href: "#" },
      { label: "CSV Payments", href: "#" },
      { label: "Payments API", href: "#" },
      { label: "Vendor Onboarding", href: "#" },
      { label: "Tax Management", href: "#" },
      { label: "Vendor Compliance Checks", href: "#" },
      { label: "Accounts Receivable", href: "#" },
    ],
  },
  {
    title: "Solutions by Industry",
    links: [
      { label: "Marketplaces", href: "#" },
      { label: "Gig Economy", href: "#" },
      { label: "Insurance", href: "#" },
      { label: "Real Estate", href: "#" },
      { label: "Logistics", href: "#" },
      { label: "Manufacturing", href: "#" },
      { label: "Nonprofit", href: "#" },
    ],
  },
];

const defaultColumns2: FooterLinkGroup[] = [
  {
    title: "Solutions by Team",
    links: [
      { label: "Controllers", href: "#" },
      { label: "Accountants", href: "#" },
      { label: "CFO's", href: "#" },
      { label: "Developers", href: "#" },
    ],
  },
];

const defaultColumns3: FooterLinkGroup[] = [
  {
    title: "Resources",
    links: [
      { label: "All resources", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Guides & Research Reports", href: "#" },
      { label: "Videos & Webinars", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Guides", href: "#" },
      { label: "Recipes", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Developer Changelog", href: "#" },
    ],
  },
];

const defaultColumns4: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs. Bill.com", href: "#" },
      { label: "vs. Tipalti", href: "#" },
      { label: "vs. Melio", href: "#" },
      { label: "vs. Hyperwallet", href: "#" },
      { label: "vs. PayPal", href: "#" },
      { label: "vs. Payment Processors", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Data Processing Addendum", href: "#" },
      { label: "Sub-Processors", href: "#" },
      { label: "Your Privacy Choices", href: "#" },
      { label: "System Status", href: "#" },
      { label: "Security Practices", href: "#" },
    ],
  },
];

const defaultLegalDisclaimer = `Routable family of trademarks are owned by Routable Inc. All other trademarks appearing on this website are the property of their respective owners.

By clicking on some of the links on our website, you will leave the Routable website and be directed to an external website. The privacy policies of the external website may differ from our privacy policies. Please review the privacy polices and security indicators displayed on the external websites.

We, and our third party partners, automatically collect certain types of usage information when you visit our Sites, read our emails, or otherwise engage with us. We typically collect this information through a variety of tracking technologies, including cookies, Flash objects, web beacons, file information and similar technology (collectively, "tracking technologies").

Routable is a financial technology company. Banking services for the Routable Balance are provided by partner banks and held for the benefit of our customers. Payment services are provided by our partners. Find a full list of our partners along with their contact information, regulatory registrations, and disclosures on our sub-processors page. Or contact Routable anytime here. Some payment services are provided by Visa, Inc. and subsidiary The Currency Cloud Limited. Registered in England No. 06323311. Registered Office: The Steward Building 1st Floor, 12 Steward Street London E1 6FQ. The Currency Cloud Limited is authorized by the Financial Conduct Authority under the Electronic Money Regulations 2011 for the issuing of electronic money (FRN: 900199). In the US Currency Cloud operates in partnership with CFSB. CFSB fully owns the bank program and services are provided by The Currency Cloud Inc.`;

export default function RoutableFooter({
  tagline = {
    prefix: "A smarter ",
    italic: "way to scale",
    suffix: "\naccounts payable",
  },
  ctaButtonText = "Request a demo",
  ctaButtonHref = "#",
  logoText = "Routable",
  logoHref = "/",
  columns = defaultColumns,
  copyright = "Copyright © Routable 2024",
  legalDisclaimer = defaultLegalDisclaimer,
}: RoutableFooterProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Background glow effect */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: COLORS.backgroundGlow }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2
            className="mb-6 text-4xl leading-tight md:text-5xl lg:text-[56px]"
            style={{ color: COLORS.textWhite }}
          >
            <span className="font-medium">{tagline.prefix}</span>
            <span className="italic">{tagline.italic}</span>
            {tagline.suffix.split("\n").map((line, i) => (
              <span key={i}>
                <br />
                <span className="italic">{line}</span>
              </span>
            ))}
          </h2>
          <a
            href={ctaButtonHref}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: COLORS.accent }}
          >
            {ctaButtonText}
          </a>
        </motion.div>

        {/* Navigation Links Section */}
        <motion.div
          className="mb-16 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Column 1 - Products */}
          <motion.div variants={itemVariants}>
            {columns.slice(0, 1).map((group) => (
              <div key={group.title}>
                <h3
                  className="mb-4 text-sm font-semibold"
                  style={{ color: COLORS.textWhite }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: COLORS.textMuted }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Column 2 - Features */}
          <motion.div variants={itemVariants}>
            {columns.slice(1, 2).map((group) => (
              <div key={group.title}>
                <h3
                  className="mb-4 text-sm font-semibold"
                  style={{ color: COLORS.textWhite }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: COLORS.textMuted }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Column 3 - Solutions by Industry + Solutions by Team */}
          <motion.div variants={itemVariants} className="space-y-8">
            {columns.slice(2, 3).map((group) => (
              <div key={group.title}>
                <h3
                  className="mb-4 text-sm font-semibold"
                  style={{ color: COLORS.textWhite }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: COLORS.textMuted }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {defaultColumns2.map((group) => (
              <div key={group.title}>
                <h3
                  className="mb-4 text-sm font-semibold"
                  style={{ color: COLORS.textWhite }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: COLORS.textMuted }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Column 4 - Resources + Developers */}
          <motion.div variants={itemVariants} className="space-y-8">
            {defaultColumns3.map((group) => (
              <div key={group.title}>
                <h3
                  className="mb-4 text-sm font-semibold"
                  style={{ color: COLORS.textWhite }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: COLORS.textMuted }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Column 5 - Company + Compare + Legal */}
          <motion.div variants={itemVariants} className="space-y-8">
            {defaultColumns4.map((group) => (
              <div key={group.title}>
                <h3
                  className="mb-4 text-sm font-semibold"
                  style={{ color: COLORS.textWhite }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: COLORS.textMuted }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Logo and Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={logoHref}
            className="text-xl font-bold"
            style={{ color: COLORS.textWhite }}
          >
            {logoText}
          </a>
          <span
            className="text-sm"
            style={{ color: COLORS.textMuted }}
          >
            {copyright}
          </span>
        </motion.div>

        {/* Dotted Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-8 h-px w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${COLORS.divider} 0, ${COLORS.divider} 4px, transparent 4px, transparent 8px)`,
          }}
        />

        {/* Legal Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p
            className="max-w-5xl text-xs leading-relaxed"
            style={{ color: COLORS.textLegal }}
          >
            {legalDisclaimer.split("\n\n").map((paragraph, i) => (
              <span key={i}>
                {paragraph}
                {i < legalDisclaimer.split("\n\n").length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
