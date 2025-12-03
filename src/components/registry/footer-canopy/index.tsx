"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0C0E12",
  categoryText: "#69686D",
  linkText: "#FFFFFF",
  socialIconBg: "#2A2B2F",
  copyrightText: "#69686D",
  pciDssBadgeBg: "#25A186",
  socBadgeBg: "#1A80C0",
} as const;

/**
 * 푸터 컬럼 데이터
 */
const DEFAULT_FOOTER_COLUMNS = [
  {
    title: "PLATFORM",
    links: [
      { label: "Canopy Lending Core", href: "#" },
      { label: "Canopy OS", href: "#" },
      { label: "Canopy Connect", href: "#" },
      { label: "DataDirect", href: "#" },
      { label: "LoanLab", href: "#" },
      { label: "Preview", href: "#" },
      { label: "SafeGuard", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "USE CASES",
    links: [
      { label: "Working Capital", href: "#" },
      { label: "Line of Credit", href: "#" },
      { label: "Cash Advances", href: "#" },
      { label: "Installment Loans", href: "#" },
      { label: "Buy Now Pay Later", href: "#" },
    ],
  },
  {
    title: "FOR TEAMS",
    links: [
      { label: "Lending Program Directors", href: "#" },
      { label: "Credit Risk", href: "#" },
      { label: "Customer Support", href: "#" },
      { label: "Data & BI", href: "#" },
      { label: "Accounting & Finance", href: "#" },
    ],
  },
  {
    title: "DEVELOPERS",
    links: [
      { label: "API Docs", href: "#" },
      { label: "System Status", href: "#" },
      { label: "Compliance", href: "#" },
      { label: "Release Notes", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Blog", href: "#" },
      { label: "Customers", href: "#" },
    ],
    secondSection: {
      title: "COMPANY",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
  },
];

const DEFAULT_SOCIAL_LINKS = [
  { icon: "linkedin", href: "#", label: "LinkedIn" },
  { icon: "webflow", href: "#", label: "Webflow" },
  { icon: "clutch", href: "#", label: "Clutch" },
  { icon: "x", href: "#", label: "X" },
];

const DEFAULT_LEGAL_LINKS = [
  { label: "Terms of use", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Cookies", href: "#" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, X } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
  secondSection?: {
    title: string;
    links: FooterLink[];
  };
}

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface FooterCanopyProps {
  companyName?: string;
  logoIcon?: React.ReactNode;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  legalLinks?: FooterLink[];
  copyrightYear?: number;
  copyrightText?: string;
  showComplianceBadges?: boolean;
}

// Social Icon Components
const LinkedInIcon = () => (
  <Linkedin className="w-4 h-4 text-white" fill="white" strokeWidth={0} />
);

const WebflowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
    <path d="M17.803 6.035l-4.063 12.03-3.947-9.043-3.947 9.043L1.783 6.035H.05L5.793 21.965l3.947-9.043 3.947 9.043L19.43 6.035h-1.627z"/>
  </svg>
);

const ClutchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" fill="white"/>
  </svg>
);

const XIcon = () => (
  <X className="w-4 h-4 text-white" />
);

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "linkedin":
      return <LinkedInIcon />;
    case "webflow":
      return <WebflowIcon />;
    case "clutch":
      return <ClutchIcon />;
    case "x":
      return <XIcon />;
    default:
      return null;
  }
};

// Canopy Logo Component
const CanopyLogo = () => (
  <svg viewBox="0 0 120 24" className="h-6" fill="white">
    <circle cx="10" cy="12" r="8" fill="white"/>
    <rect x="6" y="8" width="8" height="8" rx="1" fill="#0C0E12"/>
    <text x="26" y="17" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="white">
      Canopy
    </text>
  </svg>
);

// PCI-DSS Badge Component
const PciDssBadge = () => (
  <div
    className="w-14 h-14 rounded-full flex items-center justify-center"
    style={{ backgroundColor: COLORS.pciDssBadgeBg }}
  >
    <div className="text-center">
      <div className="text-[8px] font-bold text-white leading-tight">PCI-DSS</div>
      <div className="text-[6px] text-white/80 mt-0.5">COMPLIANT</div>
    </div>
  </div>
);

// SOC Badge Component
const SocBadge = () => (
  <div
    className="w-14 h-14 rounded-full flex items-center justify-center"
    style={{ backgroundColor: COLORS.socBadgeBg }}
  >
    <div className="text-center">
      <div className="text-[8px] font-bold text-white leading-tight">AICPA</div>
      <div className="text-[10px] font-bold text-white">SOC</div>
    </div>
  </div>
);

export default function FooterCanopy({
  companyName = "Canopy Technology Corp.",
  logoIcon,
  columns = DEFAULT_FOOTER_COLUMNS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  legalLinks = DEFAULT_LEGAL_LINKS,
  copyrightYear = 2024,
  copyrightText,
  showComplianceBadges = true,
}: FooterCanopyProps) {
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
    <footer
      className="relative w-full py-16 px-8 md:px-16"
      style={{ backgroundColor: COLORS.background }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column - Logo, Social, Badges */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            variants={itemVariants}
          >
            {/* Logo */}
            <div className="mb-6">
              {logoIcon || <CanopyLogo />}
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-md flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ backgroundColor: COLORS.socialIconBg }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>

            {/* Compliance Badges */}
            {showComplianceBadges && (
              <div className="flex gap-3 pt-4">
                <PciDssBadge />
                <SocBadge />
              </div>
            )}
          </motion.div>

          {/* Navigation Columns */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {columns.map((column, colIndex) => (
              <motion.div key={colIndex} variants={itemVariants}>
                {/* Main Section */}
                <h3
                  className="text-xs font-medium tracking-wider mb-4"
                  style={{ color: COLORS.categoryText }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:opacity-70"
                        style={{ color: COLORS.linkText }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Second Section (if exists) */}
                {column.secondSection && (
                  <div className="mt-8">
                    <h3
                      className="text-xs font-medium tracking-wider mb-4"
                      style={{ color: COLORS.categoryText }}
                    >
                      {column.secondSection.title}
                    </h3>
                    <ul className="space-y-3">
                      {column.secondSection.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-sm transition-colors hover:opacity-70"
                            style={{ color: COLORS.linkText }}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
          variants={itemVariants}
        >
          {/* Copyright */}
          <p
            className="text-sm mb-4 md:mb-0"
            style={{ color: COLORS.copyrightText }}
          >
            {copyrightText || `© ${companyName} ${copyrightYear}`}
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: COLORS.copyrightText }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
