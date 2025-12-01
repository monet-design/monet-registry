"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FAFAFA",
    starFill: "#F8EE76",
    quoteAccent: "#8B5CF6",
    text: "#374151",
    username: "#9CA3AF",
    button: "#2F2D45",
    buttonText: "#ffffff",
  },
  dark: {
    background: "#1a1a1a",
    starFill: "#F8EE76",
    quoteAccent: "#A78BFA",
    text: "#e0e0e0",
    username: "#9CA3AF",
    button: "#4F4D65",
    buttonText: "#ffffff",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { Star } from "lucide-react";
import { motion } from "motion/react";

interface PrintForFigmaTestimonialProps {
  mode?: "light" | "dark";
  rating?: number;
  quote?: string;
  highlightedText?: string;
  username?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function PrintForFigmaTestimonial({
  mode = "light",
  rating = 5,
  quote = "An absolute {highlight} if you want to design for print in Figma.",
  highlightedText = "must-have",
  username = "@josephg",
  buttonText = "View All Reviews",
  onButtonClick,
}: PrintForFigmaTestimonialProps) {
  const colors = COLORS[mode];

  const renderQuote = () => {
    const parts = quote.split("{highlight}");
    if (parts.length === 1) {
      return <span>{quote}</span>;
    }
    return (
      <>
        {parts[0]}
        <span className="font-semibold">{highlightedText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex w-full max-w-2xl flex-col items-center px-6 py-12"
      style={{ backgroundColor: colors.background }}
    >
      {/* Star Rating */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mb-6 flex items-center gap-0.5"
      >
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4"
            fill={colors.starFill}
            stroke={colors.starFill}
            strokeWidth={1}
          />
        ))}
      </motion.div>

      {/* Quote with Quote Marks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative mb-4 flex items-start justify-center"
      >
        {/* Left Quote Mark */}
        <span
          className="mr-4 select-none text-2xl font-bold leading-none"
          style={{ color: colors.quoteAccent }}
        >
          &ldquo;
        </span>

        {/* Quote Text */}
        <p
          className="text-center text-lg font-normal leading-relaxed"
          style={{ color: colors.text }}
        >
          {renderQuote()}
        </p>

        {/* Right Quote Mark */}
        <span
          className="ml-4 select-none text-2xl font-bold leading-none"
          style={{ color: colors.quoteAccent }}
        >
          &rdquo;
        </span>
      </motion.div>

      {/* Username */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mb-6 text-sm"
        style={{ color: colors.username }}
      >
        {username}
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onButtonClick}
        className="rounded-full px-6 py-2.5 text-sm font-medium transition-colors hover:opacity-90"
        style={{ backgroundColor: colors.button, color: colors.buttonText }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}
