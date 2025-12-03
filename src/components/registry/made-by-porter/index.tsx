"use client";

import { motion } from "motion/react";

// CUSTOMIZATION
const CUSTOMIZATION = {};

interface MadeByPorterProps {
  mode?: "light" | "dark";
  title?: string;
  paragraphs?: string[];
  authorName?: string;
  authorRole?: string;
  authorImage?: string;
}

const defaultParagraphs = [
  "I'm the founder and design engineer behind Made by Porter, a service that focuses 80% on collaborating with partners and companies and 20% on building my own products. Currently, I'm working with eCommerce companies like Organics Alive and Bayam, helping them optimize their tech and design systems.",
  "My mission is to set up systems that support businesses for the long haul, focusing on future-proofing. I ensure that the systems I implement won't need rebuilding in 3-5 years and, with proper maintenance, can last 10-15 years without major overhauls. By integrating automation and AI, I streamline processes so founders can focus on high-impact tasks or personal time, rather than getting bogged down by operational inefficiencies.",
  "Ultimately, my work supports the transition into the Fourth Industrial Revolution, preparing businesses to be adaptable, efficient, and ready for the future.",
];

export default function MadeByPorter({
  mode = "light",
  title = "Made by Porter",
  paragraphs = defaultParagraphs,
  authorName = "Chris Porter",
  authorRole = "Founder & Design Engineer",
  authorImage = "https://picsum.photos/seed/chris-porter/400/400",
}: MadeByPorterProps) {
  return (
    <section className="w-full bg-[#FAFAFA] px-6 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            {/* Title */}
            <h2 className="mb-4 text-base font-semibold tracking-tight text-[#1A1A1A] sm:mb-5 sm:text-lg">
              {title}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                  className="text-xs leading-relaxed text-[#4A4A4A] sm:text-sm"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Author Photo & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Photo */}
            <div className="aspect-square w-full overflow-hidden rounded-sm">
              <img
                src={authorImage}
                alt={authorName}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Author Info */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-[#1A1A1A]">
                {authorName}
              </h3>
              <p className="mt-0.5 text-xs text-[#6B6B6B]">{authorRole}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
