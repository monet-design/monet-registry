"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#1E1E1E",
  ctaBackground: "#FFAB5C",
  ctaText: "#1A1A1A",
  logoText: "#F5F0E6",
  headingText: "#FFFFFF",
  linkText: "#E5E5E5",
  mutedText: "#9CA3AF",
  badgeDot: "#FF9E4F",
  buttonPrimary: "#1A1A1A",
  buttonPrimaryText: "#FFFFFF",
  buttonSecondary: "#FFFFFF",
  buttonSecondaryText: "#1A1A1A",
  checkIcon: "#1A1A1A",
} as const;

/**
 * 링크 데이터
 */
const DEFAULT_RESOURCES_LINKS = [
  { label: "Blog", href: "#" },
  { label: "Podcasts", href: "#" },
  { label: "Guides", href: "#", badge: "New" },
  { label: "Help Center", href: "#" },
];

const DEFAULT_COMPANY_LINKS = [
  { label: "Product", href: "#" },
  { label: "About", href: "#" },
  { label: "Careers", href: "#", badge: "Hiring" },
  { label: "Wall of Love", href: "#" },
];

const DEFAULT_SOCIAL_LINKS = [
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

// Social Icon Components
const TwitterIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "Twitter":
      return <TwitterIcon />;
    case "Instagram":
      return <InstagramIcon />;
    case "LinkedIn":
      return <LinkedInIcon />;
    case "YouTube":
      return <YouTubeIcon />;
    default:
      return null;
  }
};

interface LinkItem {
  label: string;
  href: string;
  badge?: string;
}

interface SocialLink {
  name: string;
  href: string;
}

interface PassionfrootFooterProps {
  logoText?: string;
  resourcesLinks?: LinkItem[];
  companyLinks?: LinkItem[];
  socialLinks?: SocialLink[];
  ctaTitle?: string;
  ctaBenefits?: string[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  description?: string;
  copyright?: string;
  legalLinks?: { label: string; href: string }[];
}

export default function PassionfrootFooter({
  logoText = "passionfroot",
  resourcesLinks = DEFAULT_RESOURCES_LINKS,
  companyLinks = DEFAULT_COMPANY_LINKS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  ctaTitle = "Make Creator Marketing a Breeze",
  ctaBenefits = [
    "Get better returns on your time & money",
    "Save 75% of your time per campaign",
  ],
  primaryButtonText = "Get access",
  primaryButtonHref = "#",
  secondaryButtonText = "Book a call",
  secondaryButtonHref = "#",
  description = "Passionfroot helps marketers to scale their go to market with content partnerships and creators to run and manage their brand partnerships in one place.",
  copyright = "2025 Passionfroot GmbH. All rights reserved.",
  legalLinks = [
    { label: "Impressum", href: "#" },
    { label: "Privacy policy", href: "#" },
  ],
}: PassionfrootFooterProps) {
  return (
    <footer
      className="relative w-full py-12 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          {/* Left Section */}
          <div className="flex-1">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="text-3xl md:text-4xl font-bold italic"
                style={{ color: COLORS.logoText }}
              >
                {logoText}
              </span>
            </motion.div>

            {/* Navigation Links */}
            <div className="mt-10 flex gap-16 md:gap-24">
              {/* Resources Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3
                  className="text-base font-semibold mb-4"
                  style={{ color: COLORS.headingText }}
                >
                  Resources
                </h3>
                <ul className="space-y-3">
                  {resourcesLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm hover:opacity-80 transition-opacity flex items-center gap-2"
                        style={{ color: COLORS.linkText }}
                      >
                        {link.label}
                        {link.badge && (
                          <span className="flex items-center gap-1 text-xs">
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: COLORS.badgeDot }}
                            />
                            <span style={{ color: COLORS.linkText }}>
                              {link.badge}
                            </span>
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3
                  className="text-base font-semibold mb-4"
                  style={{ color: COLORS.headingText }}
                >
                  Company
                </h3>
                <ul className="space-y-3">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm hover:opacity-80 transition-opacity flex items-center gap-2"
                        style={{ color: COLORS.linkText }}
                      >
                        {link.label}
                        {link.badge && (
                          <span className="flex items-center gap-1 text-xs">
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: COLORS.badgeDot }}
                            />
                            <span style={{ color: COLORS.linkText }}>
                              {link.badge}
                            </span>
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              className="mt-10 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: COLORS.mutedText }}
                  aria-label={social.name}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              className="mt-8 text-sm max-w-md leading-relaxed"
              style={{ color: COLORS.mutedText }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {description}
            </motion.p>
          </div>

          {/* Right Section - CTA Card */}
          <motion.div
            className="lg:w-[420px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: COLORS.ctaBackground }}
            >
              <h2
                className="text-3xl md:text-4xl font-serif italic leading-tight"
                style={{ color: COLORS.ctaText }}
              >
                {ctaTitle.split(" ").slice(0, 3).join(" ")}
                <br />
                {ctaTitle.split(" ").slice(3).join(" ")}
              </h2>

              {/* Benefits */}
              <ul className="mt-6 space-y-3">
                {ctaBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        backgroundColor: COLORS.checkIcon,
                      }}
                    >
                      <Check
                        size={12}
                        strokeWidth={3}
                        style={{ color: COLORS.ctaBackground }}
                      />
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: COLORS.ctaText }}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={primaryButtonHref}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:opacity-90"
                  style={{
                    backgroundColor: COLORS.buttonPrimary,
                    color: COLORS.buttonPrimaryText,
                  }}
                >
                  {primaryButtonText}
                  <ArrowRight size={16} />
                </a>
                <a
                  href={secondaryButtonHref}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all hover:opacity-90 border"
                  style={{
                    backgroundColor: COLORS.buttonSecondary,
                    color: COLORS.buttonSecondaryText,
                    borderColor: COLORS.buttonSecondaryText,
                  }}
                >
                  {secondaryButtonText}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm" style={{ color: COLORS.mutedText }}>
            &copy; {copyright}
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm hover:opacity-80 transition-opacity"
                style={{ color: COLORS.mutedText }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
