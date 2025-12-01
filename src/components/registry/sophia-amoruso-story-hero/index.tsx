"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface SophiaAmorusoStoryHeroProps {
  mode?: "light" | "dark";
  titleWords?: {
    prefix: string;
    main: string;
  }[];
  portraitSrc?: string;
  portraitAlt?: string;
  greeting?: string;
  paragraphs?: string[];
  quote?: string;
}

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

export default function SophiaAmorusoStoryHero({
  mode = "light",
  titleWords = [
    { prefix: "THIS", main: "S" },
    { prefix: "IS", main: "TO" },
    { prefix: "MY", main: "RY" },
  ],
  portraitSrc = "/registry/sophia-amoruso-story-hero/portrait.jpg",
  portraitAlt = "Portrait",
  greeting = "Sup, I'm Sophia.",
  paragraphs = [
    "I've dedicated my career to helping entrepreneurs build their dream businesses. Over the past 18 years, I've scaled big companies and failed hard on the grand public stage. When I was 22, I started a little eBay store selling vintage out of the back of an '87 Volvo and named it Nasty Gal.",
    "Over the years, I scaled the business to $100,000,000 in revenue and wrote a New York Times Bestselling book about the whole thing and named it #GIRLBOSS. So they put me on the cover of Forbes, said I was richer than Beyonce (I was, but I'm not), and made a Netflix series based on my life.",
    "Needless to say, it's been a pretty wild ride.",
  ],
  quote = "DON'T EVER GROW UP.\nDON'T BECOME A\nBORE, AND DON'T\nEVER LET THE MAN\nGET TO YOU.",
}: SophiaAmorusoStoryHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      {/* Large Typography Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl"
      >
        <h1 className="flex flex-wrap items-end justify-start font-bold uppercase tracking-tighter text-[#1D1D1F]">
          {titleWords.map((word, index) => (
            <span key={index} className="relative mr-1 sm:mr-2">
              <span className="absolute -top-3 left-0 text-[10px] font-bold tracking-wide sm:-top-4 sm:text-xs lg:-top-5 lg:text-sm">
                {word.prefix}
              </span>
              <span className="text-[60px] leading-none sm:text-[100px] lg:text-[140px] xl:text-[180px]">
                {word.main}
              </span>
            </span>
          ))}
        </h1>
      </motion.div>

      {/* Content Section */}
      <div className="mx-auto mt-8 max-w-6xl sm:mt-12 lg:mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden">
              <Image
                src={portraitSrc}
                alt={portraitAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col lg:col-span-7">
            {/* Star Icon and Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 flex items-start justify-between gap-4 lg:mb-12"
            >
              {/* 4-Point Star */}
              <div className="flex-shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                >
                  <path
                    d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                    fill="#1D1D1F"
                  />
                </svg>
              </div>

              {/* Quote */}
              <p className="whitespace-pre-line text-right text-[8px] font-bold uppercase leading-tight tracking-wide text-[#1D1D1F] sm:text-[9px] lg:text-[10px]">
                {quote}
              </p>
            </motion.div>

            {/* Greeting and Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-5"
            >
              <p className="text-sm font-medium text-[#1D1D1F] sm:text-base">
                {greeting}
              </p>

              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-sm leading-relaxed text-[#1D1D1F] sm:text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
