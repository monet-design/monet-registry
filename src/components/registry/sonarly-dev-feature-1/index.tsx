"use client";

// ============================================================================
// CUSTOMIZATION - Modify values in this section to customize for your project
// ============================================================================

const COLORS = {
  light: {
    cardBg: "#ffffff",
    cardBorder: "#e5e7eb",
    criticalBadge: "#ef4444",
    criticalBadgeBg: "#fef2f2",
    errorBg: "#fef2f2",
    errorText: "#dc2626",
    copyBtnBg: "#f3f4f6",
  },
  dark: {
    cardBg: "#1f2937",
    cardBorder: "#374151",
    criticalBadge: "#f87171",
    criticalBadgeBg: "#7f1d1d",
    errorBg: "#7f1d1d",
    errorText: "#fca5a5",
    copyBtnBg: "#374151",
  },
} as const;

const IMAGES = {
  oneClick: {
    path: "/scraped/sonarly-dev-2025-12-15/images/image-1.png",
    alt: "One-click configuration demo",
  },
  aiAlerts: {
    path: "/scraped/sonarly-dev-2025-12-15/images/image-2.png",
    alt: "AI-powered alerts demo",
  },
  issueReplay: {
    path: "/scraped/sonarly-dev-2025-12-15/images/image-3.png",
    alt: "Issue Replay demo",
  },
  llmContext: {
    path: "/scraped/sonarly-dev-2025-12-15/images/image-4.png",
    alt: "LLM-ready context demo",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SonarlyDevFeature1Props {
  mode?: "light" | "dark";
}

export default function SonarlyDevFeature1({
  mode = "light",
}: SonarlyDevFeature1Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const features = [
    {
      title: "One-prompt configuration",
      description:
        "Copy-paste the Super Prompt into your coding agent - it automatically implements the full-stack tracker in your project.",
      image: IMAGES.oneClick,
      visual: (
        <div className="space-y-3">
          <div
            className={`inline-block rounded-full px-3 py-1.5 text-xs font-medium ${isDark ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"}`}
          >
            Super Config Prompt pasted!
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
              >
                <svg
                  className={`h-3 w-3 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
                </svg>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}
              >
                Cursor is writing...
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
              >
                <svg
                  className={`h-3 w-3 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
                </svg>
              </div>
              <div
                className={`rounded-lg px-3 py-2 text-xs ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}
              >
                <p className="font-medium">
                  The full-stack Sonarly tracker is installed!
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AI-powered alerts",
      description:
        "Our tracker detects issues in both frontend and backend, then Sonarly clusters them to alert you only when it matters.",
      image: IMAGES.aiAlerts,
      visual: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                stroke="#ea4335"
                strokeWidth="2"
              />
            </svg>
            <span
              className={`text-xs ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              New critical issue detected in yourwebsite.com
            </span>
          </div>
          <div
            className={`rounded-lg border p-3 ${isDark ? "border-gray-600 bg-gray-800" : "border-gray-200 bg-white"}`}
          >
            <div className="mb-2 flex items-center justify-between">
              <span
                className={`text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-900"}`}
              >
                A user is blocked after the login
              </span>
              <span
                className="rounded px-2 py-0.5 text-xs font-medium text-white"
                style={{ backgroundColor: colors.criticalBadge }}
              >
                Critical
              </span>
            </div>
            <p
              className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              This AuthenticationError occurred 3 times in the last 2 minutes in
              auth.service.ts at line 145 (validateUser function).
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Issue Replay",
      description:
        "Replay the session where the bug occurred to see console logs, network activity, and backend logs.",
      image: IMAGES.issueReplay,
      visual: (
        <div className="space-y-3">
          <div
            className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            yourwebsite.com
          </div>
          <div className="flex items-center gap-4">
            <div
              className={`rounded border px-3 py-1.5 text-sm ${isDark ? "border-gray-600 text-gray-300" : "border-gray-300 text-gray-700"}`}
            >
              Login
            </div>
            <svg
              className={`h-4 w-4 ${isDark ? "text-gray-500" : "text-gray-400"}`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M5.5 5.5L10 10m0 0l-4.5 4.5M10 10H3" />
            </svg>
            <div
              className="flex items-center gap-1 rounded px-2 py-1 text-xs"
              style={{
                backgroundColor: colors.errorBg,
                color: colors.errorText,
              }}
            >
              <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              /login is broken
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`flex h-8 w-8 items-center justify-center rounded ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "LLM-ready context",
      description:
        "Copy the context of the bug - including all logs before and after - to fix it with your coding agent.",
      image: IMAGES.llmContext,
      visual: (
        <div className="space-y-2">
          <div
            className={`rounded-lg border p-3 text-xs ${isDark ? "border-gray-600 bg-gray-800" : "border-gray-200 bg-gray-50"}`}
          >
            <p
              className={`mb-2 font-medium ${isDark ? "text-gray-200" : "text-gray-900"}`}
            >
              Fix the AuthenticationError in auth.service.ts line 145.
            </p>
            <p
              className={`mb-1 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              Context
            </p>
            <ul
              className={`space-y-0.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
            >
              <li>- Error: User blocked after login</li>
              <li>- Location: validateUser() function</li>
              <li>- Network: GET /api/user/status returned 403</li>
              <li>...</li>
            </ul>
          </div>
          <div className="flex justify-end">
            <button
              className="flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium"
              style={{ backgroundColor: colors.copyBtnBg }}
            >
              <svg
                className={`h-3.5 w-3.5 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                Copy
              </span>
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="features"
      className={`w-full py-24 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2
            className={`mb-4 text-4xl font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
          >
            The most comprehensive production
            <br />
            runtime context for coding agents
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Coding agents excel at build time because they have the right
            context. At runtime, they&apos;re useless - no context, no fix.
            We&apos;re changing that.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.cardBorder,
              }}
            >
              {/* Visual */}
              <div
                className={`p-6 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
                style={{ minHeight: "200px" }}
              >
                {feature.visual}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className={`mb-2 text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {feature.title}
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
