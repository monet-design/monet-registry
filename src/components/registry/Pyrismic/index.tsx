"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#C3FCF6",
    text: "#1B1B4F",
    accent: "#1B1B4F",
    signature: "#3B5BDB",
  },
  dark: {
    background: "#1B2B3B",
    text: "#E0F0FF",
    accent: "#E0F0FF",
    signature: "#6B8BFB",
  },
} as const;

const IMAGES = {
  profile: {
    path: "https://picsum.photos/seed/jamiesyke/200/200?grayscale",
    alt: "Founder profile photo",
    prompt: `Professional founder portrait photo, circular crop with grayscale treatment.
Style: Creative, artistic professional aesthetic
Composition: Headshot or upper body, clean background
Treatment: Grayscale filter applied for sophisticated look
Mood: Thoughtful, professional, creative entrepreneur
Technical: Square aspect ratio, high quality, grayscale`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface PyrismicProps {
  mode?: "light" | "dark";
  heading?: string;
  subheading?: string;
  profileImage?: string;
  paragraphs?: string[];
  signatureText?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

function SmallStarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" />
    </svg>
  );
}

export default function Pyrismic({
  mode = "light",
  heading = "Made for freelancers,",
  subheading = "by a freelancer.",
  profileImage = IMAGES.profile.path,
  paragraphs = [
    `Condensing over a decade of learning, trial and error is no easy feat. But Jamie Syke, founder of Pyrismic is the right man for the job if there ever was one.`,
    `From working with Bumble, Universal Music, Porsche, and many more while running Brotherhood, alongside Cassius Kiani and Fabio Basile. To his work now with AVA, helping global brands solve their big problems through product and design solutions.`,
    `After multiple years of successfully planning, building and shipping products, Jamie is now focusing on Pyrismic. He's still travelling the world, but he's done searching around and hearing "Yeah, that would be useful... however, no I've not heard of anything that does that well" - He's facilitating the dreams of freelancers to allow them to turn their hard work into true success - be that from growth, or just the freedom of their time to improve their lifestyle.`,
  ],
  signatureText = "Syke",
  backgroundColor,
  textColor,
  accentColor,
}: PyrismicProps) {
  const colors = COLORS[mode];
  const finalBackgroundColor = backgroundColor || colors.background;
  const finalTextColor = textColor || colors.text;
  const finalAccentColor = accentColor || colors.accent;
  const finalSignatureColor = colors.signature;

  return (
    <section
      className="relative w-full min-h-screen px-6 py-16 sm:px-8 lg:px-12 overflow-hidden"
      style={{ backgroundColor: finalBackgroundColor }}
    >
      {/* Decorative Stars */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-6 left-12 sm:left-16"
        style={{ color: finalAccentColor }}
      >
        <SmallStarIcon className="w-4 h-4" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-16 right-8 sm:right-20"
        style={{ color: finalAccentColor }}
      >
        <StarIcon className="w-6 h-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-32 right-12 sm:right-24"
        style={{ color: finalAccentColor }}
      >
        <SmallStarIcon className="w-3 h-3" />
      </motion.div>

      {/* Main Content Container */}
      <div className="mx-auto max-w-xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1
            className="text-2xl sm:text-3xl leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: finalTextColor,
            }}
          >
            {heading}
            <br />
            {subheading}
          </h1>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden"
            style={{
              boxShadow: "0 0 0 4px white",
            }}
          >
            <Image
              src={profileImage}
              alt="Founder profile"
              fill
              className="object-cover grayscale"
            />
          </div>
        </motion.div>

        {/* Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 mb-12"
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: finalTextColor,
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center"
        >
          <span
            className="text-4xl sm:text-5xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: finalSignatureColor,
            }}
          >
            {signatureText}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
