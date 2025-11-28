"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import "./font.css";

interface FontItem {
  id: string;
  name: string;
  fontFamily: string;
  fontWeight?: number;
  fontStyle?: "normal" | "italic";
  category: string;
}

interface FontPreviewCarouselProps {
  title?: string;
  subtitle?: string;
  sampleText?: string;
  fonts?: FontItem[];
  ctaText?: string;
  ctaHighlight?: string;
  ctaDescription?: string;
}

const defaultFonts: FontItem[] = [
  {
    id: "playfair-display",
    name: "Playfair Display",
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontStyle: "normal",
    category: "Serif",
  },
  {
    id: "dm-serif-italic",
    name: "DM Serif Display",
    fontFamily: "'DM Serif Display', serif",
    fontWeight: 400,
    fontStyle: "italic",
    category: "Serif",
  },
  {
    id: "source-code-pro",
    name: "Source Code Pro",
    fontFamily: "'Source Code Pro', monospace",
    fontWeight: 400,
    fontStyle: "normal",
    category: "Monospace",
  },
  {
    id: "urbanist",
    name: "Urbanist",
    fontFamily: "'Urbanist', sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    category: "Sans-serif",
  },
  {
    id: "lora",
    name: "Lora",
    fontFamily: "'Lora', serif",
    fontWeight: 400,
    fontStyle: "normal",
    category: "Serif",
  },
  {
    id: "roboto-slab",
    name: "Roboto Slab",
    fontFamily: "'Roboto Slab', serif",
    fontWeight: 500,
    fontStyle: "normal",
    category: "Slab Serif",
  },
  {
    id: "lora-italic",
    name: "Lora Italic",
    fontFamily: "'Lora', serif",
    fontWeight: 400,
    fontStyle: "italic",
    category: "Serif",
  },
  {
    id: "playfair-semibold",
    name: "Playfair Display",
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600,
    fontStyle: "normal",
    category: "Serif",
  },
];

const ITEMS_PER_PAGE = 4;

export default function FontPreviewCarousel({
  title = "FontFaceStyle",
  subtitle = "Explore Fonts",
  sampleText = "The quick brown fox jumps over a lazy dog.",
  fonts = defaultFonts,
  ctaText = "BOOKMARK FROM OUR",
  ctaHighlight = "POPULAR FONT LIST",
  ctaDescription = "The popular font list is live updated and use the datas from more than 200k visited websites.",
}: FontPreviewCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState<"popular" | "recent">("popular");

  const totalPages = Math.ceil(fonts.length / ITEMS_PER_PAGE);

  const handlePrevious = useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const visibleFonts = fonts.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const firstRow = visibleFonts.slice(0, Math.min(4, visibleFonts.length));
  const secondRow = fonts.slice(
    ((currentPage + 1) % totalPages) * ITEMS_PER_PAGE,
    ((currentPage + 1) % totalPages) * ITEMS_PER_PAGE + 3
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#F6F7FB] px-4 py-16 sm:px-6 lg:px-8">
      {/* Background geometric pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -left-20 -top-20 h-64 w-64 rotate-12 transform bg-gradient-to-br from-gray-200 to-transparent" />
        <div className="absolute -right-20 top-40 h-48 w-48 -rotate-12 transform bg-gradient-to-bl from-gray-200 to-transparent" />
        <div className="absolute bottom-20 left-1/4 h-32 w-32 rotate-45 transform bg-gradient-to-tr from-gray-200 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Navigation arrows - positioned outside */}
        <button
          onClick={handlePrevious}
          className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-400 shadow-sm backdrop-blur-sm transition-all hover:border-gray-300 hover:bg-white hover:text-gray-600 sm:-left-14"
          aria-label="Previous fonts"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-400 shadow-sm backdrop-blur-sm transition-all hover:border-gray-300 hover:bg-white hover:text-gray-600 sm:-right-14"
          aria-label="Next fonts"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Main card container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#CDF5EF]">
                <span className="text-xs font-bold text-teal-700">F</span>
              </div>
              <span className="text-sm font-medium text-gray-700">{title}</span>
            </div>

            <div className="flex items-center gap-4">
              <nav className="flex items-center gap-1 rounded-full bg-gray-100 p-1">
                <button
                  onClick={() => setActiveTab("popular")}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeTab === "popular"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  POPULAR FONTS
                </button>
                <button
                  onClick={() => setActiveTab("recent")}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeTab === "recent"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  RECENT
                </button>
              </nav>
              <div className="flex items-center gap-2">
                <button className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="p-6">
            {/* Info section */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  {subtitle}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Select a font to compare
                </p>
              </div>
            </div>

            {/* Font grid */}
            <div className="space-y-4">
              {/* First row */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`row1-${currentPage}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-4 md:grid-cols-4"
                >
                  {firstRow.map((font, index) => (
                    <FontCard
                      key={font.id}
                      font={font}
                      sampleText={sampleText}
                      index={index}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Second row */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`row2-${currentPage}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="grid grid-cols-2 gap-4 md:grid-cols-3"
                >
                  {secondRow.map((font, index) => (
                    <FontCard
                      key={`${font.id}-row2`}
                      font={font}
                      sampleText={sampleText}
                      index={index + 4}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Page indicator */}
            <div className="mt-6 flex justify-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentPage
                      ? "w-4 bg-teal-400"
                      : "w-1.5 bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm font-medium tracking-wide text-gray-500">
            {ctaText}{" "}
            <span className="text-teal-500">{ctaHighlight}</span>
          </p>
          <p className="mt-2 text-xs text-gray-400">{ctaDescription}</p>
        </motion.div>
      </div>
    </section>
  );
}

interface FontCardProps {
  font: FontItem;
  sampleText: string;
  index: number;
}

function FontCard({ font, sampleText, index }: FontCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative rounded-lg border border-gray-100 bg-white p-4 transition-all hover:border-gray-200 hover:shadow-md"
    >
      <div
        className="mb-4 min-h-[80px] text-lg leading-relaxed text-gray-800"
        style={{
          fontFamily: font.fontFamily,
          fontWeight: font.fontWeight,
          fontStyle: font.fontStyle,
        }}
      >
        {sampleText}
      </div>

      <div className="flex items-center justify-between border-t border-gray-50 pt-3">
        <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
          {font.category}
        </span>
        <div className="flex gap-1">
          <span className="rounded bg-[#CDF5EF] px-2 py-0.5 text-[10px] font-medium text-teal-700">
            {font.name}
          </span>
          {font.fontStyle === "italic" && (
            <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500">
              Italic
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
