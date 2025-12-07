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
    // 배경 색상 (크림/베이지)
    background: "#f5f3ef",
    // 배지 색상 (하늘색)
    badge: "#a8d8ea",
    badgeText: "#1a2744",
    // 제목 색상 (다크 네이비)
    title: "#1a2744",
    // 이름 색상
    name: "#1a2744",
    // 화살표 색상
    arrow: "#9ca3af",
  },
  dark: {
    background: "#1a1a2e",
    badge: "#3b5998",
    badgeText: "#e2e8f0",
    title: "#f1f5f9",
    name: "#f1f5f9",
    arrow: "#6b7280",
  },
} as const;

/**
 * 기본 팀원 데이터
 */
const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Jen",
    role: "CO-FOUNDER & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Jens",
    role: "CO-FOUNDER & COO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Lorenzo",
    role: "CO-FOUNDER AND CTO",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Filip",
    role: "CGO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "Sarah",
    role: "PRODUCT ENGINEERING",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "6",
    name: "Alex",
    role: "PRODUCT DESIGN",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "7",
    name: "Sumit",
    role: "PRODUCT ENGINEERING",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "8",
    name: "Leon",
    role: "PRODUCT ENGINEERING",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "9",
    name: "Omar",
    role: "PRODUCT ENGINEERING",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "10",
    name: "Ludwig",
    role: "PRODUCT ENGINEERING",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  link?: string;
}

interface TeamPassionfrootProps {
  mode?: "light" | "dark";
  title?: string;
  teamMembers?: TeamMember[];
  onMemberClick?: (member: TeamMember) => void;
}

export default function TeamPassionfroot({
  mode = "light",
  title = "Meet the team",
  teamMembers = DEFAULT_TEAM_MEMBERS,
  onMemberClick,
}: TeamPassionfrootProps) {
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
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${instrumentSerif.className} mb-16 text-center text-4xl md:text-5xl italic`}
          style={{ color: colors.title }}
        >
          {title}
        </motion.h2>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-16"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group flex flex-col items-center"
            >
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative mb-4 h-32 w-32 overflow-hidden rounded-full md:h-40 md:w-40"
              >
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Role Badge */}
              <div
                className="mb-2 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider md:text-xs"
                style={{
                  backgroundColor: colors.badge,
                  color: colors.badgeText,
                }}
              >
                {member.role}
              </div>

              {/* Name with Arrow */}
              <button
                onClick={() => onMemberClick?.(member)}
                className="flex items-center gap-2 transition-opacity hover:opacity-70"
              >
                <span
                  className={`${instrumentSerif.className} text-lg md:text-xl`}
                  style={{ color: colors.name }}
                >
                  {member.name}
                </span>
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  style={{ color: colors.arrow }}
                />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
