"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  background: "#0C0B10",
  headingText: "#A5A0C3",
  primaryButtonBg: "#FFFFFF",
  primaryButtonText: "#0C0B10",
  secondaryButtonBorder: "#3A3940",
  secondaryButtonText: "#FFFFFF",
  secondaryButtonIcon: "#6366F1",
  footerText: "#888888",
  footerLinkText: "#888888",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Twitter, Play } from "lucide-react";

interface FooterCoherenceCtaProps {
  heading?: {
    line1?: string;
    line2?: string;
  };
  primaryButton?: {
    text?: string;
    href?: string;
  };
  secondaryButton?: {
    text?: string;
    href?: string;
  };
  copyright?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
  footerLinks?: Array<{
    label: string;
    href: string;
  }>;
}

export default function FooterCoherenceCta({
  heading = {
    line1: "Get back to building your product.",
    line2: "Let Coherence handle the rest.",
  },
  primaryButton = {
    text: "Try a sandbox",
    href: "#",
  },
  secondaryButton = {
    text: "Watch the demo",
    href: "#",
  },
  copyright = "2022 Coherence Technologies",
  socialLinks = {
    linkedin: "#",
    twitter: "#",
  },
  footerLinks = [
    { label: "Blog", href: "#" },
    { label: "Jobs", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}: FooterCoherenceCtaProps) {
  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          {/* Heading */}
          <h2
            className="mb-10 text-3xl font-light italic leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: COLORS.headingText }}
          >
            {heading.line1}
            <br />
            {heading.line2}
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href={primaryButton.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: COLORS.primaryButtonBg,
                color: COLORS.primaryButtonText,
              }}
            >
              {primaryButton.text}
            </motion.a>

            <motion.a
              href={secondaryButton.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                borderColor: COLORS.secondaryButtonBorder,
                color: COLORS.secondaryButtonText,
              }}
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-md"
                style={{ backgroundColor: COLORS.secondaryButtonIcon }}
              >
                <Play className="h-3 w-3 fill-current text-white" />
              </span>
              {secondaryButton.text}
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          {/* Copyright */}
          <p
            className="text-sm"
            style={{ color: COLORS.footerText }}
          >
            &copy; {copyright}
          </p>

          {/* Right Side Links */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  className="transition-opacity hover:opacity-70"
                  style={{ color: COLORS.footerLinkText }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="transition-opacity hover:opacity-70"
                  style={{ color: COLORS.footerLinkText }}
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: COLORS.footerLinkText }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
