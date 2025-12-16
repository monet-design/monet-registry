"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF5C35",
    accentHover: "#E55A2B",
  },
  dark: {
    accent: "#FF5C35",
    accentHover: "#FF8555",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Icon components
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const UserPlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BranchIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);

const FilterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
  </svg>
);

const LoopsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c1.8 0 3.5-.6 4.9-1.7l-1.5-1.5C12.4 17.6 11.2 18 10 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.2-.4 2.4-1.1 3.4l1.5 1.5c1.1-1.4 1.7-3.1 1.7-4.9-.1-4.4-3.7-8-8.1-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

interface LoopsSoFeature3Props {
  mode?: "light" | "dark";
}

export default function LoopsSoFeature3({
  mode = "light",
}: LoopsSoFeature3Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const loopSteps = [
    {
      step: 1,
      title: "Start with a trigger",
      items: [
        { icon: "user", label: "Contact updated" },
        { icon: "zap", label: "Event fired" },
        { icon: "userplus", label: "Contact added" },
      ],
    },
    {
      step: 2,
      title: "Refine your audience",
      items: [
        { icon: "clock", label: "Timer" },
        { icon: "branch", label: "Branch" },
        { icon: "filter", label: "Audience filter" },
      ],
    },
    {
      step: 3,
      title: "Send your message",
      preview: {
        title: "Welcome to Loops",
        subtitle: "Thanks for signing up for Loops! Let's jump right in...",
        footer: "Email you actually want to read",
      },
    },
  ];

  const audienceSegments = [
    {
      icon: "handshake",
      title: "High engagement",
      description: "Users open emails more than 50% of the time",
    },
    {
      icon: "check",
      title: "Completed onboarding",
      description: "Users finished the Onboarding Loop succesfully",
    },
    {
      icon: "worried",
      title: "Likely to churn",
      description: "Users have yet to meet engagement goals",
    },
  ];

  const getIcon = (iconType: string, className: string) => {
    switch (iconType) {
      case "user":
        return <UserIcon className={className} />;
      case "zap":
        return <ZapIcon className={className} />;
      case "userplus":
        return <UserPlusIcon className={className} />;
      case "clock":
        return <ClockIcon className={className} />;
      case "branch":
        return <BranchIcon className={className} />;
      case "filter":
        return <FilterIcon className={className} />;
      default:
        return <UserIcon className={className} />;
    }
  };

  return (
    <section
      className={`relative w-full py-20 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            Marketers
          </span>
          <h2
            className={`mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Craft a respectful customer journey
          </h2>
        </motion.div>

        {/* Build Your Loop Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-6 rounded-2xl border p-8 ${
            isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
          }`}
        >
          <div className="text-center">
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Build your Loop
            </h3>
            <p
              className={`mx-auto mt-2 max-w-md text-sm leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              From onboarding emails to engaging users who
              <br />
              haven't explored your app, automate it all with Loops.
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium"
              style={{ color: colors.accent }}
            >
              Learn how
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Loop Builder Steps */}
          <div className="relative mt-10">
            {/* Connector Lines */}
            <div className="absolute left-0 right-0 top-6 hidden lg:block">
              <div className="mx-auto flex max-w-3xl justify-between px-[160px]">
                <div className={`h-px flex-1 ${isDark ? "bg-gray-700" : "bg-gray-300"}`} />
                <div className="w-8" />
                <div className={`h-px flex-1 ${isDark ? "bg-gray-700" : "bg-gray-300"}`} />
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {loopSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div
                    className={`h-full rounded-xl border p-5 ${
                      isDark
                        ? "border-gray-700 bg-gray-800/50"
                        : "border-gray-100 bg-gray-50/50"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <span
                        className={`text-sm ${
                          isDark ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {step.step}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>

                    {step.items ? (
                      <div className="space-y-2">
                        {step.items.map((item) => (
                          <div
                            key={item.label}
                            className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 ${
                              isDark
                                ? "border-gray-600 bg-gray-700"
                                : "border-gray-200 bg-white"
                            }`}
                          >
                            {getIcon(
                              item.icon,
                              `h-4 w-4 ${isDark ? "text-gray-400" : "text-gray-500"}`
                            )}
                            <span
                              className={`text-sm ${
                                isDark ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : step.preview ? (
                      <>
                        <div
                          className={`rounded-lg border p-4 ${
                            isDark
                              ? "border-gray-600 bg-gray-700"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: colors.accent }}
                            >
                              <LoopsIcon className="h-5 w-5 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p
                                className={`text-sm font-medium ${
                                  isDark ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {step.preview.title}
                              </p>
                              <p
                                className={`mt-0.5 text-xs leading-relaxed ${
                                  isDark ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                {step.preview.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>
                        <p
                          className={`mt-3 text-center text-xs italic ${
                            isDark ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {step.preview.footer}
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Segment Your Audience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`rounded-2xl border p-8 ${
            isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
          }`}
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left - Description */}
            <div className="lg:py-8">
              <h3
                className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Segment your audience
              </h3>
              <p
                className={`mt-3 max-w-sm text-sm leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Create dynamic audience segments that continually improve over
                time. Integrate multiple data sources to build your source of
                truth.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
                style={{ color: colors.accent }}
              >
                Learn how
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>

            {/* Right - Audience Segments */}
            <div className="space-y-3">
              {audienceSegments.map((segment) => (
                <div
                  key={segment.title}
                  className={`rounded-xl border p-4 ${
                    isDark
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-100 bg-gray-50/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        segment.icon === "handshake"
                          ? "bg-amber-100"
                          : segment.icon === "check"
                            ? "bg-blue-100"
                            : "bg-amber-100"
                      }`}
                    >
                      {segment.icon === "handshake" && (
                        <span className="text-base">🤝</span>
                      )}
                      {segment.icon === "check" && (
                        <svg
                          className="h-5 w-5 text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {segment.icon === "worried" && (
                        <span className="text-base">😟</span>
                      )}
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {segment.title}
                      </p>
                      <p
                        className={`mt-0.5 text-xs ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {segment.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
