"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "./font.css";

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  rating: number;
}

interface WegemsTestimonialSliderProps {
  mode?: "preview" | "live";
  headline?: string;
  subheadline?: string;
  testimonials?: Testimonial[];
}

// [CUSTOMIZATION]
export const CUSTOMIZATION = {};
// [/CUSTOMIZATION]

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      '"Wegems built our website perfectly on webflow. He took our designs and implemented the functionality in a smooth and streamlined way. They were very easy to work with and responsive throughout the entire project. We would definitely work with them again in the future!"',
    authorName: "Danielle Joseph",
    authorRole: "Founder, Function Creative Co.",
    authorAvatar: "https://picsum.photos/seed/danielle-joseph/100/100",
    rating: 5,
  },
  {
    id: 2,
    quote:
      '"Wegems has been great at effectively and quickly developing high quality Webflow sites."',
    authorName: "Jacob Klug",
    authorRole: "CEO, Creme Digital",
    authorAvatar: "https://picsum.photos/seed/jacob-klug/100/100",
    rating: 5,
  },
  {
    id: 3,
    quote:
      '"Special shoutout to Wegems for helping migrate my site to Webflow. Highly recommended to check their services."',
    authorName: "Muhammad Rahat",
    authorRole: "Founder, Roast my app",
    authorAvatar: "https://picsum.photos/seed/muhammad-rahat/100/100",
    rating: 5,
  },
  {
    id: 4,
    quote:
      '"Outstanding work on our e-commerce platform. The attention to detail and responsive design exceeded our expectations."',
    authorName: "Emily Watson",
    authorRole: "Marketing Director, StyleHub",
    authorAvatar: "https://picsum.photos/seed/emily-watson/100/100",
    rating: 5,
  },
  {
    id: 5,
    quote:
      '"Professional, efficient, and creative. Wegems transformed our vision into a stunning website that our customers love."',
    authorName: "Alex Chen",
    authorRole: "Co-founder, TechStart",
    authorAvatar: "https://picsum.photos/seed/alex-chen/100/100",
    rating: 5,
  },
];

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating
              ? "fill-[#C5D86D] text-[#C5D86D]"
              : "fill-transparent text-white/30"
          }`}
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
      transition={{ duration: 0.5 }}
      className="flex h-full min-w-[320px] max-w-[340px] flex-col rounded-2xl bg-[#1A4D40]/60 p-6 backdrop-blur-sm"
    >
      {/* Quote Text */}
      <p className="flex-1 text-[15px] leading-relaxed text-white/90">
        {testimonial.quote}
      </p>

      {/* Author Info */}
      <div className="mt-6 flex items-center gap-3">
        <img
          src={testimonial.authorAvatar}
          alt={testimonial.authorName}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#C5D86D]">
            {testimonial.authorName}
          </p>
          <p className="text-xs text-white/60">{testimonial.authorRole}</p>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
    </motion.div>
  );
}

// Main Component
export default function WegemsTestimonialSlider({
  mode = "live",
  headline = "What our clients are saying",
  subheadline = "Hear directly from the people who trust us with their digital presence. Our clients' success stories speak volumes.",
  testimonials = defaultTestimonials,
}: WegemsTestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 340;
  const gap = 24;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#022D23] py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-normal tracking-tight text-white sm:text-4xl"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60"
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `calc(50% - ${cardWidth / 2}px - ${currentIndex * (cardWidth + gap)}px)`,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 28,
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
