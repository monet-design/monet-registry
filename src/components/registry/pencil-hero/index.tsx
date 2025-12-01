"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - 이 컴포넌트는 그린 계열 브랜드 컬러를 사용합니다
 * - grayscale은 Tailwind semantic color로 대체 가능
 */
const COLORS = {
  light: {
    // 배경
    background: "#E6EBE7",        // 밝은 민트 그린
    // 텍스트
    text: "#193F2B",              // 다크 그린 (메인 텍스트)
    textMuted: "#899F92",         // 라이트 그린 (보조 텍스트)
    textPlaceholder: "#6B8577",   // 미디엄 그린 (플레이스홀더)
    // Primary 버튼
    accent: "#0A3520",            // 다크 그린 버튼
    accentHover: "#082A1A",       // 다크 그린 호버
    // 보더
    border: "#193F2B",            // 다크 그린 보더
  },
  dark: {
    background: "#1a2e23",
    text: "#E6EBE7",
    textMuted: "#6B8577",
    textPlaceholder: "#4a6355",
    accent: "#3DAF68",
    accentHover: "#2E9055",
    border: "#3DAF68",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  asciiArt: {
    path: "/registry/pencil-hero/ascii-woman.png",
    alt: "ASCII art illustration",
    prompt: `ASCII art portrait of a woman created from text characters.
Style: Monochrome ASCII art, retro computing aesthetic, made from typed characters/symbols
Layout: Head and shoulders portrait, 3/4 angle facing left
Composition:
- Woman with short, wavy bob haircut
- Elegant, classic 1960s style appearance
- Portrait composed entirely of ASCII characters (letters, numbers, symbols)
- Varying character density creates shading and depth
Color palette: Single color (forest green #193F2B) on transparent/light background
Mood: Artistic, tech-nostalgic, elegant, creative
Technical: Transparent PNG, high contrast, characters visible on close inspection`,
  },
  appPreview: {
    path: "/registry/pencil-hero/app-preview.png",
    alt: "App preview screenshot",
    prompt: `Dark mode code editor IDE with design panel overlay.
Style: Modern IDE interface, VS Code-like aesthetic, dark theme
Layout: Main code editor taking most of screen, design panel overlay on right
Composition:
- Left sidebar: File explorer with folders (Explorer, Search, Source Control, Extensions)
- Main area: Code editor with JSX/React code, syntax highlighting
- Overlay: Design properties panel showing component settings (Header, Logo, NavLinks, etc.)
- Top bar: File tabs, browser controls
Color palette: Dark gray (#1C1C1C) background, syntax highlighting colors, blue accents
Elements: Code with line numbers, design mode toggle, component tree
Mood: Professional, developer-focused, modern tooling
Technical: 16:9 aspect ratio, high resolution UI screenshot style`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import "./font.css";

interface PencilHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  backedByText?: string;
  backedByLogo?: string;
  headline?: string;
  headlineAccent?: string;
  subheadline?: string;
  ctaLabel?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  asciiArtSrc?: string;
  appPreviewSrc?: string;
  onSubmit?: (email: string) => void;
}

export default function PencilHero({
  mode = "light",
  logoText = "PENCIL",
  backedByText = "BACKED BY",
  backedByLogo = "a]a/speedrun",
  headline = "Design Mode",
  headlineAccent = "for Cursor",
  subheadline = "Introducing a new way to design\nright where you code.",
  ctaLabel = "Available soon. Be first to get access.",
  emailPlaceholder = "YOUR EMAIL",
  buttonText = "REQUEST ACCESS",
  asciiArtSrc = IMAGES.asciiArt.path,
  appPreviewSrc = IMAGES.appPreview.path,
  onSubmit,
}: PencilHeroProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-[0.2em]"
          style={{ color: colors.text }}
        >
          {logoText}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-xs"
          style={{ color: colors.textMuted }}
        >
          <span className="tracking-wider">{backedByText}</span>
          <span
            className="font-medium italic"
            style={{ color: colors.textPlaceholder }}
          >
            {backedByLogo}
          </span>
        </motion.div>
      </div>

      {/* ASCII Art - Positioned absolutely in the top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="pointer-events-none absolute -right-4 top-8 z-0 hidden overflow-hidden lg:block"
        style={{ background: colors.background }}
      >
        <div
          className="relative h-[420px] w-[400px] xl:h-[480px] xl:w-[460px]"
          style={{ background: colors.background }}
        >
          <Image
            src={asciiArtSrc}
            alt={IMAGES.asciiArt.alt}
            fill
            className="object-contain object-right-top mix-blend-multiply"
            priority
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-6 pt-2 sm:px-10 sm:pt-4 lg:px-16 lg:pt-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-start">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-instrument-serif text-5xl font-normal leading-[1.1] sm:text-6xl lg:text-7xl"
              style={{ color: colors.text }}
            >
              {headline}
              <br />
              <span style={{ color: colors.text }}>{headlineAccent}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 whitespace-pre-line text-base font-medium leading-relaxed sm:text-lg"
              style={{ color: colors.text }}
            >
              {subheadline}
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-10"
            >
              <p className="mb-3 text-sm" style={{ color: colors.text }}>
                {ctaLabel}
              </p>
              <form onSubmit={handleSubmit} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={emailPlaceholder}
                  className="flex-1 bg-transparent px-4 py-3 text-xs font-medium tracking-wider outline-none transition-colors"
                  style={{
                    borderWidth: "1px",
                    borderColor: colors.border,
                    color: colors.text,
                  }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-semibold tracking-wider text-white transition-colors"
                  style={{ backgroundColor: colors.accent }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
                >
                  {buttonText}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column - ASCII Art (mobile only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-start justify-center lg:hidden"
          >
            <div className="relative h-[300px] w-[280px] sm:h-[380px] sm:w-[320px]">
              <Image
                src={asciiArtSrc}
                alt={IMAGES.asciiArt.alt}
                fill
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* App Preview Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16"
      >
        <div className="overflow-hidden rounded-t-xl shadow-2xl">
          <div className="relative aspect-[16/9] w-full bg-gray-900">
            <Image
              src={appPreviewSrc}
              alt={IMAGES.appPreview.alt}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
