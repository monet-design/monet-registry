"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#F1F0EE",
  text: "#111111",
  badgeBackground: "#FFFFFF",
  buttonBackground: "#111111",
  buttonText: "#FFFFFF",
  border: "#DED8D3",
  subText: "#808080",
} as const;

/**
 * FAQ 데이터
 */
const DEFAULT_FAQ_DATA = {
  badge: "FAQs",
  heading: "자주 묻는 질문",
  leftColumn: [
    {
      question: "후커블AI는 정확히 어떤 서비스인가요?",
      answer: "후커블AI는 AI 기반 상세페이지 제작 서비스입니다. 상품 정보만 입력하면 AI가 자동으로 마케팅 문구와 디자인을 생성해 드립니다.",
    },
    {
      question: "디자인이나 마케팅을 전혀 몰라도 괜찮을까요?",
      answer: "네, 전혀 문제없습니다. AI가 마케팅 전문가 수준의 문구와 디자인을 자동으로 생성해 드립니다.",
    },
    {
      question: "AI가 만든 디자인, 퀄리티를 믿을 수 있나요?",
      answer: "물론입니다. 후커블AI는 수천 개의 고품질 상세페이지 데이터를 학습하여 전문가 수준의 결과물을 제공합니다.",
    },
    {
      question: "다른 사람들과 똑같은 디자인이 나오는 거 아닌가요?",
      answer: "아닙니다. AI가 매번 고유한 조합으로 디자인을 생성하기 때문에 동일한 결과물이 나오지 않습니다.",
    },
    {
      question: "AI가 제안하는 기획과 문구는 어떤 원리로 만들어지나요?",
      answer: "상품 특성과 타겟 고객을 분석하여 최적의 마케팅 전략과 카피라이팅을 자동으로 생성합니다.",
    },
  ],
  rightColumn: [
    {
      question: "생성된 디자인이나 문구를 제 마음대로 수정할 수 있나요?",
      answer: "네, 모든 결과물은 자유롭게 수정하실 수 있습니다. 편집 기능을 통해 원하는 대로 조정해 보세요.",
    },
    {
      question: "상세페이지 제작 외주 비용, 정말 아낄 수 있나요?",
      answer: "네, 기존 외주 비용 대비 최대 90%까지 절감할 수 있습니다.",
    },
    {
      question: "상세페이지 1개를 만드는 데 시간이 얼마나 걸리나요?",
      answer: "평균 10분 이내에 완성된 상세페이지를 받아보실 수 있습니다.",
    },
    {
      question: "최종 결과물은 어떤 형태로 받을 수 있나요?",
      answer: "PNG, JPG 이미지 파일로 다운로드 받으실 수 있으며, 바로 쇼핑몰에 업로드할 수 있습니다.",
    },
    {
      question: "AI가 사용하는 이미지나 폰트에 저작권 문제는 없나요?",
      answer: "모든 이미지와 폰트는 상업적 사용이 가능한 라이선스를 보유하고 있어 안심하고 사용하실 수 있습니다.",
    },
  ],
  ctaTitle: "궁금한 점이 있으신가요? 언제든지 도와드리겠습니다!",
  ctaDescription: "문의사항이나 도움이 필요하시면 고객지원팀에 연락해주세요.",
  ctaButtonText: "문의하기",
  ctaButtonHref: "#contact",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface HookableAiFaq8Props {
  badge?: string;
  heading?: string;
  leftColumn?: FAQItem[];
  rightColumn?: FAQItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
}

function AccordionItem({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="border-t cursor-pointer"
      style={{ borderColor: COLORS.border }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between py-5 px-1">
        <h5
          className="text-base font-medium text-left pr-4"
          style={{ color: COLORS.text }}
        >
          {item.question}
        </h5>
        <div
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
          style={{ color: COLORS.text }}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 px-1 text-sm leading-relaxed"
              style={{ color: COLORS.subText }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HookableAiFaq8({
  badge = DEFAULT_FAQ_DATA.badge,
  heading = DEFAULT_FAQ_DATA.heading,
  leftColumn = DEFAULT_FAQ_DATA.leftColumn,
  rightColumn = DEFAULT_FAQ_DATA.rightColumn,
  ctaTitle = DEFAULT_FAQ_DATA.ctaTitle,
  ctaDescription = DEFAULT_FAQ_DATA.ctaDescription,
  ctaButtonText = DEFAULT_FAQ_DATA.ctaButtonText,
  ctaButtonHref = DEFAULT_FAQ_DATA.ctaButtonHref,
}: HookableAiFaq8Props) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section
      className="relative w-full py-20 px-4 md:px-8"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div
            className="px-3 py-2 rounded-full mb-4"
            style={{
              backgroundColor: COLORS.badgeBackground,
              boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: COLORS.text }}
            >
              {badge}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ color: COLORS.text }}
          >
            {heading}
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Left Column */}
          <div>
            {leftColumn.map((item, index) => (
              <AccordionItem
                key={`left-${index}`}
                item={item}
                isOpen={openItems.has(`left-${index}`)}
                onClick={() => toggleItem(`left-${index}`)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumn.map((item, index) => (
              <AccordionItem
                key={`right-${index}`}
                item={item}
                isOpen={openItems.has(`right-${index}`)}
                onClick={() => toggleItem(`right-${index}`)}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          className="rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ backgroundColor: COLORS.background }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h5
              className="text-base md:text-lg font-semibold mb-1"
              style={{ color: COLORS.text }}
            >
              {ctaTitle}
            </h5>
            <p className="text-sm" style={{ color: COLORS.subText }}>
              {ctaDescription}
            </p>
          </div>
          <a
            href={ctaButtonHref}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: COLORS.buttonBackground,
              color: COLORS.buttonText,
            }}
          >
            {ctaButtonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
