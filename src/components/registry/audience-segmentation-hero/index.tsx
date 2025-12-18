"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
interface ColorScheme {
  accent: string;
  accentHover: string;
  badgeBg: string;
  badgeText: string;
  selectedBorder: string;
  selectedBg: string;
  background: string;
}

const COLORS: { light: ColorScheme; dark: ColorScheme } = {
  light: {
    // Primary 액센트 (버튼, 링크 등)
    accent: "#0D9488", // teal-600
    accentHover: "#0F766E", // teal-700
    // 배지 색상
    badgeBg: "#FEF3C7", // amber-100
    badgeText: "#92400E", // amber-800
    // 선택된 카드 테두리
    selectedBorder: "#5EEAD4", // teal-300
    selectedBg: "#F0FDFA", // teal-50
    // 배경
    background: "#F8FAFC", // slate-50
  },
  dark: {
    accent: "#2DD4BF",
    accentHover: "#5EEAD4",
    badgeBg: "#451A03",
    badgeText: "#FCD34D",
    selectedBorder: "#2DD4BF",
    selectedBg: "#042F2E",
    background: "#0F172A",
  },
};

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Link as LinkIcon, Target, Smile } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UserCardData {
  name: string;
  initial: string;
  initialBg: string;
  tags: { icon: "link" | "target" | "smile"; text: string; color?: string }[];
  isSelected?: boolean;
  showCheckmark?: boolean;
  leadScore?: number;
}

interface AudienceSegmentationHeroProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  description?: string;
  emailPlaceholder?: string;
  ctaText?: string;
  filterText?: string;
  onSubmit?: (email: string) => void;
}

// User Card Component
function UserCard({
  data,
  colors,
}: {
  data: UserCardData;
  colors: ColorScheme;
}) {
  const iconMap = {
    link: LinkIcon,
    target: Target,
    smile: Smile,
  };

  return (
    <motion.div
      className="rounded-xl bg-white p-4 shadow-sm"
      style={{
        border: data.isSelected
          ? `2px solid ${colors.selectedBorder}`
          : "1px solid #E2E8F0",
        backgroundColor: data.isSelected ? colors.selectedBg : "#FFFFFF",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold text-gray-700"
            style={{ backgroundColor: data.initialBg }}
          >
            {data.initial}
          </div>
          <span className="font-medium text-gray-900">{data.name}</span>
        </div>
        {data.showCheckmark && (
          <div
            className="flex h-5 w-5 items-center justify-center rounded-full"
            style={{ backgroundColor: colors.accent }}
          >
            <svg
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="mt-3 space-y-1.5">
        {data.tags.map((tag, index) => {
          const Icon = iconMap[tag.icon];
          return (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Icon
                className="h-3.5 w-3.5"
                style={{ color: tag.color || "#9CA3AF" }}
              />
              <span style={{ color: tag.color || "#6B7280" }}>{tag.text}</span>
            </div>
          );
        })}
        {data.leadScore !== undefined && (
          <div className="flex items-center gap-2 text-sm">
            <Target className="h-3.5 w-3.5" style={{ color: colors.accent }} />
            <span style={{ color: colors.accent }}>
              Lead Score: {data.leadScore}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Filter Pill Component
function FilterPill({
  text,
  colors,
}: {
  text: string;
  colors: ColorScheme;
}) {
  return (
    <motion.div
      className="absolute left-1/2 z-10 -translate-x-1/2 transform"
      style={{ top: "calc(50% - 20px)" }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div
        className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg"
        style={{ border: "1px solid #E2E8F0" }}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colors.accent}
          strokeWidth={2}
        >
          <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
        </svg>
        <span className="text-sm text-gray-700">{text}</span>
      </div>
    </motion.div>
  );
}

// Dot Pattern Background
function DotPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, #CBD5E1 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
        opacity: 0.5,
      }}
    />
  );
}

// Default User Cards Data
const defaultUserCards: UserCardData[] = [
  {
    name: "Kyle Wonzen",
    initial: "K",
    initialBg: "#FEF3C7",
    tags: [
      { icon: "link", text: "Product Designer" },
      { icon: "target", text: "Decision Maker" },
    ],
  },
  {
    name: "Mira Tanaka",
    initial: "M",
    initialBg: "#FCE7F3",
    tags: [
      { icon: "link", text: "Marketing Manager" },
      { icon: "target", text: "Subscribed to Newsletter" },
    ],
  },
  {
    name: "Alex Rivera",
    initial: "A",
    initialBg: "#DBEAFE",
    tags: [
      { icon: "link", text: "CTO" },
      { icon: "target", text: "Visited Homepage" },
    ],
  },
  {
    name: "Jamie Lee",
    initial: "J",
    initialBg: "#D1FAE5",
    tags: [
      { icon: "link", text: "Sales Lead", color: "#10B981" },
      { icon: "smile", text: "New Contact", color: "#10B981" },
    ],
  },
  {
    name: "Dana Cruz",
    initial: "D",
    initialBg: "#DBEAFE",
    tags: [
      { icon: "link", text: "Growth Lead", color: "#0D9488" },
      { icon: "target", text: "Decision Maker - Submitted", color: "#0D9488" },
    ],
    isSelected: true,
    showCheckmark: true,
    leadScore: 85,
  },
  {
    name: "Leo Kim",
    initial: "L",
    initialBg: "#FEF3C7",
    tags: [
      { icon: "link", text: "Director of Strategy", color: "#0D9488" },
      { icon: "target", text: "Decision Maker - Submitted", color: "#0D9488" },
    ],
    isSelected: true,
    showCheckmark: true,
    leadScore: 92,
  },
];

export default function AudienceSegmentationHero({
  mode = "light",
  badge = "Audiences & Data",
  title = "Segment Anything.\nFrom Anywhere.",
  description = "Create hyper-targeted audiences from product usage, CRM records, data warehouse tables, and more — built for GTM teams, not data teams.",
  emailPlaceholder = "What's your work email?",
  ctaText = "Book a demo",
  filterText = 'Filtering "Decision Maker"..',
  onSubmit,
}: AudienceSegmentationHeroProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* Dot Pattern Background */}
      <DotPattern />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-block rounded-full px-4 py-1.5 text-sm font-medium"
                style={{
                  backgroundColor: colors.badgeBg,
                  color: colors.badgeText,
                }}
              >
                {badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="mb-6 text-4xl leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
              style={{
                fontFamily: "'Instrument Serif', serif",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {/* Email Input + CTA */}
            <motion.div
              className="flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Input
                type="email"
                placeholder={emailPlaceholder}
                className="h-12 flex-1 rounded-lg border-gray-200 bg-white px-4 text-gray-900 placeholder:text-gray-400"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <Button
                className="h-12 rounded-lg px-6 text-sm font-medium text-white transition-colors"
                style={{
                  backgroundColor: colors.accent,
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.accentHover)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.accent)
                }
                onClick={() => {
                  const input = document.querySelector(
                    'input[type="email"]'
                  ) as HTMLInputElement;
                  if (input && onSubmit) {
                    onSubmit(input.value);
                  }
                }}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Right Content - User Cards */}
          <div className="relative">
            {/* Filter Pill */}
            <FilterPill text={filterText} colors={colors} />

            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top Row */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <UserCard data={defaultUserCards[0]} colors={colors} />
                <UserCard data={defaultUserCards[2]} colors={colors} />
                <UserCard data={defaultUserCards[4]} colors={colors} />
              </motion.div>

              <motion.div
                className="mt-8 space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <UserCard data={defaultUserCards[1]} colors={colors} />
                <UserCard data={defaultUserCards[3]} colors={colors} />
                <UserCard data={defaultUserCards[5]} colors={colors} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
