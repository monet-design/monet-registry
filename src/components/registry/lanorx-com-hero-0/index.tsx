"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-neutral-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    accent: "#171717",
    accentHover: "#262626",
  },
  dark: {
    accent: "#FAFAFA",
    accentHover: "#E5E5E5",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface LanorxComHero0Props {
  mode?: "light" | "dark";
  logoText?: string;
  badge?: string;
  headingLine1?: string;
  headingLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  features?: string[];
  signInHref?: string;
  getStartedHref?: string;
}

export default function LanorxComHero0({
  mode = "light",
  logoText = "Lanorx",
  badge = "For MicroSaaS Builders",
  headingLine1 = "Get your",
  headingLine2 = "first 100 signups",
  description = "Launch your waitlist landing page in 5 minutes — with builder or SDK. Test messaging, track signups on your domain.",
  primaryButtonText = "Launch in 5 minutes",
  primaryButtonHref = "#",
  secondaryButtonText = "View demo",
  secondaryButtonHref = "#",
  features = ["5-minute setup", "No coding"],
  signInHref = "#",
  getStartedHref = "#",
}: LanorxComHero0Props) {
  const isDark = mode === "dark";

  return (
    <section
      className={`py-24 md:py-36 relative ${
        isDark
          ? "bg-gradient-to-b from-neutral-950 to-neutral-900"
          : "bg-gradient-to-b from-white to-neutral-50"
      }`}
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isDark ? "bg-neutral-950/80" : "bg-white/80"
        } backdrop-blur-md border-b ${
          isDark ? "border-neutral-800" : "border-neutral-100"
        }`}
      >
        <div className="max-w-5xl container mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className={`text-xl font-light ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            {logoText}
          </a>
          <div className="flex items-center gap-4">
            <a
              href={signInHref}
              className={`text-sm font-light ${
                isDark
                  ? "text-neutral-300 hover:text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              } transition-colors`}
            >
              Sign In
            </a>
            <a
              href={getStartedHref}
              className={`px-6 py-2 rounded-full text-sm font-normal transition-all duration-300 ${
                isDark
                  ? "bg-white text-neutral-900 hover:bg-neutral-200"
                  : "bg-neutral-900 text-white hover:bg-neutral-800"
              }`}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="max-w-5xl container mx-auto px-6 pt-16">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 relative z-10">
            <div className="flex flex-col space-y-4 text-left items-start mb-0 md:mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className={`inline-flex items-center justify-center rounded-md border whitespace-nowrap px-4 py-1.5 text-sm font-light ${
                    isDark
                      ? "border-neutral-700 text-neutral-300 bg-neutral-900/50"
                      : "border-neutral-300 text-neutral-700 bg-white/50"
                  } backdrop-blur-sm`}
                >
                  {badge}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1
                  className={`text-6xl md:text-8xl lg:text-9xl font-light leading-[1] tracking-tighter max-w-4xl text-left ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {headingLine1}
                  <br />
                  <span
                    className={`inline-block bg-gradient-to-br pr-[3px] pb-3 bg-clip-text text-transparent ${
                      isDark
                        ? "from-white via-neutral-300 to-neutral-400"
                        : "from-neutral-900 via-neutral-700 to-neutral-600"
                    }`}
                  >
                    {headingLine2}
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p
                  className={`text-xl md:text-2xl max-w-2xl font-light leading-relaxed text-left ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {description}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
                <a href={primaryButtonHref}>
                  <button
                    className={`group inline-flex items-center justify-center whitespace-nowrap h-10 px-8 py-4 rounded-full font-normal text-lg shadow-xl transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105 ${
                      isDark
                        ? "bg-white text-neutral-900 hover:bg-neutral-100 shadow-white/10 hover:shadow-white/20"
                        : "bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/10 hover:shadow-neutral-900/20"
                    }`}
                  >
                    {primaryButtonText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href={secondaryButtonHref}>
                  <button
                    className={`group inline-flex items-center justify-center whitespace-nowrap h-10 px-8 py-4 rounded-full border font-normal text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                      isDark
                        ? "border-neutral-700 bg-transparent text-white hover:bg-neutral-800 hover:border-neutral-600"
                        : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 hover:border-neutral-400"
                    }`}
                  >
                    {secondaryButtonText}
                  </button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div
                className={`flex items-start gap-6 pt-0 text-sm font-light ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className={`w-1 h-1 rounded-full ${
                        isDark ? "bg-neutral-600" : "bg-neutral-400"
                      }`}
                    ></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
