"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0f1419",
  cardBackground: "#1c2127",
  titleText: "#e8e8e8",
  descriptionText: "#8b929a",
  badgeBackground: "#3d4349",
  badgeText: "#e8e8e8",
  badgeDot: "#4ade80",
  icons: {
    review: "#ff6b4a",
    draft: "#4ade80",
    ask: "#3b82f6",
    benchmarks: "#facc15",
    associate: "#a855f7",
  },
} as const;

/**
 * Feature 데이터
 */
const FEATURES = [
  {
    id: "review",
    title: "Review",
    description: "Redline contracts and catch risks",
    icon: "review",
    isNew: false,
  },
  {
    id: "draft",
    title: "Draft",
    description: "Draft from scratch or saved libraries",
    icon: "draft",
    isNew: false,
  },
  {
    id: "ask",
    title: "Ask",
    description: "Quick answers to complex questions",
    icon: "ask",
    isNew: false,
  },
  {
    id: "benchmarks",
    title: "Benchmarks",
    description: "Compare contracts to industry standards",
    icon: "benchmarks",
    isNew: false,
  },
  {
    id: "associate",
    title: "Associate",
    description: "Multi-step document workflows",
    icon: "associate",
    isNew: true,
  },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

// Custom Icons as SVG components
const ReviewIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 10C20 10 14 16 14 24C14 32 20 42 28 46C28 38 34 32 40 28C34 24 28 18 28 10Z"
      stroke={COLORS.icons.review}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const DraftIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 12L18 44M28 12L38 44M22 32H34"
      stroke={COLORS.icons.draft}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AskIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="12"
      y="20"
      width="32"
      height="16"
      rx="8"
      fill={COLORS.icons.ask}
    />
  </svg>
);

const BenchmarksIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 28C16 20 22 36 28 28C34 20 40 36 46 28"
      stroke={COLORS.icons.benchmarks}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AssociateIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="28"
      cy="28"
      rx="14"
      ry="8"
      stroke={COLORS.icons.associate}
      strokeWidth="4"
      transform="rotate(-30 28 28)"
    />
  </svg>
);

const IconMap: Record<string, React.FC> = {
  review: ReviewIcon,
  draft: DraftIcon,
  ask: AskIcon,
  benchmarks: BenchmarksIcon,
  associate: AssociateIcon,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  isNew?: boolean;
  index: number;
}

function FeatureCard({
  title,
  description,
  icon,
  isNew = false,
  index,
}: FeatureCardProps) {
  const IconComponent = IconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center rounded-2xl px-6 py-8 text-center"
      style={{ backgroundColor: COLORS.cardBackground }}
    >
      {isNew && (
        <div
          className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
          style={{
            backgroundColor: COLORS.badgeBackground,
            color: COLORS.badgeText,
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: COLORS.badgeDot }}
          />
          New
        </div>
      )}

      <div className="mb-4">{IconComponent && <IconComponent />}</div>

      <h3
        className="mb-2 text-lg font-semibold"
        style={{ color: COLORS.titleText }}
      >
        {title}
      </h3>

      <p
        className="text-sm leading-relaxed"
        style={{ color: COLORS.descriptionText }}
      >
        {description}
      </p>
    </motion.div>
  );
}

interface SaaspoFeatureSectionsSpellbookProps {
  title?: string;
  features?: typeof FEATURES;
}

export default function SaaspoFeatureSectionsSpellbook({
  title = "The dark ages of legal\ndrudgery are behind us",
  features = FEATURES,
}: SaaspoFeatureSectionsSpellbookProps) {
  const titleLines = title.split("\n");

  return (
    <section
      className="relative w-full px-4 py-16 md:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2
            className="text-4xl italic leading-tight md:text-5xl lg:text-6xl"
            style={{ color: COLORS.titleText, fontFamily: "'Instrument Serif', serif" }}
          >
            {titleLines.map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              isNew={feature.isNew}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
