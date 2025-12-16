"use client";

// ============================================================================
// CUSTOMIZATION - Modify values in this section to customize for your project
// ============================================================================

const COLORS = {
  light: {
    accent: "#000000",
    accentHover: "#1a1a1a",
  },
  dark: {
    accent: "#ffffff",
    accentHover: "#e5e5e5",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SonarlyDevCta4Props {
  mode?: "light" | "dark";
}

export default function SonarlyDevCta4({
  mode = "light",
}: SonarlyDevCta4Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section className={`w-full py-24 ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2
          className={`mb-8 text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Try Sonarly now.
        </h2>
        <button
          className="rounded-full px-8 py-4 text-base font-medium transition-colors"
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
          Start 14-Day Free Trial
        </button>
      </div>
    </section>
  );
}
