"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316", // Orange brand color
    accentHover: "#EA580C",
    discord: "#5865F2",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
    discord: "#5865F2",
  },
} as const;

const IMAGES = {
  preview: {
    path: "/registry/vooster-ai-ko-hero-0/preview.png",
    alt: "대시보드 미리보기",
    prompt: `A modern SaaS dashboard interface showing a project management CRM with Korean text. Features a clean white background with cards showing task statistics (16 tasks, 1 in progress, 13% completion). Contains a Kanban-style board with Backlog, In Progress, and Done columns. Professional UI with subtle shadows and rounded corners.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

interface VoosterAiKoHero0Props {
  mode?: "light" | "dark";
}

export default function VoosterAiKoHero0({
  mode = "light",
}: VoosterAiKoHero0Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative z-10 overflow-hidden bg-transparent px-4 py-12 pb-0 sm:py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 pt-6 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-10">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex scale-125 items-center justify-center gap-2 rounded-md border border-gray-200 px-2 py-0.5 text-xs font-medium"
          >
            <span className="text-gray-500">정식 출시!</span>
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 inline-block whitespace-pre-line bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight"
          >
            바이브코딩 최적화{"\n"}AI PM 에이전트
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="relative z-10 max-w-[550px] whitespace-pre-line text-base font-medium text-gray-500/70 sm:text-xl">
              바이브코딩을 시작하는 가장 체계적인 방법.{"\n"}코드베이스, 문서화,
              구현계획 모두 Vooster가 해결할게요.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative z-10 flex justify-center gap-4">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.accent }}
              >
                <ArrowRight className="h-4 w-4" />
                무료로 시작하기
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 text-sm font-medium transition-all duration-200 hover:border-[#5865F2] hover:bg-[#5865F2] hover:text-white"
                style={{ color: colors.discord }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                커뮤니티
              </a>
            </div>

            <button className="flex h-10 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 text-sm font-medium text-gray-500 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:text-red-400">
              <Play className="h-4 w-4 text-red-500" />
              튜토리얼 보기
            </button>
          </motion.div>

          {/* Preview Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative pt-2"
          >
            <div className="relative z-10 flex overflow-hidden rounded-2xl bg-gray-100/5 p-2">
              <div className="relative z-10 flex overflow-hidden rounded-md border border-gray-200/5 shadow-2xl">
                <img
                  alt={IMAGES.preview.alt}
                  width={1248}
                  height={765}
                  src={IMAGES.preview.path}
                  className="w-full"
                />
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute left-0 top-0 w-full">
              <div
                className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] sm:h-[512px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(249, 115, 22, 0.2) 10%, transparent 60%)",
                }}
              />
              <div
                className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] sm:h-[256px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(249, 115, 22, 0.3) 10%, transparent 60%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
