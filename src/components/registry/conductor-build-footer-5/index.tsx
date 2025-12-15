"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#141414",
    text: "#FAFAFA",
    textMuted: "#71717A",
  },
  dark: {
    bg: "#141414",
    text: "#FAFAFA",
    textMuted: "#71717A",
  },
} as const;

const CONTENT = {
  copyright: "\u00A9 2025 Melty Labs",
  links: [
    { label: "Docs", href: "/docs" },
    { label: "Privacy", href: "/privacy" },
    { label: "Join us", href: "/join" },
    { label: "Follow us on X", href: "https://x.com/conductor_build" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Link from "next/link";

interface ConductorBuildFooter5Props {
  mode?: "light" | "dark";
}

export default function ConductorBuildFooter5({
  mode = "dark",
}: ConductorBuildFooter5Props) {
  const colors = COLORS[mode];

  return (
    <footer className="w-full py-12" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end gap-4">
          {/* Copyright */}
          <p
            className="font-mono text-sm"
            style={{ color: colors.textMuted }}
          >
            {CONTENT.copyright}
          </p>

          {/* Links */}
          <nav className="flex flex-col items-end gap-2">
            {CONTENT.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-mono text-sm transition-colors hover:opacity-80"
                style={{ color: colors.textMuted }}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
