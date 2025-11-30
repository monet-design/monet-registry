"use client";

import { motion } from "motion/react";
import { Play, Slack } from "lucide-react";
import Image from "next/image";

interface CoherenceHeroProps {
  title?: string;
  titleAccent?: string;
  description?: string;
  highlightedWords?: string[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  dashboardImage?: string;
  awsIcon?: React.ReactNode;
  gcpIcon?: React.ReactNode;
}

export default function CoherenceHero({
  title = "Platform Engineering",
  titleAccent = "as a Service",
  description = "Coherence automates preview environments, CI/CD pipelines, and production deployments in your AWS or GCP account. More power, less hassle.",
  highlightedWords = ["preview environments", "CI/CD pipelines", "production"],
  primaryButtonText = "Try a sandbox",
  primaryButtonHref = "#",
  secondaryButtonText = "Connect via Slack",
  secondaryButtonHref = "#",
  dashboardImage = "/registry/coherence-hero/dashboard.png",
}: CoherenceHeroProps) {
  const renderDescription = () => {
    let result = description;
    const parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;

    highlightedWords.forEach((word, idx) => {
      const index = result.indexOf(word, lastIndex);
      if (index !== -1) {
        if (index > lastIndex) {
          parts.push(result.slice(lastIndex, index));
        }
        parts.push(
          <span key={idx} className="text-[#B8A5D0]">
            {word}
          </span>
        );
        lastIndex = index + word.length;
      }
    });

    if (lastIndex < result.length) {
      parts.push(result.slice(lastIndex));
    }

    return parts;
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0D0C11] overflow-hidden">
      {/* Font import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>

      {/* Constellation/Network graphic - top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none">
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-60"
        >
          {/* Connection lines */}
          <motion.path
            d="M100 50 L200 120 L350 80 L420 150 L380 250 L300 200 L200 220 L150 300"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path
            d="M200 120 L300 200 L350 80"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          />
          <motion.path
            d="M420 150 L480 100 M380 250 L450 280"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />

          {/* Star/node points */}
          {[
            { cx: 100, cy: 50, delay: 0 },
            { cx: 200, cy: 120, delay: 0.2 },
            { cx: 350, cy: 80, delay: 0.4 },
            { cx: 420, cy: 150, delay: 0.6 },
            { cx: 380, cy: 250, delay: 0.8 },
            { cx: 300, cy: 200, delay: 1.0 },
            { cx: 200, cy: 220, delay: 1.2 },
            { cx: 150, cy: 300, delay: 1.4 },
            { cx: 480, cy: 100, delay: 0.7 },
            { cx: 450, cy: 280, delay: 0.9 },
            { cx: 250, cy: 60, delay: 0.5 },
            { cx: 320, cy: 140, delay: 0.6 },
          ].map((point, i) => (
            <motion.g key={i}>
              <motion.circle
                cx={point.cx}
                cy={point.cy}
                r="3"
                fill="#32AAA9"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: point.delay, duration: 0.3 }}
              />
              <motion.circle
                cx={point.cx}
                cy={point.cy}
                r="6"
                fill="#32AAA9"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{
                  delay: point.delay + 1,
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.g>
          ))}

          {/* Sparkle/star shapes */}
          {[
            { x: 280, y: 30, size: 8 },
            { x: 400, y: 200, size: 6 },
            { x: 180, y: 170, size: 5 },
          ].map((star, i) => (
            <motion.g
              key={`star-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{
                delay: i * 0.5 + 1,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <path
                d={`M${star.x} ${star.y - star.size} L${star.x} ${star.y + star.size} M${star.x - star.size} ${star.y} L${star.x + star.size} ${star.y}`}
                stroke="white"
                strokeWidth="1.5"
              />
            </motion.g>
          ))}

          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#32AAA9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3A1C66" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Title */}
        <motion.h1
          className="text-white text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
          <br />
          <span className="italic">{titleAccent}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-[#CFCED0] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {renderDescription()}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href={primaryButtonHref}
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0D0C11] text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {primaryButtonText}
          </a>
          <a
            href={secondaryButtonHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A1F] text-white text-sm font-medium rounded-lg border border-[#2A2A30] hover:bg-[#252530] transition-colors duration-200"
          >
            <Slack className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </motion.div>

        {/* Dashboard image with play button */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          {/* Glow effect behind dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-b from-[#3A1C66]/20 via-[#3A1C66]/10 to-transparent rounded-3xl blur-2xl" />

          {/* Dashboard container */}
          <div className="relative rounded-xl overflow-hidden border border-[#2A2A30] shadow-2xl">
            <Image
              src={dashboardImage}
              alt="Coherence Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
            />

            {/* Play button overlay */}
            <motion.button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: "radial-gradient(circle, #5B2D8C 0%, #3A1C66 50%, #2A1050 100%)",
                boxShadow: "0 0 40px 10px rgba(90, 45, 140, 0.4), 0 0 80px 20px rgba(90, 45, 140, 0.2)",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            >
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#5B2D8C]"
                animate={{
                  scale: [1, 1.3, 1.3],
                  opacity: [0.6, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0C11] to-transparent pointer-events-none" />
    </section>
  );
}
