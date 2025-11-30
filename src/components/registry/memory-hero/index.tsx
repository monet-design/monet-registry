"use client";

import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Lightbulb } from "lucide-react";

interface MemoryHeroProps {
  title?: string;
  features?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
}

// Abstract graphic elements for the left illustration
function OrangePill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="absolute left-0 top-[60px] w-[70px] h-[200px] bg-[#E35123] rounded-full flex items-start justify-center pt-6"
    >
      <div className="flex gap-1.5">
        <div className="w-2 h-2 bg-black rounded-full" />
        <div className="w-2 h-2 bg-black rounded-full" />
        <div className="w-2 h-2 bg-black rounded-full" />
      </div>
    </motion.div>
  );
}

function YellowCircle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="absolute left-[150px] top-[40px] w-[50px] h-[50px] bg-[#FDF5CC] rounded-full flex items-center justify-center"
    >
      <span className="text-lg">
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" fill="#1a1a1a" />
          <ellipse cx="12" cy="14" rx="5" ry="3" fill="#FDF5CC" />
        </svg>
      </span>
    </motion.div>
  );
}

function WhiteArrowPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute left-[200px] top-[30px] w-[55px] h-[150px] bg-white border-2 border-[#1a1a1a] rounded-full flex flex-col items-center justify-center gap-2"
    >
      <svg viewBox="0 0 24 48" className="w-5 h-12">
        <line x1="12" y1="42" x2="12" y2="6" stroke="#1a1a1a" strokeWidth="2" />
        <polyline points="6,14 12,6 18,14" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}

function DarkWithAIPill() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute left-[130px] top-[140px] w-[50px] h-[130px] bg-[#1a1a1a] rounded-full flex items-center justify-center"
    >
      <span
        className="text-white text-sm font-semibold tracking-wide"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        With AI
      </span>
    </motion.div>
  );
}

function ShopperText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute left-[85px] top-[90px] flex items-center gap-2"
    >
      <span
        className="text-[#1a1a1a] text-2xl font-bold tracking-tight"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Shopper
      </span>
      <svg viewBox="0 0 24 24" className="w-6 h-6 -rotate-90">
        <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}

function LightBlueBulbCircle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="absolute left-[0px] top-[280px] w-[50px] h-[50px] bg-[#D8F0F7] rounded-full flex items-center justify-center"
    >
      <Lightbulb className="w-5 h-5 text-[#1a1a1a]" strokeWidth={1.5} />
    </motion.div>
  );
}

function PinkPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="absolute left-[0px] top-[340px] w-[70px] h-[160px] bg-[#F9C4D5] rounded-full flex items-center justify-center"
    >
      <span
        className="text-[#1a1a1a] text-xs font-semibold tracking-wide leading-tight text-center"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Intelligent<br />decision
      </span>
    </motion.div>
  );
}

function WhiteFingerPill() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="absolute left-[180px] top-[200px] w-[55px] h-[120px] bg-white border-2 border-[#1a1a1a] rounded-full flex items-center justify-center"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <rect x="10" y="6" width="12" height="20" rx="6" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="16" cy="12" r="2" fill="#1a1a1a" />
      </svg>
    </motion.div>
  );
}

function TealCube() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 15 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="absolute left-[245px] top-[290px] w-[40px] h-[40px] bg-[#7DD3D8] rounded-lg flex items-center justify-center"
      style={{ transform: "rotate(15deg)" }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}

function PinkUShape() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="absolute left-[230px] top-[340px] flex flex-col items-center"
    >
      <svg viewBox="0 0 40 50" className="w-10 h-12">
        <path d="M5 5 v25 a15 15 0 0 0 30 0 v-25" fill="none" stroke="#F9C4D5" strokeWidth="8" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

function WhiteAnalyticsPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="absolute left-[170px] top-[390px] w-[70px] h-[130px] bg-white border-2 border-[#1a1a1a] rounded-full flex flex-col items-center justify-center gap-3 py-4"
    >
      <div className="flex gap-0.5">
        <div className="w-0.5 h-3 bg-[#1a1a1a]" />
        <div className="w-0.5 h-3 bg-[#1a1a1a]" />
        <div className="w-0.5 h-3 bg-[#1a1a1a]" />
      </div>
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="8" cy="8" r="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="12" cy="16" r="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <line x1="8" y1="11" x2="12" y2="13" stroke="#1a1a1a" strokeWidth="1" />
        <line x1="16" y1="11" x2="12" y2="13" stroke="#1a1a1a" strokeWidth="1" />
      </svg>
      <svg viewBox="0 0 24 20" className="w-6 h-5">
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse key={i} cx="12" cy={4 + i * 3} rx={8 - i} ry="1.5" fill="none" stroke="#1a1a1a" strokeWidth="1" />
        ))}
      </svg>
    </motion.div>
  );
}

export default function MemoryHero({
  title = "Drive smarter\nbusiness decisions\nthrough AI",
  features = [
    "Harness transactional and shopper data",
    "Take better decisions thanks to predictive tools",
    "Reach undisputed short term ROI",
  ],
  ctaText = "Request a demo",
  onCtaClick,
}: MemoryHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#F0F4F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Abstract illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-1/2 h-[500px] lg:h-[550px]"
          >
            <OrangePill />
            <YellowCircle />
            <WhiteArrowPill />
            <ShopperText />
            <DarkWithAIPill />
            <LightBlueBulbCircle />
            <PinkPill />
            <WhiteFingerPill />
            <TealCube />
            <PinkUShape />
            <WhiteAnalyticsPill />
          </motion.div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight whitespace-pre-line"
            >
              {title}
            </motion.h1>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 text-[#47545B] text-base md:text-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#47545B] flex-shrink-0" strokeWidth={1.5} />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-sm font-medium w-fit hover:bg-[#333] transition-colors"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
