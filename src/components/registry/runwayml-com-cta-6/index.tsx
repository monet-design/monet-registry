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
    // 버튼 배경 (반투명 흰색)
    buttonBg: "rgba(247, 247, 247, 0.05)",
    buttonBgHover: "rgba(247, 247, 247, 0.15)",
    buttonBgActive: "rgba(247, 247, 247, 0.25)",
    // 버튼 테두리
    buttonBorder: "rgba(255, 255, 255, 0.75)",
    // 오버레이
    overlay: "rgba(0, 0, 0, 0.2)",
  },
  dark: {
    buttonBg: "rgba(247, 247, 247, 0.05)",
    buttonBgHover: "rgba(247, 247, 247, 0.15)",
    buttonBgActive: "rgba(247, 247, 247, 0.25)",
    buttonBorder: "rgba(255, 255, 255, 0.75)",
    overlay: "rgba(0, 0, 0, 0.2)",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  background: {
    path: "https://image.mux.com/T3MxHKsagNzekzmQK4dWkxm01bAW00Rki7Kzg6odj4rIQ/thumbnail.webp?time=0&width=1920",
    alt: "Abstract blurred gradient background",
    prompt: `Abstract blurred gradient background with organic shapes in muted olive green, sandy beige, and dark forest green tones. Heavily blurred, out-of-focus aesthetic with natural gradients.`,
  },
} as const;

/**
 * 비디오 에셋
 */
const VIDEO = {
  playbackId: "T3MxHKsagNzekzmQK4dWkxm01bAW00Rki7Kzg6odj4rIQ",
  src: "https://stream.mux.com/T3MxHKsagNzekzmQK4dWkxm01bAW00Rki7Kzg6odj4rIQ.m3u8",
  poster: "https://image.mux.com/T3MxHKsagNzekzmQK4dWkxm01bAW00Rki7Kzg6odj4rIQ/thumbnail.webp?time=0&width=1920",
} as const;

/**
 * 기본 텍스트 콘텐츠
 */
const DEFAULT_CONTENT = {
  title: "We are building AI to simulate the world through merging art and science.",
  subtitle: "Join our global team of researchers, engineers, artists and designers.",
  buttonText: "See careers",
  buttonHref: "/careers",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface RunwaymlComCta6Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  videoSrc?: string;
  videoPoster?: string;
}

export default function RunwaymlComCta6({
  mode = "dark",
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  buttonText = DEFAULT_CONTENT.buttonText,
  buttonHref = DEFAULT_CONTENT.buttonHref,
  backgroundImage = IMAGES.background.path,
  videoSrc = VIDEO.src,
  videoPoster = VIDEO.poster,
}: RunwaymlComCta6Props) {
  const colors = COLORS[mode];

  // Split title for line break on large screens
  const titleParts = title.split(" through ");
  const hasBreakPoint = titleParts.length === 2;

  // Split subtitle for line break on large screens
  const subtitleParts = subtitle.split(", ");
  const hasSubtitleBreak = subtitleParts.length >= 2;

  return (
    <section className="w-full py-40 lg:py-44 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-lg overflow-hidden text-white relative py-60">
          {/* Background Video/Image */}
          <div className="absolute inset-0">
            <div className="w-full h-full">
              <video
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
                playsInline
                poster={videoPoster}
              >
                <source src={videoSrc} type="application/x-mpegURL" />
                {/* Fallback to image if video doesn't load */}
              </video>
              {/* Fallback Image */}
              <Image
                src={backgroundImage}
                alt={IMAGES.background.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Dark Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: colors.overlay }}
          />

          {/* Content */}
          <div className="relative text-center px-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:text-5xl text-3xl !leading-none mb-4 font-normal"
            >
              {hasBreakPoint ? (
                <>
                  {titleParts[0]} through{" "}
                  <br className="hidden lg:block" />
                  {titleParts[1]}
                </>
              ) : (
                title
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/85 lg:text-base text-sm !leading-tight mb-4"
            >
              {hasSubtitleBreak ? (
                <>
                  {subtitleParts[0]},{" "}
                  <br className="hidden lg:block" />
                  {subtitleParts.slice(1).join(", ")}
                </>
              ) : (
                subtitle
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href={buttonHref}
                className="font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 px-3 py-2 text-base leading-6 rounded-lg backdrop-blur text-white outline outline-1 -outline-offset-1 mt-4"
                style={{
                  backgroundColor: colors.buttonBg,
                  outlineColor: colors.buttonBorder,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.buttonBgHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.buttonBg;
                }}
                role="link"
              >
                {buttonText}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
