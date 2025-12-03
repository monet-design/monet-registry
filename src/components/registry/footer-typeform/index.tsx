"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#191919",
  headingText: "#FFFFFF",
  linkText: "#FFFFFF",
  linkHover: "#CCCCCC",
  mutedText: "#9A9A9A",
  borderColor: "#333333",
  iconBg: "transparent",
  iconBorder: "#666666",
} as const;

/**
 * Footer 링크 데이터
 */
const PRODUCT_LINKS = [
  { label: "Pricing", href: "#" },
  { label: "Enterprise", href: "#", hasDropdown: true },
  { label: "Lead generation", href: "#" },
  { label: "videoask", href: "#", icon: "videoask" },
];

const TEMPLATES_LINKS = [
  { label: "Popular templates", href: "#", hasDropdown: true },
  { label: "Recent templates", href: "#", hasDropdown: true },
  { label: "Popular categories", href: "#", hasDropdown: true },
  { label: "Recent categories", href: "#", hasDropdown: true },
];

const INTEGRATIONS_LINKS = [
  { label: "Popular integration apps", href: "#", hasDropdown: true },
  { label: "More integration apps", href: "#", hasDropdown: true },
  { label: "Popular app categories", href: "#", hasDropdown: true },
  { label: "More app categories", href: "#", hasDropdown: true },
];

const RESOURCES_LINKS = [
  { label: "Blog", href: "#" },
  { label: "Help center", href: "#" },
  { label: "Community", href: "#" },
  { label: "Tutorials", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Affiliates", href: "#", hasDropdown: true },
  { label: "Tech partners", href: "#" },
  { label: "System status", href: "#" },
  { label: "Developers / API", href: "#" },
];

const GET_TO_KNOW_US_LINKS = [
  { label: "About us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "News", href: "#" },
  { label: "Terms & conditions", href: "#", hasDropdown: true },
  { label: "Typeform (es)", href: "#" },
  { label: "Newsletter", href: "#" },
];

const SOCIAL_LINKS = [
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "LinkedIn", href: "#" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown, Globe, MapPin } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  icon?: string;
}

interface FooterTypeformProps {
  companyName?: string;
  location?: string;
  language?: string;
  productLinks?: FooterLink[];
  templatesLinks?: FooterLink[];
  integrationsLinks?: FooterLink[];
  resourcesLinks?: FooterLink[];
  getToKnowUsLinks?: FooterLink[];
}

// VideoAsk Icon Component
function VideoAskIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2"
    >
      <rect width="24" height="24" rx="6" fill="#5E5ADB" />
      <path
        d="M7 8.5C7 7.67 7.67 7 8.5 7H12.5C13.33 7 14 7.67 14 8.5V15.5C14 16.33 13.33 17 12.5 17H8.5C7.67 17 7 16.33 7 15.5V8.5Z"
        fill="white"
      />
      <path d="M15 10L18 8V16L15 14V10Z" fill="white" />
    </svg>
  );
}

// Social Icons
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3
        className="text-xs font-semibold tracking-wider uppercase"
        style={{ color: COLORS.headingText }}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              className="group flex items-center text-sm transition-colors duration-200 hover:opacity-70"
              style={{ color: COLORS.linkText }}
            >
              {link.icon === "videoask" && <VideoAskIcon />}
              <span>{link.label}</span>
              {link.hasDropdown && (
                <ChevronDown className="ml-1 h-3 w-3 opacity-70" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterTypeform({
  companyName = "Typeform",
  location = "With love, from Barcelona",
  language = "English",
  productLinks = PRODUCT_LINKS,
  templatesLinks = TEMPLATES_LINKS,
  integrationsLinks = INTEGRATIONS_LINKS,
  resourcesLinks = RESOURCES_LINKS,
  getToKnowUsLinks = GET_TO_KNOW_US_LINKS,
}: FooterTypeformProps) {
  const socialIcons = [
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    YouTubeIcon,
    LinkedInIcon,
  ];

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* PRODUCT Column */}
          <FooterColumn title="PRODUCT" links={productLinks} />

          {/* TEMPLATES Column */}
          <FooterColumn title="TEMPLATES" links={templatesLinks} />

          {/* INTEGRATIONS Column */}
          <FooterColumn title="INTEGRATIONS" links={integrationsLinks} />

          {/* RESOURCES Column */}
          <FooterColumn title="RESOURCES" links={resourcesLinks} />

          {/* GET TO KNOW US Column */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-xs font-semibold tracking-wider uppercase"
              style={{ color: COLORS.headingText }}
            >
              GET TO KNOW US
            </h3>
            <ul className="flex flex-col gap-3">
              {getToKnowUsLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm transition-colors duration-200 hover:opacity-70"
                    style={{ color: COLORS.linkText }}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown className="ml-1 h-3 w-3 opacity-70" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="mt-4 flex gap-2">
              {SOCIAL_LINKS.map((social, idx) => {
                const IconComponent = socialIcons[idx];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-200 hover:bg-white/10"
                    style={{
                      borderColor: COLORS.iconBorder,
                      color: COLORS.linkText,
                    }}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: COLORS.borderColor }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          {/* Left - Location */}
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: COLORS.mutedText }}
          >
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>

          {/* Center - Language Selector */}
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: COLORS.mutedText }}
          >
            <Globe className="h-4 w-4" />
            <span>{language}</span>
            <ChevronDown className="h-3 w-3" />
          </div>

          {/* Center - Cookie Settings */}
          <div
            className="flex items-center gap-4 text-sm"
            style={{ color: COLORS.mutedText }}
          >
            <a href="#" className="hover:underline">
              Cookie Settings
            </a>
            <span>-</span>
            <a href="#" className="underline hover:no-underline">
              Check our Cookie Policy to delete cookies
            </a>
          </div>

          {/* Right - Copyright */}
          <div
            className="text-sm"
            style={{ color: COLORS.mutedText }}
          >
            &copy; {companyName}
          </div>
        </div>
      </div>
    </footer>
  );
}
