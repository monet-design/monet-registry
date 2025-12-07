"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#f5f3ef", // 밝은 베이지/크림
  text: "#1a2b47", // 다크 네이비
  divider: "#1a2b47", // 구분선 색상
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  ceoProfile: {
    path: "/registry/team-axim/ceo-profile.jpg",
    alt: "Stephanie Khurana, Chief Executive Officer",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional headshot of a female CEO</summary>
<mood>Professional, warm, approachable, natural outdoor lighting</mood>
<background_summary>Blurred outdoor background with green foliage and warm sunlight</background_summary>
<primary_element>A professional woman in her 40s with shoulder-length brown hair, wearing a light blue button-up shirt, smiling warmly at the camera. Natural, professional appearance.</primary_element>
<etc_element>None</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface TeamMember {
  name: string;
  title: string;
  image?: {
    src: string;
    alt: string;
  };
}

interface TeamAximProps {
  mode?: "light" | "dark";
  sectionTitle?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    name: "Stephanie Khurana",
    title: "Chief Executive Officer",
    image: {
      src: IMAGES.ceoProfile.path,
      alt: IMAGES.ceoProfile.alt,
    },
  },
  {
    name: "Peter Brau",
    title: "Chief Financial Officer",
  },
  {
    name: "Nell Ma'luf",
    title: "General Counsel",
  },
  {
    name: "Philipp Schmidt",
    title: "Chief Technology Officer",
  },
  {
    name: "Catie Smith",
    title: "Chief People and Partnerships Officer",
  },
  {
    name: "Ed Zarecor",
    title: "Vice President of Engineering",
  },
];

export default function TeamAxim({
  mode = "light",
  sectionTitle = "Senior Team",
  members = defaultMembers,
}: TeamAximProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleMemberClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className="relative w-full py-16 px-8 lg:px-16"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-['Instrument_Serif',serif] text-4xl md:text-5xl font-normal mb-8"
          style={{ color: COLORS.text }}
        >
          {sectionTitle}
        </motion.h2>

        {/* Top Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-[1px] w-full origin-left"
          style={{ backgroundColor: COLORS.divider }}
        />

        {/* Team Members List */}
        <div className="divide-y" style={{ borderColor: COLORS.divider }}>
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="cursor-pointer"
              onClick={() => handleMemberClick(index)}
              style={{ borderColor: COLORS.divider }}
            >
              <div
                className="py-6 flex justify-between items-start"
                style={{ borderColor: COLORS.divider }}
              >
                <div className="flex-1">
                  {/* Member Name */}
                  <h3
                    className="font-['Instrument_Serif',serif] text-xl md:text-2xl font-normal mb-1"
                    style={{ color: COLORS.text }}
                  >
                    {member.name}
                  </h3>
                  {/* Member Title */}
                  <p
                    className="font-['Inter',sans-serif] text-sm md:text-base italic"
                    style={{ color: COLORS.text }}
                  >
                    {member.title}
                  </p>
                </div>

                {/* Profile Image (shown when expanded and image exists) */}
                <AnimatePresence>
                  {expandedIndex === index && member.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-32 h-40 md:w-40 md:h-48 overflow-hidden flex-shrink-0 ml-8"
                    >
                      <Image
                        src={member.image.src}
                        alt={member.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 128px, 160px"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom border for each item */}
              <div
                className="h-[1px] w-full"
                style={{ backgroundColor: COLORS.divider }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
