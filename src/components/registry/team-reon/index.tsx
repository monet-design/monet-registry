"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F8F3EF",
    label: "#E8475E",
    heading: "#A01B5E",
    name: "#A01B5E",
  },
  dark: {
    background: "#1A1517",
    label: "#F87171",
    heading: "#F472B6",
    name: "#F472B6",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface TeamMember {
  name: string;
  image: string;
}

interface TeamReonProps {
  mode?: "light" | "dark";
  label?: string;
  heading?: string;
  teamMembers?: TeamMember[];
}

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  { name: "Andri Rafn", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" },
  { name: "Audbergur", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop" },
  { name: "Erna Gudrun", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop" },
  { name: "Sara", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop" },
  { name: "Aspor Tryggvi", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop" },
  { name: "Matthias Skjoldur", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop" },
  { name: "Rosa Dogg", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop" },
];

export default function TeamReon({
  mode = "light",
  label = "Our people",
  heading = "There's no 'us' and 'them'. Management feels like part of the team.",
  teamMembers = DEFAULT_TEAM_MEMBERS,
}: TeamReonProps) {
  const colors = COLORS[mode];

  // Split team members: first 4 for row 1 (3 full + 1 partial on right)
  // Last 3+ for row 2 (1 partial on left + 3 full)
  const firstRowMembers = teamMembers.slice(0, 4);
  const secondRowMembers = teamMembers.slice(4);

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 md:mb-16 gap-6">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            {/* Marker icon */}
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: colors.label }}
            >
              <path
                d="M6 0C2.68629 0 0 2.68629 0 6C0 10.5 6 14 6 14C6 14 12 10.5 12 6C12 2.68629 9.31371 0 6 0ZM6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6C8 7.10457 7.10457 8 6 8Z"
                fill="currentColor"
              />
            </svg>
            <span
              className="text-sm font-medium tracking-wide"
              style={{ color: colors.label }}
            >
              {label}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="team-reon-heading text-3xl md:text-4xl lg:text-5xl font-normal italic max-w-2xl lg:text-right leading-tight"
            style={{ color: colors.heading }}
          >
            {heading}
          </motion.h2>
        </div>
      </div>

      {/* Team Grid - Full width with overflow */}
      <div className="relative">
        {/* First Row */}
        <div className="flex gap-4 md:gap-6 mb-4 md:mb-6 pl-4 sm:pl-6 lg:pl-[calc((100vw-80rem)/2+2rem)]">
          {firstRowMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] flex-shrink-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p
                className="text-sm md:text-base font-medium"
                style={{ color: colors.name }}
              >
                {member.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Second Row - Offset to the left */}
        <div className="flex gap-4 md:gap-6">
          {/* Hidden partial card for offset effect - shifted left */}
          <div className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] flex-shrink-0 -ml-[160px] sm:-ml-[180px] md:-ml-[200px] lg:-ml-[240px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-3 bg-gray-300/30" />
          </div>
          {secondRowMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 4) }}
              className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] flex-shrink-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p
                className="text-sm md:text-base font-medium"
                style={{ color: colors.name }}
              >
                {member.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
