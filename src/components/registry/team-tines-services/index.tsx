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
    background: "#FAF7F5",
    title: "#5B4B8A",
    subtitle: "#6B6B7B",
    name: "#3D3D4E",
    role: "#6B6B7B",
    badgeBorder: "linear-gradient(135deg, #FFB700 0%, #FF6B35 25%, #E5395D 50%, #9B4DCA 100%)",
    badgeText: "#5B4B8A",
    badgeLabel: "#6B6B7B",
  },
  dark: {
    background: "#1A1625",
    title: "#B8A4D6",
    subtitle: "#9B9BA8",
    name: "#E5E5EA",
    role: "#9B9BA8",
    badgeBorder: "linear-gradient(135deg, #FFB700 0%, #FF6B35 25%, #E5395D 50%, #9B4DCA 100%)",
    badgeText: "#B8A4D6",
    badgeLabel: "#9B9BA8",
  },
} as const;

/**
 * 팀원 데이터
 */
const DEFAULT_TEAM_MEMBERS = [
  // Row 1
  { name: "Kelsey Sevening", role: "Project management", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" },
  { name: "Shub Dhital", role: "Project management", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
  { name: "Troy Koenig", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
  { name: "Emily Nguyen", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" },
  { name: "Colleen Gallagher", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face" },
  // Row 2
  { name: "Jay Aslin", role: "Technical training", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" },
  { name: "Mallory Iversen", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face" },
  { name: "Tom Abernathy", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face" },
  { name: "Daniel Laprea", role: "Project management", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face" },
  { name: "Martin Moroney", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face" },
  { name: "Ian Ronan", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face" },
  // Row 3
  { name: "Michaela Lynch", role: "Project management", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face" },
  { name: "Nick Page", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face" },
  { name: "Zach Strickland", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&crop=face" },
  { name: "Claudia Kinsella", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face" },
  { name: "Jamison Bigham", role: "Customer success engineering", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
];

/**
 * G2 배지 데이터
 */
const DEFAULT_BADGES = [
  { label: "SPRING 2025", title: "Grid Leader" },
  { label: "SPRING 2025", title: "Momentum Leader" },
  { label: "SPRING 2025", title: "Best Relationship" },
  { label: "SPRING 2025", title: "Best Est. ROI", subtitle: "ENTERPRISE" },
  { label: "SPRING 2025", title: "Fastest Implementation", subtitle: "ENTERPRISE" },
  { label: "SPRING 2025", title: "Users Most Likely To Recommend", subtitle: "ENTERPRISE" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Cairn (stacked stones) icon component
function CairnIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bottom stone - pink */}
      <ellipse cx="24" cy="70" rx="20" ry="8" fill="#F8B4C4" />
      {/* Second stone - coral */}
      <ellipse cx="24" cy="58" rx="16" ry="7" fill="#F5A78D" />
      {/* Third stone - yellow */}
      <ellipse cx="24" cy="47" rx="13" ry="6" fill="#FFE066" />
      {/* Fourth stone - green */}
      <ellipse cx="24" cy="37" rx="10" ry="5" fill="#9DD9A8" />
      {/* Fifth stone - light blue */}
      <ellipse cx="24" cy="28" rx="8" ry="4.5" fill="#89CFF0" />
      {/* Sixth stone - blue */}
      <ellipse cx="24" cy="20" rx="6" ry="4" fill="#6BB3D9" />
      {/* Top stone - purple */}
      <ellipse cx="24" cy="13" rx="5" ry="3.5" fill="#B19CD9" />
    </svg>
  );
}

// G2 Badge component
function G2Badge({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Badge shape with gradient border */}
      <div className="relative">
        {/* Gradient border */}
        <div
          className="absolute inset-0 rounded-t-lg"
          style={{
            background: "linear-gradient(135deg, #FFB700 0%, #FF6B35 25%, #E5395D 50%, #9B4DCA 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
            padding: "3px",
          }}
        >
          <div
            className="h-full w-full bg-white"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
            }}
          />
        </div>
        {/* Badge content */}
        <div
          className="relative flex flex-col items-center justify-center bg-white px-4 py-3"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
            minWidth: "120px",
            minHeight: "90px",
          }}
        >
          {/* Label and G2 logo */}
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-[10px] font-medium tracking-wide text-gray-500">
              {label}
            </span>
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="#FF492C">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.25h-9v-2.25h3.375v-6h-2.25V6.75h4.5v8.25H16.5v2.25z" />
            </svg>
          </div>
          {/* Title */}
          <div className="text-center">
            <p className="text-sm font-bold leading-tight text-[#5B4B8A]">
              {title}
            </p>
            {subtitle && (
              <p className="mt-0.5 text-[8px] font-semibold tracking-wider text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Badge {
  label: string;
  title: string;
  subtitle?: string;
}

interface TeamTinesServicesProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  teamMembers?: TeamMember[];
  badges?: Badge[];
}

export default function TeamTinesServices({
  mode = "light",
  title = "Meet the team",
  subtitle = "We're proud of and regularly recognized for our people. Meet your partners for your Tines journey.",
  teamMembers = DEFAULT_TEAM_MEMBERS,
  badges = DEFAULT_BADGES,
}: TeamTinesServicesProps) {
  const colors = COLORS[mode];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Split team members into rows (approximately 5-6 per row)
  const rowSize = 5;
  const rows: TeamMember[][] = [];
  for (let i = 0; i < teamMembers.length; i += rowSize) {
    rows.push(teamMembers.slice(i, i + rowSize));
  }

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          {/* Cairn Icon */}
          <CairnIcon className="mb-6 h-16 w-auto" />

          {/* Title */}
          <h2
            className={`mb-4 text-4xl md:text-5xl ${playfairDisplay.className}`}
            style={{ color: colors.title }}
          >
            {title}
          </h2>

          {/* Subtitle */}
          <p
            className="max-w-xl text-base md:text-lg"
            style={{ color: colors.subtitle }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Team Members Slider */}
        <div
          ref={scrollContainerRef}
          className="relative mb-16"
        >
          {/* Horizontal scrolling rows */}
          <div className="space-y-6">
            {rows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, x: rowIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: rowIndex * 0.1 }}
                className="flex justify-center gap-4 overflow-x-auto pb-2 md:gap-6 lg:gap-8"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {row.map((member, memberIndex) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: rowIndex * 0.1 + memberIndex * 0.05,
                    }}
                    className="flex flex-shrink-0 items-center gap-3"
                  >
                    {/* Avatar */}
                    <div className="relative h-12 w-12 overflow-hidden rounded-full md:h-14 md:w-14">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Info */}
                    <div className="flex flex-col">
                      <span
                        className="whitespace-nowrap text-sm font-semibold md:text-base"
                        style={{ color: colors.name }}
                      >
                        {member.name}
                      </span>
                      <span
                        className="whitespace-nowrap text-xs md:text-sm"
                        style={{ color: colors.role }}
                      >
                        {member.role}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        {/* G2 Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <G2Badge
                label={badge.label}
                title={badge.title}
                subtitle={badge.subtitle}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
