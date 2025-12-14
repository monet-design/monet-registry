"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    text: "#111111",
    textMuted: "#3D3D3D",
    buttonBg: "#111111",
    buttonText: "#FFFFFF",
    reviewText: "#4C4C4C",
  },
  dark: {
    text: "#FFFFFF",
    textMuted: "#D1D5DB",
    buttonBg: "#FFFFFF",
    buttonText: "#111111",
    reviewText: "#A3A3A3",
  },
} as const;

/**
 * 배경 Ellipse 색상 (원본 Framer 값)
 */
const ELLIPSE_COLORS = {
  purple: "#8a43e1",
  magenta: "#d511fd",
  orange: "#ef7b16",
  red: "#ff2f2f",
} as const;

/**
 * 배경 색상
 */
const BG_COLORS = {
  light: {
    background: "#f4f2f1",
    gradient: "#f2f0ee",
  },
  dark: {
    background: "#0a0a0a",
    gradient: "#111111",
  },
} as const;

/**
 * 그라디언트 색상
 */
const GRADIENT = {
  badge:
    "linear-gradient(90deg, rgb(255, 46, 46) 0%, rgb(238, 123, 22) 36.28%, rgb(138, 67, 225) 69.75%, rgb(213, 16, 252) 100%)",
  videoBorder:
    "linear-gradient(179deg, #ff2f2f 0%, #ef7b16 35.8783%, #8a43e1 69.922%, #d511fd 100%)",
} as const;

/**
 * 노이즈 텍스처 URL
 */
const NOISE_URL =
  "https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png";

/**
 * 비디오 URL (Framer에서 스크래핑)
 */
const VIDEO_URL =
  "https://framerusercontent.com/assets/vEhflswuPItDcZw4V4P7UP2tOJk.mp4";

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Star } from "lucide-react";

interface HookableAiHero0Props {
  mode?: "light" | "dark";
  badgeNumber?: string;
  badgeText?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  reviewLabel?: string;
  reviewScore?: string;
  videoUrl?: string;
}

export default function HookableAiHero0({
  mode = "light",
  badgeNumber = "20K+",
  badgeText = "개 이상의 이커머스 상세페이지가 후커블로 생성됩니다",
  headline = "압도적 퀄리티 상세페이지,\nAI로 5분만에 완성.",
  subheadline = "제품 정보 30초 입력하고, 지금 바로 다운로드 하세요.",
  ctaText = "지금 시작하기",
  ctaHref = "https://app.hookable.ai",
  reviewLabel = "실사용자 사용 후기",
  reviewScore = "4.9점",
  videoUrl = VIDEO_URL,
}: HookableAiHero0Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const bgColors = BG_COLORS[mode];

  return (
    <section
      className="relative w-full overflow-hidden pt-32"
      style={{
        paddingBottom: "100px",
        backgroundColor: bgColors.background,
      }}
    >
      {/* Background Container - 원본 Framer 구조 */}
      <div
        className="pointer-events-none absolute overflow-visible"
        style={{
          backgroundColor: bgColors.background,
          height: "1024px",
          top: 0,
          left: "-120px",
          right: "-120px",
          zIndex: 1,
          WebkitMask: "linear-gradient(#000 63%, #0000 100%)",
          mask: "linear-gradient(#000 63%, #0000 100%)",
        }}
      >
        {/* Left Abstract - Ellipse Group */}
        <div
          className="absolute"
          style={{
            filter: "blur(2px)",
            width: "378px",
            height: "571px",
            top: 0,
            left: 0,
          }}
        >
          {/* Sub Container 1 */}
          <div
            className="absolute"
            style={{ width: "420px", height: "571px", top: 0, left: "-42px" }}
          >
            {/* Ellipse 3 - Purple */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.purple,
                width: "207px",
                height: "208px",
                filter: "blur(200px)",
                top: "207px",
                left: 0,
              }}
            />
            {/* Ellipse 4 - Magenta */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.magenta,
                width: "207px",
                height: "208px",
                filter: "blur(200px)",
                top: "363px",
                left: "37px",
              }}
            />
            {/* Ellipse 2 - Orange */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.orange,
                width: "207px",
                height: "207px",
                filter: "blur(200px)",
                top: 0,
                left: "213px",
              }}
            />
            {/* Ellipse 1 - Red */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.red,
                width: "207px",
                height: "208px",
                filter: "blur(200px)",
                top: "80px",
                left: "9px",
              }}
            />
          </div>
          {/* Sub Container 2 */}
          <div
            className="absolute"
            style={{ width: "420px", height: "571px", top: 0, left: "-42px" }}
          >
            {/* Ellipse 3 - Purple */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.purple,
                width: "207px",
                height: "208px",
                filter: "blur(100px)",
                top: "207px",
                left: 0,
              }}
            />
            {/* Ellipse 4 - Magenta */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.magenta,
                width: "207px",
                height: "208px",
                filter: "blur(100px)",
                top: "363px",
                left: "37px",
              }}
            />
            {/* Ellipse 2 - Orange */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.orange,
                width: "207px",
                height: "207px",
                filter: "blur(100px)",
                top: 0,
                left: "213px",
              }}
            />
            {/* Ellipse 1 - Red */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.red,
                width: "207px",
                height: "208px",
                filter: "blur(100px)",
                top: "80px",
                left: "9px",
              }}
            />
          </div>
        </div>

        {/* Right Abstract - Ellipse Group (rotated 180deg) */}
        <div
          className="absolute"
          style={{
            filter: "blur(2px)",
            width: "378px",
            height: "571px",
            top: 0,
            right: 0,
            transform: "rotate(180deg)",
          }}
        >
          {/* Sub Container 1 */}
          <div
            className="absolute"
            style={{ width: "420px", height: "571px", top: 0, left: "-42px" }}
          >
            {/* Ellipse 3 - Purple */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.purple,
                width: "207px",
                height: "208px",
                filter: "blur(200px)",
                top: "207px",
                left: 0,
              }}
            />
            {/* Ellipse 4 - Magenta */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.magenta,
                width: "207px",
                height: "208px",
                filter: "blur(200px)",
                top: "363px",
                left: "37px",
              }}
            />
            {/* Ellipse 2 - Orange */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.orange,
                width: "207px",
                height: "207px",
                filter: "blur(200px)",
                top: 0,
                left: "213px",
              }}
            />
            {/* Ellipse 1 - Red */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.red,
                width: "207px",
                height: "208px",
                filter: "blur(200px)",
                top: "80px",
                left: "9px",
              }}
            />
          </div>
          {/* Sub Container 2 - rotated -25deg */}
          <div
            className="absolute"
            style={{
              width: "420px",
              height: "571px",
              top: 0,
              left: "-42px",
              transform: "rotate(-25deg)",
            }}
          >
            {/* Ellipse 3 - Purple */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.purple,
                width: "207px",
                height: "208px",
                filter: "blur(100px)",
                top: "207px",
                left: 0,
              }}
            />
            {/* Ellipse 4 - Magenta */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.magenta,
                width: "207px",
                height: "208px",
                filter: "blur(100px)",
                top: "363px",
                left: "37px",
              }}
            />
            {/* Ellipse 2 - Orange */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.orange,
                width: "207px",
                height: "207px",
                filter: "blur(100px)",
                top: 0,
                left: "213px",
              }}
            />
            {/* Ellipse 1 - Red */}
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: ELLIPSE_COLORS.red,
                width: "207px",
                height: "208px",
                filter: "blur(100px)",
                top: "80px",
                left: "9px",
              }}
            />
          </div>
        </div>

        {/* BG Gradient Overlay */}
        <div
          className="absolute left-0 right-0 top-0"
          style={{
            background: `linear-gradient(${bgColors.gradient} 0%, ${bgColors.gradient}00 100%)`,
            height: "415px",
          }}
        />

        {/* Vertical Grid Lines Container */}
        <div
          className="absolute left-0 right-0 top-0 flex"
          style={{ height: "1024px" }}
        >
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="h-full flex-1"
              style={{
                backdropFilter: "blur(25px)",
                WebkitBackdropFilter: "blur(25px)",
                background: `linear-gradient(270deg, ${bgColors.gradient}33 0%, ${bgColors.gradient}00 100%)`,
                borderRight: `1px solid ${isDark ? "#ffffff1a" : "#ffffff1a"}`,
              }}
            />
          ))}
        </div>

        {/* Additional BG layer */}
        <div
          className="absolute left-0 right-0 top-0"
          style={{
            background: `linear-gradient(180deg, ${bgColors.gradient}00 0%, ${bgColors.gradient} 100%)`,
            height: "200px",
            bottom: 0,
            top: "auto",
          }}
        />

        {/* Noise Texture Overlay */}
        <div className="mix-blend-overlay opacity-75 absolute inset-0">
          <div
            style={{
              backgroundImage: `url(${NOISE_URL})`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px",
              backgroundPosition: "left top",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        {/* Main Content Container */}
        <div className="flex flex-col items-center gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 ${
              isDark
                ? "border-gray-700 bg-gray-900/50"
                : "border-gray-200 bg-white/80"
            } backdrop-blur-sm`}
          >
            <span
              className="text-sm font-semibold"
              style={{
                background: GRADIENT.badge,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {badgeNumber}
            </span>
            <span className="text-sm" style={{ color: colors.text }}>
              {badgeText}
            </span>
          </motion.div>

          {/* Text Container */}
          <div className="flex flex-col items-center gap-4">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="whitespace-pre-line text-center text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ color: colors.text }}
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-center text-base md:text-lg"
              style={{ color: colors.textMuted }}
            >
              {subheadline}
            </motion.p>
          </div>

          {/* CTA Container */}
          <div className="flex flex-col items-center gap-4">
            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-6 py-4 text-base font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {ctaText}
            </motion.a>

            {/* Review Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              {/* Google Logo */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <span className="text-sm" style={{ color: colors.reviewText }}>
                <span className="opacity-70">{reviewLabel} </span>
                <span className="font-medium" style={{ color: colors.text }}>
                  평점 {reviewScore}
                </span>
              </span>
            </motion.div>
          </div>

          {/* Video/Image Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative mt-8 w-full max-w-5xl"
          >
            {/* Video Container with Gradient Border */}
            <div
              className="relative rounded-2xl p-[3px]"
              style={{ background: GRADIENT.videoBorder }}
            >
              {/* Video Wrapper */}
              <div
                className={`relative overflow-hidden rounded-[13px] ${
                  isDark ? "bg-gray-900" : "bg-white"
                }`}
              >
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative z-10 h-auto w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
