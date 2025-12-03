"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#2d3e50",
    categoryTitle: "#FFFFFF",
    linkText: "#FFFFFF",
    linkHover: "#D1D5DB",
    borderColor: "rgba(255, 255, 255, 0.2)",
    copyrightText: "#9CA3AF",
    socialIcon: "#FFFFFF",
    legalLink: "#FFFFFF",
    divider: "#9CA3AF",
  },
  dark: {
    background: "#2d3e50",
    categoryTitle: "#FFFFFF",
    linkText: "#FFFFFF",
    linkHover: "#D1D5DB",
    borderColor: "rgba(255, 255, 255, 0.2)",
    copyrightText: "#9CA3AF",
    socialIcon: "#FFFFFF",
    legalLink: "#FFFFFF",
    divider: "#9CA3AF",
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
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

// Custom X (Twitter) icon
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Medium icon
const MediumIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

// Custom TikTok icon
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

// HubSpot logo component
const HubSpotLogo = () => (
  <svg
    width="120"
    height="34"
    viewBox="0 0 512 144"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M71.35 45.88v23.83h-28.7V45.88H29.83v62.53h12.82V80.38h28.7v28.03h12.82V45.88H71.35zM122.46 65.23c-5.41 0-9.64 1.35-13.31 4.4v-3.39h-11.58v42.17h11.58V83.77c0-6.49 4.62-8.64 9.22-8.64 4.72 0 8.5 2.42 8.5 8.32v24.96h11.5V81.19c0-10.92-7.15-15.96-15.91-15.96zM174.73 95.41c-1.41 2.03-4.44 4.44-9.13 4.44-6.09 0-10.58-4.72-10.58-11.81 0-6.77 4.49-11.49 10.58-11.49 4.76 0 7.64 2.29 9.13 4.36l9.07-6.4c-4.12-5.62-10.27-9.28-18.2-9.28-12.87 0-22.45 9.54-22.45 22.81 0 13.6 9.58 23.13 22.45 23.13 7.89 0 14.08-3.82 18.2-9.44l-9.07-6.32zM231.21 78.75c-1.48-8.14-8.09-13.52-16.56-13.52-12.83 0-21.89 9.7-21.89 22.81 0 13.28 9.06 23.13 21.89 23.13 8.51 0 15.08-5.5 16.56-13.6l-10.84-1.54c-1.02 3.74-3.28 5.46-5.72 5.46-4.48 0-9.4-3.95-9.4-13.45 0-9.21 4.92-13.13 9.4-13.13 2.44 0 4.7 1.64 5.72 5.38l10.84-1.54z" />
    <path d="M257.85 84.67c2.15-.33 3.2-1.96 3.53-3.77.46-2.64.14-5.82-2.07-8.42-3.28-3.86-8.89-7.01-18.04-7.01-13.32 0-21.43 7.63-21.43 19.6 0 12.42 8.38 19.6 22.08 19.6 11.29 0 18.16-5.54 18.16-5.54l-4.8-7.78s-5.32 4.64-12.64 4.64c-6.49 0-10.44-3.33-10.44-9.4h25.65v-1.92zm-25.65-4.16c.54-5.11 4.32-7.27 8.38-7.27 4.17 0 7.64 2.66 7.68 7.27h-16.06z" />
    <path d="M281.99 45.88h-11.62v62.53h11.62V45.88zM316.27 45.88h-11.62v62.53h11.62V45.88zM350.47 65.47c-12.92 0-22.08 9.62-22.08 22.57 0 13.07 9.16 22.65 22.08 22.65 12.88 0 22.04-9.58 22.04-22.65 0-12.95-9.16-22.57-22.04-22.57zm0 35.14c-6.49 0-10.21-5.39-10.21-12.57 0-7.14 3.72-12.49 10.21-12.49 6.45 0 10.17 5.35 10.17 12.49 0 7.18-3.72 12.57-10.17 12.57z" />
    <path d="M437.01 66.24h-11.62v11.7h-6.05v9.22h6.05v13.68c0 9.75 5.78 12.37 15.17 12.37h4.33v-9.67h-2.32c-3.2 0-5.56-.8-5.56-4.44V87.16h7.88v-9.22h-7.88V66.24z" />
    <path d="M402.11 103.03l-3.88-5.05s-3.33 2.5-6.82 2.5c-5.58 0-8.83-4.36-8.83-12.48 0-8.01 3.28-12.45 8.83-12.45 3.49 0 6.82 2.42 6.82 2.42l3.88-4.85c-2.6-2.67-6.41-4.6-10.7-4.6-10.67 0-19.74 7.93-19.74 19.48 0 11.66 9.07 19.56 19.74 19.56 4.22 0 8.1-1.93 10.7-4.53z" />
    <path d="M466.51 97.66c-4.57 0-6.21-3.17-6.21-7.31V45.88h-11.66v46.1c0 11.93 5.43 16.61 14.16 16.61 8.09 0 12.13-4.89 12.13-4.89l-3.45-8.26s-2.17 2.22-4.97 2.22z" />
    <path d="M497.38 65.23c-5.85 0-10.5 2.19-13.37 5.66l-.87-4.65h-10.34v42.17h11.62V83.77c0-6.49 4.16-8.64 8.76-8.64 3.28 0 5.66 1.54 5.66 1.54l3.42-10.14s-2.56-1.3-4.88-1.3z" />
    <circle cx="417.51" cy="46.38" r="7" />
  </svg>
);

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface LegalLink {
  label: string;
  href: string;
}

interface SocialLink {
  platform: "facebook" | "instagram" | "youtube" | "x" | "linkedin" | "medium" | "tiktok";
  href: string;
}

interface FooterHubspotProps {
  mode?: "light" | "dark";
  linkGroups?: FooterLinkGroup[];
  socialLinks?: SocialLink[];
  legalLinks?: LegalLink[];
  copyrightText?: string;
  companyName?: string;
}

const defaultLinkGroups: FooterLinkGroup[] = [
  {
    title: "Popular Features",
    links: [
      { label: "All Products and Features", href: "#" },
      { label: "Free Meeting Scheduler App", href: "#" },
      { label: "HubSpot AI Tools", href: "#" },
      { label: "Email Tracking Software", href: "#" },
      { label: "AI Content Writer", href: "#" },
      { label: "AI Website Generator", href: "#" },
      { label: "Email Marketing Software", href: "#" },
      { label: "Lead Management Software", href: "#" },
      { label: "AI Email Writer", href: "#" },
    ],
  },
  {
    title: "",
    links: [
      { label: "Free Website Builder", href: "#" },
      { label: "Sales Email Templates", href: "#" },
      { label: "Free Online Form Builder", href: "#" },
      { label: "Free Chatbot Builder", href: "#" },
      { label: "Free Live Chat Software", href: "#" },
      { label: "Marketing Analytics", href: "#" },
      { label: "Free Landing Page Builder", href: "#" },
      { label: "Free Web Hosting", href: "#" },
    ],
  },
  {
    title: "Free Tools",
    links: [
      { label: "See All Free Business Tools", href: "#" },
      { label: "Clip Creator", href: "#" },
      { label: "Website Grader", href: "#" },
      { label: "Make My Persona", href: "#" },
      { label: "Email Signature Generator", href: "#" },
      { label: "Brand Kit Generator", href: "#" },
      { label: "Blog Ideas Generator", href: "#" },
      { label: "Invoice Template Generator", href: "#" },
      { label: "Marketing Plan Generator", href: "#" },
      { label: "Free Business Templates", href: "#" },
      { label: "Guide Creator", href: "#" },
      { label: "Software Comparisons", href: "#" },
      { label: "Library", href: "#" },
      { label: "Template Marketplace", href: "#" },
      { label: "Campaign Assistant", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Management Team", href: "#" },
      { label: "Board of Directors", href: "#" },
      { label: "Investor Relations", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Customers",
    links: [
      { label: "Customer Support", href: "#" },
      { label: "Join a Local User Group", href: "#" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "All Partner Programs", href: "#" },
      { label: "Solutions Partner Program", href: "#" },
      { label: "App Partner Program", href: "#" },
      { label: "HubSpot for Startups", href: "#" },
      { label: "Affiliate Program", href: "#" },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  { platform: "facebook", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "youtube", href: "#" },
  { platform: "x", href: "#" },
  { platform: "linkedin", href: "#" },
  { platform: "medium", href: "#" },
  { platform: "tiktok", href: "#" },
];

const defaultLegalLinks: LegalLink[] = [
  { label: "Legal Stuff", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Security", href: "#" },
  { label: "Website Accessibility", href: "#" },
  { label: "Manage Cookies", href: "#" },
];

const SocialIcon = ({
  platform,
  size = 20,
}: {
  platform: SocialLink["platform"];
  size?: number;
}) => {
  switch (platform) {
    case "facebook":
      return <Facebook size={size} />;
    case "instagram":
      return <Instagram size={size} />;
    case "youtube":
      return <Youtube size={size} />;
    case "x":
      return <XIcon size={size} />;
    case "linkedin":
      return <Linkedin size={size} />;
    case "medium":
      return <MediumIcon size={size} />;
    case "tiktok":
      return <TikTokIcon size={size} />;
    default:
      return null;
  }
};

export default function FooterHubspot({
  mode = "dark",
  linkGroups = defaultLinkGroups,
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
  copyrightText = "Copyright",
  companyName = "HubSpot, Inc.",
}: FooterHubspotProps) {
  const colors = COLORS[mode];
  const currentYear = new Date().getFullYear();

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

  const columnVariants = {
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
      className="relative w-full py-10 px-6 lg:px-12"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Link Columns */}
        <motion.div
          className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {linkGroups.map((group, idx) => (
            <motion.div key={idx} variants={columnVariants} className="col-span-1">
              {group.title && (
                <h3
                  className="mb-4 text-sm font-semibold tracking-wide"
                  style={{ color: colors.categoryTitle }}
                >
                  {group.title}
                </h3>
              )}
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:opacity-70"
                      style={{ color: colors.linkText }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mt-12 mb-6 h-px w-full"
          style={{ backgroundColor: colors.borderColor }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Social Icons */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              className="transition-opacity duration-200 hover:opacity-70"
              style={{ color: colors.socialIcon }}
              aria-label={social.platform}
            >
              <SocialIcon platform={social.platform} size={22} />
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mb-6 h-px w-full"
          style={{ backgroundColor: colors.borderColor }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Logo and Copyright */}
        <motion.div
          className="flex flex-col items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{ color: colors.categoryTitle }}>
            <HubSpotLogo />
          </div>
          <p
            className="text-sm"
            style={{ color: colors.copyrightText }}
          >
            {copyrightText} &copy; {currentYear} {companyName}
          </p>
        </motion.div>

        {/* Legal Links */}
        <motion.div
          className="mt-4 flex flex-wrap items-center justify-center gap-x-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {legalLinks.map((link, idx) => (
            <div key={link.label} className="flex items-center">
              <a
                href={link.href}
                className="text-sm font-medium transition-opacity duration-200 hover:opacity-70"
                style={{ color: colors.legalLink }}
              >
                {link.label}
              </a>
              {idx < legalLinks.length - 1 && (
                <span
                  className="mx-2 text-sm"
                  style={{ color: colors.divider }}
                >
                  |
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
