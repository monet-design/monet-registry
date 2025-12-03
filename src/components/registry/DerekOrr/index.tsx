"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    heading: "#1a1a1a",
    text: "#666666",
  },
  dark: {
    background: "#1a1a1a",
    heading: "#ffffff",
    text: "#b4b4b4",
  },
} as const;

const IMAGES = {
  signature: {
    path: "/registry/derek-orr/signature.png",
    alt: "Derek Orr Signature",
  },
  profile: {
    path: "https://picsum.photos/seed/derek-orr/400/400",
    alt: "Derek Orr Profile",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface BodyParagraph {
  id: number;
  text: string;
}

interface ProfileLink {
  label: string;
  href: string;
}

interface DerekOrrProps {
  mode?: "light" | "dark";
  headlineLines?: string[];
  bodyColumns?: BodyParagraph[][];
  signatureImage?: string;
  profileImage?: string;
  profileName?: string;
  profileDescription?: string;
  profileLinks?: ProfileLink[];
}

const defaultHeadlineLines = [
  "Thanks for stopping by.",
  "If Ted Lasso and Roy Kent",
  "had a design love child, it'd",
  "probably be me. Equal parts",
  "heart and grit.",
];

const defaultBodyColumns: BodyParagraph[][] = [
  [
    {
      id: 1,
      text: "This site is just a glimpse of my work — and still a bit of a work in progress. I share deeper case studies during interview loops.",
    },
    {
      id: 2,
      text: "After two great years at eBay, I'm taking the summer to travel with my family and recharge. I'll be open to remote / hybrid / in office roles starting August 2025.",
    },
    {
      id: 3,
      text: "While I'm currently focused on senior IC opportunities, I've led teams at places like Airbnb, Uber, and Instagram — and I'm always open to leadership roles where I can stay close to the work. Player/coach is my happy place.",
    },
  ],
  [
    {
      id: 4,
      text: "Recently, for fun, I built a ChatGPT-powered Chrome extension that surfaces hidden e-commerce fees — designed and shipped in half a day.",
    },
    {
      id: 5,
      text: "My background spans mobile, UX, visual design, motion, prototyping, and more, grounded by a Master's in HCI. I care deeply about useful, beautiful products — and the teams and culture behind them.",
    },
  ],
  [
    {
      id: 6,
      text: "Oh, and regarding Instagram, I was hired by Duolingo's now–VP of Product Experience, Mig Reyes, to lead Instagram's Design Systems, Web, and Accessibility teams—but stepped away shortly after to (awkwardly) focus on a family move to Australia. No hard feelings. Just timing.",
    },
  ],
];

const defaultProfileLinks: ProfileLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Download CV", href: "#" },
];

function BodyColumn({
  paragraphs,
  columnIndex,
  textColor,
}: {
  paragraphs: BodyParagraph[];
  columnIndex: number;
  textColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + columnIndex * 0.1 }}
      className="flex flex-col gap-4"
    >
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph.id}
          className="text-[11px] leading-[1.6] sm:text-xs"
          style={{ color: textColor }}
        >
          {paragraph.text}
        </p>
      ))}
    </motion.div>
  );
}

function ProfileSection({
  profileImage,
  profileName,
  profileDescription,
  profileLinks,
  headingColor,
}: {
  profileImage: string;
  profileName: string;
  profileDescription: string;
  profileLinks: ProfileLink[];
  headingColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8"
    >
      {/* Profile Image */}
      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full sm:h-36 sm:w-36">
        <Image
          src={profileImage}
          alt={profileName}
          fill
          className="object-cover"
          sizes="144px"
        />
      </div>

      {/* Profile Info */}
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-sm font-bold sm:text-base" style={{ color: headingColor }}>
            {profileName}
          </h3>
          <p className="mt-1 text-xs font-bold leading-relaxed sm:text-sm" style={{ color: headingColor }}>
            {profileDescription}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-1 text-xs" style={{ color: headingColor }}>
          {profileLinks.map((link, index) => (
            <span key={link.label} className="flex items-center gap-1">
              <a
                href={link.href}
                className="underline underline-offset-2 transition-colors"
                style={{ textDecorationColor: headingColor, color: headingColor }}
              >
                {link.label}
              </a>
              {index < profileLinks.length - 1 && (
                <span style={{ color: headingColor }}>|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function DerekOrr({
  mode = "light",
  headlineLines = defaultHeadlineLines,
  bodyColumns = defaultBodyColumns,
  signatureImage = IMAGES.signature.path,
  profileImage = IMAGES.profile.path,
  profileName = "Derek Orr",
  profileDescription = "Full-Time Dad (for now) / Career Break.\nDesigner, Builder, Painter, Coffee Snob,\nOverlander, Photographer, Musician...\nProudly Neurodivergent.",
  profileLinks = defaultProfileLinks,
}: DerekOrrProps) {
  const colors = COLORS[mode];
  return (
    <section className="w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-4xl">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="headline-font text-2xl font-bold italic leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-[42px]"
          style={{ color: colors.heading }}
        >
          {headlineLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Body Text - 3 Column Layout */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {bodyColumns.map((column, index) => (
            <BodyColumn
              key={index}
              paragraphs={column}
              columnIndex={index}
              textColor={colors.text}
            />
          ))}
        </div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-end sm:mt-10"
        >
          <div className="relative h-16 w-40 sm:h-20 sm:w-48">
            <Image
              src={signatureImage}
              alt="Signature"
              fill
              className="object-contain object-right"
              sizes="192px"
            />
          </div>
        </motion.div>

        {/* Profile Section */}
        <ProfileSection
          profileImage={profileImage}
          profileName={profileName}
          profileDescription={profileDescription}
          profileLinks={profileLinks}
          headingColor={colors.heading}
        />
      </div>
    </section>
  );
}
