"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#00A47C",
  },
  dark: {
    accent: "#00C896",
  },
} as const;

const IMAGES = {
  row1Logos: [
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-3.png", alt: "Samsung" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-4.png", alt: "LG Uplus" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-5.png", alt: "한화" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-6.png", alt: "CJ" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-7.png", alt: "현대자동차" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-8.png", alt: "한국타이어" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-9.png", alt: "엔씨소프트" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-10.png", alt: "11번가" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-11.png", alt: "크몽" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-12.png", alt: "오늘의집" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-13.png", alt: "그리팅" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-14.png", alt: "카이스트" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-15.png", alt: "프로토파이" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-16.png", alt: "채널톡" },
  ],
  row2Logos: [
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-31.png", alt: "인프런" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-32.png", alt: "퓨쳐플레이" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-33.png", alt: "스파크플러스" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-34.png", alt: "오픈서베이" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-53.png", alt: "원티드랩" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-54.png", alt: "카페24" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-55.png", alt: "우아한이 청년들" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-56.png", alt: "우아한 형제들" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-57.png", alt: "토스증권" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-58.png", alt: "카카오뱅크" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-59.png", alt: "네이버 클라우드" },
    { path: "/scraped/whattime-co-kr-2025-12-14/images/image-52.png", alt: "당근 마켓" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface WhattimeLogoCloud1Props {
  mode?: "light" | "dark";
  title?: string;
  highlightedText?: string;
  subtitle?: string;
}

export default function WhattimeLogoCloud1({
  mode = "light",
  subtitle = "고객사",
  title = "되는시간과 함께",
  highlightedText = "성장",
}: WhattimeLogoCloud1Props) {
  const colors = COLORS[mode];

  // Duplicate logos for seamless infinite scroll
  const row1LogosDuplicated = [...IMAGES.row1Logos, ...IMAGES.row1Logos];
  const row2LogosDuplicated = [...IMAGES.row2Logos, ...IMAGES.row2Logos];

  return (
    <section className="relative w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {title} <span style={{ color: colors.accent }}>{highlightedText}</span>하는 기업들
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="space-y-8">
        {/* Row 1 - Moving Left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee-left">
            {row1LogosDuplicated.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 px-8 flex items-center justify-center"
              >
                <Image
                  src={logo.path}
                  alt={logo.alt}
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee-right">
            {row2LogosDuplicated.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 px-8 flex items-center justify-center"
              >
                <Image
                  src={logo.path}
                  alt={logo.alt}
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
