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
    accent: "#62BAF7", // 블루 (extracted from image)
    accentHover: "#4AA8E8", // 블루 호버
    background: "#FDFDFD", // 밝은 배경
    inputBg: "#FFFFFF", // 인풋 배경
    inputBorder: "#E3E3E3", // 인풋 테두리
  },
  dark: {
    accent: "#62BAF7",
    accentHover: "#4AA8E8",
    background: "#0A0A0A",
    inputBg: "#1A1A1A",
    inputBorder: "#2A2A2A",
  },
} as const;

/**
 * 텍스트 콘텐츠
 */
const CONTENT = {
  brand: "Fathom",
  navItems: [
    { label: "Features", href: "#" },
    { label: "Feedback", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  joinButton: "Join now",
  headline: "An AI companion that\nmakes reading easier.",
  subheadline: "AI-powered reading assistant for context, meaning, and chat.",
  inputPlaceholder: "name@email.com",
  waitlistButton: "Join waitlist",
  promptText: "Remind me what happened in the previous chapter",
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  phoneMockup: {
    path: "/registry/ai-reading-waitlist/phone-mockup.png",
    alt: "Mobile app interface showing AI reading assistant",
    prompt: `<xml>
<is_transparent_background>true</is_transparent_background>
<summary>Modern smartphone mockup displaying an e-reader app interface</summary>
<mood>Clean, minimal, professional product mockup with realistic shadows</mood>
<background_summary>Fully transparent background for seamless integration</background_summary>
<primary_element>
A modern iPhone 14 Pro mockup in portrait orientation, centered in frame, showing a reading app interface. The phone has:
- Black bezel with rounded corners
- Dynamic Island notch at top
- Status bar showing 9:41, signal bars, and battery
- White/light gray screen displaying book text
- The screen shows a chapter titled "THE FIRST LIGHT" at the top
- Below is serif text content from a story about dreams and wanderers
- Clean, readable typography with proper line spacing
- A back arrow button in top left
- A menu icon in top right
- At the bottom: prompt text "Remind me what happened in the previous chapter" with an AI sparkle icon
- The phone casts a subtle, realistic shadow on the surface below
- Slight 3D depth to make it look dimensional
</primary_element>
<etc_element>
Soft, natural drop shadow beneath the phone to give it depth and make it appear to be floating slightly above the surface. The shadow should be dark gray/black with soft edges, positioned directly below and slightly behind the phone.
</etc_element>
</xml>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface AiReadingWaitlistProps {
  mode?: "light" | "dark";
  brand?: string;
  navItems?: NavItem[];
  joinButtonText?: string;
  headline?: string;
  subheadline?: string;
  inputPlaceholder?: string;
  waitlistButtonText?: string;
  promptText?: string;
  phoneMockupSrc?: string;
  phoneMockupAlt?: string;
}

export default function AiReadingWaitlist({
  mode = "light",
  brand = CONTENT.brand,
  navItems = [...CONTENT.navItems],
  joinButtonText = CONTENT.joinButton,
  headline = CONTENT.headline,
  subheadline = CONTENT.subheadline,
  inputPlaceholder = CONTENT.inputPlaceholder,
  waitlistButtonText = CONTENT.waitlistButton,
  promptText = CONTENT.promptText,
  phoneMockupSrc = IMAGES.phoneMockup.path,
  phoneMockupAlt = IMAGES.phoneMockup.alt,
}: AiReadingWaitlistProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
    console.log("Email submitted:", email);
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Navigation */}
      <motion.nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-12">
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            {brand}
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <Button
          size="sm"
          className="rounded-lg px-5 py-2"
          style={{
            backgroundColor: colors.accent,
          }}
        >
          {joinButtonText}
        </Button>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-20">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left Content */}
          <motion.div
            className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              {subheadline}
            </p>

            {/* Waitlist Form */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder={inputPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-lg border px-4 py-6 text-base"
                style={{
                  backgroundColor: colors.inputBg,
                  borderColor: colors.inputBorder,
                }}
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-lg px-8 py-6"
                style={{
                  backgroundColor: colors.accent,
                }}
              >
                {waitlistButtonText}
              </Button>
            </form>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="relative flex flex-1 items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.img
                src={phoneMockupSrc}
                alt={phoneMockupAlt}
                className="h-auto w-full max-w-md"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Floating AI Prompt Card */}
              <motion.div
                className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg dark:bg-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                style={{
                  maxWidth: "90%",
                }}
              >
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {promptText}
                </span>
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: colors.accent }}
                >
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
