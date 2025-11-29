"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown, Star } from "lucide-react";
import "./font.css";

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  rating: number;
}

interface MelbourneWebStudioProps {
  badgeText?: string;
  headline?: string;
  subheadline?: string;
  googleRating?: string;
  googleRatingSubtext?: string;
  testimonials?: Testimonial[];
}

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I have had the pleasure of working closely with Jolean for the past three years, and he has been nothing short of instrumental to the success of our business. His expertise and dedication have been vital in allowing my eCommerce business to scale into new territories. Jolean's deep understanding of the digital landscape and commitment to excellence have consistently delivered outstanding results. I highly recommend Melbourne Web Studio for anyone looking to grow and optimize their online presence. Jolean's contributions have truly made a difference in the growth and efficiency of our operations.",
    authorName: "Raph M.",
    authorRole: "Manager - Elusive Euro",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Melbourne Web Studio transformed our online presence completely. Their attention to detail and understanding of our brand was exceptional. The team delivered a website that not only looks stunning but also performs brilliantly in terms of user engagement and conversions.",
    authorName: "Sarah K.",
    authorRole: "CEO - StyleHub",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Working with Jolean and his team has been a game-changer for our business. They understood our vision from day one and translated it into a beautiful, functional website that our customers love.",
    authorName: "Michael T.",
    authorRole: "Founder - TechStart",
    rating: 5,
  },
];

// Google Logo Icon Component
function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Star Rating Component
function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={size}
          className={
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-600 text-slate-600"
          }
        />
      ))}
    </div>
  );
}

// Badge Component
function Badge({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex rounded-full border border-slate-600/60 bg-slate-800/40 px-4 py-1.5"
    >
      <span className="text-xs font-medium tracking-wide text-slate-300">
        {text}
      </span>
    </motion.div>
  );
}

// Google Rating Badge Component
function GoogleRatingBadge({
  rating,
  subtext,
}: {
  rating: string;
  subtext: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex items-center gap-3"
    >
      <GoogleIcon className="h-7 w-7" />
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-lg font-semibold text-white">{rating}</span>
          <Star size={16} className="fill-amber-400 text-amber-400" />
        </div>
        <span className="text-xs text-slate-400">{subtext}</span>
      </div>
    </motion.div>
  );
}

// Testimonial Card Component
function TestimonialCard({
  testimonial,
  onPrev,
  onNext,
}: {
  testimonial: Testimonial;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="relative flex h-full flex-col rounded-2xl bg-[#2A2A32] p-6 shadow-xl"
    >
      {/* Quote Text */}
      <p className="flex-1 text-[13px] leading-relaxed text-slate-300/90">
        {testimonial.quote}
      </p>

      {/* Author Info & Navigation */}
      <div className="mt-6 flex items-end justify-between">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <GoogleIcon className="h-6 w-6" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-white">
              {testimonial.authorName}
            </p>
            <p className="text-xs text-slate-400">{testimonial.authorRole}</p>
          </div>
          <StarRating rating={testimonial.rating} size={12} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={onPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/90 text-slate-900 transition-all hover:bg-amber-400"
            aria-label="Previous testimonial"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
          <button
            onClick={onNext}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/90 text-slate-900 transition-all hover:bg-amber-400"
            aria-label="Next testimonial"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function MelbourneWebStudio({
  badgeText = "Testimonials",
  headline = "Happy Customers",
  subheadline = "Get insights from our clients on how we've helped them achieve their business\ngoals through exceptional web design.",
  googleRating = "5.00",
  googleRatingSubtext = "Rated 5 stars on Google",
  testimonials = defaultTestimonials,
}: MelbourneWebStudioProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#1E1E26] py-16 sm:py-20 lg:py-24">
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-slate-800/20 blur-3xl" />
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
              className="mt-6 text-4xl tracking-tight text-white sm:text-5xl lg:text-5xl"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              {headline}
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 whitespace-pre-line text-sm leading-relaxed text-slate-400"
            >
              {subheadline}
            </motion.p>

            {/* Google Rating */}
            <div className="mt-8">
              <GoogleRatingBadge rating={googleRating} subtext={googleRatingSubtext} />
            </div>
          </div>

          {/* Right Column - Testimonial Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                <TestimonialCard
                  testimonial={testimonials[currentIndex]}
                  onPrev={handlePrev}
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
