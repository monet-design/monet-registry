"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#00A47C",
    accentLight: "#E6F7F2",
  },
  dark: {
    accent: "#00C896",
    accentLight: "#0D3D2D",
  },
} as const;

const IMAGES = {
  step1: {
    path: "/scraped/whattime-co-kr-2025-12-14/images/image-60.png",
    alt: "캘린더 연동",
  },
  step2: {
    path: "/scraped/whattime-co-kr-2025-12-14/images/image-61.png",
    alt: "예약 페이지 공유",
  },
  step3: {
    path: "/scraped/whattime-co-kr-2025-12-14/images/image-62.png",
    alt: "일정 예약",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Step {
  number: string;
  title: string;
  description?: string;
  imagePath: string;
  imageAlt: string;
}

interface WhattimeHowItWorks2Props {
  mode?: "light" | "dark";
  subtitle?: string;
  title?: string;
  highlightedText?: string;
  description?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: "1단계",
    title: "캘린더 연동",
    imagePath: IMAGES.step1.path,
    imageAlt: IMAGES.step1.alt,
  },
  {
    number: "2단계",
    title: "예약 페이지 공유",
    imagePath: IMAGES.step2.path,
    imageAlt: IMAGES.step2.alt,
  },
  {
    number: "3단계",
    title: "일정 예약",
    imagePath: IMAGES.step3.path,
    imageAlt: IMAGES.step3.alt,
  },
];

export default function WhattimeHowItWorks2({
  mode = "light",
  subtitle = "사용 방법",
  title = "1분 안에",
  highlightedText = "예약 페이지 만들고 미팅 진행하기",
  description = "캘린더와 화상 회의 계정을 연동하고 예약페이지를 만들어 보세요.\n다양한 상태 알림 서비스로 공유할 수 있습니다.",
  steps = defaultSteps,
}: WhattimeHowItWorks2Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm mb-2" style={{ color: colors.accent }}>{subtitle}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span style={{ color: colors.accent }}>{title}</span> {highlightedText}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
            {description}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Step Badge */}
              <div className="flex justify-center mb-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: colors.accentLight, color: colors.accent }}
                >
                  {step.number}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
                {step.title}
              </h3>

              {/* Step Content - Image */}
              <div className="relative">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <Image
                    src={step.imagePath}
                    alt={step.imageAlt}
                    width={337}
                    height={265}
                    className="w-full h-auto"
                  />
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-8 w-8" style={{ color: colors.accent }} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
