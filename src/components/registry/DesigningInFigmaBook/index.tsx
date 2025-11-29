"use client";

import React from "react";
import { motion } from "motion/react";

interface BulletItem {
  text: string;
}

interface DesigningInFigmaBookProps {
  greeting?: string;
  authorName?: string;
  paragraphs?: Array<{
    text: string;
    boldPhrases?: string[];
  }>;
  bulletListIntro?: string;
  bulletItems?: BulletItem[];
  closingText?: string;
}

const defaultParagraphs = [
  {
    text: "A couple years ago, I decided to switch to Figma. Learning by poking around is limiting and inefficient, so I looked for a short guide to quickly get at least as efficient as I was before. I found nothing but a few long video courses, which are not my preferred format. Instead, I began reading everything I could find on Figma and, well, poking around and experimenting.",
    boldPhrases: ["Learning by poking around is limiting and inefficient"],
  },
  {
    text: "Last year, I started a regular newsletter so I can share things I learned about Figma. That research became a foundation for this book, as I recorded and organized the best tips and recommendations. Even if you've been using the app for a while, chances are you'll learn a few things and save time in the future.",
    boldPhrases: [
      "That research became a foundation for this book, as I recorded and organized the best tips and recommendations.",
    ],
  },
  {
    text: "Look at the Table of Contents below. Every topic was thoroughly researched and explained in-depth:",
    boldPhrases: [
      "Every topic was thoroughly researched and explained in-depth:",
    ],
  },
];

const defaultBulletItems: BulletItem[] = [
  { text: "Learn the power of shapes and Vector Networks." },
  { text: "Create resizable layouts that adapt to changes." },
  { text: "Construct intricate Components based on a few core principles." },
  { text: "Keep projects consistent by reusing Styles." },
  { text: "Use real data in your design mockups." },
  { text: "Export assets and avoid surprises with SVG." },
];

export default function DesigningInFigmaBook({
  greeting = "Hi, I'm Eugene",
  authorName,
  paragraphs = defaultParagraphs,
  bulletListIntro,
  bulletItems = defaultBulletItems,
  closingText = "Get the most out of Figma, and enjoy the book!",
}: DesigningInFigmaBookProps) {
  const renderTextWithBold = (text: string, boldPhrases: string[] = []) => {
    if (boldPhrases.length === 0) {
      return text;
    }

    let result: React.ReactNode[] = [text];

    boldPhrases.forEach((phrase) => {
      result = result.flatMap((part, partIndex) => {
        if (typeof part !== "string") return [part];

        const segments: React.ReactNode[] = [];
        let remainingText = part;
        let searchIndex = remainingText.indexOf(phrase);

        while (searchIndex !== -1) {
          if (searchIndex > 0) {
            segments.push(remainingText.slice(0, searchIndex));
          }
          segments.push(
            <strong
              key={`${partIndex}-${phrase}-${searchIndex}`}
              className="font-bold text-[#7C3AED] underline decoration-[#7C3AED]"
            >
              {phrase}
            </strong>
          );
          remainingText = remainingText.slice(searchIndex + phrase.length);
          searchIndex = remainingText.indexOf(phrase);
        }

        if (remainingText) {
          segments.push(remainingText);
        }

        return segments;
      });
    });

    return result;
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#E1DFE4]">
      {/* Decorative Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top left - Pink/coral shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute -left-16 top-8 w-40 h-40"
        >
          <svg viewBox="0 0 160 160" className="w-full h-full">
            <path
              d="M80 10 C120 10, 150 50, 140 90 C130 130, 80 150, 50 130 C20 110, 10 60, 40 30 C60 10, 80 10, 80 10"
              fill="#DD7685"
            />
          </svg>
        </motion.div>

        {/* Left side - Coral/red shape */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute -left-20 top-1/3 w-56 h-72"
        >
          <svg viewBox="0 0 224 288" className="w-full h-full">
            <path
              d="M112 20 C180 30, 210 100, 200 170 C190 240, 130 280, 70 260 C10 240, -20 160, 20 90 C50 40, 112 20, 112 20"
              fill="#EE665A"
            />
          </svg>
        </motion.div>

        {/* Bottom left - Purple shape */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -left-10 bottom-10 w-48 h-48"
        >
          <svg viewBox="0 0 192 192" className="w-full h-full">
            <path
              d="M96 20 C140 20, 180 60, 170 110 C160 160, 100 180, 50 150 C10 120, 10 60, 50 30 C70 15, 96 20, 96 20"
              fill="#AB90DF"
            />
          </svg>
        </motion.div>

        {/* Top right - Sky blue shape */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="absolute -right-10 -top-10 w-64 h-64"
        >
          <svg viewBox="0 0 256 256" className="w-full h-full">
            <path
              d="M128 30 C190 30, 240 80, 230 140 C220 200, 150 240, 80 220 C20 200, -10 130, 30 70 C60 30, 128 30, 128 30"
              fill="#88D3FD"
            />
          </svg>
        </motion.div>

        {/* Right side - Light blue shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="absolute -right-16 top-1/2 w-52 h-52"
        >
          <svg viewBox="0 0 208 208" className="w-full h-full">
            <path
              d="M104 20 C160 25, 195 70, 185 130 C175 180, 120 195, 60 175 C10 155, -5 90, 35 45 C65 15, 104 20, 104 20"
              fill="#A1DCFC"
            />
          </svg>
        </motion.div>

        {/* Bottom right - Yellow shape */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="absolute -right-12 bottom-16 w-56 h-48"
        >
          <svg viewBox="0 0 224 192" className="w-full h-full">
            <path
              d="M112 20 C170 25, 210 70, 200 120 C190 165, 130 180, 70 165 C20 150, -10 95, 25 50 C55 15, 112 20, 112 20"
              fill="#FBDD83"
            />
          </svg>
        </motion.div>

        {/* Extra green accent - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute right-20 top-6 w-24 h-32"
        >
          <svg viewBox="0 0 96 128" className="w-full h-full">
            <path
              d="M48 10 C80 20, 90 60, 80 90 C70 115, 30 125, 15 100 C0 75, 15 25, 48 10"
              fill="#439E90"
            />
          </svg>
        </motion.div>

        {/* Top center - Teal/mint green shape */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="absolute left-1/3 -top-4 w-40 h-36"
        >
          <svg viewBox="0 0 160 144" className="w-full h-full">
            <path
              d="M80 10 C130 15, 155 50, 145 95 C135 130, 80 140, 40 120 C5 100, -5 55, 25 25 C50 5, 80 10, 80 10"
              fill="#69B4A6"
            />
          </svg>
        </motion.div>

        {/* Top left - Purple small accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute left-24 -top-2 w-16 h-20"
        >
          <svg viewBox="0 0 64 80" className="w-full h-full">
            <path
              d="M32 5 C55 10, 62 35, 55 55 C48 72, 20 78, 10 60 C0 42, 12 10, 32 5"
              fill="#661EC8"
            />
          </svg>
        </motion.div>
      </div>

      {/* Content Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8 sm:p-10 lg:p-12"
        >
          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-lg font-semibold text-[#1a1a1a] mb-6"
          >
            {greeting} <span className="inline-block animate-wave">&#128075;</span>
          </motion.h1>

          {/* Paragraphs */}
          <div className="space-y-4">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-sm leading-relaxed text-[#374151]"
              >
                {renderTextWithBold(paragraph.text, paragraph.boldPhrases)}
              </motion.p>
            ))}
          </div>

          {/* Bullet List */}
          {bulletItems.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-4 ml-6 space-y-1.5 list-disc"
            >
              {bulletItems.map((item, index) => (
                <li
                  key={index}
                  className="text-sm leading-relaxed text-[#374151] pl-1"
                >
                  {item.text}
                </li>
              ))}
            </motion.ul>
          )}

          {/* Closing Text */}
          {closingText && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="mt-6 text-sm leading-relaxed text-[#374151]"
            >
              {closingText}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Wave animation style */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-wave {
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
