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
  // Dark teal background
  background: "#0d1f1e",
  // Lime/yellow-green accent
  accent: "#d4f030",
  accentDark: "#c5e020",
  // Text colors
  textPrimary: "#ffffff",
  textSecondary: "rgba(255, 255, 255, 0.7)",
  // Card border
  cardBorder: "rgba(255, 255, 255, 0.2)",
  // Scanner frame
  scannerFrame: "#888888",
} as const;

/**
 * 텍스트 콘텐츠
 */
const CONTENT = {
  sectionLabel: "Introducing Our People",
  title: {
    line1: "THE SOUND ETHICS",
    line2: "TEAM",
  },
  joinSection: {
    title: "JOIN THE TEAM",
    description:
      "We embrace a decentralized organization to empower our team, foster innovation, and respond swiftly to meet the rapid advance of AI.",
    buttonText: "CAREERS",
  },
  teamMembers: [
    {
      name: "JAMES O'BRIEN",
      role: "Founder Co-CEO",
      bio: "James has dedicated over 30 years to the music industry, blending his roles as a producer, composer, and developer with a passion for advocating artists' rights in the evolving digital landscape.",
      linkedIn: "https://linkedin.com",
      initials: "JO",
    },
    {
      name: "RICHARD BLAKELY",
      role: "Founder Co-CEO",
      bio: "CEO and Co-Founder of Influxis, Xirsys, and Millicast, Richard is a trailblazer in the real-time communications industry. His innovations enable immersive interactions globally, serving top brands.",
      linkedIn: "https://linkedin.com",
      initials: "RB",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import "./font.css";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedIn?: string;
  image?: string;
  initials?: string;
}

interface TeamSoundEthicsProps {
  sectionLabel?: string;
  titleLine1?: string;
  titleLine2?: string;
  joinTitle?: string;
  joinDescription?: string;
  joinButtonText?: string;
  joinButtonHref?: string;
  teamMembers?: TeamMember[];
  backgroundImage?: string;
}

export default function TeamSoundEthics({
  sectionLabel = CONTENT.sectionLabel,
  titleLine1 = CONTENT.title.line1,
  titleLine2 = CONTENT.title.line2,
  joinTitle = CONTENT.joinSection.title,
  joinDescription = CONTENT.joinSection.description,
  joinButtonText = CONTENT.joinSection.buttonText,
  joinButtonHref = "#careers",
  teamMembers = CONTENT.teamMembers as unknown as TeamMember[],
  backgroundImage,
}: TeamSoundEthicsProps) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Background image overlay */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${COLORS.background} 30%, transparent 70%)`,
            }}
          />
        </div>
      )}

      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 80% 50%, rgba(20, 80, 70, 0.4) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm mb-8"
          style={{ color: COLORS.textSecondary }}
        >
          {sectionLabel}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left column - Title and Join section */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8 lg:mb-12"
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic mb-2"
                style={{
                  color: COLORS.textPrimary,
                  fontFamily: "'Instrument Serif', Georgia, serif",
                }}
              >
                {titleLine1}
              </h2>
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight"
                style={{ color: COLORS.textPrimary }}
              >
                {titleLine2}
              </h2>
            </motion.div>

            {/* Join the team box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-none"
              style={{ backgroundColor: COLORS.accent }}
            >
              <h3
                className="text-lg sm:text-xl font-bold mb-4 uppercase tracking-wide"
                style={{ color: COLORS.background }}
              >
                {joinTitle}
              </h3>
              <p
                className="text-sm sm:text-base mb-6 leading-relaxed"
                style={{ color: "rgba(13, 31, 30, 0.8)" }}
              >
                {joinDescription}
              </p>
              <a
                href={joinButtonHref}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group"
                style={{ color: COLORS.background }}
              >
                <span className="border-b-2 border-current pb-0.5">
                  {joinButtonText}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right column - Team members */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                  className="flex flex-col"
                >
                  {/* Scanner frame image */}
                  <div className="relative mb-4">
                    <div
                      className="relative aspect-[3/4] overflow-hidden"
                      style={{
                        border: `4px solid ${COLORS.scannerFrame}`,
                        boxShadow: `inset 0 0 20px rgba(0, 0, 0, 0.5)`,
                      }}
                    >
                      {/* Scanner corner brackets */}
                      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white/50" />
                      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-white/50" />
                      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-white/50" />
                      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white/50" />

                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover grayscale"
                          style={{ filter: "grayscale(100%) contrast(1.1)" }}
                        />
                      ) : (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ backgroundColor: "#3a3a3a" }}
                        >
                          {/* Scan lines effect */}
                          <div
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                              backgroundImage: `repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 2px,
                                rgba(255, 255, 255, 0.03) 2px,
                                rgba(255, 255, 255, 0.03) 4px
                              )`,
                            }}
                          />
                          <span
                            className="text-4xl sm:text-5xl font-bold"
                            style={{ color: COLORS.textSecondary }}
                          >
                            {member.initials || member.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                      )}

                      {/* Noise overlay */}
                      <div
                        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>

                    {/* Bottom identifier label */}
                    <div
                      className="absolute -bottom-2 right-4 px-3 py-1 text-xs font-mono"
                      style={{
                        backgroundColor: COLORS.accent,
                        color: COLORS.background,
                      }}
                    >
                      0{index + 1}
                    </div>
                  </div>

                  {/* Member info */}
                  <h3
                    className="text-lg sm:text-xl font-bold mb-1 uppercase tracking-wide"
                    style={{ color: COLORS.textPrimary }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm mb-3"
                    style={{ color: COLORS.accent }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: COLORS.textSecondary }}
                  >
                    {member.bio}
                  </p>

                  {/* LinkedIn link */}
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider group mt-auto"
                      style={{ color: COLORS.accent }}
                    >
                      <ArrowRight className="w-3 h-3" />
                      <span className="border-b border-current pb-0.5 group-hover:border-white group-hover:text-white transition-colors">
                        LINKEDIN
                      </span>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
