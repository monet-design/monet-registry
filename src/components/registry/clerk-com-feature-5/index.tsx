"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#6C47FF", // Clerk purple
    accentHover: "#5835E0",
    labelText: "#A855F7", // Purple-500 for labels
    cardBg: "#FAFAFA",
    cardBorder: "rgba(0, 0, 0, 0.05)",
    avatarBg: "#E5E7EB",
    inviteButtonBg: "#111827",
    inviteButtonHover: "#1F2937",
  },
  dark: {
    accent: "#8B5CF6",
    accentHover: "#7C3AED",
    labelText: "#C084FC",
    cardBg: "#1F2937",
    cardBorder: "rgba(255, 255, 255, 0.1)",
    avatarBg: "#374151",
    inviteButtonBg: "#F3F4F6",
    inviteButtonHover: "#E5E7EB",
  },
} as const;

/**
 * 콘텐츠
 */
const CONTENT = {
  sectionLabel: "Organizations",
  title: "The easy solution to multi-tenancy",
  description:
    "Clerk has all the features you need to onboard and manage the teams and organizations within your multi-tenant application.",
  ctaButton: {
    text: "Explore B2B features",
    href: "/docs/organizations",
  },
  cards: [
    {
      title: "Custom roles and permissions",
      description:
        "Define custom roles and permissions to control who has access to what within an organization.",
    },
    {
      title: "Invite-only",
      description:
        "Allow organization admins to invite new members or configure domain-based auto-join.",
    },
    {
      title: "Organization UI Components",
      description:
        "Empower organization admins to manage their team, invitations, and security settings.",
    },
  ],
} as const;

/**
 * 아바타 데이터
 */
const AVATARS = [
  {
    name: "Admin",
    role: "admin",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Member",
    role: "member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Viewer",
    role: "viewer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Editor",
    role: "editor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClerkComFeature5Props {
  mode?: "light" | "dark";
}

// Play Icon for Button
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
      />
    </svg>
  );
}

// Permissions Card Content
function PermissionsCardContent({ mode = "light" }: { mode?: "light" | "dark" }) {
  const colors = COLORS[mode];

  return (
    <div className="space-y-4">
      {/* User section */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <img
              src={AVATARS[0].image}
              alt="Admin user"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className={`text-sm font-medium ${mode === "dark" ? "text-gray-200" : "text-gray-900"}`}>
              Brody Smith
            </div>
            <div className="text-xs text-gray-500">brody@acme.com</div>
          </div>
          <div
            className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium"
            style={{
              backgroundColor: mode === "dark" ? "rgba(139, 92, 246, 0.2)" : "rgba(108, 71, 255, 0.1)",
              color: colors.accent,
            }}
          >
            Admin
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <img
              src={AVATARS[1].image}
              alt="Member user"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className={`text-sm font-medium ${mode === "dark" ? "text-gray-200" : "text-gray-900"}`}>
              John Miller
            </div>
            <div className="text-xs text-gray-500">john@acme.com</div>
          </div>
          <div
            className="flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
          >
            Member
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <img
              src={AVATARS[2].image}
              alt="Viewer user"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className={`text-sm font-medium ${mode === "dark" ? "text-gray-200" : "text-gray-900"}`}>
              Sarah Wilson
            </div>
            <div className="text-xs text-gray-500">sarah@acme.com</div>
          </div>
          <div
            className="flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
          >
            Guest
          </div>
        </div>
      </div>
    </div>
  );
}

// Invite Card Content
function InviteCardContent({ mode = "light" }: { mode?: "light" | "dark" }) {
  const colors = COLORS[mode];

  return (
    <div className="space-y-4">
      <div>
        <label
          className={`block text-sm font-medium mb-2 ${
            mode === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Email address
        </label>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="email@example.com"
            className={`flex-1 rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${
              mode === "dark"
                ? "border-gray-600 bg-gray-700 text-gray-200 focus:ring-purple-500"
                : "border-gray-200 bg-white text-gray-900 focus:ring-purple-500"
            }`}
          />
          <button
            className="rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
            style={{
              backgroundColor: colors.inviteButtonBg,
            }}
          >
            Invite
          </button>
        </div>
      </div>

      {/* Pending invitations */}
      <div className="space-y-2">
        <div
          className={`flex items-center justify-between rounded-md px-3 py-2 ${
            mode === "dark" ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className={`text-sm ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              alex@company.com
            </span>
          </div>
          <span className="text-xs text-gray-400">Pending</span>
        </div>
        <div
          className={`flex items-center justify-between rounded-md px-3 py-2 ${
            mode === "dark" ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className={`text-sm ${mode === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              mike@company.com
            </span>
          </div>
          <span className="text-xs text-gray-400">Pending</span>
        </div>
      </div>
    </div>
  );
}

// Organization UI Components Card Content
function OrganizationUICardContent({ mode = "light" }: { mode?: "light" | "dark" }) {
  const colors = COLORS[mode];

  return (
    <div className="space-y-3">
      {/* Code snippet */}
      <div
        className={`rounded-lg p-4 font-mono text-sm ${
          mode === "dark" ? "bg-gray-800" : "bg-gray-900"
        }`}
      >
        <div className="space-y-1">
          <div>
            <span className="text-gray-500">{"<"}</span>
            <span className="text-purple-400">OrganizationProfile</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-400">appearance</span>
            <span className="text-gray-500">{"={"}</span>
            <span className="text-orange-300">{"{"}</span>
          </div>
          <div className="pl-8">
            <span className="text-blue-400">elements</span>
            <span className="text-gray-500">{": {"}</span>
          </div>
          <div className="pl-12">
            <span className="text-blue-400">rootBox</span>
            <span className="text-gray-500">{": {"}</span>
          </div>
          <div className="pl-16">
            <span className="text-blue-400">width</span>
            <span className="text-gray-500">{": "}</span>
            <span className="text-green-400">{'"100%"'}</span>
          </div>
          <div className="pl-12">
            <span className="text-gray-500">{"}"}</span>
          </div>
          <div className="pl-8">
            <span className="text-gray-500">{"}"}</span>
          </div>
          <div className="pl-4">
            <span className="text-orange-300">{"}"}</span>
            <span className="text-gray-500">{"}"}</span>
          </div>
          <div>
            <span className="text-gray-500">{"/>"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  title,
  description,
  children,
  mode = "light",
  className = "",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  mode?: "light" | "dark";
  className?: string;
}) {
  const colors = COLORS[mode];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl p-6 ${className}`}
      style={{
        backgroundColor: mode === "dark" ? colors.cardBg : colors.cardBg,
        border: `1px solid ${colors.cardBorder}`,
      }}
    >
      <div className="mb-4">
        <h3
          className={`text-lg font-semibold ${
            mode === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-1 text-sm ${
            mode === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>
      {children}
    </motion.div>
  );
}

export default function ClerkComFeature5({
  mode = "light",
}: ClerkComFeature5Props) {
  const colors = COLORS[mode];

  return (
    <section
      className={`relative w-full py-16 md:py-24 ${
        mode === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side - Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium"
              style={{ color: colors.labelText }}
            >
              {CONTENT.sectionLabel}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${
                mode === "dark" ? "text-white" : "text-gray-950"
              }`}
            >
              {CONTENT.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`mt-4 max-w-lg text-base/6 ${
                mode === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {CONTENT.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <a
                href={CONTENT.ctaButton.href}
                className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-out rounded-md text-sm h-[1.875rem] px-3 text-white"
                style={{
                  backgroundColor: colors.accent,
                  boxShadow: `0 1px rgba(255,255,255,0.07) inset, 0 1px 3px rgba(0,0,0,0.2), 0 0 0 1px ${colors.accent}`,
                }}
              >
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-md bg-gradient-to-b from-white/20 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-md bg-gradient-to-b from-white/10 from-[46%] to-[54%] mix-blend-overlay" />
                {CONTENT.ctaButton.text}
                <PlayIcon className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300" />
                <PlayIcon className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Right side - First card */}
          <FeatureCard
            title={CONTENT.cards[0].title}
            description={CONTENT.cards[0].description}
            mode={mode}
          >
            <PermissionsCardContent mode={mode} />
          </FeatureCard>
        </div>

        {/* Bottom row - Two cards */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <FeatureCard
            title={CONTENT.cards[1].title}
            description={CONTENT.cards[1].description}
            mode={mode}
          >
            <InviteCardContent mode={mode} />
          </FeatureCard>

          <FeatureCard
            title={CONTENT.cards[2].title}
            description={CONTENT.cards[2].description}
            mode={mode}
          >
            <OrganizationUICardContent mode={mode} />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
