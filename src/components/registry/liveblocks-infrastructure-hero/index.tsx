"use client";

import { motion } from "motion/react";
import { ArrowRight, Globe, Settings, TrendingUp, Wrench } from "lucide-react";
import Image from "next/image";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface LiveblocksInfrastructureHeroProps {
  label?: string;
  heading?: string;
  ctaText?: string;
  ctaHref?: string;
  features?: FeatureCard[];
  hexagonImageSrc?: string;
}

const defaultFeatures: FeatureCard[] = [
  {
    icon: <Globe className="w-6 h-6" strokeWidth={1.5} />,
    title: "Collaboration infrastructure",
    description: "WebSocket edge infrastructure and reliable connection engine.",
  },
  {
    icon: <Settings className="w-6 h-6" strokeWidth={1.5} />,
    title: "Zero configuration",
    description: "Scale to millions. No complex configuration required.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
    title: "Effortless scaling",
    description: "Built to handle any traffic on your collaborative experiences.",
  },
  {
    icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
    title: "No maintenance required",
    description: "Spend your time building, not maintaining infrastructure.",
  },
];

export default function LiveblocksInfrastructureHero({
  label = "INFRASTRUCTURE",
  heading = "Build, host, and scale\nyour collaborative product",
  ctaText = "Sign up for free",
  ctaHref = "#",
  features = defaultFeatures,
  hexagonImageSrc = "/registry/liveblocks-infrastructure-hero/hexagon-3d.png",
}: LiveblocksInfrastructureHeroProps) {
  return (
    <section className="relative w-full bg-black">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 pt-24 pb-20">
        {/* 3D Hexagon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Image
            src={hexagonImageSrc}
            alt="Infrastructure hexagon"
            width={120}
            height={120}
            className="object-contain"
          />
        </motion.div>

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#5C5C5C] text-sm tracking-[0.2em] uppercase mb-6"
        >
          {label}
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-10 font-serif italic"
          style={{ whiteSpace: "pre-line" }}
        >
          {heading}
        </motion.h1>

        {/* CTA Button */}
        <motion.a
          href={ctaHref}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Feature Cards Section */}
      <div className="w-full bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#2a2a2a]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-8"
              >
                <div className="text-white mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
