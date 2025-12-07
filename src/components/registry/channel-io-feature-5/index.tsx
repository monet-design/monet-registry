"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#7B68EE",
    accentHover: "#6B5ADB",
    gradientFrom: "#667eea",
    gradientTo: "#764ba2",
  },
  dark: {
    accent: "#9D8FFF",
    accentHover: "#8B7DFF",
    gradientFrom: "#667eea",
    gradientTo: "#764ba2",
  },
} as const;

const FEATURES = [
  {
    title: "상담 대신\n고객의 문제를\n직접 해결하는 AI",
    description: "",
    image: "/registry/channel-io-feature-5/image-25.webp",
    alt: "AI 자동화 태스크 화면",
    accent: true,
    subtitle: "",
  },
  {
    title: "더욱 풍부하고\n정확해진 지식",
    description: "AI가 학습하는 지식베이스",
    image: "/registry/channel-io-feature-5/image-26.webp",
    alt: "지식베이스 관리 화면",
    accent: false,
    subtitle: "ALF 지식",
  },
  {
    title: "5분만에 세팅하는\n맞춤형 AI 상담원",
    description: "간편한 설정으로 바로 시작",
    image: "/registry/channel-io-feature-5/image-27.webp",
    alt: "AI 상담원 설정 화면",
    accent: false,
    subtitle: "ALF 규칙",
  },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ChannelIoFeature5Props {
  mode?: "light" | "dark";
}

export default function ChannelIoFeature5({
  mode = "light",
}: ChannelIoFeature5Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            반복되는 고객 문의를
            <br />
            <span style={{ color: colors.accent }}>AI로 자동화</span>하세요
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: colors.accent }}
          >
            자세히 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:row-span-2 rounded-3xl overflow-hidden relative group"
            style={{
              background: `linear-gradient(135deg, ${colors.gradientFrom}, ${colors.gradientTo})`,
            }}
          >
            <div className="p-8 pb-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-white whitespace-pre-line leading-tight">
                {FEATURES[0].title}
              </h3>
            </div>
            <div className="relative h-80 lg:h-[400px]">
              <Image
                src={FEATURES[0].image}
                alt={FEATURES[0].alt}
                fill
                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Smaller Feature Cards */}
          {FEATURES.slice(1).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.15 }}
              className="bg-gray-50 rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                {feature.subtitle && (
                  <span
                    className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-3"
                    style={{ backgroundColor: colors.accent }}
                  >
                    {feature.subtitle}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 whitespace-pre-line leading-tight mb-2">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                )}
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
