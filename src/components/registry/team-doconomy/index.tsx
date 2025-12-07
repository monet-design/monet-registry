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
    sidebarBg: "#F5F2ED",
    mainBg: "#FFFFFF",
    border: "#000000",
    text: "#000000",
    mutedText: "#666666",
  },
  dark: {
    sidebarBg: "#1A1917",
    mainBg: "#0A0A0A",
    border: "#FFFFFF",
    text: "#FFFFFF",
    mutedText: "#999999",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  person: {
    path: "/registry/team-doconomy/person.png",
    alt: "Elena Vallin - Chief Financial Officer",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional corporate headshot of a confident businesswoman in her 40s</summary>
<mood>Professional, warm, corporate, modern executive portrait</mood>
<background_summary>Clean light gray or off-white gradient studio background</background_summary>
<primary_element>A confident Caucasian businesswoman in her 40s with medium-length blonde wavy hair, wearing a dark navy blue blazer over a patterned blouse. Warm confident slight smile, professional makeup, looking at camera. Upper body shot with shoulders and face visible. High-end corporate headshot photography style.</primary_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  carbonFootprint: string;
  carbonUnit: string;
  carbonYear: string;
  image?: string;
}

interface TeamDoconomyProps {
  mode?: "light" | "dark";
  badgeText?: string;
  sidebarDescription?: string;
  teamMember?: TeamMember;
  seeAllText?: string;
  onSeeAllClick?: () => void;
}

const defaultTeamMember: TeamMember = {
  name: "Elena Vallin",
  role: "Chief Financial Officer",
  quote: "ENGAGE MY HOUSEHOLD IN MORE MINDFUL WATER CONSUMPTION.",
  carbonFootprint: "5.76",
  carbonUnit: "t CO₂e",
  carbonYear: "N/A (2023)",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face",
};

export default function TeamDoconomy({
  mode = "light",
  badgeText = "OUR PEOPLE",
  sidebarDescription = "Doconomy employees possess a wide range of skills, knowledge and expertise. Their diverse talents contribute to the organization's ability to drive Climate Action globally, from technology and marketing to customer service and management, supported by impact expertise and behavioral science.",
  teamMember = defaultTeamMember,
  seeAllText = "SEE ALL",
  onSeeAllClick,
}: TeamDoconomyProps) {
  const colors = COLORS[mode];

  useEffect(() => {
    // Load Instrument Serif for the quote
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <section
      className="relative w-full min-h-[600px]"
      style={{ backgroundColor: colors.mainBg }}
    >
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-[320px] xl:w-[360px] p-8 lg:p-10 flex flex-col"
          style={{ backgroundColor: colors.sidebarBg }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6"
          >
            <span
              className="inline-block px-3 py-1.5 text-[10px] font-medium tracking-wider border rounded-full"
              style={{
                borderColor: colors.text,
                color: colors.text,
              }}
            >
              {badgeText}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm leading-relaxed"
            style={{ color: colors.text }}
          >
            {sidebarDescription}
          </motion.p>
        </motion.div>

        {/* Vertical Divider */}
        <div
          className="hidden lg:block w-px"
          style={{ backgroundColor: colors.border }}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Black Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block h-3 w-[180px] ml-auto mr-20 origin-right"
            style={{ backgroundColor: colors.text }}
          />

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-8 lg:px-12 py-8 lg:py-10"
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] leading-tight font-normal tracking-tight"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                color: colors.text,
              }}
            >
              &ldquo;{teamMember.quote}&rdquo;
            </h2>
          </motion.div>

          {/* Bottom Content */}
          <div className="flex-1 flex flex-col lg:flex-row">
            {/* Person Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-[400px] xl:w-[450px] relative h-[350px] lg:h-auto"
            >
              {teamMember.image ? (
                <Image
                  src={teamMember.image}
                  alt={`${teamMember.name} - ${teamMember.role}`}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    backgroundColor:
                      mode === "light" ? "#E5E5E5" : "#333333",
                  }}
                >
                  <span
                    className="text-4xl font-semibold"
                    style={{ color: colors.mutedText }}
                  >
                    {teamMember.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Info Panel */}
            <div className="flex-1 flex flex-col border-l" style={{ borderColor: colors.border }}>
              {/* Name and Role */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-6 lg:p-8 border-b"
                style={{ borderColor: colors.border }}
              >
                <h3
                  className="text-lg font-medium mb-1"
                  style={{ color: colors.text }}
                >
                  {teamMember.name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: colors.mutedText }}
                >
                  {teamMember.role}
                </p>
              </motion.div>

              {/* Carbon Footprint */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 lg:p-8 flex-1"
              >
                <p
                  className="text-[10px] font-medium tracking-wider mb-3"
                  style={{ color: colors.mutedText }}
                >
                  MY CARBON FOOTPRINT
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-5xl lg:text-6xl font-light tracking-tight"
                    style={{ color: colors.text }}
                  >
                    {teamMember.carbonFootprint}
                  </span>
                  <span
                    className="text-sm font-medium px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: colors.text,
                      color: colors.mainBg,
                    }}
                  >
                    {teamMember.carbonUnit}
                  </span>
                </div>
                <p
                  className="text-sm mt-2"
                  style={{ color: colors.mutedText }}
                >
                  {teamMember.carbonYear}
                </p>
              </motion.div>

              {/* See All Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="p-6 lg:p-8 border-t"
                style={{ borderColor: colors.border }}
              >
                <button
                  onClick={onSeeAllClick}
                  className="inline-flex items-center gap-2 text-sm font-medium group transition-colors"
                  style={{ color: colors.text }}
                >
                  {seeAllText}
                  <span
                    className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all"
                    style={{ borderColor: colors.text }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
