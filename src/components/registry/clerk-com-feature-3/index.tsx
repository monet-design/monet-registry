"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#A855F7", // Purple-500 for labels
    accentHover: "#9333EA",
    codeBg: "#1E1E1E",
    codeText: "#9CA3AF",
    codeKeyword: "#C586C0", // Purple/Pink for keywords
    codeComponent: "#4FC1FF", // Blue for component names
    codeString: "#CE9178", // Orange for strings
    codeProperty: "#9CDCFE", // Light blue for properties
    codeFunction: "#DCDCAA", // Yellow for functions
    codeBrace: "#FFD700", // Gold for braces
    buttonPrimary: "#6366F1", // Indigo
  },
  dark: {
    accent: "#C084FC",
    accentHover: "#A855F7",
    codeBg: "#1E1E1E",
    codeText: "#9CA3AF",
    codeKeyword: "#C586C0",
    codeComponent: "#4FC1FF",
    codeString: "#CE9178",
    codeProperty: "#9CDCFE",
    codeFunction: "#DCDCAA",
    codeBrace: "#FFD700",
    buttonPrimary: "#818CF8",
  },
} as const;

/**
 * 콘텐츠
 */
const CONTENT = {
  label: "Styled components",
  title: "Pixel-perfect UIs, embedded in minutes",
  description:
    "Drop-in UI components for authentication, profiles, and more. Embed seamlessly into your application with just a few lines of code. Fits your app, not the other way around.",
  features: [
    {
      prefix: "Lots",
      text: "of frameworks.",
      items: ["Next.js", "React", "JavaScript", "Remix", "Expo", "Tanstack Start"],
    },
    {
      prefix: "Style",
      text: "props for quick styling.",
      items: ["appearance", "routing"],
    },
    {
      prefix: "Accessibility",
      text: "and multi-language",
      items: ["localization"],
    },
    {
      prefix: "Beautiful",
      text: "on any device.",
      items: [],
    },
  ],
  cta: {
    text: "Explore our components",
    href: "/docs/components",
  },
  cardTitle: "Create your account",
  socialButtons: [
    { icon: "google", text: "Continue with Google" },
    { icon: "github", text: "Continue with GitHub" },
  ],
  orText: "or",
  formLabels: {
    email: "Email address",
    password: "Password",
    continue: "Continue",
    haveAccount: "Have an account?",
    signIn: "Sign in",
  },
  secured: "Secured by",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ClerkComFeature3Props {
  mode?: "light" | "dark";
}

// Google Icon
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

// GitHub Icon
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// Clerk Logo
function ClerkLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 20" fill="currentColor">
      <path d="M21.568 16.17V3.978h2.385v12.193h-2.385zm7.55 0.15c-.89 0-1.668-.188-2.335-.563-.667-.375-1.185-.903-1.553-1.584-.367-.68-.551-1.472-.551-2.375 0-.904.18-1.69.54-2.358.36-.669.866-1.19 1.52-1.562.652-.372 1.41-.558 2.274-.558.858 0 1.593.186 2.205.558.612.372 1.083.88 1.414 1.523.33.645.495 1.378.495 2.199 0 .195-.008.385-.023.57H27.03c.064.734.287 1.293.669 1.677.382.385.874.577 1.476.577.45 0 .834-.1 1.153-.3.318-.2.55-.466.696-.796h2.338c-.178.636-.472 1.192-.882 1.668-.41.476-.918.847-1.524 1.113-.606.267-1.28.4-2.022.4l.185-.19zm-2.152-5.433h4.193c-.047-.623-.247-1.11-.6-1.46-.353-.35-.818-.525-1.396-.525-.578 0-1.053.175-1.425.525-.372.35-.61.837-.714 1.46h-.058zm8.97 5.284V7.82h2.268v1.483c.244-.511.606-.913 1.085-1.205.48-.293 1.054-.44 1.724-.44v2.485h-.645c-.545 0-.993.126-1.345.379-.352.252-.529.7-.529 1.345v4.304h-2.559zm7.143 0V3.978h2.268v6.47l2.865-2.628h2.887l-3.422 3.14 3.573 5.21h-2.77l-2.373-3.567-.76.69v2.876h-2.268zM6.63 5.78c.43.287.467.893.1 1.26L5.1 8.67a.78.78 0 01-1.08.146C2.706 7.875 1.78 6.49 1.78 4.975c0-2.514 2.038-4.554 4.552-4.554 1.514 0 2.899.926 3.84 2.24a.78.78 0 01-.145 1.08L8.396 5.37a.78.78 0 01-1.26-.1 1.752 1.752 0 00-1.478-.812c-.97 0-1.753.785-1.753 1.754 0 .415.15.812.43 1.115.202.218.456.38.733.488a.78.78 0 011.26.1l.302.366zm-2.154 8.485a.78.78 0 01-.1-1.26l1.63-1.63a.78.78 0 011.08-.145c1.315.94 2.701 1.866 4.216 1.866 2.514 0 4.553-2.04 4.553-4.554 0-1.515-.926-2.9-2.24-3.841a.78.78 0 01.146-1.08l1.63-1.63a.78.78 0 011.26.1c1.21 1.93 1.758 3.904 1.758 6.45 0 4.522-3.665 8.187-8.186 8.187-2.547 0-4.52-.548-6.452-1.758l.705-.705z" />
    </svg>
  );
}

// Code Block Component
function CodeBlock({ colors }: { colors: (typeof COLORS)[keyof typeof COLORS] }) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-2xl"
      style={{ backgroundColor: colors.codeBg }}
    >
      {/* Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Code Content */}
      <div className="p-4 text-sm font-mono overflow-x-auto">
        <pre className="leading-relaxed">
          {/* Line 1 */}
          <div className="flex">
            <span className="text-gray-600 w-8 select-none">1</span>
            <span>
              <span style={{ color: colors.codeKeyword }}>import</span>
              <span style={{ color: colors.codeText }}> {"{ "}</span>
              <span style={{ color: colors.codeComponent }}>SignUp</span>
              <span style={{ color: colors.codeText }}>{" } "}</span>
              <span style={{ color: colors.codeKeyword }}>from</span>
              <span style={{ color: colors.codeString }}> &apos;@clerk/nextjs&apos;</span>
            </span>
          </div>

          {/* Line 2 - Empty */}
          <div className="flex">
            <span className="text-gray-600 w-8 select-none">2</span>
            <span></span>
          </div>

          {/* Line 3 */}
          <div className="flex">
            <span className="text-gray-600 w-8 select-none">3</span>
            <span>
              <span style={{ color: colors.codeKeyword }}>export default function</span>
              <span style={{ color: colors.codeFunction }}> Page</span>
              <span style={{ color: colors.codeBrace }}>()</span>
              <span style={{ color: colors.codeText }}> {"{"}</span>
            </span>
          </div>

          {/* Line 4 */}
          <div className="flex">
            <span className="text-gray-600 w-8 select-none">4</span>
            <span>
              <span style={{ color: colors.codeText }}>{"  "}</span>
              <span style={{ color: colors.codeKeyword }}>return</span>
              <span style={{ color: colors.codeText }}> {"<"}</span>
              <span style={{ color: colors.codeComponent }}>SignUp</span>
              <span style={{ color: colors.codeText }}> /{">"}</span>
            </span>
          </div>

          {/* Line 5 */}
          <div className="flex">
            <span className="text-gray-600 w-8 select-none">5</span>
            <span style={{ color: colors.codeText }}>{"}"}</span>
          </div>
        </pre>
      </div>
    </div>
  );
}

// Sign Up Card Component
function SignUpCard({ colors }: { colors: (typeof COLORS)[keyof typeof COLORS] }) {
  return (
    <div
      className="bg-white rounded-2xl p-6 w-full max-w-[360px] shadow-xl"
      style={{
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Header */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        {CONTENT.cardTitle}
      </h3>

      {/* Social Buttons */}
      <div className="space-y-3 mb-4">
        {CONTENT.socialButtons.map((button, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {button.icon === "google" ? (
              <GoogleIcon className="w-5 h-5" />
            ) : (
              <GitHubIcon className="w-5 h-5" />
            )}
            <span className="text-sm font-medium text-gray-700">
              {button.text}
            </span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-sm text-gray-500">{CONTENT.orText}</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {CONTENT.formLabels.email}
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder=""
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {CONTENT.formLabels.password}
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder=""
          />
        </div>

        <button
          className="w-full py-2.5 text-white font-medium rounded-lg transition-colors"
          style={{ backgroundColor: colors.buttonPrimary }}
        >
          {CONTENT.formLabels.continue}
        </button>
      </div>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-gray-500">
        {CONTENT.formLabels.haveAccount}{" "}
        <a
          href="#"
          className="font-medium"
          style={{ color: colors.buttonPrimary }}
        >
          {CONTENT.formLabels.signIn}
        </a>
      </p>

      {/* Secured by Clerk */}
      <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
        <span className="text-xs">{CONTENT.secured}</span>
        <ClerkLogo className="h-3.5 w-auto" />
      </div>
    </div>
  );
}

export default function ClerkComFeature3({
  mode = "light",
}: ClerkComFeature3Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span
            className="text-sm font-medium"
            style={{ color: colors.accent }}
          >
            {CONTENT.label}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-950 max-w-md">
            {CONTENT.title}
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
            {CONTENT.description}
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Features & Code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Feature List */}
            <ul className="space-y-3 text-sm text-gray-600">
              {CONTENT.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>
                    <span className="font-medium text-gray-900">
                      {feature.prefix}
                    </span>{" "}
                    {feature.text}
                    {feature.items.length > 0 && (
                      <span className="ml-1">
                        {feature.items.map((item, idx) => (
                          <span key={idx}>
                            <code
                              className="px-1.5 py-0.5 rounded text-xs font-mono"
                              style={{
                                backgroundColor: "rgba(168, 85, 247, 0.1)",
                                color: colors.accent,
                              }}
                            >
                              {item}
                            </code>
                            {idx < feature.items.length - 1 && (
                              <span className="mx-1">·</span>
                            )}
                          </span>
                        ))}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Link */}
            <a
              href={CONTENT.cta.href}
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors group"
              style={{ color: colors.accent }}
            >
              {CONTENT.cta.text}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Code Block */}
            <div className="mt-6">
              <CodeBlock colors={colors} />
            </div>
          </motion.div>

          {/* Right Column - Sign Up Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <SignUpCard colors={colors} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
