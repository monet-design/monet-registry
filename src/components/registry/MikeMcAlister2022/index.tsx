"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#131224",
    cardBackground: "linear-gradient(to bottom right, rgba(26, 24, 48, 0.8), rgba(30, 26, 56, 0.7), rgba(34, 30, 58, 0.6))",
    cardBorder: "rgba(42, 38, 64, 0.5)",
    title: "#E8C4C4",
    text: "#B8B6C0",
    link: "#E8A4B8",
    linkHover: "#F0B8C8",
    glowPrimary: "rgba(147, 51, 234, 0.2)",
    glowSecondary: "rgba(99, 102, 241, 0.15)",
  },
  dark: {
    background: "#0a0a10",
    cardBackground: "linear-gradient(to bottom right, rgba(16, 14, 32, 0.8), rgba(20, 16, 40, 0.7), rgba(24, 20, 42, 0.6))",
    cardBorder: "rgba(32, 28, 54, 0.5)",
    title: "#E8C4C4",
    text: "#A8A6B0",
    link: "#E8A4B8",
    linkHover: "#F0B8C8",
    glowPrimary: "rgba(147, 51, 234, 0.3)",
    glowSecondary: "rgba(99, 102, 241, 0.2)",
  },
} as const;

const IMAGES = {
  profile: {
    path: "https://picsum.photos/seed/mikemcalister2022/400/500",
    alt: "Mike McAlister portrait photo",
    prompt: `Professional portrait photo of a creative entrepreneur in their 30s-40s.
Style: Warm, approachable, creative professional aesthetic
Composition: Vertical portrait, slightly casual pose, natural lighting
Background: Simple, slightly blurred, neutral tones
Expression: Confident, friendly, approachable
Mood: Professional yet personable, creative industry
Technical: High quality, 4:5 aspect ratio, soft natural lighting`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import "./font.css";

interface LinkItem {
  text: string;
  href: string;
}

interface MikeMcAlister2022Props {
  mode?: "light" | "dark";
  title?: string;
  name?: string;
  profileImage?: string;
  paragraphs?: {
    text: string;
    links?: { placeholder: string; link: LinkItem }[];
  }[];
}

function AccentLink({
  href,
  children,
  linkColor,
  linkHoverColor,
}: {
  href: string;
  children: React.ReactNode;
  linkColor: string;
  linkHoverColor: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors"
      style={{ color: linkColor }}
      onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
    >
      {children}
    </a>
  );
}

function renderParagraphWithLinks(
  text: string,
  links?: { placeholder: string; link: LinkItem }[],
  linkColor?: string,
  linkHoverColor?: string
): React.ReactNode {
  if (!links || links.length === 0) {
    return text;
  }

  let result: React.ReactNode[] = [text];

  links.forEach(({ placeholder, link }) => {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return part;

      const parts = part.split(placeholder);
      if (parts.length === 1) return part;

      const elements: React.ReactNode[] = [];
      parts.forEach((p, idx) => {
        if (p) elements.push(p);
        if (idx < parts.length - 1) {
          elements.push(
            <AccentLink
              key={`${link.text}-${idx}`}
              href={link.href}
              linkColor={linkColor || "#E8A4B8"}
              linkHoverColor={linkHoverColor || "#F0B8C8"}
            >
              {link.text}
            </AccentLink>
          );
        }
      });
      return elements;
    });
  });

  return result;
}

export default function MikeMcAlister2022({
  mode = "light",
  title = "Meet Mike",
  name = "Mike",
  profileImage = IMAGES.profile.path,
  paragraphs = [
    {
      text: "For 15 years, I've been hard at work founding, growing, and selling delightful digital products that are used and loved by hundreds of thousands of creators across the web.",
    },
    {
      text: "As a seasoned designer, I'm passionate about solving complex problems with pixels by combining research, clever technology, and thoughtful design. As a principal engineer, I'm passionate about leading teams, leveling-up coworkers, and curating a culture of quality that breathes life into products and consistently drives results.",
    },
    {
      text: "With this formula, I've launched and grown multiple projects from ground zero to over a million dollars in revenue before, ultimately, being acquired.",
    },
    {
      text: "Right now, I'm working as a Principal Software Engineer at {wpEngine}, leading the effort to revolutionize WordPress with industry-leading design and dev tools. I'm also working on the {liftoffCourse}, an effort to share everything I've learned about creating and selling successful digital products.",
      links: [
        {
          placeholder: "{wpEngine}",
          link: { text: "WP Engine", href: "https://wpengine.com" },
        },
        {
          placeholder: "{liftoffCourse}",
          link: { text: "Liftoff Course", href: "#" },
        },
      ],
    },
    {
      text: "Off the clock, you can find me {takingPhotos}, {exploringCosmos}, playing guitar and bass, making beats, woodworking, tinkering with electronics, and taking epic road trips with my wife, Mandi.",
      links: [
        {
          placeholder: "{takingPhotos}",
          link: { text: "taking photos", href: "#" },
        },
        {
          placeholder: "{exploringCosmos}",
          link: { text: "exploring the cosmos", href: "#" },
        },
      ],
    },
  ],
}: MikeMcAlister2022Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="relative w-full max-w-4xl">
        {/* Background glow effect */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div
            className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[100px]"
            style={{ backgroundColor: colors.glowPrimary }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full blur-[80px]"
            style={{ backgroundColor: colors.glowSecondary }}
          />
        </div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl p-8 sm:p-10 lg:p-12 backdrop-blur-sm"
          style={{
            borderWidth: "1px",
            borderColor: colors.cardBorder,
            background: colors.cardBackground,
          }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left content - Text */}
            <div className="flex-1 space-y-5">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl italic"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  color: colors.title,
                }}
              >
                {title}
              </motion.h1>

              {/* Paragraphs */}
              <div className="space-y-4">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: colors.text,
                    }}
                  >
                    {renderParagraphWithLinks(paragraph.text, paragraph.links, colors.link, colors.linkHover)}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Right content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 20, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="shrink-0 lg:w-[280px]"
            >
              <div className="relative">
                {/* Image frame/border effect */}
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-[#3A3555]/50 to-[#2A2545]/30" />
                <div className="relative overflow-hidden rounded-lg border-4 border-[#2A2545]/60 shadow-xl shadow-black/30">
                  <Image
                    src={profileImage}
                    alt={name}
                    width={280}
                    height={350}
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
