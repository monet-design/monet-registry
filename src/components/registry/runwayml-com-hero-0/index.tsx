"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    primaryBtnBg: "#F7F7F7",
    primaryBtnText: "#0C0C0C",
    primaryBtnHoverBg: "#FFFFFF",
    primaryBtnActiveBg: "#DCDCDC",
    secondaryBtnBg: "rgba(247, 247, 247, 0.05)",
    secondaryBtnHoverBg: "rgba(247, 247, 247, 0.15)",
    secondaryBtnActiveBg: "rgba(247, 247, 247, 0.25)",
  },
} as const;

/**
 * 비디오 에셋
 */
const VIDEO = {
  src: "https://d3phaj0sisr2ct.cloudfront.net/site/images/research/gwm/Main_Hero_Compressed-v1.mp4",
  poster: "/registry/runwayml-com-hero-0/video-poster.png",
} as const;

/**
 * 네비게이션 링크
 */
const NAV_LINKS = [
  { label: "Research", href: "#research" },
  { label: "Product", href: "#product" },
  { label: "Studios", href: "#studios" },
  { label: "Company", href: "#company" },
] as const;

/**
 * 리서치 영역 링크
 */
const RESEARCH_AREAS = [
  { label: "Media and Entertainment", href: "#media" },
  { label: "Robotics and Autonomy", href: "#robotics" },
  { label: "General World Models", href: "#world-models" },
  { label: "Conversational Real-time Video Agents", href: "#video-agents" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

interface RunwaymlComHero0Props {
  mode?: "light" | "dark";
  logoText?: string;
  navLinks?: readonly { label: string; href: string }[];
  title?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  researchAreas?: readonly { label: string; href: string }[];
  loginText?: string;
  loginHref?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  videoSrc?: string;
  videoPoster?: string;
}

export default function RunwaymlComHero0({
  mode = "light",
  logoText = "runway",
  navLinks = NAV_LINKS,
  title = "Building AI to\nSimulate the World",
  primaryButtonText = "Get Started",
  primaryButtonHref = "#get-started",
  secondaryButtonText = "Learn More",
  secondaryButtonHref = "#learn-more",
  researchAreas = RESEARCH_AREAS,
  loginText = "Log in",
  loginHref = "#login",
  ctaButtonText = "Try Runway",
  ctaButtonHref = "#try",
  videoSrc = VIDEO.src,
  videoPoster = VIDEO.poster,
}: RunwaymlComHero0Props) {
  void mode;
  const colors = COLORS.light;

  return (
    <section className="bg-white pb-6 relative transition-all duration-200 pt-0">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xl font-medium text-black tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {logoText}
            </motion.a>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-black/80 hover:text-black transition-colors uppercase tracking-wide"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <motion.a
                href={loginHref}
                className="hidden sm:block text-sm font-medium text-black/80 hover:text-black transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {loginText}
              </motion.a>
              <motion.a
                href={ctaButtonHref}
                className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-lg hover:bg-black/90 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {ctaButtonText}
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex lg:aspect-[2] flex-col items-center justify-center text-white relative lg:max-h-[900px] w-full mx-auto min-[1600px]:rounded-[3px] overflow-hidden h-[90vh] max-h-[660px] min-h-[500px]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 transition-all duration-200 mt-0 lg:mt-16">
          <div className="px-0 lg:px-4 w-full h-full max-w-[1600px] mx-auto">
            <div className="h-full w-full lg:rounded-xl rounded-none relative overflow-hidden">
              <video
                className="absolute inset-0 object-cover w-full h-full"
                playsInline
                loop
                muted
                autoPlay
                poster={videoPoster}
                preload="auto"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-20" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-0 lg:px-4 w-full h-full flex max-w-[1600px] mx-auto">
          <div className="px-4 lg:px-0 w-11/12 md:w-full lg:w-[87.5%] mx-auto relative mt-auto mb-16 flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="-mt-3">
              <motion.h1
                className="text-5xl !leading-[1.1] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < title.split("\n").length - 1 && (
                      <br className="hidden lg:block" />
                    )}
                    {index < title.split("\n").length - 1 && " "}
                  </span>
                ))}
              </motion.h1>

              {/* Buttons */}
              <motion.div
                className="flex gap-2.5 items-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <a
                  href={primaryButtonHref}
                  className="font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 px-3 py-2 text-base leading-6 rounded-lg"
                  style={{
                    backgroundColor: colors.primaryBtnBg,
                    color: colors.primaryBtnText,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      colors.primaryBtnHoverBg)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      colors.primaryBtnBg)
                  }
                >
                  {primaryButtonText}
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href={secondaryButtonHref}
                  className="font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 px-3 py-2 text-base leading-6 rounded-lg backdrop-blur text-white outline outline-1 outline-white/75 -outline-offset-1"
                  style={{
                    backgroundColor: colors.secondaryBtnBg,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      colors.secondaryBtnHoverBg)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      colors.secondaryBtnBg)
                  }
                >
                  {secondaryButtonText}
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            {/* Right Content - Research Areas */}
            <motion.div
              className="md:ml-[6.25%] mt-8 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div
                className="flex flex-col gap-3.5"
                role="tablist"
                aria-label="Research areas"
              >
                {researchAreas.map((area, index) => (
                  <a
                    key={area.label}
                    href={area.href}
                    className="group"
                  >
                    <h3
                      className="text-sm font-medium uppercase tracking-wide transition-all duration-200 flex items-center opacity-60 group-hover:opacity-100"
                      role="tab"
                      aria-selected={index === 0}
                      tabIndex={index === 0 ? 0 : -1}
                    >
                      {area.label}
                      <span className="group-hover:opacity-100 opacity-0 transition-all duration-200 ml-2 -translate-x-1 group-hover:translate-x-0">
                        ↗
                      </span>
                    </h3>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
