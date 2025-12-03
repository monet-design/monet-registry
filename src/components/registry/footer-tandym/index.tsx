"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  background: "#1a2b26",
  headingText: "#ffffff",
  linkText: "#8a9e96",
  linkHover: "#ffffff",
  tagline: "#ffffff",
  divider: "#2a3d36",
  bottomText: "#6b7f77",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Link from "next/link";

// Tandym Logo Component
function TandymLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 8h16v16H8V8z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M16 16h16v16H16V16z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

// Social Icons
function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterTandymProps {
  tagline?: string;
  columns?: FooterLinkColumn[];
  copyrightYear?: string;
  copyrightText?: string;
  legalLinks?: { label: string; href: string }[];
  socialLinks?: {
    x?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  bottomNote?: string;
  poweredBy?: { label: string; href: string };
}

export default function FooterTandym({
  tagline = "The payments platform designed to put\nmerchants first",
  columns = [
    {
      title: "About Us",
      links: [
        { label: "Our Story", href: "#" },
        { label: "Newsroom", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Our Brands", href: "#" },
        { label: "Articles", href: "#" },
        { label: "Partners", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Merchants",
      links: [
        { label: "Solutions", href: "#" },
        { label: "How It Works", href: "#" },
        { label: "Talk to Sales", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Docs", href: "#" },
        { label: "Merchant Sign In", href: "#" },
      ],
    },
    {
      title: "Shoppers",
      links: [
        { label: "Help", href: "#" },
        { label: "How It Works", href: "#" },
        { label: "Shoppers Sign In", href: "#" },
      ],
    },
  ],
  copyrightYear = "2023",
  copyrightText = "Tandym",
  legalLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  socialLinks = {
    x: "#",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
  bottomNote = "Tandym loan products are issued by Celtic Bank.",
  poweredBy = { label: "ramp", href: "#" },
}: FooterTandymProps) {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <TandymLogo className="h-10 w-10 text-white mb-6" />
            <p
              className="text-sm leading-relaxed whitespace-pre-line"
              style={{ color: COLORS.tagline }}
            >
              {tagline}
            </p>
          </motion.div>

          {/* Navigation Columns */}
          <div className="lg:col-span-9 grid grid-cols-2 gap-8 md:grid-cols-3 lg:justify-items-center">
            {columns.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (columnIndex + 1) }}
              >
                <h3
                  className="text-lg font-medium mb-5"
                  style={{ color: COLORS.headingText }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:opacity-100"
                        style={{ color: COLORS.linkText }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = COLORS.linkHover;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = COLORS.linkText;
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ backgroundColor: COLORS.divider }}
      />

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Copyright and Legal Links */}
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: COLORS.bottomText }}>
            <span>&copy; {copyrightText} {copyrightYear}</span>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors duration-200"
                style={{ color: COLORS.bottomText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.linkHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.bottomText;
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.x && (
              <Link
                href={socialLinks.x}
                className="transition-colors duration-200"
                style={{ color: COLORS.linkText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.linkHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.linkText;
                }}
                aria-label="X (Twitter)"
              >
                <XIcon className="h-5 w-5" />
              </Link>
            )}
            {socialLinks.instagram && (
              <Link
                href={socialLinks.instagram}
                className="transition-colors duration-200"
                style={{ color: COLORS.linkText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.linkHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.linkText;
                }}
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
            )}
            {socialLinks.facebook && (
              <Link
                href={socialLinks.facebook}
                className="transition-colors duration-200"
                style={{ color: COLORS.linkText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.linkHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.linkText;
                }}
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
            )}
            {socialLinks.linkedin && (
              <Link
                href={socialLinks.linkedin}
                className="transition-colors duration-200"
                style={{ color: COLORS.linkText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.linkHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = COLORS.linkText;
                }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>

        {/* Bottom Note and Powered By */}
        <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs" style={{ color: COLORS.bottomText }}>
            {bottomNote}
          </p>
          {poweredBy && (
            <Link
              href={poweredBy.href}
              className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded bg-white/10 transition-colors duration-200 hover:bg-white/20"
              style={{ color: COLORS.bottomText }}
            >
              <span className="text-[10px] uppercase tracking-wider">Powered by</span>
              <span className="font-semibold text-white">{poweredBy.label}</span>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
