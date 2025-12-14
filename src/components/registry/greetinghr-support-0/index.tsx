"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    textPrimary: "#09090B",
    textSecondary: "#71717A",
    border: "#E4E4E7",
    cardBg: "#FFFFFF",
    sectionBg: "#FAFAFA",
  },
  dark: {
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    border: "#374151",
    cardBg: "#1F2937",
    sectionBg: "#111827",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  guidebook: {
    path: "/scraped/greetinghr-com-2025-12-14/images/image-44.png",
    alt: "채용 가이드북 - Greeting Guidebook",
  },
  community: {
    path: "/scraped/greetinghr-com-2025-12-14/images/image-45.png",
    alt: "HR 커뮤니티 - The Change Seminar 2025",
  },
  brochure: {
    path: "/scraped/greetinghr-com-2025-12-14/images/image-46.png",
    alt: "그리팅 서비스 소개서",
  },
  caseStudy: {
    path: "/scraped/greetinghr-com-2025-12-14/images/image-47.png",
    alt: "고객 사례 - Famous Corporation",
  },
  consulting: {
    path: "/scraped/greetinghr-com-2025-12-14/images/image-48.png",
    alt: "채용 브랜딩 컨설팅",
  },
} as const;

/**
 * 컨텐츠 데이터
 */
const CONTENT = {
  badge: "고객 지원",
  headline: "그리팅은 채용 성공을 위한\n모든 것을 제공합니다",
  cards: [
    {
      id: "guidebook",
      title: "채용 가이드북",
      description: "모집부터 선발까지, 채용 문제 해결을 위한 자료",
      image: IMAGES.guidebook,
      size: "medium" as const,
    },
    {
      id: "community",
      title: "HR 커뮤니티",
      description:
        "HR에 진심인 2,000+ 인사담당자와 함께하는 채인지 커뮤니티, 채용·인사·지식의 담론의 장에 참여하세요.",
      image: IMAGES.community,
      size: "large" as const,
    },
    {
      id: "brochure",
      title: "서비스 소개서",
      description: "차별점과 고객들이 선택한 이유를 담은 자료",
      image: IMAGES.brochure,
      size: "small" as const,
    },
    {
      id: "caseStudy",
      title: "고객 사례",
      description: "다양한 산업의 사례 기반 벤치마킹 데이터 제공",
      image: IMAGES.caseStudy,
      size: "small" as const,
    },
    {
      id: "consulting",
      title: "채용 브랜딩 컨설팅",
      description: "조직 특화 채용 브랜딩 정비 및 고도화 지원",
      image: IMAGES.consulting,
      size: "small" as const,
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface GreetinghrSupport0Props {
  mode?: "light" | "dark";
}

export default function GreetinghrSupport0({
  mode = "light",
}: GreetinghrSupport0Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 lg:py-32"
      style={{ backgroundColor: colors.sectionBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div
            className="inline-block px-4 py-1.5 rounded-md text-sm mb-6"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
              color: colors.textPrimary,
            }}
          >
            {CONTENT.badge}
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold whitespace-pre-line leading-tight"
            style={{ color: colors.textPrimary }}
          >
            {CONTENT.headline}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Row - 2 cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group cursor-pointer rounded-2xl overflow-hidden h-[400px] md:h-[500px]"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div className="p-6 flex flex-col h-full">
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    {CONTENT.cards[0].title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    {CONTENT.cards[0].description}
                  </p>
                </div>
                <ArrowRight
                  className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1"
                  style={{ color: colors.textSecondary }}
                />
              </div>
              {/* Card Image */}
              <div className="flex-1 relative mt-4">
                <Image
                  src={CONTENT.cards[0].image.path}
                  alt={CONTENT.cards[0].image.alt}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group cursor-pointer rounded-2xl overflow-hidden h-[400px] md:h-[500px] lg:col-span-2"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div className="p-6 flex flex-col h-full">
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    {CONTENT.cards[1].title}
                  </h3>
                  <p
                    className="text-sm max-w-lg"
                    style={{ color: colors.textSecondary }}
                  >
                    {CONTENT.cards[1].description}
                  </p>
                </div>
                <ArrowRight
                  className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1"
                  style={{ color: colors.textSecondary }}
                />
              </div>
              {/* Card Image */}
              <div className="flex-1 relative mt-4">
                <Image
                  src={CONTENT.cards[1].image.path}
                  alt={CONTENT.cards[1].image.alt}
                  fill
                  className="object-cover object-center rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Second Row - 3 cards */}
          {CONTENT.cards.slice(2).map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer rounded-2xl overflow-hidden h-[350px] md:h-[400px]"
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.border}`,
              }}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: colors.textPrimary }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: colors.textSecondary }}
                    >
                      {card.description}
                    </p>
                  </div>
                  <ArrowRight
                    className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ color: colors.textSecondary }}
                  />
                </div>
                {/* Card Image */}
                <div className="flex-1 relative mt-4">
                  <Image
                    src={card.image.path}
                    alt={card.image.alt}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
