"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1d1f21",
    cardBg: "#28292b",
    accent: "#84cc16",
    textPrimary: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.8)",
    textMuted: "rgba(255, 255, 255, 0.5)",
  },
  dark: {
    background: "#1d1f21",
    cardBg: "#28292b",
    accent: "#84cc16",
    textPrimary: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.8)",
    textMuted: "rgba(255, 255, 255, 0.5)",
  },
} as const;

const CONTENT = {
  codeSnippet: 'const launch_time = "08:53 AM";',
  headline: "Supercharge your app instantly,",
  subHeadline: "launch faster, make $",
  description:
    "Login users, process payments and send emails at lightspeed. Spend your time building your startup, not integrating APIs. ShipFast provides you with the boilerplate code you need to launch, FAST.",
  tabs: [
    {
      id: "emails",
      label: "Emails",
      icon: "at",
      title: "Emails",
      features: [
        { text: "Send transactional emails", highlight: false },
        {
          text: "DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)",
          highlight: false,
        },
        { text: "Webhook to receive & forward emails", highlight: false },
        { text: "Time saved: 3 hours", highlight: true },
        { text: "Headaches: 0", highlight: true },
      ],
      integrations: [
        { name: "Mailgun", url: "https://www.mailgun.com/" },
        { name: "Resend", url: "https://resend.com/" },
      ],
    },
    {
      id: "payments",
      label: "Payments",
      icon: "credit-card",
      title: "Payments",
      features: [
        { text: "Stripe & Lemon Squeezy integration", highlight: false },
        { text: "Webhook handlers setup", highlight: false },
        { text: "Subscription management", highlight: false },
        { text: "Time saved: 6 hours", highlight: true },
        { text: "Headaches: 0", highlight: true },
      ],
      integrations: [
        { name: "Stripe", url: "https://stripe.com/" },
        { name: "LemonSqueezy", url: "https://www.lemonsqueezy.com/" },
      ],
    },
    {
      id: "login",
      label: "Login",
      icon: "user",
      title: "Login",
      features: [
        { text: "Magic link & Google OAuth", highlight: false },
        { text: "Protected API routes", highlight: false },
        { text: "Session management", highlight: false },
        { text: "Time saved: 4 hours", highlight: true },
        { text: "Headaches: 0", highlight: true },
      ],
      integrations: [
        { name: "NextAuth", url: "https://next-auth.js.org/" },
      ],
    },
    {
      id: "database",
      label: "Database",
      icon: "database",
      title: "Database",
      features: [
        { text: "MongoDB & Supabase ready", highlight: false },
        { text: "User schema pre-configured", highlight: false },
        { text: "Type-safe queries", highlight: false },
        { text: "Time saved: 2 hours", highlight: true },
        { text: "Headaches: 0", highlight: true },
      ],
      integrations: [
        { name: "MongoDB", url: "https://www.mongodb.com/" },
        { name: "Supabase", url: "https://supabase.com/" },
      ],
    },
    {
      id: "seo",
      label: "SEO",
      icon: "seo",
      title: "SEO",
      features: [
        { text: "Meta tags optimized", highlight: false },
        { text: "Sitemap & robots.txt generation", highlight: false },
        { text: "Open Graph images", highlight: false },
        { text: "Time saved: 2 hours", highlight: true },
        { text: "Headaches: 0", highlight: true },
      ],
      integrations: [],
    },
    {
      id: "style",
      label: "Style",
      icon: "style",
      title: "Style",
      features: [
        { text: "20+ responsive components", highlight: false },
        { text: "Dark mode support", highlight: false },
        { text: "Tailwind CSS + daisyUI", highlight: false },
        { text: "Time saved: 8 hours", highlight: true },
        { text: "Headaches: 0", highlight: true },
      ],
      integrations: [],
    },
    {
      id: "more",
      label: "More",
      icon: "more",
      title: "And more...",
      features: [
        { text: "Error handling built-in", highlight: false },
        { text: "Analytics ready", highlight: false },
        { text: "TypeScript everywhere", highlight: false },
        { text: "Time saved: 5 hours", highlight: true },
        { text: "Headaches: 0", highlight: true },
      ],
      integrations: [],
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, AnimatePresence } from "motion/react";
import { useState, type ReactNode } from "react";

interface ShipfaStFeature3Props {
  mode?: "light" | "dark";
}

type TabId = (typeof CONTENT.tabs)[number]["id"];

// Check icon
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

// Tab icons matching the original design
const TabIcon = ({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) => {
  const icons: Record<string, ReactNode> = {
    at: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
    "credit-card": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
    user: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    database: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    seo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    style: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    more: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };
  return icons[icon] || null;
};

// Mailgun Logo
const MailgunLogo = ({ className }: { className?: string }) => (
  <div
    className={`w-8 h-8 rounded-full flex items-center justify-center ${className}`}
    style={{ backgroundColor: "#f06b66" }}
  >
    <svg
      viewBox="0 0 24 24"
      fill="white"
      className="w-5 h-5"
    >
      <circle cx="12" cy="12" r="4" fill="white" />
      <circle cx="12" cy="12" r="8" fill="none" stroke="white" strokeWidth="2" />
    </svg>
  </div>
);

// Resend Logo
const ResendLogo = ({ className }: { className?: string }) => (
  <div
    className={`w-8 h-8 rounded flex items-center justify-center ${className}`}
    style={{ backgroundColor: "#000000" }}
  >
    <span className="text-white font-bold text-lg">R</span>
  </div>
);

export default function ShipfaStFeature3({
  mode = "dark",
}: ShipfaStFeature3Props) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState<TabId>(CONTENT.tabs[0].id);

  const activeTabData =
    CONTENT.tabs.find((tab) => tab.id === activeTab) || CONTENT.tabs[0];

  return (
    <section className="pt-24 pb-12" style={{ backgroundColor: colors.background }}>
      {/* Header Section */}
      <div className="max-w-3xl mx-auto px-8 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Code snippet */}
          <p
            className="font-mono text-sm font-medium mb-3"
            style={{ color: colors.accent }}
          >
            {CONTENT.codeSnippet}
          </p>

          {/* Headline */}
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 text-white">
            {CONTENT.headline}
            <br />
            {CONTENT.subHeadline}
          </h2>

          {/* Description */}
          <p
            className="leading-relaxed mb-8 lg:text-lg"
            style={{ color: colors.textSecondary }}
          >
            {CONTENT.description}
          </p>
        </motion.div>
      </div>

      {/* Tabs Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl mx-auto px-8 md:px-0 mb-8"
      >
        <div className="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12">
          {CONTENT.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 transition-colors duration-100"
              style={{
                color:
                  activeTab === tab.id ? colors.accent : colors.textMuted,
              }}
            >
              <TabIcon icon={tab.icon} className="w-8 h-8" />
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <div style={{ backgroundColor: colors.cardBg }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto px-12 md:px-0 py-12"
          >
            <div className="max-w-xl">
              {/* Title */}
              <p
                className="font-medium text-lg mb-4"
                style={{ color: colors.textPrimary }}
              >
                {activeTabData.title}
              </p>

              {/* Features List */}
              <ul className="space-y-1 mb-6" style={{ color: colors.textSecondary }}>
                {activeTabData.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                    style={{
                      color: feature.highlight
                        ? colors.accent
                        : colors.textSecondary,
                      fontWeight: feature.highlight ? 500 : 400,
                    }}
                  >
                    <CheckIcon className="w-[18px] h-[18px] shrink-0" />
                    {feature.text}
                  </li>
                ))}
              </ul>

              {/* Integrations */}
              {activeTabData.integrations.length > 0 && (
                <div className="pt-3 flex items-center gap-2 text-sm font-semibold">
                  {activeTabData.integrations.map((integration, index) => (
                    <span key={integration.name} className="flex items-center gap-2">
                      {index > 0 && (
                        <span
                          className="mx-2 text-xs"
                          style={{ color: colors.textMuted }}
                        >
                          OR
                        </span>
                      )}
                      {integration.name === "Mailgun" && <MailgunLogo />}
                      {integration.name === "Resend" && <ResendLogo />}
                      {integration.name !== "Mailgun" &&
                        integration.name !== "Resend" && (
                          <div className="w-8 h-8 rounded bg-gray-600 flex items-center justify-center">
                            <span className="text-white text-xs">
                              {integration.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      <span style={{ color: colors.textPrimary }}>
                        with{" "}
                        <a
                          href={integration.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:no-underline"
                        >
                          {integration.name}
                        </a>
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
