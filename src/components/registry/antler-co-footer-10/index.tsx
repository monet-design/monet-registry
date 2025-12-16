"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#0a0a0a",
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.6)",
    border: "rgba(255, 255, 255, 0.2)",
  },
  dark: {
    background: "#0a0a0a",
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.6)",
    border: "rgba(255, 255, 255, 0.2)",
  },
} as const;

const LOCATIONS = [
  "Australia", "Brazil", "Canada", "Denmark", "Finland", "France",
  "Germany", "India", "Indonesia", "Japan", "Kenya", "Korea",
  "MENAP", "Malaysia", "Netherlands", "Nigeria", "Norway", "Singapore",
  "Sweden", "UK", "US", "Vietnam"
];

const PRODUCTS = [
  { name: "Antler Elevate", href: "#elevate" },
  { name: "Antler Academy", href: "#academy" },
  { name: "Antler Ignite", href: "#ignite" },
];

const INVESTORS = [
  { name: "Investors", href: "#investors" },
  { name: "Investor Portal", href: "#portal" },
  { name: "Sustainability", href: "#sustainability" },
];

const ABOUT = [
  { name: "Insights", href: "#insights" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Careers", href: "#careers" },
  { name: "Portfolio Jobs", href: "#jobs" },
  { name: "Newsroom", href: "#newsroom" },
];

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

interface AntlerCoFooter10Props {
  mode?: "light" | "dark";
}

export default function AntlerCoFooter10({
  mode = "light",
}: AntlerCoFooter10Props) {
  const colors = COLORS[mode];

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Facebook": return <Facebook className="w-5 h-5" />;
      case "Instagram": return <Instagram className="w-5 h-5" />;
      case "Twitter": return <Twitter className="w-5 h-5" />;
      case "LinkedIn": return <Linkedin className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <footer
      className="relative w-full pt-16 pb-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          className="mb-12 pb-12"
          style={{ borderBottom: `1px solid ${colors.border}` }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: colors.text }}
              >
                Subscribe to our newsletter
              </h3>
              <p style={{ color: colors.textMuted }}>
                Get the latest news and views from Antler&apos;s global community.
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <span
                className="text-2xl font-bold"
                style={{ color: colors.text }}
              >
                ANTLER
              </span>
            </a>
          </div>

          {/* Locations */}
          <div className="col-span-1 lg:col-span-2">
            <h4
              className="text-sm font-semibold mb-4"
              style={{ color: colors.text }}
            >
              Locations
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {LOCATIONS.map((location) => (
                <a
                  key={location}
                  href={`#${location.toLowerCase()}`}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: colors.textMuted }}
                >
                  {location}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 invisible"
              style={{ color: colors.text }}
            >
              &nbsp;
            </h4>
            <ul className="space-y-2">
              {PRODUCTS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: colors.textMuted }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{ color: colors.text }}
            >
              Investors
            </h4>
            <ul className="space-y-2">
              {INVESTORS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: colors.textMuted }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{ color: colors.text }}
            >
              <a href="#about" className="hover:underline">
                About
              </a>
            </h4>
            <ul className="space-y-2">
              {ABOUT.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: colors.textMuted }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderTop: `1px solid ${colors.border}` }}
        >
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: colors.textMuted }}>
            <span>2025 Antler. All rights reserved.</span>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#fraud" className="hover:text-white transition-colors">
              Fraud Disclaimer
            </a>
          </div>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: colors.textMuted }}
                aria-label={social.name}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
