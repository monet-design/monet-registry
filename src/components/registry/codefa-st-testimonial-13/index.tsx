"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

interface ColorScheme {
  background: string;
  text: string;
  border: string;
  cardBg: string;
  accentBlue: string;
  accentPink: string;
  accentOrange: string;
  accentGreen: string;
  starYellow: string;
}

const COLORS: Record<"light" | "dark", ColorScheme> = {
  light: {
    background: "#ffffff",
    text: "#1f1f1f",
    border: "#e5e5e5",
    cardBg: "#1f1f1f",
    accentBlue: "#BDE0FF",
    accentPink: "#f9dcf8",
    accentOrange: "#FFD3AC",
    accentGreen: "#93E2C8",
    starYellow: "#facc15",
  },
  dark: {
    background: "#0a0a0a",
    text: "#fafafa",
    border: "#262626",
    cardBg: "#171717",
    accentBlue: "#BDE0FF",
    accentPink: "#f9dcf8",
    accentOrange: "#FFD3AC",
    accentGreen: "#93E2C8",
    starYellow: "#facc15",
  },
};

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Play, Star, ArrowRight } from "lucide-react";
import { useState } from "react";

type AccentColor = "blue" | "pink" | "orange" | "green";

interface VideoTestimonial {
  quote: string;
  accentColor: AccentColor;
  aspectRatio: "9/16" | "16/9";
  colSpan?: string;
}

interface CodefaStTestimonial13Props {
  mode?: "light" | "dark";
  studentCount?: string;
  reviewCount?: string;
  reviewUrl?: string;
  testimonials?: VideoTestimonial[];
}

const defaultTestimonials: VideoTestimonial[] = [
  {
    quote: "I've never finished Udemy courses... Marc cuts the BS",
    accentColor: "blue",
    aspectRatio: "9/16",
  },
  {
    quote: "I built my second app in a week",
    accentColor: "pink",
    aspectRatio: "9/16",
  },
  {
    quote: "From knowing nothing to writing JavaScript",
    accentColor: "orange",
    aspectRatio: "9/16",
  },
  {
    quote: "I built my first SaaS in 2-3 weeks",
    accentColor: "green",
    aspectRatio: "9/16",
  },
  {
    quote:
      "After CodeFast, I learned that coding is much faster and easier than I thought",
    accentColor: "green",
    aspectRatio: "16/9",
    colSpan: "md:col-span-full lg:col-span-3",
  },
  {
    quote: "I thought coding was hard, CodeFast changed that.",
    accentColor: "pink",
    aspectRatio: "9/16",
  },
  {
    quote: "Exactly what you need to build a small SaaS",
    accentColor: "blue",
    aspectRatio: "9/16",
  },
  {
    quote: "I never found a course to become a startup founder",
    accentColor: "orange",
    aspectRatio: "9/16",
  },
  {
    quote: "CodeFast helped me build my micro-SaaS",
    accentColor: "pink",
    aspectRatio: "9/16",
  },
];

function getAccentBg(color: AccentColor, colors: ColorScheme) {
  switch (color) {
    case "blue":
      return colors.accentBlue;
    case "pink":
      return colors.accentPink;
    case "orange":
      return colors.accentOrange;
    case "green":
      return colors.accentGreen;
    default:
      return colors.accentBlue;
  }
}

function VideoCard({
  testimonial,
  index,
  colors,
}: {
  testimonial: VideoTestimonial;
  index: number;
  colors: ColorScheme;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isWide = testimonial.aspectRatio === "16/9";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative overflow-hidden border-r border-b ${testimonial.colSpan || ""}`}
      style={{ borderColor: colors.border }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Quote Label */}
      <div
        className={`font-semibold p-4 relative z-10 border-b ${isWide ? "md:text-lg md:py-6" : ""}`}
        style={{
          backgroundColor: getAccentBg(testimonial.accentColor, colors),
          borderColor: colors.border,
          marginBottom: isWide ? "-48px" : "-80px",
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </div>

      {/* Video Placeholder */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: testimonial.aspectRatio,
          backgroundColor: colors.cardBg,
          transform: "scale(1.04)",
        }}
      >
        {/* Gradient overlay for video placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
            className="w-14 h-14 bg-black/80 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
          >
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewCard({
  reviewCount,
  reviewUrl,
  colors,
}: {
  reviewCount: string;
  reviewUrl: string;
  colors: ColorScheme;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex justify-center items-center text-center font-medium py-8 max-lg:col-span-full"
      style={{ backgroundColor: colors.background }}
    >
      <a
        href={reviewUrl}
        className="group flex flex-col items-center gap-1.5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Star Rating */}
        <div className="flex gap-0" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotate: isHovered ? 72 : 0 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
            >
              <Star
                className="w-[18px] h-[18px] md:w-[18px] md:h-[18px]"
                style={{ color: colors.starYellow }}
                fill={colors.starYellow}
              />
            </motion.div>
          ))}
        </div>

        {/* Review Link */}
        <div
          className="flex items-center gap-1.5 transition-all duration-100"
          style={{
            textDecoration: isHovered ? "underline" : "none",
            color: colors.text,
          }}
        >
          See {reviewCount} reviews
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: isHovered ? 2 : 0 }}
          transition={{ duration: 0.1 }}
        >
          <ArrowRight className="w-4 h-4" style={{ color: colors.text }} />
        </motion.div>
      </a>
    </motion.div>
  );
}

export default function CodefaStTestimonial13({
  mode = "light",
  studentCount = "3,936",
  reviewCount = "100+",
  reviewUrl = "#",
  testimonials = defaultTestimonials,
}: CodefaStTestimonial13Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-extrabold py-12 px-8"
          style={{ color: colors.text }}
        >
          <span
            className="px-1"
            style={{ backgroundColor: colors.accentBlue }}
          >
            {studentCount}
          </span>{" "}
          <span
            className="px-1"
            style={{ backgroundColor: colors.accentPink }}
          >
            students
          </span>{" "}
          learned to{" "}
          <span
            className="px-1"
            style={{ backgroundColor: colors.accentOrange }}
          >
            code
          </span>
          ,{" "}
          <span
            className="px-1"
            style={{ backgroundColor: colors.accentGreen }}
          >
            fast
          </span>
        </motion.h3>

        {/* Video Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:border-t md:border-l overflow-hidden w-full max-w-full max-md:px-8 max-md:gap-8"
          style={{ borderColor: colors.border }}
        >
          {testimonials.map((testimonial, index) => (
            <VideoCard
              key={index}
              testimonial={testimonial}
              index={index}
              colors={colors}
            />
          ))}

          {/* Review Card */}
          <ReviewCard
            reviewCount={reviewCount}
            reviewUrl={reviewUrl}
            colors={colors}
          />
        </div>
      </div>
    </section>
  );
}
