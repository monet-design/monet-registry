"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    heading: "#000000",
    headingSecondary: "#9b9b9b",
    text: "#737373",
  },
  dark: {
    background: "#1a1a1a",
    heading: "#ffffff",
    headingSecondary: "#6b6b6b",
    text: "#b4b4b4",
  },
} as const;

const IMAGES = {
  profile: {
    path: "/registry/endless-2023/profile.jpg",
    alt: "Daryl - Designer at Endless",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface Paragraph {
  text: string;
}

interface Endless2023Props {
  mode?: "light" | "dark";
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  profileImage?: string;
  profileImageAlt?: string;
  paragraphs?: Paragraph[];
}

export default function Endless2023({
  mode = "light",
  title = "Who's behind Endless?",
  titleHighlight = "Who's behind Endless?",
  subtitle = "What makes us different to the other design agencies kicking about?",
  profileImage = IMAGES.profile.path,
  profileImageAlt = IMAGES.profile.alt,
  paragraphs = [
    {
      text: "Hey, I'm Daryl, a designer living in Western Australia. I've been designing fun and creative experiences for startups and companies for the past 20 years or more.",
    },
    {
      text: "I strongly believe in being transparent and honest, so I'll take a risk with you here and tell you I don't have any degrees or formal design education.",
    },
    {
      text: "But what I do have is years and years of experience doing the wrong things over and over again. So much so that I now fully understand what it takes to create beautiful designs that are not only eye-catching, but designs that users find engaging, leading them to take action.",
    },
    {
      text: "I've taken that experience and I've hand-picked some of the best designers I know in my 20 years working in this industry to work alongside me to design exceptional experiences for our clients.",
    },
    {
      text: "You might be surprised to know a lot of other design agencies are actually run by one designer. They often overstretch themselves and you'll find you're one of way too many clients they have taken on. In order to meet their demands they take shortcuts using templates and UI kits, this often leads to low quality design work that looks similar to everything else.",
    },
    {
      text: "We're a passionate bunch and we do everything from scratch with thought, attention and care. So if you're looking for someone to step in and take your designs to the next level, someone you can trust, someone you can build a long-lasting relationship with, we honestly believe that's us.",
    },
  ],
}: Endless2023Props) {
  const colors = COLORS[mode];
  const titleParts = title.split(titleHighlight);
  const hasTitleHighlight = titleParts.length > 1 || title === titleHighlight;

  return (
    <section className="w-full px-6 py-16 sm:px-8 lg:px-12 font-sans" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-[440px]">
        {/* Header Section with Title and Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          {/* Profile Image - Positioned to the right */}
          <div className="float-right ml-4 mb-1">
            <Image
              src={profileImage}
              alt={profileImageAlt}
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-[15px] leading-[1.5]">
            {hasTitleHighlight ? (
              <>
                <span className="font-semibold" style={{ color: colors.heading }}>{titleHighlight}</span>
                {titleParts[1] && (
                  <span className="font-normal" style={{ color: colors.headingSecondary }}>
                    {titleParts[1]}
                  </span>
                )}
              </>
            ) : (
              <>
                {titleParts[0]}
                <span className="font-semibold" style={{ color: colors.heading }}>{titleHighlight}</span>
              </>
            )}
            {" "}
            <span className="font-normal" style={{ color: colors.headingSecondary }}>{subtitle}</span>
          </h1>
        </motion.div>

        {/* Paragraphs */}
        <div className="space-y-5 clear-both">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              className="text-[13px] leading-[1.7]"
              style={{ color: colors.text }}
            >
              {paragraph.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
