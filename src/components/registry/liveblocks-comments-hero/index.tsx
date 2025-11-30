"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface TestimonialData {
  quote: string;
  highlightedPhrases?: string[];
  authorName: string;
  authorRole: string;
  authorAvatarUrl?: string;
}

interface LiveblocksCommentsHeroProps {
  testimonial?: TestimonialData;
}

const defaultTestimonial: TestimonialData = {
  quote:
    "Before finding Liveblocks Comments, we were anticipating having to try and build something similar ourselves. Not only does Comments do everything we were planning (and more!) but it's extremely easy to implement and the support from the Liveblocks team has been first class. Brilliant.",
  highlightedPhrases: [
    "extremely easy to implement",
    "the support from the Liveblocks team has been first class. Brilliant.",
  ],
  authorName: "Andy Whyte",
  authorRole: "CEO at MEDDICC",
  authorAvatarUrl: "/registry/liveblocks-comments-hero/avatar.jpg",
};

function highlightText(text: string, phrases: string[]): React.ReactNode[] {
  if (!phrases || phrases.length === 0) {
    return [text];
  }

  const sortedPhrases = [...phrases].sort((a, b) => b.length - a.length);

  const parts: React.ReactNode[] = [];
  let remainingText = text;
  let keyIndex = 0;

  while (remainingText.length > 0) {
    let earliestMatch: { phrase: string; index: number } | null = null;

    for (const phrase of sortedPhrases) {
      const index = remainingText.indexOf(phrase);
      if (index !== -1 && (earliestMatch === null || index < earliestMatch.index)) {
        earliestMatch = { phrase, index };
      }
    }

    if (earliestMatch === null) {
      parts.push(remainingText);
      break;
    }

    if (earliestMatch.index > 0) {
      parts.push(remainingText.slice(0, earliestMatch.index));
    }

    parts.push(
      <span key={keyIndex++} className="font-semibold">
        {earliestMatch.phrase}
      </span>
    );

    remainingText = remainingText.slice(earliestMatch.index + earliestMatch.phrase.length);
  }

  return parts;
}

export default function LiveblocksCommentsHero({
  testimonial = defaultTestimonial,
}: LiveblocksCommentsHeroProps) {
  const { quote, highlightedPhrases = [], authorName, authorRole, authorAvatarUrl } = testimonial;

  return (
    <section className="relative flex min-h-[400px] w-full items-center justify-center bg-black px-4 py-16 sm:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[600px]"
      >
        {/* Testimonial Card */}
        <div className="rounded-2xl bg-[#1C1C1C] px-8 py-8 sm:px-10 sm:py-9">
          {/* Quote */}
          <p className="text-[15px] leading-relaxed tracking-[-0.01em] text-white/90 sm:text-base">
            &ldquo;{highlightText(quote, highlightedPhrases)}&rdquo;
          </p>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            {/* Avatar */}
            <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-[#2A2A2A]">
              {authorAvatarUrl ? (
                <Image
                  src={authorAvatarUrl}
                  alt={authorName}
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white/60">
                  {authorName.charAt(0)}
                </div>
              )}
            </div>

            {/* Name and Role */}
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-normal text-[#5B9CF5]">{authorName}</span>
              <span className="text-sm font-normal text-[#888888]">, {authorRole}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
