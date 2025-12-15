"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#F5F5F5",
    text: "#1F1F1F",
    textSecondary: "#6B7280",
    border: "#E5E5E5",
  },
  dark: {
    bg: "#262626",
    text: "#FFFFFF",
    textSecondary: "#9CA3AF",
    border: "#333333",
  },
} as const;

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Web Agents", href: "/agents" },
    { label: "Bugbot", href: "/bugbot" },
    { label: "CLI", href: "/cli" },
    { label: "Pricing", href: "/pricing" },
  ],
  Resources: [
    { label: "Download", href: "/download" },
    { label: "Changelog", href: "/changelog" },
    { label: "Docs", href: "https://cursor.com/docs", external: true },
    { label: "Learn", href: "https://cursor.com/learn", external: true },
    { label: "Forum", href: "https://forum.cursor.com/", external: true },
    { label: "Status", href: "https://status.cursor.com/", external: true },
  ],
  Company: [
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Community", href: "/community" },
    { label: "Workshops", href: "/workshops" },
    { label: "Students", href: "/students" },
    { label: "Brand", href: "/brand" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Data Use", href: "/data-use" },
    { label: "Security", href: "/security" },
  ],
  Connect: [
    { label: "X", href: "https://x.com/cursor_ai", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/cursorai", external: true },
    { label: "YouTube", href: "https://www.youtube.com/@cursor_ai", external: true },
  ],
} as const;

// ============================================================================

import { motion } from "motion/react";
import { Monitor, Sun, Moon, Globe, ChevronDown } from "lucide-react";

interface CursorComFooter9Props {
  mode?: "light" | "dark";
}

export default function CursorComFooter9({
  mode = "dark",
}: CursorComFooter9Props) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full px-6 py-12 lg:px-12 lg:py-16"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Links Grid */}
        <nav className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3
                className="mb-4 text-sm font-medium"
                style={{ color: colors.textSecondary }}
              >
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-sm transition-colors hover:opacity-80"
                      style={{ color: colors.text }}
                    >
                      {link.label}
                      {link.external && (
                        <span className="text-xs opacity-0 transition-opacity group-hover:opacity-100">
                          ↗
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          {/* Copyright */}
          <div
            className="flex items-center gap-4 text-sm"
            style={{ color: colors.textSecondary }}
          >
            <span>&copy; 2025 Cursor</span>
            <a
              href="/security"
              className="inline-flex items-center gap-1 transition-colors hover:opacity-80"
            >
              <span>🛡</span>
              <span>SOC 2 Certified</span>
            </a>
          </div>

          {/* Theme & Language Controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <div
              className="flex items-center gap-1 rounded-full p-1"
              style={{
                backgroundColor: mode === "dark" ? "#333" : "#E5E5E5",
              }}
            >
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
                style={{
                  backgroundColor: mode === "dark" ? "#444" : "transparent",
                }}
                aria-label="System theme"
              >
                <Monitor className="h-4 w-4" style={{ color: colors.text }} />
              </button>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:opacity-80"
                aria-label="Light theme"
              >
                <Sun className="h-4 w-4" style={{ color: colors.textSecondary }} />
              </button>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:opacity-80"
                aria-label="Dark theme"
              >
                <Moon className="h-4 w-4" style={{ color: colors.textSecondary }} />
              </button>
            </div>

            {/* Language Selector */}
            <button
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors hover:opacity-80"
              style={{
                backgroundColor: mode === "dark" ? "#333" : "#E5E5E5",
                color: colors.text,
              }}
            >
              <Globe className="h-4 w-4" />
              <span>English</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
