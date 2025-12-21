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
    accent: "#DC2626",          // 레드
    accentHover: "#B91C1C",     // 레드 호버
    secondary: "#0EA5E9",       // 블루
    secondaryHover: "#0284C7",  // 블루 호버
  },
  dark: {
    accent: "#EF4444",
    accentHover: "#DC2626",
    secondary: "#38BDF8",
    secondaryHover: "#0EA5E9",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // professional: {
  //   path: "/registry/smart365dental-hero-1/professional.png",
  //   alt: "Smart365 Dental professional",
  //   prompt: `Professional Korean businessman in white medical coat presenting`,
  // },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Phone, Clock } from "lucide-react";

interface Smart365dentalHero1Props {
  mode?: "light" | "dark";
  emergencyText?: string;
  todayReservationText?: string;
  headline?: string;
  subHeadline?: string;
  phone1?: string;
  phone1Label?: string;
  phone2?: string;
  phone2Label?: string;
  footerText?: string;
}

export default function Smart365dentalHero1({
  mode = "light",
  emergencyText = "긴급알림",
  todayReservationText = "오늘예약 가능",
  headline = "치료 결과와",
  subHeadline = "치과 선택!",
  phone1 = "1800",
  phone1Label = "진료예약 상담전화",
  phone2 = "010-1234-5678",
  phone2Label = "고객센터 전화상담",
  footerText = "환자의 건강을 최우선으로 생각합니다",
}: Smart365dentalHero1Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container relative mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 space-y-6"
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-white"
                style={{ backgroundColor: colors.accent }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                </span>
                {emergencyText}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-white"
                style={{ backgroundColor: colors.secondary }}
              >
                <Clock className="h-4 w-4" />
                {todayReservationText}
              </motion.div>
            </div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span
                  className="inline-block"
                  style={{ color: colors.secondary }}
                >
                  {headline}
                </span>
                <br />
                <span
                  className="inline-block"
                  style={{ color: colors.accent }}
                >
                  {subHeadline}
                </span>
              </h1>
            </motion.div>

            {/* CTA Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {/* Phone 1 Card */}
              <button
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800"
                style={{
                  borderLeft: `4px solid ${colors.accent}`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${colors.accent}20` }}
                  >
                    <Phone
                      className="h-6 w-6"
                      style={{ color: colors.accent }}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {phone1Label}
                    </p>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: colors.accent }}
                    >
                      {phone1}
                    </p>
                  </div>
                </div>
              </button>

              {/* Phone 2 Card */}
              <button
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800"
                style={{
                  borderLeft: `4px solid ${colors.secondary}`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <Phone
                      className="h-6 w-6"
                      style={{ color: colors.secondary }}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {phone2Label}
                    </p>
                    <p
                      className="text-xl font-bold"
                      style={{ color: colors.secondary }}
                    >
                      {phone2}
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Footer Text with Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {footerText}
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="h-2 w-2 rounded-full transition-all"
                  style={{ backgroundColor: colors.secondary }}
                  aria-label="Slide 1"
                />
                <button
                  className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-gray-400 dark:bg-gray-600"
                  aria-label="Slide 2"
                />
                <button
                  className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-gray-400 dark:bg-gray-600"
                  aria-label="Slide 3"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[500px] w-full max-w-md lg:h-[600px]">
              {/* Decorative background circle */}
              <div
                className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-20 blur-3xl lg:h-[500px] lg:w-[500px]"
                style={{
                  background: `radial-gradient(circle, ${colors.secondary}40, transparent)`,
                }}
              />

              {/* Professional placeholder - replace with actual image */}
              <div className="relative z-10 flex h-full items-end justify-center">
                <div className="relative h-[90%] w-[80%]">
                  {/* Silhouette placeholder */}
                  <div className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2">
                    <svg
                      viewBox="0 0 400 600"
                      className="h-full w-full"
                      style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))" }}
                    >
                      {/* Business suit body */}
                      <path
                        d="M150 200 L150 600 L250 600 L250 200 Z"
                        fill="#1F2937"
                        className="dark:fill-gray-700"
                      />
                      {/* White coat */}
                      <path
                        d="M130 180 L130 600 L270 600 L270 180 Q250 200 200 200 Q150 200 130 180 Z"
                        fill="white"
                        opacity="0.95"
                      />
                      {/* Head */}
                      <ellipse
                        cx="200"
                        cy="130"
                        rx="50"
                        ry="60"
                        fill="#D1D5DB"
                        className="dark:fill-gray-600"
                      />
                      {/* Presenting arm */}
                      <path
                        d="M270 280 Q320 300 340 280 L350 290 Q330 320 280 300 Z"
                        fill="white"
                        opacity="0.95"
                      />
                      <ellipse
                        cx="345"
                        cy="285"
                        rx="25"
                        ry="15"
                        fill="#D1D5DB"
                        className="dark:fill-gray-600"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div
          className="absolute -left-20 top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: `${colors.accent}20` }}
        />
        <div
          className="absolute -right-20 bottom-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: `${colors.secondary}20` }}
        />
      </div>
    </section>
  );
}
