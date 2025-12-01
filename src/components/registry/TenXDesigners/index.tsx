"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Twitter/X Icon Component
function TwitterIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorHandle: string;
  authorAvatar?: string;
}

interface TenXDesignersProps {
  mode?: "light" | "dark";
  badgeText?: string;
  heading?: string;
  testimonials?: Testimonial[];
  ctaText?: string;
  ctaLinkText?: string;
}

// Default testimonials data based on the image
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      '"Thanks for this great community @FontsMans ! You\'ve brought together so many inspiring professionals!"',
    authorName: "Krisztina Szerovay",
    authorHandle: "@krisztaszerovay",
    authorAvatar: "https://picsum.photos/seed/krisztina/100/100",
  },
  {
    id: 2,
    quote:
      '"Always excited for communities that share practical design knowledge with each other. Happy to be a part of this."',
    authorName: "Anthony Hobday",
    authorHandle: "@hobdaydesign",
    authorAvatar: "https://picsum.photos/seed/anthony/100/100",
  },
  {
    id: 3,
    quote: '"Huuuuugeeee! designer is lucky."',
    authorName: "femke",
    authorHandle: "@femkesvs",
    authorAvatar: "https://picsum.photos/seed/femke/100/100",
  },
  {
    id: 4,
    quote:
      '"If you want to chat with like-minded creatives, learn new things every week and get relevant feedbacks on your projects you should definitely join @10x_designers community."',
    authorName: "Imoon",
    authorHandle: "@the_Imoon",
    authorAvatar: "https://picsum.photos/seed/imoon/100/100",
  },
  {
    id: 5,
    quote:
      '"Huge thanks to the @10x_designers community and @FontsMans for having me today! - Had a blast teaching how we make @Threads character avatars and also made this 10x Designers logo graphic in just 10 minutes."',
    authorName: "Tim Quirino",
    authorHandle: "@timquirino",
    authorAvatar: "https://picsum.photos/seed/tim/100/100",
  },
  {
    id: 6,
    quote:
      '"This is just scratching the @10x_designers is quickly becoming TONS of talented people ready to help you with whatever design struggle you may have, workshops, tutorials and incredible people to chat with."',
    authorName: "Rob",
    authorHandle: "@robably___",
    authorAvatar: "https://picsum.photos/seed/rob/100/100",
  },
];

// Edge text fragments (partially visible on left and right sides)
const leftEdgeFragments = [
  {
    id: 101,
    lines: [
      "...with some folks",
      "awesome,",
      "community and I'm",
      "on! Check them out.",
      "you need to take",
      "...s from top...",
      "workshops to a super",
      "...",
    ],
  },
  {
    id: 102,
    lines: [
      "...their",
      "...program",
      "...my",
      "...onal",
      "...ng",
      "...munity.",
    ],
  },
];

const rightEdgeFragments = [
  {
    id: 201,
    lines: [
      '"Huuuuugeeee! Every',
      "designer is lucky to...",
    ],
  },
  {
    id: 202,
    lines: [
      '"This is just scratching the',
      "@10x_designers is quickly...",
      "TONS of talented people read...",
      "you with whatever design s...",
      "may have, workshops, tuto...",
      "incredible people to char",
      'with."',
    ],
  },
];

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-2xl bg-[#F7F7F7] p-5"
      style={{ minWidth: 220, maxWidth: 280 }}
    >
      {/* Quote Text */}
      <p className="flex-1 text-[13px] leading-relaxed text-[#4A4A4A]">
        {testimonial.quote}
      </p>

      {/* Author Info */}
      {testimonial.authorName && (
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {testimonial.authorAvatar ? (
              <Image
                src={testimonial.authorAvatar}
                alt={testimonial.authorName}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-300" />
            )}
            <div>
              <p className="text-sm font-medium text-[#1A1A1A]">
                {testimonial.authorName}
              </p>
              <p className="text-xs text-[#8A8A8A]">{testimonial.authorHandle}</p>
            </div>
          </div>
          <TwitterIcon className="h-4 w-4 text-[#C8C8C8]" />
        </div>
      )}
    </motion.div>
  );
}

// Edge Text Fragment Component (for partially visible scattered text on edges)
function EdgeTextFragment({
  lines,
  side,
}: {
  lines: string[];
  side: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-shrink-0 flex-col gap-0.5 py-4 ${
        side === "left" ? "items-end text-right" : "items-start text-left"
      }`}
      style={{ width: 120 }}
    >
      {lines.map((line, index) => (
        <span
          key={index}
          className="text-[12px] leading-tight text-[#C0C0C0]"
        >
          {line}
        </span>
      ))}
      <TwitterIcon className="mt-2 h-3 w-3 text-[#D0D0D0]" />
    </div>
  );
}

// Main Component
export default function TenXDesigners({
  mode = "light",
  badgeText = "Listen up",
  heading = "What designers say about us",
  testimonials = defaultTestimonials,
  ctaText = "Want to be featured?",
  ctaLinkText = "Tweet about us!",
}: TenXDesignersProps) {
  // Split testimonials into two rows
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3, 6);

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 flex justify-center"
        >
          <div className="relative inline-flex items-center rounded-full bg-[#D4EDF8] px-4 py-1.5 text-sm font-medium text-[#5A9AB8]">
            {badgeText}
            {/* Arrow pointing down */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="text-[#D4EDF8]"
              >
                <path d="M6 8L0 0H12L6 8Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 text-center text-2xl font-bold text-[#1A1A1A] sm:text-3xl md:text-4xl"
        >
          {heading}
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Left fade overlay */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          {/* Right fade overlay */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

          {/* Top Row */}
          <div className="mb-5 flex items-start justify-center gap-5 overflow-hidden">
            {/* Left edge text fragments (partially visible) */}
            <div className="-ml-16 flex-shrink-0">
              <EdgeTextFragment
                lines={leftEdgeFragments[0].lines}
                side="left"
              />
            </div>

            {/* Main cards */}
            {topRow.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex-shrink-0"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}

            {/* Right edge text fragments (partially visible) */}
            <div className="-mr-16 flex-shrink-0">
              <EdgeTextFragment
                lines={rightEdgeFragments[0].lines}
                side="right"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-start justify-center gap-5 overflow-hidden">
            {/* Left edge text fragments (partially visible) */}
            <div className="-ml-16 flex-shrink-0">
              <EdgeTextFragment
                lines={leftEdgeFragments[1].lines}
                side="left"
              />
            </div>

            {/* Main cards */}
            {bottomRow.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex-shrink-0"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}

            {/* Right edge text fragments (partially visible) */}
            <div className="-mr-16 flex-shrink-0">
              <EdgeTextFragment
                lines={rightEdgeFragments[1].lines}
                side="right"
              />
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-1 text-sm text-[#6A6A6A]"
        >
          <span>{ctaText}</span>
          <a
            href="#"
            className="inline-flex items-center gap-0.5 font-medium text-[#4A4A4A] underline decoration-[#AAAAAA] underline-offset-2 transition-colors hover:text-[#1A1A1A]"
          >
            {ctaLinkText}
            <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
