"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./font.css";

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorAvatar: string;
  productThumbnail: string;
  companyLogo?: React.ReactNode;
}

interface JordsAndCoTestimonialSliderProps {
  tagline?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  testimonials?: Testimonial[];
}

// Default company logo component (Marco style)
function MarcoLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex h-6 w-6 items-center justify-center rounded bg-[#5046E5]">
        <span className="text-xs font-bold text-white">M</span>
      </div>
      <span className="text-sm font-semibold text-[#5046E5]">Marco</span>
    </div>
  );
}

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      '"We launched a waitlist and gained thousands of signups with zero marketing spend"',
    authorName: "Isaac Hinman",
    authorRole: "FOUNDER",
    authorCompany: "MARCO",
    authorAvatar: "https://picsum.photos/seed/isaac-hinman/100/100",
    productThumbnail: "https://picsum.photos/seed/marco-app/200/200",
    companyLogo: <MarcoLogo />,
  },
  {
    id: 2,
    quote:
      '"The product practically sells itself. Our conversion rates doubled within the first month"',
    authorName: "Sarah Chen",
    authorRole: "CEO",
    authorCompany: "FLOWSTACK",
    authorAvatar: "https://picsum.photos/seed/sarah-chen-2/100/100",
    productThumbnail: "https://picsum.photos/seed/flowstack-app/200/200",
  },
  {
    id: 3,
    quote:
      '"Building in public has never been easier. The community response has been incredible"',
    authorName: "Alex Rivera",
    authorRole: "FOUNDER",
    authorCompany: "BUILDSPACE",
    authorAvatar: "https://picsum.photos/seed/alex-rivera/100/100",
    productThumbnail: "https://picsum.photos/seed/buildspace-app/200/200",
  },
];

// Interlocking rings icon component
function InterlockingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </svg>
  );
}

// Pagination Dots Component
function PaginationDots({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === current
              ? "w-6 bg-[#5046E5]"
              : "w-1.5 bg-[#C8C8D0] hover:bg-[#9B9BA4]"
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-2xl"
    >
      {/* Main card */}
      <div className="overflow-hidden rounded-2xl border border-[#E2E1E8] bg-white shadow-lg shadow-black/5">
        {/* Top section with thumbnail and quote */}
        <div className="flex">
          {/* Product Thumbnail */}
          <div className="flex-shrink-0 p-4">
            <div className="h-28 w-28 overflow-hidden rounded-xl bg-[#1a1a2e]">
              <img
                src={testimonial.productThumbnail}
                alt="Product"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="flex flex-1 items-center px-4 py-6 pr-8">
            <p className="text-lg font-medium leading-relaxed text-[#3D3D4D]">
              {testimonial.quote}
            </p>
          </div>
        </div>

        {/* Bottom section with author info and company logo */}
        <div className="flex items-center justify-between border-t border-[#EFEEF4] px-4 py-3">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <img
              src={testimonial.authorAvatar}
              alt={testimonial.authorName}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-[#3D3D4D]">
                {testimonial.authorName}
              </p>
              <p className="text-xs tracking-wide text-[#9B9BA4]">
                {testimonial.authorRole} - {testimonial.authorCompany}
              </p>
            </div>
          </div>

          {/* Company Logo */}
          {testimonial.companyLogo ? (
            testimonial.companyLogo
          ) : (
            <div className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#5046E5]">
                <span className="text-xs font-bold text-white">
                  {testimonial.authorCompany.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-semibold text-[#5046E5]">
                {testimonial.authorCompany}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Decorative shadow card behind */}
      <div
        className="absolute -right-4 top-4 -z-10 h-full w-full rounded-2xl border border-[#E2E1E8] bg-[#F5F5F8]"
        aria-hidden="true"
      />
    </motion.div>
  );
}

// Main Component
export default function JordsAndCoTestimonialSlider({
  tagline = "REAL WORDS. REAL RESULTS.",
  headlineLine1 = "Proof from the people",
  headlineLine2 = "building real things",
  testimonials = defaultTestimonials,
}: JordsAndCoTestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#EFEEF4] py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <InterlockingIcon className="h-8 w-8 text-[#9B9BA4]" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-xs font-medium tracking-[0.2em] text-[#9B9BA4]"
          >
            {tagline}
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-normal tracking-tight text-[#3D3D4D] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <span className="block italic">{headlineLine1}</span>
            <span className="block italic">{headlineLine2}</span>
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <div
          className="mb-10 flex justify-center px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={testimonials[currentIndex].id}
              testimonial={testimonials[currentIndex]}
            />
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <PaginationDots
            total={testimonials.length}
            current={currentIndex}
            onSelect={handleSelect}
          />
        </motion.div>
      </div>
    </section>
  );
}
