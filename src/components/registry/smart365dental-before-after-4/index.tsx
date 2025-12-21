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
    // Primary 액센트 (turquoise/cyan from the dental site)
    accent: "#37B8D6",          // Turquoise
    accentHover: "#2A9DB8",     // Darker turquoise
    background: "#F5F8FA",      // Light gray background
  },
  dark: {
    accent: "#37B8D6",
    accentHover: "#2A9DB8",
    background: "#1F2937",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  beforeXray: {
    path: "/registry/smart365dental-before-after-4/before-xray.png",
    alt: "치료 전 치아 엑스레이",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Dental panoramic x-ray showing teeth before treatment</summary>
<mood>Medical, professional, clinical</mood>
<background_summary>Dark gray/black x-ray background typical of dental radiographs</background_summary>
<primary_element>Full panoramic dental x-ray image showing upper and lower teeth, jaw structure in grayscale. The x-ray should show natural teeth with some dental issues visible (cavities, misalignment, or missing teeth) that would require treatment. Medical imaging style with clear tooth structures and bone definition.</primary_element>
<etc_element>None - single x-ray image only</etc_element>`,
  },
  afterXray: {
    path: "/registry/smart365dental-before-after-4/after-xray.png",
    alt: "치료 후 치아 엑스레이",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Dental panoramic x-ray showing teeth after successful treatment</summary>
<mood>Medical, professional, clinical, successful outcome</mood>
<background_summary>Dark gray/black x-ray background typical of dental radiographs</background_summary>
<primary_element>Full panoramic dental x-ray image showing upper and lower teeth, jaw structure in grayscale. The x-ray should show treated teeth with visible improvements - dental implants, bridges, or restored teeth. The image should demonstrate successful dental treatment with clear, well-aligned teeth structures. Medical imaging style with clear tooth structures and bone definition.</primary_element>
<etc_element>None - single x-ray image only</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface TreatmentCase {
  id: number;
  beforeImage: string;
  afterImage: string;
  date: string;
  description: string;
}

interface Smart365dentalBeforeAfter4Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  mainCaseTitle?: string;
  beforeLabel?: string;
  afterLabel?: string;
  disclaimer?: string;
  cases?: TreatmentCase[];
}

export default function Smart365dentalBeforeAfter4({
  mode = "light",
  title = "치료 전 · 후",
  subtitle = "스마트365치과의원은\n환자분들에게 믿음을 드릴 수 있도록\n최선을 다합니다.",
  mainCaseTitle = "치료 케이스",
  beforeLabel = "치료 전",
  afterLabel = "치료 후",
  disclaimer = "* 치료 사례 및 결과는 개인마다 차이가 있을 수 있으며 부작용이 발생할 수 있습니다.\n모든 치료 내용은 담당 의료진과 충분히 상담 후 진행하시길 바랍니다.",
  cases = [
    {
      id: 1,
      beforeImage: IMAGES.beforeXray.path,
      afterImage: IMAGES.afterXray.path,
      date: "2024.01",
      description: "전체 임플란트",
    },
    {
      id: 2,
      beforeImage: IMAGES.beforeXray.path,
      afterImage: IMAGES.afterXray.path,
      date: "2024.02",
      description: "부분 임플란트",
    },
    {
      id: 3,
      beforeImage: IMAGES.beforeXray.path,
      afterImage: IMAGES.afterXray.path,
      date: "2024.03",
      description: "치아 교정",
    },
    {
      id: 4,
      beforeImage: IMAGES.beforeXray.path,
      afterImage: IMAGES.afterXray.path,
      date: "2024.04",
      description: "라미네이트",
    },
    {
      id: 5,
      beforeImage: IMAGES.beforeXray.path,
      afterImage: IMAGES.afterXray.path,
      date: "2024.05",
      description: "치아 미백",
    },
    {
      id: 6,
      beforeImage: IMAGES.beforeXray.path,
      afterImage: IMAGES.afterXray.path,
      date: "2024.06",
      description: "크라운",
    },
  ],
  ...props
}: Smart365dentalBeforeAfter4Props) {
  const colors = COLORS[mode];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cases.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < cases.length - 1 ? prev + 1 : 0));
  };

  const currentCase = cases[currentIndex];

  return (
    <section
      className="relative w-full py-16 px-4 md:py-24"
      style={{ backgroundColor: mode === "light" ? colors.background : colors.background }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100 md:text-4xl">
            {title}
          </h2>
          <p className="whitespace-pre-line text-sm text-gray-600 dark:text-gray-400 md:text-base">
            {subtitle}
          </p>
        </motion.div>

        {/* Main Case Display */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 z-10 -translate-x-12 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:scale-110 hover:shadow-xl dark:bg-gray-800 md:-translate-x-16"
            aria-label="이전 케이스"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-12 rounded-full bg-white p-2 shadow-lg transition-all hover:scale-110 hover:shadow-xl dark:bg-gray-800 md:translate-x-16"
            aria-label="다음 케이스"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Main Card */}
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
            {/* Card Header */}
            <div
              className="py-3 text-center text-white"
              style={{ backgroundColor: colors.accent }}
            >
              <h3 className="text-lg font-bold md:text-xl">{mainCaseTitle}</h3>
            </div>

            {/* Before/After Images */}
            <div className="space-y-3 p-6">
              {/* Before Image */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className="rounded px-3 py-1 text-xs font-medium text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    {beforeLabel}
                  </span>
                </div>
                <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src={currentCase.beforeImage}
                    alt={`${beforeLabel} - ${currentCase.description}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* After Image */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className="rounded px-3 py-1 text-xs font-medium text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    {afterLabel}
                  </span>
                </div>
                <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src={currentCase.afterImage}
                    alt={`${afterLabel} - ${currentCase.description}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="px-6 pb-4">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: colors.accent }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentIndex + 1) / cases.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline/Carousel of Cases */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide md:justify-center">
            {cases.map((caseItem, index) => (
              <button
                key={caseItem.id}
                onClick={() => setCurrentIndex(index)}
                className={`group relative flex-shrink-0 overflow-hidden rounded-lg transition-all ${
                  index === currentIndex
                    ? "ring-4 ring-opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
                style={
                  index === currentIndex
                    ? { boxShadow: `0 0 0 3px ${colors.accent}` }
                    : {}
                }
              >
                <div className="w-24 space-y-1.5 bg-white p-2 dark:bg-gray-800 md:w-28">
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {caseItem.date}
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded bg-gray-900">
                    <Image
                      src={caseItem.beforeImage}
                      alt={caseItem.description}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs font-medium text-gray-800 dark:text-gray-200">
                    {caseItem.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="whitespace-pre-line text-xs text-gray-500 dark:text-gray-400">
            {disclaimer}
          </p>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
    </section>
  );
}
