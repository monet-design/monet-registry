"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import "./font.css";

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
}

interface ArkiveTestimonialSliderProps {
  badgeText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  headlineLine3?: string;
  subheadline?: string;
  testimonials?: Testimonial[];
}

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Having all my documents readily available through Arkive saves significant time in my workflow. I'm looking forward to seeing the impact it will have on my clients.",
    authorName: "Jason Mizen",
    authorRole: "Financial Advisor",
    authorAvatar: "https://picsum.photos/seed/jason-mizen/100/100",
  },
  {
    id: 2,
    quote:
      "Arkive has transformed how I manage my important documents. The instant access feature is a game-changer for my daily operations.",
    authorName: "Sarah Chen",
    authorRole: "Business Consultant",
    authorAvatar: "https://picsum.photos/seed/sarah-chen/100/100",
  },
  {
    id: 3,
    quote:
      "I never thought document management could be this seamless. Arkive makes everything accessible within seconds.",
    authorName: "Michael Torres",
    authorRole: "Legal Professional",
    authorAvatar: "https://picsum.photos/seed/michael-torres/100/100",
  },
];

// Quote Icon Component
function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

// Badge Component
function Badge({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex rounded-full border border-white/20 px-4 py-1.5"
    >
      <span className="text-xs font-medium tracking-wide text-white/80">
        {text}
      </span>
    </motion.div>
  );
}

// Testimonial Card Component
function TestimonialCard({
  testimonial,
  onNext,
}: {
  testimonial: Testimonial;
  onNext: () => void;
}) {
  return (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="relative flex h-full flex-col rounded-2xl bg-[#5DC34F] p-6 shadow-xl"
    >
      {/* Quote Icon */}
      <QuoteIcon className="mb-4 h-6 w-6 text-[#023632]/70" />

      {/* Quote Text */}
      <p className="flex-1 text-sm leading-relaxed text-[#023632]/90">
        {testimonial.quote}
      </p>

      {/* Close Quote Icon */}
      <div className="mt-4 flex items-end justify-between">
        <div />
        <div className="flex flex-col items-end gap-3">
          <span className="rotate-180 text-lg font-bold text-[#023632]/50">
            ,,
          </span>
          {/* Navigation Button */}
          <button
            onClick={onNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#023632] text-white transition-transform hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Author Info */}
      <div className="mt-4 flex items-center gap-3 border-t border-[#023632]/10 pt-4">
        <img
          src={testimonial.authorAvatar}
          alt={testimonial.authorName}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-[#023632]">
            {testimonial.authorName}
          </p>
          <p className="text-xs text-[#023632]/70">{testimonial.authorRole}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function ArkiveTestimonialSlider({
  badgeText = "Testimonials",
  headlineLine1 = "Real people.",
  headlineLine2 = "Real convenience.",
  headlineLine3 = "Real feedback.",
  subheadline = "See what early users are saying",
  testimonials = defaultTestimonials,
}: ArkiveTestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#023632] py-16 sm:py-20 lg:py-24">
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#034d3a]/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Headline */}
          <div className="flex flex-col justify-center">
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
              <span className="block italic">{headlineLine3}</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-sm text-white/60"
            >
              {subheadline}
            </motion.p>
          </div>

          {/* Right Column - Testimonial Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <AnimatePresence mode="wait">
                <TestimonialCard
                  testimonial={testimonials[currentIndex]}
                  onNext={handleNext}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
