"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F1ED",
    cardBackground: "#FDFCFB",
    titleDark: "#2D2522",
    titleItalic: "#C9B9A8",
    textMuted: "#7D7673",
    gradientStart: "#B82E3B",
    gradientEnd: "#D94650",
    encryptedText: "#D4A5A8",
    encryptedHighlight: "#E85B5B",
    badge: "#E8E4E0",
    badgeText: "#6B6562",
  },
  dark: {
    background: "#1A1614",
    cardBackground: "#252220",
    titleDark: "#F5F1ED",
    titleItalic: "#A89888",
    textMuted: "#9A9694",
    gradientStart: "#B82E3B",
    gradientEnd: "#D94650",
    encryptedText: "#D4A5A8",
    encryptedHighlight: "#E85B5B",
    badge: "#3A3532",
    badgeText: "#A8A4A0",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  coachPortrait: {
    path: "/registry/saaspo-feature-sections-delphi/coach-portrait.png",
    alt: "Heather Monahan Coach",
    prompt: `Professional female coach portrait photo. Blonde wavy hair, confident smile, elegant attire. Deep red gradient background. High-quality portrait style.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface FeatureItem {
  title: string;
  description: string;
}

interface SaaspoFeatureSectionsDelphiProps {
  mode?: "light" | "dark";
  badge?: string;
  titleLine1?: string;
  titleLine2?: string;
  coachName?: string;
  coachRole?: string;
  coachImage?: string;
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    title: "Built to protect your legacy",
    description:
      "Your Delphi maintains integrity over time. Your authenticity stays intact, trusted by your audience now—and forever.",
  },
  {
    title: "Complete ownership",
    description:
      "We believe your mind is your most precious asset. It's securely stored, fully encrypted, and never shared or sold.",
  },
  {
    title: "Privacy first, always",
    description:
      "We uphold strict privacy standards. Delphi keeps your conversations private and your audience protected.",
  },
  {
    title: "You're in control",
    description:
      "Your Digital Mind speaks only your words. Delphi never improvises without your consent.",
  },
];

// Encrypted strings for decoration
const encryptedStrings = [
  "C3V0B9FP2E4CL5C0DJ2EHNFT2LH0MM2C9YCE",
  "2I0C7CB2I9CP4FP3CL0CE0CT2CH2CL0CT0CT4",
  "CI2CTBE9CPFJC0M2P3H4O0CNCI2CTBE9CPFJC",
  "0M2P3H400C3P4V0ME2PFJDM0HLBT9ZCTBEH",
];

export default function SaaspoFeatureSectionsDelphi({
  mode = "light",
  badge = "Trust",
  titleLine1 = "Your mind",
  titleLine2 = "is Yours.",
  coachName = "Heather Monahan",
  coachRole = "Coach",
  coachImage,
  features = defaultFeatures,
}: SaaspoFeatureSectionsDelphiProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section
      className="relative w-full py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: colors.badge,
              color: colors.badgeText,
            }}
          >
            {badge}
          </span>

          {/* Title */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight"
            style={{ color: colors.titleDark }}
          >
            {titleLine1}
          </h2>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight"
            style={{ color: colors.titleItalic }}
          >
            {titleLine2}
          </h2>
        </motion.div>

        {/* Main Grid: Features + Profile Card */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Features 0 & 2 */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {[features[0], features[2]].map((feature, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl p-6 lg:p-8 flex-1"
                style={{ backgroundColor: colors.cardBackground }}
                variants={itemVariants}
              >
                <h3
                  className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-8"
                  style={{ color: colors.titleDark }}
                >
                  {feature?.title}
                </h3>
                <p
                  className="text-sm lg:text-base leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {feature?.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Profile Card */}
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            style={{
              background: `linear-gradient(180deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
            }}
            variants={itemVariants}
          >
            {/* Profile Header */}
            <div className="text-center pt-6 pb-2">
              <h4 className="text-white font-semibold text-lg">{coachName}</h4>
              <p className="text-white/70 text-sm">{coachRole}</p>
            </div>

            {/* Profile Image */}
            <div className="relative h-64 lg:h-72 flex items-end justify-center">
              {coachImage ? (
                <Image
                  src={coachImage}
                  alt={IMAGES.coachPortrait.alt}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                  {/* Placeholder silhouette */}
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="100" cy="70" r="45" fill="rgba(255,255,255,0.3)" />
                    <path
                      d="M100 125C60 125 30 155 30 200H170C170 155 140 125 100 125Z"
                      fill="rgba(255,255,255,0.3)"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Encrypted Strings */}
            <div className="px-4 pb-6 space-y-1">
              {encryptedStrings.map((str, idx) => (
                <p
                  key={idx}
                  className="text-xs font-mono tracking-wider text-center break-all"
                  style={{
                    color: idx % 2 === 0 ? colors.encryptedText : colors.encryptedHighlight,
                    opacity: 0.8 - idx * 0.1,
                  }}
                >
                  {str}
                </p>
              ))}
            </div>

            {/* Bottom fade gradient */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{
                background: `linear-gradient(to top, ${colors.background}, transparent)`,
              }}
            />
          </motion.div>

          {/* Right Column - Features 1 & 3 */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {[features[1], features[3]].map((feature, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl p-6 lg:p-8 flex-1"
                style={{ backgroundColor: colors.cardBackground }}
                variants={itemVariants}
              >
                <h3
                  className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-8"
                  style={{ color: colors.titleDark }}
                >
                  {feature?.title}
                </h3>
                <p
                  className="text-sm lg:text-base leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {feature?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
