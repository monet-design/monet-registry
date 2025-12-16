"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
    accentLight: "#FFF0EB",
  },
  dark: {
    accent: "#FF6B35",
    accentLight: "#3D2A24",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Paper Plane Icon for Intelligent Queueing
function PaperPlaneIcon({ color }: { color: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 32L56 8L44 56L32 40L8 32Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32 40L40 48"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Globe/Crosshair Icon for DNS Handling
function GlobeIcon({ color }: { color: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="12"
        ry="24"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
      <line x1="8" y1="32" x2="56" y2="32" stroke={color} strokeWidth="3" />
      <line x1="32" y1="8" x2="32" y2="56" stroke={color} strokeWidth="3" />
    </svg>
  );
}

// Signal/WiFi Icon for Deliverability Check
function SignalIcon({ color }: { color: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon shape */}
      <path
        d="M32 8L52 20V44L32 56L12 44V20L32 8Z"
        fill={color}
        fillOpacity="0.15"
        stroke={color}
        strokeWidth="3"
      />
      {/* Inner signal waves */}
      <path
        d="M32 44C36.4183 44 40 40.4183 40 36C40 31.5817 36.4183 28 32 28"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 52C41.9411 52 50 43.9411 50 34C50 24.0589 41.9411 16 32 16"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="32" cy="36" r="4" fill={color} />
    </svg>
  );
}

// Plus Icon
function PlusIcon({ isDark }: { isDark: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke={isDark ? "#6B7280" : "#9CA3AF"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface LoopsSoFeature4Props {
  mode?: "light" | "dark";
}

export default function LoopsSoFeature4({
  mode = "light",
}: LoopsSoFeature4Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const features = [
    {
      title: "Intelligent queueing",
      description:
        "Emails are queued to be sent periodically, helps avoid spam flags.",
      image: "/scraped/loops-so-2025-12-15/images/image-10.png",
      Icon: PaperPlaneIcon,
    },
    {
      title: "Complete DNS Handling",
      description:
        "Emails sent with Loops comply with the strictest deliverability guidelines.",
      image: "/scraped/loops-so-2025-12-15/images/image-11.png",
      Icon: GlobeIcon,
    },
    {
      title: "Check your deliverability",
      description:
        "A free tool to help you see if your deliverability needs work.",
      image: "/scraped/loops-so-2025-12-15/images/image-12.png",
      Icon: SignalIcon,
    },
  ];

  return (
    <section
      className={`relative w-full py-20 ${
        isDark ? "bg-gray-950" : "bg-[#fafaf9]"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            For everyone
          </span>
          <h2
            className={`mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Zero-effort deliverability
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-6 lg:grid-cols-3 sm:w-4/5 mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border ${
                isDark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Plus Icon */}
              <div className="absolute right-4 top-4 z-10">
                <PlusIcon isDark={isDark} />
              </div>

              {/* Card Visual */}
              <div className="relative h-64 flex items-center justify-center">
                <feature.Icon color={colors.accent} />
              </div>

              {/* Card Content */}
              <div className="p-6 pt-0">
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
