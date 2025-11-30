"use client";

import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

interface StatItem {
  value: string;
  suffix?: string;
  description: string;
  highlight?: string;
}

interface HelpScoutInboxHeroProps {
  headline?: string;
  subheadline?: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  {
    value: "25",
    suffix: "%",
    description: "Our customers' CSAT scores are ",
    highlight: "25% higher than the industry average.",
  },
  {
    value: "56",
    suffix: "%",
    description: "Respond to ",
    highlight: "56% more customer messages in the first year.",
  },
  {
    value: "36",
    suffix: "%",
    description: "Resolve ",
    highlight: "36% more emails when you use our AI features",
  },
  {
    value: "4",
    suffix: "x",
    description: "Handle ",
    highlight: "4x as many conversations with our automation tools",
  },
];

// Stats Card Component
function StatCard({
  stat,
  index,
}: {
  stat: StatItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col"
    >
      {/* Value with arrow */}
      <div className="flex items-end gap-1 mb-4">
        <span className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
          {stat.value}
        </span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 mb-1">
          {stat.suffix}
        </span>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          className="ml-2 mb-3"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-[#6B8AE5] stroke-[2.5]" />
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-white/70 leading-relaxed">
        {stat.description}
        {stat.highlight && (
          <span className="text-white font-medium">{stat.highlight}</span>
        )}
      </p>
    </motion.div>
  );
}

// Product Screenshot Component
function ProductScreenshot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-5xl mx-auto"
    >
      {/* Shadow container */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/20">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>
    </motion.div>
  );
}

export default function HelpScoutInboxHero({
  headline = "The all-inclusive conversation\ndestination",
  subheadline = "Relax, everything you need to manage all of your conversations is available in Help Scout. You'll be basking in the glow of inbox zero in no time.",
  screenshotSrc = "/registry/help-scout-inbox-hero/inbox-screenshot.png",
  screenshotAlt = "Help Scout inbox interface showing customer conversations",
  stats = defaultStats,
}: HelpScoutInboxHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Top section - Off-white background */}
      <div className="relative bg-[#FBF9F7] pt-16 md:pt-24 pb-0">
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1f4e] leading-[1.1] tracking-tight whitespace-pre-line mb-6"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#5a5f7a] leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16"
          >
            {subheadline}
          </motion.p>

          {/* Product Screenshot */}
          <ProductScreenshot src={screenshotSrc} alt={screenshotAlt} />
        </div>
      </div>

      {/* Bottom section - Dark navy background */}
      <div className="relative bg-[#171A52] pt-16 md:pt-24 pb-16 md:pb-24">
        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
