"use client";

// ============================================================================
// CUSTOMIZATION - Modify values in this section to customize for your project
// ============================================================================

/**
 * Custom colors (brand colors)
 * - grayscale text uses Tailwind semantic colors (text-gray-900 etc)
 * - Define only brand-specific colors here
 */
const COLORS = {
  light: {
    accent: "#000000",
    accentHover: "#1a1a1a",
    badgeBg: "#f5f5f5",
    badgeBorder: "#e5e5e5",
  },
  dark: {
    accent: "#ffffff",
    accentHover: "#e5e5e5",
    badgeBg: "#262626",
    badgeBorder: "#404040",
  },
} as const;

/**
 * Image assets
 */
const IMAGES = {
  ycLogo: {
    path: "/scraped/sonarly-dev-2025-12-15/images/image-0.png",
    alt: "Y Combinator logo",
  },
} as const;

/**
 * Video assets
 */
const VIDEOS = {
  demo: {
    path: "https://sonarly.dev/demo-lp.mp4",
    alt: "Sonarly demo video",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SonarlyDevHero0Props {
  mode?: "light" | "dark";
}

export default function SonarlyDevHero0({
  mode = "light",
}: SonarlyDevHero0Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-12 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Navigation */}
        <nav className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
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

          <div
            className={`hidden items-center gap-8 md:flex ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            <a
              href="#features"
              className={`text-sm transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={`text-sm transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
            >
              Pricing
            </a>
            <a
              href="#resources"
              className={`text-sm transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
            >
              Resources
            </a>
            <a
              href="#docs"
              className={`text-sm transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
            >
              Docs
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isDark
                  ? "border-gray-700 text-white hover:bg-gray-800"
                  : "border-gray-300 text-gray-900 hover:bg-gray-50"
              }`}
            >
              Join Discord
            </button>
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Get started free
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center">
          {/* Y Combinator Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{
              backgroundColor: colors.badgeBg,
              borderColor: colors.badgeBorder,
            }}
          >
            <img
              src={IMAGES.ycLogo.path}
              alt={IMAGES.ycLogo.alt}
              className="h-5 w-5"
            />
            <span
              className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Backed by Y Combinator
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-6xl ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Find and fix production bugs faster with AI
          </h1>

          {/* Subheading */}
          <p
            className={`mb-8 max-w-2xl text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Sonarly tracks every user session, detects bugs, and packages the
            full context ready for your AI coding agent.
          </p>

          {/* CTA Buttons */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <button
              className="rounded-full px-6 py-3 text-sm font-medium transition-colors"
              style={{
                backgroundColor: colors.accent,
                color: isDark ? "black" : "white",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = colors.accentHover)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = colors.accent)
              }
            >
              Get started free
            </button>
            <button
              className={`rounded-full border px-6 py-3 text-sm font-medium transition-colors ${
                isDark
                  ? "border-gray-700 text-white hover:bg-gray-800"
                  : "border-gray-300 text-gray-900 hover:bg-gray-50"
              }`}
            >
              Install with us
            </button>
          </div>

          {/* Hint Text */}
          <p
            className={`mb-12 text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            One prompt in your coding agent to set up the full-stack tracker
          </p>

          {/* Video Container */}
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="absolute inset-0 -z-10 opacity-50 blur-3xl"
              style={{
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #34d399 50%, #fbbf24 100%)",
              }}
            />
            <video
              src={VIDEOS.demo.path}
              className="w-full rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
