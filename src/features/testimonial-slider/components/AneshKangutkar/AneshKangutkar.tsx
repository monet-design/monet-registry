"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorAvatar: string;
}

interface Company {
  id: number;
  name: string;
}

interface AneshKangutkarTestimonialProps {
  headerLine1?: string;
  headerLine2?: string;
  companies?: Company[];
  testimonials?: Testimonial[];
}

// Default companies data
const defaultCompanies: Company[] = [
  { id: 1, name: "COMPLAN" },
  { id: 2, name: "88 LABS" },
  { id: 3, name: "RAKESH P" },
];

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "A BIG THANK YOU TO ANESH FOR EVERYTHING HE'S DONE ON THE REVAMP PROJECT. HIS DEPTH OF EXPERTISE, QUICK THINKING, & COLLABORATIVE ATTITUDE ARE TRULY REMARKABLE & SOMETHING TO BE REMEMBERED. WISHING HIM NOTHING BUT SUCCESS IN WHATEVER COMES NEXT.",
    authorName: "AMEET J",
    authorRole: "BRAND MANAGER",
    authorCompany: "COMPLAN",
    authorAvatar: "https://picsum.photos/seed/ameet-j/200/200",
  },
  {
    id: 2,
    quote:
      "ANESH HAS BEEN AN INVALUABLE PARTNER IN OUR DIGITAL TRANSFORMATION JOURNEY. HIS ATTENTION TO DETAIL AND CREATIVE SOLUTIONS HAVE ELEVATED OUR BRAND PRESENCE SIGNIFICANTLY.",
    authorName: "SARAH K",
    authorRole: "CREATIVE DIRECTOR",
    authorCompany: "88 LABS",
    authorAvatar: "https://picsum.photos/seed/sarah-k/200/200",
  },
  {
    id: 3,
    quote:
      "WORKING WITH ANESH WAS A GAME-CHANGER FOR OUR PROJECT. HIS PROFESSIONALISM AND DESIGN EXPERTISE MADE THE ENTIRE PROCESS SEAMLESS AND ENJOYABLE.",
    authorName: "RAKESH P",
    authorRole: "FOUNDER",
    authorCompany: "RAKESH P VENTURES",
    authorAvatar: "https://picsum.photos/seed/rakesh-p/200/200",
  },
];

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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C45A3A]/60 bg-transparent text-[#C45A3A]/60 transition-all hover:border-[#C45A3A] hover:text-[#C45A3A] disabled:cursor-not-allowed disabled:opacity-30"
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-5 w-5" />
      ) : (
        <ChevronRight className="h-5 w-5" />
      )}
    </button>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col"
    >
      {/* Author Info with Avatar */}
      <div className="mb-6 flex items-start gap-4">
        <div className="flex flex-col items-end">
          <span className="text-xs font-semibold tracking-wider text-[#C45A3A]">
            {testimonial.authorName}
          </span>
          <span className="text-[10px] tracking-wider text-[#C45A3A]/80">
            {testimonial.authorRole}, {testimonial.authorCompany}
          </span>
        </div>
        <div className="relative h-20 w-20 overflow-hidden">
          <img
            src={testimonial.authorAvatar}
            alt={testimonial.authorName}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Quote Text */}
      <p className="text-[11px] font-medium leading-relaxed tracking-wide text-[#3D3B37]">
        {testimonial.quote}
      </p>
    </motion.div>
  );
}

// Main Component
export default function AneshKangutkarTestimonial({
  headerLine1 = "THAT'S WHAT",
  headerLine2 = "THEY SAID",
  companies = defaultCompanies,
  testimonials = defaultTestimonials,
}: AneshKangutkarTestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Header & Companies */}
          <div className="flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-normal tracking-wider text-[#C45A3A]">
                {headerLine1}
              </span>
              <h2 className="mt-1 text-4xl font-bold italic tracking-tight text-[#C45A3A] sm:text-5xl lg:text-6xl">
                {headerLine2}
              </h2>
            </motion.div>

            {/* Companies List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 flex flex-col gap-1"
            >
              {companies.map((company) => (
                <span
                  key={company.id}
                  className="text-sm font-semibold tracking-wider text-[#C45A3A]"
                >
                  {company.name}
                </span>
              ))}
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center gap-2"
            >
              <NavButton direction="left" onClick={handlePrev} />
              <NavButton direction="right" onClick={handleNext} />
            </motion.div>
          </div>

          {/* Right Column - Testimonial Card */}
          <div className="flex items-start justify-end pt-4">
            <div className="w-full max-w-sm">
              <AnimatePresence mode="wait">
                <TestimonialCard
                  key={testimonials[currentIndex].id}
                  testimonial={testimonials[currentIndex]}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
