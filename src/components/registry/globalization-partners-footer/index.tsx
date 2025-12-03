"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    logoAccent: "#00A69C",
    logoAccentSecondary: "#6DC9B0",
    categoryTitle: "#6B7280",
    linkText: "#1F2937",
    linkHover: "#00A69C",
    borderColor: "#E5E7EB",
    socialIcon: "#1F2937",
    socialIconHover: "#00A69C",
  },
  dark: {
    background: "#111827",
    logoAccent: "#00A69C",
    logoAccentSecondary: "#6DC9B0",
    categoryTitle: "#9CA3AF",
    linkText: "#D1D5DB",
    linkHover: "#00A69C",
    borderColor: "#374151",
    socialIcon: "#D1D5DB",
    socialIconHover: "#00A69C",
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
import { ChevronDown, Mail } from "lucide-react";
import { useState } from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface GlobalizationPartnersFooterProps {
  mode?: "light" | "dark";
  languages?: string[];
  defaultLanguage?: string;
  phoneNumber?: string;
  solutionsLinks?: FooterLink[];
  productsLinks?: FooterLink[];
  globalGuidanceLinks?: FooterLink[];
  forTeamsLinks?: FooterLink[];
  forCompaniesLinks?: FooterLink[];
  customersLinks?: FooterLink[];
  companyLinks?: FooterLink[];
  partnersLinks?: FooterLink[];
  resourcesLinks?: FooterLink[];
}

const defaultSolutionsLinks: FooterLink[] = [
  { label: "Our Solutions", href: "#" },
  { label: "Expand Globally", href: "#" },
  { label: "Assure Compliance", href: "#" },
  { label: "Manage Global Teams", href: "#" },
  { label: "Unlock Global Insights", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "Security & Compliance", href: "#" },
  { label: "Developers Portal", href: "#" },
];

const defaultProductsLinks: FooterLink[] = [
  { label: "G-P Meridian Suite\u2122", href: "#" },
  { label: "G-P Meridian Core\u2122", href: "#" },
  { label: "G-P Meridian Prime\u2122", href: "#" },
  { label: "G-P Meridian Contractor\u2122", href: "#" },
  { label: "G-P Meridian Recruit\u2122", href: "#" },
  { label: "G-P Meridian Advisor\u2122", href: "#" },
  { label: "G-P Meridian Entity\u2122", href: "#" },
  { label: "G-P Meridian IQ\u2122", href: "#" },
  { label: "G-P Meridian Library\u2122", href: "#" },
  { label: "G-P Meridian Marketplace\u2122", href: "#" },
  { label: "G-P Meridian Pay\u2122", href: "#" },
  { label: "G-P Meridian Mobility\u2122", href: "#" },
  { label: "G-P Meridian Vision\u2122", href: "#" },
];

const defaultGlobalGuidanceLinks: FooterLink[] = [
  { label: "Globalpedia", href: "#" },
];

const defaultForTeamsLinks: FooterLink[] = [
  { label: "HR Teams", href: "#" },
  { label: "Legal Teams", href: "#" },
  { label: "Finance Teams", href: "#" },
  { label: "IT Teams", href: "#" },
  { label: "Leadership Teams", href: "#" },
];

const defaultForCompaniesLinks: FooterLink[] = [
  { label: "Startups", href: "#" },
  { label: "Mid-market", href: "#" },
  { label: "Enterprise", href: "#" },
];

const defaultCustomersLinks: FooterLink[] = [
  { label: "Customer Stories", href: "#" },
  { label: "Advocacy Program", href: "#" },
];

const defaultCompanyLinks: FooterLink[] = [
  { label: "About G-P", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Newsroom", href: "#" },
  { label: "Sitemap", href: "#" },
];

const defaultPartnersLinks: FooterLink[] = [
  { label: "Partners", href: "#" },
  { label: "Become a Partner", href: "#" },
  { label: "Partner Portal", href: "#" },
];

const defaultResourcesLinks: FooterLink[] = [
  { label: "Pangeo", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Events", href: "#" },
  { label: "Podcasts", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Webinars", href: "#" },
  { label: "eBooks", href: "#" },
];

// G-P Logo Component
function GPLogo({ colors }: { colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"] }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.logoAccent} />
            <stop offset="100%" stopColor={colors.logoAccentSecondary} />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="url(#gpGradient)" />
        <circle cx="20" cy="20" r="14" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="20" cy="20" r="10" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="20" cy="20" r="6" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
        <circle cx="20" cy="20" r="2" fill="white" fillOpacity="0.5" />
      </svg>
      <span className="text-2xl font-bold" style={{ color: colors.linkText }}>
        G-P
      </span>
    </div>
  );
}

// Social Icons
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function GlobalizationPartnersFooter({
  mode = "light",
  languages = ["English", "Deutsch", "Espanol", "Francais", "Italiano", "Portugues", "Japanese", "Korean", "Chinese"],
  defaultLanguage = "English",
  phoneNumber = "+1 (888)-855-5328",
  solutionsLinks = defaultSolutionsLinks,
  productsLinks = defaultProductsLinks,
  globalGuidanceLinks = defaultGlobalGuidanceLinks,
  forTeamsLinks = defaultForTeamsLinks,
  forCompaniesLinks = defaultForCompaniesLinks,
  customersLinks = defaultCustomersLinks,
  companyLinks = defaultCompanyLinks,
  partnersLinks = defaultPartnersLinks,
  resourcesLinks = defaultResourcesLinks,
}: GlobalizationPartnersFooterProps) {
  const colors = COLORS[mode];
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

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

  const socialIcons = [
    { Icon: Mail, label: "Email" },
    { Icon: FacebookIcon, label: "Facebook" },
    { Icon: LinkedInIcon, label: "LinkedIn" },
    { Icon: YouTubeIcon, label: "YouTube" },
    { Icon: InstagramIcon, label: "Instagram" },
    { Icon: XIcon, label: "X" },
  ];

  return (
    <footer
      className="relative w-full py-12 lg:py-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Column */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"
          >
            <GPLogo colors={colors} />

            {/* Language Selector */}
            <div className="relative mt-6">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex w-32 items-center justify-between gap-2 rounded border px-3 py-2 text-sm transition-colors"
                style={{
                  color: colors.linkText,
                  borderColor: colors.borderColor,
                  backgroundColor: mode === "light" ? "#FFFFFF" : "#1F2937",
                }}
              >
                {selectedLanguage}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isLanguageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full z-10 mt-1 w-32 rounded border py-1 shadow-lg"
                  style={{
                    backgroundColor: mode === "light" ? "#FFFFFF" : "#1F2937",
                    borderColor: colors.borderColor,
                  }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full px-3 py-1.5 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                      style={{ color: colors.linkText }}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-4">
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: colors.linkText }}
                >
                  Talk to an expert:
                </p>
                <a
                  href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
                  className="text-sm transition-colors"
                  style={{ color: colors.linkText }}
                >
                  {phoneNumber}
                </a>
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: colors.linkText }}
                >
                  Support:
                </p>
                <a
                  href="#"
                  className="text-sm transition-colors hover:underline"
                  style={{ color: colors.linkText }}
                >
                  Contact us
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialIcons.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="transition-colors"
                  style={{ color: colors.socialIcon }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.socialIconHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.socialIcon)
                  }
                >
                  {typeof Icon === "function" && Icon.toString().includes("svg") ? (
                    <Icon />
                  ) : (
                    <Icon size={20} />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-1 xl:col-span-2"
          >
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.categoryTitle }}
            >
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: colors.linkText }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.linkHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.linkText)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Column */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-1 xl:col-span-2"
          >
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.categoryTitle }}
            >
              Products
            </h3>
            <ul className="space-y-2.5">
              {productsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: colors.linkText }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.linkHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.linkText)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Global Guidance / For Teams / For Companies / Customers Column */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-1 xl:col-span-2"
          >
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.categoryTitle }}
            >
              Global Guidance
            </h3>
            <ul className="space-y-2.5">
              {globalGuidanceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: colors.linkText }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.linkHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.linkText)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3
              className="mb-4 mt-6 text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.categoryTitle }}
            >
              For Teams
            </h3>
            <ul className="space-y-2.5">
              {forTeamsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: colors.linkText }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.linkHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.linkText)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3
              className="mb-4 mt-6 text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.categoryTitle }}
            >
              For Companies
            </h3>
            <ul className="space-y-2.5">
              {forCompaniesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: colors.linkText }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.linkHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.linkText)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3
              className="mb-4 mt-6 text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.categoryTitle }}
            >
              Customers
            </h3>
            <ul className="space-y-2.5">
              {customersLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: colors.linkText }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.linkHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.linkText)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company / Partners / Resources Column */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-1 xl:col-span-2"
          >
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.categoryTitle }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: colors.linkText }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.linkHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.linkText)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3
              className="mb-4 mt-6 text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.categoryTitle }}
            >
              Partners
            </h3>
            <ul className="space-y-2.5">
              {partnersLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: colors.linkText }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.linkHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.linkText)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3
              className="mb-4 mt-6 text-xs font-semibold uppercase tracking-wider"
              style={{ color: colors.categoryTitle }}
            >
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: colors.linkText }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.linkHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.linkText)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
