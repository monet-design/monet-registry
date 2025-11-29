"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./font.css";

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  companyName: string;
  companyLogo?: React.ReactNode;
}

interface NvgtTestimonialSliderProps {
  badgeText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  testimonials?: Testimonial[];
}

// Sentry Logo Component
function SentryLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 72 66"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M29.91 0.82L3.98 46.22C2.92 48.04 2.38 50.1 2.38 52.2C2.38 54.29 2.92 56.36 3.98 58.18C5.04 60 6.58 61.49 8.45 62.5C10.32 63.51 12.44 64 14.6 64H22.4V58.86H14.6C13.47 58.86 12.37 58.56 11.41 58.01C10.45 57.45 9.66 56.66 9.12 55.72C8.58 54.78 8.3 53.72 8.3 52.64C8.3 51.56 8.58 50.5 9.12 49.56L35 4.16C35.54 3.22 36.32 2.43 37.28 1.88C38.24 1.32 39.35 1.02 40.48 1.02C41.61 1.02 42.71 1.32 43.67 1.88C44.63 2.43 45.42 3.22 45.96 4.16L71.89 49.56C72.43 50.5 72.71 51.56 72.71 52.64C72.71 53.72 72.43 54.78 71.89 55.72C71.35 56.66 70.56 57.45 69.6 58.01C68.64 58.56 67.53 58.86 66.4 58.86H58.6V64H66.4C68.56 64 70.68 63.51 72.55 62.5C74.42 61.49 75.96 60 77.02 58.18C78.08 56.36 78.62 54.29 78.62 52.2C78.62 50.1 78.08 48.04 77.02 46.22L51.09 0.82C50.03 -1 48.49 -2.49 46.62 -3.5C44.75 -4.51 42.63 -5 40.47 -5C38.31 -5 36.19 -4.51 34.32 -3.5C32.45 -2.49 30.91 -1 29.91 0.82Z" />
      </svg>
      <span className="text-sm font-medium uppercase tracking-wider">
        SENTRY
      </span>
    </div>
  );
}

// Capital Dept Logo Component
function CapitalDeptLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <span
        className="text-lg font-normal tracking-tight"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Capital Dept.
      </span>
    </div>
  );
}

// Limbo Logo Component
function LimboLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-1">
        <div className="h-2.5 w-2.5 rounded-sm bg-white/80" />
        <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-white/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/80" />
        <div className="h-2.5 w-2.5 rounded-full border-2 border-white/80" />
      </div>
      <span className="ml-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
        LIMBO
      </span>
    </div>
  );
}

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      '"Really appreciate the creativity, flexibility, and attention to detail. Having you help QA during the build helped ensure that we\'d ship a quality site on time. Means a lot!"',
    authorName: "Chris Jennings",
    authorRole: "Co-Founder & CDO",
    authorAvatar: "https://picsum.photos/seed/chris-jennings/100/100",
    companyName: "SENTRY",
    companyLogo: <SentryLogo className="text-white/80" />,
  },
  {
    id: 2,
    quote:
      '"NVGT is a design secret weapon. They never cease to wow us and are an incredible partner."',
    authorName: "Maria Springer",
    authorRole: "Founder & CEO",
    authorAvatar: "https://picsum.photos/seed/maria-springer/100/100",
    companyName: "Capital Dept.",
    companyLogo: <CapitalDeptLogo className="text-white" />,
  },
  {
    id: 3,
    quote:
      '"I\'ve had the pleasure of working with NVGT for 10+ years. Their creativity, professionalism, and attention to detail are world-class. NVGT is a true asset to any team."',
    authorName: "Tyler Hayes",
    authorRole: "Co-Founder & CEO",
    authorAvatar: "https://picsum.photos/seed/tyler-hayes/100/100",
    companyName: "LIMBO",
    companyLogo: <LimboLogo />,
  },
];

// Badge Component
function Badge({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
    >
      <span className="h-2 w-2 rounded-full bg-lime-400" />
      <span className="text-xs font-medium text-white/90">{text}</span>
    </motion.div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="flex h-full min-w-[280px] max-w-[320px] cursor-pointer flex-col rounded-2xl bg-[#141416] p-5 transition-shadow hover:shadow-xl hover:shadow-black/30"
    >
      {/* Author Info - Top */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.authorAvatar}
          alt={testimonial.authorName}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-white">
            {testimonial.authorName}
          </p>
          <p className="text-xs text-white/50">{testimonial.authorRole}</p>
        </div>
      </div>

      {/* Quote Text */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">
        {testimonial.quote}
      </p>

      {/* Company Logo - Bottom */}
      <div className="mt-6">{testimonial.companyLogo}</div>
    </motion.div>
  );
}

// Navigation Button Component
function NavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-transparent text-white/60 transition-all hover:border-white/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </button>
  );
}

// Main Component
export default function NvgtTestimonialSlider({
  badgeText = "Testimonials",
  headlineLine1 = "Helping brands achieve their",
  headlineLine2 = "goals and make a change.",
  testimonials = defaultTestimonials,
}: NvgtTestimonialSliderProps) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setScrollIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* Badge */}
            <Badge text={badgeText} />

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              <span className="block italic">{headlineLine1}</span>
              <span className="block italic">{headlineLine2}</span>
            </motion.h2>
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <NavButton
              direction="left"
              onClick={handlePrev}
            />
            <NavButton
              direction="right"
              onClick={handleNext}
            />
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-4"
            animate={{
              x: -scrollIndex * 320,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 25,
              mass: 0.8,
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
