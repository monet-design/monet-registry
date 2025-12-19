"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#000000",
    textSecondary: "#2A2A2A",
    buttonPrimary: "#262626",
    buttonPrimaryHover: "#000000",
    buttonSecondary: "#FFFFFF",
    buttonSecondaryBorder: "#E0E4EB",
    buttonSecondaryHover: "#F5F7FA",
  },
  dark: {
    background: "#0A0A0A",
    text: "#FFFFFF",
    textSecondary: "#A1A1A1",
    buttonPrimary: "#FFFFFF",
    buttonPrimaryHover: "#E5E5E5",
    buttonSecondary: "#1A1A1A",
    buttonSecondaryBorder: "#3A3A3A",
    buttonSecondaryHover: "#262626",
  },
} as const;

/**
 * Feature card 데이터
 */
const DEFAULT_FEATURES = [
  {
    id: "gen-4-5",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=600&fit=crop",
    title: "Gen-4.5: A New Frontier for Generative Video",
    description:
      "Gen-4.5 is the world's best video model, featuring state-of-the-art motion quality, prompt adherence and visual fidelity.",
    buttons: [
      { label: "Try now", href: "#", variant: "primary" as const },
      { label: "Learn more", href: "#", variant: "secondary" as const },
    ],
  },
  {
    id: "gwm-robotics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
    title: "GWM Robotics: General World Models for Robotics",
    description:
      "Simulate physical interactions and robotic behaviors through learned world models. Learn and predicted how actions unfold.",
    buttons: [
      { label: "Explore the Research", href: "#", variant: "secondary" as const },
    ],
  },
  {
    id: "gwm-worlds",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    title: "GWM Worlds: Interactive and Explorable World Models",
    description:
      "A new frontier for open-ended interactive world simulation. A way of building infinite explorable realities in real-time.",
    buttons: [
      { label: "Explore the Research", href: "#", variant: "secondary" as const },
    ],
  },
  {
    id: "gwm-avatars",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=600&fit=crop",
    title: "GWM Avatars: Real-time Video Agents",
    description:
      "Fully autonomous and real-time virtual video agents capable of natural conversation and contextual awareness.",
    buttons: [
      { label: "Learn more", href: "#", variant: "secondary" as const },
    ],
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface FeatureButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

interface Feature {
  id: string;
  image: string;
  title: string;
  description: string;
  buttons: FeatureButton[];
}

interface RunwaymlComFeature2Props {
  mode?: "light" | "dark";
  title?: string;
  features?: Feature[];
}

export default function RunwaymlComFeature2({
  mode = "light",
  title = "AI is changing how stories are told, \nhow scientific progress is made and how \nthe next frontiers of humanity are reached.",
  features = DEFAULT_FEATURES,
}: RunwaymlComFeature2Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="py-12 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-11/12 md:w-full lg:w-14/16 mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2
              className="text-3xl leading-none tracking-tight whitespace-pre-line"
              style={{ color: colors.text }}
            >
              {title}
            </h2>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-4 mt-9">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                colors={colors}
                isDark={isDark}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: Feature;
  colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"];
  isDark: boolean;
  index: number;
}

function FeatureCard({ feature, colors, isDark, index }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-start relative"
    >
      <a
        href="#"
        className="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="aspect-square w-full rounded-lg overflow-hidden mb-5 relative">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover transition-transform duration-200 ease-linear group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center transition-opacity duration-200 ease-linear ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              type="button"
              className="font-semibold inline-flex items-center justify-center gap-2 py-1 px-2 text-sm leading-5 rounded text-white bg-transparent hover:bg-[#1A1A1A] transition-all duration-150"
            >
              Learn more
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h4
          className="text-2xl leading-none mb-2"
          style={{ color: colors.text }}
        >
          {feature.title}
        </h4>

        {/* Description */}
        <p
          className="leading-tight"
          style={{ color: colors.textSecondary }}
        >
          {feature.description}
        </p>
      </a>

      {/* Buttons */}
      <div className="flex flex-row gap-2 mt-4 text-sm font-medium items-center">
        {feature.buttons.map((button, btnIndex) => (
          <a
            key={btnIndex}
            href={button.href}
            className={`font-semibold inline-flex items-center justify-center gap-2 py-1 px-2 text-sm leading-5 rounded transition-all duration-150 mt-4 ${
              button.variant === "primary"
                ? isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-neutral-800 text-white hover:bg-black"
                : isDark
                ? "bg-[#1A1A1A] text-white outline outline-1 outline-[#3A3A3A] -outline-offset-1 hover:bg-[#262626]"
                : "bg-white text-[#1A1A1A] outline outline-1 outline-[#E0E4EB] -outline-offset-1 hover:bg-[#F5F7FA]"
            }`}
          >
            {button.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
