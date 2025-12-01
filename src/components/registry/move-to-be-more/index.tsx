"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./font.css";

// CUSTOMIZATION
const CUSTOMIZATION = {};

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
}

interface MoveToBeMoreProps {
  mode?: "light" | "dark";
  headline?: string;
  highlightedText?: string;
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// Default testimonials data matching the image
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      '"My journey with Sherell is something I would hold near my heart forever."',
    authorName: "Mine du Toit",
    authorRole: "Chiropractor",
    authorAvatar: "https://picsum.photos/seed/mine-du-toit/200/200",
  },
  {
    id: 2,
    quote:
      '"Coaching with Sherell created fundamental shifts for me personally and professionally."',
    authorName: "Kgabo Hlaisi",
    authorRole: "HR Manager - SEF",
    authorAvatar: "https://picsum.photos/seed/kgabo-hlaisi-waterfall/200/200",
  },
  {
    id: 3,
    quote:
      'She has helped me develop as an executive over a group of companies..."',
    authorName: "Tasha Bezuidenhout",
    authorRole: "Head of Legal (LLB)",
    authorAvatar: "https://picsum.photos/seed/tasha-bezuidenhout/200/200",
  },
  {
    id: 4,
    quote:
      '"Working with Sherell transformed my approach to leadership and personal growth."',
    authorName: "Sarah Johnson",
    authorRole: "CEO - Tech Startup",
    authorAvatar: "https://picsum.photos/seed/sarah-johnson/200/200",
  },
  {
    id: 5,
    quote:
      '"The insights I gained have been invaluable for both my career and personal life."',
    authorName: "Michael Chen",
    authorRole: "Senior Director",
    authorAvatar: "https://picsum.photos/seed/michael-chen/200/200",
  },
  {
    id: 6,
    quote:
      '"A truly transformative experience that helped me unlock my full potential."',
    authorName: "Emma Williams",
    authorRole: "Business Consultant",
    authorAvatar: "https://picsum.photos/seed/emma-williams/200/200",
  },
];

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center"
    >
      {/* Quote Text */}
      <p
        className="mb-6 text-sm leading-relaxed text-[#4A4A4A] sm:text-base"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {testimonial.quote}
      </p>

      {/* Profile Image */}
      <div className="mb-3 h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24">
        <img
          src={testimonial.authorAvatar}
          alt={testimonial.authorName}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Author Name */}
      <p
        className="text-sm font-semibold text-[#3D3D3D] sm:text-base"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {testimonial.authorName}
      </p>

      {/* Author Role */}
      <p
        className="text-xs text-[#8A8A8A] sm:text-sm"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {testimonial.authorRole}
      </p>
    </motion.div>
  );
}

// Navigation Arrow Button
function NavButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center text-[#6B6B6B] transition-colors hover:text-[#3D3D3D]"
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-6 w-6" />
      ) : (
        <ChevronRight className="h-6 w-6" />
      )}
    </button>
  );
}

// Pagination Dots
function PaginationDots({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) {
  // Calculate which page we're on (3 testimonials per page)
  const totalPages = Math.ceil(total / 3);
  const currentPage = Math.floor(current / 3);

  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index * 3)}
          className={`h-2 w-2 rounded-full transition-colors ${
            index === currentPage ? "bg-[#4A4A4A]" : "bg-[#C4C4C4]"
          }`}
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>
  );
}

// Main Component
export default function MoveToBeMore({
  mode = "light",
  headline = "I help people like you realise their",
  highlightedText = "full potential",
  testimonials = defaultTestimonials,
}: MoveToBeMoreProps) {
  const [startIndex, setStartIndex] = useState(0);

  // Get visible testimonials (3 at a time)
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  // Pad with empty slots if needed for consistent layout
  while (visibleTestimonials.length < 3) {
    visibleTestimonials.push(testimonials[visibleTestimonials.length % testimonials.length]);
  }

  const handlePrev = () => {
    setStartIndex((prev) => {
      const newIndex = prev - 3;
      return newIndex < 0 ? Math.max(0, testimonials.length - 3) : newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => {
      const newIndex = prev + 3;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  const handleDotClick = (index: number) => {
    setStartIndex(index);
  };

  return (
    <section className="relative w-full bg-[#FDF6EC] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-2xl text-[#3D3D3D] sm:mb-16 sm:text-3xl lg:text-4xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="italic">{headline} </span>
          <span className="font-bold italic">{highlightedText}</span>
          <span className="italic">...</span>
        </motion.h2>

        {/* Testimonials Grid with Navigation */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <div className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 sm:-left-4 lg:-left-12">
            <NavButton direction="left" onClick={handlePrev} />
          </div>

          {/* Testimonials */}
          <div className="mx-8 grid w-full grid-cols-1 gap-8 sm:mx-12 md:grid-cols-3 lg:mx-16">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${startIndex}-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <div className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 sm:-right-4 lg:-right-12">
            <NavButton direction="right" onClick={handleNext} />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 sm:mt-12">
          <PaginationDots
            total={testimonials.length}
            current={startIndex}
            onSelect={handleDotClick}
          />
        </div>
      </div>
    </section>
  );
}
