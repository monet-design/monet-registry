"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import "./font.css";

interface LinkItem {
  text: string;
  href: string;
}

interface MikeMcAlister2022Props {
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
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#E8A4B8] hover:text-[#F0B8C8] transition-colors"
    >
      {children}
    </a>
  );
}

function renderParagraphWithLinks(
  text: string,
  links?: { placeholder: string; link: LinkItem }[]
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
            <AccentLink key={`${link.text}-${idx}`} href={link.href}>
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
  title = "Meet Mike",
  name = "Mike",
  profileImage = "https://picsum.photos/seed/mikemcalister2022/400/500",
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
  return (
    <section className="w-full min-h-screen bg-[#131224] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-4xl">
        {/* Background glow effect */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-900/20 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-indigo-900/15 blur-[80px]" />
        </div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl border border-[#2A2640]/50 bg-gradient-to-br from-[#1A1830]/80 via-[#1E1A38]/70 to-[#221E3A]/60 p-8 sm:p-10 lg:p-12 backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left content - Text */}
            <div className="flex-1 space-y-5">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl text-[#E8C4C4] italic"
                style={{ fontFamily: "'Instrument Serif', serif" }}
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
                    className="text-sm leading-relaxed text-[#B8B6C0]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {renderParagraphWithLinks(paragraph.text, paragraph.links)}
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
