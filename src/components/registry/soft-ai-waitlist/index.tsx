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
    accent: "#000000", // 블랙 버튼
    accentHover: "#1a1a1a", // 블랙 호버
    cardBg: "rgba(255, 255, 255, 0.7)", // 반투명 흰색 카드
    cardBorder: "rgba(255, 255, 255, 0.8)", // 카드 테두리
  },
  dark: {
    accent: "#ffffff",
    accentHover: "#e5e5e5",
    cardBg: "rgba(0, 0, 0, 0.3)",
    cardBorder: "rgba(255, 255, 255, 0.1)",
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
    path: "/registry/soft-ai-waitlist/desert-scene.png",
    alt: "3D rendered desert landscape with colorful layered arches",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>3D rendered desert landscape with colorful layered arch formations</summary>
<mood>Dreamy, surreal, soft-focus artistic rendering with pastel and warm tones, modern 3D illustration style</mood>
<background_summary>Soft white-to-beige gradient background with subtle fog/mist effect creating depth, fading to white at edges</background_summary>
<primary_element>Center: Large decorative arch made of multiple layered curved bands in gradient colors (warm oranges, teals, blues, browns) arranged concentrically. The arch has a striped, rainbow-like appearance with smooth 3D rounded surfaces. Located in the middle ground, slightly right of center. The arch appears sculptural and abstract with smooth glossy finish.</primary_element>
<etc_element>Foreground and background: Multiple stylized white cacti in minimalist 3D design scattered across sandy/yellow-green ground. The cacti are simple cylindrical shapes with subtle ribbing. Ground has soft shadows and warm yellow-green patches suggesting desert vegetation. Everything has a soft focus dreamlike quality with edges fading into white fog.</etc_element>`,
  },
  icon: {
    path: "/registry/soft-ai-waitlist/icon.png",
    alt: "Decorative flower icon",
    prompt: `<is_transparent_background>true</is_transparent_background>
<summary>Simple geometric flower or star icon in black</summary>
<mood>Minimal, clean, modern geometric design</mood>
<background_summary>Fully transparent background</background_summary>
<primary_element>Center: A simple geometric icon resembling a flower or star shape made of rounded petals or points. The icon is solid black (#000000) with 6-8 petals/points arranged radially around a center. Each petal is rounded and smooth. The overall shape is symmetrical and balanced, modern and minimal in style. Size approximately 48x48 pixels equivalent. Clean vector-style appearance.</primary_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

interface SoftAiWaitlistProps {
  mode?: "light" | "dark";
  heading?: string;
  subheading?: string;
  ctaText?: string;
  contactText?: string;
  xButtonText?: string;
  communityButtonText?: string;
  onSubmit?: (email: string) => void;
  onXClick?: () => void;
  onCommunityClick?: () => void;
}

export default function SoftAiWaitlist({
  mode = "light",
  heading = "Take the Leap into AI Art",
  subheading = "Sign up to our waitlist and get the coolest and newest updates weekly.",
  ctaText = "Sign up for Waitlist",
  contactText = "Get in touch with us.\nFollow us or join our Discord.",
  xButtonText = "Follow us on X",
  communityButtonText = "Join Community",
  onSubmit,
  onXClick,
  onCommunityClick,
}: SoftAiWaitlistProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    }
    setEmail("");
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
      style={{
        backgroundImage: `url(${IMAGES.background.path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 dark:from-black/50 dark:via-black/30 dark:to-black/50" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-2xl px-6 py-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Icon */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative h-12 w-12">
            <Image
              src={IMAGES.icon.path}
              alt={IMAGES.icon.alt}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
        >
          {heading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mb-8 text-base text-gray-600 dark:text-gray-300 md:text-lg"
        >
          {subheading}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mb-12">
          <Button
            size="lg"
            className="h-12 rounded-full px-12 text-base font-medium shadow-lg transition-all hover:scale-105"
            style={{
              backgroundColor: colors.accent,
              color: mode === "light" ? "#ffffff" : "#000000",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
            }}
            onClick={() => {
              const emailInput = document.getElementById("waitlist-email");
              emailInput?.focus();
            }}
          >
            {ctaText}
          </Button>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-xl rounded-2xl border p-6 shadow-2xl backdrop-blur-md"
          style={{
            backgroundColor: colors.cardBg,
            borderColor: colors.cardBorder,
          }}
        >
          <div className="mb-6 text-left">
            <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-200">
              {contactText}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="outline"
              className="flex-1 rounded-full bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
              onClick={onXClick}
            >
              {xButtonText}
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-full bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
              onClick={onCommunityClick}
            >
              {communityButtonText}
            </Button>
          </div>
        </motion.div>

        {/* Hidden email input for accessibility */}
        <form onSubmit={handleSubmit} className="sr-only">
          <Input
            id="waitlist-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </form>
      </motion.div>
    </section>
  );
}
