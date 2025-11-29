"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorCompany: string;
}

interface ParableTestimonialSliderProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Prisms would not be where it is without Anne. I chose to work with Anne because of her deep domain expertise in both education and consumer tech. She has turned out to be even more than that. Anne is my first call, on topics ranging from executive hiring to strategy to fundraising.",
    authorName: "ANURUPA GANGULY",
    authorCompany: "PRISMS",
  },
  {
    id: 2,
    quote:
      "Working with Anne has been transformative for our company. Her strategic insights and industry knowledge have helped us navigate complex challenges and accelerate our growth in ways we never thought possible.",
    authorName: "SARAH CHEN",
    authorCompany: "EDUTECH LABS",
  },
  {
    id: 3,
    quote:
      "Anne's guidance has been invaluable. Her ability to connect the dots between education, technology, and business strategy is unmatched. She has become an essential partner in our journey.",
    authorName: "MICHAEL ROSS",
    authorCompany: "LEARNING CO",
  },
];

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 45C8 35 15 28 25 28C25 28 22 20 30 12C30 12 18 15 12 25C6 35 8 45 8 45Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="42" r="12" />
      <path
        d="M48 45C48 35 55 28 65 28C65 28 62 20 70 12C70 12 58 15 52 25C46 35 48 45 48 45Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="42" r="12" />
    </svg>
  );
}

export default function ParableTestimonialSlider({
  testimonials = defaultTestimonials,
}: ParableTestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-[#F6F4FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <QuoteIcon className="h-12 w-20 text-[#7589D5]/60" />
          </motion.div>

          <div className="mt-8 min-h-[180px] sm:min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <p className="text-sm leading-relaxed text-[#2D3047] sm:text-base">
                  {currentTestimonial.quote}
                </p>

                <p className="mt-6 text-xs tracking-[0.15em] text-[#8E8EA0]">
                  {currentTestimonial.authorName}, {currentTestimonial.authorCompany}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="flex h-9 w-9 items-center justify-center bg-[#7589D5] text-white transition-all hover:bg-[#6478C4]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-9 w-9 items-center justify-center bg-[#7589D5] text-white transition-all hover:bg-[#6478C4]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
