"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface RbbEconomicsHeroProps {
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
  logo = "RBB",
  headline = "Global leaders in\ncompetition economics",
  stats = {
    line1: "Over 200 specialist economists.",
    line2: "14 offices worldwide.",
    line3: "Landmark cases for the world's largest firms.",
  },
  images = {
    cityReflection: "/registry/rbb-economics-hero/city-reflection.jpg",
    businessShadows: "/registry/rbb-economics-hero/business-shadows.jpg",
    teamCollaboration: "/registry/rbb-economics-hero/team-collaboration.jpg",
  },
}: RbbEconomicsHeroProps) {
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
          alt="City reflection in glass windows"
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
          alt="Business professionals shadows"
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
          alt="Team collaboration"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
