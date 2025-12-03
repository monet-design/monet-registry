"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#1E1E1E",
  bottomBackground: "#1A1A1A",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AF",
  socialButtonBg: "#3A3A3A",
  socialButtonHover: "#4A4A4A",
  borderColor: "#2A2A2A",
} as const;

/**
 * 기본 네비게이션 링크
 */
const DEFAULT_COMPANY_LINKS = [
  { label: "Portfolio", href: "#" },
  { label: "Services", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

const DEFAULT_SOLUTIONS_LINKS = [
  { label: "Real Estate", href: "#" },
  { label: "Pharma", href: "#" },
  { label: "Accounting", href: "#" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Facebook, Instagram, Dribbble } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: "linkedin" | "facebook" | "instagram" | "dribbble" | "behance";
  href: string;
  ariaLabel: string;
}

interface NutsdevFooterProps {
  logo?: React.ReactNode;
  companyName?: string;
  companyLinks?: FooterLink[];
  solutionsLinks?: FooterLink[];
  socialLinks?: SocialLink[];
  copyrightYear?: string;
  copyrightHolder?: string;
  privacyPolicyHref?: string;
}

// Behance icon component (not available in lucide-react)
function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 11C8.19 11 8.75 10.44 8.75 9.75C8.75 9.06 8.19 8.5 7.5 8.5H5V11H7.5ZM5 15.5H7.75C8.44 15.5 9 14.94 9 14.25C9 13.56 8.44 13 7.75 13H5V15.5ZM10.56 12.63C11 12.05 11.25 11.36 11.25 10.5C11.25 8.43 9.57 6.75 7.5 6.75H2.75V17.25H8C9.89 17.25 11.45 15.82 11.64 14C11.73 13.5 11.68 13 11.49 12.56C11.3 12.56 10.93 12.63 10.56 12.63ZM16.75 6.75C14.13 6.75 12 8.88 12 11.5C12 14.12 14.13 16.25 16.75 16.25C18.58 16.25 20.19 15.25 21 13.75H18.59C18.09 14.32 17.45 14.69 16.75 14.69C15.5 14.69 14.47 13.78 14.17 12.56H21.25C21.25 12.19 21.25 11.81 21.25 11.44C21.25 8.85 19.12 6.75 16.75 6.75ZM14.17 11C14.44 9.72 15.5 8.75 16.75 8.75C18 8.75 19.06 9.72 19.33 11H14.17ZM19.5 5H14V6H19.5V5Z" />
    </svg>
  );
}

function SocialIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case "linkedin":
      return <Linkedin className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "instagram":
      return <Instagram className={className} />;
    case "dribbble":
      return <Dribbble className={className} />;
    case "behance":
      return <BehanceIcon className={className} />;
    default:
      return null;
  }
}

export default function NutsdevFooter({
  logo,
  companyName = "NutsDev",
  companyLinks = DEFAULT_COMPANY_LINKS,
  solutionsLinks = DEFAULT_SOLUTIONS_LINKS,
  socialLinks = [
    { icon: "linkedin", href: "#", ariaLabel: "LinkedIn" },
    { icon: "facebook", href: "#", ariaLabel: "Facebook" },
    { icon: "instagram", href: "#", ariaLabel: "Instagram" },
    { icon: "dribbble", href: "#", ariaLabel: "Dribbble" },
    { icon: "behance", href: "#", ariaLabel: "Behance" },
  ],
  copyrightYear = "2023",
  copyrightHolder = "NutsDev",
  privacyPolicyHref = "#",
}: NutsdevFooterProps) {
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
    hidden: { opacity: 0, y: 15 },
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
      className="w-full rounded-2xl overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      <motion.div
        className="px-8 md:px-12 lg:px-16 py-10 md:py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-8">
          {/* Logo Section */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            {logo || (
              <div
                className="text-xl font-bold tracking-tight"
                style={{ color: COLORS.textPrimary }}
              >
                <span>NUTS</span>
                <br />
                <span>DE&gt;</span>
              </div>
            )}
          </motion.div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 lg:gap-24">
            {/* Company Section */}
            <motion.div variants={itemVariants}>
              <h3
                className="text-sm font-semibold mb-4"
                style={{ color: COLORS.textPrimary }}
              >
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: COLORS.textSecondary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions Section */}
            <motion.div variants={itemVariants}>
              <h3
                className="text-sm font-semibold mb-4"
                style={{ color: COLORS.textPrimary }}
              >
                Solutions
              </h3>
              <ul className="space-y-3">
                {solutionsLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: COLORS.textSecondary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links Section */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-sm font-semibold mb-4"
              style={{ color: COLORS.textPrimary }}
            >
              Follow Us
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
                  style={{
                    backgroundColor: COLORS.socialButtonBg,
                    color: COLORS.textSecondary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      COLORS.socialButtonHover;
                    e.currentTarget.style.color = COLORS.textPrimary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      COLORS.socialButtonBg;
                    e.currentTarget.style.color = COLORS.textSecondary;
                  }}
                >
                  <SocialIcon
                    icon={social.icon}
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Section with Border */}
      <motion.div
        className="px-8 md:px-12 lg:px-16 py-5"
        style={{
          backgroundColor: COLORS.bottomBackground,
          borderTop: `1px solid ${COLORS.borderColor}`,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: COLORS.textSecondary }}>
            &copy; {copyrightYear} {copyrightHolder}, All Rights Reserved
          </p>
          <a
            href={privacyPolicyHref}
            className="text-xs transition-colors hover:opacity-80"
            style={{ color: COLORS.textPrimary }}
          >
            Privacy Policy
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
