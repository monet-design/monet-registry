"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to fit your project
// ============================================================================

const COLORS = {
  background: "#000000",
  accent: "#FEF536", // Lime/yellow accent color
  accentHover: "#E5DC30",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AF", // gray-400
  textMuted: "#6B7280", // gray-500
  inputBg: "#1F2937", // gray-800
  inputBorder: "#374151", // gray-700
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Twitter, Github, Youtube, Linkedin, Slack } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterTimescaleProps {
  logo?: React.ReactNode;
  companyName?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  newsletterButtonText?: string;
  privacyPolicyText?: string;
  copyrightText?: string;
  legalLinks?: FooterLink[];
  onSubscribe?: (email: string) => void;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Why Timescale", href: "#" },
      { label: "Cloud status", href: "#" },
      { label: "Support", href: "#" },
      { label: "Security", href: "#" },
      { label: "Cloud Terms of Service", href: "#" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Forum", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Release notes", href: "#" },
      { label: "Success stories", href: "#" },
      { label: "Time series database", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "About", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Community", href: "#" },
      { label: "Timescale shop", href: "#" },
      { label: "Code of conduct", href: "#" },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  { icon: <Slack className="h-5 w-5" />, href: "#", label: "Slack" },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "Privacy preferences", href: "#" },
  { label: "Legal", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Sitemap", href: "#" },
];

// Timescale Logo Component
function TimescaleLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
          fill={COLORS.accent}
        />
        <path
          d="M11 10c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1h-8c-.552 0-1-.448-1-1v-2zM11 15c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1h-8c-.552 0-1-.448-1-1v-2zM11 20c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1h-8c-.552 0-1-.448-1-1v-2z"
          fill={COLORS.background}
        />
      </svg>
      <span
        className="text-xl font-semibold"
        style={{ color: COLORS.textPrimary }}
      >
        Timescale
      </span>
    </div>
  );
}

export default function FooterTimescale({
  logo,
  companyName = "Timescale Inc.",
  columns = defaultColumns,
  socialLinks = defaultSocialLinks,
  newsletterTitle = "Subscribe to the Timescale Newsletter",
  newsletterPlaceholder = "Your email",
  newsletterButtonText = "Subscribe",
  privacyPolicyText = "By submitting, you acknowledge Timescale's",
  copyrightText = "2023 © Timescale Inc. All rights reserved.",
  legalLinks = defaultLegalLinks,
  onSubscribe,
}: FooterTimescaleProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (onSubscribe && email) {
      onSubscribe(email);
    }
  };

  return (
    <footer
      className="relative w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {logo || <TimescaleLogo />}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
              >
                <h3
                  className="text-sm font-medium mb-5 tracking-wide"
                  style={{ color: COLORS.textMuted }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:opacity-80"
                        style={{ color: COLORS.textPrimary }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5"
          >
            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
                  style={{
                    backgroundColor: COLORS.accent,
                    color: COLORS.background,
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h3
                className="text-base font-medium mb-4"
                style={{ color: COLORS.textPrimary }}
              >
                {newsletterTitle}
              </h3>
              <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder={newsletterPlaceholder}
                  className="flex-1 px-4 py-2.5 rounded-full text-sm outline-none transition-colors duration-200 focus:ring-2"
                  style={{
                    backgroundColor: COLORS.inputBg,
                    borderColor: COLORS.inputBorder,
                    color: COLORS.textPrimary,
                  }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
                  style={{
                    backgroundColor: COLORS.accent,
                    color: COLORS.background,
                  }}
                >
                  {newsletterButtonText}
                </motion.button>
              </form>
              <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                {privacyPolicyText}{" "}
                <a
                  href="#"
                  className="font-medium underline"
                  style={{ color: COLORS.textPrimary }}
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t"
          style={{ borderColor: COLORS.inputBg }}
        >
          <p className="text-sm mb-4 md:mb-0" style={{ color: COLORS.textMuted }}>
            {copyrightText}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:opacity-80"
                style={{ color: COLORS.textSecondary }}
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
