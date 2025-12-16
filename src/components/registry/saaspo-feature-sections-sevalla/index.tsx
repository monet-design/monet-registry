"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0B1120",
  accent: "#E8743B",
  accentLight: "rgba(232, 116, 59, 0.15)",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AF",
  iconBorder: "rgba(232, 116, 59, 0.5)",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Users, TrendingUp, Network, GitBranch, Database } from "lucide-react";
import { ReactNode } from "react";
import "./font.css";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface SaaspoFeatureSectionsSevallaProps {
  badge?: string;
  title?: string;
  description?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Unlimited users",
    description:
      "Scale your team without scaling your costs: add unlimited users, and let collaboration flow freely with Sevalla's RBAC controls.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Unlimited resources",
    description:
      "Our usage-based pricing means unlimited resources, no caps, and no excuses - just limitless possibilities for your projects.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Unlimited free traffic",
    description:
      "Via private connections, traffic between applications and databases flows freely, and securely - no hidden fees or speed bumps.",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Unlimited parallel builds",
    description:
      "Build, deploy, repeat. Spin up unlimited concurrent builds, so you can iterate and innovate on your project at lightning speed.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Unlimited DB usage",
    description:
      "We put you in control, with no row limits, no query count limits, and dedicated resources to serve every request of yours.",
  },
];

function FeatureIcon({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
      style={{
        backgroundColor: COLORS.accentLight,
        border: `1px solid ${COLORS.iconBorder}`,
        color: COLORS.accent,
      }}
    >
      {children}
    </div>
  );
}

export default function SaaspoFeatureSectionsSevalla({
  badge = "TRICKERY-FREE",
  title = "Innovate without restrictions",
  description = "Sevalla means freedom — no plans, no feature gates, no seat-based pricing. Pay only for what you use, and nothing more. Scalable and flexible for any project size. Build without boundaries!",
  features = defaultFeatures,
}: SaaspoFeatureSectionsSevallaProps) {
  return (
    <section
      className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span
              className="inline-block px-4 py-2 rounded-md text-sm font-medium tracking-wide"
              style={{
                backgroundColor: COLORS.accent,
                color: COLORS.textPrimary,
              }}
            >
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-light italic mb-6"
            style={{
              color: COLORS.textPrimary,
              fontFamily: "'Instrument Serif', Georgia, serif",
            }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            {description}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <h3
                className="text-lg font-medium mb-3"
                style={{ color: COLORS.textPrimary }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: COLORS.textSecondary }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
