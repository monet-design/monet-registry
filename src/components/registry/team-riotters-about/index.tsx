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
    // Primary 액센트 (형광 연두색 하이라이트)
    accent: "#D4FF00",
    accentHover: "#C5EF00",
    background: "#ffffff",
    text: "#000000",
    tabInactive: "#6b7280",
    cardBackground: "#EBEBEB",
  },
  dark: {
    accent: "#D4FF00",
    accentHover: "#C5EF00",
    background: "#0a0a0a",
    text: "#ffffff",
    tabInactive: "#9ca3af",
    cardBackground: "#1f1f1f",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  robert: {
    path: "/registry/team-riotters-about/robert.png",
    alt: "Robert - Development Team Leader",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional headshot of a male developer with long wavy brown hair</summary>
<mood>Professional, modern tech company portrait</mood>
<background_summary>Solid light gray background (#EBEBEB)</background_summary>
<primary_element>Young Caucasian male in his late 20s with long wavy brown hair, wearing black t-shirt, neutral expression, looking directly at camera, professional headshot from chest up</primary_element>
<etc_element>None</etc_element>`,
  },
  norbert: {
    path: "/registry/team-riotters-about/norbert.png",
    alt: "Norbert - Frontend Developer",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional headshot of a male developer with short brown hair and slight stubble</summary>
<mood>Professional, modern tech company portrait</mood>
<background_summary>Solid light gray background (#EBEBEB)</background_summary>
<primary_element>Young Caucasian male in his mid 20s with short brown hair and slight stubble, wearing black t-shirt, neutral expression, looking directly at camera, professional headshot from chest up</primary_element>
<etc_element>None</etc_element>`,
  },
  maciej: {
    path: "/registry/team-riotters-about/maciej.png",
    alt: "Maciej - Frontend Developer",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional headshot of a male developer with curly blonde hair</summary>
<mood>Professional, modern tech company portrait</mood>
<background_summary>Solid light gray background (#EBEBEB)</background_summary>
<primary_element>Young Caucasian male in his mid 20s with curly blonde/light brown hair, wearing black sweater, neutral expression, looking directly at camera, professional headshot from chest up</primary_element>
<etc_element>None</etc_element>`,
  },
  jakub: {
    path: "/registry/team-riotters-about/jakub.png",
    alt: "Jakub - Frontend Developer",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional headshot of a male developer with short dark hair</summary>
<mood>Professional, modern tech company portrait</mood>
<background_summary>Solid light gray background (#EBEBEB)</background_summary>
<primary_element>Young Caucasian male in his mid 20s with short dark brown hair, wearing black t-shirt, neutral expression, looking directly at camera, professional headshot from chest up</primary_element>
<etc_element>None</etc_element>`,
  },
  dawid: {
    path: "/registry/team-riotters-about/dawid.png",
    alt: "Dawid - Fullstack Developer",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional headshot of a male developer with short brown hair and beard</summary>
<mood>Professional, modern tech company portrait</mood>
<background_summary>Solid light gray background (#EBEBEB)</background_summary>
<primary_element>Young Caucasian male in his late 20s with short brown hair and short beard, wearing black t-shirt, neutral expression, looking directly at camera, professional headshot from chest up</primary_element>
<etc_element>None</etc_element>`,
  },
  marcin: {
    path: "/registry/team-riotters-about/marcin.png",
    alt: "Marcin - Frontend Developer",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional headshot of a male developer with short hair and glasses</summary>
<mood>Professional, modern tech company portrait</mood>
<background_summary>Solid light gray background (#EBEBEB)</background_summary>
<primary_element>Young Caucasian male in his mid 20s with short brown hair and round glasses, wearing black t-shirt, neutral expression, looking directly at camera, professional headshot from chest up</primary_element>
<etc_element>None</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { User } from "lucide-react";

// Tab categories
const TABS = [
  "Development",
  "UI Design",
  "Strategy",
  "UX Design",
  "Delivery",
  "Branding",
  "Culture",
] as const;

type TabName = (typeof TABS)[number];

// Team members by category
interface TeamMember {
  name: string;
  role: string;
  image: string;
  alt: string;
}

const TEAM_DATA: Record<TabName, TeamMember[]> = {
  Development: [
    {
      name: "Robert",
      role: "Development Team\nLeader",
      image: IMAGES.robert.path,
      alt: IMAGES.robert.alt,
    },
    {
      name: "Norbert",
      role: "Frontend Developer",
      image: IMAGES.norbert.path,
      alt: IMAGES.norbert.alt,
    },
    {
      name: "Maciej",
      role: "Frontend Developer",
      image: IMAGES.maciej.path,
      alt: IMAGES.maciej.alt,
    },
    {
      name: "Jakub",
      role: "Frontend Developer",
      image: IMAGES.jakub.path,
      alt: IMAGES.jakub.alt,
    },
    {
      name: "Dawid",
      role: "Fullstack Developer",
      image: IMAGES.dawid.path,
      alt: IMAGES.dawid.alt,
    },
    {
      name: "Marcin",
      role: "Frontend Developer",
      image: IMAGES.marcin.path,
      alt: IMAGES.marcin.alt,
    },
  ],
  "UI Design": [
    {
      name: "Robert",
      role: "UI Design Lead",
      image: IMAGES.robert.path,
      alt: IMAGES.robert.alt,
    },
    {
      name: "Maciej",
      role: "UI Designer",
      image: IMAGES.maciej.path,
      alt: IMAGES.maciej.alt,
    },
  ],
  Strategy: [
    {
      name: "Robert",
      role: "Strategy Lead",
      image: IMAGES.robert.path,
      alt: IMAGES.robert.alt,
    },
  ],
  "UX Design": [
    {
      name: "Norbert",
      role: "UX Designer",
      image: IMAGES.norbert.path,
      alt: IMAGES.norbert.alt,
    },
    {
      name: "Jakub",
      role: "UX Designer",
      image: IMAGES.jakub.path,
      alt: IMAGES.jakub.alt,
    },
  ],
  Delivery: [
    {
      name: "Dawid",
      role: "Delivery Manager",
      image: IMAGES.dawid.path,
      alt: IMAGES.dawid.alt,
    },
  ],
  Branding: [
    {
      name: "Maciej",
      role: "Brand Designer",
      image: IMAGES.maciej.path,
      alt: IMAGES.maciej.alt,
    },
    {
      name: "Marcin",
      role: "Brand Designer",
      image: IMAGES.marcin.path,
      alt: IMAGES.marcin.alt,
    },
  ],
  Culture: [
    {
      name: "Robert",
      role: "Culture Lead",
      image: IMAGES.robert.path,
      alt: IMAGES.robert.alt,
    },
    {
      name: "Norbert",
      role: "Culture Ambassador",
      image: IMAGES.norbert.path,
      alt: IMAGES.norbert.alt,
    },
  ],
};

interface TeamRiottersAboutProps {
  mode?: "light" | "dark";
  tabs?: TabName[];
  teamData?: Record<TabName, TeamMember[]>;
  defaultTab?: TabName;
}

export default function TeamRiottersAbout({
  mode = "light",
  tabs = [...TABS],
  teamData = TEAM_DATA,
  defaultTab = "Development",
}: TeamRiottersAboutProps) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState<TabName>(defaultTab);

  const currentTeam = teamData[activeTab] || [];

  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative pb-2 text-base md:text-lg font-medium transition-colors duration-200"
              style={{
                color: activeTab === tab ? colors.text : colors.tabInactive,
              }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: colors.text }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {currentTeam.map((member, index) => (
            <motion.div
              key={`${activeTab}-${member.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="group flex flex-col"
            >
              {/* Profile Image */}
              <div
                className="relative aspect-[4/5] w-full overflow-hidden mb-3"
                style={{ backgroundColor: colors.cardBackground }}
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User
                      className="w-1/3 h-1/3 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: colors.tabInactive }}
                    />
                  </div>
                )}
              </div>

              {/* Name */}
              <h3
                className="text-sm md:text-base font-semibold mb-1"
                style={{ color: colors.text }}
              >
                {member.name}
              </h3>

              {/* Role with highlight */}
              <div className="inline-block">
                {member.role.split("\n").map((line, lineIndex) => (
                  <span
                    key={lineIndex}
                    className="inline text-xs md:text-sm font-medium px-1"
                    style={{
                      backgroundColor: colors.accent,
                      color: colors.text,
                      boxDecorationBreak: "clone",
                      WebkitBoxDecorationBreak: "clone",
                    }}
                  >
                    {line}
                    {lineIndex < member.role.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
