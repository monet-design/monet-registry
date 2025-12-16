"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F0E8",
    cardBg: "#ffffff",
    text: "#1a1a1a",
    textMuted: "#6b7280",
    tagBg: "#f3f4f6",
  },
  dark: {
    background: "#0a0a0a",
    cardBg: "#1a1a1a",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
    tagBg: "#262626",
  },
} as const;

const IMAGES = {
  article1: {
    path: "/scraped/antler-co-2025-12-15/images/image-43.avif",
    alt: "TAM SAM SOM article thumbnail",
    prompt: "Abstract 3D wireframe visualization of a cylinder, dark background, geometric design, modern data visualization",
  },
  article2: {
    path: "/scraped/antler-co-2025-12-15/images/image-44.avif",
    alt: "Real-time data infra article thumbnail",
    prompt: "Abstract geometric shapes in teal and coral colors, modern design, Antler branding, data infrastructure concept",
  },
  article3: {
    path: "/scraped/antler-co-2025-12-15/images/image-45.avif",
    alt: "How we built Antler podcast thumbnail",
    prompt: "Bold typography reading HOW WE BUILT ANTLER in teal and coral colors, podcast cover design",
  },
} as const;

const ARTICLES = [
  {
    tag: "Insights",
    title: "TAM, SAM & SOM: How To Calculate The Size Of Your Market",
    description: "In the competitive world of startups, understanding your market isn't just important—it's everything. The gap...",
    image: IMAGES.article1,
  },
  {
    tag: "Insights",
    title: "Real-time data infra: the advent of the streamhouse",
    description: "A persistent grey space exists for today's systems, which struggle with the simplicity vs customizability tradeoff...",
    image: IMAGES.article2,
  },
  {
    tag: "Podcast",
    title: "How we built Antler",
    description: "Antler Founder and CEO Magnus Grimeland on the origins of Antler, the rise of global entrepreneurship, an...",
    image: IMAGES.article3,
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, ChevronRight as ArrowRight } from "lucide-react";

interface AntlerCoShowcase7Props {
  mode?: "light" | "dark";
}

export default function AntlerCoShowcase7({
  mode = "light",
}: AntlerCoShowcase7Props) {
  const colors = COLORS[mode];
  const [startIndex, setStartIndex] = useState(0);

  const visibleArticles = ARTICLES.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    if (startIndex + 3 < ARTICLES.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light mb-4"
              style={{ color: colors.text }}
            >
              <em className="italic">Get ahead</em> with Insights from Antler
            </h2>
            <p style={{ color: colors.textMuted }}>
              Catch-up with the latest news and analysis from Antler&apos;s portfolio
              and partners.
            </p>
          </div>
          <a
            href="#see-articles"
            className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-100 transition-colors w-fit"
            style={{ color: colors.text }}
          >
            See articles
          </a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleArticles.map((article, index) => (
            <motion.a
              key={index}
              href="#article"
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="rounded-xl overflow-hidden mb-4"
                style={{ backgroundColor: colors.cardBg }}
              >
                <img
                  src={article.image.path}
                  alt={article.image.alt}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                style={{ backgroundColor: colors.tagBg, color: colors.text }}
              >
                {article.tag}
              </span>
              <h3
                className="text-lg md:text-xl font-medium mb-2 group-hover:underline"
                style={{ color: colors.text }}
              >
                {article.title}
              </h3>
              <p
                className="text-sm mb-3"
                style={{ color: colors.textMuted }}
              >
                {article.description}
              </p>
              <span
                className="inline-flex items-center gap-1 text-sm font-medium"
                style={{ color: colors.text }}
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: Math.ceil(ARTICLES.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(startIndex / 3) === index
                    ? "bg-gray-900"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={startIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous articles"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={startIndex + 3 >= ARTICLES.length}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next articles"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
