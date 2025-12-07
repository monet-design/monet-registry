"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    cardBackground: "#F9FAFB",
    cardBorder: "#E5E7EB",
    titleText: "#111827",
    bodyText: "#6B7280",
    labelText: "#6B7280",
    iconBackground: "#F3F4F6",
    iconColor: "#374151",
  },
  dark: {
    background: "#0C0C0D",
    cardBackground: "#18181B",
    cardBorder: "#27272A",
    titleText: "#FFFFFF",
    bodyText: "#A1A1AA",
    labelText: "#71717A",
    iconBackground: "#27272A",
    iconColor: "#A1A1AA",
  },
} as const;

/**
 * 콘텐츠
 */
const CONTENT = {
  label: "HIGH-CONVERSION AUTH",
  title: "Everything you need for authentication",
  description:
    "Feel free to authenticate users in any way you want. Clerk supports the most common authentication methods across the industry.",
  features: [
    {
      icon: "session",
      title: "Session Management",
      description:
        "Use our SDK to retrieve user sessions and monitor activity across devices. Allow users to manage their own active sessions.",
    },
    {
      icon: "mfa",
      title: "Multi-factor auth",
      description:
        "Provide passwordless sign-in or sign-up using one-time codes delivered via SMS, email, or authenticator apps.",
    },
    {
      icon: "social",
      title: "Social Sign-On",
      description:
        "Enable sign-up via social accounts. Clerk supports 20+ providers including Google, GitHub, Apple, and Microsoft.",
    },
    {
      icon: "email",
      title: "Email Sign-On",
      description:
        "Allow users to sign in using a code sent to their email address, or use a traditional email and password combination.",
    },
    {
      icon: "bot",
      title: "Bot Protection",
      description:
        "Use CAPTCHA or invisible challenges to block bot sign-ups and attacks without compromising user experience.",
    },
    {
      icon: "passkey",
      title: "Passkeys",
      description:
        "Allow users to sign in using WebAuthn passkeys stored on their device, enabling passwordless authentication.",
    },
  ],
  exploreLink: {
    text: "Explore user authentication",
    href: "#",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  MonitorSmartphone,
  ShieldCheck,
  Users,
  Mail,
  Bot,
  KeyRound,
  ArrowRight
} from "lucide-react";

interface ClerkComFeature4Props {
  mode?: "light" | "dark";
}

// Icon components mapping
const IconComponents = {
  session: MonitorSmartphone,
  mfa: ShieldCheck,
  social: Users,
  email: Mail,
  bot: Bot,
  passkey: KeyRound,
} as const;

export default function ClerkComFeature4({
  mode = "dark",
}: ClerkComFeature4Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 md:py-28"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: colors.labelText }}
          >
            {CONTENT.label}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6"
            style={{ color: colors.titleText }}
          >
            {CONTENT.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: colors.bodyText }}
          >
            {CONTENT.description}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={CONTENT.exploreLink.href}
            className="inline-flex items-center gap-2 text-sm font-medium mt-6 group"
            style={{ color: colors.bodyText }}
          >
            {CONTENT.exploreLink.text}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CONTENT.features.map((feature, index) => {
            const IconComponent = IconComponents[feature.icon as keyof typeof IconComponents];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="rounded-2xl p-6 md:p-8 border transition-colors hover:border-opacity-70"
                style={{
                  backgroundColor: colors.cardBackground,
                  borderColor: colors.cardBorder,
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: colors.iconBackground }}
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: colors.iconColor }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: colors.titleText }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.bodyText }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
