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
    background: "#6AADE4", // Sky blue background
    text: "#1a1a1a", // Dark text
    textMuted: "#1a1a1a", // Same dark for role text
  },
  dark: {
    background: "#1e3a5f",
    text: "#ffffff",
    textMuted: "#cbd5e1",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // Using Unsplash images for grayscale profile photos
} as const;

/**
 * 기본 팀 멤버 데이터
 */
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Saleh ElHattab",
    role: "CEO and Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Ted Kornish",
    role: "Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Eleanor Horowitz",
    role: "Marketing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Edith Lee",
    role: "Product",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Jay Ruckelshaus",
    role: "Climate Strategy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
];

/**
 * 기본 하이라이트 링크
 */
interface HighlightLink {
  text: string;
  href: string;
}

const DEFAULT_HIGHLIGHT_LINKS: HighlightLink[] = [
  { text: "Samsara", href: "#" },
  { text: "Tableau", href: "#" },
  { text: "Chevron", href: "#" },
  { text: "Eclipse Ventures", href: "#" },
  { text: "Oxford", href: "#" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface TeamGravityClimateProps {
  mode?: "light" | "dark";
  sectionLabel?: string;
  headingPrefix?: string;
  headingSuffix?: string;
  highlightLinks?: HighlightLink[];
  teamMembers?: TeamMember[];
}

export default function TeamGravityClimate({
  mode = "light",
  sectionLabel = "OUR TEAM",
  headingPrefix = "Drawing on experience with organizations like ",
  headingSuffix = ", we're committed to giving industrial businesses a positive and profitable future.",
  highlightLinks = DEFAULT_HIGHLIGHT_LINKS,
  teamMembers = DEFAULT_TEAM_MEMBERS,
}: TeamGravityClimateProps) {
  const colors = COLORS[mode];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  // Build heading with inline links
  const renderHeadingWithLinks = () => {
    const parts: React.ReactNode[] = [];

    // Add prefix
    parts.push(
      <span key="prefix">{headingPrefix}</span>
    );

    // Add links with proper separators
    highlightLinks.forEach((link, index) => {
      parts.push(
        <a
          key={link.text}
          href={link.href}
          className="underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity"
          style={{ color: colors.text }}
        >
          {link.text}
        </a>
      );

      if (index < highlightLinks.length - 2) {
        parts.push(<span key={`comma-${index}`}>, </span>);
      } else if (index === highlightLinks.length - 2) {
        parts.push(<span key="and">, and </span>);
      }
    });

    // Add suffix
    parts.push(
      <span key="suffix">{headingSuffix}</span>
    );

    return parts;
  };

  // Split team members for grid layout (3 in first row, 2 in second)
  const firstRow = teamMembers.slice(0, 3);
  const secondRow = teamMembers.slice(3);

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-medium tracking-wider mb-12"
          style={{ color: colors.text }}
        >
          {sectionLabel}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl font-normal leading-snug mb-16 max-w-4xl"
          style={{
            color: colors.text,
            fontFamily: "'Instrument Serif', Georgia, serif",
          }}
        >
          {renderHeadingWithLinks()}
        </motion.h2>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 md:space-y-16"
        >
          {/* First Row - 3 members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {firstRow.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="flex flex-col"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>

                {/* Name */}
                <h3
                  className="text-sm font-medium mb-1"
                  style={{ color: colors.text }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p
                  className="text-sm"
                  style={{ color: colors.textMuted }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 members */}
          {secondRow.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondRow.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="flex flex-col"
                >
                  {/* Photo */}
                  <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>

                  {/* Name */}
                  <h3
                    className="text-sm font-medium mb-1"
                    style={{ color: colors.text }}
                  >
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p
                    className="text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
