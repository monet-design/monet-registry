"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#2C93F2",
    accentHover: "#1E7FD9",
    border: "#E4E4E7",
    textMuted: "#A1A1AA",
    cardBg: "#F4F4F5",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    border: "#3F3F46",
    textMuted: "#71717A",
    cardBg: "#18181B",
  },
} as const;

/**
 * 콘텐츠 데이터
 */
const DEFAULT_CONTENT = {
  badge: "맞춤형 관리 · 평가",
  title: "꼭 맞춘 채용 프로세스로\n더 정교하게 관리·평가하세요",
  tabs: [
    {
      id: "job-posting",
      label: "공고 관리",
      heading: "채용 플랫폼에 흩어진 공고\n한곳에서 통합 관리",
      description:
        "공고 작성부터 게시, 수정까지 한곳에서 관리하고, 흩어진 지원자 정보를 손쉽게 취합하세요.",
      videoUrl:
        "https://framerusercontent.com/assets/yOn5SkapIASjzbzRzhNUD8Q7zjM.mp4",
      posterUrl:
        "https://framerusercontent.com/images/Y8R2WiNC1qjjj493kOKV0WuZ6U.png?scale-down-to=1024&width=1275&height=957",
    },
    {
      id: "applicant",
      label: "지원자 관리",
      heading: "수·상시부터 공채까지\n지원자 정보가 한곳에",
      description:
        "지원자 정보부터 채용 전반 프로세스까지 한눈에 파악하고 체계적으로 관리하세요.",
      videoUrl:
        "https://framerusercontent.com/assets/VgpR8H89sn5ljlmHwWDM2oWjzx0.mp4",
      posterUrl:
        "https://framerusercontent.com/images/ni2Al5Aa7dRIa42a4cwQbu9W0Dg.png?scale-down-to=1024&width=1275&height=957",
    },
    {
      id: "assessment",
      label: "평가 관리",
      heading: "직관적인 평가 환경 속\n매끄러운 협업, 정확한 선발",
      description:
        "구조화된 평가 프로세스를 구축하고, 현업과 매끄럽게 협업해 인재를 정확히 선별하세요.",
      videoUrl:
        "https://framerusercontent.com/assets/bFH3Yo8ekish0gZHvi7CUiUvCc.mp4",
      posterUrl:
        "https://framerusercontent.com/images/zB1IxzI15Qqv3tmtUjNodYU34w.png?scale-down-to=1024&width=1433&height=1080",
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

interface TabData {
  id: string;
  label: string;
  heading: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
}

interface GreetinghrFeature4Props {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  tabs?: TabData[];
}

export default function GreetinghrFeature4({
  mode = "light",
  badge = DEFAULT_CONTENT.badge,
  title = DEFAULT_CONTENT.title,
  tabs = DEFAULT_CONTENT.tabs,
}: GreetinghrFeature4Props) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveTab(index);
              }
            });
          },
          {
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
          }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [tabs.length]);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      className={`relative w-full py-20 md:py-32 ${
        mode === "dark" ? "bg-zinc-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Badge */}
          <div
            className={`mb-6 inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium ${
              mode === "dark"
                ? "border-zinc-700 bg-zinc-900 text-zinc-100"
                : "border-zinc-200 bg-white text-zinc-900"
            }`}
            style={{ borderColor: colors.border }}
          >
            {badge}
          </div>

          {/* Title */}
          <h2
            className={`whitespace-pre-line text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
              mode === "dark" ? "text-white" : "text-zinc-900"
            }`}
          >
            {title}
          </h2>
        </motion.div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Tabs Navigation - Sticky on desktop */}
          <div className="mb-8 lg:mb-0 lg:w-48 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <nav className="flex flex-row gap-2 lg:flex-col lg:gap-0">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(index)}
                    className={`relative px-4 py-2 text-left text-sm font-medium transition-colors lg:py-3 lg:text-base ${
                      activeTab === index
                        ? ""
                        : mode === "dark"
                          ? "text-zinc-500 hover:text-zinc-300"
                          : "text-zinc-500 hover:text-zinc-700"
                    }`}
                    style={{
                      color: activeTab === index ? colors.accent : undefined,
                    }}
                  >
                    <span className="relative z-10">
                      {tab.label}
                      {activeTab === index && (
                        <span className="ml-1 hidden lg:inline"> &gt;&gt;</span>
                      )}
                    </span>
                    {/* Active indicator for mobile */}
                    {activeTab === index && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 rounded-md lg:hidden"
                        style={{ backgroundColor: `${colors.accent}15` }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex-1 space-y-24 lg:space-y-32">
            {tabs.map((tab, index) => (
              <motion.div
                key={tab.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Text Content */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className={`whitespace-pre-line text-xl font-semibold md:text-2xl ${
                        mode === "dark" ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {tab.heading}
                    </h3>
                    <button
                      className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded transition-colors ${
                        mode === "dark"
                          ? "bg-zinc-800 hover:bg-zinc-700"
                          : "bg-white hover:bg-zinc-50"
                      }`}
                      aria-label="더 알아보기"
                    >
                      <ArrowRight
                        className={`h-4 w-4 ${
                          mode === "dark" ? "text-white" : "text-zinc-900"
                        }`}
                      />
                    </button>
                  </div>
                  <p
                    className="mt-3 text-sm md:text-base"
                    style={{ color: colors.textMuted }}
                  >
                    {tab.description}
                  </p>
                </div>

                {/* Video Card */}
                <div
                  className="overflow-hidden rounded-[20px] border"
                  style={{ borderColor: colors.border }}
                >
                  <div
                    className="aspect-[4/3] w-full"
                    style={{ backgroundColor: colors.cardBg }}
                  >
                    <video
                      src={tab.videoUrl}
                      poster={tab.posterUrl}
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
