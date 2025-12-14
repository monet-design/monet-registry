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
    accentHover: "#1A7ED9",
    border: "#E4E4E7",
    textPrimary: "#09090B",
    textSecondary: "#A1A1AA",
    background: "#FFFFFF",
    cardBackground: "#F4F4F5",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    border: "#27272A",
    textPrimary: "#FAFAFA",
    textSecondary: "#71717A",
    background: "#09090B",
    cardBackground: "#18181B",
  },
} as const;

/**
 * 탭 데이터
 */
const TABS_DATA = [
  {
    id: "career-site",
    label: "채용 홈페이지 빌더",
    title: "지원자를 사로잡는 첫인상,\n채용 홈페이지로부터",
    description:
      "그리팅 채용 사이트 빌더로 차별화된 채용 홈페이지 기획부터 디자인까지 손쉽게 완성하세요.",
    videoSrc:
      "https://framerusercontent.com/assets/6HAknJ2nRUjcexVHI7Cke1qQXI.mp4",
    posterSrc:
      "https://framerusercontent.com/images/4FQUb4KhupBOzKUdB7PmJeb8sOw.png?scale-down-to=1024&width=2730&height=1530",
  },
  {
    id: "direct-sourcing",
    label: "다이렉트 소싱",
    title: "기다리는 채용을 넘어\n먼저 찾아가는 인재 영입으로",
    description:
      "인재를 직접 찾아 지원까지 유도하는 다이렉트 소싱으로 최적의 인재를 확보하세요.",
    videoSrc:
      "https://framerusercontent.com/assets/dIBFCKGlqB2VcUqCTsdaXggo1o.mp4",
    posterSrc:
      "https://framerusercontent.com/images/4gZdRlRW8NlJF95w6PqScXxW4.png?scale-down-to=1024&width=1275&height=957",
  },
  {
    id: "talent-pool",
    label: "인재풀 구축",
    title: "지금 필요한 인재,\n준비된 인재풀에서 빠르게",
    description:
      "전용 인재풀로 핵심 직무부터 잦은 충원이 필요한 포지션까지 원하는 시점에 바로 채용하세요.",
    videoSrc:
      "https://framerusercontent.com/assets/exvAyQZXvyEyjoeGn5AAal6OPC4.mp4",
    posterSrc:
      "https://framerusercontent.com/images/kpMNi1nsm7UsivJcAEL6AS19us.png?scale-down-to=1024&width=1275&height=957",
  },
  {
    id: "volume-hiring",
    label: "대규모 채용",
    title: "신입부터 경력까지\n대규모 채용을 간편하게, 안정적으로",
    description:
      "대규모 채용 시에도 공고 등록부터 지원자 관리·소통까지 매끄럽게 이어집니다.",
    videoSrc:
      "https://framerusercontent.com/assets/MSy4tnvmRLfaOpOXfE5UF9myOc.mp4",
    posterSrc:
      "https://framerusercontent.com/images/IykCPscV0r5uSUlcgZ9tz13ZRE.png?scale-down-to=1024&width=1433&height=1080",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface GreetinghrFeature3Props {
  mode?: "light" | "dark";
  badgeText?: string;
  heading?: string;
  tabs?: typeof TABS_DATA;
}

export default function GreetinghrFeature3({
  mode = "light",
  badgeText = "유연한 모집 전략",
  heading = "성과를 만드는 인재,\n전략에 구애받지 말고 확보하세요",
  tabs = TABS_DATA,
}: GreetinghrFeature3Props) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveTab(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div
            className="mb-4 inline-flex items-center rounded-md border px-3 py-1.5"
            style={{
              borderColor: colors.border,
              backgroundColor: colors.background,
            }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: colors.textPrimary }}
            >
              {badgeText}
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="whitespace-pre-line text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl"
            style={{ color: colors.textPrimary }}
          >
            {heading}
          </h2>
        </motion.div>

        {/* Content Area */}
        <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left: Tab Menu (Sticky) */}
          <div className="lg:sticky lg:top-24 lg:h-fit lg:w-[240px] lg:flex-shrink-0">
            <nav className="flex flex-row gap-2 overflow-x-auto pb-4 lg:flex-col lg:gap-1 lg:overflow-x-visible lg:pb-0">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(index)}
                  className="group flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors lg:w-full"
                  style={{
                    color:
                      activeTab === index
                        ? colors.accent
                        : colors.textSecondary,
                  }}
                >
                  <span>{tab.label}</span>
                  <ArrowRight
                    className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      opacity: activeTab === index ? 1 : undefined,
                      color: colors.accent,
                    }}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Content Sections */}
          <div className="flex-1 space-y-8 lg:space-y-16">
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
                className="rounded-2xl bg-transparent p-4 md:p-6"
              >
                {/* Section Header */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center gap-3">
                    <h3
                      className="whitespace-pre-line text-xl font-semibold leading-snug md:text-2xl"
                      style={{ color: colors.textPrimary }}
                    >
                      {tab.title}
                    </h3>
                    <div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded"
                      style={{ backgroundColor: colors.background }}
                    >
                      <ArrowRight
                        className="h-4 w-4"
                        style={{ color: colors.textPrimary }}
                      />
                    </div>
                  </div>
                  <p
                    className="max-w-xl text-sm leading-relaxed md:text-base"
                    style={{ color: colors.textSecondary }}
                  >
                    {tab.description}
                  </p>
                </div>

                {/* Video/Image Container */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] border"
                  style={{
                    borderColor: colors.border,
                    backgroundColor: colors.cardBackground,
                  }}
                >
                  <video
                    src={tab.videoSrc}
                    poster={tab.posterSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
