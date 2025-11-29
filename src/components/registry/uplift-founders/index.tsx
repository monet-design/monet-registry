"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Types
interface FounderTraitItem {
  label: string;
  description: string;
}

interface FounderState {
  title: string;
  traits: FounderTraitItem[];
}

interface UpliftFoundersProps {
  headline?: string;
  ctaText?: string;
  shakyFounders?: FounderState;
  strongFounders?: FounderState;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  ctaTextColor?: string;
  labelColor?: string;
  descriptionColor?: string;
}

// Default data based on the image
const defaultShakyFounders: FounderState = {
  title: "Shaky Founders",
  traits: [
    {
      label: "DECISION MAKING",
      description:
        "Hesitant and unsure, often stuck in overthinking.",
    },
    {
      label: "RELATIONSHIPS & LEADERSHIP",
      description:
        "Struggling with co-founder tensions, team misalignment, and external pressures.",
    },
    {
      label: "EMOTIONAL STABILITY",
      description:
        "Riding the emotional rollercoaster of stress and self-doubt.",
    },
  ],
};

const defaultStrongFounders: FounderState = {
  title: "Strong Founders",
  traits: [
    {
      label: "DECISION MAKING",
      description:
        "Decisive and confident, making bold moves with clarity.",
    },
    {
      label: "RELATIONSHIPS & LEADERSHIP",
      description:
        "Building strong partnerships, aligned teams, and trusted networks.",
    },
    {
      label: "EMOTIONAL STABILITY",
      description:
        "Grounded and resilient, navigating challenges with composure.",
    },
  ],
};

// Toggle Switch Component
function ToggleSwitch({
  isOn,
  onToggle,
}: {
  isOn: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="relative h-5 w-10 rounded-full transition-all duration-300 focus:outline-none"
      style={{ backgroundColor: "#2A2926" }}
      aria-label="Toggle founder state"
    >
      <div
        className="absolute top-0.5 h-4 w-4 rounded-full transition-all duration-200"
        style={{
          backgroundColor: "#E8E2D0",
          left: isOn ? "2px" : "auto",
          right: isOn ? "auto" : "2px",
        }}
      />
    </button>
  );
}

// Trait Item Component
function TraitItem({
  label,
  description,
  labelColor,
  descriptionColor,
}: FounderTraitItem & { labelColor: string; descriptionColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-[120px_1fr] gap-6"
    >
      <span
        className="text-[10px] font-medium uppercase tracking-[0.15em]"
        style={{ color: labelColor }}
      >
        {label}
      </span>
      <p
        className="text-[11px] leading-relaxed"
        style={{ color: descriptionColor }}
      >
        {description}
      </p>
    </motion.div>
  );
}

// Main Component
export default function UpliftFounders({
  headline = "WE EMPOWER YOU\nTO BECOME THE\nFOUNDER YOUR\nCOMPANY NEEDS\nTO SCALE FASTER",
  ctaText = "GET AN UPLIFT",
  shakyFounders = defaultShakyFounders,
  strongFounders = defaultStrongFounders,
  backgroundColor = "#F9EDD5",
  cardBackgroundColor = "#131211",
  ctaTextColor = "#9A9488",
  labelColor = "#F9EFD8",
  descriptionColor = "#8A8A8A",
}: UpliftFoundersProps) {
  const [isStrong, setIsStrong] = useState(false);

  const currentState = isStrong ? strongFounders : shakyFounders;

  return (
    <section
      className="relative min-h-[600px] w-full overflow-hidden px-6 py-16 sm:px-12 lg:px-20 lg:py-24"
      style={{ backgroundColor }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Left: Headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1"
        >
          <h1 className="whitespace-pre-line text-[clamp(2rem,5vw,3.5rem)] font-black italic leading-[0.95] tracking-tight text-black">
            {headline}
          </h1>
        </motion.div>

        {/* Right: Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative w-full max-w-md lg:w-[380px]"
        >
          {/* CTA Text with Arrow */}
          <div className="mb-2 flex items-center justify-end gap-1">
            <span
              className="text-[10px] font-medium uppercase tracking-[0.2em]"
              style={{ color: ctaTextColor }}
            >
              {ctaText}
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              style={{ color: ctaTextColor }}
            >
              <path
                d="M5 1L5 9M5 9L2 6M5 9L8 6"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Dark Card */}
          <div
            className="px-6 py-5"
            style={{ backgroundColor: cardBackgroundColor, borderRadius: "3px" }}
          >
            {/* Card Header */}
            <div className="mb-5 flex items-center justify-between">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentState.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="text-[17px] font-normal"
                  style={{
                    fontFamily: "'Times New Roman', Times, serif",
                    color: labelColor,
                  }}
                >
                  {currentState.title}
                </motion.h2>
              </AnimatePresence>
              <ToggleSwitch isOn={isStrong} onToggle={() => setIsStrong(!isStrong)} />
            </div>

            {/* Traits List */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {currentState.traits.map((trait, index) => (
                  <motion.div
                    key={`${currentState.title}-${trait.label}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <TraitItem
                      label={trait.label}
                      description={trait.description}
                      labelColor={labelColor}
                      descriptionColor={descriptionColor}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
