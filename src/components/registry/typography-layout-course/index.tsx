"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface ClientLogo {
  name: string;
  element: React.ReactNode;
}

interface TypographyLayoutCourseProps {
  sectionLabel?: string;
  sectionNumber?: string;
  heading?: string;
  paragraphs?: string[];
  highlightedParagraph?: string;
  closingParagraph?: string;
  clientsLabel?: string;
  portraitImage?: string;
  portraitAlt?: string;
  clients?: ClientLogo[];
}

const AkqaLogo = () => (
  <svg viewBox="0 0 100 32" className="h-6 w-auto fill-current">
    <text
      x="0"
      y="24"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fontWeight="bold"
      letterSpacing="2"
    >
      AKQA
    </text>
  </svg>
);

const NikeLogo = () => (
  <svg viewBox="0 0 100 36" className="h-8 w-auto fill-current">
    <path d="M21 5C11.5 20 4 28 0 31c5-1 14-3 20-6 9-4 16-10 22-12-4 1-15 3-21-8z" />
  </svg>
);

const DeontayWilderLogo = () => (
  <div className="flex flex-col items-center leading-none">
    <span className="text-base font-black italic tracking-tight">DEONTAY</span>
    <span className="text-base font-black italic tracking-tight">WILDER</span>
  </div>
);

const HennessyLogo = () => (
  <div className="flex items-center gap-1.5">
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 2L14.5 8.5L21 9.5L16 14L17.5 21L12 17.5L6.5 21L8 14L3 9.5L9.5 8.5L12 2Z" />
    </svg>
    <span className="text-sm font-serif tracking-wider">Hennessy</span>
  </div>
);

const BleecStreetLogo = () => (
  <div className="flex items-baseline gap-0.5 font-mono text-sm font-bold tracking-tight">
    <span>BL</span>
    <span className="text-[10px]">E</span>
    <span className="text-[10px]">E</span>
    <span>C</span>
    <span className="ml-1">STR</span>
    <span className="text-[10px]">E</span>
    <span className="text-[10px]">E</span>
    <span>T</span>
  </div>
);

const defaultClients: ClientLogo[] = [
  { name: "AKQA", element: <AkqaLogo /> },
  { name: "Nike", element: <NikeLogo /> },
  { name: "Deontay Wilder", element: <DeontayWilderLogo /> },
  { name: "Hennessy", element: <HennessyLogo /> },
  { name: "Bleec Street", element: <BleecStreetLogo /> },
];

const defaultParagraphs = [
  "I'm an award-winning designer with a deep passion for typography, layout, and the kind of bold visual storytelling that no AI or template can replicate. Over 12 years, I've worked across web, branding, interaction, and motion design but my creative foundation has always been rooted in type and composition.",
];

const defaultHighlightedParagraph =
  "This masterclass is the result of everything I've learned while designing for ambitious brands, building immersive interfaces, and constantly refining my eye for detail. It's not just about making things look good, it's about creating design that feels intentional, uncopyable, and unmistakably yours.";

const defaultClosingParagraph =
  "Now I'm sharing that with you to help you build the same skills and creative mindset that will set your work apart.";

export default function TypographyLayoutCourse({
  sectionLabel = "About Me",
  sectionNumber = "(07)",
  heading = "LET ME\nINTRODUCE YOU",
  paragraphs = defaultParagraphs,
  highlightedParagraph = defaultHighlightedParagraph,
  closingParagraph = defaultClosingParagraph,
  clientsLabel = "Clients & Agencies I've\nworked with",
  portraitImage = "/registry/typography-layout-course/designer-portrait.jpg",
  portraitAlt = "Designer portrait with microphone",
  clients = defaultClients,
}: TypographyLayoutCourseProps) {
  return (
    <section className="relative w-full bg-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={portraitImage}
                alt={portraitAlt}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Clients Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 whitespace-pre-line text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500"
            >
              {clientsLabel}
            </motion.p>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-4 flex items-center gap-2"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                {sectionLabel}
              </span>
              <span className="text-[10px] text-neutral-500">
                {sectionNumber}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="whitespace-pre-line text-4xl font-bold italic tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              {heading}
            </motion.h2>

            {/* Main Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[11px] leading-relaxed text-neutral-400 sm:text-xs"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Highlighted Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 text-[11px] leading-relaxed text-white sm:text-xs"
            >
              {highlightedParagraph}
            </motion.p>

            {/* Closing Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-[11px] leading-relaxed text-white sm:text-xs"
            >
              {closingParagraph}
            </motion.p>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 border-t border-neutral-800 pt-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + index * 0.05 }}
                className="text-white opacity-80 transition-opacity hover:opacity-100"
              >
                {client.element}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
