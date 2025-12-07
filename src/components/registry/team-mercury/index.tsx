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
    // 배경색 - 연한 라벤더/퍼플
    background: "#E9E6F1",
    // Primary 액센트 (버튼, 링크 등)
    accent: "#5046E5",
    accentHover: "#4338CA",
    // 버튼 배경
    buttonBg: "#FFFFFF",
    buttonBorder: "#1F2937",
    buttonText: "#1F2937",
  },
  dark: {
    background: "#1E1B2E",
    accent: "#818CF8",
    accentHover: "#6366F1",
    buttonBg: "#1F2937",
    buttonBorder: "#374151",
    buttonText: "#F9FAFB",
  },
} as const;

/**
 * 텍스트 콘텐츠
 */
const CONTENT = {
  tag: "Our team",
  title: "Product-led thinking",
  description:
    "Product thinking is a critical part of everyone's work at Mercury —\nfrom our significant number of former founders to our diligent teams of master coders,\nsupport professionals, and thoughtful creatives. All employees are encouraged\nto question processes, voice their opinions, relish acai bowls ... and prioritize quality.",
  buttonText: "Join the Team",
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 */
interface TeamImage {
  path: string;
  alt: string;
  height: "tall" | "medium" | "short";
  gradient?: string;
}

const IMAGES: TeamImage[] = [
  {
    path: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=500&fit=crop",
    alt: "Coffee cup with brand logo",
    height: "tall",
    gradient: "from-amber-100 to-rose-100",
  },
  {
    path: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=350&fit=crop",
    alt: "Office conversation by windows",
    height: "medium",
  },
  {
    path: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=450&fit=crop",
    alt: "Team members collaborating",
    height: "tall",
  },
  {
    path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=380&fit=crop",
    alt: "Cozy office library",
    height: "medium",
  },
  {
    path: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=450&fit=crop",
    alt: "Person walking in office",
    height: "tall",
    gradient: "from-indigo-100 to-purple-100",
  },
  {
    path: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=420&fit=crop",
    alt: "Woman presenting ideas",
    height: "tall",
  },
  {
    path: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=380&fit=crop",
    alt: "Team lounging and chatting",
    height: "medium",
  },
  {
    path: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=280&fit=crop",
    alt: "Presentation on stage",
    height: "short",
  },
  {
    path: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
    alt: "Team outdoors in park",
    height: "medium",
  },
  {
    path: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=340&fit=crop",
    alt: "Team working on laptops",
    height: "short",
  },
  {
    path: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=320&fit=crop",
    alt: "Person with laptop at cafe",
    height: "short",
    gradient: "from-slate-100 to-gray-100",
  },
  {
    path: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=360&fit=crop",
    alt: "Meeting room collaboration",
    height: "medium",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface TeamMercuryProps {
  mode?: "light" | "dark";
  tag?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function TeamMercury({
  mode = "light",
  tag = CONTENT.tag,
  title = CONTENT.title,
  description = CONTENT.description,
  buttonText = CONTENT.buttonText,
  onButtonClick,
}: TeamMercuryProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Split images into 4 columns for masonry layout
  const columns = [
    IMAGES.filter((_, i) => i % 4 === 0),
    IMAGES.filter((_, i) => i % 4 === 1),
    IMAGES.filter((_, i) => i % 4 === 2),
    IMAGES.filter((_, i) => i % 4 === 3),
  ];

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center px-6 mb-12 md:mb-16"
      >
        {/* Tag */}
        <motion.p
          variants={itemVariants}
          className={`text-sm font-normal mb-6 ${
            mode === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {tag}
        </motion.p>

        {/* Title - Using Instrument Serif */}
        <motion.h2
          variants={itemVariants}
          className={`text-4xl md:text-5xl lg:text-6xl font-normal mb-6 tracking-tight ${
            mode === "dark" ? "text-white" : "text-gray-900"
          }`}
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`text-sm md:text-base leading-relaxed max-w-2xl mx-auto whitespace-pre-line ${
            mode === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </motion.p>

        {/* Button */}
        <motion.div variants={itemVariants} className="mt-8">
          <button
            onClick={onButtonClick}
            className="px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: colors.buttonBg,
              border: `1px solid ${colors.buttonBorder}`,
              color: colors.buttonText,
            }}
          >
            {buttonText}
          </button>
        </motion.div>
      </motion.div>

      {/* Masonry Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="w-full px-2 md:px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-[1600px] mx-auto">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-3 md:gap-4">
              {column.map((image, imgIndex) => (
                <motion.div
                  key={`${colIndex}-${imgIndex}`}
                  variants={itemVariants}
                  className="relative rounded-xl md:rounded-2xl overflow-hidden group"
                  style={{
                    height: getImageHeight(image.height),
                  }}
                >
                  {image.gradient ? (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={image.path}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={image.path}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Font Import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap");
      `}</style>
    </section>
  );
}

function getImageHeight(height: string): string {
  switch (height) {
    case "tall":
      return "clamp(280px, 35vw, 420px)";
    case "medium":
      return "clamp(220px, 28vw, 340px)";
    case "short":
      return "clamp(180px, 22vw, 280px)";
    default:
      return "clamp(220px, 28vw, 340px)";
  }
}
