"use client";

import { motion } from "motion/react";
import { Menu } from "lucide-react";
import Image from "next/image";

interface PashAboutPageSectionHeroProps {
  mode?: "light" | "dark";
  logo?: string;
  headline?: string[];
  headlineAccent?: string;
  description?: string;
  ctaText?: string;
  marqueeText?: string;
  portraitSrc?: string;
  onCtaClick?: () => void;
}

const CUSTOMIZATION = {}

export default function PashAboutPageSectionHero({
  mode = "light",
  logo = "PT",
  headline = ["BORN", "TO"],
  headlineAccent = "DESIGN",
  description = "I prefer to work with such client who knows the gaps and pain in his business, and I am ready to help solve it with my experience and knowledge, who trusts my competence. I prefer to work with such client who looking for a partner, not just a hand to work with to solve his problems, who is open to ideas and willing to work outside the box. I prefer to work with such client who loves challenges and is not afraid of experiments.",
  ctaText = "GET STARTED",
  marqueeText = "HELP UKRAINIAN CHILDREN",
  portraitSrc = "/registry/pash-about-page-section-hero/portrait.png",
  onCtaClick,
}: PashAboutPageSectionHeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#D8D5CE]">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[#031114]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {logo}<span className="text-xs align-top">&#174;</span>
        </motion.div>

        <div className="flex items-center gap-3">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={onCtaClick}
            className="px-5 py-2 text-sm font-medium text-[#C4501A] border border-[#C4501A] rounded-full bg-[#E8D6C3] hover:bg-[#C4501A] hover:text-white transition-colors duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {ctaText}
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E8D6C3]"
          >
            <Menu className="w-5 h-5 text-[#C4501A]" />
          </motion.button>
        </div>
      </header>

      {/* Marquee Banner */}
      <div className="relative overflow-hidden py-3 bg-transparent border-y border-[#676465]/30">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-2 text-sm text-[#676465]" style={{ fontFamily: "'Inter', sans-serif" }}>
              {marqueeText} <span className="text-base">&#127482;&#127462;</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative px-6 md:px-10 pt-6 md:pt-10">
        {/* Large Headlines */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#C4501A] leading-[0.85] tracking-tight"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(80px, 20vw, 220px)",
            }}
          >
            {headline[0]}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[#C4501A] leading-[0.85] tracking-tight"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(80px, 20vw, 220px)",
            }}
          >
            {headline[1]}
          </motion.h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[-60px] md:mt-[-120px]">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative z-10 w-[250px] md:w-[300px] lg:w-[350px] ml-0 md:ml-10"
          >
            <Image
              src={portraitSrc}
              alt="Designer portrait"
              width={350}
              height={467}
              className="object-cover"
            />
          </motion.div>

          {/* Right Side - Accent Headline and Description */}
          <div className="relative flex flex-col justify-start pt-0 md:pt-20">
            <motion.h2
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-[#C4501A] italic leading-[0.9] tracking-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: "clamp(60px, 15vw, 180px)",
              }}
            >
              {headlineAccent}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-[#C4501A] italic text-sm md:text-base leading-relaxed max-w-md"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
              }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      `}</style>
    </section>
  );
}
