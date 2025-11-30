"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface OysterPeopleHeroProps {
  badge?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function OysterPeopleHero({
  badge = "Confidently hire and manage global talent | Get started for free",
  titleLine1 = "Oyster's",
  titleLine2 = "People Builders",
  titleLine3 = "Community",
  description = "A meeting point for innovative People leaders. An opportunity to step outside of daily tasks and jump into creative problem solving. A space to strategize and build change. A catalyst for creating people-centric organizations.",
  buttonText = "Join now",
  onButtonClick,
}: OysterPeopleHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#F6F5EC] overflow-hidden">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full py-3 text-center text-sm text-[#545454]"
      >
        {badge}{" "}
        <span className="inline-block ml-1 transform transition-transform hover:translate-x-1">
          &rarr;
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-24">
        {/* Decorative Illustrations */}

        {/* Smiley - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-0 top-8 w-20 h-20 md:w-24 md:h-24"
        >
          <Image
            src="/registry/oyster-people-hero/smiley.png"
            alt="Smiley"
            width={96}
            height={96}
            className="object-contain"
          />
        </motion.div>

        {/* Hammer - Left Upper */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -30 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute left-20 top-32 w-16 h-16 md:w-20 md:h-20"
        >
          <Image
            src="/registry/oyster-people-hero/hammer.png"
            alt="Hammer"
            width={80}
            height={80}
            className="object-contain"
          />
        </motion.div>

        {/* Sparkle Icon - Left Middle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute left-24 top-56"
        >
          <Sparkles className="w-8 h-8 text-[#545454]" strokeWidth={1.5} />
        </motion.div>

        {/* Globe - Left Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute left-0 bottom-24 w-20 h-20 md:w-24 md:h-24"
        >
          <Image
            src="/registry/oyster-people-hero/globe.png"
            alt="Globe"
            width={96}
            height={96}
            className="object-contain"
          />
        </motion.div>

        {/* Ladder - Right Top */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute right-0 top-24 w-24 h-32 md:w-32 md:h-44"
        >
          <Image
            src="/registry/oyster-people-hero/ladder.png"
            alt="Ladder"
            width={128}
            height={176}
            className="object-contain"
          />
        </motion.div>

        {/* Pencil - Right Middle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute right-8 top-64 w-16 h-16 md:w-20 md:h-20"
        >
          <Image
            src="/registry/oyster-people-hero/pencil.png"
            alt="Pencil"
            width={80}
            height={80}
            className="object-contain"
          />
        </motion.div>

        {/* Flag - Bottom Center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute left-1/2 bottom-12 transform -translate-x-1/2 translate-x-16 w-12 h-12 md:w-16 md:h-16"
        >
          <Image
            src="/registry/oyster-people-hero/flag.png"
            alt="Flag"
            width={64}
            height={64}
            className="object-contain"
          />
        </motion.div>

        {/* Text Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto pt-12">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl leading-tight"
          >
            <span className="font-serif italic text-[#1a1a1a]">{titleLine1}</span>
            <br />
            <span className="font-sans font-bold text-[#1a1a1a]">{titleLine2}</span>
            <br />
            <span className="font-serif italic text-[#1a1a1a]">{titleLine3}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-base md:text-lg text-[#545454] leading-relaxed max-w-xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={onButtonClick}
              className="px-12 py-4 bg-[#464645] text-white text-base font-medium rounded-full hover:bg-[#333332] transition-colors duration-300"
            >
              {buttonText}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
