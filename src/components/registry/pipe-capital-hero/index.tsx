"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  dark: {
    background: "#09090B",
  },
} as const;

const IMAGES = {
  dashboard: {
    path: "/registry/pipe-capital-hero/dashboard.png",
    alt: "Dashboard interface",
    prompt: `Business dashboard interface screenshot.
Style: Modern SaaS dashboard, clean UI
Layout: Dashboard with charts and metrics
Elements: Data visualization, KPI cards, graphs
Color palette: Professional blue/purple tones
Mood: Data-driven, business intelligence
Technical: PNG, 16:9 aspect ratio`,
  },
  businessPeople: {
    path: "/registry/pipe-capital-hero/business-people.png",
    alt: "Business professionals",
    prompt: `Professional business people collaborating.
Style: Natural, candid business photography
Layout: Group of professionals in modern office
Composition: Diverse team, professional attire
Color palette: Natural tones, professional setting
Mood: Collaborative, successful, professional
Technical: High resolution, good lighting`,
  },
  arrows: {
    path: "/registry/pipe-capital-hero/arrows.png",
    alt: "Growth arrows",
    prompt: `Upward trending arrows graphic.
Style: Abstract, modern data visualization
Layout: Arrows pointing upward
Elements: Growth indicators, trend lines
Color palette: Blues, purples, success colors
Mood: Growth, progress, success
Technical: Clean graphic, transparent background`,
  },
  workspace: {
    path: "/registry/pipe-capital-hero/workspace.png",
    alt: "Workspace",
    prompt: `Modern workspace setup.
Style: Clean, minimal workspace photography
Layout: Desk with laptop, minimal accessories
Composition: Top-down or angled view
Color palette: Neutral, professional tones
Mood: Productive, organized, professional
Technical: High quality, sharp focus`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Wallet, CreditCard, RefreshCw, Zap } from "lucide-react";
import Image from "next/image";

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

interface ImageCard {
  src: string;
  alt: string;
  className?: string;
}

interface PipeCapitalHeroProps {
  mode?: "dark";
  tagline?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  description?: string;
  features?: FeatureItem[];
  images?: ImageCard[];
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: <Wallet className="w-4 h-4" />,
    text: "Click, connect, and unlock capital",
  },
  {
    icon: <CreditCard className="w-4 h-4" />,
    text: "One flat fee with no hidden interest",
  },
  {
    icon: <RefreshCw className="w-4 h-4" />,
    text: "Automatic payments that flex with sales",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    text: "Frictionless payouts in just days",
  },
];

const defaultImages: ImageCard[] = [
  {
    src: "/registry/pipe-capital-hero/dashboard.png",
    alt: "Dashboard interface",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/registry/pipe-capital-hero/business-people.png",
    alt: "Business professionals",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/registry/pipe-capital-hero/arrows.png",
    alt: "Growth arrows",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/registry/pipe-capital-hero/workspace.png",
    alt: "Workspace",
    className: "col-span-1 row-span-2",
  },
];

export default function PipeCapitalHero({
  mode = "dark",
  tagline = "GROW ON YOUR TERMS",
  title = "The modern capital platform",
  subtitle = "For growth on your terms",
  buttonText = "Unlock Capital",
  onButtonClick,
  description = "We're eliminating the friction and bias of traditional financing, connecting business builders to quick, easy capital, and helping small to mid-size businesses build something bigger.",
  features = defaultFeatures,
  images = defaultImages,
}: PipeCapitalHeroProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] text-zinc-500 uppercase mb-6"
        >
          {tagline}
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-8"
        >
          {title}
          <br />
          {subtitle}
        </motion.h1>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={onButtonClick}
          className="px-6 py-3 border border-zinc-600 rounded-full text-white text-sm hover:bg-white/10 transition-colors duration-300"
        >
          {buttonText}
        </motion.button>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 h-[300px] md:h-[350px]"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative rounded-2xl overflow-hidden bg-zinc-800"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-base md:text-lg text-white max-w-xl leading-relaxed"
        >
          <span className="text-white font-medium">
            We&apos;re eliminating the friction and bias of traditional financing,
          </span>
          <br />
          <span className="text-zinc-400">
            connecting business builders to quick, easy capital, and
            <br />
            helping small to mid-size businesses build something bigger.
          </span>
        </motion.p>

        {/* Features strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 pt-8 border-t border-zinc-800"
        >
          <div className="flex flex-wrap gap-6 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 text-zinc-400 text-sm"
              >
                <span className="text-zinc-500">{feature.icon}</span>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
