"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  marquee: {
    background: "#C093CB",
    text: "#1A1A1A",
    buttonBg: "#1A1A1A",
    buttonText: "#FFFFFF",
    iconBg: "#C093CB",
  },
  footer: {
    background: "#2A2A2A",
    cardBg: "#2A2A2A",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
    inputBg: "#3A3A3A",
    inputBorder: "#4A4A4A",
  },
  bottomBar: {
    background: "#141414",
    text: "#6B7280",
    link: "#9CA3AF",
  },
  socialButtons: {
    youtube: "#E74C3C",
    youtubeText: "#FFFFFF",
    instagram: "#8CA18D",
    instagramText: "#1A1A1A",
    linkedin: "#9F80AA",
    linkedinText: "#1A1A1A",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Plus, ArrowUp, Check } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface OfficeLocation {
  city: string;
  address: string[];
}

interface SocialLink {
  label: string;
  href: string;
  color: string;
  textColor: string;
}

interface FooterCutTheCodeProps {
  marqueeText?: string;
  marqueeButtonText?: string;
  marqueeButtonHref?: string;
  logo?: React.ReactNode;
  newsletterTitle?: string;
  emailPlaceholder?: string;
  namePlaceholder?: string;
  privacyText?: string;
  subscribeButtonText?: string;
  columns?: FooterColumn[];
  offices?: OfficeLocation[];
  socialLinks?: SocialLink[];
  copyright?: string;
  location?: string;
  privacyStatementText?: string;
  privacyStatementHref?: string;
  builtWith?: string;
  partnerBadge?: string;
}

// Logo component
function CutTheCodeLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="16" height="16" rx="2" fill="#FFFFFF" />
      <rect x="0" y="24" width="16" height="16" rx="2" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}

// Marquee item component
function MarqueeItem({
  text,
  buttonText,
  buttonHref,
}: {
  text: string;
  buttonText: string;
  buttonHref: string;
}) {
  return (
    <div className="flex items-center gap-4 px-4">
      <a
        href={buttonHref}
        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
        style={{
          backgroundColor: COLORS.marquee.buttonBg,
          color: COLORS.marquee.buttonText,
        }}
      >
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full"
          style={{ backgroundColor: COLORS.marquee.iconBg }}
        >
          <Plus className="h-3 w-3" style={{ color: COLORS.marquee.text }} />
        </span>
        {buttonText}
      </a>
      <Plus className="h-5 w-5" style={{ color: COLORS.marquee.text }} />
      <span
        className="whitespace-nowrap text-2xl md:text-3xl font-light"
        style={{ color: COLORS.marquee.text }}
      >
        {text}
      </span>
    </div>
  );
}

// Infinite marquee component
function Marquee({
  text,
  buttonText,
  buttonHref,
}: {
  text: string;
  buttonText: string;
  buttonHref: string;
}) {
  return (
    <div
      className="overflow-hidden py-4"
      style={{ backgroundColor: COLORS.marquee.background }}
    >
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(8)].map((_, i) => (
          <MarqueeItem
            key={i}
            text={text}
            buttonText={buttonText}
            buttonHref={buttonHref}
          />
        ))}
      </motion.div>
    </div>
  );
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Design", href: "#" },
      { label: "Build", href: "#" },
      { label: "Automate", href: "#" },
      { label: "No-code", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Projects", href: "#" },
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const defaultOffices: OfficeLocation[] = [
  {
    city: "Amsterdam",
    address: ["Wibautstraat 131 D", "1091 GL Amsterdam"],
  },
  {
    city: "Zwolle",
    address: ["Burgemeester Roelenweg 11", "8021 EV Zwolle"],
  },
];

const defaultSocialLinks: SocialLink[] = [
  {
    label: "YouTube",
    href: "#",
    color: COLORS.socialButtons.youtube,
    textColor: COLORS.socialButtons.youtubeText,
  },
  {
    label: "Instagram",
    href: "#",
    color: COLORS.socialButtons.instagram,
    textColor: COLORS.socialButtons.instagramText,
  },
  {
    label: "LinkedIn",
    href: "#",
    color: COLORS.socialButtons.linkedin,
    textColor: COLORS.socialButtons.linkedinText,
  },
];

export default function FooterCutTheCode({
  marqueeText = "Ready to move faster?",
  marqueeButtonText = "Get in touch",
  marqueeButtonHref = "#contact",
  logo,
  newsletterTitle = "Want to receive no-code & news\nand updates?",
  emailPlaceholder = "E-mail",
  namePlaceholder = "Name",
  privacyText = "I agree with the privacy statement",
  subscribeButtonText = "Get the latest updates",
  columns = defaultColumns,
  offices = defaultOffices,
  socialLinks = defaultSocialLinks,
  copyright = "2023",
  location = "16:51 Amsterdam (CET)",
  privacyStatementText = "Privacy Statement",
  privacyStatementHref = "#",
  builtWith = "Built with Webflow",
  partnerBadge = "Professional Partner",
}: FooterCutTheCodeProps) {
  return (
    <footer className="w-full">
      {/* Marquee Banner */}
      <Marquee
        text={marqueeText}
        buttonText={marqueeButtonText}
        buttonHref={marqueeButtonHref}
      />

      {/* Main Footer Content */}
      <div
        className="px-4 py-12 md:px-8 lg:px-12"
        style={{ backgroundColor: COLORS.footer.background }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left Card - Newsletter */}
            <motion.div
              className="rounded-2xl p-8"
              style={{ backgroundColor: COLORS.footer.cardBg }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="mb-8">
                {logo || <CutTheCodeLogo />}
              </div>

              {/* Newsletter Title */}
              <div className="mb-6 flex items-start gap-2">
                <span
                  className="mt-2 h-2 w-2 rounded-full"
                  style={{ backgroundColor: COLORS.footer.text }}
                />
                <p
                  className="text-lg font-medium whitespace-pre-line"
                  style={{ color: COLORS.footer.text }}
                >
                  {newsletterTitle}
                </p>
              </div>

              {/* Form */}
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder={namePlaceholder}
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-white/20"
                  style={{
                    backgroundColor: COLORS.footer.inputBg,
                    color: COLORS.footer.text,
                    borderColor: COLORS.footer.inputBorder,
                  }}
                />
                <input
                  type="email"
                  placeholder={emailPlaceholder}
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-white/20"
                  style={{
                    backgroundColor: COLORS.footer.inputBg,
                    color: COLORS.footer.text,
                    borderColor: COLORS.footer.inputBorder,
                  }}
                />

                {/* Privacy Checkbox */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <div
                    className="flex h-4 w-4 items-center justify-center rounded border"
                    style={{
                      borderColor: COLORS.footer.textMuted,
                    }}
                  >
                    <Check className="h-3 w-3 opacity-0" style={{ color: COLORS.footer.text }} />
                  </div>
                  <span
                    className="text-xs"
                    style={{ color: COLORS.footer.textMuted }}
                  >
                    {privacyText}
                  </span>
                </label>

                {/* Subscribe Button */}
                <button
                  className="mt-4 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: COLORS.marquee.background,
                    color: COLORS.marquee.text,
                  }}
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    style={{ backgroundColor: COLORS.marquee.text }}
                  >
                    <Plus className="h-3 w-3" style={{ color: COLORS.marquee.background }} />
                  </span>
                  {subscribeButtonText}
                </button>
              </div>
            </motion.div>

            {/* Right Card - Navigation & Social */}
            <motion.div
              className="rounded-2xl p-8"
              style={{ backgroundColor: COLORS.footer.cardBg }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Navigation Grid */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                {/* Services & Company Columns */}
                {columns.map((column, index) => (
                  <div key={index}>
                    <h4
                      className="mb-4 text-xs font-medium uppercase tracking-wider"
                      style={{ color: COLORS.footer.textMuted }}
                    >
                      {column.title}
                    </h4>
                    <ul className="space-y-2">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-sm transition-opacity hover:opacity-70"
                            style={{ color: COLORS.footer.text }}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Offices */}
                <div>
                  <h4
                    className="mb-4 text-xs font-medium uppercase tracking-wider"
                    style={{ color: COLORS.footer.textMuted }}
                  >
                    Offices
                  </h4>
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <div key={index}>
                        <p
                          className="text-sm font-medium"
                          style={{ color: COLORS.footer.text }}
                        >
                          {office.city}
                        </p>
                        {office.address.map((line, lineIndex) => (
                          <p
                            key={lineIndex}
                            className="text-xs"
                            style={{ color: COLORS.footer.textMuted }}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: social.color,
                      color: social.textColor,
                    }}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-4 py-4 md:px-8 lg:px-12"
        style={{ backgroundColor: COLORS.bottomBar.background }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          {/* Left - Copyright & Location */}
          <div
            className="flex flex-wrap items-center gap-2 text-xs"
            style={{ color: COLORS.bottomBar.text }}
          >
            <span>&copy; {copyright}</span>
            <span>+</span>
            <span>{location}</span>
            <span className="ml-1">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="5.33" height="12" fill="#21468B" />
                <rect x="5.33" width="5.33" height="12" fill="#FFFFFF" />
                <rect x="10.66" width="5.34" height="12" fill="#AE1C28" />
              </svg>
            </span>
            <a
              href={privacyStatementHref}
              className="ml-2 transition-opacity hover:opacity-70"
              style={{ color: COLORS.bottomBar.link }}
            >
              {privacyStatementText}
            </a>
          </div>

          {/* Right - Built with & Partner Badge */}
          <div
            className="flex items-center gap-4 text-xs"
            style={{ color: COLORS.bottomBar.text }}
          >
            <span className="flex items-center gap-1">
              {builtWith}
              <span className="text-blue-400">&#128156;</span>
            </span>
            <span className="flex items-center gap-1 font-medium" style={{ color: COLORS.bottomBar.link }}>
              <span className="font-bold text-blue-500">W</span>
              {partnerBadge}
            </span>
            <button
              className="rounded-md p-1 transition-colors hover:bg-white/10"
              style={{ color: COLORS.bottomBar.link }}
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
