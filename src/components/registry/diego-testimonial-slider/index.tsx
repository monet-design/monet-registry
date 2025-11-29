"use client";

import { motion } from "motion/react";

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  company: string;
}

interface DiegoTestimonialSliderProps {
  sectionLabel?: string;
  backgroundText?: string;
  testimonials?: Testimonial[];
}

// Default testimonials data matching the image
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I hate introducing Diego to my colleagues because he's my best kept secret, there's only so much to go around",
    authorName: "MARC BAGHADJIAN",
    company: "HYPERCARD",
  },
  {
    id: 2,
    quote:
      "Working with Diego was an absolutely transformative experience for our B2B website. From the very start, his professionalism and dedication were evident. He consistently went above and beyond our expectations, not just meeting but surpassing the project requirements.",
    authorName: "ISMAIL MOHAMMED",
    company: "SECURESLICE",
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

// Testimonial Card Component
function TestimonialCard({
  testimonial,
  rotation,
  index,
}: {
  testimonial: Testimonial;
  rotation: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ transform: `rotate(${rotation}deg)` }}
      className="w-full max-w-[280px] rounded-lg bg-white p-6 shadow-lg"
    >
      {/* Quote Icon */}
      <QuoteIcon className="mb-4 h-5 w-5 text-[#1a1a1a]" />

      {/* Quote Text */}
      <p className="mb-6 text-sm leading-relaxed text-[#4a4a4a]">
        {testimonial.quote}
        {testimonial.id === 1 && (
          <span className="ml-1" role="img" aria-label="waving hand">
            &#128075;
          </span>
        )}
      </p>

      {/* Author Info */}
      <div>
        <p className="text-xs font-bold tracking-wide text-[#1a1a1a]">
          {testimonial.authorName}
        </p>
        <p className="mt-0.5 text-xs tracking-wide text-[#9a9a9a]">
          {testimonial.company}
        </p>
      </div>
    </motion.div>
  );
}

// Main Component
export default function DiegoTestimonialSlider({
  sectionLabel = "TESTIMONIALS",
  backgroundText = "HAPPY",
  testimonials = defaultTestimonials,
}: DiegoTestimonialSliderProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#F3F8FE] py-16 sm:py-20 lg:py-24">
      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="select-none whitespace-nowrap text-[120px] font-black tracking-tight text-[#d8d8d8] sm:text-[180px] lg:text-[220px]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {backgroundText}
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-[#6a6a6a]">
            {sectionLabel}
          </span>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              rotation={index === 0 ? -3 : 3}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
