"use client";

import { motion } from "motion/react";
import Image from "next/image";

import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface StephanieBruceProps {
  mode?: "light" | "dark";
  landscapeImageSrc?: string;
  portraitImageSrc?: string;
  headline?: string;
  sectionTitle?: string;
  introText?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
}

export default function StephanieBruce({
  mode = "light",
  landscapeImageSrc = "/registry/stephanie-bruce/landscape.jpg",
  portraitImageSrc = "/registry/stephanie-bruce/portrait.jpg",
  headline = "I'M ALL ABOUT CREATING\nSOMETHING THAT FEELS UNIQUE,\nFROM WILD IDEAS\nTO A POLISHED WEBSITE.",
  sectionTitle = "A BIT ABOUT ME",
  introText = "Hey there! I'm an Independent Web Designer and Webflow/Framer Developer, partnering with cutting-edge branding studios and agencies around the globe.",
  paragraph1 = "I enjoy collaborating with creative teams to create something that feels unique, from wild ideas to a polished website.",
  paragraph2 = "Previously working as a Finance Business Partner, I have experience in strategic thinking, managing stakeholders, and presenting ideas.",
  paragraph3 = "My photography experience has also trained my eye to catch those little visual details and focus on balance and composition in my designs.",
}: StephanieBruceProps) {
  return (
    <section className="font-dm-sans relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      {/* Photo Gallery Section */}
      <div className="relative mx-auto flex max-w-4xl justify-center pb-10 pt-8 sm:pb-16 sm:pt-12">
        {/* Landscape Photo - Left, tilted */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 -mr-8 sm:-mr-16"
        >
          <div className="relative h-[200px] w-[140px] overflow-hidden shadow-2xl sm:h-[300px] sm:w-[200px] lg:h-[360px] lg:w-[240px]">
            <Image
              src={landscapeImageSrc}
              alt="Landscape photography"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Portrait Photo - Right, tilted */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 6 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-20 mt-8 sm:mt-12"
        >
          <div className="relative h-[240px] w-[180px] overflow-hidden shadow-2xl sm:h-[340px] sm:w-[260px] lg:h-[400px] lg:w-[300px]">
            <Image
              src={portraitImageSrc}
              alt="Portrait photography"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Headline Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mx-auto max-w-4xl py-10 text-center sm:py-14 lg:py-16"
      >
        <h1 className="whitespace-pre-line text-2xl font-semibold uppercase italic leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          {headline}
        </h1>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mx-auto max-w-5xl pt-8 sm:pt-12"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Section Title */}
          <div className="flex-shrink-0 lg:w-48">
            <h2 className="text-sm font-medium uppercase tracking-wider text-white">
              {sectionTitle}
            </h2>
          </div>

          {/* Content Paragraphs */}
          <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:gap-8">
            {/* Column 1 - Intro */}
            <div className="flex-1">
              <p className="text-sm leading-relaxed text-neutral-400">
                {introText}
              </p>
            </div>

            {/* Column 2 - Paragraphs */}
            <div className="flex flex-1 flex-col gap-5">
              <p className="text-sm leading-relaxed text-neutral-400">
                {paragraph1}
              </p>
              <p className="text-sm leading-relaxed text-neutral-400">
                {paragraph2}
              </p>
              <p className="text-sm leading-relaxed text-neutral-400">
                {paragraph3}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
