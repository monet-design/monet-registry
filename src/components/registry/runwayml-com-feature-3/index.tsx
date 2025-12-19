"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - 다크 테마의 리서치 섹션
 */
const COLORS = {
  light: {
    background: "rgba(247, 247, 247, 0.05)",
    backgroundHover: "rgba(247, 247, 247, 0.15)",
    backgroundActive: "rgba(247, 247, 247, 0.25)",
    border: "rgba(255, 255, 255, 0.75)",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.9)",
    textMuted: "rgba(255, 255, 255, 0.6)",
    divider: "rgba(255, 255, 255, 0.95)",
  },
  dark: {
    background: "rgba(247, 247, 247, 0.05)",
    backgroundHover: "rgba(247, 247, 247, 0.15)",
    backgroundActive: "rgba(247, 247, 247, 0.25)",
    border: "rgba(255, 255, 255, 0.75)",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.9)",
    textMuted: "rgba(255, 255, 255, 0.6)",
    divider: "rgba(255, 255, 255, 0.95)",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  background: {
    path: "/registry/runwayml-com-feature-3/background.webp",
    alt: "Abstract blurred background with warm tones",
    prompt: `Abstract blurred background with warm yellow, green and earthy tones, soft gradient, out of focus landscape-like imagery`,
  },
  // Mux 비디오 배경 (원본)
  video: {
    playbackId: "T3MxHKsagNzekzmQK4dWkxm01bAW00Rki7Kzg6odj4rIQ",
    src: "https://stream.mux.com/T3MxHKsagNzekzmQK4dWkxm01bAW00Rki7Kzg6odj4rIQ.m3u8",
    poster: "https://image.mux.com/T3MxHKsagNzekzmQK4dWkxm01bAW00Rki7Kzg6odj4rIQ/thumbnail.webp?time=0&width=1920",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ResearchLink {
  title: string;
  description: string;
  href: string;
}

interface RunwaymlComFeature3Props {
  mode?: "light" | "dark";
  sectionLabel?: string;
  heading?: string;
  learnMoreHref?: string;
  learnMoreText?: string;
  researchLinks?: ResearchLink[];
}

const defaultResearchLinks: ResearchLink[] = [
  {
    title: "GWM-1",
    description:
      "A state-of-the-art General World Model built to interact with the real world. And a major step towards universal simulation.",
    href: "#",
  },
  {
    title: "Gen-4.5",
    description:
      "The world's best video model, featuring state-of-the-art motion quality, prompt adherence and visual fidelity.",
    href: "#",
  },
  {
    title: "General World Models",
    description:
      "Our long-term research effort to build AI systems that understand the visual world and its dynamics.",
    href: "#",
  },
];

export default function RunwaymlComFeature3({
  mode = "dark",
  sectionLabel = "Runway Research",
  heading = "We are building foundational General World Models that will be capable of simulating all possible worlds and experiences. The next frontier of intelligence will come from models that can understand, perceive, generate and act in the world.",
  learnMoreHref = "#",
  learnMoreText = "Learn more",
  researchLinks = defaultResearchLinks,
}: RunwaymlComFeature3Props) {
  const colors = COLORS[mode];

  return (
    <section className="my-20 lg:my-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg overflow-hidden text-white relative">
          {/* Background Image with blur effect */}
          <div className="absolute inset-0">
            <Image
              src={IMAGES.background.path}
              alt={IMAGES.background.alt}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Content */}
          <div className="w-11/12 md:w-[87.5%] mx-auto relative py-20 md:py-32 lg:py-40">
            <div className="flex flex-col md:flex-row justify-between gap-10">
              {/* Left Column - Text and Button */}
              <motion.div
                className="w-full md:w-1/2 lg:w-[37.5%] mb-12 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div
                  className="text-[12px] lg:text-[14px] !leading-none mb-6"
                  style={{ color: colors.textPrimary }}
                >
                  {sectionLabel}
                </div>
                <div
                  className="!leading-tight text-[18px] md:text-[18px] lg:text-[20px] xl:text-[24px]"
                  style={{ color: colors.textPrimary }}
                >
                  {heading}
                </div>
                <a
                  className="font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 py-1.5 px-2.5 text-sm leading-5 rounded-md backdrop-blur -outline-offset-1 mt-8"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.textPrimary,
                    outline: `1px solid ${colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      colors.backgroundHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.background;
                  }}
                  href={learnMoreHref}
                >
                  {learnMoreText}
                </a>
              </motion.div>

              {/* Right Column - Research Links */}
              <motion.div
                className="w-full md:w-1/2 lg:w-[31.25%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className="border-t border-b divide-y"
                  style={{
                    borderColor: colors.divider,
                    "--divide-color": colors.divider,
                  } as React.CSSProperties}
                >
                  {researchLinks.map((link, index) => (
                    <ResearchLinkItem
                      key={index}
                      link={link}
                      colors={colors}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ResearchLinkItemProps {
  link: ResearchLink;
  colors: typeof COLORS.light;
  index: number;
}

function ResearchLinkItem({ link, colors, index }: ResearchLinkItemProps) {
  return (
    <motion.a
      className="flex flex-col relative py-7 group"
      href={link.href}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + index * 0.1 }}
      viewport={{ once: true }}
      style={
        {
          borderColor: colors.divider,
        } as React.CSSProperties
      }
    >
      <div className="flex justify-between">
        <h4
          className="!leading-none mb-2 transition-colors duration-200 ease-linear text-[18px] xl:text-[20px]"
          style={{ color: colors.textSecondary }}
        >
          <span className="group-hover:text-white">{link.title}</span>
        </h4>
        <div
          className="transition-colors duration-200 ease-linear"
          style={{ color: colors.textSecondary }}
        >
          <ArrowUpRight className="w-5 h-5 group-hover:text-white transition-colors duration-200" />
        </div>
      </div>
      <p
        className="leading-tight pr-4 transition-colors duration-200 ease-linear text-[12px] lg:text-[12px] xl:text-[14px]"
        style={{ color: colors.textMuted }}
      >
        <span className="group-hover:text-white/90">{link.description}</span>
      </p>
    </motion.a>
  );
}
