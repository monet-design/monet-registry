"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface FeelGoodProductivityProps {
  sectionLabel?: string;
  authorName?: string;
  authorTagline?: string;
  paragraphs?: string[];
  authorImage?: string;
  iconColor?: string;
}

function BookIcon({ color = "#A07257" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7H16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FeelGoodProductivity({
  sectionLabel = "About the Author",
  authorName = "Ali Abdaal",
  authorTagline = "Ali Abdaal is a doctor, entrepreneur, amateur magician, and\nthe world's most-followed productivity expert.",
  paragraphs = [
    "Ali became intrigued by the science of productivity while juggling the demands of medical training at Cambridge University with building his business. While working as a doctor in the UK's National Health Service, Ali started to document his journey towards living a healthier, happier, more productive life online. In the years since, Ali's evidence-based videos, podcasts and articles about the human mind have reached hundreds of millions of people all around the world.",
    "In 2021, Ali took a break from his medical practice to focus full-time on his work popularising the science of human flourishing and high performance. In this book, he reveals everything he has learnt from a decade studying the secrets of feeling better and achieving more.",
  ],
  authorImage = "https://picsum.photos/seed/aliabdaal/600/400",
  iconColor = "#A07257",
}: FeelGoodProductivityProps) {
  const taglineLines = authorTagline.split("\n");

  return (
    <section className="w-full bg-[#F7F8FA] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl">
        {/* Header with Icon and Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center gap-3"
        >
          <BookIcon color={iconColor} />
          <h2 className="font-lora text-xl font-medium tracking-tight text-[#1A1A1A] sm:text-2xl">
            {sectionLabel}
          </h2>
        </motion.div>

        {/* Author Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 overflow-hidden rounded-xl"
        >
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={authorImage}
              alt={authorName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </motion.div>

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10"
        >
          {/* Author Name */}
          <h3 className="font-lora mb-4 text-center text-2xl font-semibold tracking-tight text-[#1A1A1A] sm:text-3xl">
            {authorName}
          </h3>

          {/* Author Tagline */}
          <p className="font-lora mb-6 text-center text-sm italic leading-relaxed text-[#333333] sm:text-base">
            {taglineLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < taglineLines.length - 1 && <br />}
              </span>
            ))}
          </p>

          {/* Divider */}
          <div className="mx-auto mb-6 h-px w-16 bg-[#E5E5E5]" />

          {/* Paragraphs */}
          <div className="space-y-5">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="font-source-sans text-center text-xs leading-[1.8] text-[#666666] sm:text-sm"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
