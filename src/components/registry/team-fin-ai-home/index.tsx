"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#090f1f",
    accent: "#ee6713",
    textPrimary: "#ffffff",
    textSecondary: "#a6acbc",
    textMuted: "#656c79",
    borderColor: "#252b3b",
    sidebarBg: "#030a17",
  },
  dark: {
    background: "#090f1f",
    accent: "#ee6713",
    textPrimary: "#ffffff",
    textSecondary: "#a6acbc",
    textMuted: "#656c79",
    borderColor: "#252b3b",
    sidebarBg: "#030a17",
  },
} as const;

/**
 * 사이드바 네비게이션 항목
 */
const DEFAULT_NAV_ITEMS = [
  { id: 1, number: "01", label: "SYSTEM" },
  { id: 2, number: "02", label: "PERFORMANCE" },
  { id: 3, number: "03", label: "TECHNOLOGY" },
  { id: 4, number: "04", label: "AI TEAM", active: true },
  { id: 5, number: "05", label: "INTEGRATIONS" },
  { id: 6, number: "06", label: "PRICING" },
];

/**
 * 팀원 데이터
 */
const DEFAULT_TEAM_MEMBERS = [
  {
    id: 1,
    name: "Pratik Bothra",
    role: "Principal Machine Learning Engineer",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 2,
    name: "Rob Clancy",
    role: "Staff Product Engineer",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 3,
    name: "Mario Kostelac",
    role: "Principal Machine Learning Engineer",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 4,
    name: "Molly Mahar",
    role: "Principal AI Designer",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 5,
    name: "Brian McDonnell",
    role: "Director, Engineering",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 6,
    name: "Fedor Parfenov",
    role: "Staff Machine Learning Scientist",
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 7,
    name: "Fergal Reid",
    role: "Chief AI Officer",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 8,
    name: "Pedro Tabacof",
    role: "Principal Machine Learning Scientist",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 9,
    name: "Alexey Tarasov",
    role: "Senior Manager, ML Engineering",
    imageUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 10,
    name: "Rati Zvirawa",
    role: "Director, Product Management",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface NavItem {
  id: number;
  number: string;
  label: string;
  active?: boolean;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

interface TeamFinAiHomeProps {
  mode?: "light" | "dark";
  badgeText?: string;
  title?: string;
  description?: string;
  descriptionNumber?: string;
  sectionLabel?: string;
  teamMembers?: TeamMember[];
  navItems?: NavItem[];
  showSidebar?: boolean;
}

export default function TeamFinAiHome({
  mode = "dark",
  badgeText = "AI TEAM",
  title = "Built by a world-class\nteam of AI experts",
  description = "The AI Group, an expert team of over 40 machine learning scientists, engineers and designers, continuously optimize Fin's performance through cutting-edge research, experimentation, and innovation—and publish their insights in the AI research blog",
  descriptionNumber = "04",
  sectionLabel = "AI GROUP LEADERSHIP",
  teamMembers = DEFAULT_TEAM_MEMBERS,
  navItems = DEFAULT_NAV_ITEMS,
  showSidebar = true,
}: TeamFinAiHomeProps) {
  const colors = COLORS[mode];

  // Split team into rows of 5
  const topRow = teamMembers.slice(0, 5);
  const bottomRow = teamMembers.slice(5, 10);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="flex">
        {/* Sidebar Navigation */}
        {showSidebar && (
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex flex-col w-48 min-h-screen py-12 px-6"
            style={{ backgroundColor: colors.sidebarBg }}
          >
            <nav className="space-y-4">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <span
                    className="text-[10px] tracking-wider"
                    style={{ color: colors.textMuted }}
                  >
                    {item.number}
                  </span>
                  <span
                    className="text-[10px] tracking-wider font-medium transition-colors"
                    style={{
                      color: item.active ? colors.textPrimary : colors.textMuted,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </nav>
          </motion.aside>
        )}

        {/* Main Content */}
        <div className="flex-1 py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-10"
          >
            <span
              className="w-2.5 h-2.5"
              style={{ backgroundColor: colors.accent }}
            />
            <span
              className="text-[10px] font-medium tracking-[0.2em] uppercase"
              style={{ color: colors.textSecondary }}
            >
              {badgeText}
            </span>
          </motion.div>

          {/* Title and Description Row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-16">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight whitespace-pre-line"
              style={{ color: colors.textPrimary }}
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-6 lg:max-w-md"
            >
              <span
                className="text-xs font-light shrink-0 pt-1"
                style={{ color: colors.textMuted }}
              >
                {descriptionNumber}
              </span>
              <p
                className="text-sm md:text-base leading-relaxed font-light"
                style={{ color: colors.textSecondary }}
              >
                {description}
              </p>
            </motion.div>
          </div>

          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <span
              className="text-[10px] font-medium tracking-[0.2em] uppercase"
              style={{ color: colors.textMuted }}
            >
              {sectionLabel}
            </span>
          </motion.div>

          {/* Team Grid with Corner Brackets */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Corner Brackets */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2" style={{ borderColor: colors.borderColor }} />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2" style={{ borderColor: colors.borderColor }} />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2" style={{ borderColor: colors.borderColor }} />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2" style={{ borderColor: colors.borderColor }} />

            {/* Team Grid */}
            <div className="py-8 px-4">
              {/* Top Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 mb-10">
                {topRow.map((member, index) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    colors={colors}
                    delay={0.1 * index}
                  />
                ))}
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
                {bottomRow.map((member, index) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    colors={colors}
                    delay={0.1 * (index + 5)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
  colors: typeof COLORS.light;
  delay: number;
}

function TeamMemberCard({ member, colors, delay }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      {/* Avatar */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 grayscale">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80px, 96px"
        />
      </div>

      {/* Name */}
      <h3
        className="text-sm font-semibold mb-1"
        style={{ color: colors.textPrimary }}
      >
        {member.name}
      </h3>

      {/* Role */}
      <p
        className="text-xs leading-snug max-w-[120px]"
        style={{ color: colors.textSecondary }}
      >
        {member.role}
      </p>
    </motion.div>
  );
}
