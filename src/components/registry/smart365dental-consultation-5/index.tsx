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
    // Primary 액센트 (버튼, 링크 등)
    primary: "#1ba9b8",          // Teal
    primaryDark: "#0f8895",      // Darker teal
    accent: "#1ba9b8",
    accentHover: "#0f8895",
  },
  dark: {
    primary: "#1ba9b8",
    primaryDark: "#0f8895",
    accent: "#1ba9b8",
    accentHover: "#0f8895",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  doctor: {
    path: "/registry/smart365dental-consultation-5/doctor.png",
    alt: "친절한 치과 의사 캐릭터",
    prompt: `
      <is_transparent_background>true</is_transparent_background>
      <summary>3D cartoon doctor character holding a laptop</summary>
      <mood>Friendly, professional, modern healthcare illustration</mood>
      <background_summary>Completely transparent background with no elements</background_summary>
      <primary_element>A cheerful 3D cartoon doctor character positioned on the left side, facing slightly to the right. The doctor has brown hair styled neatly, wears a white medical coat with a stethoscope around the neck, and holds a silver laptop computer in both hands. The character has a warm smile and friendly facial expression with simple, clean 3D rendering style similar to modern medical app illustrations</primary_element>
      <etc_element>A small white speech bubble floating near the doctor's head with rounded edges and a subtle shadow</etc_element>
    `,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { Phone } from "lucide-react";

interface Smart365dentalConsultation5Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  speechBubbleText?: string;
  leftText?: string;
  showPhone?: boolean;
}

export default function Smart365dentalConsultation5({
  mode = "light",
  title = "전화문의",
  subtitle = "디지털만 바로 진화문의 가능!",
  speechBubbleText = "질문에 대해서 무엇이든 물어보세요!",
  leftText = "주말에도 진료하는\n우리동네 치과",
  showPhone = true,
  ...props
}: Smart365dentalConsultation5Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[220px]">
          {/* Left side - Doctor illustration and text */}
          <motion.div
            className="relative flex items-center justify-start pl-8 lg:pl-12 py-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Doctor Character Placeholder */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 lg:w-40 lg:h-40 relative">
                  {/* Speech Bubble */}
                  <div className="absolute -top-2 left-16 lg:left-20 z-10 bg-white rounded-2xl px-3 py-1.5 shadow-md whitespace-nowrap">
                    <div className="text-xs lg:text-sm text-gray-700 font-medium">
                      {speechBubbleText}
                    </div>
                    {/* Speech bubble tail */}
                    <div className="absolute -bottom-1 left-4 w-3 h-3 bg-white transform rotate-45"></div>
                  </div>

                  {/* Doctor Icon/Illustration */}
                  <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-5xl lg:text-6xl">👨‍⚕️</div>
                  </div>
                </div>
              </div>

              {/* Left Text */}
              <div className="text-white">
                {leftText.split('\n').map((line, i) => (
                  <div key={i} className="text-lg lg:text-xl font-bold leading-tight">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - CTA with diagonal stripes */}
          <motion.div
            className="relative py-8 lg:py-12 px-8 lg:px-12 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Diagonal stripe pattern background */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full w-16 lg:w-20"
                  style={{
                    backgroundColor: colors.primaryDark,
                    left: `${i * 12}%`,
                    transform: 'skewX(-20deg)',
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start lg:items-end text-left lg:text-right">
              <motion.h2
                className="text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-base lg:text-lg text-white/90 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {subtitle}
              </motion.p>

              {showPhone && (
                <motion.div
                  className="mt-4 flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
