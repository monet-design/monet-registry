"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface DreamfluxAiHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: string[];
  headlineLine1?: string;
  headlineLine2?: string;
  headlineLine3?: string;
  subheadline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  userCount?: string;
  userCountLabel?: string;
  signInText?: string;
  getStartedText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Logo Icon Component
function DreamfluxLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="#1a1a1a"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Header Component
function Header({
  logoText,
  navItems,
  signInText,
  getStartedText,
}: {
  logoText: string;
  navItems: string[];
  signInText: string;
  getStartedText: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-4"
      role="banner"
    >
      <div className="flex items-center gap-2">
        <DreamfluxLogo className="h-5 w-5" />
        <span className="text-[15px] font-semibold text-[#1a1a1a]">
          {logoText}
        </span>
      </div>

      <nav className="hidden items-center gap-7 md:flex">
        {navItems.map((item, index) => (
          <a
            key={item}
            href="#"
            className={`text-[13px] transition-colors ${
              index === 0
                ? "font-medium text-[#1a1a1a]"
                : "text-[#888888] hover:text-[#1a1a1a]"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="hidden text-[13px] text-[#1a1a1a] transition-colors hover:text-[#6b6b6b] sm:block">
          {signInText}
        </button>
        <button className="rounded-full bg-[#1a1a1a] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#333]">
          {getStartedText}
        </button>
      </div>
    </motion.div>
  );
}

// User Avatars Component
function UserAvatars({
  userCount,
  userCountLabel,
}: {
  userCount: string;
  userCountLabel: string;
}) {
  const avatars = [
    "https://picsum.photos/seed/user1/100/100",
    "https://picsum.photos/seed/user2/100/100",
    "https://picsum.photos/seed/user3/100/100",
    "https://picsum.photos/seed/user4/100/100",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex items-center gap-3"
    >
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white"
          >
            <Image
              src={avatar}
              alt={`User ${index + 1}`}
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="text-sm">
        <span className="text-[#1a1a1a]">Join with </span>
        <span className="font-semibold text-[#1a1a1a]">{userCount}</span>
        <span className="text-[#6b6b6b]"> {userCountLabel}</span>
      </div>
    </motion.div>
  );
}

// Marquee image data
const leftColumnImages = [
  { src: "https://picsum.photos/seed/dog-sofa/400/300", alt: "AI generated image of dog and girl on sofa", aspectRatio: "aspect-[4/3]" },
  { src: "https://picsum.photos/seed/blue-velvet-chair/400/400", alt: "AI generated blue velvet chair", aspectRatio: "aspect-square" },
  { src: "https://picsum.photos/seed/forest-cabin/400/350", alt: "AI generated forest cabin", aspectRatio: "aspect-[4/3.5]" },
  { src: "https://picsum.photos/seed/neon-city/400/300", alt: "AI generated neon city", aspectRatio: "aspect-[4/3]" },
];

const rightColumnImages = [
  { src: "https://picsum.photos/seed/woman-portrait-braids/400/600", alt: "AI generated portrait of woman", aspectRatio: "aspect-[2/3]" },
  { src: "https://picsum.photos/seed/alarm-clock-vintage/400/300", alt: "AI generated vintage alarm clock", aspectRatio: "aspect-[4/3]" },
  { src: "https://picsum.photos/seed/sunset-beach/400/500", alt: "AI generated sunset beach", aspectRatio: "aspect-[4/5]" },
  { src: "https://picsum.photos/seed/robot-friend/400/350", alt: "AI generated robot friend", aspectRatio: "aspect-[4/3.5]" },
];

// Marquee Column Component
function MarqueeColumn({
  images,
  direction = "down",
}: {
  images: typeof leftColumnImages;
  direction?: "up" | "down";
}) {
  const isDown = direction === "down";

  return (
    <div
      className="relative h-[500px]"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <div
        className={`flex flex-col gap-2.5 ${isDown ? "animate-marquee-down" : "animate-marquee-up"}`}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className={`relative w-full overflow-hidden rounded-xl ${image.aspectRatio}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 300px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Image Grid Component
function ImageGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="grid grid-cols-2 gap-2.5"
    >
      {/* Left column - scrolls down */}
      <MarqueeColumn images={leftColumnImages} direction="down" />

      {/* Right column - scrolls up */}
      <MarqueeColumn images={rightColumnImages} direction="up" />
    </motion.div>
  );
}

// Main Component
export default function DreamfluxAiHero({
  mode = "light",
  logoText = "Dreamflux.ai",
  navItems = ["Home", "Features", "Pricing", "Gallery", "Community"],
  headlineLine1 = "Turn Your Ideas",
  headlineLine2 = "into Stunning",
  headlineLine3 = "Visuals with AI",
  subheadline = "Describe anything you imagine, and let our AI bring it to life in breathtaking, high-quality images.",
  primaryCtaText = "Start Creating",
  secondaryCtaText = "Explore Gallery",
  userCount = "2700+ Users",
  userCountLabel = "and start generating images now",
  signInText = "Sign In",
  getStartedText = "Get Started",
  onPrimaryCtaClick = () => {},
  onSecondaryCtaClick = () => {},
}: DreamfluxAiHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F7F7F6]">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Header
          logoText={logoText}
          navItems={navItems}
          signInText={signInText}
          getStartedText={getStartedText}
        />

        {/* Hero Content */}
        <div className="flex flex-col gap-12 py-12 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-8">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-semibold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-[3.5rem]"
            >
              {headlineLine1}
              <br />
              {headlineLine2}
              <br />
              {headlineLine3}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md text-sm leading-relaxed text-[#6b6b6b]"
            >
              {subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                onClick={onPrimaryCtaClick}
                className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]"
              >
                <Sparkles className="h-4 w-4" />
                {primaryCtaText}
              </button>
              <button
                onClick={onSecondaryCtaClick}
                className="rounded-full border border-[#d4d4d4] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-colors hover:border-[#999] hover:bg-white"
              >
                {secondaryCtaText}
              </button>
            </motion.div>

            {/* User Avatars */}
            <UserAvatars userCount={userCount} userCountLabel={userCountLabel} />
          </div>

          {/* Right side - Image Grid */}
          <div className="flex-1">
            <ImageGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
