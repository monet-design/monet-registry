"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#063D2F",
  accent: "#F5D547", // Yellow/Gold for logo
  text: "#FFFFFF",
  linkUnderline: "#FFFFFF",
  chatButton: "#C4D82E", // Yellow-green chat button
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Instagram, Twitter, MessageCircle } from "lucide-react";
import "./font.css";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterBeOnHandProps {
  logo?: string;
  columns?: FooterColumn[];
  copyrightText?: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  chatButtonHref?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Employee engagement", href: "#" },
      { label: "Community investment", href: "#" },
      { label: "Sustainability action", href: "#" },
      { label: "Employee giving & donations", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "#" },
      { label: "Handbooks", href: "#" },
      { label: "Awards", href: "#" },
      { label: "Tree planting", href: "#" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Book a demo", href: "#" },
      { label: "Log in", href: "#" },
      { label: "Make a referral", href: "#" },
      { label: "OnHand for work terms", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Find out more", href: "#" },
      { label: "Contact us", href: "#" },
      { label: "End User Terms", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export default function FooterBeOnHand({
  logo = "On Hand",
  columns = defaultColumns,
  copyrightText = "Copyright © 2023 Beonhand",
  socialLinks = {
    linkedin: "#",
    instagram: "#",
    twitter: "#",
  },
  chatButtonHref = "#",
}: FooterBeOnHandProps) {
  return (
    <footer
      className="relative w-full py-12 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-6">
          {/* Logo and Social Links Column */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Script Logo */}
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{
                color: COLORS.accent,
                fontFamily: "'Pacifico', cursive",
              }}
            >
              {logo}
            </h2>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  className="transition-opacity hover:opacity-70"
                  style={{ color: COLORS.text }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  className="transition-opacity hover:opacity-70"
                  style={{ color: COLORS.text }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="transition-opacity hover:opacity-70"
                  style={{ color: COLORS.text }}
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Navigation Columns */}
          {columns.map((column, columnIndex) => (
            <motion.div
              key={column.title}
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (columnIndex + 1) }}
              viewport={{ once: true }}
            >
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: COLORS.text }}
              >
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm underline underline-offset-2 transition-opacity hover:opacity-70"
                      style={{ color: COLORS.text }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm italic"
            style={{ color: COLORS.text }}
          >
            {copyrightText}
          </p>
        </motion.div>
      </div>

      {/* Chat Button */}
      <motion.a
        href={chatButtonHref}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: COLORS.chatButton }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        viewport={{ once: true }}
        aria-label="Chat with us"
      >
        <MessageCircle className="w-6 h-6 text-black" />
      </motion.a>
    </footer>
  );
}
