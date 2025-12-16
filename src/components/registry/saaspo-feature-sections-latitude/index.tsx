"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#f7f7f7",
    titleMain: "#1a1a1a",
    titleItalic: "#6b6b6b",
    featureTitle: "#1a1a1a",
    bodyText: "#6b6b6b",
    divider: "#e0e0e0",
    starIcon: "#c0c0c0",
  },
  dark: {
    background: "#1a1a1a",
    titleMain: "#f7f7f7",
    titleItalic: "#a0a0a0",
    featureTitle: "#f7f7f7",
    bodyText: "#a0a0a0",
    divider: "#3a3a3a",
    starIcon: "#5a5a5a",
  },
} as const;

/**
 * 기능 항목 데이터
 */
const FEATURES = [
  {
    icon: "server",
    title: "THE BEST OF BOTH",
    description:
      "We bridge the gap between cloud and on-premise deployments. You get machines, but also a simple platform to manage them.",
  },
  {
    icon: "globe",
    title: "TRULY GLOBAL",
    description:
      "Connect your users globally with unmatched speed and low latency. Latitude.sh delivers world-class carrier-grade network.",
  },
  {
    icon: "rack",
    title: "EASY TO DEPLOY",
    description:
      "And use. Deploy a physical server in just a few seconds and easily manage your infra via the dashboard or API.",
  },
  {
    icon: "dollar",
    title: "WON'T BREAK THE BANK",
    description:
      "Enjoy a premium bare metal platform that doesn't cost the earth. Think flexible, fair, cost-effective pricing plans.",
  },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Server, Globe, HardDrive, DollarSign, Sparkles } from "lucide-react";

interface SaaspoFeatureSectionsLatitudeProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

const IconMap: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  server: Server,
  globe: Globe,
  rack: HardDrive,
  dollar: DollarSign,
};

function StarIcon({ className }: { className?: string }) {
  return (
    <Sparkles className={className} strokeWidth={1.5} />
  );
}

export default function SaaspoFeatureSectionsLatitude({
  mode = "light",
  title = "MORE ON-PREM,",
  subtitle = "LESS TRADE-OFFS",
  features = FEATURES as unknown as Array<{
    icon: string;
    title: string;
    description: string;
  }>,
}: SaaspoFeatureSectionsLatitudeProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight"
            style={{ color: colors.titleMain }}
          >
            {title}
          </h2>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight italic"
            style={{ color: colors.titleItalic }}
          >
            {subtitle}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Container with border */}
          <div
            className="rounded-lg border p-6 md:p-8 lg:p-10"
            style={{
              borderColor: colors.divider,
              backgroundColor: mode === "light" ? "#ffffff" : "#242424",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {features.map((feature, index) => {
                const IconComponent = IconMap[feature.icon] || Server;
                const isLast = index === features.length - 1;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className={`relative px-4 md:px-6 py-6 ${
                      !isLast
                        ? "lg:border-r border-b lg:border-b-0 md:border-b md:odd:border-r md:even:border-r-0 lg:odd:border-r lg:even:border-r"
                        : ""
                    }`}
                    style={{ borderColor: colors.divider }}
                  >
                    {/* Icon */}
                    <div
                      className="mb-6 w-14 h-14 flex items-center justify-center rounded-lg"
                      style={{
                        backgroundColor:
                          mode === "light" ? "#f0f0f0" : "#3a3a3a",
                      }}
                    >
                      <IconComponent
                        className="w-7 h-7"
                        style={{ color: colors.bodyText }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-base md:text-lg font-extrabold uppercase italic mb-3 tracking-tight"
                      style={{ color: colors.featureTitle }}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: colors.bodyText }}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Decorative Stars */}
          <div
            className="absolute -bottom-3 left-4 md:left-8"
            style={{ color: colors.starIcon }}
          >
            <StarIcon className="w-6 h-6" />
          </div>
          <div
            className="absolute -bottom-3 right-4 md:right-8"
            style={{ color: colors.starIcon }}
          >
            <StarIcon className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
