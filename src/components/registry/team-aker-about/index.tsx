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
    // Accent line color (gold/brown)
    accent: "#C4A052",
    // Avatar colors
    avatarGreen: "#4A6741",
    avatarBrown: "#8B6914",
    avatarTeal: "#2D5D5B",
    avatarSand: "#B8A88A",
    avatarOlive: "#5E6B4A",
  },
  dark: {
    accent: "#D4B062",
    avatarGreen: "#5A7751",
    avatarBrown: "#9B7924",
    avatarTeal: "#3D6D6B",
    avatarSand: "#C8B89A",
    avatarOlive: "#6E7B5A",
  },
} as const;

// Avatar color palette for team members
const AVATAR_COLORS = [
  "#4A6741", // green
  "#8B6914", // brown
  "#2D5D5B", // teal
  "#B8A88A", // sand
  "#5E6B4A", // olive
  "#6B5B4F", // warm brown
  "#4A5D6B", // slate blue
];

// ============================================================================
// DATA
// ============================================================================

interface TeamMember {
  name: string;
  title: string;
  initials: string;
  colorIndex: number;
}

interface Department {
  name: string;
  members: TeamMember[];
}

const DEFAULT_QUOTE =
  "We're inspired by large movements in industry and consumer behavior, including work-from-anywhere, a renewed passion for the outdoors, and a desire for human connection.";

const DEFAULT_DEPARTMENTS: Department[] = [
  {
    name: "Management",
    members: [
      { name: "Mike Amato", title: "Principal", initials: "MA", colorIndex: 0 },
      { name: "Will Brocker", title: "Principal", initials: "WB", colorIndex: 1 },
    ],
  },
  {
    name: "Investments",
    members: [
      { name: "Harrison Mack", title: "Senior Associate", initials: "HM", colorIndex: 0 },
      { name: "Riley Rickfelder", title: "Associate", initials: "RR", colorIndex: 1 },
      { name: "Cate Sawkins", title: "Associate", initials: "CS", colorIndex: 2 },
    ],
  },
  {
    name: "Operations",
    members: [
      { name: "Katie Tang", title: "Director", initials: "KT", colorIndex: 2 },
      { name: "Paula Bracci", title: "Vice President", initials: "PB", colorIndex: 0 },
      { name: "Vasily Chernoplekov", title: "Vice President", initials: "VC", colorIndex: 2 },
      { name: "Michael Fairest", title: "Vice President", initials: "MF", colorIndex: 3 },
      { name: "Aly Davidson", title: "Operations Manager", initials: "AD", colorIndex: 0 },
    ],
  },
  {
    name: "Development",
    members: [
      { name: "Tina Ladd", title: "Senior Vice President", initials: "TL", colorIndex: 2 },
      { name: "Gary Williams", title: "Vice President", initials: "GW", colorIndex: 0 },
      { name: "Stephanie He", title: "Senior Project Manager", initials: "SH", colorIndex: 1 },
      { name: "Thomas Walsh", title: "Senior Project Manager", initials: "TW", colorIndex: 2 },
      { name: "Alex Rellos", title: "Project Manager", initials: "AR", colorIndex: 3 },
    ],
  },
  {
    name: "Accounting & Finance",
    members: [
      { name: "Michele Cade", title: "Chief Financial Officer, Real Estate", initials: "MC", colorIndex: 0 },
      { name: "Austin Brown", title: "Vice President", initials: "AB", colorIndex: 1 },
      { name: "Emily Wieczorek", title: "Accounting Manager", initials: "EW", colorIndex: 0 },
    ],
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Avatar component with initials
function Avatar({ initials, colorIndex }: { initials: string; colorIndex: number }) {
  const bgColor = AVATAR_COLORS[colorIndex % AVATAR_COLORS.length];

  return (
    <div
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium text-white"
      style={{ backgroundColor: bgColor }}
    >
      {initials}
    </div>
  );
}

// Team member row component
function TeamMemberRow({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="grid grid-cols-[auto_1fr_1fr] items-center gap-4 py-3 sm:grid-cols-[auto_1fr_1fr] md:gap-8"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <Avatar initials={member.initials} colorIndex={member.colorIndex} />
        <span className="text-sm font-medium text-gray-900 md:text-base">{member.name}</span>
      </div>
      <div className="hidden sm:block" />
      <span className="text-right font-serif text-sm italic text-gray-500 sm:text-left md:text-base">
        {member.title}
      </span>
    </motion.div>
  );
}

// Department section component
function DepartmentSection({
  department,
  departmentIndex,
}: {
  department: Department;
  departmentIndex: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: departmentIndex * 0.1 }}
      className="border-t border-gray-200 py-6 md:py-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:gap-8 lg:grid-cols-[240px_1fr]">
        {/* Department name */}
        <h3 className="text-base font-semibold text-gray-900 md:text-lg">{department.name}</h3>

        {/* Members list */}
        <div className="space-y-1">
          {department.members.map((member, index) => (
            <TeamMemberRow key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface TeamAkerAboutProps {
  mode?: "light" | "dark";
  quote?: string;
  departments?: Department[];
}

export default function TeamAkerAbout({
  mode = "light",
  quote = DEFAULT_QUOTE,
  departments = DEFAULT_DEPARTMENTS,
}: TeamAkerAboutProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-16 md:py-24 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex gap-6 md:mb-16 md:gap-8"
        >
          {/* Accent line */}
          <div
            className="w-1 flex-shrink-0 rounded-full"
            style={{ backgroundColor: colors.accent }}
          />

          {/* Quote text */}
          <blockquote
            className={`font-serif text-2xl font-light leading-relaxed md:text-3xl lg:text-4xl ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {quote}
          </blockquote>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`mb-8 h-px origin-left md:mb-12 ${
            isDark ? "bg-gray-800" : "bg-gray-200"
          }`}
        />

        {/* Team Directory */}
        <div>
          {departments.map((department, index) => (
            <DepartmentSection
              key={department.name}
              department={department}
              departmentIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
