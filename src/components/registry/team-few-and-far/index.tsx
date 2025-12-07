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
    background: "#0A0A0A",
    text: "#FFFFFF",
    textMuted: "#A3A3A3",
    underline: "#A3A3A3",
  },
  dark: {
    background: "#0A0A0A",
    text: "#FFFFFF",
    textMuted: "#A3A3A3",
    underline: "#A3A3A3",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // Placeholder images are used instead of generated images for team members
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import "./font.css";

// Team member type
interface TeamMember {
  id: string;
  name: string;
  image: string;
  role: string;
  tags: string[];
  linkedIn?: string;
  email?: string;
}

// Default team members based on the image
const defaultTeamMembers: TeamMember[] = [
  {
    id: "col",
    name: "Col",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    role: "Co-Founder and Creative Director",
    tags: ["Mental Wellbeing Advocate", "Gym & Dance Instructor"],
    linkedIn: "#",
  },
  {
    id: "cat",
    name: "Cat",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
    role: "Designer",
    tags: ["Skateboarder (Seasonal)", "Gamer"],
    linkedIn: "#",
  },
  {
    id: "tom",
    name: "Tom",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    role: "Co-Founder and Technical Director",
    tags: ["Italian Speaker", "Rubix Cube Master"],
    linkedIn: "#",
  },
  {
    id: "holly",
    name: "Holly",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    role: "Marketing Consultant",
    tags: ["Foodie", "Traveller"],
    email: "#",
    linkedIn: "#",
  },
  {
    id: "polly",
    name: "Polly",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=500&fit=crop&crop=face",
    role: "Barketing Manager",
    tags: ["Lover of snacks", "Cockapoo"],
    linkedIn: "#",
  },
  {
    id: "chester",
    name: "Chester",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=500&fit=crop&crop=face",
    role: "Comms Pawfficer",
    tags: ["Lover of frisbees", "Cockapoo"],
    linkedIn: "#",
  },
  {
    id: "eric",
    name: "Eric",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=500&fit=crop&crop=face",
    role: "Hooman Resources",
    tags: ["Sleepy Boy", "Husky Staffy"],
    linkedIn: "#",
  },
];

interface TeamFewAndFarProps {
  mode?: "light" | "dark";
  title?: string;
  titleAccent?: string;
  description?: string;
  teamMembers?: TeamMember[];
}

// Team Member Card Component
function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex flex-col"
    >
      {/* Image */}
      <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-lg">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Name and social icons */}
      <div className="mb-3 flex items-center justify-between border-b border-[#A3A3A3]/30 pb-3">
        <h3 className="font-inter text-xl font-normal text-white">{member.name}</h3>
        <div className="flex items-center gap-2">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-white transition-colors hover:text-gray-400"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              className="text-white transition-colors hover:text-gray-400"
              aria-label={`${member.name}'s LinkedIn`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Role and tags */}
      <div className="space-y-1">
        <p className="text-xs font-semibold text-white">{member.role}</p>
        {member.tags.map((tag, idx) => (
          <p key={idx} className="text-xs text-[#A3A3A3]">
            {tag}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default function TeamFewAndFar({
  mode = "dark",
  title = "Meet the",
  titleAccent = "Few",
  description = "The people you meet should always be the people you expect to work with. The clue's in the name: we're small so you work with our expert team, nobody else.",
  teamMembers = defaultTeamMembers,
}: TeamFewAndFarProps) {
  const colors = COLORS[mode];

  // Masonry-like layout positions
  // Column 1: indices 0, 3, 6
  // Column 2: indices 1, 4
  // Column 3: indices 2, 5

  const column1 = teamMembers.filter((_, i) => i % 3 === 0);
  const column2 = teamMembers.filter((_, i) => i % 3 === 1);
  const column3 = teamMembers.filter((_, i) => i % 3 === 2);

  return (
    <section
      className="relative w-full px-6 py-16 md:px-12 lg:px-20 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 max-w-md">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-normal text-white md:text-4xl"
          >
            {title}{" "}
            <span className="font-instrument-serif italic">{titleAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm leading-relaxed text-[#A3A3A3]"
          >
            {description}
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {column1.map((member, idx) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={idx * 3}
              />
            ))}
          </div>

          {/* Column 2 - offset */}
          <div className="flex flex-col gap-8 lg:mt-32 lg:gap-12">
            {column2.map((member, idx) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={idx * 3 + 1}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {column3.map((member, idx) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={idx * 3 + 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
