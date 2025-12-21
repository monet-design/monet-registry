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
    // Gradient colors from the original design
    gradientStart: "#2E4E92",   // Deep blue
    gradientEnd: "#20A39E",     // Teal/turquoise
  },
  dark: {
    gradientStart: "#1E3A6B",
    gradientEnd: "#17807D",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  doctors: {
    path: "/registry/smart365dental-team-2/doctors.svg",
    alt: "의사 선생님들",
    prompt: `<is_transparent_background>true</is_transparent_background>
<summary>Group photo of 5 Asian dental doctors in white lab coats</summary>
<mood>Professional, clean, medical, trustworthy</mood>
<background_summary>Completely transparent background, no background elements</background_summary>
<primary_element>5 Asian dental professionals (mix of male and female, ages 30-50) standing in a friendly row formation, all wearing pristine white medical lab coats over professional attire (dress shirts, some with ties). They are smiling warmly at the camera with confident, welcoming expressions. The doctors are positioned from left to right with slight overlapping, creating a cohesive group. Natural lighting, high quality professional photography style.</primary_element>
<etc_element>None, focus entirely on the doctors with transparent background</etc_element>`,
  },
  hygienists: {
    path: "/registry/smart365dental-team-2/hygienists.svg",
    alt: "치위생과 직원들",
    prompt: `<is_transparent_background>true</is_transparent_background>
<summary>Group photo of 5 Asian dental hygienists and staff in white lab coats</summary>
<mood>Professional, friendly, approachable, medical</mood>
<background_summary>Completely transparent background, no background elements</background_summary>
<primary_element>5 Asian dental hygienists and clinic staff (mostly female, ages 25-45) standing in a friendly row formation, all wearing pristine white medical lab coats over professional attire. They have warm, welcoming smiles and friendly expressions. The staff members are positioned from left to right with slight overlapping, creating a cohesive team photo. Natural lighting, high quality professional photography style. Similar composition to the doctors group but with a slightly more approachable, friendly energy.</primary_element>
<etc_element>None, focus entirely on the staff with transparent background</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface Smart365dentalTeam2Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  doctorsLabel?: string;
  staffLabel?: string;
  doctorsCount?: number;
  staffCount?: number;
}

export default function Smart365dentalTeam2({
  mode = "light",
  title = "의료진 담당자의 지식과 직접을 책임집니다.",
  subtitle = "적은 종목, 높은 안정성, 편리한 진료를 위해 최선을 다하겠습니다.",
  doctorsLabel = "의사 선생님",
  staffLabel = "치위생과 직원",
  doctorsCount = 4,
  staffCount = 4,
  ...props
}: Smart365dentalTeam2Props) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{
        background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Header Text */}
          <motion.div
            variants={itemVariants}
            className="mb-12 max-w-3xl text-center md:mb-16"
          >
            <h2 className="mb-3 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="text-base text-white/90 md:text-lg">
              {subtitle}
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid w-full gap-0 md:grid-cols-2">
            {/* Doctors Section */}
            <motion.div
              variants={itemVariants}
              className="relative flex flex-col items-center justify-end px-4 py-8 md:px-8"
            >
              <div className="relative mb-6 h-64 w-full max-w-md md:h-80 lg:h-96">
                <Image
                  src={IMAGES.doctors.path}
                  alt={IMAGES.doctors.alt}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
              <div className="rounded-full border-2 border-white px-6 py-2 text-center">
                <p className="text-sm font-medium text-white md:text-base">
                  {doctorsLabel} {doctorsCount}명
                </p>
              </div>
            </motion.div>

            {/* Staff Section */}
            <motion.div
              variants={itemVariants}
              className="relative flex flex-col items-center justify-end px-4 py-8 md:px-8"
            >
              <div className="relative mb-6 h-64 w-full max-w-md md:h-80 lg:h-96">
                <Image
                  src={IMAGES.hygienists.path}
                  alt={IMAGES.hygienists.alt}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
              <div className="rounded-full border-2 border-white px-6 py-2 text-center">
                <p className="text-sm font-medium text-white md:text-base">
                  {staffLabel} {staffCount}명
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
