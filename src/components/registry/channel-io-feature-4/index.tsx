"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#7B68EE",
    accentHover: "#6B5ADB",
  },
  dark: {
    accent: "#9D8FFF",
    accentHover: "#8B7DFF",
  },
} as const;

const FEATURES = [
  {
    title: "모든 상담을\n한 곳에서",
    description: "어디서나 쉽고 빠르게",
    image: "/registry/channel-io-feature-4/image-20.webp",
    alt: "통합 메신저 화면",
    size: "large",
  },
  {
    title: "전화 상담도 AI",
    description: "010-1234-5678",
    image: "/registry/channel-io-feature-4/image-21.webp",
    alt: "AI 전화 상담",
    size: "medium",
  },
  {
    title: "문서와 지식을 하나로",
    description: "팀의 모든 지식을 한 곳에",
    image: "/registry/channel-io-feature-4/image-22.webp",
    alt: "문서 관리 시스템",
    size: "medium",
  },
  {
    title: "매출을 올리는 CRM 마케팅",
    description: "고객 데이터 기반 마케팅",
    image: "/registry/channel-io-feature-4/image-23.webp",
    alt: "CRM 마케팅 대시보드",
    size: "medium",
  },
  {
    title: "AI로 더 편해진 사내 메신저",
    description: "팀 커뮤니케이션을 더 스마트하게",
    image: "/registry/channel-io-feature-4/image-24.webp",
    alt: "팀 메신저 화면",
    size: "medium",
  },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface ChannelIoFeature4Props {
  mode?: "light" | "dark";
}

export default function ChannelIoFeature4({
  mode = "light",
}: ChannelIoFeature4Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            채널톡은 고객과 팀을 위한
            <br />
            <span style={{ color: colors.accent }}>올인원 AI 메신저</span>입니다
          </h2>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 whitespace-pre-line mb-2">
                {FEATURES[0].title}
              </h3>
              <p className="text-gray-500 text-sm">{FEATURES[0].description}</p>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src={FEATURES[0].image}
                alt={FEATURES[0].alt}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Medium Cards */}
          {FEATURES.slice(1).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
