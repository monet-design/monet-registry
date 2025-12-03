"use client";

import { motion } from "motion/react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface ContraPortfolioHeroProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  titleAccent?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  leftImageSrc?: string;
  rightImageSrc?: string;
}

export default function ContraPortfolioHero({
  badge = "Portfolio Website Templates for Freelancers",
  title = "A portfolio that",
  titleAccent = "works for you",
  description = "Showcase your personal brand with portfolio website template made for freelancers.",
  ctaText = "Join Waitlist",
  onCtaClick,
  leftImageSrc = "/registry/contra-portfolio-hero/left-shapes.png",
  rightImageSrc = "/registry/contra-portfolio-hero/right-shapes.png",
}: ContraPortfolioHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#14171F]">
      {/* Left 3D Shapes */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] lg:w-[500px] h-auto pointer-events-none z-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={leftImageSrc}
          alt="Abstract 3D shapes"
          width={500}
          height={667}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>

      {/* Right 3D Shapes */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] md:w-[350px] lg:w-[450px] h-auto pointer-events-none z-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src={rightImageSrc}
          alt="Abstract 3D tubes"
          width={450}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Badge */}
        <motion.p
          className="text-white/80 text-sm md:text-base font-normal tracking-wide mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {badge}
        </motion.p>

        {/* Main Title */}
        <motion.h1
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span
            className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </span>
          <span
            className="block text-[#968DDB] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {titleAccent}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-white/70 text-base md:text-lg text-center max-w-xl mt-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-10 px-8 py-3.5 bg-[#7B73C8] hover:bg-[#8A82D4] text-white font-medium text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7B73C8]/25"
          onClick={onCtaClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {ctaText}
        </motion.button>
      </div>

      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
}
