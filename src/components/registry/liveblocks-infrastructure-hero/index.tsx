"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#FFFFFF", // CTA button 배경
    accentText: "#000000", // CTA button 텍스트
    label: "#5C5C5C", // Label 텍스트
    featureBg: "#111111", // Feature cards 배경
    featureDivider: "#2a2a2a", // Feature cards 구분선
    featureText: "#888888", // Feature description 텍스트
  },
  dark: {
    accent: "#FFFFFF",
    accentText: "#000000",
    label: "#5C5C5C",
    featureBg: "#111111",
    featureDivider: "#2a2a2a",
    featureText: "#888888",
  },
} as const;

const IMAGES = {
  hexagon: {
    path: "/registry/liveblocks-infrastructure-hero/hexagon-3d.png",
    alt: "Infrastructure hexagon",
    prompt: `3D rendered hexagonal shape representing infrastructure and connectivity.
Style: Modern, tech-focused, clean 3D illustration
Layout: Single hexagon centered, slightly rotated for 3D effect
Composition: Geometric hexagon with subtle gradients and shadows
Color palette: Dark gray to light gray gradient, professional tech aesthetic
Mood: Stable, reliable, infrastructure-focused
Technical: PNG with transparency, soft shadows, high resolution`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Globe, Settings, TrendingUp, Wrench } from "lucide-react";
import Image from "next/image";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface LiveblocksInfrastructureHeroProps {
  mode?: "light" | "dark";
  label?: string;
  heading?: string;
  ctaText?: string;
  ctaHref?: string;
  features?: FeatureCard[];
  hexagonImageSrc?: string;
}

const defaultFeatures: FeatureCard[] = [
  {
    icon: <Globe className="w-6 h-6" strokeWidth={1.5} />,
    title: "Collaboration infrastructure",
    description: "WebSocket edge infrastructure and reliable connection engine.",
  },
  {
    icon: <Settings className="w-6 h-6" strokeWidth={1.5} />,
    title: "Zero configuration",
    description: "Scale to millions. No complex configuration required.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
    title: "Effortless scaling",
    description: "Built to handle any traffic on your collaborative experiences.",
  },
  {
    icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
    title: "No maintenance required",
    description: "Spend your time building, not maintaining infrastructure.",
  },
];

export default function LiveblocksInfrastructureHero({
  mode = "dark",
  label = "INFRASTRUCTURE",
  heading = "Build, host, and scale\nyour collaborative product",
  ctaText = "Sign up for free",
  ctaHref = "#",
  features = defaultFeatures,
  hexagonImageSrc = IMAGES.hexagon.path,
}: LiveblocksInfrastructureHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative w-full bg-black">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 pt-24 pb-20">
        {/* 3D Hexagon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Image
            src={hexagonImageSrc}
            alt={IMAGES.hexagon.alt}
            width={120}
            height={120}
            className="object-contain"
          />
        </motion.div>

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm tracking-[0.2em] uppercase mb-6"
          style={{ color: colors.label }}
        >
          {label}
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-10 font-serif italic"
          style={{ whiteSpace: "pre-line" }}
        >
          {heading}
        </motion.h1>

        {/* CTA Button */}
        <motion.a
          href={ctaHref}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          style={{ backgroundColor: colors.accent, color: colors.accentText }}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Feature Cards Section */}
      <div className="w-full" style={{ backgroundColor: colors.featureBg }}>
        <div className="max-w-6xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x"
            style={{ borderColor: colors.featureDivider }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-8"
              >
                <div className="text-white mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.featureText }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
