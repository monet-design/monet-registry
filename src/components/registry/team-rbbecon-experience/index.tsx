"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#004579",
  headlineText: "#ffffff",
  bodyText: "#70b1e2",
  buttonText: "#ffffff",
  buttonBorder: "rgba(255, 255, 255, 0.3)",
  globeDot: "#1a5a8a",
  globeDotLight: "#2a7ab0",
  markerRing: "#1b5c8d",
  markerCenter: "#ffffff",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useMemo } from "react";
import "./font.css";

interface TeamRbbeconExperienceProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  onContactClick?: () => void;
  stats?: {
    offices?: number;
    jurisdictions?: number;
    languages?: number;
  };
}

// Generate dots for globe visualization
function generateGlobeDots() {
  const dots: { x: number; y: number; z: number; size: number }[] = [];
  const radius = 200;

  // Generate points on sphere surface
  for (let lat = -80; lat <= 80; lat += 8) {
    const latRad = (lat * Math.PI) / 180;
    const circumference = Math.cos(latRad) * radius;
    const dotsInRing = Math.max(1, Math.floor(circumference / 12));

    for (let i = 0; i < dotsInRing; i++) {
      const lon = (i / dotsInRing) * 360;
      const lonRad = (lon * Math.PI) / 180;

      const x = radius * Math.cos(latRad) * Math.cos(lonRad);
      const y = radius * Math.sin(latRad);
      const z = radius * Math.cos(latRad) * Math.sin(lonRad);

      // Only show dots on front half (z > -50)
      if (z > -80) {
        dots.push({
          x: x + 250,
          y: y + 250,
          z,
          size: Math.max(1, 2 + z / 100),
        });
      }
    }
  }

  return dots;
}

// Location markers for offices
const LOCATION_MARKERS = [
  { x: 320, y: 180, label: "Europe" },
  { x: 380, y: 280, label: "Middle East" },
  { x: 280, y: 380, label: "South America" },
];

function DottedGlobe() {
  const dots = useMemo(() => generateGlobeDots(), []);

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 500 500" className="w-full h-full">
        {/* Globe dots */}
        {dots.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={dot.size}
            fill={dot.z > 50 ? COLORS.globeDotLight : COLORS.globeDot}
            opacity={0.3 + (dot.z + 200) / 600}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3 + (dot.z + 200) / 600, scale: 1 }}
            transition={{ delay: i * 0.001, duration: 0.5 }}
          />
        ))}

        {/* Location markers */}
        {LOCATION_MARKERS.map((marker, i) => (
          <g key={i}>
            {/* Outer rings */}
            {[0, 1, 2].map((ring) => (
              <motion.circle
                key={ring}
                cx={marker.x}
                cy={marker.y}
                r={12 + ring * 10}
                fill="none"
                stroke={COLORS.markerRing}
                strokeWidth={1.5}
                opacity={0.6 - ring * 0.15}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 - ring * 0.15 }}
                transition={{ delay: 0.5 + i * 0.2 + ring * 0.1, duration: 0.5 }}
              />
            ))}
            {/* Inner filled circle */}
            <motion.circle
              cx={marker.x}
              cy={marker.y}
              r={8}
              fill={COLORS.markerRing}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.3 }}
            />
            {/* Center dot */}
            <motion.circle
              cx={marker.x}
              cy={marker.y}
              r={3}
              fill={COLORS.markerCenter}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + i * 0.2, duration: 0.2 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function TeamRbbeconExperience({
  headline = "Multinational, multi-lingual\nteams with unrivalled\nexperience",
  description = "We have 14 offices and experience of over 120 jurisdictions. Our multi-lingual teams can work in 30 languages. Our senior staff have the necessary expertise to advise your business how best to present the economic arguments that matter most for your case.",
  buttonText = "CONTACT US",
  onContactClick,
  stats = {
    offices: 14,
    jurisdictions: 120,
    languages: 30,
  },
}: TeamRbbeconExperienceProps) {
  return (
    <section
      className="relative w-full min-h-[600px] overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <motion.h2
              className="text-4xl lg:text-5xl xl:text-6xl font-light italic leading-tight mb-8"
              style={{
                color: COLORS.headlineText,
                fontFamily: "'Instrument Serif', Georgia, serif",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {headline.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split('\n').length - 1 && <br />}
                </span>
              ))}
            </motion.h2>

            <motion.p
              className="text-base lg:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: COLORS.bodyText }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {description}
            </motion.p>

            <motion.button
              className="group flex items-center gap-3 px-0 py-2 text-sm tracking-widest font-medium transition-all duration-300"
              style={{
                color: COLORS.buttonText,
                borderBottom: `1px solid ${COLORS.buttonBorder}`,
              }}
              onClick={onContactClick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ x: 5 }}
            >
              {buttonText}
              <span className="inline-flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-2">
                <span className="w-8 h-px bg-white/50" />
              </span>
            </motion.button>
          </div>

          {/* Right globe visualization */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DottedGlobe />
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${COLORS.globeDotLight}15 0%, transparent 60%)`,
        }}
      />
    </section>
  );
}
