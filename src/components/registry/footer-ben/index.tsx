"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#101010",
  headingText: "#424242",
  linkText: "#FFFFFF",
  mutedText: "#898989",
  borderColor: "#2A2A2A",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Twitter } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterBenProps {
  logoText?: string;
  certificationText?: string;
  columns?: FooterColumn[];
  copyrightText?: string;
  legalText?: string;
  readMoreText?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Ben card", href: "#" },
      { label: "Self serve benefits", href: "#" },
      { label: "Automation & integrations", href: "#" },
      { label: "Insights & reporting", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Benefits benchmarking", href: "#" },
      { label: "Benefits calculator", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Customer stories", href: "#" },
      { label: "Ben's blog", href: "#" },
      { label: "All resources", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Brandbook", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help centre", href: "#" },
      { label: "Legal", href: "#" },
    ],
  },
];

const defaultLegalText = `Ben is the trading name of Thanks Ben Ltd, a company registered in England and Wales (No. 12335850) with registered office at 9th Floor 107 Cheapside, London, United Kingdom, EC2V 6DN. Thanks Ben Ltd. is an appointed representative of Stubben Edge (Risk) Limited (FRN: 943286) which is authorised and regulated by the Financial Conduct Authority("FCA"). Stubben Edge (Risk) Limited (No 09073942) is registered in England and Wales. For programmes operating in the United Kingdom, the Payment Account and Mastercard cards are issued by Paynetics UK, Company number 1248133, (via Paystratus Group Ltd, a Technical Provider of Paynetics UK). Paynetics UK is a wholly owned subsidiary of Paynetics AD with its registered address at 1st Floor, 19 Devonshire Row, London, England, EC2M 4RH. Paynetics UK is an electronic money institution authorised and regulated by the Financial Conduct Authority (firm reference number 942777) for the issuance of e-money and provision of payment services in the UK. For`;

// Eye logo SVG component
function EyeLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 6C6 6 1 16 1 16C1 16 6 26 16 26C26 26 31 16 31 16C31 16 26 6 16 6Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="5" fill="white" />
    </svg>
  );
}

export default function FooterBen({
  logoText = "Ben",
  certificationText = "ISO/IEC CERTIFIED",
  columns = defaultColumns,
  copyrightText = "© 2023 Thanks Ben LTD",
  legalText = defaultLegalText,
  readMoreText = "Read more",
  linkedinUrl = "#",
  twitterUrl = "#",
}: FooterBenProps) {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8">
          {/* Left Section - Logo and Certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <EyeLogo className="h-8 w-8" />
              <span
                className="text-2xl font-semibold"
                style={{ color: COLORS.linkText }}
              >
                {logoText}
              </span>
            </div>

            {/* Certification Badge */}
            <div
              className="inline-flex items-center px-3 py-1.5 rounded border text-xs font-medium tracking-wide w-fit"
              style={{
                borderColor: COLORS.mutedText,
                color: COLORS.mutedText,
              }}
            >
              {certificationText}
            </div>
          </motion.div>

          {/* Right Section - Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
                className="flex flex-col gap-4"
              >
                <h3
                  className="text-sm font-medium"
                  style={{ color: COLORS.headingText }}
                >
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-opacity hover:opacity-70"
                        style={{ color: COLORS.linkText }}
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

        {/* Divider and Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8"
          style={{ borderTop: `1px solid ${COLORS.borderColor}` }}
        >
          {/* Copyright and Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <p
              className="text-sm"
              style={{ color: COLORS.mutedText }}
            >
              {copyrightText}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={linkedinUrl}
                className="transition-opacity hover:opacity-70"
                aria-label="LinkedIn"
              >
                <Linkedin
                  className="h-5 w-5"
                  style={{ color: COLORS.linkText }}
                />
              </a>
              <a
                href={twitterUrl}
                className="transition-opacity hover:opacity-70"
                aria-label="Twitter"
              >
                <Twitter
                  className="h-5 w-5"
                  style={{ color: COLORS.linkText }}
                />
              </a>
            </div>
          </div>

          {/* Legal Text */}
          <div className="space-y-4">
            <p
              className="text-xs leading-relaxed"
              style={{ color: COLORS.mutedText }}
            >
              {legalText}
            </p>
            <a
              href="#"
              className="text-xs underline transition-opacity hover:opacity-70"
              style={{ color: COLORS.mutedText }}
            >
              {readMoreText}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
