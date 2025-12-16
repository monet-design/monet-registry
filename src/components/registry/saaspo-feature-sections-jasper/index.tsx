"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Primary navy (버튼, 제목 등)
    navy: "#00053a",
    navyHover: "#0a0f4a",
    // Background
    background: "#ffffff",
    // Card backgrounds
    canvasBg: "#e7ffe0",
    canvasAccent: "#4ade80",
    studioBg: "#fdeae1",
    studioAccent: "#f87171",
    jasperIqBg: "#ceebfd",
    jasperIqAccent: "#0ea5e9",
    trustBg: "#fef3a0",
    trustAccent: "#eab308",
  },
  dark: {
    navy: "#60a5fa",
    navyHover: "#3b82f6",
    background: "#0f172a",
    canvasBg: "#14532d",
    canvasAccent: "#22c55e",
    studioBg: "#7f1d1d",
    studioAccent: "#ef4444",
    jasperIqBg: "#0c4a6e",
    jasperIqAccent: "#38bdf8",
    trustBg: "#713f12",
    trustAccent: "#facc15",
  },
} as const;

/**
 * 콘텐츠 데이터
 */
type FeatureColorKey = "canvas" | "studio" | "jasperIq" | "trust";

interface FeatureItem {
  title: string;
  description: string;
  colorKey: FeatureColorKey;
}

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    title: "Canvas",
    description: "Plan, create, and collaborate—intuitively and at scale.",
    colorKey: "canvas",
  },
  {
    title: "Studio",
    description: "Build custom, agentic workflows—fast.",
    colorKey: "studio",
  },
  {
    title: "Jasper IQ",
    description: "Maintain quality & authenticity with a rich context hub.",
    colorKey: "jasperIq",
  },
  {
    title: "Trust",
    description: "Stay safe, stay on-brand, and stay in control.",
    colorKey: "trust",
  },
];

const CONTENT = {
  badge: "The Jasper Platform",
  title: "The agentic platform that transforms marketing",
  description:
    "Jasper is the industry's first intelligent, intuitive workspace for marketers. Powered by intelligent Agents, Jasper helps redefine marketing processes while providing a rich context layer, ensuring content is resonant and compliant – even at scale.",
  ctaText: "Explore The Platform",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

// Custom illustration components for each feature card
function CanvasIllustration() {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Grid pattern */}
      <defs>
        <pattern id="canvasGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22c55e" strokeWidth="0.5" strokeOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="150" fill="url(#canvasGrid)" />

      {/* Main document card */}
      <rect x="60" y="30" width="60" height="75" rx="4" fill="#4ade80" stroke="#16a34a" strokeWidth="2" />
      <rect x="68" y="38" width="44" height="4" rx="2" fill="#16a34a" />
      <rect x="68" y="46" width="30" height="4" rx="2" fill="#16a34a" />
      <rect x="68" y="54" width="44" height="20" rx="2" fill="#bbf7d0" />
      <rect x="68" y="78" width="44" height="4" rx="2" fill="#16a34a" />
      <rect x="68" y="86" width="30" height="4" rx="2" fill="#16a34a" />

      {/* Floating elements */}
      <rect x="25" y="55" width="30" height="40" rx="3" fill="#86efac" stroke="#22c55e" strokeWidth="1.5" />
      <rect x="30" y="62" width="20" height="3" rx="1" fill="#22c55e" />
      <rect x="30" y="68" width="15" height="3" rx="1" fill="#22c55e" />

      {/* Cursor */}
      <path d="M140 45 L148 60 L142 60 L145 72 L138 72 L135 60 L130 60 Z" fill="#16a34a" />

      {/* Sparkles */}
      <path d="M155 30 L157 35 L162 37 L157 39 L155 44 L153 39 L148 37 L153 35 Z" fill="#22c55e" />
      <circle cx="35" cy="40" r="3" fill="#22c55e" />
      <path d="M50 110 L52 115 L57 117 L52 119 L50 124 L48 119 L43 117 L48 115 Z" fill="#16a34a" />
    </svg>
  );
}

function StudioIllustration() {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Grid pattern */}
      <defs>
        <pattern id="studioGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f87171" strokeWidth="0.5" strokeOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="150" fill="url(#studioGrid)" />

      {/* Workflow nodes */}
      <rect x="20" y="50" width="35" height="25" rx="4" fill="#fecaca" stroke="#f87171" strokeWidth="2" />
      <rect x="26" y="56" width="23" height="4" rx="1" fill="#f87171" />
      <rect x="26" y="63" width="16" height="4" rx="1" fill="#f87171" />

      {/* Arrows */}
      <path d="M55 62 L75 62" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M115 62 L135 62" stroke="#f87171" strokeWidth="2" />

      {/* Middle node (triangle) */}
      <path d="M90 45 L115 62 L90 80 Z" fill="#f87171" />

      {/* End node */}
      <circle cx="155" cy="62" r="15" fill="#fecaca" stroke="#f87171" strokeWidth="2" />
      <circle cx="155" cy="62" r="6" fill="#f87171" />

      {/* Branch down */}
      <path d="M90 80 L90 100 L120 100" stroke="#f87171" strokeWidth="2" />
      <rect x="120" y="88" width="35" height="25" rx="4" fill="#fecaca" stroke="#f87171" strokeWidth="2" />
      <rect x="126" y="94" width="23" height="4" rx="1" fill="#f87171" />
      <rect x="126" y="101" width="16" height="4" rx="1" fill="#f87171" />

      {/* Decorative elements */}
      <path d="M165 35 L168 40 L173 42 L168 44 L165 49 L162 44 L157 42 L162 40 Z" fill="#ef4444" opacity="0.7" />
      <path d="M40 110 L43 115 L48 117 L43 119 L40 124 L37 119 L32 117 L37 115 Z" fill="#f87171" opacity="0.7" />
    </svg>
  );
}

function JasperIqIllustration() {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Grid pattern */}
      <defs>
        <pattern id="iqGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="150" fill="url(#iqGrid)" />

      {/* Atom orbits */}
      <ellipse cx="100" cy="75" rx="55" ry="20" stroke="#0284c7" strokeWidth="2" fill="none" transform="rotate(-30 100 75)" />
      <ellipse cx="100" cy="75" rx="55" ry="20" stroke="#0284c7" strokeWidth="2" fill="none" transform="rotate(30 100 75)" />
      <ellipse cx="100" cy="75" rx="55" ry="20" stroke="#0284c7" strokeWidth="2" fill="none" transform="rotate(90 100 75)" />

      {/* Center nucleus */}
      <circle cx="100" cy="75" r="12" fill="#0ea5e9" />
      <circle cx="100" cy="75" r="6" fill="#bae6fd" />

      {/* Orbital electrons */}
      <circle cx="60" cy="55" r="5" fill="#0284c7" />
      <circle cx="140" cy="95" r="5" fill="#0284c7" />
      <circle cx="100" cy="35" r="5" fill="#0284c7" />

      {/* Decorative arrows */}
      <path d="M155 30 L165 30 L165 40" stroke="#0ea5e9" strokeWidth="2" fill="none" />
      <path d="M45 110 L35 110 L35 100" stroke="#0ea5e9" strokeWidth="2" fill="none" />

      {/* Triangle marker */}
      <path d="M160 45 L170 55 L150 55 Z" fill="#38bdf8" opacity="0.6" />
    </svg>
  );
}

function TrustIllustration() {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Grid pattern */}
      <defs>
        <pattern id="trustGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#eab308" strokeWidth="0.5" strokeOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="150" fill="url(#trustGrid)" />

      {/* Central figure/head */}
      <circle cx="100" cy="70" r="35" fill="#fde047" />
      <circle cx="100" cy="65" r="25" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />

      {/* Eyes */}
      <circle cx="90" cy="62" r="4" fill="#ca8a04" />
      <circle cx="110" cy="62" r="4" fill="#ca8a04" />

      {/* Smile */}
      <path d="M88 75 Q100 85 112 75" stroke="#ca8a04" strokeWidth="2" fill="none" />

      {/* Shield badge */}
      <path d="M135 45 L145 50 L145 65 L140 75 L130 75 L125 65 L125 50 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
      <path d="M132 57 L137 62 L143 52" stroke="#ca8a04" strokeWidth="2" fill="none" />

      {/* Stars/sparkles */}
      <path d="M60 40 L62 45 L67 47 L62 49 L60 54 L58 49 L53 47 L58 45 Z" fill="#eab308" />
      <path d="M155 90 L157 95 L162 97 L157 99 L155 104 L153 99 L148 97 L153 95 Z" fill="#ca8a04" />

      {/* Decorative elements */}
      <rect x="45" y="85" width="25" height="15" rx="7" fill="#fef08a" stroke="#eab308" strokeWidth="1.5" />
      <rect x="130" y="95" width="25" height="15" rx="7" fill="#fef08a" stroke="#eab308" strokeWidth="1.5" />
    </svg>
  );
}

interface SaaspoFeatureSectionsJasperProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  features?: FeatureItem[];
  onCtaClick?: () => void;
  onFeatureClick?: (index: number) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function SaaspoFeatureSectionsJasper({
  mode = "light",
  badge = CONTENT.badge,
  title = CONTENT.title,
  description = CONTENT.description,
  ctaText = CONTENT.ctaText,
  features = DEFAULT_FEATURES,
  onCtaClick,
  onFeatureClick,
}: SaaspoFeatureSectionsJasperProps) {
  const colors = COLORS[mode];

  const getCardStyles = (colorKey: FeatureColorKey) => {
    switch (colorKey) {
      case "canvas":
        return { bg: colors.canvasBg, accent: colors.canvasAccent };
      case "studio":
        return { bg: colors.studioBg, accent: colors.studioAccent };
      case "jasperIq":
        return { bg: colors.jasperIqBg, accent: colors.jasperIqAccent };
      case "trust":
        return { bg: colors.trustBg, accent: colors.trustAccent };
    }
  };

  const getIllustration = (colorKey: FeatureColorKey) => {
    switch (colorKey) {
      case "canvas":
        return <CanvasIllustration />;
      case "studio":
        return <StudioIllustration />;
      case "jasperIq":
        return <JasperIqIllustration />;
      case "trust":
        return <TrustIllustration />;
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.p
            className="text-sm font-medium tracking-[0.2em] uppercase mb-6"
            style={{ color: colors.navy }}
            variants={itemVariants}
          >
            {badge}
          </motion.p>

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{
              color: colors.navy,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
            variants={itemVariants}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-full transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: colors.navy }}
            onClick={onCtaClick}
            whileHover={{ backgroundColor: colors.navyHover }}
            variants={itemVariants}
          >
            {ctaText}
          </motion.button>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const cardStyles = getCardStyles(feature.colorKey);
            return (
              <motion.div
                key={index}
                className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: cardStyles.bg }}
                variants={cardVariants}
                onClick={() => onFeatureClick?.(index)}
              >
                {/* Card Title */}
                <div className="px-6 pt-6">
                  <h3
                    className="text-2xl md:text-3xl font-bold"
                    style={{
                      color: colors.navy,
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Illustration Area */}
                <div className="h-40 md:h-48 px-4">
                  {getIllustration(feature.colorKey)}
                </div>

                {/* Description and Arrow */}
                <div className="px-6 pb-6 flex items-end justify-between gap-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug flex-1">
                    {feature.description}
                  </p>
                  <ArrowRight
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: colors.navy }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Import Google Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}
