"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    gradientFrom: "#2B4FF5", // About 섹션 그라데이션 시작 (파란색)
    gradientTo: "#6E10F4", // About 섹션 그라데이션 끝 (보라색)
  },
  dark: {
    gradientFrom: "#2B4FF5",
    gradientTo: "#6E10F4",
  },
} as const;

const IMAGES = {
  profile: {
    path: "/registry/mike-mcalister-bio/profile.jpg",
    alt: "Professional profile photo",
    prompt: `Professional headshot portrait in outdoor setting.
Style: Natural, warm, approachable photography
Layout: Portrait orientation, head and shoulders
Composition: Subject smiling at camera, casual yet professional
Background: Softly blurred outdoor natural environment
Color palette: Warm skin tones, natural lighting
Mood: Friendly, approachable, confident
Technical: High resolution, shallow depth of field`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { ReactNode } from "react";
import { motion } from "motion/react";
import "./font.css";

// Types
interface Link {
  text: string;
  href: string;
}

interface MikeMcAlisterBioProps {
  mode?: "light" | "dark";
  // Hero Section
  heroHeadline?: string;
  heroIntro?: string;
  heroCtaText?: string;
  heroCtaLink?: string;
  profileImage?: string;

  // About Section
  aboutHeading?: string;
  aboutParagraphs?: {
    left: string[];
    right: string[];
  };
  links?: Link[];
  signatureName?: string;
}

// Default content
const defaultAboutParagraphs = {
  left: [
    "For over a decade, I've been hard at work crafting quality digital products that empower hundreds of thousands of creators on the web. I'm humbled to see my products play a small part in helping folks launch their own products, build beautiful and effective websites, grow audiences, and make money online.",
    "I learned the ropes in the digital product space by creating bespoke products for WordPress, an expansive open-source software that powers nearly 40% of the Internet. Designing, coding, and marketing products for distribution to such a diverse and crowded ecosystem has taught me a lot about people and the need for human-centered solutions that rise above the noise.",
    "Along the way, I found my niche, learned to listen, researched, measured, and stayed \"sharks-with-frickin'-laser-beams-attached\" focused on solving the right problems with products that people love using and recommending.",
  ],
  right: [
    "With this formula, I've launched and grown multiple projects from ground zero to over a million dollars in revenue before, ultimately, being acquired. And, I still have a whole pocket full of ideas I haven't gotten to yet!",
    "Right now, I'm working as a Senior Software Engineer at WP Engine, leading the effort to revolutionize website creation in WordPress with industry-leading design and dev tools. I'm also working on the Liftoff Course, an effort to share everything I've learned about creating and selling successful digital products.",
    "Off the clock, you can find me taking photos, exploring the cosmos, playing guitar and bass, making beats, woodworking, tinkering with electronics, and taking epic road trips with my wife, Mandi.",
  ],
};

const defaultLinks: Link[] = [
  { text: "WP Engine", href: "#" },
  { text: "Liftoff Course", href: "#" },
  { text: "taking photos", href: "#" },
  { text: "exploring the cosmos", href: "#" },
  { text: "guitar", href: "#" },
  { text: "bass", href: "#" },
  { text: "woodworking", href: "#" },
  { text: "Mandi", href: "#" },
];

// Signature SVG Component
function SignatureSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 30C8 15 12 8 18 8C24 8 20 25 25 25C30 25 35 15 40 12C45 9 42 28 48 28C54 28 58 18 62 15C66 12 70 22 75 20C80 18 85 12 90 15C95 18 100 25 105 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M95 28L115 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Helper function to render text with links
function renderTextWithLinks(text: string, links: Link[]): ReactNode[] {
  let result: ReactNode[] = [text];

  links.forEach((link) => {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return part;

      const parts = part.split(link.text);
      if (parts.length === 1) return part;

      return parts.flatMap((p, i) => {
        if (i === parts.length - 1) return p;
        return [
          p,
          <a
            key={`${link.text}-${i}`}
            href={link.href}
            className="underline underline-offset-2 transition-opacity hover:opacity-70"
          >
            {link.text}
          </a>,
        ];
      });
    });
  });

  return result;
}

// Main Component
export default function MikeMcAlisterBio({
  mode = "light",
  heroHeadline = "Human-centered problem solver from planet Earth.",
  heroIntro = "Heya friend, I'm Mike McAlister. I design and build killer products for the web, and",
  heroCtaText = "I can teach",
  heroCtaLink = "#",
  profileImage = IMAGES.profile.path,
  aboutHeading = "About Me",
  aboutParagraphs = defaultAboutParagraphs,
  links = defaultLinks,
  signatureName = "Mike",
}: MikeMcAlisterBioProps) {
  const colors = COLORS[mode];
  return (
    <div className="mike-mcalister-bio w-full">
      {/* Hero Section */}
      <section className="bg-white px-6 py-16 sm:px-8 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h1 className="font-dm-serif text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                {heroHeadline}
              </h1>

              <p className="mt-6 text-base leading-relaxed text-gray-800 sm:text-lg">
                {heroIntro}{" "}
                <a
                  href={heroCtaLink}
                  className="underline underline-offset-2 transition-opacity hover:opacity-70"
                >
                  {heroCtaText}
                </a>{" "}
                you how to do it too. Let&apos;s do this!
              </p>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 flex justify-center lg:order-2 lg:justify-end"
            >
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
                <img
                  src={profileImage}
                  alt={IMAGES.profile.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        className="px-6 py-16 sm:px-8 md:py-20 lg:px-16 lg:py-24"
        style={{
          background: `linear-gradient(to right, ${colors.gradientFrom}, ${colors.gradientTo})`,
        }}
      >
        <div className="mx-auto max-w-6xl">
          {/* About Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-dm-serif mb-10 text-3xl font-bold italic text-white sm:text-4xl md:mb-12 md:text-5xl"
          >
            {aboutHeading}
          </motion.h2>

          {/* Two Column Text */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {aboutParagraphs.left.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-white/90 sm:text-base"
                >
                  {renderTextWithLinks(paragraph, links)}
                </p>
              ))}
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {aboutParagraphs.right.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-white/90 sm:text-base"
                >
                  {renderTextWithLinks(paragraph, links)}
                </p>
              ))}

              {/* Signature */}
              <div className="pt-4">
                <SignatureSvg className="h-10 w-24 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
