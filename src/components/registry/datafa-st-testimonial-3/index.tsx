"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    starColor: "#FBBF24",
    highlightBg: "rgba(224, 123, 57, 0.2)",
  },
  dark: {
    background: "#1A1A1A",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    starColor: "#FBBF24",
    highlightBg: "rgba(224, 123, 57, 0.2)",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Star } from "lucide-react";

interface Testimonial {
  rating: number;
  quote: string;
  highlight?: string;
  author: {
    name: string;
    website: string;
    avatar?: string;
  };
}

interface DatafaStTestimonial3Props {
  mode?: "light" | "dark";
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    rating: 5,
    quote: "DataFast > Google Analytics for simplicity and actual useful metrics. The Revenue per Visitor metric is exactly what founders need.",
    highlight: "DataFast > Google Analytics for simplicity and actual useful metrics.",
    author: {
      name: "Wozu",
      website: "gfluo.com",
    },
  },
  {
    rating: 5,
    quote: "Been using DataFast for over a month now. It's amazing! I've been able to quadruple my conversion rate and increase revenue!",
    highlight: "I've been able to quadruple my conversion rate",
    author: {
      name: "Siya",
      website: "genppt.com",
    },
  },
  {
    rating: 5,
    quote: "There's no need for PostHog anymore given how good this is and how little effort it is to attribute revenue to marketing efforts.",
    highlight: "no need for PostHog anymore",
    author: {
      name: "Kai",
      website: "blink.new",
    },
  },
];

export default function DatafaStTestimonial3({
  mode = "dark",
  testimonials = defaultTestimonials,
}: DatafaStTestimonial3Props) {
  const colors = COLORS[mode];

  const renderQuote = (quote: string, highlight?: string) => {
    if (!highlight) return quote;

    const parts = quote.split(highlight);
    return (
      <>
        {parts[0]}
        <span
          className="rounded px-1"
          style={{ backgroundColor: colors.highlightBg }}
        >
          {highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      className="w-full py-12"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5"
                    fill={colors.starColor}
                    color={colors.starColor}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="mb-6 text-base leading-relaxed"
                style={{ color: colors.textPrimary }}
              >
                {renderQuote(testimonial.quote, testimonial.highlight)}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
                  <div className="h-full w-full" />
                </div>
                <div className="text-left">
                  <div className="font-semibold" style={{ color: colors.textPrimary }}>
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm" style={{ color: colors.textSecondary }}>
                    {testimonial.author.website}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
