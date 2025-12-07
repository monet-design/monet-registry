"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    text: "#0A0A0A",
    grayCircle: "#E8E8E8",
    gradientPurple: "#A855F7",
    gradientPink: "#EC4899",
  },
  dark: {
    background: "#1A1A1A",
    text: "#F5F5F5",
    grayCircle: "#333333",
    gradientPurple: "#A855F7",
    gradientPink: "#EC4899",
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
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Bunsen Logo Icon
function BunsenLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Abstract laboratory/chemistry flask icon */}
      <path
        d="M16 4V12M12 12V4M20 12V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 12H22L24 28H8L10 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M10 20H22"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

interface TeamMember {
  name: string;
  image?: string;
}

interface TeamBunsenHomeProps {
  mode?: "light" | "dark";
  logoIcon?: React.ReactNode;
  headline?: string;
  teamMembers?: TeamMember[];
  teamDescription?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export default function TeamBunsenHome({
  mode = "light",
  logoIcon,
  headline = "Our team is focused on using\ndesign & language to make\nthe business of science\ncrystal clear.",
  teamMembers = [
    { name: "Sarah", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
    { name: "Emily", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
  ],
  teamDescription = "Meet our global team of\ndesigners & storytellers",
  ctaText = "About us",
  ctaHref = "#about",
  onCtaClick,
}: TeamBunsenHomeProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top section - Logo and Headline */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 mb-16 lg:mb-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
            style={{ color: colors.text }}
          >
            {logoIcon || <BunsenLogo className="w-10 h-10" />}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight whitespace-pre-line max-w-3xl"
            style={{ color: colors.text }}
          >
            {headline}
          </motion.h1>
        </div>

        {/* Center Graphic - Circles with gradient blur */}
        <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-[400px] mb-16 lg:mb-24">
          {/* Gray Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] rounded-full left-1/2 -translate-x-[60%]"
            style={{ backgroundColor: colors.grayCircle }}
          />

          {/* Purple/Pink Gradient Blur */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute w-[240px] h-[240px] lg:w-[350px] lg:h-[350px] rounded-full left-1/2 -translate-x-[20%]"
            style={{
              background: `radial-gradient(circle at center, ${colors.gradientPurple} 0%, ${colors.gradientPink} 40%, transparent 70%)`,
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Bottom section - Team info and CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Left - Team avatars and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            {/* Stacked Avatars */}
            <div className="flex -space-x-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative w-12 h-12 rounded-full border-2 overflow-hidden"
                  style={{
                    borderColor: colors.background,
                    zIndex: teamMembers.length - index,
                  }}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-sm font-medium"
                      style={{
                        backgroundColor: colors.grayCircle,
                        color: colors.text,
                      }}
                    >
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Team Description */}
            <p
              className="text-sm font-medium leading-snug whitespace-pre-line"
              style={{ color: colors.text }}
            >
              {teamDescription}
            </p>
          </motion.div>

          {/* Right - CTA Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href={ctaHref}
            onClick={(e) => {
              if (onCtaClick) {
                e.preventDefault();
                onCtaClick();
              }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors hover:bg-black/5"
            style={{
              borderColor: colors.text,
              color: colors.text,
            }}
          >
            {ctaText}
            <ArrowRight size={16} strokeWidth={2} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
