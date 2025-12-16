"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F0E8",
    cardBg: "#1E3A3A",
    text: "#1a1a1a",
    textLight: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.7)",
  },
  dark: {
    background: "#0a0a0a",
    cardBg: "#1E3A3A",
    text: "#f5f5f5",
    textLight: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.7)",
  },
} as const;

const IMAGES = {
  founderStory: {
    path: "/scraped/antler-co-2025-12-15/images/image-33.avif",
    alt: "Sweatpals team photo",
    prompt: "Large group photo of startup team members sitting on a leather sofa, casual professional attire, dogs in the frame, warm lighting",
  },
} as const;

const STORIES = [
  {
    label: "FOUNDER STORY",
    company: "SWEATPALS",
    quote: "I realised there was no platform built for this purpose, and I couldn't stop thinking about why this doesn't exist...",
    image: IMAGES.founderStory,
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface AntlerCoShowcase5Props {
  mode?: "light" | "dark";
}

export default function AntlerCoShowcase5({
  mode = "light",
}: AntlerCoShowcase5Props) {
  const colors = COLORS[mode];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % STORIES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
  };

  const currentStory = STORIES[currentIndex];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light"
            style={{ color: colors.text }}
          >
            Read Antler
            <br />
            <em className="italic">founder stories</em>
          </h2>
        </motion.div>

        {/* Carousel Card */}
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          style={{ backgroundColor: colors.cardBg }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 lg:grid-cols-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="p-6 md:p-8">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={currentStory.image.path}
                    alt={currentStory.image.alt}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span
                  className="text-xs font-medium tracking-wider mb-4"
                  style={{ color: colors.textMuted }}
                >
                  {currentStory.label}
                </span>
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                  style={{ color: colors.textLight }}
                >
                  {currentStory.company}
                </h3>
                <p
                  className="text-base md:text-lg italic mb-6"
                  style={{ color: colors.textMuted }}
                >
                  &ldquo;{currentStory.quote}&rdquo;
                </p>
                <a
                  href="#read-story"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors w-fit"
                >
                  Read story
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {STORIES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-gray-900"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
