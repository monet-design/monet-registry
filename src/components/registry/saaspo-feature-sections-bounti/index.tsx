"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#E54D2E", // 오렌지-레드
    accentHover: "#D13415",
    text: "#1a1a1a",
    textMuted: "#666666",
    background: "#ffffff",
    buttonBg: "#1a1a1a",
    buttonText: "#ffffff",
    cardOverlay: "rgba(0,0,0,0.4)",
  },
  dark: {
    accent: "#FF6B4A",
    accentHover: "#E54D2E",
    text: "#ffffff",
    textMuted: "#a0a0a0",
    background: "#0a0a0a",
    buttonBg: "#ffffff",
    buttonText: "#0a0a0a",
    cardOverlay: "rgba(0,0,0,0.6)",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  main: {
    path: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    alt: "Chef in motion preparing food in kitchen",
    prompt: "Professional chef with motion blur effect working in restaurant kitchen, wearing striped apron, warm golden lighting",
  },
  side1: {
    path: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=600&fit=crop",
    alt: "Fresh vegetables being prepared",
    prompt: "Close up of hands preparing fresh green vegetables in professional kitchen, soft natural lighting",
  },
  side2: {
    path: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=600&fit=crop",
    alt: "Chef cooking at stove",
    prompt: "Professional chef cooking at commercial stove, flames visible, professional kitchen environment",
  },
  side3: {
    path: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=400&h=600&fit=crop",
    alt: "Kitchen cooking scene",
    prompt: "Professional kitchen scene with food being cooked, warm lighting, restaurant atmosphere",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface UseCaseItem {
  id: string;
  label: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  mainImage: {
    src: string;
    alt: string;
  };
  sideImages: Array<{
    src: string;
    alt: string;
  }>;
}

interface SaaspoFeatureSectionsBountiProps {
  mode?: "light" | "dark";
  tagLabel?: string;
  headline?: string;
  subheadline?: string;
  useCases?: UseCaseItem[];
}

const defaultUseCases: UseCaseItem[] = [
  {
    id: "onboarding",
    label: "ONBOARDING",
    title: "Onboard new employees",
    description: "Efficiently integrate new hires and increase time to productivity",
    buttonText: "Discover Onboarding-Software",
    buttonHref: "#onboarding",
    mainImage: {
      src: IMAGES.main.path,
      alt: IMAGES.main.alt,
    },
    sideImages: [
      { src: IMAGES.side1.path, alt: IMAGES.side1.alt },
      { src: IMAGES.side2.path, alt: IMAGES.side2.alt },
      { src: IMAGES.side3.path, alt: IMAGES.side3.alt },
    ],
  },
];

export default function SaaspoFeatureSectionsBounti({
  mode = "light",
  tagLabel = "USE CASES",
  headline = "We cover everything that helps\nyour staff to perform better",
  subheadline = "Automate onboarding, enable staff and offer development opportunities",
  useCases = defaultUseCases,
}: SaaspoFeatureSectionsBountiProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: Tag + Headline */}
          <div className="flex-1">
            {/* Tag Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-2"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: colors.accent }}
              />
              <span
                className="text-xs font-medium tracking-wider"
                style={{ color: colors.accent }}
              >
                {tagLabel}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
              style={{ color: colors.text, whiteSpace: "pre-line" }}
            >
              {headline}
            </motion.h2>
          </div>

          {/* Right: Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-sm text-right text-sm leading-relaxed lg:pt-12"
            style={{ color: colors.textMuted }}
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Use Cases Gallery */}
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image Gallery */}
            <div className="flex gap-3 md:gap-4">
              {/* Main Image */}
              <div className="relative flex-[2] overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={useCase.mainImage.src}
                    alt={useCase.mainImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
                    }}
                  />
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    {/* Label */}
                    <span
                      className="mb-2 inline-block rounded bg-white/10 px-2 py-1 text-[10px] font-medium tracking-wider text-white backdrop-blur-sm"
                    >
                      {useCase.label}
                    </span>
                    {/* Title */}
                    <h3 className="mb-1 text-xl font-semibold text-white md:text-2xl">
                      {useCase.title}
                    </h3>
                    {/* Description */}
                    <p className="max-w-xs text-sm text-white/80">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href={useCase.buttonHref}
                  className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:gap-3 md:bottom-8 md:right-8"
                  style={{
                    backgroundColor: colors.buttonBg,
                    color: colors.buttonText,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {useCase.buttonText}
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>

              {/* Side Images */}
              <div className="hidden flex-1 flex-col gap-3 md:flex md:gap-4 lg:flex-row">
                {useCase.sideImages.map((img, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + imgIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex-1 overflow-hidden rounded-2xl"
                  >
                    <div className="aspect-[3/4] w-full lg:aspect-auto lg:h-full">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 1024px) 33vw, 20vw"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Side Images */}
            <div className="mt-3 flex gap-3 md:hidden">
              {useCase.sideImages.map((img, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + imgIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex-1 overflow-hidden rounded-xl"
                >
                  <div className="aspect-square w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
