"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 콘텐츠 설정
 */
const CONTENT = {
  title: "AI와 함께 만드는 특허 종합 솔루션",
  subtitle: "특허명세서 생성부터 OA대응, 다국가 출원준비까지",
  steps: [
    {
      step: 1,
      title: "AI 청구항 생성",
      description: "AI가 발명을 분석하고\n청구항을 먼저 제안합니다",
      isHighlighted: true,
    },
    {
      step: 2,
      title: "초안 생성 & 피드백",
      description: "AI가 초안을 작성하고\n변리사는 초안을 검수하며\n피드백을 제공합니다",
      isHighlighted: false,
    },
    {
      step: 3,
      title: "세부 편집 & 완성",
      description: "섹션별·문단별·문장별로 수정\n요청하면 AI가 즉각 수정을\n반영하고 완성합니다",
      isHighlighted: false,
    },
    {
      step: 4,
      title: "OA 대응",
      description: "심사관 의견에 대한 AI 기반\n답변서 작성 및 보정",
      isHighlighted: false,
    },
    {
      step: 5,
      title: "글로벌 출원",
      description: "다국가 특허 출원을 위한\n번역 및 현지화",
      isHighlighted: false,
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Brain, FileText, Users, CheckCircle, Globe } from "lucide-react";

interface StepItem {
  step: number;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

interface PatentyAiHowItWorks3Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  steps?: StepItem[];
}

// 아이콘 컴포넌트 매핑
const StepIcon = ({
  step,
  isHighlighted,
}: {
  step: number;
  isHighlighted: boolean;
}) => {
  const iconClass = isHighlighted ? "w-7 h-7 text-black" : "w-7 h-7 text-neutral-400";

  switch (step) {
    case 1:
      return <Brain className={iconClass} />;
    case 2:
      return <FileText className={iconClass} />;
    case 3:
      return <Users className={iconClass} />;
    case 4:
      return <CheckCircle className={iconClass} />;
    case 5:
      return <Globe className={iconClass} />;
    default:
      return <Brain className={iconClass} />;
  }
};

export default function PatentyAiHowItWorks3({
  mode = "dark",
  title = CONTENT.title,
  subtitle = CONTENT.subtitle,
  steps = [...CONTENT.steps],
}: PatentyAiHowItWorks3Props) {
  return (
    <section className="relative w-full bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* 단계 카드들 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* 아이콘 */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                  item.isHighlighted
                    ? "bg-white"
                    : "bg-neutral-800"
                }`}
              >
                <StepIcon step={item.step} isHighlighted={item.isHighlighted ?? false} />
              </div>

              {/* 스텝 라벨 */}
              <span className="text-xs font-medium text-neutral-500 tracking-wider mb-2">
                STEP {item.step}
              </span>

              {/* 제목 */}
              <h3 className="text-lg font-bold text-white mb-3">
                {item.title}
              </h3>

              {/* 설명 */}
              <p className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
