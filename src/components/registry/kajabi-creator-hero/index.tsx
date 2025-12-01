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
    // Grayscale uses Tailwind - no custom colors needed for this component
    border: "#E2E1E2",  // Light border
  },
  dark: {
    border: "#3a3a3e",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // No images in this component
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface KajabiCreatorHeroProps {
  mode?: "light" | "dark";
  title?: string;
  faqItems?: FAQItem[];
  defaultOpenIndex?: number;
}

const defaultFAQItems: FAQItem[] = [
  {
    question: "What Is Creator Studio?",
    answer:
      "Kajabi Creator Studio is a generative AI tool that repurposes any video into 40+ types of content for your end-to-end marketing funnel.\n\nCreator Studio combines the power of AI and the editing capabilities of Adobe Express to make content generation fast, easy, and affordable. With just a few clicks, you can have enough content to market your course, coaching program, podcast, and community for weeks.",
  },
  {
    question: "What Are The Benefits Of Using Creator Studio?",
    answer:
      "Creator Studio helps you save time and resources by automatically generating multiple content pieces from a single video. It streamlines your marketing workflow and ensures consistent content production.",
  },
  {
    question:
      "How Are Top Creators Using AI To Grow Their Audience And Their Business?",
    answer:
      "Top creators leverage AI to automate content repurposing, create engaging social media clips, generate email sequences, and produce blog posts from their existing content library.",
  },
  {
    question: "What Kinds Of Content Does Creator Studio Generate?",
    answer:
      "Creator Studio generates over 40 types of content including social media posts, video clips, blog articles, email sequences, audiograms, quote graphics, and more.",
  },
  {
    question: "What Is Content Repurposing?",
    answer:
      "Content repurposing is the practice of transforming existing content into different formats to reach wider audiences across multiple platforms and channels.",
  },
  {
    question: "Does Creator Studio Include Video Templates?",
    answer:
      "Yes, Creator Studio includes professionally designed video templates that you can customize to match your brand and style.",
  },
  {
    question: "How Does Creator Studio Work?",
    answer:
      "Simply upload your video, and Creator Studio's AI analyzes the content to automatically generate multiple content pieces optimized for different platforms.",
  },
  {
    question:
      "How Is Creator Studio Different From Other Content Repurposing Tools?",
    answer:
      "Creator Studio is deeply integrated with Kajabi's ecosystem, offering seamless workflow with your courses, coaching programs, and marketing funnels.",
  },
  {
    question:
      "I Don't Have Marketing, Video Editing, Or Design Experience. Can I Use Creator Studio?",
    answer:
      "Absolutely! Creator Studio is designed for creators of all skill levels. The AI handles the technical aspects while you focus on your expertise.",
  },
  {
    question:
      "My Courses And Webinars Have Hundreds Of Topics. Can Creator Studio Create Video Clips Based On A Topic Or Keyword?",
    answer:
      "Yes, Creator Studio can intelligently identify and extract clips based on specific topics, keywords, or themes from your content library.",
  },
  {
    question: "How Does Creator Studio Help Me Build My Email List?",
    answer:
      "Creator Studio generates lead magnets, email sequences, and social content designed to drive traffic and conversions to your opt-in pages.",
  },
  {
    question: "What Videos Can I Repurpose Using Creator Studio?",
    answer:
      "You can repurpose any video content including course videos, webinars, coaching sessions, podcasts, and live recordings.",
  },
  {
    question:
      "How Do I Repurpose My Kajabi Course Videos And Coaching Recordings?",
    answer:
      "Simply connect your Kajabi content library to Creator Studio, select the videos you want to repurpose, and let the AI do the rest.",
  },
  {
    question: "How Do I Create A Mini Course Using Kajabi Creator Studio?",
    answer:
      "Creator Studio can extract key segments from your existing content to help you build focused mini courses that serve as lead magnets or standalone products.",
  },
  {
    question: "Does Creator Studio Add Watermarks?",
    answer:
      "No, Creator Studio does not add watermarks to your generated content. Your content remains completely yours.",
  },
  {
    question: "Is Creator Studio Included In Every Kajabi Subscription?",
    answer:
      "Creator Studio availability depends on your Kajabi subscription plan. Check your plan details for specific feature inclusions.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  colors,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  colors: typeof COLORS.light | typeof COLORS.dark;
}) {
  return (
    <div className="border-b" style={{ borderColor: colors.border }}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:opacity-80"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-[15px] font-semibold text-black">
          {item.question}
        </span>
        <span className="shrink-0 text-black">
          {isOpen ? (
            <ChevronUp className="h-5 w-5" strokeWidth={2} />
          ) : (
            <ChevronDown className="h-5 w-5" strokeWidth={2} />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              {item.answer.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[14px] leading-relaxed text-gray-700"
                  style={{ marginBottom: index < item.answer.split("\n\n").length - 1 ? "1rem" : 0 }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function KajabiCreatorHero({
  mode = "light",
  title = "FAQ",
  faqItems = defaultFAQItems,
  defaultOpenIndex = 0,
}: KajabiCreatorHeroProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const colors = COLORS[mode];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white dark:bg-gray-950 px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-[48px] font-bold tracking-tight text-black dark:text-white"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-t"
          style={{ borderColor: colors.border }}
        >
          {faqItems.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              colors={colors}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
