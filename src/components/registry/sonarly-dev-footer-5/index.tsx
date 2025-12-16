"use client";

// ============================================================================
// CUSTOMIZATION - Modify values in this section to customize for your project
// ============================================================================

const COLORS = {
  light: {
    border: "#e5e7eb",
  },
  dark: {
    border: "#374151",
  },
} as const;

const FOOTER_LINKS = {
  company: [{ label: "Contact", href: "https://cal.com/dimittri" }],
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
  ],
  social: [
    { label: "Twitter", href: "https://x.com/dachoudhury" },
    { label: "Discord", href: "https://discord.gg/9XDVzde4G4" },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SonarlyDevFooter5Props {
  mode?: "light" | "dark";
}

export default function SonarlyDevFooter5({
  mode = "light",
}: SonarlyDevFooter5Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <footer
      className={`w-full border-t py-12 ${isDark ? "bg-gray-950" : "bg-white"}`}
      style={{ borderColor: colors.border }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${isDark ? "bg-white" : "bg-black"}`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={isDark ? "text-black" : "text-white"}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" fill="currentColor" />
                </svg>
              </div>
              <span
                className={`text-lg font-semibold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}
              >
                SONARLY
              </span>
            </div>
            <p
              className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Sonarly tracks every user session, detects bugs, and packages the
              full context ready for your AI coding agent.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            {/* Company */}
            <div>
              <h4
                className={`mb-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Company
              </h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-sm transition-colors ${
                        isDark
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4
                className={`mb-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Product
              </h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`text-sm transition-colors ${
                        isDark
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4
                className={`mb-4 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Social
              </h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.social.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-sm transition-colors ${
                        isDark
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
