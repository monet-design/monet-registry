"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

// Types
interface ClientLogo {
  id: number;
  name: string;
  icon: React.ReactNode;
  borderColor?: string;
}

interface Annotation {
  text: string;
  position: "top-left" | "top-right";
}

interface SmithRobinsonProps {
  title?: string;
  paragraphs?: string[];
  highlightedPhrases?: { text: string; href?: string }[];
  clientLogos?: ClientLogo[];
  annotations?: Annotation[];
  pixelCharacterSrc?: string;
}

// Default client logos
const defaultClientLogos: ClientLogo[] = [
  {
    id: 1,
    name: "PBS",
    icon: (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="transparent" stroke="#4A5568" strokeWidth="2" />
        <text x="50" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="sans-serif">
          PBS
        </text>
      </svg>
    ),
    borderColor: "#4A5568",
  },
  {
    id: 2,
    name: "CN",
    icon: (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="transparent" stroke="#4A5568" strokeWidth="2" />
        <text x="50" y="62" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="sans-serif">
          CN
        </text>
      </svg>
    ),
    borderColor: "#4A5568",
  },
  {
    id: 3,
    name: "The New York Times",
    icon: (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="transparent" stroke="#DC2626" strokeWidth="2" />
        <text x="50" y="40" textAnchor="middle" fill="white" fontSize="11" fontFamily="serif" fontStyle="italic">
          The
        </text>
        <text x="50" y="55" textAnchor="middle" fill="white" fontSize="11" fontFamily="serif" fontStyle="italic">
          New York
        </text>
        <text x="50" y="70" textAnchor="middle" fill="white" fontSize="11" fontFamily="serif" fontStyle="italic">
          Times
        </text>
      </svg>
    ),
    borderColor: "#DC2626",
  },
];

// Default paragraphs
const defaultParagraphs = [
  "Smith Robinson begins, as so many worthy ventures do, on a college road trip - Andy and Dom discovered they shared an affinity for unscripted, unplanned expeditions through unknown lands and meticulously plotted and clever click adventure games.",
  "At that intersection of the chaos and complexity of the real world and the carefully curated interactive story they established their creative philosophy: serious stories can also be silly, and the most abstract concept can be deeply human.",
  "That shared language of humor and adventure is still baked into how we work today.",
  "Dominic Smith is a Multimedia MacGyver - an Emmy-winning director, designer, and kiteboarder who can",
];

// Default highlighted phrases
const defaultHighlightedPhrases = [
  { text: "serious stories can also be silly", href: "#" },
  { text: "deeply human", href: "#" },
];

// Default annotations
const defaultAnnotations: Annotation[] = [
  {
    text: "Behold, our mighty roster of clients!",
    position: "top-left",
  },
  {
    text: "We love them all equally... except the ones who pay on time.",
    position: "top-right",
  },
];

// Annotation Component with arrow
function AnnotationBox({
  text,
  position,
}: {
  text: string;
  position: "top-left" | "top-right";
}) {
  const isLeft = position === "top-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`absolute ${isLeft ? "left-0 top-0" : "right-0 top-0"}`}
    >
      <div
        className="relative rounded-sm border border-dashed border-[#D4A84B]/60 px-3 py-2"
        style={{ fontFamily: "'Handlee', cursive" }}
      >
        <p className="max-w-[140px] text-[11px] leading-snug text-[#D4A84B]/90">
          {text}
        </p>
      </div>
      {/* Arrow pointing down */}
      <div className={`flex ${isLeft ? "justify-center" : "justify-center"} mt-1`}>
        <svg
          width="12"
          height="24"
          viewBox="0 0 12 24"
          fill="none"
          className={`text-[#D4A84B]/60 ${isLeft ? "" : ""}`}
        >
          <path
            d="M6 0 L6 18 M2 14 L6 20 L10 14"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </motion.div>
  );
}

// Client Logo Component
function ClientLogoItem({ logo }: { logo: ClientLogo }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="h-16 w-16"
    >
      {logo.icon}
    </motion.div>
  );
}

// Helper function to render paragraph with highlighted phrases
function renderParagraphWithHighlights(
  paragraph: string,
  highlightedPhrases: { text: string; href?: string }[],
  paragraphIndex: number
) {
  let result: React.ReactNode[] = [];
  let remainingText = paragraph;
  let keyIndex = 0;

  for (const phrase of highlightedPhrases) {
    const index = remainingText.indexOf(phrase.text);
    if (index !== -1) {
      // Add text before the phrase
      if (index > 0) {
        result.push(remainingText.substring(0, index));
      }
      // Add the highlighted phrase
      result.push(
        <span
          key={`${paragraphIndex}-${keyIndex}`}
          className="underline decoration-[#D4A84B]/70 underline-offset-2"
        >
          {phrase.text}
        </span>
      );
      remainingText = remainingText.substring(index + phrase.text.length);
      keyIndex++;
    }
  }

  // Add any remaining text
  if (remainingText) {
    result.push(remainingText);
  }

  return result;
}

// Main Component
export default function SmithRobinson({
  title = "THE ORIGIN STORY",
  paragraphs = defaultParagraphs,
  highlightedPhrases = defaultHighlightedPhrases,
  clientLogos = defaultClientLogos,
  annotations = defaultAnnotations,
  pixelCharacterSrc = "/features/biography/smith-robinson/pixel-character.png",
}: SmithRobinsonProps) {
  const leftAnnotation = annotations.find((a) => a.position === "top-left");
  const rightAnnotation = annotations.find((a) => a.position === "top-right");

  return (
    <section
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{
        background: "linear-gradient(180deg, #010F36 0%, #011039 50%, #00113C 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl tracking-wide sm:text-4xl lg:text-5xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            color: "#D4A84B",
            textShadow: "0 0 30px rgba(212, 168, 75, 0.3)",
          }}
        >
          {title}
        </motion.h2>

        {/* Main Content Grid */}
        <div className="relative flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Left Column - Client Logos */}
          <div className="relative flex flex-row items-center justify-center gap-4 md:flex-col md:items-start md:gap-6">
            {/* Top-left Annotation */}
            {leftAnnotation && (
              <div className="relative mb-4 hidden md:block">
                <AnnotationBox
                  text={leftAnnotation.text}
                  position="top-left"
                />
                <div className="h-16" /> {/* Spacer for annotation */}
              </div>
            )}

            {/* Client Logos */}
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ClientLogoItem logo={logo} />
              </motion.div>
            ))}
          </div>

          {/* Right Column - Text Content */}
          <div className="relative flex-1">
            {/* Paragraphs */}
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-sm leading-relaxed text-[#E5E7EB] sm:text-[15px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {renderParagraphWithHighlights(
                    paragraph,
                    highlightedPhrases,
                    index
                  )}
                </motion.p>
              ))}
            </div>

            {/* Pixel Character and Right Annotation */}
            <div className="absolute -right-4 top-0 hidden lg:block">
              {/* Right Annotation */}
              {rightAnnotation && (
                <div className="relative mb-2">
                  <div
                    className="rounded-sm border border-dashed border-[#D4A84B]/60 px-3 py-2"
                    style={{ fontFamily: "'Handlee', cursive" }}
                  >
                    <p className="max-w-[120px] text-[10px] leading-snug text-[#D4A84B]/90">
                      {rightAnnotation.text}
                    </p>
                  </div>
                </div>
              )}

              {/* Pixel Character */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative h-16 w-16"
              >
                <Image
                  src={pixelCharacterSrc}
                  alt="Pixel art character"
                  fill
                  sizes="64px"
                  className="object-contain"
                  style={{ imageRendering: "pixelated" }}
                />
              </motion.div>
            </div>

            {/* NYT Logo positioned near text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -right-20 bottom-4 hidden lg:block"
            >
              <div className="h-14 w-14">
                {clientLogos[2]?.icon}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
