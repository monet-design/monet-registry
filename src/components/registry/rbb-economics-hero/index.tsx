"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#012D33",
  },
  dark: {
    background: "#001A1F",
  },
} as const;

const IMAGES = {
  cityReflection: {
    path: "/registry/rbb-economics-hero/city-reflection.jpg",
    alt: "City skyline reflected in glass windows",
    prompt: `Modern city skyline reflected in glass building facade.
Style: Architectural photography, urban, corporate aesthetic
Layout: Abstract reflection creating geometric patterns
Composition: Building reflections with distorted cityscape
Background: Glass windows with reflected urban architecture
Color palette: Cool blues, grays, urban tones, glass reflections
Elements: Building facades, window reflections, urban skyline
Mood: Modern, corporate, sophisticated, metropolitan
Technical: High resolution, architectural detail, reflection effects`,
  },
  businessShadows: {
    path: "/registry/rbb-economics-hero/business-shadows.jpg",
    alt: "Business professionals silhouettes and shadows",
    prompt: `Silhouettes and shadows of business professionals.
Style: Artistic corporate photography, high contrast
Layout: Horizontal composition with shadow play
Composition: Business people silhouettes, long shadows, architectural elements
Background: Modern office or urban setting
Color palette: High contrast blacks, grays, dramatic lighting
Elements: Professional silhouettes, geometric shadows, architectural lines
Mood: Professional, dynamic, corporate power, modern business
Technical: High contrast, dramatic lighting, silhouette photography`,
  },
  teamCollaboration: {
    path: "/registry/rbb-economics-hero/team-collaboration.jpg",
    alt: "Team collaboration in professional setting",
    prompt: `Business team collaborating in modern office.
Style: Corporate photography, professional environment
Layout: Group interaction, collaborative setting
Composition: Team members in discussion or working together
Background: Modern office, meeting space
Color palette: Professional lighting, corporate environment tones
Elements: Team interaction, professional attire, collaborative work
Mood: Productive, professional, teamwork, expertise
Technical: High resolution, natural lighting, professional setting`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface RbbEconomicsHeroProps {
  mode?: "light" | "dark";
  logo?: string;
  headline?: string;
  stats?: {
    line1?: string;
    line2?: string;
    line3?: string;
  };
  images?: {
    cityReflection?: string;
    businessShadows?: string;
    teamCollaboration?: string;
  };
}

export default function RbbEconomicsHero({
  mode = "light",
  logo = "RBB",
  headline = "Global leaders in\ncompetition economics",
  stats = {
    line1: "Over 200 specialist economists.",
    line2: "14 offices worldwide.",
    line3: "Landmark cases for the world's largest firms.",
  },
  images = {
    cityReflection: IMAGES.cityReflection.path,
    businessShadows: IMAGES.businessShadows.path,
    teamCollaboration: IMAGES.teamCollaboration.path,
  },
}: RbbEconomicsHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative w-full min-h-screen bg-[#012D33] overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-8 z-10"
      >
        <span className="text-white font-serif text-2xl tracking-wide">
          {logo}
          <span className="text-white/60">|</span>
        </span>
      </motion.div>

      {/* City Reflection Image - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute top-[100px] left-[10%] w-[200px] h-[200px] z-10"
      >
        <Image
          src={images.cityReflection || ""}
          alt={IMAGES.cityReflection.alt}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Business Shadows Image - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute top-0 right-0 w-[35%] h-[280px] z-10"
      >
        <Image
          src={images.businessShadows || ""}
          alt={IMAGES.businessShadows.alt}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-24 pt-[200px] pb-16">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight whitespace-pre-line mb-12"
        >
          {headline}
        </motion.h1>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col gap-1 pl-1 border-l-2 border-white/30"
        >
          <p className="text-white text-sm md:text-base font-light tracking-wide pl-4">
            {stats.line1}
          </p>
          <p className="text-white text-sm md:text-base font-light tracking-wide pl-4">
            {stats.line2}
          </p>
          <p className="text-white text-sm md:text-base font-light tracking-wide pl-4">
            {stats.line3}
          </p>
        </motion.div>
      </div>

      {/* Team Collaboration Image - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bottom-[10%] right-[10%] w-[250px] h-[180px] z-10"
      >
        <Image
          src={images.teamCollaboration || ""}
          alt={IMAGES.teamCollaboration.alt}
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
