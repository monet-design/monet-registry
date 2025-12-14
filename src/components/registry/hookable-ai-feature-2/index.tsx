"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    cardBackground: "#FFFFFF",
    text: "#111111",
    textMuted: "#4C4C4C",
    gradientStart: "#FF2F2F",
    gradientMid1: "#EF7B16",
    gradientMid2: "#8A43E1",
    gradientEnd: "#D511FD",
    iconRed: "#FF2F2F",
    iconPurple: "#8A43E1",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  feature1: {
    path: "/registry/hookable-ai-feature-2/feature1-main.png",
    alt: "상세페이지 기획 UI 스크린샷",
  },
  feature2: {
    path: "/registry/hookable-ai-feature-2/feature2-screens.png",
    alt: "상세페이지 디자인 레퍼런스 스크린샷",
  },
  feature4Chat: {
    path: "/registry/hookable-ai-feature-2/feature4-chat.png",
    alt: "채팅 인터페이스 스크린샷",
  },
  feature4Result: {
    path: "/registry/hookable-ai-feature-2/feature4-result.png",
    alt: "수정 결과 스크린샷",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { Check, GitBranch, Star } from "lucide-react";

interface FeatureItem {
  label: string;
  title: string;
  titleBreak?: string;
  description: string;
  descriptionBreak?: string;
  checkItems?: string[];
  subFeatures?: {
    icon: "branch" | "star";
    title: string;
    description: string;
  }[];
}

interface HookableAiFeature2Props {
  mode?: "light" | "dark";
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    label: "상세페이지 기획",
    title: "팔리는 상품에는",
    titleBreak: "공통된 법칙이 있어요.",
    description: "AI가 분석한 수만 개의 히트 상품 판매 공식을 내 상품에 적용해요",
    checkItems: [
      "업종별 / 타겟층별 고매출 상세페이지 학습",
      "소비자의 시선을 사로잡는 이미지 배치",
      "구매 욕구를 자극하는 카피라이팅",
    ],
  },
  {
    label: "상세페이지 디자인",
    title: "원하는 디자인 레퍼런스,",
    titleBreak: "가져만 오세요.",
    description: "0에서 1을 만드는 과정은 고통스럽죠.",
    descriptionBreak: "내가 원하는 '그 느낌', 어렵게 설명하지 않아도 돼요",
    subFeatures: [
      {
        icon: "branch",
        title: "무드 & 톤앤 매너 분석",
        description: "레퍼런스의 색상, 폰트, 전체적인 무드앤톤을 분석하여 적용해요",
      },
      {
        icon: "star",
        title: "검증된 고품질 템플릿 기반",
        description:
          "수많은 A/B 테스트로 검증된 고품질 템플릿을 기반으로 재해석해요",
      },
    ],
  },
  {
    label: "카피라이팅",
    title: "1000명의 고객 목소리를 담",
    titleBreak: "은 단 하나의 문장.",
    description: "모든 카피라이팅에는 근거가 있어야하죠.",
    descriptionBreak:
      "어떻게 이런 멋진 문장이 탄생할 수 있었는지 고객 리뷰를 바탕으로 설명드려요.",
  },
  {
    label: "쉬운 수정",
    title: "더 나은 표현 없을까?",
    titleBreak: "클릭 후 - 채팅.",
    description: "외주업체와 주고받는 수십 번의 이메일과 메신저 대신,",
    descriptionBreak: "수정을 희망하는 부분 클릭. 그리고 한 번의 채팅.",
  },
];

// Badge Component
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium"
      style={{
        backgroundColor: COLORS.light.cardBackground,
        color: COLORS.light.text,
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </span>
  );
}

// Gradient Check Icon
function GradientCheckIcon() {
  return (
    <div
      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg"
      style={{
        background: `linear-gradient(180deg, ${COLORS.light.textMuted} 0%, ${COLORS.light.text} 100%)`,
        boxShadow:
          "0 6px 12px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.1), 0 6px 11px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
    </div>
  );
}

// Feature 1: 상세페이지 기획
function Feature1({ feature }: { feature: FeatureItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid gap-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
        <Image
          src={IMAGES.feature1.path}
          alt={IMAGES.feature1.alt}
          width={560}
          height={437}
          className="h-auto w-full rounded-lg object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center space-y-6">
        <Badge>{feature.label}</Badge>
        <h2
          className="text-3xl font-bold leading-tight lg:text-4xl"
          style={{ color: COLORS.light.text }}
        >
          {feature.title}
          <br />
          {feature.titleBreak}
        </h2>
        <p style={{ color: COLORS.light.textMuted }}>{feature.description}</p>

        {/* Check Items */}
        <div className="space-y-3">
          {feature.checkItems?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <GradientCheckIcon />
              <span style={{ color: COLORS.light.textMuted }}>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Feature 2: 상세페이지 디자인
function Feature2({ feature }: { feature: FeatureItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid gap-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Content */}
      <div className="flex flex-col justify-center space-y-6">
        <Badge>{feature.label}</Badge>
        <h2
          className="text-3xl font-bold leading-tight lg:text-4xl"
          style={{ color: COLORS.light.text }}
        >
          {feature.title}
          <br />
          {feature.titleBreak}
        </h2>
        <p style={{ color: COLORS.light.textMuted }}>
          {feature.description}
          <br />
          {feature.descriptionBreak}
        </p>

        {/* Sub Features */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          {feature.subFeatures?.map((sub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex-1 space-y-2"
            >
              <div className="flex items-center gap-2">
                {sub.icon === "branch" ? (
                  <GitBranch
                    className="h-5 w-5"
                    style={{ color: COLORS.light.iconRed }}
                  />
                ) : (
                  <Star
                    className="h-5 w-5"
                    style={{ color: COLORS.light.iconPurple }}
                  />
                )}
                <span
                  className="font-semibold"
                  style={{ color: COLORS.light.text }}
                >
                  {sub.title}
                </span>
              </div>
              <p className="text-sm" style={{ color: COLORS.light.textMuted }}>
                {sub.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <Image
          src={IMAGES.feature2.path}
          alt={IMAGES.feature2.alt}
          width={520}
          height={476}
          className="h-auto w-full rounded-xl object-contain"
        />
      </div>
    </motion.div>
  );
}

// Feature 3: 카피라이팅
function Feature3({ feature }: { feature: FeatureItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid gap-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Placeholder for Video/Image - Using a styled div */}
      <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500">
              <span className="text-2xl font-bold text-white">30x</span>
            </div>
            <p className="text-sm text-gray-500">리뷰 분석 결과</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center space-y-6">
        <Badge>{feature.label}</Badge>
        <h2
          className="text-3xl font-bold leading-tight lg:text-4xl"
          style={{ color: COLORS.light.text }}
        >
          {feature.title}
          {feature.titleBreak}
        </h2>
        <p style={{ color: COLORS.light.textMuted }}>
          {feature.description}
          <br />
          {feature.descriptionBreak}
        </p>
      </div>
    </motion.div>
  );
}

// Feature 4: 쉬운 수정
function Feature4({ feature }: { feature: FeatureItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid gap-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Content */}
      <div className="flex flex-col justify-center space-y-6">
        <Badge>{feature.label}</Badge>
        <h2
          className="text-3xl font-bold leading-tight lg:text-4xl"
          style={{ color: COLORS.light.text }}
        >
          {feature.title}
          <br />
          {feature.titleBreak}
        </h2>
        <p style={{ color: COLORS.light.textMuted }}>
          {feature.description}
          <br />
          {feature.descriptionBreak}
        </p>
      </div>

      {/* Images */}
      <div className="relative space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
        >
          <Image
            src={IMAGES.feature4Chat.path}
            alt={IMAGES.feature4Chat.alt}
            width={760}
            height={226}
            className="h-auto w-full object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
        >
          <Image
            src={IMAGES.feature4Result.path}
            alt={IMAGES.feature4Result.alt}
            width={658}
            height={164}
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HookableAiFeature2({
  mode = "light",
  features = defaultFeatures,
}: HookableAiFeature2Props) {
  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: COLORS.light.background }}
    >
      <div className="mx-auto max-w-6xl space-y-20 px-6 lg:space-y-32 lg:px-8">
        {/* Feature 1 */}
        {features[0] && <Feature1 feature={features[0]} />}

        {/* Feature 2 */}
        {features[1] && <Feature2 feature={features[1]} />}

        {/* Feature 3 */}
        {features[2] && <Feature3 feature={features[2]} />}

        {/* Feature 4 */}
        {features[3] && <Feature4 feature={features[3]} />}
      </div>
    </section>
  );
}
