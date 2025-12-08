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
    // Primary 액센트 (버튼, 링크 등)
    accent: "#FFE4CC",
    accentHover: "#FFD9B8",
    buttonText: "#1F2937",
    textSecondary: "#6B7280",
    textPrimary: "#1F2937",
  },
  dark: {
    accent: "#FFE4CC",
    accentHover: "#FFD9B8",
    buttonText: "#1F2937",
    textSecondary: "#9CA3AF",
    textPrimary: "#F9FAFB",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 */
const DEFAULT_AVATARS: Array<{ path: string; alt: string }> = [
  {
    path: "/scraped/codefa-st-2025-12-07/images/image-2.png",
    alt: "Charles",
  },
  {
    path: "/scraped/codefa-st-2025-12-07/images/image-3.png",
    alt: "Victor",
  },
  {
    path: "/scraped/codefa-st-2025-12-07/images/image-4.png",
    alt: "Ascsei",
  },
  {
    path: "/scraped/codefa-st-2025-12-07/images/image-5.png",
    alt: "Bakir",
  },
  {
    path: "/scraped/codefa-st-2025-12-07/images/image-6.png",
    alt: "Sallahudin",
  },
  {
    path: "/scraped/codefa-st-2025-12-07/images/image-7.png",
    alt: "Tona",
  },
  {
    path: "/scraped/codefa-st-2025-12-07/images/image-8.png",
    alt: "Andrei",
  },
  {
    path: "/scraped/codefa-st-2025-12-07/images/image-9.png",
    alt: "Cruz",
  },
  {
    path: "/scraped/codefa-st-2025-12-07/images/image-10.png",
    alt: "Alan",
  },
];

const IMAGES = {
  videoThumbnail: {
    path: "/scraped/codefa-st-2025-12-07/sections/section-14.png",
    alt: "Video thumbnail",
  },
} as const;

const CONTENT = {
  tagline: "Spend years learning JavaScript complex topics, or...",
  buttonText: "Take the red pill",
  buttonEmoji: "💊",
  studentCount: "3,936",
  studentText: "students joined Neo",
  videoId: "xtgJaJevzz00fQDge00nU02cUjKGL5vsxD01q4jiE8A9OmI",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

interface CodefaStCta14Props {
  mode?: "light" | "dark";
  tagline?: string;
  buttonText?: string;
  buttonEmoji?: string;
  studentCount?: string;
  studentText?: string;
  buttonHref?: string;
  avatars?: Array<{ path: string; alt: string }>;
}

export default function CodefaStCta14({
  mode = "light",
  tagline = CONTENT.tagline,
  buttonText = CONTENT.buttonText,
  buttonEmoji = CONTENT.buttonEmoji,
  studentCount = CONTENT.studentCount,
  studentText = CONTENT.studentText,
  buttonHref = "#pricing",
  avatars = DEFAULT_AVATARS,
}: CodefaStCta14Props) {
  const colors = COLORS[mode];
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12 rounded-lg overflow-hidden md:border md:shadow-lg"
        >
          <div className="relative w-full aspect-video bg-black">
            {!isPlaying ? (
              <button
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full group cursor-pointer"
                aria-label="Play video"
              >
                {/* Video Thumbnail Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60">
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-white text-sm md:text-base font-medium">
                      why do you want to leave your
                    </p>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black/80 rounded-full flex items-center justify-center group-hover:bg-black/90 transition-colors">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Background Image - Dark interview scene placeholder */}
                <div className="absolute inset-0 -z-10">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                </div>
              </button>
            ) : (
              <iframe
                src={`https://stream.mux.com/${CONTENT.videoId}.m3u8?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>

        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center justify-center text-center gap-12"
        >
          {/* Tagline */}
          <h2
            className="text-xl md:text-2xl italic max-w-2xl"
            style={{ color: colors.textSecondary }}
          >
            {tagline}
          </h2>

          {/* Button and Social Proof */}
          <div className="space-y-8">
            {/* CTA Button */}
            <motion.a
              href={buttonHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-12 py-4 text-lg font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              style={{
                backgroundColor: colors.accent,
                color: colors.buttonText,
              }}
            >
              {buttonText} {buttonEmoji}
            </motion.a>

            {/* Social Proof */}
            <div className="space-y-4">
              {/* Avatar Group */}
              <div className="flex justify-center items-center">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="w-11 h-11 rounded-full border-2 border-white dark:border-gray-950 overflow-hidden bg-gray-200"
                    >
                      <Image
                        src={avatar.path}
                        alt={avatar.alt}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Count */}
              <p className="italic" style={{ color: colors.textSecondary }}>
                <span
                  className="font-semibold"
                  style={{ color: colors.textPrimary }}
                >
                  {studentCount}
                </span>{" "}
                {studentText}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
