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
    background: "#ffffff",
    text: "#6b7280", // gray-500
    logoColor: "#111111",
  },
  dark: {
    background: "#0a0a0a",
    text: "#9ca3af", // gray-400
    logoColor: "#ffffff",
  },
} as const;

/**
 * 컨텐츠 데이터
 */
const CONTENT = {
  heading: "We partner with the world's leading\norganizations to advance their industries:",
} as const;

/**
 * 로고 데이터
 */
const LOGOS = [
  { name: "Allstate", type: "allstate" },
  { name: "AMC Networks", type: "amc" },
  { name: "Gut", type: "gut" },
  { name: "Legendary", type: "legendary" },
  { name: "Lionsgate", type: "lionsgate" },
  { name: "Ubisoft", type: "ubisoft" },
] as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Allstate Logo
const AllstateLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 140 32" fill={color} className="h-6 md:h-7">
    {/* Allstate hands logo */}
    <g>
      {/* Hands symbol */}
      <path d="M16 4c-3.3 0-6.3 1.3-8.5 3.5S4 12.7 4 16s1.3 6.3 3.5 8.5S12.7 28 16 28s6.3-1.3 8.5-3.5S28 19.3 28 16s-1.3-6.3-3.5-8.5S19.3 4 16 4zm0 22c-5.5 0-10-4.5-10-10S10.5 6 16 6s10 4.5 10 10-4.5 10-10 10z" />
      <path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
      <circle cx="16" cy="16" r="3" />
    </g>
    {/* Text */}
    <text x="36" y="22" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="400">
      Allstate
    </text>
  </svg>
);

// AMC Networks Logo
const AMCLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 140 24" fill={color} className="h-4 md:h-5">
    <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" letterSpacing="2">
      AMC NETWORKS
    </text>
  </svg>
);

// Gut Logo (script style)
const GutLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 80 40" fill={color} className="h-8 md:h-10">
    <text
      x="0"
      y="32"
      fontFamily="Georgia, serif"
      fontSize="36"
      fontWeight="700"
      fontStyle="italic"
    >
      gut
    </text>
  </svg>
);

// Legendary Logo
const LegendaryLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 160 24" fill={color} className="h-4 md:h-5">
    <g>
      {/* Star/compass symbol */}
      <path d="M10 12L6 8l4-4 4 4-4 4zm0 0l4 4 4-4-4-4-4 4z" />
      <text x="24" y="18" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" letterSpacing="3">
        LEGENDARY
      </text>
    </g>
  </svg>
);

// Lionsgate Logo
const LionsgateLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 130 24" fill={color} className="h-4 md:h-5">
    <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" letterSpacing="3">
      LIONSGATE
    </text>
  </svg>
);

// Ubisoft Logo
const UbisoftLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 48" fill={color} className="h-8 md:h-10">
    <g>
      {/* Swirl symbol */}
      <circle cx="24" cy="20" r="16" fill="none" stroke={color} strokeWidth="3" />
      <path d="M24 8c2 0 4 0.5 5.5 1.5L24 20l6-10.5c3 2 5 5 5.5 8.5" fill="none" stroke={color} strokeWidth="2" />
      {/* Text */}
      <text x="0" y="44" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="500" letterSpacing="1">
        UBISOFT
      </text>
    </g>
  </svg>
);

interface RunwaymlComLogoCloud1Props {
  mode?: "light" | "dark";
  heading?: string;
  logos?: Array<{ name: string; type: string }>;
}

export default function RunwaymlComLogoCloud1({
  mode = "light",
  heading = CONTENT.heading,
  logos = [...LOGOS],
}: RunwaymlComLogoCloud1Props) {
  const colors = COLORS[mode];

  const renderLogo = (type: string, color: string) => {
    switch (type) {
      case "allstate":
        return <AllstateLogo color={color} />;
      case "amc":
        return <AMCLogo color={color} />;
      case "gut":
        return <GutLogo color={color} />;
      case "legendary":
        return <LegendaryLogo color={color} />;
      case "lionsgate":
        return <LionsgateLogo color={color} />;
      case "ubisoft":
        return <UbisoftLogo color={color} />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative w-full py-12 md:py-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl whitespace-pre-line text-center text-base md:text-lg"
          style={{
            color: colors.text,
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
          }}
        >
          {heading}
        </motion.p>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14 lg:gap-x-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="flex items-center justify-center"
            >
              {renderLogo(logo.type, colors.logoColor)}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
